import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('users-show-tuesday', 'Integration | Component | users show tuesday', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-show-tuesday}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#users-show-tuesday}}
      template block text
    {{/users-show-tuesday}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
