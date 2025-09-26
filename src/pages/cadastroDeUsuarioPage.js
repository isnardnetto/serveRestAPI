import { expect } from "@playwright/test";

export class CadastroDeUsuario {
  constructor(page) {
    this.page = page;
  }

  async preencherCadastroAdm(name, email, senha) {
    await this.page.getByTestId("nome").fill(name);
    await this.page.getByTestId("email").fill(email);
    await this.page.getByTestId("password").fill(senha);
    await this.page.getByTestId("checkbox").check();
  }

  async clicarBtnCadastro() {
    await this.page.getByTestId("cadastrar").click();
  }

  async valiodacaoCadastroCriado(texto) {
    const seletor = this.page.getByRole("link", {
      name: "Cadastro realizado com sucesso",
    });
    await expect(seletor).toHaveText(texto);
  }
}
