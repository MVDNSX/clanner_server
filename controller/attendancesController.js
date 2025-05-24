const Attendance = require('../models/Attendance')

Attendance

class attendanceController {
  async goingEvent(req,res){
    const {telegram_id, event_id} = req.body
    try {
      const [record, created] = await Attendance.findOrCreate({
        where: {member_id: telegram_id, event_id},
        defaults:{member_id: telegram_id, event_id, status: true}
      })
      if(!created){
        record.status = true
      }
    } catch (error) {
      console.error('Ошибка обработки запроса (goingEvent)', error)
      res.status(401).json({message: 'Ошибка обработки запроса (goingEvent)'})
    }
  }

  async skipEvent(req,res){
    const {telegram_id, event_id} = req.body
    try {
      const [record, created] = await Attendance.findOrCreate({
        where: {member_id: telegram_id, event_id},
        defaults:{member_id: telegram_id, event_id, status: false}
      })

      if(!created){
        record.status = false
      }

      const dirtyAttendances = await Attendance.findAll({
        where: {
          member_id: member.id,
        },
        attributes: ['status', 'event_id'],
        include: [
          {
            model: Event,
            as: 'attendance_events',
            attributes: ['event_name', 'image_url', 'start_date'],
            include: [
              {
                model: Party,
                as: 'event_parties',
                attributes: ['party_name', 'leader_id'],
                include: [
                  {
                    model: PartyMember,
                    as: 'party_members',
                    include: [
                      {
                        model: Member,
                        as: 'member',
                        attributes: ['id', 'nickname', 'class_id'] // Получаем только никнейм участников
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      })

      const attendances = dirtyAttendances.map(att => {
        const event = att.attendance_events;
        return {
          status: att.status,
          event_id: att.event_id,
          attendance_events: {
            event_name: event.event_name,
            image_url: event.image_url,
            start_date: event.start_date,
            event_parties: event.event_parties.map(party => ({
              party_name: party.party_name,
              leader_id: party.leader_id,
              party_members: (party.party_members || []).map(pm => ({
                id: pm.member?.id,
                nickname: pm.member?.nickname,
                class_id: pm.member?.class_id,
              }))
            }))
          }
        };
      });

      res.status(200).json({
          status: 'ok',
          attendances,
      })
    } catch (error) {
      console.error('Ошибка обработки запроса (skipEvent)', error)
      res.status(401).json({message: 'Ошибка обработки запроса (skipEvent)'})
    }
  }
}

module.exports = new attendanceController