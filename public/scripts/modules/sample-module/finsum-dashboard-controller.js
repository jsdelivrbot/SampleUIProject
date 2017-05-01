define(['angular', './sample-module'], function (angular, controllers) {
   // 'use strict';

    // Controller definition
    controllers.controller('FinsumDashboardsCtrl', ['$scope','$rootScope','$log','$q', 'PredixAssetService','PredixUserService' ,'PredixViewService','$filter',"$compile",'$state', function ($scope,$rootScope, $log,$q, PredixAssetService,predixUserService, PredixViewService,$filter,compile,$state) {
		
		console.log("finsum-dashbord is working");
		$scope.selectedRevision ="1";
		$scope.disabledCostFields = true;
		$scope.selectedStatus = "Estimate";
		$scope.openRecentFinsum = function(){
			$state.go('finSum-Revision');
		}
		$scope.downloadCoreComp = function(){
			debugger;
	    	PredixViewService.getCoreCompetencyReport(function(data){
	    		debugger;
	    		var index=01;
	    		$scope.getSManagerreportsByTfa = data.adminTfaCoreCompetencyReport;
	    		angular.forEach($scope.getSManagerreportsByTfa ,function(value,key,$index){
	    			value.OpptyNumber = "111222";
	    			value.FinSumRevision = index;
	    			value.FinSumStatus = "AS BID";
	    			value.RecordDescription = "ACME Project…";
	    			value.ReportingCurrency = "USD";
	    			value.LastUpdatedDate = "3/6/2017";
	    			value.LastModifiedDate = "Denise Rockwell";
	    			if(value.OpptyNumber){
	    				value.OpptyNumber = '<i onclick=\"finSumFavTouchUpInside()\" class="fa fa-star"></i>'+value.OpptyNumber;
	    			}
	    			if(value.FinSumRevision){
	    				value.FinSumRevision = '<a onclick=\"finSumVersionTouchUpInside()\" href = "" class = "finSumRevision">'+value.FinSumRevision+'</a>';
	    			}
	    			index += 1;
	    			if(index==100)
	    				{
	    				index=01;
	    				
	    				}
	    		})
	    	});
    	}
		$scope.openFinsumBasedOnSelection = function(){
			$state.go('finSum-Revision');
		}
		 
		// Create New Record Functinality
		
		$scope.createNewRecord = function(){
			Polymer.dom(document).querySelector(".px-modal-createNew-trigger").modalButtonClicked();
		}
		$scope.createNewRec = function(opprNumber,selectedRevision,selectedStatus,selectedCurrency,enterDesc){
			debugger;
			var $successmsg =  $("#successMessage");
			if($scope.createNewRecForm.$invalid == true){
	    		return false;
	    	}
			var opprNewRec = {};
			opprNewRec.OpptyNumber = opprNumber;
			opprNewRec.FinSumRevision = selectedRevision;
			opprNewRec.FinSumStatus = selectedStatus;
			opprNewRec.RecordDescription = enterDesc;
			opprNewRec.LastUpdatedDate = "3/6/2017";
			opprNewRec.LastModifiedDate = "Denise Rockwell";
			if(opprNewRec.OpptyNumber){
				opprNewRec.OpptyNumber = '<i class="fa fa-star-o"></i>'+opprNewRec.OpptyNumber;
			}
			if(opprNewRec.FinSumRevision){
				opprNewRec.FinSumRevision = '<a href = "" class = "finSumRevision">'+opprNewRec.FinSumRevision+'</a>';
			}
			$scope.getSManagerreportsByTfa.unshift(opprNewRec);
			$scope.opprNumber = "";
			$scope.selectedCurrency = "";
			$scope.enterDesc = "";
			$scope.submitted = false;
			$successmsg.find('.fade-out, .hidden ').removeClass('fade-out hidden');
			$successmsg.show();
		     $("html, body").animate({ scrollTop: 0 }, "slow");
			$("#cancelCreateNewRec").trigger('click');
		}
		
		$scope.cancelCreateNewRec = function(){
			
			$("#cancelCreateNewRec").trigger('click');
		}
		
	//------------------------------------	Finsum Revision Page start---------------------------------------------------------------------------------------
		
		console.log("SearchLoadCtrl is working");
		$scope.btn_status = 1;
		$scope.displayCostInputPage = true;
		$scope.backToFS = function(){
			debugger;
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
    	
		$scope.fsRevisionData = function(){
		PredixViewService.getCoreCompetencyReport(function(data){
    		debugger;
    		var index=01;
    		var index1 = 0.6667;
    		var index2 = 4.666;
    		$scope.getSManagerreportsByTfa = data.adminTfaCoreCompetencyReport;
    		angular.forEach($scope.getSManagerreportsByTfa ,function(value,key,$index){
    			value.MFID = "MF-013";
    			value.FinSumTier1 = "Equipment";
    			value.FinSumTier2 = "GT";
    			value.FinSumTier3 = "AO Base";
    			value.FinSumTier4 = "Labor";
    			value.MFDescription = "Description - MF - 001";
    			value.CostSource = index;
    			value.CurrencySource = "GBP";
    			value.Source = "Auto - Calc";
    			value.FXReporting = index1;
    			value.CostReporting = index2;
    			value.Currency = "USD";
    			index += 1;
    			index1 += 100;
    			index2 += 200;
    			if(index==100)
    				{
    				index=01;
    				
    				}
    		})
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
		$scope.editCost = function(){
			debugger;
			$scope.disabledCostFields = false;
		}
		
		$scope.flagRevisions = function(){
			debugger;
			if($scope.disabledCostFields == true){
				return false;
			}
			$scope.showHideflags = !$scope.showHideflags;
		}
		$scope.flagRevisionsColors="fa fa-flag flagColor1";
		$scope.revision1Click = function(){
			debugger;
			$scope.flagRevisionsColors="fa fa-flag flagColor1";
			$scope.showHideflags = false;
		}
		$scope.revision2Click = function(){
			debugger;
			$scope.flagRevisionsColors="fa fa-flag flagColor2";
			$scope.showHideflags = false;
		}
		$scope.revision3Click = function(){
			debugger;
			$scope.flagRevisionsColors="fa fa-flag flagColor3";
			$scope.showHideflags = false;
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
			
			
			PredixViewService.getCoreCompetencyReport(function(data){
	    		debugger;
	    		var index=01;
	    		var index1 = 0.6667;
	    		var index2 = 4.666;
	    		$scope.getSManagerreportsByTfa = data.adminTfaCoreCompetencyReport;
	    		angular.forEach($scope.getSManagerreportsByTfa ,function(value,key,$index){
	    			value.MFID = "MF-013";
	    			value.FinSumTier1 = "Equipment";
	    			value.FinSumTier2 = "GT";
	    			value.FinSumTier3 = "AO Base";
	    			value.FinSumTier4 = "Labor";
	    			value.MFDescription = "Description - MF - 001";
	    			value.CostSource = index;
	    			value.CurrencySource = "GBP";
	    			value.Source = "Auto - Calc";
	    			value.FXReporting = index1;
	    			value.CostReporting = index2;
	    			value.Currency = "USD";
	    			index += 1;
	    			index1 += 100;
	    			index2 += 200;
	    			if(index==100)
	    				{
	    				index=01;
	    				
	    				}
	    		})
	    	});
			
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
		
		
		
		
		
		
		
		
		
		
		
		//------------------------------------	Finsum Revision Page end---------------------------------------------------------------------------------------
		
		
		
		 
    }]);
});
