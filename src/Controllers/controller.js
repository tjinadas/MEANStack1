var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller!");

    $http({
        method: 'GET',
        url: '/contactlist'
    })
        .then(function(response) {
            console.log("recieved the data");
            $scope.contactlist =  response.data;
        });

    $scope.addContact = function () {
        console.log($scope.contact);

        $http.post('/contactlist', $scope.contact).then(function (response) {
            console.log(response);
        });
        
    }

}]);