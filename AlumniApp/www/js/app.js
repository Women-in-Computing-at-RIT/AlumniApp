// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'starter.services'])

  .run(function ($ionicPlatform, $cordovaSQLite, $rootScope) {
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

      if(window.cordova) {
      // App/device syntax
        $rootScope.db = $cordovaSQLite.openDB({name: "database.db"});
      } else {
        // Ionic serve syntax
        $rootScope.db = window.openDatabase("database.db", '1.0', 'App Demo', 65536);
      }

      //setup
      $cordovaSQLite.execute($rootScope.db, "CREATE TABLE events(id INT PRIMARY KEY NOT NULL,eventType INT,begTime VARCHAR(25),endTime VARCHAR(25),title VARCHAR(255),description TEXT,location VARSHAR(255));");
      $cordovaSQLite.execute($rootScope.db, "INSERT INTO events(id, eventType, begTime, endTime, title, description, location) VALUES (0,1,'May 6, 2017 11:00:00', 'May 6, 2017 12:00:00', 'Super Event', 'Event for Super People', '70-2600')");

      $cordovaSQLite.execute($rootScope.db, "CREATE TABLE jobPosting(id INT PRIMARY KEY NOT NULL,companyName VARCHAR(255),location VARCHAR(255),jobTitle VARCHAR(255),jobDescription TEXT,duration VARCHAR(255));");
      $cordovaSQLite.execute($rootScope.db, "INSERT INTO jobPosting(id, companyName, location, jobTitle, jobDescription, duration) VALUES (1, 'ASML', 'Connecticut', 'Software Engineer', 'Fun', 'Summer 2017');");
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
