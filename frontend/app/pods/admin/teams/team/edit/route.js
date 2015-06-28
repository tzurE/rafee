import Ember from 'ember';
import TeamRouteMixin from 'rafee/mixins/team-route';
import AlertOnDirtyTransition from 'rafee/mixins/alert-on-dirty-transition';

export default Ember.Route.extend(TeamRouteMixin, AlertOnDirtyTransition, {

  //actions: {
    //TODO: put this in a mixin
 // }
});