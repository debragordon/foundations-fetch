"use strict";

var app = angular.module("fetchApp", function($q, $http) {

  // All functions should get the following back
    // request **URL**,
    // request **HTTP method**
    // **response time** and
    // **content size** of the response

  let dataGET = (url) => {
    // http method GET
    return $q((resolve, reject) => {
      $http.get(url)
      .success((getObject) => {

      })
      .error((getError) => {

      });
    });
  };

  let dataPOST = () => {
    // http method POST
    return $q((resolve, reject) => {
      $http.post(url)
      .success((postObject) => {

      })
      .error((postError) => {

      });
    });
  };

  let dataHEAD = () => {
    // http method HEAD
    return $q((resolve, reject) => {
      $http.get(url)
      .success((headObject) => {

      })
      .error((headError) => {

      });
    });
  };

  let dataOPTIONS = () => {
    // http method OPTIONS
    return $q((resolve, reject) => {
      $http.get(url)
      .success((headObject) => {

      })
      .error((headError) => {

      });
    });
  };

  return{dataGET: dataGET, dataPOST: dataPOST, dataHEAD: dataHEAD, dataOPTIONS:dataOPTIONS};
});
