app.controller("homeController", [
    "sectionData", "numberOfSections", "scrollUtil", "$scope", "$window", "$timeout",
    function (sectionData, numberOfSections, scrollUtil, $scope, $window, $timeout) {

        var self = this;

        this.regularSections = [];
        this.scrolling = false;

        var scrollStarted = false;

        /* scroll event stuff */
        var document = $($window);

        document.bind("scroll", function() {
            //alert("scrolling");
            if(!self.scrolling){
                self.scrolling = true;
                $scope.$apply();
            }

            if(!scrollStarted) {
                $timeout( function () {
                    self.scrolling = false;
                    $scope.$apply();
                    scrollUtil.decideWhereToGo();
                    scrollStarted = false;
                }, 2000)
            }
            scrollStarted = true;

        });

        for (var index = 1; index <= numberOfSections; index++) {
            var section = sectionData["section_" + (index)];

            if(section.type !== "irregular") {
                this.regularSections.push(section);
            }
        }
    }]);