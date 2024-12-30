exports.SigninPage =
    class SigninPage {

        constructor(page) {
            this.page = page;
            this.signinButton = '#signin2';
            this.userName = '#sign-username';
            this.signinPassword = '#sign-password';
            this.submitButton = 'button.btn.btn-primary:has-text("Sign up")';
        }


        async gotoSigninPage() {
            await this.page.setViewportSize({ width: 1370, height: 730 });
            await this.page.goto("https://www.demoblaze.com/");
        }

        async Signin(username, password) {
            await this.page.locator(this.signinButton).click();
            await this.page.locator(this.userName).fill(username);
            await this.page.locator(this.signinPassword).fill(password);
            await this.page.locator(this.submitButton).click();

        }
    }