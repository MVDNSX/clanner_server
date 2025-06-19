const {Member, Role, GameClass, Event, EventSignup, Group, GroupMember} = require('../models')
const jwt = require('jsonwebtoken')

class sessionController {

  async getSessionData(req, res) { 
    try {
      const telegram_id = req?.userData?.telegramId || '5616481223'
      
      const member = await Member.findOne({
        where:{telegram_id},
        attributes: ['id', 'nickname', 'pa', 'pz', 'fs'],
        include:[
          {model: GameClass, as:'class', attributes:['id', 'class_name', 'icon_url']},
          {model: Role, as: 'role', attributes: ['role_name']}
        ]
      })

      if(!member){
        console.log('Игрок в клане не найден')
        return res.status(401).json({
          success: false,
          error:{
            code: 'USER_NOT_IN_CLAN',
            message: 'Игрок в клане не найден',
          }
        });
      }

      const token = jwt.sign(
      {
        id: member.id,
        role: member.role.role_name
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    )

      const [classes, events, attendances] = await Promise.all([
      
      GameClass.findAll({
        attributes: ['id', 'class_name', 'icon_url']
      }),
      Event.findAll({
        where: {is_active: true},
        attributes:['id', 'event_name', 'start_date', 'is_active', 'commentary', 'opponent', 'banner_url'],
        order: [['start_date', 'ASC']],
        include:[
          {
            model: EventSignup, 
            as: 'signups',
            where: { member_id: member.id},
            required: false
          }
        ]
      }),
    ])


    res.status(200).json({success:true, data:{token, member, classes, events}})

    } catch (error) {
      console.log('+++ Ошибка (getSessionData) +++')
      console.log(error)
      res.status(500).json({
        success:false,  
        error:{ 
          code: 'INTERNAL_SERVER_ERROR', 
          message: 'Internal server error'
        } 
      })
    }
}
}

module.exports = new sessionController