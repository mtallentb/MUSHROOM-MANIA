"use strict";

console.log("Mushroom Factory");

app.factory("MushroomFactory", function($q, $http) {

    const getShrooms = function() {
        console.log("Getting Shrooms...");
        return $q((resolve,reject) => {
            $http.get('./data/mushrooms.json')
            .then((shrooms) => {
                resolve(shrooms);
            })
            .catch((error) => {
                console.log('Error');
                reject(error);
            });
        });
    };

    return { getShrooms };
});
