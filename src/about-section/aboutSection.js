app.directive("aboutSection",
    ["appUtil", function (appUtil) {
        return {
            replace: true,
            restrict: "E",
            scope: {
                section: "="
            },
            link: function (scope, element) {
                element.css("background-color", scope.section.color.background);
                element.css("color", scope.section.color.font);

                scope.mobile = appUtil.isScreenNarrow();
            },
            templateUrl: "templates/about-section/about-section.html"
        };
    }]);