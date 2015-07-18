import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('users-show-wednesday', 'Integration | Component | users show wednesday', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-show-wednesday}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#users-show-wednesday}}
      template block text
    {{/users-show-wednesday}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
