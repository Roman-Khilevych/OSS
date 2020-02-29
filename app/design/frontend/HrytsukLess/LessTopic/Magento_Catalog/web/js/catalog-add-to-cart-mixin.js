define([
        'jquery',
        'mage/translate'
    ],
    function ($) {

        'use strict';


        return function(widget){
            $.widget('mage.catalogAddToCart', widget, {

                submitForm : function (form) {
                    var element = this.element;
                    console.log(element);
                    return this._super(form);
                }
            });

            return $.mage.catalogAddToCart;
        }

        });
