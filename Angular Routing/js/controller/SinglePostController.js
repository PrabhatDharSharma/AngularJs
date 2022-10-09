app.controller("SinglePostController", function($scope, $routeParams){
    
    var post1 = {
        title: "First Post",
        text: "This is my first post and it is awesome."
    }

    var post2 = {
        title: "Second Post",
        text: "This is my secong post and it is short."
    }

    switch($routeParams.id){
        case '1':
            $scope.post = post1;
            break;
        case '2':
            $scope.post = post2;
            break;
        default:
            $scope.post = post1;
            break;
}
})