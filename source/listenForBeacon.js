import io from 'socket.io-client';

function listenForBeacon () {
  // https://socket.io/docs/client-api

  const socket = io();
  // console.log("DEBUG: io() ran");

  // built in error event
  socket.on('error', (error) => {
    console.log("DEBUG: socket error occurred");
  });

  // user event
  socket.on('beacon', (data) => {
    console.log('DEBUG: Server Time: ', data);
  });
}

export default listenForBeacon;