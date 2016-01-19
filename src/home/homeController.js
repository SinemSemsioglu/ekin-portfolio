app.controller("homeController", [
    "sectionData", "numberOfSections", "scrollUtil", "$scope", "$window", "$timeout",
    "scrollTimeValues", "appUtil",
    function (sectionData, numberOfSections, scrollUtil, $scope, $window, $timeout,
              scrollTimeValues, appUtil) {

        var self = this;

        this.regularSections = [];
        this.scrolling = false;
        this.mobile = appUtil.isScreenNarrow();

        var scrollStarted = false;

        var scrollEvents = "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove";

        /* scroll event stuff */
        var window = $($window);
        var navBar = scrollUtil.getNavBarElement();

        window.resize( function () {
            self.mobile = appUtil.isScreenNarrow();
            window.stop();
        });

        //decide which scroll events to bind, fucks up clicking on the nav
        window.bind("scroll", function () {
            if (!scrollStarted) {
                window.trigger("scrollstart");
            }
            scrollStarted = true;
        });

        window.bind("scrollstart", function () {
            self.scrolling = true;
            $scope.$apply();

            $timeout(function () {
                window.trigger("scrollstop");
            }, scrollTimeValues.TRANSITION_WAIT);
        });

        window.bind("scrollstop", function () {
            scrollUtil.decideWhereToGo();

            $timeout(function () {
                scrollStarted = false;
                self.scrolling = false;
                $scope.$apply();
            }, scrollTimeValues.TRANSITION_DURATION + 200);

        });

        /* -- resize-stuff end -- */

        this.goToAboutSection = function () {
            scrollUtil.goToSection(0);
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