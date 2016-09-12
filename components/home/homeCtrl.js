angular.module( 'quizApp' )
    .controller( 'homeCtrl', function( $scope, quizList ) {
        $scope.test = 'This homepage works!';

        // console.log( pastQuizList );
        $scope.quizzes = quizList;
} )
