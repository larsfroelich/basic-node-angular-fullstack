app.controller('headerCtrl', function($scope, $http) {
    console.log("this is the headerctrl")

    $scope.headerItems = [
        {title: "Home", link: "/"},
        {title: "Link", link: "/link"}
    ];
    $scope.currentHeaderItem = "";

});
