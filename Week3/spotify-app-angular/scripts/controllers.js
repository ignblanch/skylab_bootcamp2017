angular.module('spotifyApp')


	.controller('artistController', ['SpotifyService', function (SpotifyService){

		var self = this;

		self.query = '';

		self.search = function() {	
            SpotifyService.artistSearch(self.query, function(oData){
            	console.log(oData);
            	self.artistFound = true;
            	self.artistPic = oData.data.artists.items[0].images[0].url;
            	self.artists = oData.data.artists.items;
            });
        }
       
	}])

	.controller('albumController', ['SpotifyService', function (SpotifyService){
	
    var self = this;

	self.query = '';

		self.search = function(id) {
			console.log('item clicked!');
            SpotifyService.albumsearch (id, function(oData){
            	console.log('success!')
            	console.log(oData);
            });
        }

	}])