function HomeCtrl($scope, baseDataService) {
    baseDataService.get(3)
        .then(function(responseBaseData) {
            $scope.responseBaseData = responseBaseData;
        }, function(asd) {
            console.log();
        });
}