import Ember from 'ember';
import SubmitActionMixin from 'rafee/mixins/submit-action';

export default Ember.Controller.extend(SubmitActionMixin, {

  transitionToArgs: ['admin.teams'],

  flashSuccessMessage: 'Succesfully added!'

});
