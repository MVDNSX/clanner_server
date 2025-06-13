const Event = require('../models/Event')

class eventController {
  async getActiveEvents(req, res){
    try {
       const activeEvents = await Event.findAll({
        where: {
          is_active: true
        }
       })
       res.status(200).json(activeEvents)
    } catch (error) {
      console.error('Ошибка получения активных ивентов', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (getActiveEvent)'})
    }
  }
}

module.exports = new eventController