app.controller("homeNavController",
    ["numberOfSections", "arrayUtil", "scrollUtil", "homeNavHelper", "menuData",
        function (numberOfSections, arrayUtil, scrollUtil, homeNavHelper, menuData) {
            this.numberOfSections = arrayUtil.getNumberArray(numberOfSections);

            this.menuData = menuData;

            var self = this;

            this.goToSection = function (itemId) {
                scrollUtil.goToSection(itemId);
            };

            this.isSelected = function (itemId) {
                return (this.selectedSectionIndex === itemId);
            };

            this.init = function () {
                this.selectedSectionIndex = 0;
                homeNavHelper.init(self);
            };

            this.init();
        }]);