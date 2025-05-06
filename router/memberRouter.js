const Router = require('express')
const router = new Router()
const memberController = require('../controller/memberController')

router.post('/authMember', memberController.authMember)

router.get('/getAllMember', memberController.getAllMember)
router.post('/updateRoleMember', memberController.updateRoleMember)
router.post('/updateProfileMember', memberController.updateProfileMember)


module.exports = router