app.service("scrollUtil", ["$window", "appUtil", "sectionData", "$timeout", "scrollTimeValues",
    function ($window, appUtil, sectionData, $timeout, scrollTimeValues) {

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
            var page = $('html,body');

            page.animate({
                scrollTop: targetOffset
            }, scrollTimeValues.TRANSITION_DURATION, function () {
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });

            if (sectionId === 0) {
                self.navBarElementOnTransition(sectionId);
            } else {
                $timeout(function () {
                    self.navBarElementOnTransition(sectionId);
                }, null, scrollTimeValues.TRANSTION_DURATION + 200);
            }
        };

        this.navBarElementOnTransition = function (sectionId) {
            var sectionName = "section_" + sectionId;
            var navColor = sectionData[sectionName].color.nav;
            //be careful about resize events
            var targetOpacity = appUtil.isScreenNarrow() ? 0.6 : 1;

            var navbarElement = self.getNavBarElement();
            var logoElement = $(navbarElement.find(".logo"));

            navbarElement.css("color", navColor);
            logoElement.css("background-image", "url(\"/assets/images/logo-" + navColor + ".svg\")");

            if (sectionId != 0){
                navbarElement.css("opacity", 0);
                navbarElement.animate({
                    "opacity": targetOpacity
                }, scrollTimeValues.NAV_ANIMATION_DURATION, "linear");
            }
        };

        this.decideWhereToGo = function () {
            var windowVerticalOffset = appUtil.getWindowVerticalOffset();
            var screenHeight = appUtil.getScreenHeight();

            var sectionId = Math.round(windowVerticalOffset / screenHeight);

            self.goToSection(sectionId);

            return sectionId;
        };

        this.findSectionElement = function (sectionIndex) {
            var sectionId;

            if (sectionIndex <=12 && sectionIndex >= 0) {
                sectionId = "section-" + sectionIndex;
            }  else {
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