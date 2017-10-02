require('angular');

angular.module('ariseApp').factory('sendTransactionModal', function (btfModal) {
    return btfModal({
        controller: 'sendTransactionController',
        templateUrl: '/partials/modals/sendTransaction.html'
    });
});
