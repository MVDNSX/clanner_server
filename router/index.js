const Router = require('express')
const router = new Router()

const declorationRouter = require('./declorationRouter')
router.use('/decloration', declorationRouter)
module.exports = router