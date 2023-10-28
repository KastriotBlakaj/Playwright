import {expect, test} from "@playwright/test"
import loginPage from "../pages/loginPage"
import homePage from "../pages/homePage"
import checkoutPage from "../pages/checkoutPage"
import finishPage from "../pages/finishPage"

test("Add Item to Cart and checkout ", async({page})=>{
    const login = new loginPage(page)
    const home = new homePage(page)
    const checkout = new checkoutPage(page)
    const finish = new finishPage(page)

    await page.goto(`https://www.saucedemo.com/`)
    await login.enterFirstName("standard_user")
    await login.enterPassword("secret_sauce")
    await login.clickLogin()
    expect(await page.title()).toBe("Swag Labs") //This part will be moved into a fixture 

    await home.verifyHeadlineText
    await home.addToCartButton()
    await home.clickCartButton()
    await home.verifyHeadlineTextInCheckout()
    await home.continuetoCheckout()

    await checkout.checkoutFirstNameData("test")
    await checkout.checkoutLastNameData("lastname")
    await checkout.checkoutZipCodeData("address1")
    await checkout.checkoutContinueButton()

    await finish.verifyFinishPageHeadline()
    await finish.clickOnFinishButton()




})
