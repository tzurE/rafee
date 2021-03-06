import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from 'rafee/config/environment';

export default Ember.Controller.extend({
  task: null,  // this is set from the route
  isLoading: function() {
    if (!this.task) {
      return false;
    }
    if (this.task && this.task.get('status') !== 'PENDING') {
      return false;
    }
    return true;
  }.property('task.result'),

  renderResult: function() {
    if (this.task) {
      return this.task.get('result');
    }
  }.property('task.result'),
});
