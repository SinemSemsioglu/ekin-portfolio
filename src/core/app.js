"use strict";

var app = angular.module("portfolio", ["ui.router"]);

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
            "abstract": true,
            "params": {
                "portfolioIndex": null
            }
        })
        .state("portfolio.1", {
            "url": "/1",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        })
        .state("portfolio.2", {
            "url": "/2",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.3", {
            "url": "/3",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
        }
        }).state("portfolio.4", {
            "url": "/4",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.5", {
            "url": "/3",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.6", {
        "url": "/6",
        "views": {
            "appContainer@": {
                "controller": "portfolioPageController as portfolioPage",
                "templateUrl": "templates/portfolio/sample-portfolio-page.html"
            }
        }
        }).state("portfolio.7", {
            "url": "/7",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.8", {
            "url": "/8",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.9", {
            "url": "/9",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.10", {
            "url": "/10",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.11", {
            "url": "/11",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        }).state("portfolio.12", {
            "url": "/12",
            "views": {
                "appContainer@": {
                    "controller": "portfolioPageController as portfolioPage",
                    "templateUrl": "templates/portfolio/sample-portfolio-page.html"
                }
            }
        });

    $urlRouterProvider.otherwise("/home");
});