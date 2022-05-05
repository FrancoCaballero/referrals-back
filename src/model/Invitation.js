const { Schema, model } = require('mongoose')

const InvitationSchema = new Schema({
  userId: {
    type: String,
    ref: 'User',
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
})

module.exports = model('Invitation', InvitationSchema)