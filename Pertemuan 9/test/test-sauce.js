const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require("selenium-webdriver/chrome");

describe("Test Suite Indra", function () {
  let driver;

  it("Login with valid credentials", async function () {
    const options = new chrome.Options();
    options.addArguments("--incognito");
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    try {
      await driver.get("https://www.saucedemo.com/");
      let inputUsername = await driver.findElement(
        By.xpath("//input[@data-test='username']"),
      );
      await inputUsername.sendKeys("standard_user");
      let inputPassword = await driver.findElement(
        By.xpath("//input[@data-test='password']"),
      );
      await inputPassword.sendKeys("secret_sauce");
      let loginButton = await driver.findElement(
        By.xpath("//input[@data-test='login-button']"),
      );
      await loginButton.click();

      const cartLink = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="shopping_cart_container"]')),
        10000,
      );
      await driver.wait(until.elementIsVisible(cartLink), 10000);
      assert.ok(
        await cartLink.isDisplayed(),
        "Login failed: Cart link not found",
      );
    } finally {
      await driver.quit();
    }
  });

  it("Sort by name A to Z", async function () {
    const options = new chrome.Options();
    options.addArguments("--incognito");
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    try {
      await driver.get("https://www.saucedemo.com/");
      let inputUsername = await driver.findElement(
        By.xpath("//input[@data-test='username']"),
      );
      await inputUsername.sendKeys("standard_user");
      let inputPassword = await driver.findElement(
        By.xpath("//input[@data-test='password']"),
      );
      await inputPassword.sendKeys("secret_sauce");
      let loginButton = await driver.findElement(
        By.xpath("//input[@data-test='login-button']"),
      );
      await loginButton.click();

      const dropdownLocator = By.css("select.product_sort_container");
      await driver.wait(until.elementLocated(dropdownLocator), 5000);
      let sortDropdown = await driver.findElement(dropdownLocator);
      await driver.wait(until.elementIsVisible(sortDropdown), 5000);
      await sortDropdown.click();
      let optionAtoZ = await driver.findElement(
        By.xpath('//option[@value="az"]'),
      );
      await optionAtoZ.click();

      const selectedValue = await sortDropdown.getAttribute("value");
      assert.strictEqual(selectedValue, "az");
    } finally {
      await driver.quit();
    }
  });
});
