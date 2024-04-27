import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/solid-icons');
});

test('Solid Icons page has expected h1, meta title', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Solid Icons - Flowbite Svelte Icons' })
  ).toBeVisible();
});

test('Solid Icons page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Solid Icons - Flowbite Svelte Icons');
});

test('Solid Icons page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Solid Icons - Flowbite Svelte Icons');
});

test('Solid Icons page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Solid Icons - Flowbite Svelte Icons');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Solid Icons - Flowbite Svelte Icons');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/solid-icons');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons?title=Solid Icons'
  );
});

test('Solid Icons page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Solid Icons - Flowbite Svelte Icons');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute(
    'content',
    'Solid Icons - Flowbite Svelte Icons'
  );
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons?title=Solid Icons'
  );
});
