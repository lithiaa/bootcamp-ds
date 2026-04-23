const { Builder } = require("selenium-webdriver");
const LoginAction = require("../actions/login.action");

describe("Login Test", () => {
  let driver;
  let loginAction;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    loginAction = new LoginAction(driver);
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
  });
});
