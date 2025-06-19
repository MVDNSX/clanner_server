const { GameClass, Member, Role } = require('../models')

class prodileController {

  async updateProfile(req, res){
    try {
      const {id} = req.userData
      const allowedFields = ['nickname', 'pa', 'pz', 'fs', 'class_id']
      const updates = {}

      for(const key of allowedFields){
        if(key in req.body){
          updates[key] = req.body[key]
        }
      }

      if(Object.keys(updates).length === 0){
        res.status(400).json({
          success: false,
          error: {
            code: 'NO_FIELDS',
            message: 'Нет данных для обновления'
          }
        })
      }

      const [updateCount] = await Member.update(updates, {
        where:{
          id
        }
      })

      if(updateCount === 0){
        res.status(404).json({
          success: false,
          error:{
            code:'USER_NOT_FOUND',
            message:'Пользователь не найден'
          }
        })
      }

      const updatedMember = await Member.findByPk(id, 
        {
          attributes: ['id', 'nickname', 'pa', 'pz', 'fs'],
          include:[
            {model: GameClass, as:'character', attributes:['id', 'class_name', 'icon_url']},
            {model: Role, as: 'role', attributes: ['role_name']}
          ]
        })
      
      res.status(200).json({success: true, data: {updatedMember}})
      
    } catch (error) {
      console.log('+++ Ошибка (updateProfile) +++')
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

module.exports = new prodileController