app.controller("homeController", [
    "sectionData", "numberOfSections", "scrollUtil", "$scope", "$window", "$timeout",
    "scrollTimeValues", "appUtil", "$state", "$sce", "$rootScope", "pageTitles",
    function (sectionData, numberOfSections, scrollUtil, $scope, $window, $timeout,
              scrollTimeValues, appUtil, $state, $sce, $rootScope, pageTitles) {

        var self = this;

        $rootScope.pageTitle = pageTitles.HOME;

        this.regularSections = [];
        this.scrolling = false;
        this.mobile = appUtil.isScreenNarrow();

        scrollUtil.setScrollPropertiesForHomePage(self, $scope);

        this.goToAboutSection = function () {
            scrollUtil.goToSection(0);
        };

        this.goToPortfolioPage = function (portfolioIndex) {
            $state.transitionTo("portfolio." + portfolioIndex,{
                    "portfolioIndex": portfolioIndex
                });
        };

        for (var index = 0; index <= numberOfSections; index++) {
            var section = sectionData["section_" + (index)];
            var sectionType = section.type;

            if (sectionType === "about") {
                this.aboutSection = section;
                this.aboutSectionText = $sce.trustAsHtml(section.text);
            } else if (sectionType === "regular") {
                this.regularSections.push(section);
            }
        }
    }]);