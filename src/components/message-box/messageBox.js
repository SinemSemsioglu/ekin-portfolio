app.directive("messageBox",
    [function () {
        "use strict";
        return {
            "restrict": "E",
            "replace": true,
            "templateUrl": "templates/components/message-box/message-box.html",
            "link": function (scope) {
                scope.showMessage = true;

                var navWrapper = angular.element(document).find(".navigation-wrapper");
                var nav = navWrapper.find(".navigation");
                navWrapper.css("height", (navWrapper.height() + 20));
                nav.css("top", "20px");

                scope.dismissBox = function () {
                    navWrapper.css("height", (navWrapper.height() - 20));
                    nav.css("top", "0");
                    scope.showMessage = false;
                };
            }
        };
    }]);
