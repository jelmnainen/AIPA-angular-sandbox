angular.module('todoService', [])
  .factory('Todos', function($http){
    return{
      get: function(){
        return $http.get('/api/todos');
      },
      getCompleted: function(){
        return $http.get('/api/todos/completed');
      },
      getIncompleted: function(){
        return $http.get('/api/todos/incompleted');
      },
      create: function(todoData){
        return $http.post('/api/todos', todoData);
      },
      delete: function(id){
        return $http.delete('/api/todos/' + id);
      },
      completeTodo: function(todo){
        return $http.post('/api/todos/complete/' + todo._id);
      }
    }
  })
