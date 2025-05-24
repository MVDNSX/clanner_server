const Router = require('express')
const attendancesController = require('../controller/attendancesController')
const router = new Router()
//const declarationController = require('../controller/declarationController');

router.post('/go', attendancesController.goingEvent)
router.post('/skip', attendancesController.skipEvent)

module.exports = router