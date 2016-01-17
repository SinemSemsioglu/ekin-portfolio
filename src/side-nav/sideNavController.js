app.controller("sideNavController",
    ["numberOfSections", "arrayUtil", "$window", "$anchorScroll", "$location",
        function (numberOfSections, arrayUtil, $window, $anchorScroll, $location) {
            this.numberOfSections = arrayUtil.getNumberArray(numberOfSections);

            this.goToSection = function (sectionIndex) {
                var sectionId = "section-" + sectionIndex;
                var buttonClasses = "." + sectionId + ".nav-button-wrapper";

                var navElement = $(document).find(buttonClasses);
                navElement.addClass("selected");

                $location.hash(sectionId);
                $anchorScroll();
                $location.hash("");
            };
        }]);