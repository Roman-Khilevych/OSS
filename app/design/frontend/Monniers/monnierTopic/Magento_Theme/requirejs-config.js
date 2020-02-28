var config = {

    deps : ['Magento_Theme/js/loag-before-compare'],

    shim : {
        'Magento_Catalog/js/view/compare-products' : {
         deps: ['Magento_Theme/js/log-shim-compare']
        }
    },

    patch : {
        'Magento_Catalog' : 'Magento_Catalog/js'
    }

};
