var Todo = require('../models/todoModel.js');

module.exports = function(app){

  app.get('/api/todos', function(req, res){
    Todo.find(function(err, todos){
      if(err){
        res.send(err);
      }
      console.log(todos);
      res.json(todos);
    });
  });

  // create todo and send back all todos after creation
  app.post('/api/todos', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err){
            res.send(err);
          }

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
            if (err){
                res.send(err);
            }
            res.json(todos);
        });
    });

  });

  // delete a todo
  app.delete('/api/todos/:todo_id', function(req, res) {
      Todo.remove({
          _id : req.params.todo_id
      }, function(err, todo) {
          if (err){
              res.send(err);
          }
          // get and return all the todos after you create another
          Todo.find(function(err, todos) {
              if (err){
                  res.send(err);
                }
              res.json(todos);
          });
      });
  });

  app.get('*', function(req, res){
    res.sendfile('./public/index.html');
  });

}
