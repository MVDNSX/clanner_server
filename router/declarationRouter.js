const Router = require('express')
const router = new Router()
const validateMiddleware = require('../middleware/validate.middleware');
const declarationController = require('../controller/declarationController');

router.post('/create', validateMiddleware, declarationController.processInit)

module.exports = router