define([
        'jquery',
        'owlCarousel',
    ],
    function ($) {
        'use strict';

        return function (config, element) {
            var target = $(element);
            target.addClass('owl-carousel');
            target.owlCarousel({
                margin: 30,
                nav: true,
                items: 4,
                responsiveClass:true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    1024: {
                        items: 4,
                    }
                }
            });
        }
    });
