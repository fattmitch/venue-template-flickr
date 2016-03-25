(function() {
    function flickrCtrl($scope, flickrFactory) {
        
        flickrFactory.getImagesFromUserById({
            id:"139596112@N02",
            lang: "en-en"
        }).then(function(_data){
            
            var originalUrl = _data.data.items[0].media.m;
            
            function replaceLetter(originalUrl) {
                var newUrl = originalUrl.replace("_m.", "_b.");
                console.log(newUrl);
            }
            
            replaceLetter(originalUrl);
            
            console.info(_data);
    });
        
        
    }
    
    angular
        .module('flickrTemplate')
        .controller('flickrCtrl', ['$scope', 'flickrFactory', flickrCtrl]);
})();