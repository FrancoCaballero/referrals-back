const { Schema, model } = require('mongoose')

const InvitationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
})

module.exports = model('Invitation', InvitationSchema)