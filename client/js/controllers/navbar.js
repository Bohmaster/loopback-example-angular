angular
  .module("app")
  .controller("NavBarController", ['$rootScope', '$scope', '$state', 'User',
    function($rootScope, $scope, $state, User) {
      $scope.login = function() {
        User.login({
          'username': $scope.user,
          'password': $scope.password})
          .$promise
          .then(function(response) {
            $rootScope.currentUser = {
              'name': response.user.username,
              'tokenId': response.id,
              'email': response.user.email
            };
            console.log(User.isAuthenticated());
          }, function(err) {
            console.log(err.data.error.message);
          });
      }
    }]);
