import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'rafee/tests/helpers/start-app';

var application;

module('Acceptance | pods/admin/teams', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /pods/admin/teams', function(assert) {
  visit('/pods/admin/teams');

  andThen(function() {
    assert.equal(currentURL(), '/pods/admin/teams');
  });
});
