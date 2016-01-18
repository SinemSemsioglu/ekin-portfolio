app.directive("homeNav",
    function () {
        return {
            replace: true,
            restrict: "E",
            controller: "homeNavController",
            controllerAs: "homeNav",
            templateUrl: "templates/home-nav/home-nav.html"
        };
    });