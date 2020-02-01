var express = require('express')
const app = express()
var socket = require('socket.io')
var server = app.listen('4000', function() {
    console.log("server connecting ...........")
})

app.get('/', function(req, res) {
    res.sendFile('D:/chat-application/public/first.html')
})
var io = socket(server)
io.on('connection', function(socket) {
    console.log("make a socket")
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data)

    })


})