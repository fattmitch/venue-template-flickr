(function() {
    function flickrCtrl($scope, flickrFactory, $timeout) {
        
        var imageResults = [];
        
        flickrFactory.getImagesFromUserById({
            id: "139596112@N02",
            lang: "en-en"
        }).then(function(_data){
            
            var images = _data.data.items;
                        
            for (var i = 0; i < images.length; i++) {
                images[i].media.thumb = images[i].media.m.replace('_m.', '_q.');
                images[i].media.m = images[i].media.m.replace('_m.', '_h.');
            }
                        
            $scope.imageResults = images;
            
    });
        
        $scope.currentIndex = 0;
        
        $scope.setCurrentSlideIndex = function(index) {
            $scope.currentIndex = index;
        };
        
        $scope.isCurrentSlideIndex = function(index) {
            return $scope.currentIndex === index;
        };
        
        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.imageResults.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.imageResults.length - 1;
        };
        
        $scope.navHeight = function () {
            var navHeight = document.getElementById('nav').scrollHeight;
            console.log(navHeight);
            
            $scope.navPosition = {bottom: -(navHeight)+40 + "px"};   
        }
        
        $timeout($scope.navHeight, 500, true);
        
        
    }
    
    angular
        .module('flickrTemplate')
        .controller('flickrCtrl', ['$scope', 'flickrFactory', '$timeout', flickrCtrl]);
})();