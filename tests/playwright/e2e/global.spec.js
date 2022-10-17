import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/test-retries#reuse-single-page-between-tests
let page;

test.describe('Web QA Usage', () => {

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should contain a title', async () => {
    const el = page.locator('h1');
    await expect(el).toHaveCount(1);
    await expect(el).toHaveText('Web QA Usage');
  });

  test.describe('Addition Button', () => {
    let addCard;

    test.beforeAll(async () => {
      addCard = await page.locator('.card--add');
    });

    test('should contain a card', async () => {
      await expect(addCard).toHaveCount(1);
    });

    test('should contain a title', async () => {
      const el = await addCard.locator('h2');
      await expect(el).toHaveCount(1);
      await expect(el).toHaveText('Add on Click (0)');
    });

    test('should contain a paragraph', async () => {
      const el = await addCard.locator('p');
      await expect(el).toHaveCount(1);
      await expect(el).toHaveText('Should start at 0 and stop at 10');
    });

    test.describe('Button', () => {
      let button;

      test.beforeAll(async () => {
        button = await addCard.locator('button');
      });

      test('should contain a button', async () => {
        await expect(button).toHaveCount(1);
        await expect(button).toHaveText('0');
      });

      test('should increment count when button is clicked', async () => {
        // One click
        await button.click();
        await expect(button).toHaveText('1');
      });

      test('should be disabled after 10 clicks', async () => {
        // Reload the page to reset the button counts
        page.reload();

        // 10 clicks
        for (let i=0;i<10;i++) {
          await button.click();
        }
        await expect(button).toBeDisabled();
        await expect(button).toHaveText('DISABLED');

        // 11 clicks
        // TODO: Is there any way to test an 11th click?
        // Probably not needed
      });
    });

  });

  test.describe('Subtraction Button', () => {
    let subtractCard;

    test.beforeAll(async () => {
      subtractCard = await page.locator('.card--subtract');
    });

    test('should contain a card', async () => {
      await expect(subtractCard).toHaveCount(1);
    });

    test('should contain a title', async () => {
      const el = await subtractCard.locator('h2');
      await expect(el).toHaveCount(1);
      await expect(el).toHaveText('Subtract on Click (10)');
    });

    test('should contain a paragraph', async () => {
      const el = await subtractCard.locator('p');
      await expect(el).toHaveCount(1);
      await expect(el).toHaveText('Should start at 10 and stop at 0');
    });

    test.describe('Button', () => {
      let button;

      test.beforeAll(async () => {
        button = await subtractCard.locator('button');
      });

      test('should contain a button', async () => {
        await expect(button).toHaveCount(1);
        await expect(button).toHaveText('10');
      });

      test('should decrement count when button is clicked', async () => {
        // One click
        await button.click();
        await expect(button).toHaveText('9');
      });

      test('should be disabled after 10 clicks', async () => {
        // Reload the page to reset the button counts
        page.reload();

        // 10 clicks
        for (let i=0;i<10;i++) {
          await button.click();
        }
        await expect(button).toBeDisabled();
        await expect(button).toHaveText('DISABLED');

        // 11 clicks
        // TODO: Is there any way to test an 11th click?
        // Probably not needed
      });
    });
  });
});
