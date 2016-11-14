WikiViewer = angular.module('WikiViewer', [])

WikiViewer.controller('WikiCtrl', ['$scope', '$http', function($scope,$http) {

	$scope.Search = function() {
		$http({
			method: 'JSONP',
			url: 'https://en.wikipedia.org/w/api.php',
			params: {
				action: 'opensearch',
				search: $scope.searchTerm,
				limit: 20,
				namespace: 0,
				format: 'json',
				callback: 'JSON_CALLBACK'
			}
		}).then(function sucess(response) {
			$scope.res = response.data;
			console.log('success ', response);
		}, function error(response) {
			console.log('error ', response);
		})
	}

}])