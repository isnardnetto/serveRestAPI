import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";

test.beforeEach(async ({ page }) => {
  await page.goto("https://front.serverest.dev/login");
});

test.afterEach(async ({ page }, testInfo) => {
  await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  await page.close();
});

test("loginPage - sucess", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("teste@gmail.com", "12345");
  await loginPage.clicarBtnEntrar();
});

test("loginPage - error ", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("testeErro@gmail.com", "112233");
  await loginPage.clicarBtnEntrar();
  await loginPage.validateLoginError("Email e/ou senha inválidos");
});

test("Login em branco", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("", "12345");
  await loginPage.clicarBtnEntrar();
  await loginPage.validateLoginBranco("Email é obrigatório");
});

test("Senha em branco", async ({ page }) => {});

test("Cadastro de novo usuário", async ({ page }) => {});
