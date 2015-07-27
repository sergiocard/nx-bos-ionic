var commonServices = angular.module('common.services',[
    'ngResource',
    'common.model'
]);

commonServices.service('loadingService', ['$http', '$rootScope', '$ionicLoading', loadingService]);
commonServices.factory('baseDataResource', ['$resource', baseDataResource]);
commonServices.factory('baseDataService', ['ResponseBaseData', 'baseDataResource', baseDataService]);