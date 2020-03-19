define(
    [
        'jquery',
    ],
    function ($) {
        "use strict";

        return function (widget) {
            $.widget('mage.menu', widget.menu, {
                options: {
                    responsive: false,
                    expanded: false,
                    showDelay: 42,
                    hideDelay: 300,
                    delay: 0,
                    mediaBreakpoint: '(max-width: 767px)'
                },
                toggle: function () {
                    var html = $('html');
                    console.log('111111');

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
            return {
                menu: $.mage.menu
            };
        };
    });
