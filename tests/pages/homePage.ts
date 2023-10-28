import { Page , Locator} from "@playwright/test";
import { text } from "stream/consumers";

export default class homePage{  

    constructor(public page:Page){
    }

    async verifyHeadlineText(){
        return this.page.locator('#header_container > div.primary_header > div.header_label > div')
        .waitFor({state: "visible"})
    }

    async addToCartButton(){
        await this.page.click('button[id="add-to-cart-sauce-labs-backpack"]');
    }

    async clickCartButton(){
        await this.page.click('#shopping_cart_container > a')
    }

    async verifyHeadlineTextInCheckout(){
        return this.page.locator('#cart_contents_container > div > div.cart_list > div.cart_desc_label')
        .waitFor({state: "visible"})
    }

    async continuetoCheckout(){
        await this.page.click('#checkout')
    }

}