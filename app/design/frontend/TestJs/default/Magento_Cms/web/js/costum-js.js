/*define([
    'jquery',
    'mage/translate'
],
function ($) {
    'use strict';

    return function (config, element) {
        $(element).find('.test-js-child').text($.mage.__('Magento'));
    }
});*/

/*define(function () {
    'use strict';

    return function (config, element) {
        console.log(config);
        console.log(element);
    }
});*/

define([
        'jquery',
        'mage/translate'
    ],
    function ($) {
        'use strict';

        $.widget('chlek.customJs', {
            options: {
                customTextSelector: '.test-js-child',
                customTextSelectorSecond: '.test-js-child2',
                text: 'My new text Jssafadfad',
                color: 'red'
            },

            _create: function () {
                var customerTextSelector = this.options.customTextSelector,
                    customerTextSelectorSecond = this.options.customTextSelectorSecond,
                    text = this.options.text,
                    colorText = this.options.color;

                this._changeText(customerTextSelector, text);
                this._changeTextColor(customerTextSelectorSecond, colorText)
            },

            _changeText: function (elementPar, textPar) {
                var element = this.element;
                $(element).find(elementPar).text($.mage.__(textPar));
            },

            _changeTextColor: function (elementPar, color) {
                var element = this.element;
                $(element).find(elementPar).css("color", color);
            }
        });
        return $.chlek.customJS;
    });
