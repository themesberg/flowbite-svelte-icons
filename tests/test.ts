import { expect, test } from '@playwright/test';

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.locator('h1')).toHaveText('Flowbite Svelte Icons: v1');
});

// test('three-tabs page has expected h1', async ({ page }) => {
//   await page.goto('/three-tabs');
//   await expect(page.locator('h1')).toHaveText('Three Tabs');
// });

test('icons page has expected h1', async ({ page }) => {
  await page.goto('/icons');
  await expect(page.locator('h1')).toHaveText('Icons');
});

// test('no-tabs page has expected h1', async ({ page }) => {
//   await page.goto('/no-tabs');
//   await expect(page.locator('h1')).toHaveText('No Tabs');
// });

// test('how to use page has expected h1', async ({ page }) => {
//   await page.goto('/how-to-use');
//   await expect(page.locator('h1')).toHaveText('Documentation');
// });
