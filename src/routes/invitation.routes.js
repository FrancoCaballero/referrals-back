const { Router } = require('express')

const { add, getById } = require('../controller/invitation.controller')

const router = Router()

router.get('/invitation/:id', getById)
router.post('/invitation', add)

module.exports = router