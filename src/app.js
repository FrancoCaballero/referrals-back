const express = require('express')
const morgan = require('morgan')

const userRoutes = require('./routes/user.routes')
const invitationRoutes = require('./routes/invitation.routes')
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(userRoutes)
app.use(invitationRoutes)

module.exports = app