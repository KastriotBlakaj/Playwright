import { expect, test } from "@playwright/test";
import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import * as data from "../testData/testData.json";
import { log } from "console";

test("LoginTest", async ({ page, baseURL }) => {
  const login = new loginPage(page);
  await page.goto(`https://www.saucedemo.com/`);
  await login.enterFirstName(data.email);
  await login.enterPassword(data.password);
  await login.clickLogin();
  expect(await page.title()).toBe("Swag Labs");
});
