/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
define(['angular'], function (angular) {
    'use strict';
    /**
     * Application configurations
     * This is where configuration is setup for your application.
     */
    return angular.module('app.interceptors', []).config(['$httpProvider', function ($httpProvider) {

        /*
         * Application http interceptor configuration
         * If you are using Siteminder, this interceptor can be used to capture the session timeout on an AJAX request.
         * You can implement your conditions in this interceptor according to your own requirement.
         */
        $httpProvider.interceptors.push(['$q','$location', '$rootScope',  function ($q, $location, $rootScope) {
        	
        	$location.pendingRequests = 0;
        	var date = new Date();
        	$rootScope.date = date;
        	$rootScope.showSpinner=true;
//        	populateUserSSOToHeader();
            return {
                // optional method
                'request': function (config) {
//                	debugger;
                	/*if(config.data && config.data.showLoader==false){
//                		alert("loader"+config.headers.showLoader);
                		delete config.headers.showLoader;
                		return config;
                	}*/
                	var currDate = new Date();
                	var timeDiffSecs = (currDate.getTime() - $rootScope.date.getTime()) / 1000; 
                	if(timeDiffSecs < 1800){
	                	$location.pendingRequests++;
	                	if($location.pendingRequests == 1){
	                		if($rootScope.showSpinner){
	                			$rootScope.date = currDate;
	                			$("#spinner").show();
	                		}
	                	}
	                    return config;
                	}else{
                		if($rootScope.showSpinner)
                		$('#sessionTimeOut').click();
                	}
                    // do something before request
                    return config;
                },
                // optional method
                'requestError': function (rejection) {
                	
                	$rootScope.showSpinner = true;
                	$location.pendingRequests--;
                	$("#spinner").hide();
                    //handle error
                    return $q.reject(rejection);
                },
                // optional method
                'response': function (response) {
                	$rootScope.showSpinner = true;
                	$location.pendingRequests--;
	            	if($location.pendingRequests == 0){
	            		$("#spinner").hide();
	            		//alert(location.pendingRequests);	
	            		//angular.element("#modal-demo").modal('hide');
//	            		$("#modal-demo").hide();
	            	}
                    // do something on success
                    return response;
                },
                // (optional) Redirect user to login page when unauthorized (401)
                // If you want to allow 401's, you can remove this method.
                'responseError': function (rejection) {
                	$rootScope.showSpinner = true;
                	$location.pendingRequests--;
                	$("#spinner").hide();
                    // handle error
                    return $q.reject(rejection);
                }
            };
        }]);
    }]);
});
