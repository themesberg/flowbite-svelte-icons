import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/guide/svelte-4/getting-started');
});

test('Guide home page has expected h1, meta title', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons: v1' })).toBeVisible();
});

test('Guide home page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Getting Started - Flowbite Svelte Icons');
});

test('Guide home page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute(
    'content',
    'Getting Started - Flowbite Svelte Icons'
  );
});

test('Guide home page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Getting Started - Flowbite Svelte Icons');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute(
    'content',
    'Getting Started - Flowbite Svelte Icons'
  );
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute(
    'content',
    'http://localhost:4173/guide/svelte-4/getting-started'
  );
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons?title=Getting Started'
  );
});

test('Guide home page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute(
    'content',
    'Getting Started - Flowbite Svelte Icons'
  );
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute(
    'content',
    'Getting Started - Flowbite Svelte Icons'
  );
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons?title=Getting Started'
  );
});
