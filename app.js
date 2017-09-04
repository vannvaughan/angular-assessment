angular.module('app', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: './views/home.html'
            })
            .state('shop',{
                url: '/shop',
                templateUrl: './views/shop.html',
                controller: 'shopCtrl'
            })
            .state('about',{
                url: '/about',
                templateUrl: './views/about.html'
            })
            .state('blog',{
                url: '/blog',
                templateUrl: './views/blog.html'
            })
            .state('product-details',{
                url: '/product-details/:id',
                templateUrl: './views/product-details.html',
                controller: 'productDetailsCtrl'
            })

    })