app.service("scrollUtil", ["$window", "appUtil", "sectionData", "$timeout", "scrollTimeValues",
    function ($window, appUtil, sectionData, $timeout, scrollTimeValues) {

        var self = this;

        this.nickJonasScroll = function () {

            $('.window').windows({
                snapping: true,
                snapSpeed: 500,
                snapInterval: 1100,
                onScroll: function(scrollPos){
                    // scrollPos:Number
                },
                onSnapComplete: function($el){
                    // after window ($el) snaps into place
                },
                onWindowEnter: function($el){
                    // when new window ($el) enters viewport
                }
            });

        };

        this.unsetScrollProperties = function () {
            var window = $($window);
            window.off("resize, scroll, scrollstart, scrollstop");
        };

        this.setScrollPropertiesForHomePage = function (homeController, scope) {
            var scrollStarted = false;

            var scrollEvents = "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove";

            /* scroll event stuff */
            var window = $($window);
            var navBar = self.getNavBarElement();

            window.resize( function () {
                homeController.mobile = appUtil.isScreenNarrow();
                window.stop();
            });

            //decide which scroll events to bind, fucks up clicking on the nav
            window.bind("scroll", function (event) {
                self.hideAllNavs();

                if (!scrollStarted) {

                    window.trigger("scrollstart");
                }
                event.preventDefault();
                scrollStarted = true;
            });

            window.bind("scrollstart", function () {
                homeController.scrolling = true;
                scope.$apply();

                $timeout(function () {
                    window.trigger("scrollstop");
                }, scrollTimeValues.TRANSITION_WAIT);
            });

            window.bind("scrollstop", function () {
                var sectionToBeScrolled = self.decideWhereToGo();

                if (sectionToBeScrolled === 0){
                    scrollStarted = false;
                    homeController.scrolling = false;
                } else {
                    $timeout(function () {
                        scrollStarted = false;
                        homeController.scrolling = false;
                        scope.$apply();
                    }, scrollTimeValues.TRANSITION_DURATION);
                }

            });

            /* -- scroll-stuff end -- */
        };

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

            var window = $($window);

            page.stop().animate({
                scrollTop: targetOffset
            }, scrollTimeValues.TRANSITION_DURATION);


            if (sectionId === 0) {
                self.navBarElementOnTransition(sectionId);
            } else {
                $timeout(function () {
                    self.navBarElementOnTransition(sectionId);
                }, null, scrollTimeValues.TRANSTION_DURATION + 200);
            }
        };

        this.navBarElementOnTransition = function (sectionId) {
            //var sectionName = "section_" + sectionId;
           // var navColor = sectionData[sectionName].color.nav;
            //be careful about resize events
            var targetOpacity = appUtil.isScreenNarrow() ? 0.6 : 1;

            var navbarElement = self.getNavBarElement(sectionId);
            var logoElement = $(navbarElement.find(".logo"));

            //navbarElement.css("color", navColor);
            //logoElement.css("background-image", "url(\"/assets/images/logo-" + navColor + ".svg\")");



            if (sectionId != 0){
                //navbarElement.css("opacity", 0);
                navbarElement.animate({
                    "opacity": targetOpacity
                }, scrollTimeValues.NAV_ANIMATION_DURATION, "linear");
            }
        };

        this.hideAllNavs = function () {
            var navbars = $(document).find(".navigation");
            for (var i=0; i<navbars.length; i++) {
                $(navbars[i]).css("opacity", 0);
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

        this.getNavBarElement = function (sectionIndex) {
            var sectionElement = self.findSectionElement(sectionIndex);
            return $(sectionElement.find(".navigation"));
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