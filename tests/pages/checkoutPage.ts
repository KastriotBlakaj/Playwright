import { Page , Locator} from "@playwright/test";


export default class checkoutPage{  

    constructor(public page:Page){
    }


    async checkoutFirstNameData(checkoutfirstname: string){
        await this.page.locator('#first-name').type(checkoutfirstname)
    }

    async checkoutLastNameData(checkoutlastname:string){
        await this.page.locator('#last-name').type(checkoutlastname)
    }
    
    async checkoutZipCodeData(checkoutzipcode){
        await this.page.locator('#postal-code').type(checkoutzipcode)
    }

    async checkoutContinueButton(){
        await this.page.click('input[id="continue"]');
    }

}