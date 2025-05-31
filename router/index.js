const Router = require('express')
const router = new Router()

const initRouter = require('./initRouter')
const declarationRouter = require('./declarationRouter')
const memberRouter = require('./memberRouter')
const eventRouter = require('./eventRouter')
const partyRouter = require('./partyRouter')
const attendanceRouter = require('./attendanceRouter')


router.use('/init', initRouter)
router.use('/declaration', declarationRouter)
router.use('/member', memberRouter)
router.use('/event', eventRouter)
router.use('/party', partyRouter)
router.use('/attendance', attendanceRouter)
module.exports = router