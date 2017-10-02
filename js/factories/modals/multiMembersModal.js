require('angular');

angular.module('ariseApp').factory('multiMembersModal', function (btfModal) {
    return btfModal({
        controller: 'multiMembersModalController',
        templateUrl: '/partials/modals/multiMembersModal.html'
    });
});
