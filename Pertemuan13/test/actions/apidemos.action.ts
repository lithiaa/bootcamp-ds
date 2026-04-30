import { APIDemosPage } from "../pageobjects/apidemos.page";

export class APIDemosActions {
    async waitForAppBtn() {
        await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
    }

    async clickAppBtn() {
        await APIDemosPage.appBtn().click();
    }

    async clickSearchBtn() {
        await APIDemosPage.searchBtn().click();
    }

    async clickInvokeSearchBtn() {
        await APIDemosPage.invokeSearchBtn().click();
    }

    async getQueryFieldValue() {
        return await APIDemosPage.queryField().getText();
    }

    async fillQueryField(value: string) {
        await APIDemosPage.queryField().setValue(value);
    }

    async getAppDataFieldValue() {
        return await APIDemosPage.queryField().getText();
    }

    async fillAppDataField(value: string) {
        await APIDemosPage.queryField().setValue(value);
    }
}