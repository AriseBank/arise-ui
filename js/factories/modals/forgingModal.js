require('angular');

angular.module('ariseApp').factory('forgingModal', function (btfModal) {
    return btfModal({
        controller: 'forgingModalController',
        templateUrl: '/partials/modals/forgingModal.html'
    });
});
