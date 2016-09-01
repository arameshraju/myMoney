var app=angular.module('mealApp', ['ngRoute']);
app.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/login', {
                templateUrl : 'views/login.html',
                controller  : 'loginCtrl'
            })
            .when('/dashboard', {
                templateUrl : 'views/dash.html',
                controller  : 'defaultCtrl'
            })
            .otherwise('/login');
    });
app.controller('rootCtrl',function($scope){
   $scope.name="Ramesh";
    
    
});