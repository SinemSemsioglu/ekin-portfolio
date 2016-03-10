app.controller("regularSectionController", [ "$sce", "$state",
    function ( $sce, $state) {

        var self = this;

        this.goToPortfolioPage = function () {
            if (self.section.details) {
                $state.transitionTo("portfolio." + self.section.id,{
                    "portfolioIndex": self.section.id
                });
            }
        };
    }]);
