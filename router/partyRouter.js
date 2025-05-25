const Router = require('express')
const router = new Router()
const partyControllet = require('../controller/partyController')

router.get('/getAllParty', partyControllet.getAllParty)
router.post('/createParty', partyControllet.createParty)
router.post('/chooseLeader', partyControllet.chooseLeader)
router.post('/getMemberParty', partyControllet.getMemberParty)



module.exports = router