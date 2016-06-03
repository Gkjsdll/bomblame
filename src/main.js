var app = angular.module("bomblame", ["btford.socket-io", "ui.router", "uiRouterStyles"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./play/play.html",
      controller: "playCtrl",
      data: {
        css: ["play/play.css"]
      }
    });
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
});

app.factory("socket", function(socketFactory) {
  return socketFactory();
});
