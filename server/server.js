const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

  socket.emit('wellcome', {
    from: 'Admin',
    text: 'Wellcome to the chat App'
  });

  socket.broadcast.emit('newUser', {
    from: 'Admin',
    text: 'New user joined',
    createAt: new Date().getTime()
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);

    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      createAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: newMessage.from,
    //   text: newMessage.text,
    //   createAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

});

server.listen(port, () => {
  console.log(`Server is up in port ${port}`);
});
