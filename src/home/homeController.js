app.controller("homeController", [
    "sectionData", "numberOfSections", "scrollUtil", "$scope", "$window", "$timeout",
    "scrollTimeValues", "appUtil", "$state",
    function (sectionData, numberOfSections, scrollUtil, $scope, $window, $timeout,
              scrollTimeValues, appUtil, $state) {

        var self = this;

        this.regularSections = [];
        this.scrolling = false;
        this.mobile = appUtil.isScreenNarrow();

        scrollUtil.setScrollPropertiesForHomePage(self, $scope);

        this.goToAboutSection = function () {
            scrollUtil.goToSection(0);
        };

        this.goToPortfolioPage = function (portfolioIndex) {
            console.log("/portfolio/" + portfolioIndex);
            $state.transitionTo("portfolio." + portfolioIndex,{
                    "portfolioIndex": portfolioIndex
                });
        };

        for (var index = 0; index <= numberOfSections; index++) {
            var section = sectionData["section_" + (index)];
            var sectionType = section.type;

            if (sectionType === "about") {
                this.aboutSection = section;
            } else if (sectionType === "regular") {
                this.regularSections.push(section);
            }
        }
    }]);