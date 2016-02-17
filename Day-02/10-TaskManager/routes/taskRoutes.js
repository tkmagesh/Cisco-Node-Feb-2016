var express = require('express');
var router = express.Router();

var tasks = [
    {id : 1, name : 'Master Node.js', isCompleted : false},
    {id : 2, name : 'Learn JavaScript', isCompleted : true},
    {id : 3, name : 'Fix that bug', isCompleted : false}
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks/index', {tasks : tasks});
});

router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

router.post('/new', function(req, res, next){
    var newTaskName = req.body.newTaskName;
    var newId = tasks.reduce(function(result, task){
        return task.id > result ? task.id : result;
    },0) + 1;
    var newTask = {
        id : newId,
        name : newTaskName,
        isCompleted : false
    };
    tasks.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var id = parseInt(req.params.id, 10);
    var task = tasks.filter(function(t){
        return t.id === id;
    })[0];
    if (task) task.isCompleted = !task.isCompleted;
    res.redirect('/tasks');
});



module.exports = router;
