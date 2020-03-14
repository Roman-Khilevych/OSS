define(
    [
        'jquery',
        'jquery/ui',
        'jquery/validate',
        'mage/translate'
    ],
    function ($) {
        "use strict";

        return function () {
            $.validator.addMethod(
                'chlek-validate-password',
                function (value, elem) {
                    var passwordMinLength = $(elem).data('password-min-length'),
                        pass = $.trim(value),
                        result = pass.length >= passwordMinLength;

                    return $.mage.isEmptyNoTrim(value) || result;
                },
                $.mage.__('Your password is too weak')
            );
        }
    });
