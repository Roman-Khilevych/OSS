var config = {

    config: {
        mixins : {
            'Magento_Catalog/js/catalog-add-to-cart' : {
                'Magento_Catalog/js/catalog-add-to-cart-mixin' : true
            }
        }

    },

    map: {
        '*' : {
            sliderUiPrice : 'Magento_Catalog/js/slider-ua-price',
        }
    },




};
