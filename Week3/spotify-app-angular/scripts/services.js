/* Token expires after 60 minutes. 
Get a new one at https://developer.spotify.com/web-api/console/get-search-item/ */

angular.module('spotifyApp')
	
	.service('artistService', function($http) {
		var self = this;
		const token = 'BQADwJvviiBPfSvH5mZuvjgsyYNlLBqSCYPJWXX49UVTbUdHJNTG7WT4yWFatjzO_QbRaG-4FtqAo-sPoq0-4WUUKmjMr99Wr08971ameeOFOgyw_RDaf1WKvRX09sCaa4vz';

		self.search = function(query, callback) {

        	var url = 'https://api.spotify.com/v1/search?type=artist&query=' + query;

	         $http.get(url, {
    			headers: {
        		"Authorization": 'Bearer ' + token
    			}
  			}).then (function(response){
  				console.log('Artists received');
    			callback(response);
  			});
        };
	})

	.service('albumService', function($http) {
		
	})