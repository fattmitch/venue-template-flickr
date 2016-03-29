(function() {
    function flickrCtrl($scope, flickrFactory) {
        
        
        
        flickrFactory.getImagesFromUserById({
            id:"139596112@N02",
            lang: "en-en"
        }).then(function(_data){
            
            var images = _data.data.items;
                        
            for (var i = 0; i < images.length; i++) {
                images[i].media.m = images[i].media.m.replace('_m.', '_h.');
            }
                        
            $scope.imageResults = images;
            
    });
        
        
       
        
        
    }
    
    angular
        .module('flickrTemplate')
        .controller('flickrCtrl', ['$scope', 'flickrFactory', flickrCtrl]);
})();