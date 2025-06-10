app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state({
        name: 'Home',
        url: '/',
        templateUrl: '/pages/home'
	});
	$urlRouterProvider.otherwise("/");
	$locationProvider.html5Mode(true);
}]);
