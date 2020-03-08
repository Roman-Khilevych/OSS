define([
    'jquery',
    'jqueryUi'
], function($) {
    return function(config, element) {
        $(element).jqueryUi(config);
    };
});
