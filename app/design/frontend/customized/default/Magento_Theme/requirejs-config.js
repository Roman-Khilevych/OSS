//визов нового джс файла на всі сторінки
// var config = {
//     deps: ['Magento_Theme/js/log-when-loaded'],
// };

//нові файли підключаються перед виконанням скріпта
var config = {
    deps: ['Magento_Theme/js/log-when-loaded'], //1й по загрузці
    shim: {
        'Magento_Catalog/js/view/compare-products': { //файл перед яким запускається deps
            deps: ['Magento_Theme/js/log-before-compare-product'] //загружається перед файлом який знаходиться вище в shim
        }
    },
    paths: {
        'MagentoThemeJs': 'Magento_Theme/js' //зліва імя файла / зправа шлях до папки
    },
    config: {
        mixins: {
            'mage/menu': {
                'Magento_Theme/js/menu-mixin': true
            }
        }
    }
};
