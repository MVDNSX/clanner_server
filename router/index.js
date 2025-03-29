const Router = require('express')
const router = new Router()

const declarationRouter = require('./declarationRouter')
router.use('/declaration', declarationRouter)
module.exports = router