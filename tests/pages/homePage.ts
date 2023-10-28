import { Page } from "@playwright/test";

export default class homePage{

    constructor(public page:Page){

    }

   async verifyHeadlineText(username: string){

        return this.page.locator('#header_container > div.primary_header > div.header_label > div').waitFor({state: "visible"})
    }

    async addToCartButton(){
        await this.page.click('button[id="add-to-cart-sauce-labs-backpack"]');
    }

}