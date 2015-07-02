angular.module('AdminDashBoard', ['ngRoute', 'ngResource', 'ngMessages', 'ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/dashboard', {
                controller: 'ListController',
                templateUrl: 'views/main_content.html'
            })
            .when('/userList', {
                controller: 'UserController',
                templateUrl: 'views/user.html'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
        $locationProvider.html5Mode(true);
    });
