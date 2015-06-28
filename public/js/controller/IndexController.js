/**
 * Created by sachidananda.panigra on 6/25/2015.
 */
console.log('IndexController loaded...');
var app = angular.module('myApp',['angularUtils.directives.dirPagination']);

/*======= Factories =======*/
app.factory('getService', function($http) {

    var getData = function(URL) {

        return $http({method:"GET", url: URL}).then(function(result){
            return result.data;
        });
    };
    return { getData: getData };
});

/*======= Filters =======*/
app.filter('keyFilter', function () {
    return function (obj, query) {
        var result = {};
        angular.forEach(obj, function (val, key) {
            if (key !== query) {
                result[key] = val;
            }
        });
        return result;
    };
}).filter('camelCase', function () {
    return function (input) {
        return input.toLowerCase().replace(/ (\w)/g, function (match, letter) {
            return letter.toUpperCase();
        });
    };
}).filter('labelCase', function () {
    return function (input) {
        input = input.replace(/([A-Z])/g, ' $1');
        return input[0].toUpperCase() + input.slice(1);
    };
}).filter('dateFilter', function () {
    return function (input) {
        if(isNaN(input)){
            var inputCheck = input.split('');
            var inputCheckLength = inputCheck.length;
            if( !isNaN(inputCheck[inputCheckLength-4]) && !isNaN(inputCheck[inputCheckLength-3]) && !isNaN(inputCheck[inputCheckLength-2]) && inputCheck[inputCheckLength-1] == 'Z' ){
                return new Date(input).toDateString();
            }else{
                return input;
            }
        }else{
            return input;
        }
    };
}).filter('genderFilter', function () {
    return function (input) {
        if(isNaN(input)){

            var inputCheck = input.split('');
            var inputCheckLength = inputCheck.length;
            if( isNaN(inputCheck[inputCheckLength-1]) && inputCheckLength == 1 ){
                if(inputCheck[inputCheckLength-1] == 'm' || inputCheck[inputCheckLength-1] == 'M' ){
                    return 'Male';
                }else if(inputCheck[inputCheckLength-1] == 'f' || inputCheck[inputCheckLength-1] == 'F' ){
                    return 'Female';
                }
            }else{
                return input;
            }
        }else{
            return input;
        }
    };
});

/*======= Controllers =======*/
app.controller('userCtrl', function userCtrl($scope, $http, getService) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    var userListURL = "/api/userlist";

    var myDataPromise = getService.getData(userListURL);
    myDataPromise.then(function(result) {  // this is only run after $http completes
        $scope.user = result;
//        console.log(result);
    });

    $scope.sort = function (field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

//    $scope.sort.field = 'birthDate';
//    $scope.sort.order = false;

});