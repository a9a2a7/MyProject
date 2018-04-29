(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('userController', Controller);
    
    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams'];
    
    function Controller($scope, $rootScope, userService, $state, $stateParams) {
    
    $scope.dologin=function(loginData){
        $scope.errorMsg=false;
        
        userService.login(loginData).then(function(data){
            
            if(data.data.success){
                $state.go("peoples");
                $scope.alogin="Logout";
                $scope.uname=data.data.uname;
            }else{
                $scope.loading=false;
                $scope.errorMsg=data.data.message;
            }
        });

        

    }


    
    }
   })();