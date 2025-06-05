const Router = require('express')
const router = new Router()
const initController = require('../controller/initController');
const accessValidate = require('../middleware/accessValidate.middleware')

router.post('/auth', accessValidate, initController.auth)

module.exports = router