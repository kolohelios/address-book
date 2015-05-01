'use strict';

angular.module('addressbook')
.controller('NavCtrl', function($rootScope, $scope, $state, User, $firebaseObject){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getDisplayName(data);
      $rootScope.fbUser = $rootScope.fbRoot.child('users/' + data.uid);
      $rootScope.afUser = $firebaseObject($rootScope.fbUser);
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
      $rootScope.fbUser = null;
      $rootScope.afUser = null;
    }
    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };

  function getDisplayName(data){
    switch(data.provider){
      case 'password':
        var index = data.password.email.indexOf('@');
        return data.password.email.substring(0, index);
      case 'twitter':
        return data.twitter.username;
      case 'github':
        return data.github.username;
      case 'facebook':
        return data.facebook.displayName;
      case 'google':
        return data.google.displayName;
    }
  }
});
