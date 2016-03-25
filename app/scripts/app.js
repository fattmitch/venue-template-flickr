(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('gallery', {
                url: '/',
                controller: 'flickrCtrl',
                templateUrl: '/templates/flickr.html'
            });
    }
    
    angular
        .module('flickrTemplate', ['ui.router', 'jtt_flickr'])
        .config(config);
})();