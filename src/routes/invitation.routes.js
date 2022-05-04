const { Router } = require('express')

const { add } = require('../controller/invitation.controller')

const router = Router()

router.post('/invitation', add)

module.exports = router