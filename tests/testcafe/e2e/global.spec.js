import { Selector } from 'testcafe';

fixture`Web QA Usage`

test('should contain a title', async t => {
    const heading = await Selector('h1')
    await t.expect(heading.innerText).eql('Web QA Usage')
});

// TestCafe does not allow nesting tests
// ADDITION CARD
const additionSelectors = {
    card: '.card--add',
    title: '.card--add h2',
    paragraph: '.card--add p',
    button: '.card--add button',
}

test('ADDITION BUTTON: should contain a card', async t => {
    const exists = Selector(additionSelectors.card).exists;
    await t.expect(exists).ok();
});

test('ADDITION BUTTON: should contain a title', async t => {
    const exists = Selector(additionSelectors.title).exists;
    await t.expect(exists).ok();
});

test('ADDITION BUTTON: should contain a paragraph', async t => {
    const exists = Selector(additionSelectors.paragraph).exists;
    await t.expect(exists).ok();
});

test('ADDITION BUTTON: should contain a button', async t => {
    const exists = Selector(additionSelectors.button).exists;
    await t.expect(exists).ok();
});

test('ADDITION BUTTON: should increment count when button is clicked', async t => {
    const button = Selector(additionSelectors.button);
    await t.click(button)
        .expect(button.textContent)
        .contains('1');
});

test('ADDITION BUTTON: should be disabled after 10 clicks', async t => {
    const button = Selector(additionSelectors.button);

    // 10 clicks
    for (let i=0;i<10;i++) {
        await t.click(button);
    }
    await t.expect(button.textContent)
        .contains('DISABLED');

    // 11 clicks
    await t.click(button)
        .expect(button.textContent)
        .contains('DISABLED');
});

// TestCafe does not allow nesting tests
// SUBTRACTION CARD
const subtractSelectors = {
    card: '.card--subtract',
    title: '.card--subtract h2',
    paragraph: '.card--subtract p',
    button: '.card--subtract button',
}

test('SUBTRACTION BUTTON: should contain a card', async t => {
    const exists = Selector(subtractSelectors.card).exists;
    await t.expect(exists).ok();
});

test('SUBTRACTION BUTTON: should contain a title', async t => {
    const exists = Selector(subtractSelectors.title).exists;
    await t.expect(exists).ok();
});

test('SUBTRACTION BUTTON: should contain a paragraph', async t => {
    const exists = Selector(subtractSelectors.paragraph).exists;
    await t.expect(exists).ok();
});

test('SUBTRACTION BUTTON: should contain a button', async t => {
    const exists = Selector(subtractSelectors.button).exists;
    await t.expect(exists).ok();
});

test('SUBTRACTION BUTTON: should decrement count when button is clicked', async t => {
    const button = Selector(subtractSelectors.button);
    await t.click(button)
        .expect(button.textContent)
        .contains('9');
});

test('SUBTRACTION BUTTON: should be disabled after 10 clicks', async t => {
    const button = Selector(subtractSelectors.button);

    // 10 clicks
    for (let i=0;i<10;i++) {
        await t.click(button);
    }
    await t.expect(button.textContent)
        .contains('DISABLED');

    // 11 clicks
    await t.click(button)
        .expect(button.textContent)
        .contains('DISABLED');
});
