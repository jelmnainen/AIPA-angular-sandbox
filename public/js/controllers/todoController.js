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

    function moveTodoToCompleted(newEntry, oldEntry){
      $scope.completedTodos.push(newEntry);
      $scope.incompletedTodos.splice(
        $scope.incompletedTodos.indexOf(oldEntry),
        1
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
            $scope.incompletedTodos.push(data);
          });
      }
    };

    $scope.deleteTodo = function(id){
      Todos.delete(id)
        .success(function(data){
          $scope.completedTodos = data;
        });
    };

    $scope.completeTodo = function(todo){
      Todos.completeTodo(todo)
        .success(function(data){
          moveTodoToCompleted(data, todo);
        });
    };

  });
