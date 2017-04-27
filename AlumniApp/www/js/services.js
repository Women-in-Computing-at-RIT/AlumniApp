angular.module('starter.services', [])

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
        // TODO finish
    };
});
