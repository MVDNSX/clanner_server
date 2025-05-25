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
        attributes:['id', 'telegram_id', 'nickname', 'role_id', 'class_id', 'pa', 'pz', 'fs']
      })
      if(!member){
        res.status(200).json({status: 'not_found', message: 'Пользователь не найден' })
      }

      const clanRoles = await Role.findAll()
      const gameClasses = await GameClass.findAll()

      const activeEvents = await Event.findAll({
        where: {is_active: true},
        order: [['start_date', 'ASC']]
      })

      const attendances = await Attendance.findAll({
        where: {
          member_id: member.id,
        },
        attributes: ['status', 'event_id'],
      })

        res.status(200).json({
          status: 'ok',
          member,
          clanRoles,
          gameClasses,
          activeEvents,
          attendances,
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
      
      const updatedMember = await Member.findOne({
        where: {telegram_id}
      })
      res.status(200).json({message: 'ok', updatedMember})
    } catch (error) {
      console.error('Ошибка сохранения данных пользователя', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (updateProfileMember)'})
    }
  }

  
  
}

module.exports = new memberController