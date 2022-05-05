const { connect } = require('mongoose')

const MONGO_URL = process.env.MONGO_URL || 'localhost'
const MONGO_PORT = process.env.MONGO_PORT || '27017'
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'referrals'
console.log(`Connecting to mongo at ${MONGO_URL}:${MONGO_PORT}`)

const MONGODB_URI = `mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_DB_NAME}`

;(async () => {
  try {
    const db = await connect(MONGODB_URI)
    console.log("Db connectect to", db.connection.name)
  } catch (error) {
    console.error(error)
  }
})();