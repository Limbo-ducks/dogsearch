const router = require('express').Router()
const controller = require('../../controllers/userController')

module.exports = db => {
    router.post('/', controller.update(db))

    return router
}
