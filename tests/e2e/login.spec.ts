import {expect, test} from "@playwright/test"
import loginPage from "../pages/loginPage"
import homePage from "../pages/homePage"
import { log } from "console"

test("LoginTest", async({page, baseURL})=>{
    const login = new loginPage(page)
    await page.goto(`https://www.saucedemo.com/`)
    await login.enterFirstName("standard_user")
    await login.enterPassword("secret_sauce")
    await login.clickLogin()
    expect(await page.title()).toBe("Swag Labs")
})
