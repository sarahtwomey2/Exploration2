var menuApp = angular.module("menuApp", []);
menuApp.controller("MenuCtrl", function($scope, $http) {
  $scope.menus = [
  {
    title: "Home", 
    action: "http://aoemizzou.com/#page-top" 
  },
  {
    title: "About", 
    action: "http://aoemizzou.com/#about"
  },
  {
      title: "Sisters",
      action: "http://aoemizzou.com/#sisters"
  },
  {
      title: "Recruitment",
      action: "http://aoemizzou.com/#recruitment"
  },
  {
      title: "More",
      action: "http://aoemizzou.com/#more"
  }
]
});
