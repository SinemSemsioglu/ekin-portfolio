app.directive("descriptiveSection",
    function () {
        return {
            replace: true,
            restrict: "E",
            scope: {
                section: "="
            }
        };
    });