const URL = 'http://terrace.asto-system.biz/login';
const USERNAME = '/html/body/div/div/div/div[2]/div/form/div[1]/input';
const PASSWORD = '/html/body/div/div/div/div[2]/div/form/div[2]/input';
const LOGIN_BTN = '/html/body/div/div/div/div[2]/div/form/div[4]/div/button';

class LoginPage{
    openBrowser(){
        browser.url(URL)
    }
    waitForUserNameDisplayed(){
        $(USERNAME).waitForDisplayed(15000);
    }
    waitForPassWordDisplayed(){
        $(PASSWORD).waitForDisplayed(15000);
    }
    inputUserName(username){
        $(USERNAME).setValue(username);
    }
    inputPassWord(password){
        $(PASSWORD).setValue(password);
    }
    clickLoginButton(){
        $(LOGIN_BTN).click();
    }
}
module.exports = new LoginPage();