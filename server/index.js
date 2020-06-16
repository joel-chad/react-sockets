const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const port = 5000;

const server = http.createServer(app);

const socketList = []

const io = socketIO(server);

io.on('connection', (socket)=>{
    console.log('Connected')
    console.log(socket.id)
    socketList.push(socket.id)
    console.log(socketList.length)


    socket.on('disconnect', ()=>{
        console.log('user disconnected');
        socketList.splice(socketList.indexOf(socket), 1)
    })

    socket.on('change color',(color)=>{
        console.log(`colour changed to ${color}`)
        io.sockets.emit('change color', color)
    })

    socket.on('message', (message, sender)=>{
        console.log(message)
        console.log(sender)
        io.sockets.emit('message', message, sender);
        // socket.broadcast('notification', [notification])
    })

    // socket.on('send request', (receiver)=>{
    //     console.log('request sent')
    //     io.sockets.emit('send request',receiver)
    // })

    // socket.on('accept request', (receiver)=>{
    //     console.log('request accepted')
    //     io.sockets.emit('request accepted')
    // })

})

server.listen(port, ()=>{
    console.log(`Listening on Port ${port}...`)
})
