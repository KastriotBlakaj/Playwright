import {expect, test} from "../helpers/fixture"

test("Add Item to Cart and checkout ", async({page,loginPageElement,homePageElement,checkoutPageElement,finishPageElement})=>{
    
    await page.goto(`https://www.saucedemo.com/`)
    await loginPageElement.enterFirstName("standard_user")
    await loginPageElement.enterPassword("secret_sauce")
    await loginPageElement.clickLogin()
    expect(await page.title()).toBe("Swag Labs") //This part will be moved into a fixture 

    await homePageElement.verifyHeadlineText
    await homePageElement.addToCartButton()
    await homePageElement.clickCartButton()
    await homePageElement.verifyHeadlineTextInCheckout()
    await homePageElement.continuetoCheckout()

    await checkoutPageElement.checkoutFirstNameData("test")
    await checkoutPageElement.checkoutLastNameData("lastname")
    await checkoutPageElement.checkoutZipCodeData("address1")
    await checkoutPageElement.checkoutContinueButton()

    await finishPageElement.verifyFinishPageHeadline()
    await finishPageElement.clickOnFinishButton()
})
