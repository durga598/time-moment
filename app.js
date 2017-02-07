var mainApp = angular.module("DateTime", ['toggle-switch']);
mainApp.controller('TimeController', function($scope) {



    var ev;

    $scope.time1 = moment().day(0).hour(0).minute(0).second(0).millisecond(0);
    $scope.time = $scope.time1.format('hh:mm:ss A');
    $scope.switchStatusValue = true;
    $scope.switchStatus = function() {

        $scope.switchStatusValue = !$scope.switchStatusValue;
        $scope.min(ev);
    }

    // $scope.$watch("switchStatusValue", function(newData, oldData) {
    $scope.min = function($event) {
        // event = $event;
        if ($scope.switchStatusValue) {
            $scope.time = $scope.time1.format('LTS');
            $scope.time1 = $scope.time1.add(event.target.id, 'm');
            $scope.time = $scope.time1.format('hh:mm:ss A');
            // console.log($scope.time1);

        } else {
            $scope.time = $scope.time1.format('HH:mm:ss');
            $scope.time1 = $scope.time1.add(event.target.id, 'm');
            $scope.time = $scope.time1.format('HH:mm:ss');
            // console.log($scope.time1);
        }
    };
    $scope.$watch("time", function(newData, oldData) {
        console.log(newData, oldData);
        // $scope.updateClock = function(newData) {
        //
        //     if (newData) {
        //         var now = newData,
        //             second = now.seconds() * 6,
        //             minute = now.minutes() * 6 + second / 60,
        //             hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
        //
        //         $('#hour').css("transform", "rotate(" + hour + "deg)");
        //         $('#minute').css("transform", "rotate(" + minute + "deg)");
        //         $('#second').css("transform", "rotate(" + second + "deg)");
        //     }
        //
        // }
    });


    $scope.timedUpdate = function() {
        console.log("Called");
        //  $scope.updateClock($scope.time1);
    }


});
