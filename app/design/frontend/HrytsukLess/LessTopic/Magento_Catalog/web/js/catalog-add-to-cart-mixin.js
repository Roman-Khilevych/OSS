define([
        'jquery',
        'mage/translate'
    ],
    function ($) {
        'use strict';

        return function (widget) {
            $.widget('mage.catalogAddToCart', widget, {

                submitForm: function (form) {
                    var element = this.element,
                        numberProduct = form[0].product.value,
                        classOpt = '.swatch-opt-' + numberProduct;

                    if (element.hasClass('activeElement')) {
                        element.removeClass('activeElement');
                        return this._super(form);
                    } else {
                        element.addClass('activeElement');
                        element.parents('.product-item-details').children(classOpt).toggle();
                        return false;
                    }

                }
            });
            return $.mage.catalogAddToCart;
        }
    });
