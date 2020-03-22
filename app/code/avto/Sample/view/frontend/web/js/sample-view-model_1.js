define(['ko','jquery'],
    function (ko,$) {
        'use strict';

        // return function () {
        //
        //         var title = ko.observable('Title');
        //         title.subscribe(function(newValue) {
        //             console.log('Change to: ', newValue)
        //         });
        //         title.subscribe(function(oldValue) {
        //             console.log('Changed from: ', oldValue)
        //         }, this, 'beforeChange');
        //
        //         return {
        //             title: title
        //         }
        // },

        // return function (config) {
        //     var currencyInfo = ko.observable(),
        //         viewModel = {
        //         label:ko.observable('currency info')
        //     };
        //     $.getJSON(config.base_url + 'rest/V1/directory/currency', currencyInfo);
        //     viewModel.output = ko.computed(function () {
        //         if(currencyInfo()) {
        //             return this.label() + ':\n ' + JSON.stringify(currencyInfo(), null, 2);
        //         }
        //         return 'loading ...';
        //     }.bind(viewModel));
        //     return viewModel;
        // }

        // return function () {
        //     var viewModel = {
        //         exchange_rates: ko.observableArray([
        //             // 1111,
        //             // 2222,
        //             // 3333
        //
        //             {
        //                 currency_to: 'USD',
        //                 rate: 1.0
        //             },
        //             {
        //                 currency_to: 'EUR',
        //                 rate: 3.0
        //             },
        //             {
        //                 currency_to: 'UAH',
        //                 rate: 2.0
        //             }
        //
        //         ])
        //     };
        //     return viewModel;
        // }
    });
