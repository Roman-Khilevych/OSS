var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_Catalog/js/catalog-add-to-cart-mixin': true
            }
        }
    },
    map: {
        '*': {
            validate_password: 'Magento_Cms/js/customized-validate-password'
        }
    }
};
