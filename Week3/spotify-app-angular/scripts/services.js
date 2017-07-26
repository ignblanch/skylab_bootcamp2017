/* Token expires after 60 minutes. 
Get a new one at https://developer.spotify.com/web-api/console/get-search-item/ */

angular.module('spotifyApp')
	
	.service('SpotifyService', function($http) {
  		var self = this;

  		const token = 'BQD3hC52ARLrzmEvfBmyEbpOaM_un625Y2HtObgwKUO3Yr4FV_ug6jRPtJOfYDUDalKpO5mmPLtcaZ6qCY5EhWZknRYGEhlE-EoLaQ8CNtC_gPFYut2hVXWvu4m_yBTk8gwW';

  		self.artistSearch = function(query, callback) {

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

      self.albumSearch = function(id, callback) {

          	var url = 'https://api.spotify.com/v1/artists/' + id + '/albums';
          	console.log(url);

  	         $http.get(url, {
        			headers: {
            		"Authorization": 'Bearer ' + token
        			}
              
    			}).then (function(response){
    				console.log('Albums received');
      			callback(response);
    			});
      };
	});