angular.module('app')
    .controller('productDetailsCtrl', function( $scope, shopService, $stateParams ){

        console.log($stateParams)

        $scope.getProductsId = function(){
            shopService.getProductsId($stateParams.id).then(response => {
                $scope.product = response.data;
            });
        }

        $scope.getProductsId();
    
    });