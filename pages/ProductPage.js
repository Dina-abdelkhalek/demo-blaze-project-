exports.ProductPage =
    class ProductPage
    {
        constructor(page) {
            this.page = page;
            this.monitorsIcon = '//*[@id="itemc" and text()="Monitors"]';
            this.appleMonitor = '//a[text()="Apple monitor 24"]';

            this.addToCard = '//a[@onclick="addToCart(10)"]';

            this.cardButton = '//*[@id="cartur"]';
            this.placeOrder = '//button[@data-target="#orderModal"]';

            //purchase form
            this.nameField = '//*[@id="name"]';
            this.countryField = '//*[@id="country"]';
            this.cityField = '//*[@id="city"]';
            this.cardField = '//*[@id="card"]';
            this.monthField = '//*[@id="month"]';
            this.yearField = '//*[@id="year"]';
            this.purchaseButton = '//button[text()="Purchase"]';
            this.okButton = 'button:has-text("OK")'

            

        }

        async purchaseItem(name, country, city, card, month, year) {

            await this.page.locator(this.monitorsIcon).click();
            await this.page.locator(this.appleMonitor).click();
            await this.page.locator(this.addToCard).click();
            await this.page.locator(this.cardButton).click();
            await this.page.locator(this.placeOrder).click();

            //fill purchasedata 
            await this.page.locator(this.nameField).fill(name);
            await this.page.locator(this.countryField).fill(country);
            await this.page.locator(this.cityField).fill(city);
            await this.page.locator(this.cardField).fill(card);
            await this.page.locator(this.monthField).fill(month);
            await this.page.locator(this.yearField).fill(year);
            await this.page.locator(this.purchaseButton).click();
            await this.page.locator(this.okButton).click();


            
        }



    }
