app.factory('nyt', ['$http', function($http){

    return $http.get('https://api.nytimes.com/svc/topstories/v2/science.json', {params: {'api-key': "H56FwvrQiqQ5BH1K0vjOMTyNUPp2uTUv"}})

    .success(function(data){
        return data;

    })

    .error(function(data){
        return data;
    })
}])