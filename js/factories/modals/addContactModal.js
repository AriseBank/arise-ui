require('angular');

angular.module('ariseApp').factory('addContactModal', function (btfModal) {
    return btfModal({
        controller: 'addContactModalController',
        templateUrl: '/partials/modals/addContactModal.html'
    });
});
