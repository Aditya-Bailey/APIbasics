var fs = require('fs');
var WooCommerceAPI = require('woocommerce-api');
// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

var wooCommerce = ((req,res)=>{
    console.log('*******')
    var WooCommerce = new WooCommerceAPI({
      url: 'http://wpdev.crisptag.com',
      consumerKey: 'ck_d77d9660fc1ea668c9113cba31b708ba363871e3',
      consumerSecret: 'cs_1db98b40e9e17ff5ea41e6f59f619f17dacfc1bb',
    //   wpAPI: true,
      version: 'v3'
    });
    console.log('=====', WooCommerce)

    const data = {
        name: "Premium Quality",
        type: "simple",
        regular_price: "21.99",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        categories: [
          {
            id: 9
          },
          {
            id: 14
          }
        ],
        images: [
          {
            src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
          },
          {
            src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
          }
        ]
      };
      
      try {
             WooCommerce.post("products", data, function(data){
                console.log("=======data======", data)
                return data
            })
//           WooCommerce.get("products", function(data){
//       console.log("=======data======", data)
//   })
    
} catch (error) {
    console.log('errorrrr', error)
}
        // .then((response) => {
        //   console.log(response.data);
        // })
        // .catch((error) => {
        //   console.log('ERRORRR',error.response.data);
        // });
        // console.log('=====',a);

});

module.exports={wooCommerce};