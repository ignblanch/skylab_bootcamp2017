angular.module('spotifyApp')

	.controller('artistController', ['artistService', function (artistService){

		var self = this;

		self.query = '';

		self.search = function() {
            artistService.search(self.query, function(oData){

            	console.log(oData);
            	self.artistFound = true;
            	self.artistPic = oData.data.artists.items[0].images[0].url;
            	self.items = oData.data.artists.items;


            });
        }
       
	}])

	.controller('albumController', ['albumService', function (albumService){


	}])