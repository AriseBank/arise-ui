require('angular');

angular.module('ariseApp').factory('secondPassphraseModal', function (btfModal) {
    return btfModal({
        controller: 'secondPassphraseModalController',
        templateUrl: '/partials/modals/secondPassphraseModal.html'
    });
});
