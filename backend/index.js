const express = require('express')

const server = express()

server.get('/teste', () =>{
    console.log('RODOU')
})

server.listen(3000)
