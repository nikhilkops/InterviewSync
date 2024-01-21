import socketIOClient from 'socket.io-client';

const socketLink = `/api/v1`;
const socket = socketIOClient(socketLink,{
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,  // milliseconds
    reconnectionDelayMax: 5000,  // milliseconds
  }); // Replace with your server URL

export default socket;