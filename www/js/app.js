// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic', 
  'starter.controllers', 
  'starter.services',
  'starter.directives',
  'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  // Each tab has its own nav history stack:

  .state('app.home', {
    url: '/home',
    views: {
      'app-home' : {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('app.switch', {
    url: '/switch',
    views: {
        'app-switch' : {
          templateUrl: 'templates/switch.html',
          controller: 'SwitchCtrl'
        }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});


var controllerModule = angular.module('starter.controllers', []);
var serviceModule = angular.module('starter.services', ['ngResource']);
var directiveModule = angular.module('starter.directives', []);

serviceModule.constant('webServerUrl', 'http://up.ideatags.io');
