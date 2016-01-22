app.directive("imageSection",
    [function () {
        return {
            replace: true,
            restrict: "E",
            scope: {
                image: "="
            },
            templateUrl: "templates/components/image-section/image-section.html"
        };
    }]);