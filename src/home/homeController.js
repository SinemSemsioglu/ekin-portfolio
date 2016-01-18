app.controller("homeController", [
    "sectionData", "numberOfSections", "scrollUtil", "$scope", "$window", "$timeout",
    function (sectionData, numberOfSections, scrollUtil, $scope, $window, $timeout) {

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
            navBar.css("opacity", 0);
            navBar.animate({
                "opacity": 1
            }, 2000);

            $timeout( function () {
                window.trigger("scrollstop");
            }, 2000)
        });

        window.bind("scrollstop", function () {
            self.scrolling = false;
            $scope.$apply();

            scrollUtil.decideWhereToGo();
            scrollStarted = false;
        });

        for (var index = 1; index <= numberOfSections; index++) {
            var section = sectionData["section_" + (index)];

            if(section.type !== "irregular") {
                this.regularSections.push(section);
            }
        }
    }]);