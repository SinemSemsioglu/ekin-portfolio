app.controller("portfolioPageController",
    ["$state", "portfolioData", "appUtil", "$stateParams", "numberOfSections", "scrollUtil",
        function ($state, portfolioData, appUtil, $stateParams, numberOfSections, scrollUtil) {
            "use strict";

            var self = this;

            scrollUtil.unsetScrollProperties();

            //goes to the first portfolio item if nothing is given
            //actually info is in the url so we should probably take that
            var portfolioIndex = $stateParams.portfolioIndex || 0;
            console.log(portfolioIndex);

            //use portfolioIndex instead of 0 when portfolioData is populated
            this.portfolioItem = portfolioData[0];
            this.isScreenNarrow = appUtil.isScreenNarrow();

            this.goToHomePage = function () {
                $state.go("home");
            };

            this.goToNextPortfolioItem = function () {
                if (portfolioIndex && portfolioIndex < numberOfSections) {
                    self.goToPortfolioPage (portfolioIndex + 1);
                }
            };

            this.goToPortfolioPage = function (itemId) {
                $state.go("portfolio." + itemId, {
                    "portfolioIndex": itemId
                });
            };

        }]);