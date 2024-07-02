// public/chat.js
const socket = io();

// Prompt user for room name
const room = prompt('Enter room name:');
if (room) {
  socket.emit('joinRoom', room);
}

document.getElementById('send-button').addEventListener('click', () => {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  if (message) {
    socket.emit('chatMessage', message, room);
    messageInput.value = '';
  }
});

socket.on('message', (msg) => {
  const messages = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
});
