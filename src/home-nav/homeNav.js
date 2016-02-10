app.directive("homeNav",
    function () {
        return {
            replace: true,
            restrict: "E",
            controller: "homeNavController",
            controllerAs: "homeNav",
           // bindToController: true,
            templateUrl: "templates/home-nav/home-nav.html"
        };
    });