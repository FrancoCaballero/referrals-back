const Invitation = require('../model/Invitation')
const { UserModel } = require('../model/User')

exports.getById = async (req, res) => {
  try{
    const invitation = await Invitation.findById(req.params.id)
    res.json(invitation)
  } catch(error) {
    console.log(error)
    return res.send(error.message)
  }
}

exports.add = async (req, res) => {
  try{
    const { email } = req.body
    if (!email) throw new Error('Email no encontrado')

    const user = await UserModel.findOne({email})
    if (!user) return res.status(500).json('Usuario no encontrado')

    const foundUser = await UserModel.findOne({email})
    const foundInvitation = await Invitation.findOne({userId: foundUser._id, active: true})

    if (foundInvitation) {
      foundInvitation.active = false
      await foundInvitation.save()
    }

    const invitation = new Invitation({ email, userId: user._id })
    await invitation.save()
    
    res.send(invitation)
  } catch(error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}