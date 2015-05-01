'use strict';

angular.module('addressbook')
.controller('ContactsNewCtrl', function(AddressBook, $scope, $state){

  AddressBook.init();
  $scope.formState = 'new';
  $scope.contact = {};
  $scope.contact.photo = '';

  $scope.saveContact = function(contact){
    
    AddressBook.addContact(contact);
    $state.go('contacts.list');
  };

  $scope.uploadImage = function(){
    previewFile();
  };

  //var photoString;

  function previewFile(){
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      $scope.contact.photo = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }
});
