app.controller("portfolioPageController",
    ["$state", "portfolioData", "appUtil", "$stateParams", "numberOfSections", "scrollUtil",
        function ($state, portfolioData, appUtil, $stateParams, numberOfSections, scrollUtil) {
            "use strict";

            var self = this;

            scrollUtil.unsetScrollProperties();

            //goes to the first portfolio item if nothing is given
            //actually info is in the url so we should probably take that
            var portfolioIndex = $stateParams.portfolioIndex || 0;

            //use portfolioIndex instead of 0 when portfolioData is populated
            this.portfolioItem = portfolioData["item" + portfolioIndex];
            this.isScreenNarrow = appUtil.isScreenNarrow();

            this.goToHomePage = function () {
                $state.go("home");
            };

            this.goToNextPortfolioItem = function () {
                if (portfolioIndex && portfolioIndex < numberOfSections) {
                    self.goToPortfolioPage (parseInt(portfolioIndex) + 1);
                }
            };

            this.goToPortfolioPage = function (itemId) {
                if(portfolioData["item" + itemId].isIncomplete) {
                    self.goToHomePage();
                    console.log("portfoliopage call", itemId);
                    scrollUtil.goToSection(itemId);
                }
                $state.go("portfolio." + itemId, {
                    "portfolioIndex": itemId
                });
            };

            this.isSelected = function (itemId) {
                return (itemId === parseInt(portfolioIndex));
            };
        }]);