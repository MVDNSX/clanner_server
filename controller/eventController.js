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
  async activatedEvent(req, res){
    try {
      const {id, start_date} = req.body
      await Event.update({
        is_active: true,
        start_date
      }, {
        where:{id}
      })
      res.status(200).json({message: 'event status changed'})
    } catch (error) {
      console.error('Ошибка изменения статуса ивента', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (activatedEvent)'})
    }
  }
  async deactivatedEvent(req, res){
    try {
      const {id} = req.body
      await Event.update({
        is_active: false,
        start_date: null,
      }, {
        where:{id}
      })
      res.status(200).json({message: 'event status changed'})
    } catch (error) {
      console.error('Ошибка изменения статуса ивента', error)
      res.status(500).json({message: 'Внутренняя ошибка сервера (deactivatedEvent)'})
    }
  }
}

module.exports = new eventController