app.controller("detailNavController",
    ["numberOfSections", "arrayUtil", "menuData",
        function (numberOfSections, arrayUtil, menuData) {
            this.numberOfPortfolioItems = arrayUtil.getNumberArray(numberOfSections);

            this.menuData = menuData;
        }]);