Todos = new Meteor.Collection('todos');
var counter = 0

Router.map(function () {
  this.route('serverFile', {
    where: 'server',
    path: '/',

    action: function () {
      var filename = this.params.filename;

      this.response.writeHead(200, {'Content-Type': 'JSON'});
      this.response.end(EJSON.stringify(getAll()));
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
  return Todos.find({})
}

function create() {
  Todos.insert({
    title: title,
    time: Date.now(),
    id: counter,
  })
  counter++
}