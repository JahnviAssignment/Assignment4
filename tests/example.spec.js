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

  // Test 3: Verify the "Products" page loads correctly
  test('should navigate to the "Products" page', async ({ page }) => {
    console.log("Test 3: Navigating to homepage to click on Products link...");
    await page.goto('https://www.automationexercise.com/');

    // Capture a screenshot of the homepage before clicking
    await page.screenshot({ path: 'screenshot_test3_homepage_before_click.png' });

    const productsLink = await page.locator('a[href="/products"]');
    console.log("Test 3: Clicking on Products link...");
    await productsLink.click();

    // Capture a screenshot after clicking on the "Products" link
    await page.screenshot({ path: 'screenshot_test3_products_page_before_url_check.png' });

    console.log("Test 3: Verifying the Products page URL...");
    await expect(page).toHaveURL(/products/); // Verify URL contains /products
    console.log("Test 3: Products page loaded successfully.");
  });

  // Test 4: Verify that the contact page loads correctly
  test('should load the "Contact Us" page', async ({ page }) => {
    console.log("Test 4: Navigating to homepage to click on Contact Us link...");
    await page.goto('https://www.automationexercise.com/');

    // Capture a screenshot of the homepage before clicking
    await page.screenshot({ path: 'screenshot_test4_homepage_before_click.png' });

    const contactLink = await page.locator('a[href="/contact_us"]');
    console.log("Test 4: Clicking on Contact Us link...");
    await contactLink.click();

    // Capture a screenshot after clicking on the "Contact Us" link
    await page.screenshot({ path: 'screenshot_test4_contact_page_before_url_check.png' });

    console.log("Test 4: Verifying the Contact Us page URL...");
    await expect(page).toHaveURL(/contact_us/); // Verify URL contains /contact_us
    console.log("Test 4: Contact Us page loaded successfully.");
  });

  // Test 5: Check if the footer is visible
  test('should display the footer', async ({ page }) => {
    console.log("Test 5: Navigating to homepage to check footer visibility...");
    await page.goto('https://www.automationexercise.com/');

    // Capture a screenshot of the homepage before checking footer visibility
    await page.screenshot({ path: 'screenshot_test5_homepage_footer_check.png' });

    const footer = await page.locator('footer');
    console.log("Test 5: Verifying if footer is visible...");
    await expect(footer).toBeVisible();

    // Capture a screenshot after verifying footer visibility
    await page.screenshot({ path: 'screenshot_test5_footer_visible.png' });

    console.log("Test 5: Footer is visible.");
  });

  // Test 6: Verify that clicking on "View Product" navigates to product details
  test('should navigate to product details when clicking "View Product"', async ({ page }) => {
    console.log("Test 6: Navigating to Products page to click on View Product...");
    await page.goto('https://www.automationexercise.com/products');

    // Capture a screenshot before clicking on "View Product"
    await page.screenshot({ path: 'screenshot_test6_products_page_before_click.png' });

    const viewProductButton = await page.locator('a[href="/product_details/1"]'); // Change href if necessary
    console.log("Test 6: Clicking on View Product button...");
    await viewProductButton.click();

    // Capture a screenshot after clicking the "View Product" button
    await page.screenshot({ path: 'screenshot_test6_product_details_page_before_url_check.png' });

    console.log("Test 6: Verifying the product details page URL...");
    await expect(page).toHaveURL(/product_details/); // Verify URL contains /product_details
    console.log("Test 6: Product details page loaded successfully.");
  });

});
