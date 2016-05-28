'use strict';

/**
 * @ngdoc function
 * @name oslacapApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the oslacapApp
 */
angular.module('oslacapApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todo = [
      'Fight',
      'Be cool'
    ];
  });
