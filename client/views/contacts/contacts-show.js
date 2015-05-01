'use strict';

angular.module('addressbook')
.controller('ContactsShowCtrl', function($state, Contact, $scope){

  var contact = $state.params.contact;
  $scope.contact = Contact.init(contact);
  console.log($scope.contact.address);
  $scope.contact.$loaded().then(function(){
    $scope.addressArray = $scope.contact.address.split('\n');
  });

  $scope.editContact = function(contact){
    $state.go('contacts.edit', {'contact': contact.$id});
  };

  $scope.deleteContact = function(contact){
    Contact.delete(contact);
    $state.go('contacts.list');
  };

});
