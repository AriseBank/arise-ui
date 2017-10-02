require('angular');

angular.module('ariseApp').factory('registrationDelegateModal', function (btfModal) {
    return btfModal({
        controller: 'registrationDelegateModalController',
        templateUrl: '/partials/modals/registrationDelegateModal.html'
    });
});
