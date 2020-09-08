const router = require('express').Router()
const controller = require('../../controllers/userController')

module.exports = db => {
    router.post('/', controller.update(db))
    router.get('/me', controller.getProfile(db))
    router.get('/whoami', controller.whoami)

    return router
}
