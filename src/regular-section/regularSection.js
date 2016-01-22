app.directive("regularSection",
    [function () {
        return {
            replace: true,
            restrict: "E",
            scope: {
                section: "=",
                goToPortfolioPage: "="
            },
            link: function (scope, element) {
                element.css("background-color", scope.section.color.background);
                element.css("color", scope.section.color.font);
                var imageElement = $($(element).find(".section-image"));
                imageElement.css("background-image","url(\"" + scope.section.image_path + "\")");

            },
            templateUrl: "templates/regular-section/regular-section.html"
        };
    }]);