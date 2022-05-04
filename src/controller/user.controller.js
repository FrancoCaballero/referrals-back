const User = require('../model/User')
const Invitation = require('../model/Invitation')
const ReferralEarnings = require('../model/ReferralEarnings')

const REFERRAL_AMOUNT = 5000

exports.getAll = async (req, res) => {
  try{
    const users = await User.find()
    res.send(users)
  } catch(error) {
    return res.send(error.message)
  }
}

exports.getById = async (req, res) => {
  try{
    const user = await User.findById(req.params.id)
    res.send(user)
  } catch(error) {
    return res.send(error.message)
  }
}

// get by email
exports.getByEmail = async (req, res) => {
  try{
    const user = await User.findOne({email: req.params.email})
    res.send(user)
  } catch(error) {
    return res.send(error.message)
  }
}

exports.add = async (req, res) => {
  try{
    const user = new User(req.body)
    await user.save()
    
    res.send('Usuario creado!')
  } catch(error) {
    return res.send(error.message)
  }
}

// add by invitation
exports.addByInvitation = async (req, res) => {
  try{
    // find invitation by id
    const invitation = await Invitation.findById(req.params.invitationId)
    if (!invitation) return res.send('Invitación no encontrada')

    const user = new User(req.body)
    await user.save()

    // findRefreralEarnings by userId
    const referralEarnings = await ReferralEarnings.findOne({userId: invitation.userId})
    if (!referralEarnings) {
      const newReferralEarnings = new ReferralEarnings({ userId: invitation.userId, amount: REFERRAL_AMOUNT })
      await newReferralEarnings.save()
    } else {
      referralEarnings.amount += REFERRAL_AMOUNT
      await referralEarnings.save()
    }

    const newUserReferralEarnings = new ReferralEarnings({ userId: user._id, amount: REFERRAL_AMOUNT })
    await newUserReferralEarnings.save()

    res.send('Usuario creado!')
  } catch(error) {
    return res.send(error.message)
  }
}

// updateUser
exports.update = async (req, res) => {
  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(user)
  } catch(error) {
    console.log(error.message)
    return res.send(error.message)
  }
}


