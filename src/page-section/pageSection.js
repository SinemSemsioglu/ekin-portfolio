app.directive("pageSection",
    ["$window",
        function ($window) {
        return {
            replace: true,
            restrict: "E",
            scope: {
                section: "="
            },
            link: function (scope, element) {
                //elementVerticalOffset = scope.section.;
                windowVerticalOffset = $window.pageYOffset;
                windowHeight = $window.innerHeight;

                if (elementVerticalOffset - windowVerticalOffet >= 0){
                    element.addClass("selected");
                }
            },
            templateUrl: "templates/page-section/page-section.html"
        };
    }]);