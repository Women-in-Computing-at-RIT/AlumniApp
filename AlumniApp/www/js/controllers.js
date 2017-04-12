angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Open the register modal
  $scope.register = function(){
    $scope.modal.show();
  };

  // Triggered in the register modal to close it
   $scope.closeRegister=function(){
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
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

.controller('signupCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory) {

	$scope.signup=function(data){

			var link = 'http://www.website.com/foodcart/server_side/signup.php';

			//using http post as we are passing password.
			$http.post(link, {n : data.name, un : data.username, ps : data.password , ph: data.phone , add : data.address , pin : data.pincode })
			.then(function (res){	 //if a response is recieved from the server.

				$scope.response = res.data.result; //contains Register Result

				//Shows the respective popup and removes back link
				if($scope.response.created=="1"){
						$scope.title="Account Created!";
						$scope.template="Your account has been successfully created!";

						//no back option
						$ionicHistory.nextViewOptions({
							disableAnimate: true,
							disableBack: true
						});
						// the user is redirected to login page after sign up
						$state.go('login', {}, {location: "replace", reload: true});

				}else if($scope.response.exists=="1"){
					$scope.title="Email Already exists";
					$scope.template="Please click forgot password if necessary";

				}else{
					$scope.title="Failed";
					$scope.template="Contact Our Technical Team";
				}

				var alertPopup = $ionicPopup.alert({
						title: $scope.title,
						template: $scope.template
				});
			});
	}
})

.controller('profileCtrl', function($scope,$rootScope,$ionicHistory,$state) {

		// loads value from the loggin session
		$scope.loggedin_name= sessionStorage.getItem('loggedin_name');
		$scope.loggedin_id= sessionStorage.getItem('loggedin_id');
		$scope.loggedin_phone= sessionStorage.getItem('loggedin_phone');
		$scope.loggedin_address= sessionStorage.getItem('loggedin_address');
		$scope.loggedin_pincode= sessionStorage.getItem('loggedin_pincode');

		//logout function
		$scope.logout=function(){

				//delete all the sessions
				delete sessionStorage.loggedin_name;
				delete sessionStorage.loggedin_id;
				delete sessionStorage.loggedin_phone;
				delete sessionStorage.loggedin_address;
				delete sessionStorage.loggedin_pincode;

				// remove the profile page backlink after logout.
				$ionicHistory.nextViewOptions({
					disableAnimate: true,
					disableBack: true
				});

				// After logout you will be redirected to the menu page,with no backlink
				$state.go('menu', {}, {location: "replace", reload: true});
		};
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
