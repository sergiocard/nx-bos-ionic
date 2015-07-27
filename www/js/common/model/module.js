var commonModelModule = angular.module('common.model', []);

commonModelModule.factory('Response', ResponseFactory);
commonModelModule.factory('ResponseBaseData', ['Response', ResponseBaseDataFactory]);