const { Builder } = require("selenium-webdriver");
const LoginAction = require("../actions/login.action");
const { compareScreenshots } = require("../../utils/visual_regression.helper");

describe("Login", () => {
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

    it("should login with valid credentials", async () => {
        await loginAction.inputUsername("standard_user");
        await loginAction.inputPassword("secret_sauce");
        await loginAction.clickLoginButton();
        await loginAction.assertLoginSuccess("Products");
        
        await compareScreenshots(driver, "login_success");
    });
});