import { fixture, Selector, test } from 'testcafe';

import { baseUrl } from '../testcafe.config.js';

fixture`Counter`
    .page`${baseUrl}/`

test('should contain a title', async t => {
    const heading = Selector('h1');
    await t.expect(heading.innerText).eql('Web QA Usage');
});
