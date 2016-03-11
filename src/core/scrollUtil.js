app.service("scrollUtil", ["$window", "appUtil", "sectionData", "$timeout", "scrollTimeValues",
    "homeNavHelper",
    function ($window, appUtil, sectionData, $timeout, scrollTimeValues, homeNavHelper) {

        var self = this;
        var scrollEvents = "mousedown wheel DOMMouseScroll mousewheel keyup touchmove";

        this.unsetScrollProperties = function () {
            var window = $($window);
            var unsetScrollEvents = scrollEvents + "resize, scroll, scrollstart, scrollstop";
            window.off(unsetScrollEvents);
        };

        this.toggleDefaultScrollActions = function (preventDefault) {

            var window = $($window);

            if (preventDefault) {
                window.bind(scrollEvents, function (event) {
                    event.preventDefault();
                });
            } else {
                window.unbind(scrollEvents);
            }
        };
        this.setScrollPropertiesForHomePage = function (homeController, scope) {

            var scrollStarted = false;

            /* scroll event stuff */
            var window = $($window);
            var navBar = self.getNavBarElement();

            window.resize(function () {
                homeController.mobile = appUtil.isScreenNarrow();
                window.stop();
            });

            //decide which scroll events to bind, fucks up clicking on the nav
            window.bind("scroll", function (event) {
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
                    self.decideWhereToGo();
                    //self.toggleDef ultScrollActions(true);


                    $timeout(function () {
                        scrollStarted = false;
                        homeController.scrolling = false;
                        scope.$apply();
                        self.toggleDefaultScrollActions(false);
                    }, scrollTimeValues.TRANSITION_DURATION);


            });

            /* -- scroll-stuff end -- */
        };

        this.getElementOffsetTop = function (element) {
            return element.offset().top;
        };

        this.goToTop = function () {
            var page = $('html,body');
            page.animate({
                scrollTop: 0
            });
        };

        this.goToSection = function (sectionId) {
            homeNavHelper.updateSelectedSection(sectionId);

            var navElement = self.findNavElement(sectionId);
            var sectionElement = self.findSectionElement(sectionId);

            sectionElement.addClass("selected");
            navElement.addClass("selected");

            var targetOffset = self.getElementOffsetTop(sectionElement);
            var page = $('html,body');

            var window = $($window);

            if (appUtil.isScreenNarrow()) {
                self.setNavBarColor(sectionId);
            }

            page.stop().animate({
                scrollTop: targetOffset
            }, scrollTimeValues.TRANSITION_DURATION, "linear");



            /*
             if (sectionId === 0) {
             self.navBarElementOnTransition(sectionId);
             } else {
             $timeout(function () {
             self.navBarElementOnTransition(sectionId);
             }, null, scrollTimeValues.TRANSTION_DURATION + 200);
             }*/
        };

        this.setNavBarColor = function (sectionId) {
            /*
            be careful about resize events
            var targetOpacity = appUtil.isScreenNarrow() ? 0.6 : 1;
            var navbarElement = self.getNavBarElement(sectionId);
            navbarElement.css("color", navColor);*/

            var sectionName = "section_" + sectionId;
            var navColor = sectionData[sectionName].color.nav;

            var targetOpacity = 0.8;

            var logoElement = $($(document).find(".logo"));

            logoElement.css("background-image", "url(\"/assets/images/logo-" + navColor + ".svg\")");

            logoElement.animate({
                "opacity": targetOpacity
            }, scrollTimeValues.NAV_ANIMATION_DURATION, "linear");

        };

        this.hideAllNavs = function () {
            var navbars = $(document).find(".navigation");
            for (var i = 0; i < navbars.length; i++) {
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

            if (sectionIndex <= 12 && sectionIndex >= 0) {
                sectionId = "section-" + sectionIndex;
            } else {
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
            if (sectionIndex <= 12 && sectionIndex > 0) {
                sectionId = "section-" + sectionIndex;
            } else if (sectionIndex === 0) {
                sectionId = "logo";
                //dont highlight in this case though
            } else {
                sectionId = "blog";
            }

            var buttonClasses = "." + sectionId + ".nav-button-wrapper";

            return $($(document).find("buttonClasses"));
        };


    }]);