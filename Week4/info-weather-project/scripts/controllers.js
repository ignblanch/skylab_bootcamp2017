/* global angular */

angular.module('infoWeatherApp')

    .controller('SearchController', function ($location, $rootScope, WeatherService) {
      var self = this

      self.query = ''
      $rootScope.dataLoaded = false

      self.loadCities = function () {
        WeatherService.listCities(function (response) {
          self.allCities = response.data
          console.log(self.allCities)
          $rootScope.dataLoaded = true
        })
      }

      self.getQuery = function () {
        $rootScope.dataLoaded = false
        console.log('button clicked!')
        var query = self.query
        console.log(query)
        $location.path('/results/' + query)
      }
    })

    .controller('ResultsController', function (WeatherService, $rootScope, $routeParams) {
      var self = this
      self.Math = window.Math

      var query = $routeParams.query

      WeatherService.search(query, function (response) {
        self.city = response
        self.Temp = Math.floor(response.data.main.temp)
        self.IconUrl = 'http://openweathermap.org/img/w/'
        self.IconUrl += response.data.weather['0'].icon + '.png'
        self.Cloudy = response.data.weather['0'].description
        self.T_max = response.data.main.temp_max
        self.T_min = response.data.main.temp_min
        self.Humidity = response.data.main.humidity
        self.Pressure = response.data.main.pressure
        $rootScope.dataLoaded = true
      })

      self.fiveDays = function () {
        var query = $routeParams.query
        WeatherService.fiveDays(query, function (response) {
          self.daysTime = response.data.list
          console.log(response)
        })
      }
    })
    .controller('ThumbnailsController', function (WeatherService) {
      var self = this
      WeatherService.search('paris', function (response) {
        self.paris = response

        self.parisTemp = Math.floor(response.data.main.temp)
        self.parisIconUrl = 'http://openweathermap.org/img/w/'
        self.parisIconUrl += response.data.weather['0'].icon + '.png'
        self.parisCloudy = response.data.weather['0'].description
        self.parisT_max = response.data.main.temp_max
        self.parisT_min = response.data.main.temp_min
        self.parisHumidity = response.data.main.humidity
        self.parisPressure = response.data.main.pressure
      })

      WeatherService.search('london', function (response) {
        self.london = response

        self.londonTemp = Math.floor(response.data.main.temp)
        self.londonIconUrl = 'http://openweathermap.org/img/w/'
        self.londonIconUrl += response.data.weather['0'].icon + '.png'
        self.londonCloudy = response.data.weather['0'].description
        self.londonT_max = response.data.main.temp_max
        self.londonT_min = response.data.main.temp_min
        self.londonHumidity = response.data.main.humidity
        self.londonPressure = response.data.main.pressure
      })

      WeatherService.search('new york', function (response) {
        self.newyork = response

        self.newyorkTemp = Math.floor(response.data.main.temp)
        self.newyorkIconUrl = 'http://openweathermap.org/img/w/'
        self.newyorkIconUrl += response.data.weather['0'].icon + '.png'
        self.newyorkCloudy = response.data.weather['0'].description
        self.newyorkT_max = response.data.main.temp_max
        self.newyorkT_min = response.data.main.temp_min
        self.newyorkHumidity = response.data.main.humidity
        self.newyorkPressure = response.data.main.pressure
      })
    })
