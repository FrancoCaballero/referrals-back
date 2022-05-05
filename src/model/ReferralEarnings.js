const { Schema, model } = require('mongoose')
const { UserSchema } = require('./User')

const ReferralEarningsSchema = new Schema({
  user: {
    type: UserSchema,
    ref: 'User',
    required: true
  },
  invitations: {
    type: Number,
    default: 0
  },
  amount: {
    type: Number,
    default: 0,
    required: true
  },
})

module.exports = model('ReferralEarnings', ReferralEarningsSchema)