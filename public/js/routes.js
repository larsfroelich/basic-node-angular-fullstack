app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home'
	});
    /*$routeProvider.when('/test', {
        templateUrl: 'partial/test',
        reloadOnSearch : false
    });*/
	$routeProvider.otherwise({
		redirectTo: '/'});
	$locationProvider.html5Mode(true);
}]);