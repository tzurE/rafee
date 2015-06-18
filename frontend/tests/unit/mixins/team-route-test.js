import Ember from 'ember';
import TeamRouteMixin from '../../../mixins/team-route';
import { module, test } from 'qunit';

module('Unit | Mixin | team route');

// Replace this with your real tests.
test('it works', function(assert) {
  var TeamRouteObject = Ember.Object.extend(TeamRouteMixin);
  var subject = TeamRouteObject.create();
  assert.ok(subject);
});
