define([
        'jquery',
        'jquery/ui',
        'jquery-ui-modules/slider',
        'mage/translate'
    ],
    function ($) {
        'use strict';


            $('#slider-range').slider({
            range: true,
            min: 0,
            max: 700,
            values: [ 0, 200 ],
            slide: function( event, ui ) {
                var activeFiltr = $('.filterHref');

                $( "#amount" ).text( "$" + ui.values[ 0 ]);
                $( "#amount2" ).text( "$" + ui.values[ 1 ]);

                // var hrefFilter = "http://magento2.local/women/tops-women.html?price="+ui.values[ 0 ]+'-'+ui.values[ 1 ];
                var hrefFilter = document.location.href+"?price="+ui.values[ 0 ]+'-'+ui.values[ 1 ];
                activeFiltr.attr('href',hrefFilter);
            },

        });






});
