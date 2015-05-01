'use strict';

angular.module('addressbook')
.factory('AddressBook', function($rootScope, $firebaseArray, $state){

  var fbAddressBook;
  var afAddressBook;

  function AddressBook(){}

  AddressBook.init = function(){
    fbAddressBook = $rootScope.fbUser.child('/addressbook');
    afAddressBook = $firebaseArray(fbAddressBook);
    return afAddressBook;
  };

  AddressBook.addContact = function(contact){
    var o = angular.copy(contact);
    o.birthday = o.birthday.getTime();
    afAddressBook.$add(o);
    $state.go('contacts.list');
  };

  AddressBook.editContact = function(contact){
    $state.go('contacts.edit', {'contact': contact});
  };

  AddressBook.deleteContact = function(contact){
    afAddressBook.$remove(contact);
  };

  return AddressBook;

});
