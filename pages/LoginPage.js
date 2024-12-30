exports.LoginPage =
class LoginPage {

    constructor(page) {
        this.page = page;
        this.logininClickBtn = '#login2';
        this.userName = '#loginusername';
        this.loginPassword = '#loginpassword';
        this.loginButton = '//button[text()="Log in"]';
    }


    async gotoLoginPage() {
        await this.page.setViewportSize({ width: 1370, height: 730 });
        await this.page.goto("https://www.demoblaze.com/");
        }

    async Login(username, password) {
        await this.page.locator(this.logininClickBtn).click();
        await this.page.locator(this.userName).fill(username);
        await this.page.locator(this.loginPassword).fill(password);
        await this.page.locator(this.loginButton).click();

    }
}