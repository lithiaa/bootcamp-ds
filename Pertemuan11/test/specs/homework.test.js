const { Builder } = require("selenium-webdriver");
const LoginAction = require("../actions/login.action");
const ScreenshotAction = require("../actions/screenshot.action");
const { compareScreenshots } = require("../../utils/visual_regression.helper");

describe("Homework Login Test", () => {
  let driver;
  let loginAction;
  let screenshotAction;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    loginAction = new LoginAction(driver);
    screenshotAction = new ScreenshotAction(driver);
    await loginAction.openLoginPage("https://www.saucedemo.com/");
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should login successfully with valid credentials", async () => {
    await loginAction.inputUsername("standard_user");
    await loginAction.inputPassword("secret_sauce");
    await loginAction.clickLoginButton();
    await loginAction.assertLoginSuccess("Products");
    
    await compareScreenshots(driver, "login_success");
  });

  it("should show error message with invalid username", async () => {
    await loginAction.inputUsername("invalid_user");
    await loginAction.inputPassword("secret_sauce");
    await loginAction.clickLoginButton();
    await loginAction.assertLoginFailed("Epic sadface: Username and password do not match any user in this service");

    await compareScreenshots(driver, "login_error_invalid_username");
  });

  it("should show error message with invalid password", async () => {
    await loginAction.inputUsername("standard_user");
    await loginAction.inputPassword("invalid_password");
    await loginAction.clickLoginButton();
    await loginAction.assertLoginFailed("Epic sadface: Username and password do not match any user in this service");

    await compareScreenshots(driver, "login_error_invalid_password");
  });

  it("Login with locked_out_user", async () => {
    await loginAction.inputUsername("locked_out_user");
    await loginAction.inputPassword("secret_sauce");
    await loginAction.clickLoginButton();
    await loginAction.assertLoginFailed("Epic sadface: Sorry, this user has been locked out.");

    await compareScreenshots(driver, "login_error_locked_user");
  });
});
