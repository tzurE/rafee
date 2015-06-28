import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'rafee/tests/helpers/start-app';

var application;

module('Acceptance | pods/admin/teams/add', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /pods/admin/teams/add', function(assert) {
  visit('/pods/admin/teams/add');

  andThen(function() {
    assert.equal(currentURL(), '/pods/admin/teams/add');
  });
});
