'use strict';

angular.module('addressbook')
.factory('Contact', function($rootScope, $firebaseObject){

  var fbContact;
  var afContact;

  function Contact(){}

  Contact.init = function(contactRecord){
    fbContact = $rootScope.fbUser.child('/addressbook/' + contactRecord);
    afContact = $firebaseObject(fbContact);
    return afContact;
  };


  return Contact;

});
