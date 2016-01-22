app.controller("detailNavController",
    ["numberOfSections", "arrayUtil",
        function (numberOfSections, arrayUtil) {
            this.numberOfPortfolioItems = arrayUtil.getNumberArray(numberOfSections);
            this.goToPortfolioItem = function (buttonId) {
                console.log("go to item " + buttonId);
            };
        }]);