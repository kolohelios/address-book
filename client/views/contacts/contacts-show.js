'use strict';

angular.module('addressbook')
.controller('ContactsShowCtrl', function($state, Contact, $scope){

  var contact = $state.params.contact;
  $scope.contact = Contact.init(contact);

  $scope.editContact = function(contact){
    $state.go('contacts.edit', {'contact': contact.$id});
  };

  $scope.deleteContact = function(contact){
    Contact.delete(contact);
    $state.go('contacts.list');
  };

});
