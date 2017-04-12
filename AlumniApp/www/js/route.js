 .state('login', {
      url: '/page4',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl',

		resolve:{
			"check":function($location){
				if(sessionStorage.getItem('loggedin_id')){ $location.path('/page9');   }
				else									 {  $location.path('/page4');   }
			}
		}
    })
