const Router = require('express')
const router = new Router()
const eventController = require('../controller/eventController')

router.get('/getActiveEvents', eventController.getActiveEvents)

module.exports = router