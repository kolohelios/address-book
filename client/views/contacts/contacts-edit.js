'use strict';

angular.module('addressbook')
.controller('ContactsEditCtrl', function(Contact, $scope, $state){

  var contact = $state.params.contact;
  $scope.contact = Contact.init(contact);
  $scope.contact.$loaded().then(function(){
    $scope.contact.birthday = new Date($scope.contact.birthday);
  });
  $scope.formState = 'edit';

  $scope.saveContact = function(){
    $scope.contact.birthday = $scope.contact.birthday.getTime();
    Contact.save();
    $state.go('contacts.list');
  };

  $scope.uploadImage = function(){
    previewFile();
  };

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
