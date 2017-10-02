require('angular');

angular.module('ariseApp').factory('passphraseCheck', function (btfModal) {
    return btfModal({
        controller: 'passphraseCheckController',
        templateUrl: '/partials/modals/passphraseCheck.html'
    });
});
