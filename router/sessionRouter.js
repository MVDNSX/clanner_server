const Router = require('express')
const router = new Router()
const sessionController = require('../controller/sessionController');
const validateInitData = require('../middleware/validateInitData.middleware')

router.post('/', sessionController.getSessionData)

module.exports = router