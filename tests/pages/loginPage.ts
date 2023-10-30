import { Page, Locator } from "@playwright/test";

export default class loginPage {
  //Declare the Variables
  private readonly firstNameTextField: Locator;
  private readonly lastNameTextField: Locator;
  private readonly clickLoginButton: Locator;

  constructor(public page: Page) {
    this.firstNameTextField = this.page.locator("input[id='user-name']");
    this.lastNameTextField = this.page.locator("input[id='password']");
    this.clickLoginButton = this.page.locator("input[id='login-button']");
  }

  async enterFirstName(username: string) {
    await this.firstNameTextField.fill(username);
  }

  async enterPassword(password: string) {
    await this.lastNameTextField.fill(password);
  }

  async clickLogin() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.clickLoginButton.click(),
    ]);
  }
}
