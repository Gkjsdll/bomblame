angular.module("bomblame").controller("playCtrl", function($scope) {
  let arr = []
  for(let i = 0; i < 64; i++) {
    arr.push(i);
  }
  $scope.squares = arr.slice(0);
});
