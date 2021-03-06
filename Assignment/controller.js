var app = angular.module('myApp', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "Dashboard.html",
                controller: "Dashboard"
            })
            .when("/Feedback", {
                templateUrl: "Feedback.html",
                controller: "Feedback"
            })
            .when("/Employee", {
                templateUrl: "Employees.html"
            })
            .when("/Dashboard", {
                templateUrl: "Dashboard.html",
                controller: "Dashboard"
            })
    })
    .controller('Dashboard', function ($scope, $http) {
        $scope.EmployeeJoined = 5
        $scope.EmployeeJoining = 4
        $scope.OrientationCount = 3
        $scope.FeedbackCount = 9
        $scope.persons = [
            {
                "id": "001",
                "name": "abc",
                "joiningDate": "01-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "30-March-202"
            },
            {
                "id": "002",
                "name": "abd",
                "joiningDate": "02-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "31-March-202"
            },
            {
                "id": "003",
                "name": "abe",
                "joiningDate": "03-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "team Meeting",
                "nextTrainingDate": "30-March-202"
            },
            {
                "id": "004",
                "name": "abf",
                "joiningDate": "04-March-2020",
                "trainingCompleted": "0",
                "nextTraining": "CEO Confrence",
                "nextTrainingDate": "30-March-202"
            },
            {
                "id": "005",
                "name": "abg",
                "joiningDate": "05-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "31-March-202"
            },
            {
                "id": "006",
                "name": "abh",
                "joiningDate": "06-March-2020",
                "trainingCompleted": "0",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "31-March-202"
            },
            {
                "id": "007",
                "name": "abi",
                "joiningDate": "04-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "CEO Confrence",
                "nextTrainingDate": "29-March-202"
            },
            {
                "id": "008",
                "name": "abj",
                "joiningDate": "02-March-2020",
                "trainingCompleted": "0",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "29-March-202"
            },
            {
                "id": "009",
                "name": "abk",
                "joiningDate": "10-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "1-April-202"
            },
            {
                "id": "010",
                "name": "abl",
                "joiningDate": "11-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "team Meeting",
                "nextTrainingDate": "1-April-202"
            },
            {
                "id": "011",
                "name": "aab",
                "joiningDate": "12-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "1-April-202"
            },
            {
                "id": "012",
                "name": "aac",
                "joiningDate": "13-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "team Meeting",
                "nextTrainingDate": "2-April-202"
            },
            {
                "id": "013",
                "name": "aad",
                "joiningDate": "14-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "3-April-202"
            },
            {
                "id": "014",
                "name": "aae",
                "joiningDate": "15-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "Manager's Meet",
                "nextTrainingDate": "3-April-202"
            },
            {
                "id": "015",
                "name": "acc",
                "joiningDate": "16-March-2020",
                "trainingCompleted": "0",
                "nextTraining": "CEO Confrence",
                "nextTrainingDate": "4-April-202"
            },
            {
                "id": "016",
                "name": "aaa",
                "joiningDate": "17-March-2020",
                "trainingCompleted": "1",
                "nextTraining": "team Meeting",
                "nextTrainingDate": "5-April-202"
            }
        ]
        // var refresh = function () {


        //     $http.get('data.json')
        //         .then(function (response) {
        //             angular.forEach(response.data,function(v,k){
        //                 $scope.persons.push(v);
        //             })
        //             console.log(response.data);
        //             console.log($scope.persons);
        //         })
        // }
        // refresh();
        console.log($scope.persons);
        // $scope.searchFilter={
        //     "id":"",
        //     "name":"",
        //     "trainingCompleted":""
        // }
        // $scope.searchitem=function(){
        //     console.log($scope.searchFilter);
        //     if($scope.searchFilter===$scope.persons.id){
        //         return true
        //     }
        //     return false
        // }
    })
    .controller('Feedback', function ($scope, $http) {
        $scope.persons = []
        var refresh = function () {


            $http.get('data.json')
                .then(function (response) {
                    angular.forEach(response.data, function (v, k) {
                        $scope.persons.push(v);
                    })
                    console.log(response.data);
                    console.log($scope.persons);
                })
        }
        refresh();
        console.log($scope.persons);
    })
    .controller('myCtrl', function ($scope, $location) {
        $scope.func1 = function () {
            $location.path('/Dashboard')
        }
        $scope.func2 = function () {
            $location.path('/Employee')
        }
        $scope.func3 = function () {
            $location.path('/Feedback')
        }
    })
