var connections = [
  { 'id': 1, 'first_name': 'Abby', 'last_name': 'Tran', 'email': 'abby@gmail.com' },
  { 'id': 2, 'first_name': 'David', 'last_name': 'Quach', 'email': 'david@yahoo.com' },
  { 'id': 3, 'first_name': 'Regina', 'last_name': 'Locicero', 'email': 'regina@wic.rit.com' },
];
var events = [
  { 'id': 1, 'begin_time': 'May 6, 2017 11:00:00', 'end_time': 'May 6, 2017 11:00:00', 'title': 'Lunch', 'location': 'Crossroads', 'description': 'Fun' },
  { 'id': 2, 'begin_time': 'April 6, 2017 11:00:00', 'end_time': 'May 6, 2017 11:00:00', 'title': 'Dinner', 'location': 'Brick City', 'description': 'So So' },
  { 'id': 3, 'begin_time': 'March 6, 2017 11:00:00', 'end_time': 'May 6, 2017 11:00:00', 'title': 'Breakfast', 'location': 'Gracies', 'description': 'Ehh' },
];
var jobs = [
  { 'id': 1, 'com_name': 'ASML', 'location': 'Connecticut', 'title': 'Software Engineer', 'description': 'Fun', 'duration': 'Summer 2017' },
  { 'id': 2, 'com_name': 'Genius Plaza', 'location': 'New York', 'title': 'Web Developer', 'description': 'Fun', 'duration': 'Spring 2017' },
  { 'id': 3, 'com_name': 'Alstom', 'location': 'Rochester', 'title': 'Testing Coordinator', 'description': 'Fun', 'duration': 'Fall 2017' }
];

angular.module('starter.controllers', ['ui.rCalendar', 'ngCordova', 'starter.services'])


  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };



    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('RegisterCtrl', function ($scope, $ionicModal, $timeout) {

    $scope.RegisterData = {};
    //Create the register modal
    $ionicModal.fromTemplateUrl('templates/register.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the register modal to close it
    $scope.closeRegister = function () {
      $scope.modal.hide();
    };

    // Open the register modal
    $scope.register = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doRegister = function () {
      console.log('Doing Registering', $scope.RegisterData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeRegister();
      }, 1000);
    };
  })


  .controller('CalendarDemoCtrl', function ($scope, Events) {
    'use strict';
    $scope.calendar = {};
    $scope.changeMode = function (mode) {
      $scope.calendar.mode = mode;
    };

    $scope.onEventSelected = function (event) {
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };

    $scope.onViewTitleChanged = function (title) {
      $scope.viewTitle = title;
    };

    $scope.today = function () {
      $scope.calendar.currentDate = new Date();
    };

    $scope.isToday = function () {
      var today = new Date(),
        currentCalendarDate = new Date($scope.calendar.currentDate);

      today.setHours(0, 0, 0, 0);
      currentCalendarDate.setHours(0, 0, 0, 0);
      return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.onTimeSelected = function (selectedTime, events, disabled) {
      console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
    };

    $scope.calendar.eventSource = importEvents();

    function importEvents() {
      var events = [];
      Events.getAll().then(function (data) {
        for (var i = 0; i < data.Events.length; i++) {
          var date = new Date(data.Events[i].begTime);
          var eventType = data.Events[i].eventType;
          var startDay = new Date(data.Events[i].begTime);
          var endDay = new Date(data.Events[i].endTime);
          var startTime;
          var endTime;
          if (data.Events[i].eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
              endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
            events.push({
              title: 'All Day - ' + data.Events[i].title,
              startTime: startTime,
              endTime: endTime,
              allDay: true
            });
          } else {
            startTime = new Date(startDay.getFullYear(), startDay.getMonth(), startDay.getDate(), 0, startDay.getMinutes());
            endTime = new Date(endDay.getFullYear(), endDay.getMonth(), endDay.getDate(), 0, endDay.getMinutes());
            events.push({
              title: 'Event - ' + data.Events[i].title,
              startTime: startDay,
              endTime: endDay,
              allDay: false
            });
          }
        }
      })
      return events;
    }
  })

  .controller('CreateEventCtrl', function ($scope, $stateParams, Events) {
    $scope.event = { begin_time: Date.now(), end_time: Date.now(), title: "", location: "", description: "" }
    $scope.onsubmit = function () {
      Events.getAll().then(function (data) {
          var newID = data.Events.length + 1;
          Events.add({
            id: newID,
            eventType: 1,
            begTime: $scope.event.begin_time,
            endTime: $scope.event.end_time,
            title: $scope.event.title,
            description: $scope.event.description,
            location: $scope.event.location
          });
      })
      Events.getAll().then(function (data) {console.log(data);})
      alert("Thanks for creating an Event!")
    }
  })



  .controller('CreateJobPostCtrl', function ($scope, $stateParams, $http) {
    $scope.job = { com_name: "", location: "", title: "", description: "", duration: "" }
    $scope.onsubmit = function () {
      // alert($scope.job.com_name);
      // alert($scope.job.location);
      // alert($scope.job.postion);
      // alert($scope.job.description);
      // alert($scope.job.duration);
      var data = getFromFile('jobPostings.json', $http).method().then(function (result) {
        return result;
      });
      console.log(data);
      var newID = data.JobPostings.length + 1;
      data.JobPostings.push({
        id: newID,
        userID: 1,
        companyName: $scope.job.com_name,
        location: $scope.job.location,
        jobTitle: $scope.job.title,
        jobDescription: $scope.job.description,
        duration: $scope.job.duration
      });
      writeToFile('jobPostings.json', data);
    };
  })

  .controller('SearchCtrl', function ($scope, $rootScope, $stateParams) {
    $scope.connectionList = connections;
    $rootScope.eventList = events;
    $scope.jobList = jobs;
  })

  .controller('EventCtrl', function ($scope, $rootScope, $stateParams) {
    var id = $stateParams.eventId;
    $scope.event = "";
    for (var i = 0; i < $rootScope.eventList.length; i++) {
      if (id == $rootScope.eventList[i].id) {
        $scope.event = $rootScope.eventList[i];
      }
    }
  })

  .controller("ProfileCtrl", function ($scope, $stateParams) {
    $scope.user = connections[0];
  })
  ;
