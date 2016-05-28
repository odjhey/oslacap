'use strict';

/**
 * @ngdoc function
 * @name oslacapApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the oslacapApp
 */
angular.module('oslacapApp')
  .controller('HeaderCtrl', function ($scope, $location) {

    $scope.checkActive = function ( path ){

      return $location.path() === path ? { active: true } :  {} ;
      
    };

  });

