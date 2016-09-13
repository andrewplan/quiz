angular.module( 'quizApp' )
    .controller( 'quizCtrl', function( $scope, $stateParams, quizService ) {
        $scope.quizName = $stateParams.quizName;
        $scope.questions = quizService.getQuestions();
} )
