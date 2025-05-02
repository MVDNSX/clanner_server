const Router = require('express')
const router = new Router()
const memberController = require('../controller/memberController')

router.post('/getProfileMember', memberController.authUser)

router.get('/getAllMember', memberController.getAllMember)
router.post('/updateRoleMember', memberController.updateRoleMember)
router.post('/updateProfileMember', memberController.updateProfileMember)


module.exports = router