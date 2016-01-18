app.service("scrollUtil", ["$window", "appUtil", "sectionData", "$timeout",
    function ($window, appUtil, sectionData, $timeout) {

        var self = this;

        this.getElementOffsetTop = function (element) {
            return element.offset().top;
        };

        this.goToSection = function (sectionId) {
            var navElement = self.findNavElement(sectionId);
            var sectionElement = self.findSectionElement(sectionId);

            sectionElement.addClass("selected");
            navElement.addClass("selected");

            var targetOffset = self.getElementOffsetTop(sectionElement);

            $('html,body').animate({
                scrollTop: targetOffset
            }, 1000);

            $timeout(function () {
                self.navBarElementOnTransition(sectionId);
            }, 1500);
        };

        this.navBarElementOnTransition = function (sectionId) {
            var sectionName = "section_" + sectionId;
            var navColor = sectionData[sectionName].color.nav;

            var navbarElement = self.getNavBarElement();
            var logoElement = $(navbarElement.find(".logo"));

            navbarElement.css("opacity", 0);
            navbarElement.css("color", navColor);
            logoElement.css("background-image", "url(\"/assets/images/logo-" + navColor + ".svg\")");

            navbarElement.animate({
                "opacity": 1
            }, 800);
        };

        this.decideWhereToGo = function () {
            var windowVerticalOffset = appUtil.getWindowVerticalOffset();
            var screenHeight = appUtil.getScreenHeight();

            var sectionId = Math.round(windowVerticalOffset / screenHeight);

            self.goToSection(sectionId);
        };

        this.findSectionElement = function (sectionIndex) {
            var sectionId;

            if (sectionIndex <=12 && sectionIndex > 0) {
                sectionId = "section-" + sectionIndex;
            } else if (sectionIndex === 0){
                //homepage
            } else {
                //blog?
            }

            var sectionElement = $(document).find("#" + sectionId);

            return $(sectionElement);
        };

        this.getNavBarElement = function () {
            return $($(document).find(".navigation"));
        };

        this.findNavElement = function (sectionIndex) {
            if (sectionIndex <=12 && sectionIndex > 0) {
                sectionId = "section-" + sectionIndex;
            } else if (sectionIndex === 0){
                sectionId = "logo";
                //dont highlight in this case though
            } else {
                sectionId = "blog";
            }

            var buttonClasses = "." + sectionId + ".nav-button-wrapper";

            return $($(document).find("buttonClasses"));
        };


    }]);