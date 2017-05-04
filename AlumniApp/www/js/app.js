// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.register', {
        url: '/register',
        views: {
          'menuContent': {
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })

      .state('app.calendar', {
        url: '/calendar',
        views: {
          'menuContent': {
            templateUrl: 'templates/calendar.html',
            controller: 'CalendarDemoCtrl'
          }
        }
      })

      .state('app.create_event', {
        url: '/create_event',
        views: {
          'menuContent': {
            templateUrl: 'templates/create_event.html',
            controller: 'CreateEventCtrl'
          }
        }
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html'
          }
        }
      })

      .state('app.create_jobpost', {
        url: '/create_jobpost',
        views: {
          'menuContent': {
            templateUrl: 'templates/create_jobpost.html',
            controller: 'CreateJobPostCtrl'
          }
        }
      })

      .state('app.searchConnection', {
        url: '/search_connection',
        views: {
          'menuContent': {
            templateUrl: 'templates/search_connection.html',
            controller: 'SearchCtrl'
          }
        }
      })

      .state('app.searchEvent', {
        url: '/search_event',
        views: {
          'menuContent': {
            templateUrl: 'templates/searchEvent.html',
            controller: 'SearchCtrl'
          }
        }
      })
      .state('app.event', {
        url: '/event/:eventId',
        views: {
          'menuContent': {
            templateUrl: 'templates/event_detail.html',
            controller: 'EventCtrl'
          }
        }
      })

      .state('app.searchJob', {
        url: '/search_job',
        views: {
          'menuContent': {
            templateUrl: 'templates/searchJobPosting.html',
            controller: 'SearchCtrl'
          }
        }
      })

      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'AppCtrl'
          }
        }
      })
      .state('app.view_job', {
        url: '/job/{{job.id}}',
        views: {
          'menuContent': {
            templateUrl: 'templates/job_detail.html'
          }
        }
      })
      .state('app.job_detail', {
        abstract: true,
        url: '/job_detail',
        views: {
          'menuContent': {
            templateUrl: 'templates/job_detail.html',
            controller: 'ImageController'

          }
        }
      })




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  });
