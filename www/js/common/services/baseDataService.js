function baseDataService(Response, baseDataResource) {
    return {
        get: function (platformId) {
            return baseDataResource
                .get({platformId:3}).$promise
                .then(Response.apiResponseTransformer);
        }
    }
}

