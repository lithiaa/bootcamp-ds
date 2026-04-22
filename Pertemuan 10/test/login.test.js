const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require("selenium-webdriver/chrome");

describe("Test Suite Indra", function () {
  let driver;

  beforeEach(async function () {
    const options = new chrome.Options();
    options.addArguments("--headless");
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
    await driver.get("https://www.saucedemo.com/");
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("Login with standard user", async function () {
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
  });

  it("Login with locked out user", async function () {
    let inputUsername = await driver.findElement(
      By.xpath("//input[@data-test='username']"),
    );
    await inputUsername.sendKeys("locked_out_user");
    let inputPassword = await driver.findElement(
      By.xpath("//input[@data-test='password']"),
    );
    await inputPassword.sendKeys("secret_sauce");
    let loginButton = await driver.findElement(
      By.xpath("//input[@data-test='login-button']"),
    );
    await loginButton.click();
    const errorMessage = await driver.wait(
      until.elementLocated(By.xpath("//h3[@data-test='error']")),
      10000,
    );
    await driver.wait(until.elementIsVisible(errorMessage), 10000);
    const errorText = await errorMessage.getText();
    assert.strictEqual(
      errorText,
      "Epic sadface: Sorry, this user has been locked out.",
      "Login failed: Incorrect error message",
    );
  });

  it("Login with glitch user", async function () {
    let inputUsername = await driver.findElement(
      By.xpath("//input[@data-test='username']"),
    );
    await inputUsername.sendKeys("performance_glitch_user");
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
  });
});
