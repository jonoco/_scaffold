var myApp = angular.module('myApp', 
  ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/welcome.html',
    controller:  'WelcomeController'  
  })
  .otherwise({
      redirectTo: '/'
  });
}]);