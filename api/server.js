const express = require('express')

const server = express()


server.use(express.json())

server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)



server.get('/ ', (req, res) => {
  res.status(200).json({ api: 'is up and running' })
})

module.exports = server
