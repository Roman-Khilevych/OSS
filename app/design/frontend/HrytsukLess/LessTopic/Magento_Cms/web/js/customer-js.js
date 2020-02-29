define([
        'jquery',
        'mage/translate'
    ],
    function ($) {
        'use strict';


        $.widget('valentin.customerJs', {
            options: {
                customTextSelector: '.custom-text',
                text: 'My new txt form JS',
                customColorText : '.custom-text-two',
                textColor : 'red',
            },

            _create: function () {
                var customTextSelector = this.options.customTextSelector,
                    text = this.options.text,
                    colorText = this.options.customColorText,
                    color = this.options.textColor;

                this._changeText(customTextSelector, text);
                this._colorText(colorText,color)
            },

            _changeText: function (elementPar, textPar) {
                var element = this.element;

                $(element).find(elementPar).text($.mage.__(textPar));
            },

            _colorText : function (elementText,color) {
                var element = this.element;

                $(element).find(elementText).css("color", color);
            },
        });

        return $.valentin.customerJs;
    }
);
