import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(userName, password) {
    await this.page.getByTestId("email").fill(userName);
    await this.page.getByTestId("senha").fill(password);
  }

  async validateLoginError(texto) {
    const validateErrorTest = this.page.getByText("Email e/ou senha inválidos");
    await expect(validateErrorTest).toContainText(texto);
  }

  async clicarBtnEntrar() {
    await this.page.getByTestId("entrar").click();
  }

  async validateLoginBranco(texto) {
    const validateLoginBranco = this.page.getByText("×Email é obrigatório");
    await expect(validateLoginBranco).toContainText(texto);
  }

  async valdiadeSenhaEmBranco(texto) {
    const validadeSenhaEmBranco = this.page.getByText("Password é obrigatório");
    await expect(validadeSenhaEmBranco).toContainText("Password é obrigatório");
  }
}
