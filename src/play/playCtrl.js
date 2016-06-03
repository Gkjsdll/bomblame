angular.module("bomblame").controller("playCtrl", function($scope, socket) {
  $scope.testMessage = "";
  $scope.playerCount = "Loading";
  $scope.game = {
    rows: new Array(8),
    columns: new Array(8)
  };

  $scope.sendMessage = function() {
    socket.emit("playerMessage", $scope.testMessage);
    $scope.testMessage = "";
  };

  socket.on("serverMessage", function(msg) {
    console.log(msg);
  });

  socket.on("playerCount", function(count) {
    $scope.playerCount = count;
    console.log(`Players online: ${count}`);
  });
});
