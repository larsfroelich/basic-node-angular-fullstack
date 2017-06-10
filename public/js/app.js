'use strict';

// Declare app-level angular-module
var app = angular.module('App', 	[	'ngRoute']);

app.filter("sanitize", ['$sce', function($sce) { // todo get rid of this - use ngsanitize
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}]);

app.run(function($rootScope, $window, $http) {
    // rootScope-functions and vars for all scopes
});

var deepEquals = function (x, y) {
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;
        for (var prop in x) {
            if (y.hasOwnProperty(prop))
            {
                if (! deepEquals(x[prop], y[prop]))
                    return false;
            }
            else
                return false;
        }
        return true;
    }
    else return x === y;
};
