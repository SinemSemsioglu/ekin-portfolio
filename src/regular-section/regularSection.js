app.directive("regularSection",
    ["appUtil", "scrollUtil", function (appUtil, scrollUtil) {
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

                var navColor = scope.section.color.nav;

                var navbarElement = element.find(".navigation");
                var logoElement = $(navbarElement.find(".logo"));

                navbarElement.css("color", navColor);
                logoElement.css("background-image", "url(\"/assets/images/logo-" + navColor + ".svg\")");

                scope.mobile = appUtil.isScreenNarrow();

                scope.goToAboutSection = function () {
                    scrollUtil.goToSection(0);
                };

            },
            templateUrl: "templates/regular-section/regular-section.html"
        };
    }]);