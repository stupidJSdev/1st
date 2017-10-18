
var myApp = angular.module('myApp', []);
myApp.controller('ctrl', function($scope) {

$scope.tempInput = '';

$scope.tasksArray = [];

$scope.addNew = function () {
    
    if($scope.tempInput) {
        $scope.tasksArray.push($scope.tempInput, $scope.time);
        $scope.tempInput = '';
    } else {
        alert('Yor task is empty')
    };
};
    $scope.hours = 0;
    $scope.min = 0 ;
    $scope.sec = 0 ;
    $scope.timer = setInterval(function() {
        $scope.time = $scope.hours + 'h'+ $scope.min + 'm' + $scope.sec + "s";
        $scope.sec++;
       if ($scope.sec >= 60) {
        $scope.min + 'm' + $scope.sec + "s";
        
           $scope.min++;
           $scope.sec = 0;

       } else if ($scope.min >=6) {
           $scope.hours++;
            $scope.time = $scope.hours + 'h'+ $scope.min + 'm' + $scope.sec + "s";
            $scope.sec = 0;
            $scope.min = 0;
       }
       console.log($scope.time)
        
    }, 1000);
    

  


});