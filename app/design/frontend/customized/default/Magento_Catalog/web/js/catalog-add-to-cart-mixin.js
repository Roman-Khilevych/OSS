define([
        'jquery',
        'mage/translate'
    ],
    function ($) {
        'use strict';

        return function (widget) {
            $.widget('mage.catalogAddToCart', widget, {

                options: {
                    classFilterElem : '.swatch-opt-',
                    classActiveFilter : 'activeElement',
                    parentProduct : '.product-item-details',
                },

                submitForm: function (form) {
                    var element = this.element,
                        numberProduct = form[0].product.value,
                        classOpt = this.options.classFilterElem + numberProduct,
                        parentProductFilter = this.options.parentProduct,
                        classAuditFilter = this.options.classActiveFilter;

                    if (element.hasClass(classAuditFilter)) {
                        element.removeClass(classAuditFilter);
                        return this._super(form);
                    } else {
                        element.addClass(classAuditFilter);
                        element.parents(parentProductFilter).children(classOpt).toggle();
                        return false;
                    }
                }
            });
            return $.mage.catalogAddToCart;
        }
    });
