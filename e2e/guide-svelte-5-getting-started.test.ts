import { expect, test } from '@playwright/test';

const title = 'Getting Started - Flowbite Svelte Icons v2';
const description = 'How to get started with Flowbite Svelte Icons v2';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons';

test.beforeEach(async ({ page }) => {
	console.log(`Running ${test.info().title}`);
	await page.goto('/guide/svelte-5/getting-started');
});

test('Guide Svelte 5 getting started page has expected h1, meta title', async ({ page }) => {
	await expect(page.getByRole('heading', { name: title })).toBeVisible();
});

test('Guide Svelte 5 getting started page has expected meta title', async ({ page }) => {
	await expect(page).toHaveTitle(title);
});

test('Guide Svelte 5 getting started page has expected meta description', async ({ page }) => {
	const metaDescription = page.locator('meta[name="description"]');
	await expect(metaDescription).toHaveAttribute('content', description);
});

test('Guide Svelte 5 getting started page has expected meta og', async ({ page, baseURL }) => {
	const metaOgTitle = page.locator('meta[property="og:title"]');
	await expect(metaOgTitle).toHaveAttribute('content', title);
	const metaOgDescription = page.locator('meta[property="og:description"]');
	await expect(metaOgDescription).toHaveAttribute('content', description);
	const metaOgUrl = page.locator('meta[property="og:url"]');
	const url = baseURL + '/guide/svelte-5/getting-started';
	await expect(metaOgUrl).toHaveAttribute('content', url);
	const metaOgImage = page.locator('meta[property="og:image"]');
	await expect(metaOgImage).toHaveAttribute('content', imgUrl);
});

test('Guide Svelte 5 getting started page has expected meta twitter', async ({ page }) => {
	const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
	await expect(metaTwitterTitle).toHaveAttribute('content', title);
	const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute('content', description);
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute('content', imgUrl);
});
