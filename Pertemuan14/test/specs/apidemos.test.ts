import { APIDemosActions } from "../actions/apidemos.action";

const apiDemosActions = new APIDemosActions();

describe("APIDemos", async () => {
    it("Hello APIDemos", async () => {
        const username = "Indra";
        const password = "indra123";

        await apiDemosActions.waitForAppBtn();
        await apiDemosActions.clickAppBtn();
        await apiDemosActions.clickAlertDialogsBtn();
        await apiDemosActions.clickTextEntryDialogBtn();
        await apiDemosActions.fillUsernameField(username);
        await apiDemosActions.fillPasswordField(password);

        expect(await apiDemosActions.getUsernameFieldValue()).toEqual(username);
        
        const passwordFieldValue = await apiDemosActions.getPasswordFieldValue() || '';
        expect(passwordFieldValue.length).toEqual(password.length);

        await apiDemosActions.clickOkBtn();
    });
});