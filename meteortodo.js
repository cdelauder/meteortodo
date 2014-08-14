Todos = new Meteor.Collection('todos');

Session.setDefault('list_id', null);
Session.setDefault('editing_listname', null);
Session.setDefault('tag_filter', null);
Session.setDefault('editing_itemname', null);
Session.setDefault('editing_addtag', null);

Router.map(function() {
  this.route('/', 
    {path:'/',
     })
})