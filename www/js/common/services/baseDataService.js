function baseDataService(ResponseBaseData, baseDataResource) {
    //var privateField = true; // optional private fields
    var service  = {
        getBaseData: getBaseData
    };
    return service;

    function getBaseData(platformId) {
        return baseDataResource
            .get({platformId:platformId}).$promise
            .then(ResponseBaseData.apiResponseTransformer);
    }
}

