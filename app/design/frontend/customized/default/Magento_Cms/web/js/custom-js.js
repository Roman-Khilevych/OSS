// console.log('well done');
//
// define( function () {
//     'use strict';
//
//     return function (config, element) {
//         console.log(config);
//         console.log(element);
//     }
// });

//вывод дополнительных библиотек со скриптом
// define([
//     'jquery'
//     ],
//     function($) {
//     'use strict';
//
//     return function (config, element) {
//         $(element).find('.custom-text').text('jquery text replace');
//         console.log(element);
//     }
//
// });

//работа с транслейтом текста
// define([
//         'jquery',
//         'mage/translate'
//     ],
//     function($) {
//         'use strict';
//
//         return function (config, element) {
//             $(element).find('.custom-text').text($.mage.__('jquery text replace'));
//             console.log(element);
//         }
//
//     });


// замена текста (приходить в опшн; викликаєм функцию(ченжтекст) де міняєм текст)
define([
    'jquery',
    'mage/translate'
    ],
    function ($) {
        'use strict';

        $.widget('customized.customJS', {
            options: {
                customTextSelector: '.custom-text',
                text: 'My new text from JS',
                customColorSelector: '.custom-color',
                color: "red"
            },

            _create: function () {
                var customTextSelector = this.options.customTextSelector,
                    text = this.options.text,
                    color = this.options.color,
                    customColorSelector = this.options.customColorSelector;

                this._changeText(customTextSelector, text);
                this._changeColor(customColorSelector, color)
            },

            _changeText: function (elementPar, textPar) {
                var element = this.element;

                $(element).find(elementPar).text($.mage.__(textPar));
            },

            _changeColor: function (elementPar, colorPar) {
                var element = this.element;

                $(element).find(elementPar,colorPar).css({"color":colorPar})
            }
        });

        return $.customized.customJS;
    }
    );

