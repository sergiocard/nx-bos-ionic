function loadingService($http, $rootScope, $ionicLoading) {
    $rootScope.$watch(isLoadingFunc, function (loading) {
        if (loading) {
            $ionicLoading.show({
                template: 'Loading...'
            });
        } else {
            $ionicLoading.hide();
        }
    });

    function isLoadingFunc () {
        return $http.pendingRequests.length > 0;
    }
}