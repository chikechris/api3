const server = require('./api/server.js')
const products = require('./api/products/products-router')
const port = 5000

server.listen(port, () => console.log(`\nApi  on port ${port}\n`))
