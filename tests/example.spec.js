const { test, expect } = require('@playwright/test');

test.describe('Automation Exercise Website Tests', () => {

  // Before each test, start tracing
  test.beforeEach(async ({ page }) => {
    // Start tracing, with screenshots and snapshots
    await page.context().tracing.start({ screenshots: true, snapshots: true });
  });

  // After each test, stop tracing and save the trace.zip file
  test.afterEach(async ({ page }) => {
    // Stop tracing and save the trace.zip file
    await page.context().tracing.stop({ path: 'trace.zip' });
  });

  // Test 1: Verify the homepage title
  test('should have the correct title', async ({ page }) => {
    console.log("Test 1: Navigating to homepage to check title...");
    await page.goto('https://www.automationexercise.com/');

    // Capture a screenshot after page load
    await page.screenshot({ path: 'screenshot_test1_homepage.png' });

    console.log("Test 1: Verifying the title...");
    await expect(page).toHaveTitle(/Automation Exercise/); // Change the title text if needed
    console.log("Test 1: Title verified successfully.");
  });

  // Test 2: Check if the "Signup / Login" button is visible
  test('should display the "Signup / Login" button', async ({ page }) => {
    console.log("Test 2: Navigating to homepage to check Signup / Login button visibility...");
    await page.goto('https://www.automationexercise.com/');

    // Capture a screenshot after page load
    await page.screenshot({ path: 'screenshot_test2_signup_button.png' });

    const signupButton = await page.locator('a[href="/login"]');
    console.log("Test 2: Verifying if Signup / Login button is visible...");
    await expect(signupButton).toBeVisible();

    // Capture a screenshot after verifying visibility
    await page.screenshot({ path: 'screenshot_test2_button_visible.png' });

    console.log("Test 2: Signup / Login button is visible.");
  });

});
