import Ember from 'ember';
import AlertOnDirtyTransitionMixin from '../../../mixins/alert-on-dirty-transition';
import { module, test } from 'qunit';

module('Unit | Mixin | alert on dirty transition');

// Replace this with your real tests.
test('it works', function(assert) {
  var AlertOnDirtyTransitionObject = Ember.Object.extend(AlertOnDirtyTransitionMixin);
  var subject = AlertOnDirtyTransitionObject.create();
  assert.ok(subject);
});
