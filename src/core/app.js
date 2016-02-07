"use strict";

var app = angular.module("portfolio", ["ui.router", "ui.bootstrap"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            "url": "/home",
            "views": {
                "appContainer@": {
                    "controller": "homeController as home",
                    "templateUrl": "templates/home/home.html"
                }
            }
        })
        .state("portfolio", {
            "url": "/portfolio",
            "abstract": true
        })
        .state("portfolio.1", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        })
        .state("portfolio.2", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.3", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.4", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.5", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.6", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.7", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.8", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.9", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.10", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.11", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.12", {
            "url": "/:portfolioIndex",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        });

    $urlRouterProvider.otherwise("/home");
});