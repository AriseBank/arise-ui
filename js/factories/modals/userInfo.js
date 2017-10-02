require('angular');

angular.module('ariseApp').factory('userInfo', function (btfModal) {
    return btfModal({
        controller: 'userInfoController',
        templateUrl: '/partials/modals/userInfo.html'
    });
});
