app.directive("aboutSection",
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
            templateUrl: "templates/about-section/about-section.html"
        };
    }]);