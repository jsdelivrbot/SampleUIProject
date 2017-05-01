define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('SearchLoadCtrl', ['$scope','$rootScope', '$log','$q', 'PredixAssetService','PredixUserService' ,'PredixViewService','$filter',"$compile",'$state', function ($scope,$rootScope, $log,$q, PredixAssetService,predixUserService, PredixViewService,$filter,compile,$state) {
		
		console.log("SearchLoadCtrl is working");
		$scope.btn_status = 1;
		$scope.displayCostInputPage = true;
		$scope.backToFS = function(){
			$state.go('finsum-dashboard');
		}
		
		$scope.fsStatusDropdown = [
			    "AS BID",
			    "Estimate",
			    "AS SOLD",
			    
			  ]
		
		$scope.reportCrrencyDropdown = [
		           			    "USD",
		           			    "EUR",
		           			    "CAD",
		           			    "GBP"
		           			    
		           			  ]
		           		
		
		
		$scope.fsStatus = function(){
			debugger;
	   		$scope.fsStatusArray = [];
    		angular.forEach($scope.fsStatusDropdown, function(value, key) {
    			 if(value){
    				 $scope.fsStatusArray.push({status_id:key,statusName:value});
    			 }	 
    		});
    		
	   	  	
    	}
		$scope.fsReport = function(){
			debugger;
	   		$scope.fsReportCurrencyArray = [];
    		angular.forEach($scope.reportCrrencyDropdown, function(value, key) {
    			 if(value){
    				 $scope.fsReportCurrencyArray.push({report_id:key,reportCurName:value});
    			 }	 
    		});
    	}
    	
		//----------------------------- Cost Input page start ----------------------------------------------------------------------------------------------------------------
		$scope.costInput = function(){
			$scope.displayCostInputPage = true;
			$scope.displayPriceInputPage = false;
			$scope.displayImportProductsPage = false;
			$scope.displaySetFxPage = false;
			$scope.displayReportPage = false;
			$scope.displayCostDetailReportPage = false;
			$scope.displayExportPage = false;
		}
		//----------------------------- Cost Input page end ----------------------------------------------------------------------------------------------------------------
		
		
		//----------------------------- Price Input page start ----------------------------------------------------------------------------------------------------------------
		$scope.priceInput = function(){
			$scope.displayPriceInputPage = true;
			$scope.displayCostInputPage = false;
			$scope.displayImportProductsPage = false;
			$scope.displaySetFxPage = false;
			$scope.displayReportPage = false;
			$scope.displayCostDetailReportPage = false;
			$scope.displayExportPage = false;
		}
		//----------------------------- Price Input page end ----------------------------------------------------------------------------------------------------------------
		
		//----------------------------- Import Products page start ----------------------------------------------------------------------------------------------------------------
		$scope.importProducts = function(){
			$scope.displayImportProductsPage = true;
			$scope.displayPriceInputPage = false;
			$scope.displayCostInputPage = false;
			$scope.displaySetFxPage = false;
			$scope.displayReportPage = false;
			$scope.displayCostDetailReportPage = false;
			$scope.displayExportPage = false;
		}
		//----------------------------- Import Products page end ----------------------------------------------------------------------------------------------------------------
		
		//----------------------------- Import Products page start ----------------------------------------------------------------------------------------------------------------
		$scope.setFx = function(){
			$scope.displaySetFxPage = true;
			$scope.displayImportProductsPage = false;
			$scope.displayPriceInputPage = false;
			$scope.displayCostInputPage = false;
			$scope.displayReportPage = false;
			$scope.displayCostDetailReportPage = false;
			$scope.displayExportPage = false;
			
		}
		//----------------------------- Import Products page end ----------------------------------------------------------------------------------------------------------------
		
		//----------------------------- FinSum Report page start ----------------------------------------------------------------------------------------------------------------
		$scope.finSumReport = function(){
			$scope.displayReportPage = true;
			$scope.displaySetFxPage = false;
			$scope.displayImportProductsPage = false;
			$scope.displayPriceInputPage = false;
			$scope.displayCostInputPage = false;
			$scope.displayCostDetailReportPage = false;
			$scope.displayExportPage = false;
			
		}
		//----------------------------- FinSum Report page end ----------------------------------------------------------------------------------------------------------------
		
		//----------------------------- Cost Detail Report page start ----------------------------------------------------------------------------------------------------------------
		$scope.costDetailReport = function(){
			$scope.displayCostDetailReportPage = true;
			$scope.displayReportPage = false;
			$scope.displaySetFxPage = false;
			$scope.displayImportProductsPage = false;
			$scope.displayPriceInputPage = false;
			$scope.displayCostInputPage = false;
			$scope.displayExportPage = false;
			
		}
		//----------------------------- Cost Detail Report page end ----------------------------------------------------------------------------------------------------------------
		
		//----------------------------- FinSum Export page start ----------------------------------------------------------------------------------------------------------------
		$scope.exportFS = function(){
			$scope.displayExportPage = true;
			$scope.displayCostDetailReportPage = false;
			$scope.displayReportPage = false;
			$scope.displaySetFxPage = false;
			$scope.displayImportProductsPage = false;
			$scope.displayPriceInputPage = false;
			$scope.displayCostInputPage = false;
			
		}
		//----------------------------- FinSum Export page end ----------------------------------------------------------------------------------------------------------------
    }]);
});
