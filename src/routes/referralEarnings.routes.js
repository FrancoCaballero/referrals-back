const { Router } = require('express')

const { add, update } = require('../controller/referralEarnings.controller')

const router = Router()

router.post('/referralEarnings', add)
router.put('/referralEarnings/:id', update)