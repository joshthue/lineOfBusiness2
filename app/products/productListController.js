/**
 * Created by josht on 12/7/2015.
 */
(function (){
        "use strict";
        angular
            .module("productManagement")
            .controller("ProductListController",
                        ["productResource",
                            ProductListController]);

    function ProductListController(productResource){
        var vm = this;

        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;
        vm.toggleImage = function(){
            vm.showImage = !vm.showImage;
        };
    }
}());