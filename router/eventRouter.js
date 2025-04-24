const Router = require('express')
const router = new Router()
const eventController = require('../controller/eventController')

router.get('/getEvents', eventController.getEvents)
router.get('/getActiveEvents', eventController.getActiveEvents)
router.post('/activatedEvent', eventController.activatedEvent)
router.post('/deactivatedEvent', eventController.deactivatedEvent)



module.exports = router