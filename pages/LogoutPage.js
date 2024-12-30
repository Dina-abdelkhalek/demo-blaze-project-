exports.LogoutPage =
    class LogoutPage {

        constructor(page) {
            this.page = page;
            this.logoutButton = '#logout2';
        }

        async Logout() {
            //await this.page.locator(this.closeButton).click();
            await this.page.locator(this.logoutButton).click();

        }
    }
