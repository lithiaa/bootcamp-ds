import { APIDemosPage } from "../pageobjects/apidemos.page";

export class APIDemosActions {
    async waitForAppBtn() {
        await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
    }

    async clickAppBtn() {
        await APIDemosPage.appBtn().click();
    }

    async clickAlertDialogsBtn() {
        await APIDemosPage.alertDialogsBtn().click();
    }

    async clickTextEntryDialogBtn() {
        await APIDemosPage.textEntryDialogBtn().click();
    }

    async fillUsernameField(value: string) {
        await APIDemosPage.queryFieldName().setValue(value);
    }

    async getUsernameFieldValue() {
        return await APIDemosPage.queryFieldName().getText();
    }

    async fillPasswordField(value: string) {
        await APIDemosPage.queryFieldPassword().setValue(value);
    }

    async getPasswordFieldValue() {
        return await APIDemosPage.queryFieldPassword().getAttribute('text');
    }

    async clickOkBtn() {
        await APIDemosPage.okBtn().click();
    }
}