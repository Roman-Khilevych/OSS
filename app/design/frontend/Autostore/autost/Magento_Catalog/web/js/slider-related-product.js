define([
        'jquery',
    ],
    function ($) {
        'use strict' ;

        return function () {
            $(document).ready(function(){
                $(".owl-carousel").owlCarousel({
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
