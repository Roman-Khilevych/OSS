define([
        'jquery',
        'jquery/ui',
        'jquery-ui-modules/slider',
        'mage/translate',
    ],
    function ($) {
        'use strict';
            $('#slider-range').slider({
            range: true,
            min: 0,
            max: 700,
            values: [ 10, 200 ],
            slide: function( event, ui ) {
                $( "#amount1" ).val(ui.values[ 0 ]);
                $( "#amount2" ).val(ui.values[ 1 ]);
            },
        });
});
