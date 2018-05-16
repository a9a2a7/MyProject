(function() {
    'use strict';
    
    angular.module('main_app', [
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
    apiAddress: 'https://a9myproject.herokuapp.com/api'
    });
   })();
