app.controller("homeController", [
    "sectionData", "numberOfSections", "scrollUtil", "$scope", "$window", "$timeout", "scrollTimeValues",
    function (sectionData, numberOfSections, scrollUtil, $scope, $window, $timeout, scrollTimeValues) {

        var self = this;

        this.regularSections = [];
        this.scrolling = false;

        var scrollStarted = false;

        /* scroll event stuff */
        var window = $($window);
        var navBar = scrollUtil.getNavBarElement();

        window.bind("scroll", function() {
            if(!scrollStarted) {
                window.trigger("scrollstart");
            }
            scrollStarted = true;
        });

        window.bind("scrollstart", function () {
            self.scrolling = true;
            $scope.$apply();

            $timeout( function () {
                window.trigger("scrollstop");
            }, scrollTimeValues.TRANSITION_WAIT);
        });

        window.bind("scrollstop", function () {
            scrollUtil.decideWhereToGo();

            $timeout( function () {
                scrollStarted = false;
                self.scrolling = false;
                $scope.$apply();
            }, TRANSITION_DURATION + NAV_ANIMATION_DURATION);

        });

        for (var index = 1; index <= numberOfSections; index++) {
            var section = sectionData["section_" + (index)];

            if(section.type !== "irregular") {
                this.regularSections.push(section);
            }
        }
    }]);