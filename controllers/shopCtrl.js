angular.module('app')
    .controller('shopCtrl', function( $scope, shopService ){

        shopService.getProducts()
            .then(response => {
                $scope.products = response.data
                return response.data
        })


    })