define([
    'jquery',
    'matchMedia',
    'jquery-ui-modules/menu',
    'jquery/jquery.mobile.custom',
    'mage/translate'
], function ($, mediaCheck) {
    'use strict';

    return function (widget) {
        $.widget('mage.menu', widget.menu, { // 'widget.menu' used from the original file to rewrite
            options: {
                responsive: false,
                expanded: false,
                showDelay: 42,
                hideDelay: 300,
                delay: 0,
                mediaBreakpoint: '(max-width: 767px)'
            },

            toggle: function () {
                console.log('inited');
                var html = $('html');

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
            }
        });

        return {
            menu: $.mage.menu // returns only 'widget.menu' from widget object
        };
    }
});
