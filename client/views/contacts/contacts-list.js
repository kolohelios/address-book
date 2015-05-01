'use strict';

angular.module('addressbook')
.controller('ContactsListCtrl', function(AddressBook, $scope){

  $scope.contacts = AddressBook.init();

  console.log($scope.contacts);

});
