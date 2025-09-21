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
}
