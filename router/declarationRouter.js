const Router = require('express')
const router = new Router()
const declarationController = require('../controller/declarationController');

router.post('/create', declarationController.processInit)

module.exports = router