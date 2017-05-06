/* What I used for an example: https://gist.github.com/lykmapipo/6451623a54ef9b957a5c#file-controllers-js */
angular.module('starter.services', ['ngCordova'])

    .factory('Events', function ($cordovaSQLite, $rootScope, $ionicPlatform, $q) {
              var self = this;

                  // Handle query's and potential errors
              self.query = function () {
                var q = $q.defer();
                var query = "SELECT * FROM events";

                $ionicPlatform.ready(function () {
                  $cordovaSQLite.execute($rootScope.db, query, [])
                    .then(function (result) {
                      q.resolve(result);
                    }, function (error) {
                      console.warn('I found an error');
                      console.warn(error);
                      q.reject(error);
                    });
                });
                return q.promise;
            }

            self.getAll = function(result) {
                return this.query().then(function(result){
                    var dbData ={
                        Events : []
                    }

                    for (var i = 0; i < result.rows.length; i++) {
                        dbData.Events.push({
                            id: result.rows.item(i).id,
                            eventType: result.rows.item(i).eventType,
                            begTime: result.rows.item(i).begTime,
                            endTime: result.rows.item(i).endTime,
                            title: result.rows.item(i).title,
                            description: result.rows.item(i).description,
                            location: result.rows.item(i).location
                        });
                    }
                    return dbData;
                });
            }
            self.add = function(event) {
                var params = [event.id, event.eventType, event.begTime,
                    event.endTime, event.title, event.description, event.location];
                var q = $q.defer();
                var query = "INSERT INTO events (id, eventType, begTime, endTime, title, description, location)"+
                " VALUES (?,?,?,?,?,?,?)";

                $ionicPlatform.ready(function () {
                  $cordovaSQLite.execute($rootScope.db, query, params)
                    .then(function (result) {
                      q.resolve(result);
                    }, function (error) {
                      console.warn('I found an error');
                      console.warn(error);
                      q.reject(error);
                    });
                });
                return q.promise;
            }
        return self;
    })
    .factory('JobPosting', function ($cordovaSQLite, $rootScope, $ionicPlatform, $q) {
              var self = this;

                  // Handle query's and potential errors
              self.query = function () {
                var q = $q.defer();
                var query = "SELECT * FROM jobPosting";

                $ionicPlatform.ready(function () {
                  $cordovaSQLite.execute($rootScope.db, query, [])
                    .then(function (result) {
                      q.resolve(result);
                    }, function (error) {
                      console.warn('I found an error');
                      console.warn(error);
                      q.reject(error);
                    });
                });
                return q.promise;
            }

            self.getAll = function(result) {
                return this.query().then(function(result){
                    var dbData ={
                        JobPosting : []
                    }

                    for (var i = 0; i < result.rows.length; i++) {
                        dbData.JobPosting.push({
                            id: result.rows.item(i).id,
                            companyName: result.rows.item(i).companyName,
                            location: result.rows.item(i).location,
                            jobTitle: result.rows.item(i).jobTitle,
                            jobDescription: result.rows.item(i).jobDescription,
                            duration: result.rows.item(i).duration
                        });
                    }
                    return dbData;
                });
            }
            self.add = function(job) {
                var params = [job.id, job.companyName,
                    job.location, job.jobTitle, job.jobDescription, job.duration];
                var q = $q.defer();
                var query = "INSERT INTO jobPosting (id, companyName, location, jobTitle,jobDescription, duration)"+
                " VALUES (?,?,?,?,?,?)";

                $ionicPlatform.ready(function () {
                  $cordovaSQLite.execute($rootScope.db, query, params)
                    .then(function (result) {
                      q.resolve(result);
                    }, function (error) {
                      console.warn('I found an error');
                      console.warn(error);
                      q.reject(error);
                    });
                });
                return q.promise;
            }
        return self;
    });
