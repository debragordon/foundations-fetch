"use strict";

var app = angular.module("fetchApp", function($scope, ResponseFactory) {

  $scope.responses = [];

  $scope.DOMWriter = () => {
    //make a results helper function that the fetch function will call once it has the data
    console.log("this is testing the helper function");
  }

  $scope.fetch = () => {

    if (getRequest) {
      // if user wants GET, call the GET function from FACTORY
      ResponseFactory.dataGET()
      .then(() => {

      });
      // display results in div
      $scope.DOMWriter();

    } else if (postRequest) {
      // if user wants POST, call the POST function from FACTORY
      ResponseFactory.dataPOST()
      .then(() => {

      });
      // display results in div
      $scope.DOMWriter();

    } else if (httpRequest) {
      // if user wants OPTIONS, call the OPTIONS function from FACTORY
      ResponseFactory.dataHTTP()
      .then(() => {

      });
      // display results in div
      $scope.DOMWriter();

    } else {
      // if user wants HEAD, call the HEAD function from FACTORY
      ResponseFactory.dataHTTP()
      .then(() => {

      });
      // display results in div
      $scope.DOMWriter();

    }

  };

});
