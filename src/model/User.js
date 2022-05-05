const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Masculino', 'Femenino'],
    required: true
  }
})

module.exports = {
  UserModel: model('User', UserSchema),
  UserSchema
}