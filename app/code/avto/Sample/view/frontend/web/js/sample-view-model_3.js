define(['ko', 'jquery'], function (ko, $) {
    'use strict';

    return function (config) {
        const viewModel = ko.track({
            label: 'The view model cart',
            items: [
                {name: 'First item', qty: 4, price: 1.5},
                {name: 'Second item', qty: 1, price: 7.5}
            ],
            additional_charge: function () {
                return this.items.length;
            },
            addItem: function (item) {
                if (item.productName.value !== '' && item.productQty.value !== '' && item.productPrice.value !== '') {
                    this.items.push({
                        name: item.productName.value,
                        qty: +(item.productQty.value),
                        price: +(item.productPrice.value)
                    });
                    item.productName.value = '';
                    item.productQty.value = '';
                    item.productPrice.value = '';
                } else return 0;
            },
            reduce: function (item) {
                var indexItem = this.items.indexOf(item);
                return (item.qty <= 0) ? 0 : this.items.splice(indexItem, 1, {
                    name: item.name,
                    qty: --item.qty,
                    price: item.price
                });
            },
            increase: function (item) {
                var itemIndex = this.items.indexOf(item);
                return this.items.splice(itemIndex, 1, {name: item.name, qty: ++item.qty, price: item.price});
            },
            rowTotal: item => item.qty * item.price,
            total: function () {
                const sum = (this.items.length) ? this.items.map(this.rowTotal).reduce((acc, curr) => acc + curr) + this.additional_charge() : 0;
                return sum;
            }
        });
        ko.getObservable(viewModel);
        return viewModel;
    }
});
