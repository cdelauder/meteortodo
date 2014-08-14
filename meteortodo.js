Todos = new Meteor.Collection('todos');
var counter = 0

Router.map(function () {
  this.route('serverFile', {
    where: 'server',
    path: '/',

    action: function () {
      var filename = this.params.filename;

      this.response.writeHead(200, {'Content-Type': 'JSON'});
      this.response.end(getAll());
    }
  });
  this.route('serverFile', {
    where: 'server',
    path: '/',
    method: 'POST',

    action: function () {
      var filename = this.params.filename;

      this.response.writeHead(200, {'Content-Type': 'JSON'});
      this.response.end(create());
    }
  });
});

function getAll() {
  console.log(Todos.find({}, {fields: {title: 1, id: 1}}))
  return JSON.stringify(Todos.find({}, {fields: {title: 1, id: 1}}))
}

function create() {
  Todos.insert({
    title: title,
    time: Date.now(),
    id: counter,
  })
  counter++
}