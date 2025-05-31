const Router = require('express')
const router = new Router()
const initController = require('../controller/initController');

router.post('/initApp', initController.init)

module.exports = router