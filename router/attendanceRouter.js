const Router = require('express')
const attendancesController = require('../controller/attendancesController')
const router = new Router()
//const declarationController = require('../controller/declarationController');

router.post('/goingEvent', attendancesController.goingEvent)
router.post('/skipEvent', attendancesController.skipEvent)

module.exports = router