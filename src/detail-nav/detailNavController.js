app.controller("detailNavController",
    ["numberOfSections", "arrayUtil", "menuData", "$scope",
        function (numberOfSections, arrayUtil, menuData, $scope) {
            this.numberOfPortfolioItems = arrayUtil.getNumberArray(numberOfSections);

            this.menuData = menuData;

            $scope.message = "deneme";
        }]);