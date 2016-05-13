var arrayMax = require('cpd-array-max');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

$('button.btn-lg').on('click', function () {
    console.log(arrayMax([1,2,3,4,5]));// eslint-disable-line no-console
});