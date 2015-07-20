import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('users-show-thursday', 'Integration | Component | users show thursday', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-show-thursday}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#users-show-thursday}}
      template block text
    {{/users-show-thursday}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
