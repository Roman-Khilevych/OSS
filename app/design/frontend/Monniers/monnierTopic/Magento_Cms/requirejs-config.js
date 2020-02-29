var config = {
    map: {
        '*' : {
            customJs : 'Magento_Cms/js/customer-js'
        }
    },

    config:{
        mixins: {
            'Magento_Checkout/js/checkout-data' : {
                'Magento_Cms/js/checkout-data-mixin' : true
            }
        }
    }



};
