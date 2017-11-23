app.controller('headerCtrl', function($scope, $http, $location) {
    $scope.headerItems = [
        {title: "Home", link: "/"},
        {title: "Link", link: "/link"}
    ];
    $scope.currentHeaderItem = $scope.headerItems.findIndex(function(t){return t.link === $location.$$url;});
});
