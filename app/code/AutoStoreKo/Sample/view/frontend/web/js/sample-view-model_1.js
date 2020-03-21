define(['ko', 'jquery'], function (ko, $) {
    'use strict';

    return function (config) {
        /*-- Task 1 KO --*/
        /*var title = ko.observable('Title');
        title.subscribe(function (newValue) {
            console.log('Changed to', newValue)
        });
        title.subscribe(function (oldValue) {
            console.log('Changed from', oldValue)
        }, this, 'beforeChange');

        var currencyInfo = ko.observable(),
            viewModel = {
                label: ko.observable('Current info')
            };

        $.getJSON(config.base_url + 'rest/V1/directory/currency', currencyInfo);
        viewModel.output = ko.computed(function () {
            if (currencyInfo) {
                return this.label() + ':\n' + JSON.stringify(currencyInfo(), null, 2);
            }
            return 'Loading...'
        }, viewModel);*/

        /*-- Task 2 KO --*/

        // var viewModelSecond = {
        //     exchange_rates: ko.observableArray([
        /*1111, 2222, 3333*/
        //         {
        //             currency_to: 'USD',
        //             rate: 1.0
        //         }
        //     ])
        // };

        // return viewModelSecond;

        /*-- Task 1 KO --*/
        /*return {
            title1: 'This is title simple view model',
            title: title,
            title_observable: ko.observable('This is observable title'),
            config: config,
            prise: config.prise,
            base_url: config.base_url,
            output: ko.computed(function () {
                return this.label() + ': ';
            }.bind(viewModel)),
        };*/

        const viewModel = ko.track({
            label: 'The view model cart',
            additional_charge: 2,
            items: [
                {name: 'First item', qty: 4, price: 1.5},
                {name: 'Second item', qty: 1, price: 7.5}
            ],
            rowTotal: item => item.qty * item.price,
            total: function () {
                const sum = this.items.map(this.rowTotal).reduce((acc, curr) => acc + curr);
                return sum + this.additional_charge;
            }
        });

        ko.getObservable(viewModel, 'additional_charge').subscribe(function (newValue) {
            console.log('Change to:', newValue)
        });
        ko.getObservable(viewModel, 'additional_charge').subscribe(function (oldValue) {
            console.log('Changed from:', oldValue)
        }, this, 'beforeChange');

        return viewModel;
    }
});
