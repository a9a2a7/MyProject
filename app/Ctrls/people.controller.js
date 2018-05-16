(function() {
    'use strict';
    
    angular
    .module('main_app')
    .controller('peopleController', Controller);
    
    Controller.$inject = ['$scope', '$rootScope', 'peopleService', '$state', '$stateParams'];
    
    function Controller($scope, $rootScope, peopleService, $state, $stateParams) {
    $scope.peoples = [];
    
    peopleService.getPeoples().then(function(res) {
    $scope.peoples = res.data;
    }).catch(function(err) {
    console.log(err);
    });
    
    $scope.EditPeople = function(id) {
    peopleService.getPeople(id).then(function(res) {
        $scope.people = res.data;
        }).catch(function(err) {
        console.log(err);
        });
    };

    $scope.deletePeople = function(id) {
    if (confirm('Do you want to delete this one?')) {
    peopleService.deletePeople(id).then(function(res) {
    if (res.data == "seccussfuly deleted") {
    $state.go("peoples", {}, { reload: true });
    }
    }).catch(function(err) {
    console.log(err);
    });
    }
    };

    $scope.saveData = function(people) {
    $scope.IsSubmit = true;
    if ($scope.peopleForm.$valid) {
    peopleService.createPeople(people).then(function(res) {
    if (res.data == "seccussfuly created") {
        $state.go("peoples", {}, { reload: true });
    }
    }).catch(function(err) {
    console.log(err);
    });

    peopleService.updatePeople(people).then(function(res) {
        if (res.data == "seccussfuly updated") {
            $state.go("peoples", {}, { reload: true });
        }
        }).catch(function(err) {
        console.log(err);
        });


    }
    };
    


    
    }
   })();