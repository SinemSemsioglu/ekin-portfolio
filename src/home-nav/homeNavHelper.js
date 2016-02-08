app.service("homeNavHelper",
       [ function () {

           var homeNavController;

           this.init = function (_homeNavController_) {
               //console.log("init called");
               homeNavController = _homeNavController_;
           };

           this.updateSelectedSection = function (itemId) {
               homeNavController.selectedSectionIndex = itemId;
           };
        }]);