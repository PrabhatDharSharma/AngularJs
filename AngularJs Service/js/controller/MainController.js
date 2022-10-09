app.controller('MainController', ['$scope', 'nyt', function($scope, nyt){

	$scope.list = []

		nyt.success(function(data){
			var articleList = data.results;
			for(i=1; i<articleList.length; i++){
				var story = {
					title: articleList[i].title,
					abstract: articleList[i].abstract,
					url: articleList[i].url
				}
				$scope.list.push(story)
			}
		})
		
	}]);