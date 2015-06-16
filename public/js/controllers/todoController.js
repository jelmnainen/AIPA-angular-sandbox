angular.module('todoController', [])

  .controller('mainController', function($scope, $http, Todos){
    $scope.formData = {};
    $scope.completedTodos = {};
    $scope.incompletedTodos = {};


    var getCompleted = function(){
      Todos.getCompleted().success(function(data){
        $scope.completedTodos = data;
      });
    };


    var getIncompleted = function(){
      Todos.getIncompleted().success(function(data){
        $scope.incompletedTodos = data;
      });
    };

    var moveTodoToCompleted = function(todo){
      $scope.completedTodos.push(todo);
      $scope.incompletedTodos.splice(
        $scope.incompletedTodos.indexOf(todo), 1
      );
    }

    Todos.get()
      .success(function(data){
        $scope.todos = data;
      });

    Todos.getCompleted().success(function(data){
      $scope.completedTodos = data;
    });

    Todos.getIncompleted().success(function(data){
      $scope.incompletedTodos = data;
    });

    $scope.createTodo = function(){
      if(!$.isEmptyObject($scope.formData)){
        Todos.create($scope.formData)
          .success(function(data){
            $scope.formData = {};
            $scope.incompletedTodos = data;
          });
      }
    };

    $scope.deleteTodo = function(id){
      Todos.delete(id)
        .success(function(data){
          $scope.todos = data;
        });
    };

    $scope.completeTodo = function(todo){
      if(Todos.complete(todo)){
        moveTodoToCompleted(todo);
      }
    };

  });
