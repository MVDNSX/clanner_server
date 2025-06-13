const Member = require('../models/Member')

class memberController {
  async updateProfile(req, res) {
    const member_id = req.member_id
    const {...fields} = req.body

    try {

      await Member.update({
        ...fields
      }, {
        where: {id:member_id},
        fields: ['nickname', 'pa', 'pz', 'fs', 'class_id']
      })
      
      const updatedMember = await Member.findOne({
        where: {id:member_id}
      })
      res.status(200).json({message: 'ok', updatedMember})
    } catch (error) {
      console.error('Ошибка сохранения данных пользователя', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (updateProfileMember)'})
    }
  }

  
  
}

module.exports = new memberController