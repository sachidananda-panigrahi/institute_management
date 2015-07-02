angular.module('AdminDashBoard', ['ngRoute', 'ngResource', 'ngMessages'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/dashboard', {
                controller: 'ListController',
                templateUrl: 'views/angular_views/main_content.html'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
        $locationProvider.html5Mode(true);
    })
    .value('options', {})
    .run(function (options, Fields) {
        Fields.get().success(function (data) {
            options.displayed_fields = data;
        });
    });
