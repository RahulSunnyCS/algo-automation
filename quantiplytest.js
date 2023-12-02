const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome options
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--start-maximized'); // Maximize the Chrome window

// Create a new WebDriver instance
const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

// Navigate to the Quantiply page
async function openQuantiplyPage() {
    try {
        await driver.get('https://app.quantiply.tech/algos');

        // Add additional steps if needed

    } finally {
        // Close the browser window
        await driver.quit();
    }
}

// Run the test function
openQuantiplyPage();
