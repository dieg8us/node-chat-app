const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

  socket.emit('wellcome', generateMessage('Admin', 'Wellcome to the chat App'));

  socket.broadcast.emit('newUser', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

});

server.listen(port, () => {
  console.log(`Server is up in port ${port}`);
});
