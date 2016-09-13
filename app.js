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
        url: '/quiz/:quizName'
        , templateUrl: './components/quiz/views/quizContainerView.html'
        , controller: 'quizCtrl'
        , resolve: {
                      questions: function( quizService, $stateParams ) {
                        var name = $stateParams.quizName;
                        return quizService.getQuestions( name );
                      }
        }
      } )
      .state( 'results', {
        url: '/results'
        , templateUrl: './components/results/resultsView.html'
        , controller: 'resultsCtrl'
      } )
  } );
