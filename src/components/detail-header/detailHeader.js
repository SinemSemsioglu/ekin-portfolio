app.directive("detailHeader",
    [function () {
        return {
            replace: true,
            restrict: "E",
            templateUrl: "templates/components/detail-header/detail-header.html"
        };
    }]);