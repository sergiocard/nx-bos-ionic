var directivesModule = angular.module('common.directives', []);

directivesModule.directive('ngLoading', ['$http', function ($http){
        return {
            link: function (scope, elm, attrs) {

                scope.isLoadingFunc = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoadingFunc, function (loading) {
                    if(loading){
                        elm.removeClass('ng-hide');
                    }else{
                        elm.addClass('ng-hide');
                    }
                });
            }
        };
    }]);

