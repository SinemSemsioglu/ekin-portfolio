app.controller("sideNavController",
    ["numberOfSections", "arrayUtil", "$window", "$anchorScroll", "$location",
        function (numberOfSections, arrayUtil, $window, $anchorScroll, $location) {
            this.numberOfSections = arrayUtil.getNumberArray(numberOfSections);

            var screenHeight = $window.innerHeight;

            this.goToSection = function (sectionIndex) {
                var elementId = "section-"+sectionIndex;
                $location.hash(elementId);
                $anchorScroll();
                $location.hash("");
            };
        }]);