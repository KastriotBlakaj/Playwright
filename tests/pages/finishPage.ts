import { Page , Locator} from "@playwright/test";


export default class finishPage{  

    constructor(public page:Page){
    }


    async verifyFinishPageHeadline(){
        return this.page.locator('button[id="finish"]')
        .waitFor({state: "visible"})
    }

    async clickOnFinishButton(){
        await this.page.click('button[id="finish"]')
    }



  

}