app.directive("textSection",
    [function () {
        return {
            replace: true,
            restrict: "E",
            scope: {
                text: "=",
                numberOfColumns: "=",
                annotations: "="
            },
            link: function (scope, element) {
                textContainer = $($(element).find(".text-container"));
                textContainer.css("column-count", scope.numberOfColumns);
            },
            templateUrl: "templates/components/text-section/text-section.html"
        };
    }]);