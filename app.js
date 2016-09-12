angular.module( 'quizApp', [ 'ui.router' ] )
  .config( function( $stateProvider, $urlRouterProvider ) {
      $urlRouterProvider.otherwise( '/home' );

      $stateProvider
      .state( 'home', {
        url: '/home'
        , templateUrl: './components/home/homeView.html'
        , controller: 'homeCtrl'
        , resolve: {
                        quizList: function( quizService ) {
                            return quizService.getQuizNames();
                        }
          }
      } )
      .state( 'quiz', {
        url: '/quiz'
        , templateUrl: './components/quiz/views/quizContainerView.html'
        , controller: 'quizCtrl'
      } )
      .state( 'results', {
        url: '/results'
        , templateUrl: './components/results/resultsView.html'
        , controller: 'resultsCtrl'
      } )
  } );
