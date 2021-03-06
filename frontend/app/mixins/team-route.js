import Ember from 'ember';

export default Ember.Mixin.create({
	
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controller.set('errors', null);
    this.store.find('user').then(function(users) {
      controller.set('allUsers', users);
    });
  }
});
