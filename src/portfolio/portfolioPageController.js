app.controller("portfolioPageController",
    ["$state", "portfolioData", "appUtil", "$stateParams", "numberOfSections", "scrollUtil", "$rootScope",
        "pageTitles", "$sce",
        function ($state, portfolioData, appUtil, $stateParams, numberOfSections, scrollUtil, $rootScope,
                  pageTitles, $sce) {
            "use strict";

            var self = this;
            var portfolioIndex;
            var message;
            var showMessage;

            this.processMedia = function (portfolioItem) {
                //TODO make the extra images field extra media
                var extraMedia = portfolioItem.extra_images;
                if (extraMedia) {
                    var extraMediaLength = extraMedia.length;

                    for (var mediaIndex = 0; mediaIndex < extraMediaLength; mediaIndex++) {
                        var media = extraMedia[mediaIndex];

                        if (media.type && media.type === "video") {
                            media.trustedSource = $sce.trustAsHtml(media.source);
                        }
                    }
                }
            };

            this.goToHomePage = function () {
                $state.go("home");
            };

            this.goToNextPortfolioItem = function () {
                if (portfolioIndex && portfolioIndex < numberOfSections) {
                    self.goToPortfolioPage(parseInt(portfolioIndex) + 1);
                }
            };

            this.goToPortfolioPage = function (itemId) {
                if (portfolioData["item" + itemId].isIncomplete) {
                    self.goToHomePage();
                    /* doesnt work
                    scrollUtil.goToSection(itemId); */
                }

                $state.go("portfolio." + itemId, {
                    "portfolioIndex": itemId
                });
            };

            this.isSelected = function (itemId) {
                return (itemId === parseInt(portfolioIndex));
            };

            this.init = function () {
                scrollUtil.goToTop();
                scrollUtil.unsetScrollProperties();

                //goes to the first portfolio item if nothing is given
                //actually info is in the url so we should probably take that
                portfolioIndex = $stateParams.portfolioIndex || 0;

                //use portfolioIndex instead of 0 when portfolioData is populated
                this.portfolioItem = portfolioData["item" + portfolioIndex];
                self.processMedia(this.portfolioItem);
                $rootScope.pageTitle = this.portfolioItem.name + pageTitles.PORTFOLIO_SUFFIX;
                this.isScreenNarrow = appUtil.isScreenNarrow();

                //setting alert box message
                message = "";
                showMessage = false;
                if (this.portfolioItem.header.alert_box) {
                    message = this.portfolioItem.header.alert_box.message;
                    showMessage = this.portfolioItem.header.alert_box.show_message;
                }
                this.message = message;
                this.showMessage = showMessage;
            };

            this.init();
        }]);