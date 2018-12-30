var app = angular.module('getdataApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $http.get("tablesindatabase.php").then(function(response) { $scope.tablesnames = response.data.records; });

    $scope.form = { menotabulecky: '' }; /* declare JSON which will contain requested table name */
    $scope.submitformik = function() {
        var config = { /* declare http request configuration. Must be */
            method: 'POST',
            /* method data are sent */
            url: 'process.php',
            /*path and filename to PHP file which will process request and return data as JSON String */
            data: {
                'menotabulecky': $scope.form.menotabulecky /* requested table name from model/form */
            }
        };

        var request = $http(config);
        request.then(function(response) { /* sucess function */
            $scope.msg = response.data; /* get responded data into scope's variable msg */

        }, function(error) { /* error function */
            $scope.msg = error.data;

        });
    }
}]);