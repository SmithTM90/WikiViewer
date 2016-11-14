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

			for(var i=0;i<$scope.res.length;i++) {
				var resObj = {
          title: res.data[1][i],
          description: res.data[2][i],
          link: res.data[3][i]
        }
			}

			console.log('success ', response.data);
		}, function error(response) {
			console.log('error ', response);
		})
	}

}])