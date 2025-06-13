const Router = require('express')
const router = new Router()
const memberController = require('../controller/memberController')
const accessValidate = require('../middleware/accessValidate.middleware')

router.post('/updateProfile', accessValidate, memberController.updateProfile)


module.exports = router