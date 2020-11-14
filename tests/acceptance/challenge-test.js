import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | challenge', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Bookland');
    assert.dom('h2').hasText('Welcome to Bookland!');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Bookland');
    assert.dom('h2').hasText('About Bookland');   

  });

  test('visiting /shopping-cart', async function(assert) {
    await visit('/shopping-cart');

    assert.equal(currentURL(), '/shopping-cart');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Bookland');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('Bookland');
    assert.dom('nav a.menu-about').hasText('About');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');   

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  }); 
});
