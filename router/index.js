const Router = require('express')
const router = new Router()

const sessionRouter = require('./sessionRouter')
const partyRouter = require('./partyRouter')
const profileRouter = require('./profileRouter')

const declarationRouter = require('./declarationRouter')
const memberRouter = require('./memberRouter')
const eventRouter = require('./eventRouter')
const attendanceRouter = require('./attendanceRouter')


router.use('/session', sessionRouter)
router.use('/parties', partyRouter)
router.use('/profile', profileRouter)

router.use('/attendance', attendanceRouter)

router.use('/member', memberRouter)
router.use('/events', eventRouter)
router.use('/declaration', declarationRouter)
module.exports = router