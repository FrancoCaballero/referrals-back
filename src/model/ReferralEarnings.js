const { Schema, model } = require('mongoose')

const ReferralEarningsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    default: 0,
    required: true
  },
})

module.exports = model('ReferralEarnings', ReferralEarningsSchema)