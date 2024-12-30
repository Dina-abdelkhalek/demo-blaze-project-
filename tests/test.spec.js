const { test } = require('@playwright/test');
import { SigninPage } from '../pages/SigninPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { LogoutPage } from '../pages/LogoutPage';

test('browser page test', async ({ page }) => {

    //signin
    const signin = new SigninPage(page);
    await signin.gotoSigninPage();
    await signin.Signin('dina.ismail@gmail.com', '123456');
    await page.waitForTimeout(2000);

    //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('dina.ismail@gmail.com', '123456');
    await page.waitForTimeout(2000);

    //Logout
    const logout = new LogoutPage(page);
    await logout.Logout();
    await page.waitForTimeout(1000);


    //purchase product 
    const purchaseProduct = new ProductPage(page);
    await purchaseProduct.purchaseItem('dina', 'Egypt', 'cairo', '123456789', '08', '2028');
    await page.waitForTimeout(4000);

 

});
