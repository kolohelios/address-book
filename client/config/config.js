'use strict';

angular.module('addressbook')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/contact');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  // .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  // .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  // .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})

  .state('contacts', {url: '/', templateUrl: '/views/contacts/contacts.html', abstract: true})
  .state('contacts.new', {url: '/new', templateUrl: '/views/contacts/contacts-record.html', controller: 'ContactsNewCtrl'})
  .state('contacts.list', {url: '/', templateUrl: '/views/contacts/contacts-list.html', controller: 'ContactsListCtrl'})
  .state('contacts.edit', {url: '/edit/{contact}', templateUrl: '/views/contacts/contacts-record.html', controller: 'ContactsEditCtrl'})
  .state('contacts.show', {url: '/{contact}', templateUrl: '/views/contacts/contacts-show.html', controller: 'ContactsShowCtrl'});
});
