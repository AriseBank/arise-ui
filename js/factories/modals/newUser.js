require('angular');

angular.module('ariseApp').factory('newUser', function (btfModal) {
    return btfModal({
        controller: 'newUserController',
        templateUrl: '/partials/modals/newUser.html'
    });
});
