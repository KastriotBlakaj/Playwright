import { expect, test } from "../helpers/fixture";
import * as data from "../testData/testData.json"

test("Add Item to Cart and checkout ", async ({
  page,
  loginPageElement,
  homePageElement,
  checkoutPageElement,
  finishPageElement,
}) => {
    
  await page.goto(`https://www.saucedemo.com/`);
  await loginPageElement.enterFirstName(data.email);
  await loginPageElement.enterPassword(data.password);
  await loginPageElement.clickLogin();
  expect(await page.title()).toBe("Swag Labs"); //This part will be moved into a fixture

  await homePageElement.verifyHeadlineText;
  await homePageElement.addToCartButton();
  await homePageElement.clickCartButton();
  await homePageElement.verifyHeadlineTextInCheckout();
  await homePageElement.continuetoCheckout();

  await checkoutPageElement.checkoutFirstNameData(data.checkoutEmail);
  await checkoutPageElement.checkoutLastNameData(data.checkoutLastName);
  await checkoutPageElement.checkoutZipCodeData(data.checkoutZip);
  await checkoutPageElement.checkoutContinueButton();

  await finishPageElement.verifyFinishPageHeadline();
  await finishPageElement.clickOnFinishButton();
});
