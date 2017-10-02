require('angular');

angular.module('ariseApp').factory('confirmDeletionModal', function (btfModal) {
    return btfModal({
        controller: 'confirmDeletionModalController',
        templateUrl: '/partials/modals/confirmDeletionModal.html'
    });
});
