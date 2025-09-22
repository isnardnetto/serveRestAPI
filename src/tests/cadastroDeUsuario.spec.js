import { test, expect } from "@playwright/test";
import { CadastroDeUsuario } from "../pages/cadastroDeUsuarioPage.js";

test.beforeEach(async ({ page }) => {
  await page.goto("https://front.serverest.dev/cadastrarusuarios");
});

test.afterEach(async ({ page }, testInfo) => {
  await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  await page.close();
});

test("Cadastro com sucesso", async ({ page }) => {
  const cadastroDeUsuario = new CadastroDeUsuario(page);
  await cadastroDeUsuario.preencherCadastroAdm(
    "Neo",
    "Neo@gmail.com",
    "nabuco"
  );

  await cadastroDeUsuario.clicarBtnCadastro();

  await cadastroDeUsuario.valiodacaoCadastroCriado(
    "Cadastro realizado com sucesso"
  );
});
