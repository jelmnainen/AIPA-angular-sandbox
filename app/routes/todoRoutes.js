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

  app.get('/api/todos/completed', function(req, res){
    Todo.find({'done': true}, function(err, todos){
      if(err){
        res.send(err);
      }
      console.log(todos);
      res.json(todos)
    });
  });

  app.get('/api/todos/incompleted', function(req, res){
    Todo.find({'done': false}, function(err, todos){
      if(err){
        res.send(err);
      }
      console.log(todos);
      res.json(todos);
    });
  });

  app.post('/api/todos', function(req, res) {

    Todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err){
            res.send(err);
        } else {
          res.send(todo);
        }
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

  app.post('/api/todos/complete/:todo_id', function(req, res){
    var id = req.params.todo_id;

    Todo.findByIdAndUpdate(
      id,
      { $set: {done: true}},
      function(err, query){
        if(err){
          res.send(err);
        } else {
          res.send(Todo.findById(id));
        }
      }
    );
  });

  app.get('*', function(req, res){
    res.sendfile('./public/index.html');
  });

}
