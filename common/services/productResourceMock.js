(function (){
    "use strict";

    var app = angular
        .module("productResourceMock",
            ["ngMockE2E"]);

    app.run(function ($httpBackend){
        var products = [
            {"productID" : 1, "productName":"Blender Bottle", "productCode": "BB001", "releaseDate": "01/01/2015", "price":9.99, "imageUrl":"http://nflpool.org/images/logos_45x45/Min.gif"},
            {"productID" : 2, "productName":"BB Wire Shaker", "productCode": "BBWS1", "releaseDate": "04/01/2015", "price":1.49, "imageUrl":"http://nflpool.org/images/logos_45x45/Atl.gif"},
            {"productID" : 3, "productName":"Apple Ipod Touch", "productCode": "AIT", "releaseDate": "10/01/2015", "price":249.49, "imageUrl":"http://nflpool.org/images/logos_45x45/Nyg.gif"},
            {"productID" : 4, "productName":"PlayStation 4", "productCode": "PS4", "releaseDate": "04/11/2011", "price":299.49, "imageUrl":"http://nflpool.org/images/logos_45x45/Bal.gif"},
            {"productID" : 5, "productName":"XBox One", "productCode": "XBOX1", "releaseDate": "11/01/2015", "price":349.49, "imageUrl":"http://nflpool.org/images/logos_45x45/Ari.gif"}
        ];

        //fake call goes here
        var productUrl = "/api/products";
        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*",'');
        $httpBackend.whenGET(editingRegex).respond(function(method,url,data){
            var product = {"productId":0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length-1];

            if(id>0){
                for(var i = 0; i<products.length; i++){
                    if(products[i].productID == id){
                        product = products[i];
                        break;
                    }
                };
            }
            return [200,product,{}];
        });


        //passthrough any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    })
}());