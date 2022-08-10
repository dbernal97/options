/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../co-transfer-options-ui.js';

suite('CoTransferOptionsUi', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<co-transfer-options-ui></co-transfer-options-ui>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
