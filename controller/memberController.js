const Member = require('../models/Member')
const Role = require('../models/Role')
const GameClass = require('../models/GameClass')
const Event = require('../models/Event')
const Attendance = require('../models/Attendance')
const { Party, PartyMember } = require('../models')
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

  async authMember(req, res) {
    const {telegram_id} = req.body
    try {
      const member = await Member.findOne({
        where: {telegram_id},
        attributes:{
          exclude: ['role_id', 'class_id']
        },
        include:[
          {model: Role, as:'member_role'},
          {model: GameClass, as:'member_class'}
        ]
      })
      if(!member){
        res.status(200).json({status: 'not_found', message: 'Пользователь не найден' })
      }

      const events = await Event.findAll({
        where: {is_active: true},
        order: [['start_date', 'ASC']]
      })

      const attendances = await Attendance.findAll({
        where: {
          member_id: member.id,
          status: true
        }
      })

        res.status(200).json({
          status: 'ok',
          profile: {
            id: member.id,
            telegram_id: member.telegram_id,
            name: member.name,
            role: member.member_role.role_name,
            class: member.member_class.class_name,
            pa: member.pa,
            pz: member.pz,
            fs: member.fs,
          } ,
          events,
          attendances
        })

    } catch (error) {
      console.error('Ошибка получения пользователя', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (getProfileMember)'})
    }
  }

  async updateProfileMember(req, res) {
    try {
      const {telegram_id, ...fields} = req.body

      await Member.update({
        ...fields
      }, {
        where: {telegram_id},
        fields: ['nickname', 'pa', 'pz', 'fs', 'class_id']
      })
      
      const updMember = await Member.findOne({
        where: {telegram_id}
      })
      res.status(200).json(updMember)
    } catch (error) {
      console.error('Ошибка сохранения данных пользователя', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (updateProfileMember)'})
    }
  }

  
}

module.exports = new memberController