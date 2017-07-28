/* global angular */
angular.module('spotifyApp')

.controller('ArtistController', ['SpotifyService', function (SpotifyService) {
  var self = this

  self.query = ''

  self.searchArtist = function () {
    SpotifyService.artistSearch(self.query, function (oData) {
      console.log(oData)
      self.artistFound = true
      self.artistPic = oData.data.artists.items[0].images[0].url
      self.artists = oData.data.artists.items
    })
  }

  self.searchAlbum = function (id) {
    self.id = id

    console.log('item clicked!')

    SpotifyService.albumSearch(id, function (oData) {
      self.albums = oData.data.items
      console.log('success!')
      console.log(oData)
      console.log(self.albums)
    })
  }
}])
