define([
        'jquery',
        'jquery/ui',
        'jquery-ui-modules/slider',
        'mage/translate'
    ],
    function ($) {
        'use strict';
        var element = $('#slider-range');
        element.slider({
            min: 0,
            max: 700,
            values: [ 0, 200 ],
            slide: function( event, ui ) {
                $( "#amount" ).text( "$" + ui.values[ 0 ]);
                $( "#amount2" ).text( "$" + ui.values[ 1 ]);
            },
        });
    });
