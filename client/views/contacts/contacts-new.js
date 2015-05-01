'use strict';

angular.module('addressbook')
.controller('ContactsNewCtrl', function(AddressBook, $scope, $state){

  AddressBook.init();

  $scope.saveContact = function(contact){
    AddressBook.addContact(contact);
    debugger;
    convertImagesToString();
    $state.go('contacts.list');
  };

  $scope.uploadImage = function(imageFile){
    //console.log(convertImageToString(imageFile);
    console.log(imageFile);
  };

  function convertImagesToString(imageFile){
    var image = new FileReader();
    image.readAsDataURL(imageFile);
    return image.result;
  }

  var tempString;

  function previewFile(){
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      tempString = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }


});
