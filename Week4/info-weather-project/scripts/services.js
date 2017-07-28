/* global angular */
angular.module('infoWeatherApp')

    .service('WeatherService', function ($http) {
      var self = this

      self.search = function (query, callback) {
        self.query = query

        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + self.query + '&appid=68d52a9f0d93266ba323fbb2e254f29d&units=metric'

        $http.get(url)
                .then(function (response) {
                  console.log('succes')
                  console.log(response)

                  callback(response)
                }, function error (response) {
                  console.error('ko' + response)
                })
      }

      self.listCities = function (callback) {
        $http.get('../assets/spain_city_list.json')
        .then(function (response) {
          callback(response)
        })
      }

      self.fiveDays = function (query, callback) {
        self.query = query

        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + query + '&appid=68d52a9f0d93266ba323fbb2e254f29d&units=metric'

        $http.get(url)
                .then(function (response) {
                  console.log('succes')
                  console.log(response)
                  callback(response)
                }, function error (response) {
                  console.error('ko' + response)
                })
      }
    })
