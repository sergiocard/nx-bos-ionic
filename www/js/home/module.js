var homeModule = angular.module('homeModule',[
    'common.services'
]);

homeModule.controller('HomeCtrl', ['$scope', 'baseDataService', 'loadingService', HomeCtrl]);