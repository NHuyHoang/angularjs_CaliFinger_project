var app = angular.module('main-module',['ngRoute','ngAnimate']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/view1',{
            templateUrl: 'view/view1.html'
        })
        .when('/view2',{
            templateUrl: 'view/view2.html'
        })
}]);

app.controller('controller1',['$scope','$location','$http',function($scope,$location,$http){
    $scope.arr = 0;
    $scope.var1 = "ng----hyhoang";
    $scope.navigate1 = function(path){
        console.log(path);
        $scope.arr++;
        console.log( $scope.arr);
        $location.path( path );
    };
    $scope.getData = function(){
        $http.post('http://jsonplaceholder.typicode.com/posts',{somedata:'somedata'})
            .then(function(result){console.log(result)})
    }

}])