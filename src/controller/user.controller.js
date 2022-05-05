const { UserModel } = require('../model/User')
const Invitation = require('../model/Invitation')
const ReferralEarnings = require('../model/ReferralEarnings')

const REFERRAL_AMOUNT = 5000

exports.getAll = async (req, res) => {
  try{
    const users = await UserModel.find()
    res.json(users)
  } catch(error) {
    return res.send(error.message)
  }
}

exports.getById = async (req, res) => {
  try{
    const user = await UserModel.findById(req.params.id)
    res.json(user)
  } catch(error) {
    return res.send(error.message)
  }
}

// get by email
exports.getByEmail = async (req, res) => {
  try{
    const user = await UserModel.findOne({email: req.params.email})
    res.json(user)
  } catch(error) {
    return res.status(500).send(error.message)
  }
}

exports.add = async (req, res) => {
  try{
    const user = new UserModel(req.body)
    await user.save()
    
    res.json(user)
  } catch(error) {
    console.log(error.message)
    return res.status(500).json(error)
  }
} 

// add by invitation
exports.addByInvitation = async (req, res) => {
  try{
    const invitation = await Invitation.findById(req.params.invitationId)
    if (!invitation) return res.status(500).json(new Error('Invitación no encontrada'))

    const user = new UserModel(req.body)
    await user.save()

    const referralEarnings = await ReferralEarnings.findOne({'user._id': invitation.userId})

    if (!referralEarnings) {
      const invitationUser = await UserModel.findById(invitation.userId)
      const newReferralEarnings = new ReferralEarnings({ user: invitationUser, invitations: 1, amount: REFERRAL_AMOUNT })
      await newReferralEarnings.save()
    } else {
      referralEarnings.invitations += 1
      referralEarnings.amount += REFERRAL_AMOUNT
      await referralEarnings.save()
    }

    const newUserReferralEarnings = new ReferralEarnings({ user, invitations: 1, amount: REFERRAL_AMOUNT })
    await newUserReferralEarnings.save()

    res.json(user)
  } catch(error) {
    return res.status(500).json(error)
  }
}

// updateUser
exports.update = async (req, res) => {
  try{
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(user)
  } catch(error) {
    console.log(error.message)
    return res.send(error.message)
  }
}


