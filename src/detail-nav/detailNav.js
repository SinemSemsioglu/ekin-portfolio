app.directive("detailNav",
    function () {
        return {
            replace: true,
            restrict: "E",
            controller: "detailNavController",
            controllerAs: "detailNav",
            templateUrl: "templates/detail-nav/detail-nav.html"
        };
    });