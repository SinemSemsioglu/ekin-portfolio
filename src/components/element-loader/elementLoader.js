app.directive("elementLoader",
    [function () {
        "use strict";
        return {
            "restrict": "A",
            "link": function (scope, element) {
                scope.elementIsLoading = true;
                element.load(function () {
                    scope.elementIsLoading = false;
                    scope.$apply();
                });
            }
        };
    }]);
