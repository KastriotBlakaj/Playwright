import { Page , Locator} from "@playwright/test";


export default class finishPage{  

    private readonly finishButton: Locator;

    constructor(public page:Page){

        this.finishButton= this.page.locator('button[id="finish"]')
    }


    async verifyFinishPageHeadline(){
        return this.finishButton
        .waitFor({state: "visible"})
    }

    async clickOnFinishButton(){
        await this.finishButton.click()
    }



  

}