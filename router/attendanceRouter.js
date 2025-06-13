const Router = require('express')
const attendancesController = require('../controller/attendancesController')
const accessValidate = require('../middleware/accessValidate.middleware')
const router = new Router()

router.post('/updateStatus', accessValidate,  attendancesController.updateStatus)

module.exports = router