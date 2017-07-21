/* Token expires after 60 minutes. 
Get a new one at https://developer.spotify.com/web-api/console/get-search-item/ */

angular.module('spotifyApp')
	
	.service('SpotifyService', function($http) {
  		var self = this;

  		const token = 'BQCO-v0L0nxaJzx0FHiabI1_QWI0SIAgoB-r6uxdrmgBNkMteLkS8iOtwebJ-5_HRoOQf0L5StWtkrzhb6wt-w3HkxUL7K3hx1b-dgsrToo8EfLt3wt0zTMA1CXfwOy7Ht1a';

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