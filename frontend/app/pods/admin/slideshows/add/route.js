import Ember from 'ember';
import UserRouteMixin from 'rafee/mixins/user-route';
// the user-route conatins the list of teams we need

export default Ember.Route.extend(UserRouteMixin, {
  model: function() {
    return this.store.createRecord('slideshow', {
    	name: null,
    	templates: null,
    	transitionInterval: null,
    	cachingInterval: null,
    	team: null,
    });
  }
});
