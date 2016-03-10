app.controller("textSectionController", [ "$sce",
    function ( $sce) {

        var self = this;

        this.trustedContent= $sce.trustAsHtml(this.text);
    }]);
