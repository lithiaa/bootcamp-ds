export class APIDemosPage {
  static appBtn() {
    return $('//android.widget.TextView[@content-desc="App"]');
  }

  static alertDialogsBtn() {
    return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
  }

  static textEntryDialogBtn() {
    return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
  }
  
  static searchBtn() {
    return $('//android.widget.TextView[@content-desc="Search"]');
  }

  static invokeSearchBtn() {
    return $('//android.widget.TextView[@content-desc="Invoke Search"]');
  }

  static queryField() {
    return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/search_src_text"]');
  }
}
