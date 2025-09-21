import { test, expect } from "@playwright/test";
import { RegisterUserPage } from "../pages/registerUsersPage.js";
import { RegisterProductsPage } from "../pages/registerProductsPage.js";
import { ListUsersPage } from "../pages/listUsersPage.js";
import { ListProductsPage } from "../pages/listProductsPage.js";
import { LoginPage } from "../pages/loginPage.js";

test("BasicFlow", async ({ page }) => {
  const listProductsPage = new ListProductsPage(page);
  const listUsersPage = new ListUsersPage(page);
  const registerProductsPage = new RegisterProductsPage(page);
  const registerUserPage = new RegisterUserPage(page);
  const loginPage = new LoginPage(page);

  await loginPage.login("fulano@qa.com", "teste");
});
