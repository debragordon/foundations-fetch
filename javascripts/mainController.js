;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url ;

    // user enters URL - bind their response as the response.url
    // user selects type of response - bind their selection as the response.method
    // user clicks submit
      // based on the response.method, the url they entered is contacted and data is obtained
      // run through a switch statement to determine with method to use
        // GET
        // POST
        // OPTIONS
        // HEAD
      // INFO received from URL is then displayed in the "results" div
  });
})();


  // $scope.fetch = () => {

  //   requestService.get($scope.url).then((success) => {
  //       const response = new Response(success);
  //       $scope.responses.push(response);
  //   }, (error) => {
  //     debugger
  //     //do something else
  //   });
  // };