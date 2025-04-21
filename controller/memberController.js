const Member = require('../models/Member')
const Role = require('../models/Role')

class memberController {
  async getAllMember(req, res){
    try {
      const members = await Member.findAll()
      res.status(200).json(members)
    } catch (error) {
      console.error('Ошибка получения пользователей', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (getAllMember)'})
    }
  } 

  async getProfileMember(req, res) {
    const {telegram_id} = req.body
    try {
      const member = await Member.findOne({
        where: {telegram_id}
      })
      if(!member){
        res.status(401).json({message: 'Пользователь не найден'})
      }else{
        res.status(200).json(member)
      }
    } catch (error) {
      console.error('Ошибка получения пользователя', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (getProfileMember)'})
    }
  }

  async updateRoleMember(req, res) {
    const {telegram_id, role_id} = req.body
    try {
      await Member.update({
        role_id
      }, {
        where: {telegram_id}
      })

      const updMember = await Member.findOne({
        where: {telegram_id},
        attributes: {exclude: ['role_id']},
        include: {
          model: Role,
          as: 'member_role',
        }
      })
      res.status(200).json(updMember)
    } catch (error) {
      console.error('Ошибка изменения роли пользователя', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (updateRoleMember)'})
    }
  }
}

module.exports = new memberController