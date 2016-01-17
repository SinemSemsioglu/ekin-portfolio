app.directive("pageSection",
    ["$window", "appUtil",
        function ($window, appUtil) {
        return {
            replace: true,
            restrict: "E",
            scope: {
                section: "="
            },
            link: function (scope, element) {
                element.css("background-color", scope.section.color.background);
                element.css("color", scope.section.color.font);
                var elementVerticalOffset = $(element).offset().top;
                var windowVerticalOffset = appUtil.getWindowVerticalOffset();
                var screenHeight = appUtil.getScreenHeight();


                var buttonClasses = "." + scope.section.class + ".nav-button-wrapper";
                var navElement = $(document).find(buttonClasses);

                var diff = elementVerticalOffset - windowVerticalOffset;

                //console.log(scope.section.class + ": element" + elementVerticalOffset + ", window" + windowVerticalOffset );
                //console.log(scope.section.class + ": " + diff);

                if (diff >= 0 && diff <= screenHeight / 2){
                    element.addClass("selected");
                    navElement.addClass("selected");
                } else {
                    element.removeClass("selected");
                    navElement.removeClass("selected");
                }
            },
            templateUrl: "templates/page-section/page-section.html"
        };
    }]);