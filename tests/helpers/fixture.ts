import {test as baseTest } from "@playwright/test"
import loginPage from "../pages/loginPage"
import homePage from "../pages/homePage"
import checkoutPage from "../pages/checkoutPage"
import finishPage from "../pages/finishPage"


type pages = {
    loginPageElement: loginPage
    homePageElement: homePage
    checkoutPageElement: checkoutPage
    finishPageElement: finishPage
}


const testpages = baseTest.extend<pages>({

 loginPageElement: async ({page}, use) =>{
     await use(new loginPage(page))
 },
 homePageElement: async ({page}, use) =>{
    await use(new homePage(page))
},
checkoutPageElement: async ({page}, use) =>{
    await use(new checkoutPage(page))
},finishPageElement: async ({page}, use) =>{
    await use(new finishPage(page))
}


})

export const test = testpages; 
export const expect= testpages.expect;
