(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('peopleController', Controller);
    
    Controller.$inject = ['$scope', '$rootScope', 'peopleService', '$state', '$stateParams'];
    
    function Controller($scope, $rootScope, peopleService, $state, $stateParams) {
    $scope.peoples = [];
    
    if ($state.current.name == "peoples") {
    $rootScope.Title = "People Listing";
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
    if (confirm('Are you sure to delete?')) {
    peopleService.deletePeople(id).then(function(res) {
    if (res.data == "deleted") {
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
    if (res.data == "created") {
        $state.go("peoples", {}, { reload: true });
    }
    }).catch(function(err) {
    console.log(err);
    });

    peopleService.updatePeople(people).then(function(res) {
        if (res.data == "updated") {
            $state.go("peoples", {}, { reload: true });
        }
        }).catch(function(err) {
        console.log(err);
        });


    }
    };
    


    }  
    }
   })();