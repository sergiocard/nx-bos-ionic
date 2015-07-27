function HomeCtrl($scope, baseDataService, loadingService) {
    var viewModel = this;
    viewModel.sportList = [];

    activate();

    function activate() {
        return loadBaseData().then(function() {
            console.log('Activated Home View');
        });
    }

    function loadBaseData() {
        return baseDataService.getBaseData(3)
            .then(function(responseBaseData) {
                //$scope.responseBaseData = responseBaseData;
                viewModel.sportList = responseBaseData.sportList;
                return responseBaseData.sportList;
            }, function(error) {
                console.log(error);
            });
    }

}