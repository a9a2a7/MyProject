(function() {
    'use strict';
    
    angular
    .module('app')
    .factory('peopleService', Service);
    
    Service.$inject = ['$http', 'globalConfig'];
    
    function Service($http, globalConfig) {
    var url = "";
    return {
    getPeoples: function() {
    url = globalConfig.apiAddress + "/people";
    return $http.get(url);
    },
    getPeople: function(id) {
    url = globalConfig.apiAddress + "/people/" + id;
    return $http.get(url);
    },
    createPeople: function(people) {
    url = globalConfig.apiAddress + "/people";
    return $http.post(url, people);
    },
    updatePeople: function(people) {
    url = globalConfig.apiAddress + "/people/" + people._id;
    return $http.put(url, people);
    },
    deletePeople: function(id) {
    url = globalConfig.apiAddress + "/people/" + id;
    return $http.delete(url);
    }
    };
    }
   })();