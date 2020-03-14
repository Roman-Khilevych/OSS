define([
    'jquery'
], function ($) {
    'use strict';

    return function (widget) {
        $.widget('mage.catalogAddToCart', widget, {
            submitForm: function (form) {
                console.log('Add to cart mixin');
                console.log(form);
                return this._super(form);
            }
        });
        return $.mage.catalogAddToCart;
    }
});
