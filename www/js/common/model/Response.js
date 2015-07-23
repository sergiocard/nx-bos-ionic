var commonModelModule = angular.module('common.model', []);

commonModelModule.factory('Response', function () {
    /**
     * Private property
     */
    var CODE_SUCCESS = 1;
    var CODE_SUCCESS_STRING = 'ok';

    /**
     * Constructor, with class name
     */
    function Response() {
        // Public properties, assigned to the instance ('this')
        this.code = CODE_SUCCESS;
        this.codeDescription = CODE_SUCCESS_STRING;
    }

    /**
     * Public method, assigned to prototype
     */
    Response.prototype.toString = function () {
        return this.code + ' - ' + this.codeDescription;
    };

    /**
     * Private function
     */
    function checkFunction(role) {
        return true;
    }

    /**
     * Static property
     * Using copy to prevent modifications to private property
     */
    Response.CODE_SUCCESS = angular.copy(CODE_SUCCESS);

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Response.build = function (data) {
        var newInstance = new Response();
        angular.copy(data, newInstance);
        return newInstance;
    };

    Response.apiResponseTransformer = function (responseData) {
        if (angular.isArray(responseData)) {
            return responseData
                .map(Response.build)
        }
        return Response.build(responseData);
    };

    /**
     * Return the constructor function
     */
    return Response;
});