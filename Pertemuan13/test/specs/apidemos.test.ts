import { APIDemosActions } from "../actions/apidemos.action";

const apiDemosActions = new APIDemosActions();

describe("APIDemos", async () => {
    it("Hello APIDemos", async () => {
        await apiDemosActions.waitForAppBtn();
        await apiDemosActions.clickAppBtn();
        await apiDemosActions.clickSearchBtn();
        await apiDemosActions.clickInvokeSearchBtn();
        await apiDemosActions.fillQueryField("Hello");
        await apiDemosActions.fillAppDataField("Hello");

        expect(await apiDemosActions.getQueryFieldValue()).toEqual("Hello");
        expect(await apiDemosActions.getAppDataFieldValue()).toEqual("Hello");
    });
});