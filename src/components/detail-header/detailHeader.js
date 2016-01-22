app.directive("detailHeader",
    [function () {
        return {
            replace: true,
            restrict: "E",
            scope: {
                headerInfo: "=",
                goToHomePage: "=",
                goToPortfolioPage: "=",
                isScreenNarrow: "="
            },
            templateUrl: "templates/components/detail-header/detail-header.html"
        };
    }]);