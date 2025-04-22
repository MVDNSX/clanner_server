const Router = require('express')
const router = new Router()

const declarationRouter = require('./declarationRouter')
const memberRouter = require('./memberRouter')
const eventRouter = require('./eventRouter')

router.use('/declaration', declarationRouter)
router.use('/member', memberRouter)
router.use('/event', eventRouter)
module.exports = router