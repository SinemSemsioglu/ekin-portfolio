app.service("appUtil", ["$window", function ($window){
    this.getScreenHeight = function () {
        return $window.innerHeight;
    };
    this.getWindowVerticalOffset = function () {
        return $($window).scrollTop();
    };
}]);