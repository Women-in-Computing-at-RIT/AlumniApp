angular.module('starter.controllers', ['ui.rCalendar'])

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
      $scope.closeRegister=function(){
       $scope.modal.hide();
     };

    // Open the register modal
    $scope.register = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
      $scope.doRegister = function() {
        console.log('Doing Registering', $scope.RegisterData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeRegister();
        }, 1000);
      };
    })


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CalendarDemoCtrl', function ($scope, $http) {
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
        $http.get('js/events.json').success(function(data){
            for(var i=0; i<data.Events.length; i++){
                var date = new Date(data.Events[i].beginningTime);
                var eventType = data.Events[i].eventType;
                var startDay = new Date(data.Events[i].beginningTime);
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

    function createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }
})

.controller('CreateEventCtrl', function ($scope, $stateParams) {
  $scope.event = { name: "", time: Date.now(), date: Date.now(), location: "", description: "" }
  $scope.onsubmit = function () {
    alert($scope.event.name);
    alert($scope.event.time);
    alert($scope.event.date);
    alert($scope.event.location);
    alert($scope.event.description);
  }
});
