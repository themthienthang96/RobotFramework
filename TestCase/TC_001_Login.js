let LoginData = require('../TestData/TC_001_Login')
let LoginPage = require('../PageObject/PageObject_LoginPage')
describe('Login Page', () => {
    const LOGIN_DATA = LoginData.VALID_LOGIN_CREDS;
    // Do to something in common for all test script 
    before(() => {
        
    });

    it('Login To The Page', () => {
        LoginPage.openBrowser();
        LoginPage.inputUserName('admin@admin.com');
        LoginPage.inputPassWord('123');
        LoginPage.clickLoginButton();
    });

    after(() => {
        
    });
});