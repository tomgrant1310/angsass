/**
 * Created by tgrant on 25/08/15.
 */
var myApp = angular.module('myApp' , []);

myApp.controller('MyController', function MyController($scope){

    $scope.artists = [
        {
            "name"        : "Tom Grant",
            "shortname"   : "tomgrant",
            "reknown"     : "UkNetWeb",
            "bio"         : "Web Developer"

        },

        {
            "name"        : "John Grant",
            "shortname"   : "johngrant",
            "reknown"     : "UkNetWeb",
            "bio"         : "Web Developer"
        },

        {
            "name"        : "Andy Grant",
            "shortname"   : "andygrant",
            "reknown"     : "UkNetWeb",
            "bio"         : "Web Developer"
        }
    ]

});