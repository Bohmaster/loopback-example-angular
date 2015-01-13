angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
                                                            $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '',
        views: {
          'content': {
            templateUrl: 'views/main.html',
            controller: 'TodoController'
          }
        }
      });

    $urlRouterProvider.otherwise('todo');
  }]);
