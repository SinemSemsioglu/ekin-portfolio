app.controller("detailNavController",
    ["numberOfSections", "arrayUtil",
        function (numberOfSections, arrayUtil) {
            this.numberOfPortfolioItems = arrayUtil.getNumberArray(numberOfSections);
        }]);