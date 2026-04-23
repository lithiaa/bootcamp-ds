const fs = require('fs');

class ScreenshotAction {
    constructor(driver) {
        this.driver = driver;
    }

    async fullPageScreenshot(filename) {
        const fullscreen = await this.driver.takeScreenshot();
        fs.writeFileSync('./screenshots/' + filename + '.png', fullscreen, 'base64');
    }

    async partialScreenshot(element, filename) {
        const partial = await this.driver.findElement(element).takeScreenshot();
        fs.writeFileSync('./screenshots/' + filename + '.png', partial, 'base64');
    }
}

module.exports = ScreenshotAction;