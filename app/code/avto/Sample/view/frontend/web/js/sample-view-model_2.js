define(['ko','jquery'],
    function (ko,$) {
        'use strict';
        return function () {
            const  viewModel = ko.track({
                label: 'the view model cart',
                additional_charge: 2,
                items: [
                {name: 'first item', qty: 4, price: 1.5},
                {name: 'second item', qty: 1, price: 7.5},
            ],
                rowTotal: item => item.qty = item.price,
                total: function () {
                    const sum = this.items.map(this.rowTotal)
                        .reduce((acc, curr) => acc + curr);
                return sum + this.additional_charge;
                }
            });
            ko.getObservable(viewModel, 'additional_charge').subscribe(function (newValue) {
                console.log('Changed to: ', newValue);
            });
            ko.getObservable(viewModel, 'additional_charge').subscribe(function (oldValue) {
                console.log('Changed to: ', oldValue);
            }, this, 'beforeChange');
            return viewModel;
        }
    });
