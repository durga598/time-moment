var mainApp = angular.module("DateTime", ['toggle-switch']);
mainApp.controller('TimeController', function($scope) {



    $scope.time1 = moment().day(0).hour(0).minute(0).second(0).millisecond(0);
    $scope.switchStatusValue = true;
    $scope.switchStatus = function() {
        $scope.switchStatusValue = !$scope.switchStatusValue;
    }
    $scope.$watch("switchStatusValue", function(oldData, newData) {

        if (oldData) {
            $scope.time = $scope.time1.format('LTS');

            $scope.min = function($event) {
                $scope.time = $scope.time1.add(event.target.id, 'm').format('LTS');
                console.log($scope.time1);
                
            }

        } else {
            $scope.time = $scope.time1.format('HH:mm:ss');

            $scope.min = function($event) {
                $scope.time = $scope.time1.add(event.target.id, 'm').format('HH:mm:ss');
                console.log($scope.time1);
            }
        }

    });
    $scope.$watch("time1", function(oldData, newData) {
        console.log(oldData,newData);
        $scope.updateClock = function(newData) {

            if (newData) {
                var now = newData,
                    second = now.seconds() * 6,
                    minute = now.minutes() * 6 + second / 60,
                    hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

                $('#hour').css("transform", "rotate(" + hour + "deg)");
                $('#minute').css("transform", "rotate(" + minute + "deg)");
                $('#second').css("transform", "rotate(" + second + "deg)");
            }

        }
    });


    $scope.timedUpdate = function() {
      //  $scope.updateClock($scope.time1);
    }


});
