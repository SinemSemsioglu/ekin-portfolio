app.service("homeNavHelper",
       [ function () {

           var homeNavController;

           this.init = function (_homeNavController_) {
               homeNavController = _homeNavController_;
           };

           this.updateSelectedSection = function (itemId) {
               homeNavController.selectedSectionIndex = itemId;
           };
        }]);