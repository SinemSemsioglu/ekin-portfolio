app.controller("homeController", [
    "sectionData", "numberOfSections", "scrollUtil", "$scope", "$window", "$timeout",
    function (sectionData, numberOfSections, scrollUtil, $scope, $window, $timeout) {

        var self = this;

        this.regularSections = [];
        this.scrolling = false;

        /* scroll event stuff
        var document = $($window);

        document.bind("scroll", function() {
          //  alert("scrolling");
            if(!self.scrolling){
                $scope.$apply();
                self.scrolling = true;
            }

            $timeout( function (){
                self.scrolling = false;
                scrollUtil.decideWhereToGo();
                $scope.$apply();
            }, 2000)

        });*/

        for (var index = 1; index <= numberOfSections; index++) {
            var section = sectionData["section_" + (index)];

            if(section.type !== "irregular") {
                this.regularSections.push(section);
            }
        }
    }]);