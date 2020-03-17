define([
        'jquery',
        ],
    function ($) {
        'use strict';



        return function (widget) {
            $.widget('mage.menu', widget.menu, {

                options: {
                    hideDelay: 800,
                },

                toggle: function () {
                    var html = $('html');
                    console.log("maj");
                    if (html.hasClass('nav-open')) {
                        html.removeClass('nav-open');
                        setTimeout(function () {
                            html.removeClass('nav-before-open');
                        }, this.options.hideDelay);
                    } else {
                        html.addClass('nav-before-open');
                        setTimeout(function () {
                            html.addClass('nav-open');
                        }, this.options.showDelay);
                    }
                },

            });
            return{
                menu : $.mage.menu,
            }
        }
    });
