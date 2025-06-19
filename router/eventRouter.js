const Router = require('express')
const router = new Router()
const eventController = require('../controller/eventController')
const accessValidate = require('../middleware/accessValidate.middleware')

router.post('/:eventId/attendance', accessValidate, eventController.markAttendance)

module.exports = router