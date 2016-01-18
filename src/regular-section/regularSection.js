app.directive("regularSection",
    [function () {
        return {
            replace: true,
            restrict: "E",
            scope: {
                section: "="
            },
            link: function (scope, element) {
                element.css("background-color", scope.section.color.background);
                element.css("color", scope.section.color.font);
            },
            templateUrl: "templates/regular-section/regular-section.html"
        };
    }]);