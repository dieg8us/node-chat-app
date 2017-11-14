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

  // wellcome message to all users
  socket.emit('newMessage', generateMessage('Admin', 'Wellcome to the chat App'));

  // message for all user less the new user joined
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  // return messages from server to all users
  socket.on('createMessage', (message, callback) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

});

server.listen(port, () => {
  console.log(`Server is up in port ${port}`);
});
