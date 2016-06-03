var clients = 0;

module.exports = function (socket) {
  clients++;
  socket.emit("playerCount", clients);
  socket.broadcast.emit("playerCount", clients);

  console.log(`Players online: ${clients}`);

  socket.on("disconnect", function() {
    clients--;
    socket.broadcast.emit("playerCount", clients);
    console.log(`Players online: ${clients}`);
  });

  socket.on("playerMessage", function(testMsg) {
    console.log(testMsg);
    socket.broadcast.emit("serverMessage", `Server Message: ${testMsg}`);
  });
};
