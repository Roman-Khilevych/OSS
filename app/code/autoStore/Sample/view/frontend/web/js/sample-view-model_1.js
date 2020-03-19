define(
    ['ko', 'jquery'],
    function (ko, $) {
        'use strict';

        /*return function () {
            var title = ko.observable('0010101010 0101010 0101010101010 100101010');

            title.subscribe(function (newValue) {
                console.log('changet to ', newValue)
            });

            title.subscribe(function (oldValue) {
                console.log('Changet from ', oldValue)
            }, this, 'beforeChange');

            return{
                //title: '00011101010 0010101001 010100101 01010',
                //title: ko.observable('00011101010 0010101001 010100101 01010')

                title: title
            }
        }*/

        /*return function (config) {
            return {
                output: ko.computed(function () {
                    return '0101010 010101 01001001'
                })
            }
        }*/

        /*return function (config) {
            var currencyInfo = ko.observable(),
                viewModel = {
                label: ko.observable('current info')
            };

            $.getJSON(config.base_url + 'rest/V1/directory/currency', currencyInfo);

            viewModel.output = ko.computed(function () {

                if (currencyInfo()){
                    return this.label() + ':\n' + JSON.stringify(currencyInfo(), null, 2)
                }

                return 'loading...'
            }.bind(viewModel));

            return viewModel;

        }*/

        return function () {
            /*var viewModel = {
                exchange_rates: ko.observableArray([
                    /!*1111,
                    2222,
                    3333*!/
                    {
                        currency_to: 'USD',
                        rate: 1.0
                    }
                ])
            };*/

            var viewModel = ko.track({
                label: 'the view model',
                additional_charge: 3,
                items: [
                    {name: 'First item', qty: 4, price: 1},
                    {name: 'Second item', qty: 1, price: 7.5},
                    {name: 'third', qty: 8, price: 12.5}
                    ],
                rowTotal: item => item.qty * item.price, total: function () {
                    const sum = this.items.map(this.rowTotal)
                        .reduce((acc, cur) => acc + cur);
                    return sum + this.additional_charge;
                }
            });

            ko.getObservable(viewModel, 'additional_charge').subscribe(
                function (newValue) {
                    console.log('Change to: ', newValue);
                });

            ko.getObservable(viewModel, 'additional_charge').subscribe(
                function (oldValue) {
                    console.log('Change to: ', oldValue);
                }, this, 'beforeChange');

            return viewModel;
        }
    });
