'use strict';

angular.module('addressbook')
.factory('AddressBook', function($rootScope, $firebaseArray){

  var fbAddressBook;
  var afAddressBook;

  function AddressBook(){}

  AddressBook.init = function(){
    fbAddressBook = $rootScope.fbUser.child('/addressbook');
    afAddressBook = $firebaseArray(fbAddressBook);
    return afAddressBook;
  };

  AddressBook.addContact = function(contact){
    afAddressBook.$add(contact);
  };

  AddressBook.deleteContact = function(contact){
    afAddressBook.$remove(contact);
  };

  return AddressBook;

});
