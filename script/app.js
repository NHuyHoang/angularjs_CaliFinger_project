var app = angular.module('main-module',['ngRoute','ngAnimate']);

app.config(['$routeProvider',($routeProvider) => {
    $routeProvider
        .when('/view1',{
            templateUrl: 'view/view1.html'
        })
        .when('/view2',{
            templateUrl: 'view/view2.html'
        })
}]);

app.controller('controller1',['$scope','$location','$http',($scope,$location,$http) => {
    $scope.arr = 0;
    $scope.var1 = "huy hoang";
    $scope.navigate1 = (path) => {
        console.log(path);
        $scope.arr++;
        console.log( $scope.arr);
        $location.path( path );
    };
    $scope.getData = () => {
        $http.post('http://jsonplaceholder.typicode.com/posts',{somedata:'somedata'})
            .then(result => console.log(result))
    }

}])