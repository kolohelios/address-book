'use strict';

angular.module('addressbook')
.controller('ContactsListCtrl', function(AddressBook, $scope, $state){

  $scope.contacts = AddressBook.init();

  $scope.deleteContact = function(contact){
    AddressBook.deleteContact(contact);
  };

  $scope.showContact = function(contact){
    $state.go('contacts.show', {'contact': contact.$id});
  };

});
