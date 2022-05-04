const Invitation = require('../model/Invitation')
const User = require('../model/User')

exports.add = async (req, res) => {
  try{
    const { email } = req.body
    if (!email) return res.send('Email is required')

    const user = await User.findOne({email})
    if (!user) return res.send('Usuario no encontrado')

    const invitation = new Invitation({ email, userId: user._id })
    await invitation.save()
    
    res.send(invitation)
  } catch(error) {
    return res.send(error.message)
  }
}