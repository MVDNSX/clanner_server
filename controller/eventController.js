const { Attendance } = require('../models')

class eventController {
  async markAttendance(req, res){
    try {
      const {id} = req.userData
      const eventId = req.params.eventId
      const {status} = req.body
      console.log('userID:', id, 'eventID:', eventId, 'Status: ', status)

      const [attendance, created] = await Attendance.findOrCreate(
        {
          where:{event_id: eventId, member_id: id},
          defaults:{
            status
          }
        }
      )

      if(!created){
        attendance.status = status
        if(status === false){
          attendance.party_id = null
        }
        await attendance.save()
      }

      console.log(attendance)
      console.log(created)
      res.status(200).json({
        success: true,
        data:{
          attendance
        }
      })
      
    } catch (error) {
      console.log('+++ Ошибка (markAttendance) +++')
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

module.exports = new eventController