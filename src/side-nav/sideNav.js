app.directive("sideNav",
    function () {
        return {
            replace: true,
            restrict: "E",
            controller: "sideNavController",
            controllerAs: "sideNav",
            templateUrl: "templates/side-nav/side-nav.html"
        };
    });