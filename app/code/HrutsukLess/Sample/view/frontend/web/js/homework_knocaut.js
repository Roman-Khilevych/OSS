define(['ko', 'jquery'], function (ko, $) {
    'use strict';

    return function () {
        const currencyInfo = ko.track({
            self: this,
            label: 'The product',
            additional_charge: 2,
            items: [
                {name: 'First item', qty: 4, price: 1.5},
                {name: 'Second item', qty: 2, price: 6.5},
            ],
            rowTotal: item => item.qty * item.price,
            total: function () {
                if (this.items.length <= 0) {
                    return 0;
                } else {
                    const sum = this.items.map(this.rowTotal).reduce((acc, curr) => acc + curr);
                    return sum + this.additional_charge;
                }
            },

            removeItems: function (item) {
                const items = this.items;
                --this.additional_charge;
                items.remove(item);
                this.total();
            },

            addQuantity: function (elem) {
                var indexItem = this.items.indexOf(elem);

                return this.items.splice(indexItem, 1, {name: elem.name, qty: ++elem.qty, price: elem.price});
            },

            subtractAmount: function (elem) {
                var indexItem = this.items.indexOf(elem);

                if (elem.qty <= 0) {
                    return;
                } else {
                    return this.items.splice(indexItem, 1, {name: elem.name, qty: --elem.qty, price: elem.price});
                }
            },

            clearUpForm: function (form) {
                form.nameItem.value = '';
                form.qtyItem.value = '';
                form.priceItem.value = '';
            },

            addItem: function (elem) {
                var items = this.items;
                if (elem.nameItem.value && elem.qtyItem.value && elem.priceItem.value) {
                    items.push({name: elem.nameItem.value, qty: elem.qtyItem.value, price: elem.priceItem.value});
                    ++this.additional_charge;
                    this.clearUpForm(elem);
                } else {
                    return;
                }
            },
        });

        ko.getObservable(currencyInfo);

        return currencyInfo;
    };
});
