const ReferralEarnings = require('../model/ReferralEarnings')

exports.getAll = async (req, res) => {
  try{
    const referralEarnings = await ReferralEarnings.find()
    res.json(referralEarnings)
  } catch(error) {
    return res.status(500).json(error.message)
  }
}

exports.getByUserId = async (req, res) => {
  try{
    const referralEarnings = await ReferralEarnings.find({user: {_id: req.params.userId}})
    res.json(referralEarnings)
  } catch(error) {
    return res.send(error.message)
  }
}

exports.add = async (req, res) => {
  try{
    const { userId, amount } = req.body
    if (!userId || !amount) return res.send('Usuario y monto son requeridos')

    const referralEarnings = new ReferralEarnings({ userId, amount })
    await referralEarnings.save()
    
    res.json(referralEarnings)
  } catch(error) {
    return res.send(error.message)
  }
}

exports.update = async (req, res) => {
  try{
    const { userId, amount } = req.body
    if (!userId || !amount) return res.send('Usuario y monto son requeridos')

    const referralEarnings = await ReferralEarnings.findOneAndUpdate({ userId }, { amount }, { new: true })
    res.json(referralEarnings)
  } catch(error) {
    return res.send(error.message)
  }
}