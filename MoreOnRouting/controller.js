var app=angular.module('myApp',['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'login.html'
    })
    .when('/dashboard',{
        resolve:{
            "check": function($location,$rootScope){
                if(!$rootScope.loggedIn)
                {
                    $location.path('/');
                }
            }
        },  
        templateUrl:'dashboard.html'
    })
    .otherwise({
        redirectTo:'/'
    })
})
.controller('myCtrl',function($scope,$location,$rootScope){
    $scope.submit=function(){
        // var uname=$scope.username
        // var pass=$scope.password
        if($scope.username=='admin' && $scope.password=='admin')
        {
            $rootScope.loggedIn=true;
            $location.path('/dashboard')
        }else{
            alert('Invalid Username and password')
        }
    }
})
