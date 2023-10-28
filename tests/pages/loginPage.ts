import { Page } from "@playwright/test";

export default class loginPage{

    constructor(public page:Page){

    }

   async enterFirstName(username: string){
     await this.page.locator("input[id='user-name']")
        .type(username)
    }

    async enterPassword(password: string){
        await this.page.locator("input[id='password']")
           .type(password)
       }

    async clickLogin(){
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("input[id='login-button']")
        ])
    }

    //Verify the item headline
}