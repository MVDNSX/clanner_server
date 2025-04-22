const Event = require('../models/Event')

class eventController {
  async getEvents(req, res){
    try {
      const events = await Event.findAll()
      res.status(200).json(events)
    } catch (error) {
      console.error('Ошибка получения ивентов', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (getEvents)'})
    }
  } 
}

module.exports = new eventController