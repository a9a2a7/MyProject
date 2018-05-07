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
    }).state("register", {
        url: "/register/",
        templateUrl: "/views/login/register.html"
        
    }).state("login", {
        url: "/login",
        templateUrl: "/views/login/login.html"
        });
    })
    .constant("globalConfig", {
    apiAddress: 'http://localhost:8888/api'
    });
   })();