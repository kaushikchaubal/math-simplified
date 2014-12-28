(function() {
    var app = angular.module('learn', []);

    app.controller('StoreController', ['$scope', '$resource', function($scope, $resource) {
        var data = $resource('/api/getCourseList');

        data.query(function(results) {
            $scope.products = results;
        });
    }]);

    app.controller("TabController", function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
            this.tab = setTab;
        };
    });

    app.controller('GalleryController', function() {
        this.current = 0;

        this.setCurrent = function(imageNumber) {
            this.current = imageNumber || 0;
        };
    });

    app.controller("ReviewController", function() {

        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();