app.controller("homeNavController",
    ["numberOfSections", "arrayUtil", "scrollUtil",
        function (numberOfSections, arrayUtil, scrollUtil) {
            this.numberOfSections = arrayUtil.getNumberArray(numberOfSections);
            this.goToSection = scrollUtil.goToSection;
        }]);