'use strict';

angular.module('addressbook')
.controller('ContactsNewCtrl', function(AddressBook, $scope, $state){

  AddressBook.init();
  $scope.formState = 'new';

  $scope.saveContact = function(contact){
    var o = angular.copy(contact);
    o.photo = photoString;
    AddressBook.addContact(o);
    $state.go('contacts.list');
  };

  $scope.uploadImage = function(){
    previewFile();
  };

  var photoString;

  function previewFile(){
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      photoString = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }
});
