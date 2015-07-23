var baseDataModule = angular.module('common.services',[
    'ngResource',
    'common.model'
]);

baseDataModule.factory('baseDataResource', ['$resource', baseDataResource]);
baseDataModule.factory('baseDataService', ['Response', 'baseDataResource', baseDataService]);