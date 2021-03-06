var app=angular.module('myApp',[])
.directive('myFirstDirective',function(){
    return {
        restrict : 'EA',
        scope : {
            name : '@',
            age : '=',
            func : '&'
        },
        template : ['<p>Value of name in directive : {{name}}</p>',
                    '<p>Enter new "name" : <input type="text" ng-model="name"></p>',
                    '<p>Value of age in Directive is : {{age}}</p>',
                    '<p>Enter new "age" : <input type="text" ng-model="age">',
                    '<p><input type="button" value="From Directive" ng-click="func()">'].join('')
    }
})
.controller('myCtrl',function($scope){
    $scope.name="Arush",
    $scope.age=100,
    $scope.alertTheName = function(){
        alert($scope.name)
    }
})