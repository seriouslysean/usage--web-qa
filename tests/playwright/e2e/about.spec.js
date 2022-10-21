import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/test-retries#reuse-single-page-between-tests
let page;

test.describe('About', () => {

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

});
