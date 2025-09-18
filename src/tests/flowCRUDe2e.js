import { test, expect } from "@playwright/test";
import { registerUserPage } from "../pages/registerUserPage.js";
import { registerProductsPage } from "../pages/registerProductsPage.js";
import { listUsersPage } from "../pages/listUsersPage.js";
import { listProductsPage } from "../pages/listProductsPage.js";

test("BasicFlow", async ({ page }) => {
  const listProductsPage = new ListProductsPage(page);
  const listUsersPage = new ListUsersPage(page);
  const registerProductsPage = new RegisterUserPage(page);
  const registerUserPage = new RegisterUserPage(page);
});
