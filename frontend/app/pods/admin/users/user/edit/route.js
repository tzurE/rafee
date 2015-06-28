import Ember from 'ember';
import UserRouteMixin from 'rafee/mixins/user-route';
import AlertOnDirtyTransition from 'rafee/mixins/alert-on-dirty-transition';

export default Ember.Route.extend(UserRouteMixin, AlertOnDirtyTransition,{

  //actions: {
    //TODO: put this in a mixin

  //}
});
