define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('AdminstrationCtrl', ['$scope','$rootScope', '$log','$q', 'PredixAssetService','PredixUserService' ,'PredixViewService','$filter',"$compile",'$state', function ($scope,$rootScope, $log,$q, PredixAssetService,predixUserService, PredixViewService,$filter,compile,$state) {
		
		console.log("AdminstrationCtrl is working");
		
    }]);
});
