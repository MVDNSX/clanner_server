const Router = require('express')
const router = new Router()

const accessValidate = require('../middleware/accessValidate.middleware')
const profileController = require('../controller/profileController')

router.patch('/', accessValidate, profileController.updateProfile)




module.exports = router