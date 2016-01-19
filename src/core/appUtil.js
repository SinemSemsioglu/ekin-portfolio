app.service("appUtil", ["$window", "screenWidths",
    function ($window, screenWidths){
    var self = this;

    this.getScreenHeight = function () {
        return $window.innerHeight;
    };
    this.getScreenWidth = function () {
        return $window.innerWidth;
    };
    this.isScreenNarrow = function () {
        return (self.getScreenWidth() < screenWidths.MEDIUM_MIN)
    };
    this.getWindowVerticalOffset = function () {
        return $($window).scrollTop();
    };
}]);