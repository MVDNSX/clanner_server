const Router = require('express')
const router = new Router()
const validateMiddleware = require('../middleware/validate.middleware');
const declorationController = require('../controller/declorationController');

router.post('/create', validateMiddleware, declorationController.processInit)

module.exports = router