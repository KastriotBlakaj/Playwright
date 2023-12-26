import { Page, Locator } from "@playwright/test";

export default class homePage {
  private readonly headLineTextField: Locator;
  private readonly addtoCartButton: Locator;
  private readonly clickToCartButton: Locator;
  private readonly checkoutVeriftyTextHeadline: Locator;
  private readonly continueToCheckoutButton: Locator;

  constructor(public page: Page) {
    this.headLineTextField = this.page.locator(
      "#header_container > div.primary_header > div.header_label > div"
    );
    this.addtoCartButton = this.page.locator(
      'button[id="add-to-cart-sauce-labs-backpack"]'
    );
    this.clickToCartButton = this.page.locator("#shopping_cart_container > a");
    this.checkoutVeriftyTextHeadline = this.page.locator(
      "#cart_contents_container > div > div.cart_list > div.cart_desc_label"
    );
    this.continueToCheckoutButton = this.page.locator("#checkout");
  }

  async verifyHeadlineText() {
    return this.headLineTextField.waitFor({ state: "visible" });
  }

  async addToCartButton() {
    await this.addtoCartButton.click();
  }

  async clickCartButton() {
    await this.clickToCartButton.click();
  }

  async verifyHeadlineTextInCheckout() {
    return this.checkoutVeriftyTextHeadline.waitFor({ state: "visible" });
  }

  async continuetoCheckout() {
    await this.continueToCheckoutButton.click();
  }
}
