const { Attendance, Event, Party, PartyMember, Member } = require('../models')


class attendanceController {

  async updateStatus(req,res){
    const member_id = req.member_id
    const {event_id, status} = req.body
    try {
      let record = await Attendance.findOne({
        where:{
          member_id,
          event_id
        }
      })

      if(record){
        record.status = status;
        await record.save()
      }else{
        record = await Attendance.create({
          event_id,
          member_id,
          status
        })
      }

      res.status(200).json({message: 'ok', attendances: record})
      
    } catch (error) {
      console.error('Ошибка обработки запроса (updateStatus)', error)
      res.status(401).json({message: 'Ошибка обработки запроса (updateStatus)'})
    }
  }
}

module.exports = new attendanceController