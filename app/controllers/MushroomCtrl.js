"use strict";

console.log("Mushroom Controller");

app.controller("MushroomCtrl", function($scope, MushroomFactory) {

	$scope.shroomArr = [];

	$scope.showShrooms = function() {
	    MushroomFactory.getShrooms()
	    .then((shrooms) => {
			// console.log("shrooms:", shrooms.data);
			let keys = Object.keys(shrooms.data.mushrooms);
			keys.forEach((item, index) => {
				console.log(item);
				let mushroom = shrooms.data.mushrooms[item];
				$scope.shroomArr.push(mushroom);
			});
		})
		.then(() => { console.log("Shroom Array", $scope.shroomArr); });
	};
	


    $scope.showShrooms();
});

app.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.name.toLowerCase().indexOf(searchString) !== -1){
            result.push(item);
        }
        });
        return result;
    };
});

