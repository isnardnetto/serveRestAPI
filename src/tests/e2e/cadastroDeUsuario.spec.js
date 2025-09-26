import { test, expect } from "@playwright/test";
import { CadastroDeUsuario } from "../../pages/cadastroDeUsuarioPage.js";

function generateRandomUser() {
  const random = Math.floor(Math.random() * 100000);
  return {
    name: `Neo${random}`,
    email: `neo${random}@gmail.com`,
  };
}

test.beforeEach(async ({ page }) => {
  await page.goto("https://front.serverest.dev/cadastrarusuarios");
});

test.afterEach(async ({ page }, testInfo) => {
  await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  await page.close();
});

test("Cadastro com sucesso", async ({ page }) => {
  const cadastroDeUsuario = new CadastroDeUsuario(page);
  const user = generateRandomUser();

  await cadastroDeUsuario.preencherCadastroAdm(user.name, user.email, "nabuco");

  await cadastroDeUsuario.clicarBtnCadastro();

  await cadastroDeUsuario.valiodacaoCadastroCriado(
    "Cadastro realizado com sucesso"
  );
});
