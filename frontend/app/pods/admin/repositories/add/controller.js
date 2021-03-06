import Ember from 'ember';
import SubmitActionMixin from 'rafee/mixins/submit-action';

export default Ember.Controller.extend(SubmitActionMixin, {

  transitionToArgs: ['admin.repositories'],

  flashSuccessMessage: 'Succesfully added!'

});
