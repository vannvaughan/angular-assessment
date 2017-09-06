angular.module('app')
    .controller('productDetailsCtrl', function( $scope, shopService, $stateParams ){

        $scope.getProductsId = function(){
            shopService.getProductsId($stateParams.id).then(response => {
                $scope.product = response.data;
            });
        }

        $scope.getProductsId();
    
    });