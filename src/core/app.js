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
        });
    $urlRouterProvider.otherwise("/home");
});