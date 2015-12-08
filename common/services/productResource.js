/**
 * Created by josht on 12/7/2015.
 */
(function (){
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
            ["$resource",
                productResource]);

    function productResource($resource){
        return $resource("/api/products/:productId");
    }
}());
