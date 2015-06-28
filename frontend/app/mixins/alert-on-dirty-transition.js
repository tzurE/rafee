import Ember from 'ember';

export default Ember.Mixin.create({
    willTransition: function(transition) {
      var model = this.controller.get('model');
      if (model.get('isDirty')) {
          if (confirm("Are you sure you want to abandon progress?")) {
            model.rollback();
          } else {
            transition.abort();
          }
      } else {
        // Bubble the `willTransition` action so that
        // parent routes can decide whether or not to abort.
        return true;
      }
    }
});
