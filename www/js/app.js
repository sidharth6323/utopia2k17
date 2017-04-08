// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('starter', ['ionic','ionic.ion.imageCacheFactory']);

app.run(function($ionicPlatform,$ImageCacheFactory) {
  $ionicPlatform.ready(function() {
    $ImageCacheFactory.Cache(["img/back.jpg"]).then(function(){
    console.log("done preloading!");
    });
    $ImageCacheFactory.Cache(["img/back3.jpg"]).then(function(){
    console.log("done preloading!");
    });
    $ImageCacheFactory.Cache(["img/back4.jpg"]).then(function(){
    console.log("done preloading!");
    });
    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 300);
    window.localStorage.clear();
    console.log("cleared");
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })
        .state('days', {
            url: '/days',
            templateUrl: 'templates/days.html'
        })
        .state('eventslist', {
            url: '/eventslist',
            templateUrl: 'templates/eventslist.html'
        })
        .state('event', {
            url: '/event',
            templateUrl: 'templates/event.html'
        })
        .state('results', {
            url: '/results',
            templateUrl: 'templates/results.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        })
      $urlRouterProvider.otherwise('/');
})