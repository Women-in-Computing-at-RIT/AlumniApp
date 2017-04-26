var objects = [
  { 'id': 1, 'first_name': 'Abby', 'last_name': 'Tran', 'email': 'abby@gmail.com' },
  { 'id': 2, 'first_name': 'David', 'last_name': 'Quach', 'email': 'david@yahoo.com' },
  { 'id': 3, 'first_name': 'Regina', 'last_name': 'Locicero', 'email': 'regina@wic.rit.com' },
];

angular.module('starter.controllers', [])

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

    // Open the register modal
    $scope.register = function () {
      $scope.modal.show();
    };

    // Triggered in the register modal to close it
    $scope.closeRegister = function () {
      $scope.modal.hide();
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


  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
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
  })

  .controller('CreateJobPostCtrl', function ($scope, $stateParams) {
    $scope.job = { name: "", location: "", start_date: Date.now(), description: "" }
    $scope.onsubmit = function () {
      alert($scope.job.name);
      alert($scope.job.location);
      alert($scope.job.start_date);
      alert($scope.job.description);
    }
  })

  .controller('SearchCtrl', function ($scope, $stateParams) {
    $scope.searchlist = objects;

  }
  )

