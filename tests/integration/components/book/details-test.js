import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | book/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Book::Details />`);

    assert.equal(this.element.textContent.trim(), '');    

    // Template block usage:
    await render(hbs`
      <Book::Details>
        template block text
      </Book::Details>
    `);
    
    assert.equal(this.element.textContent.trim(), 'template block text');
    await this.pauseTest();

  });
});
