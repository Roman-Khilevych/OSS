

define([
    'jquery',
    'mage/translate'
],
    function ($) {
   'use strict' ;

    return function (config, element) {
        $(element).find('.customer-text').text($.mage.__('My new Text Two'));

    }
});
