import Ember from 'ember';
import repoRouteMixin from 'rafee/mixins/repo-route';

export default Ember.Route.extend(repoRouteMixin, {
  model: function() {
    return this.store.createRecord('repository', {
    	url: null
    });
  }

});