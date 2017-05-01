/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
define(['angular', 'angular-ui-router'], function(angular) {
    'use strict';
    return angular.module('app.routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        //Turn on or off HTML5 mode which uses the # hash
        $locationProvider.html5Mode(true).hashPrefix('!');

        /**
         * Router paths
         * This is where the name of the route is matched to the controller and view template.
         */
        $stateProvider
            .state('secure', {
                template: '<ui-view/>',
                abstract: true,
                resolve: {
                    authenticated: ['$q', 'PredixUserService', function ($q, predixUserService) {
                        var deferred = $q.defer();
                        predixUserService.isAuthenticated().then(function(userInfo){
                            deferred.resolve(userInfo);
                        }, function(){
                            deferred.reject({code: 'UNAUTHORIZED'});
                        });
                        return deferred.promise;
                    }]
                }
            })
            
			.state('finum-dashboard', {
		    	/*parent: 'secure',*/
		        url: '/finsum-dashboard',
		        templateUrl: 'views/finsum-dashboard.html',
		        controller: 'FinsumDashboardsCtrl'
		    })
		    .state('finSum-Revision', {
		        url: '/finSum-Revision',
		        templateUrl: 'views/finSum-Revision.html',
		        controller: 'FinsumDashboardsCtrl'
		    })
			.state('Search-load', {
		    	url: '/Search-load',
		        templateUrl: 'views/Search-load.html',
		        controller: 'SearchLoadCtrl'
		    })
			.state('my-favorites', {
		    	url: '/my-favorites',
		        templateUrl: 'views/my-favorites.html',
		        controller: 'MyFavoritesCtrl'
		    })
			.state('administration-dashboard', {
		    	url: '/administration-dashboard',
		        templateUrl: 'views/administration-dashboard.html',
		        controller: 'AdminstrationCtrl'
		    })
			.state('manage-fx', {
		    	url: '/manage-fx',
		        templateUrl: 'views/manage-fx.html',
		        controller: 'ManagefxCtrl'
		    })
			.state('manage-tiers', {
		    	url: '/manage-tiers',
		        templateUrl: 'views/manage-tiers.html',
		        controller: 'ManageTiersCtrl'
		    })
			.state('access-control', {
		    	url: '/access-control',
		        templateUrl: 'views/access-control.html',
		        controller: 'AcessControlCtrl'
		    });
            


        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            document.querySelector('px-app-nav').markSelected('/finum-dashboard');
            $state.go('finum-dashboard');
        });

    }]);
});
