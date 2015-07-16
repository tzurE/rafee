import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from 'rafee/config/environment';

export default Ember.Route.extend({
	model: function(slideshow) {
    	return this.store.find('slideshow', slideshow.slideshow_id);
  },
  setupController: function(controller, model) {
    var m_templates=model.get('templates');
    var templates_array = m_templates.split(",");
    var interval = model.get('transitionInterval');
    controller.set('model', model);
    var self = this;
    var url =  ENV.APP.API_URL + '/slide/';
    var i = 0;
    var data = { template_name: templates_array[i] };
    ajax(url, {
      type: 'POST', data: data
    }).then(function(response) {
      return self.store.find('task', response.task);
    }).then(function(task) {
      controller.set('task', task);
      task.poll();
    });
  },

  deactivate: function() {
    var task = this.controllerFor('slideshows/slideshow').get('task');
    if (task) {
      // We don't want to keep polling if we exit the route
      task.stopPolling();
    }
  },
});
