const Router = require('express')
const router = new Router()
const memberControllet = require('../controller/memberController')

router.post('/getProfileMember', memberControllet.getProfileMember)

router.get('/getAllMember', memberControllet.getAllMember)
router.post('/updateRoleMember', memberControllet.updateRoleMember)
router.post('/updateProfileMember', memberControllet.updateProfileMember)


module.exports = router