const app = require('./app')
require('dotenv').config();
require('./db/mongoose')

const port = process.env.PORT || 3005

app.listen(port);
console.log(`server on port ${port}`);
