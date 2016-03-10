app.directive("regularSection",
    ["appUtil", "scrollUtil", function (appUtil, scrollUtil) {
        return {
            replace: true,
            restrict: "E",
            scope: {
                section: "="
            },
            controller: "regularSectionController",
            controllerAs: "regularSection",
            bindToController: true,
            link: function (scope, element) {

                var bg_img = scope.regularSection.section.background_image;
                var bg_color = scope.regularSection.section.color.background;
                var font_color =  scope.regularSection.section.color.font;
                var img_path = scope.regularSection.section.image_path;

                if (bg_img) {
                    element.css("background-image", "url(\"" + bg_img + "\")");
                } else {
                    element.css("background-color", bg_color);
                }
                element.css("color", font_color);
                var imageElement = $($(element).find(".section-image"));
                imageElement.css("background-image","url(\"" + img_path + "\")");

                scope.mobile = appUtil.isScreenNarrow();
            },
            templateUrl: "templates/regular-section/regular-section.html"
        };
    }]);