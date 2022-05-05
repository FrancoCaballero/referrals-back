const { Router } = require('express')

const { add, addByInvitation, update, getAll, getById, getByEmail } = require('../controller/user.controller')

const router = Router()

router.get('/user', getAll)
router.get('/user/:id', getById)
router.get('/user/:email', getByEmail)
router.post('/user', add)
router.post('/user/invitation/:invitationId', addByInvitation)
router.put('/user/:id', update)

module.exports = router