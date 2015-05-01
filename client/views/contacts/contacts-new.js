'use strict';

angular.module('addressbook')
.controller('ContactsNewCtrl', function(AddressBook, $scope, $state){

  AddressBook.init();

  $scope.saveContact = function(contact){
    AddressBook.addContact(contact);
    $state.go('contacts.list');
  };

});
