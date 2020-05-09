const app = require('express')
const io = require('socket.io')


io.on('connection', ()=>{
    console.log('Connected')
})


app.listen('5000', ()=>{
    console.log('connected on Port 4000...')
})