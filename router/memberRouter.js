const Router = require('express')
const router = new Router()
const memberControllet = require('../controller/memberController')

router.get('/getAllMember', memberControllet.getAllMember)
router.get('/getProfileMember', memberControllet.getProfileMember)
router.post('/updateRoleMember', memberControllet.updateRoleMember)


module.exports = router