const Router = require('express')
const router = new Router()
const eventController = require('../controller/eventController')

router.get('/getEvents', eventController.getEvents)



module.exports = router