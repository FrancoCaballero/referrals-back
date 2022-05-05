const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const userRoutes = require('./routes/user.routes')
const invitationRoutes = require('./routes/invitation.routes')
const referralEarningsRoutes = require('./routes/referralEarnings.routes')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(userRoutes)
app.use(invitationRoutes)
app.use(referralEarningsRoutes)

module.exports = app