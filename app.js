WikiViewer = angular.module('WikiViewer', [])

WikiViewer.controller('WikiCtrl', ['$scope', '$http', function($scope,$http) {

	$scope.Search = function() {
		$http({
			method: 'JSONP',
			url: 'https://en.wikipedia.org/w/api.php',
			params: {
				action: 'opensearch',
				search: $scope.searchTerm,
				limit: 10,
				namespace: 0,
				format: 'json',
				callback: 'JSON_CALLBACK'
			}
		}).then(function sucess(response) {
			$scope.res = response;
			$scope.resArray = [];
			for(var i=0;i<$scope.res.data[1].length;i++) {
				var resObj = {
          title: $scope.res.data[1][i],
          description: $scope.res.data[2][i],
          link: $scope.res.data[3][i]
        }
        $scope.resArray.push(resObj);
			}

			console.log('success ', response.data);
		}, function error(response) {
			console.log('error ', response);
		})
	}

	$scope.clearAll = function(){
		console.log('hit clear');
	  	if($scope.searchTerm !== '') {
	  		$scope.searchTerm = '';
      	$scope.res = [];
      	$scope.Search();
	  	}
  	}

}])