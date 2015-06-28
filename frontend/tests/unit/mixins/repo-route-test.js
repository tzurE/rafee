import Ember from 'ember';
import RepoRouteMixin from '../../../mixins/repo-route';
import { module, test } from 'qunit';

module('Unit | Mixin | repo route');

// Replace this with your real tests.
test('it works', function(assert) {
  var RepoRouteObject = Ember.Object.extend(RepoRouteMixin);
  var subject = RepoRouteObject.create();
  assert.ok(subject);
});
