const Router = require('express')
const router = new Router()
const partyControllet = require('../controller/partyController')

router.get('/getMemberParty', partyControllet.getMemberParty)
router.get('/getAllParty', partyControllet.getAllParty)
router.post('/createParty', partyControllet.createParty)
router.post('/chooseLeader', partyControllet.chooseLeader)



module.exports = router