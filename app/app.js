(function() {
    'use strict';
    
    angular.module('app', [
    "ui.router"
    ])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("peoples", {
    url: "/",
    templateUrl: "/views/people/index.html",
    controller: "peopleController"
    }).state("create", {
    url: "/create",
    templateUrl: "/views/people/create.html",
    controller: "peopleController"
    }).state("edit", {
    url: "/edit/:id",
    templateUrl: "/views/people/create.html",
    controller: "peopleController"
    }).state("details", {
    url: "/details/:id",
    templateUrl: "/views/people/details.html",
    controller: "peopleController"
    }).state("register", {
        url: "/register/",
        templateUrl: "/views/login/register.html"
        
    }).state("login", {
        url: "/login/",
        templateUrl: "/views/login/login.html"
        });
    })
    .constant("globalConfig", {
    apiAddress: 'http://localhost:8888/api'
    });
   })();