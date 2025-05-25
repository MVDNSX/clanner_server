const Router = require('express')
const attendancesController = require('../controller/attendancesController')
const router = new Router()
//const declarationController = require('../controller/declarationController');

router.post('/update', attendancesController.updateStatus)

module.exports = router