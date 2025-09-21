class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(userName, password) {
    await this.page.getByTestId("email").fill(userName);
    await this.page.getByTestId("senha").fill(password);
    await this.getByTestId("entrar").click();
  }
}
