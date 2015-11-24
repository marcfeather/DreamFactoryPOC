'use strict';

angular.module('DreamFactoryPOC.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$location','$scope',"$http", function($location,$scope,$http) {
	var self = this;
	var sessionToken = "";
	$scope.loggedIn = false;
	$scope.oneRecordQuery = false;
	$scope.multiParamsQuery = false;

	$scope.login = function(user,pass) {
		$http({
		  method: 'POST',
		  url: 'http://localhost:80/api/v2/system/admin/session',
		  data: {
		  	"email": user,
		  	"password": pass,
		  	"duration": 0
		  }
		}).
		then(function success(response){
			console.log(response);
			$scope.response = response;
			sessionToken = response.data.session_token;
			$scope.loggedIn = true;
		});
	};

	$scope.logout = function(token) {
		$http({
			method: "DELETE",
			url: "http://localhost:80/api/v2/user/session",
			headers: {
				"x-dreamfactory-application-name": "dfTutorial",
	    		"x-dreamfactory-session-token": token,
	    		"cache-control": "no-cache"
			}
		}).then(function success(response) {
			$scope.response = response;
			sessionToken = "";
			$scope.loggedIn = false;
			$scope.user = "";
			$scope.pass = "";
			console.log(response);
		});
	};

	$scope.oneRecord = function(id,field) {
		$http({
			method: "GET",
			url: "http://localhost:80/api/v2/dfTutorial/_table/tbl_ExternalHDSSync/"+id+"?id_field="+field+"",
			headers: {
				"x-dreamfactory-application-name": "dfTutorial",
	    		"x-dreamfactory-session-token": sessionToken,
	    		"cache-control": "no-cache"
			}
		}).then(function success(response) {
			$scope.oneRecordData = response.data;
			$scope.response = response;
			$scope.oneRecordQuery = true;
			console.log(response);
		});
	};

	$scope.multiParams = function(filter) {
		$http({
			method: "GET",
			url: "http://localhost:80/api/v2/dfTutorial/_table/tbl_ExternalHDSSync?filter="+filter,
			headers: {
				"x-dreamfactory-application-name": "dfTutorial",
	    		"x-dreamfactory-session-token": sessionToken,
	    		"cache-control": "no-cache"
			}
		}).then(function success(response) {
			$scope.response = response;
			$scope.multiParamsQuery = true;
			console.log(response);
		});
	};

}]);