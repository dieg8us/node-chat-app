let socket = io();

socket.on('connect', function ()  {

  socket.emit('createMessage', {
    from: 'diego@example.com',
    text: 'Hey!'
  });

});

socket.on('newMessage', function(message) {
  console.log('new message', message);
});
