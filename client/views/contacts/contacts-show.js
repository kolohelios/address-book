'use strict';

angular.module('addressbook')
.controller('ContactsShowCtrl', function($state, Contact, $scope){

  var contact = $state.params.contact;

  console.log(contact);

  $scope.contact = Contact.init(contact);
  console.log($scope.contact);

});
