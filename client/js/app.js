angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
                                                            $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        views: {
          'head': {
            template: "Head",
            controller: 'TodoController'
          },
          'body': {
            url: '/body',
            template: "Body"
          }
        }
      });

    $urlRouterProvider.otherwise('todo');
  }]);
