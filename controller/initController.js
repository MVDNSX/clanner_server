const Member = require('../models/Member')
const Role = require('../models/Role')
const GameClass = require('../models/GameClass')
const Event = require('../models/Event')
const Attendance = require('../models/Attendance')

class initController {

  async init(req, res) {
    const telegram_id = '5616481223'
 
    try {
      const member = await Member.findOne({
        where:{telegram_id},
        attributes: ['id', 'nickname', 'pa', 'pz', 'fs', 'role_id', 'class_id']
      })

      if(!member){
        throw new Error('Пользователь не найден');
      }

      const [roles, classes, events, attendances] = await Promise.all([
      
      Role.findAll({
        attributes:['id', 'role_name']
      }),
      GameClass.findAll({
        attributes: ['id', 'class_name', 'icon_url']
      }),
      Event.findAll({
        where: {is_active: true},
        attributes:['id', 'event_name', 'start_date', 'is_active', 'commentary', 'opponent', 'banner_url'],
        order: [['start_date', 'ASC']]
      }),

      Attendance.findAll({
        where: {
          member_id: member.id,
        },
        attributes: ['event_id', 'status', 'party_id'],
      })
    ])

    res.status(200).json({status:'ok', member, roles, classes, events, attendances })

    } catch (error) {
      console.log('+++ Ошибка инициации (init) +++')
      console.log(error)
      res.status(500).json({ error: 'Ошибка при загрузке данных (init)' })
    }
}
}

module.exports = new initController