const { connect } = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27018/referrals'

;(async () => {
  try {
    const db = await connect(MONGODB_URI)
    console.log("Db connectect to", db.connection.name)
  } catch (error) {
    console.error(error)
  }
})();