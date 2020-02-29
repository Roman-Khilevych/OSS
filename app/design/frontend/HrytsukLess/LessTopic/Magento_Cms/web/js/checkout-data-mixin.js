define([],
    function () {
        'use strict' ;

        return function (checkoutData) {
           var orig = checkoutData.getSelectedShippingAddress;

            checkoutData.getSelectedShippingAddress = function () {
                var address = orig.bind(checkoutData)();

                console.log('Selected shipping', address);

                return address;
            };
            return checkoutData;
        };
    });
