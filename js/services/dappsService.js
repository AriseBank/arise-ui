require('angular');

angular.module('ariseApp').service('dappsService', function () {

    var dapp = {
        searchForDapp: '',
        searchForDappGlobal: ''
    }

    return dapp;

});
