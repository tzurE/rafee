import Ember from 'ember';
import TeamRouteMixin from 'rafee/mixins/team-route';

export default Ember.Route.extend(TeamRouteMixin, {
  model: function() {
    return this.store.createRecord('team', {
    	id: null,
      name: null,
    });
  }

});
