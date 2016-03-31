(function() {
    function config($locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        
    }
    
    angular
        .module('flickrTemplate', ['jtt_flickr'])
        .config(config);
})();