import { Page, Locator } from "@playwright/test";

export default class checkoutPage {
  private readonly checkoutFirstNameTextField: Locator;
  private readonly checkoutLastNameTextField: Locator;
  private readonly checkoutZipCodeTextField: Locator;
  private readonly checkoutcontinueButton: Locator;

  constructor(public page: Page) {
    this.checkoutFirstNameTextField = this.page.locator("#first-name");
    this.checkoutLastNameTextField = this.page.locator("#last-name");
    this.checkoutZipCodeTextField = this.page.locator("#postal-code");
    this.checkoutcontinueButton = this.page.locator('input[id="continue"]');
  }

  async checkoutFirstNameData(checkoutfirstname: string) {
    await this.checkoutFirstNameTextField.fill(checkoutfirstname);
  }

  async checkoutLastNameData(checkoutlastname: string) {
    await this.checkoutLastNameTextField.fill(checkoutlastname);
  }

  async checkoutZipCodeData(checkoutzipcode) {
    await this.checkoutZipCodeTextField.fill(checkoutzipcode);
  }

  async checkoutContinueButton() {
    await this.checkoutcontinueButton.click();
  }
}
