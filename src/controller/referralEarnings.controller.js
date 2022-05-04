const ReferralEarnings = require('../model/ReferralEarnings')

// get by userId
exports.getByUserId = async (req, res) => {
  try{
    const referralEarnings = await ReferralEarnings.find({userId: req.params.userId})
    res.send(referralEarnings)
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
    
    res.send('ReferralEarnings creado!')
  } catch(error) {
    return res.send(error.message)
  }
}

exports.update = async (req, res) => {
  try{
    const { userId, amount } = req.body
    if (!userId || !amount) return res.send('Usuario y monto son requeridos')

    const referralEarnings = await ReferralEarnings.findOneAndUpdate({ userId }, { amount }, { new: true })
    res.send(referralEarnings)
  } catch(error) {
    return res.send(error.message)
  }
}