import { test, expect } from '@playwright/test';

test.describe('E2E smoke', () => {
  test('products list -> add to cart -> unauthenticated checkout redirects to login', async ({ page }) => {
    // Visit products
    await page.goto('/products');
    await expect(page).toHaveURL(/\/products/);

    // Add first visible product to cart (first Add to cart button)
    const addButtons = await page.locator('[aria-label="Add to cart"]');
    await expect(addButtons.first()).toBeVisible();
    await addButtons.first().click();

    // Go to cart
    await page.goto('/cart');
    await expect(page).toHaveURL(/\/cart/);

    // Click proceed to checkout (button text may vary; try common labels)
    const checkoutButton = page.getByRole('button', { name: /Proceed to Checkout|Checkout|Buy Now/i });
    await expect(checkoutButton.first()).toBeVisible();
    await checkoutButton.first().click();

    // Expect redirect to login for unauthenticated users
    await page.waitForURL(/\/login/);
    expect(page.url()).toContain('/login');
  });
});
