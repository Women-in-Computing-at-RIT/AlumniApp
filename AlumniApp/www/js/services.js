angular.module('starter.services', [])

/**
 * Fetch retrieves the json object from the respective JSON files
 */
.factory('Fetch', function($http) {
    return {
        getEvents: function () {
            return $http.get('js/json/events.json')
        },
        getJobPostings: function(){
            return $http.get('js/json/jobPostings.json')
        },
        getProfiles: function(){
            return $http.get('js/json/profiles.json')
        },
        getUsers: function(){
            return $http.get('js/json/users.json')
        }
    };
})

.factory('Write', function($http) {
    return {
        /*writeJson: function(data, fileName){
            $cordovaFile.writeFile(cordova.file.dataDirectory, fileName, JSON.stringify(data), true).then(
                function (success) {
                     return true;
                }, function (error) {
                    console.log("Oh noes!!!");
                });
        }*/
    };
});
