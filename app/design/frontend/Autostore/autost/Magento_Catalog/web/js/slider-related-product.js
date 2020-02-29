define([
        'jquery',
        'owl.carousel.min'
    ],
    function ($) {
        'use strict' ;

        return function (config, element) {
            $(document).ready(function(){
                $(element).owlCarousel({
                    margin:20,
                    nav:true,
                    items : 4,
                    responsive:{
                        0:{
                            items:1,
                        },
                        480:{
                          items:2,
                        },
                        768:{
                            items:3,
                        },
                        1024:{
                            items:4,
                        }
                    }
                });
            });
        }
    });
