const app = require('./app')
require('./db/mongoose')

const port = 3000

app.listen(port);
console.log(`server on port ${port}`);
