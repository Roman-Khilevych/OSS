define([], function () {
    'use strict';



    return function (checkoutData) {
        var orig = checkoutData.getSelectedShippingAddress;

        checkoutData.getSelectedShippingAddress = function () {
            var address = orig.bind(checkoutData)();

            console.log('selected shipping address', address);

            return address;
        };

        return checkoutData;
    }
});
