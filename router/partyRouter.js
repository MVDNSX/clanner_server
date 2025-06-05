const Router = require('express')
const router = new Router()
const partyControllet = require('../controller/partyController')
const accessValidate = require('../middleware/accessValidate.middleware')

router.get('/:party_id/members', accessValidate, partyControllet.getMembers)
//router.post('/createParty', partyControllet.createParty)
//router.post('/chooseLeader', partyControllet.chooseLeader)
//router.post('/getMemberParty', partyControllet.getMemberParty)



module.exports = router