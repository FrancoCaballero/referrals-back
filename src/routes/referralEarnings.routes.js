const { Router } = require('express')

const { add, update, getAll } = require('../controller/referralEarnings.controller')

const router = Router()

router.get('/referral-earnings', getAll)
router.post('/referral-earnings', add)
router.put('/referral-earnings/:id', update)

module.exports = router