import { test, expect } from "@playwright/test";

let userId;

function generateUser() {
  const random = Math.floor(Math.random() * 100000);
  return {
    nome: `Isnard API${random}`,
    email: `testeAPI${random}@gmail.com`,
    password: "teste",
    administrador: "true",
  };
}

test.describe.serial("CRUD User", () => {
  test("Create a user", async ({ request }) => {
    const userBody = generateUser();

    const response = await request.post("https://serverest.dev/usuarios", {
      data: userBody,
    });
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty(
      "message",
      "Cadastro realizado com sucesso"
    );
    expect(responseBody).toHaveProperty("_id");

    userId = responseBody._id;
    console.log(responseBody);
  });

  test("Read a user created", async ({ request }) => {
    expect(userId).toBeDefined();
    const response = await request.get(
      `https://serverest.dev/usuarios/${userId}`
    );
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("_id", userId);
    console.log(responseBody);
  });

  test("Update a user created", async ({ request }) => {
    expect(userId).toBeDefined();
    const updateBody = {
      nome: "Isnard API editado ",
      email: "testeAPI15@gmail.com",
      password: "teste2",
      administrador: "true",
    };
    const response = await request.put(
      `https://serverest.dev/usuarios/${userId}`,
      { data: updateBody }
    );
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty(
      "message",
      "Registro alterado com sucesso"
    );
    console.log(responseBody);
  });

  test("Delete a user created", async ({ request }) => {
    expect(userId).toBeDefined();
    const response = await request.delete(
      `https://serverest.dev/usuarios/${userId}`
    );
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty(
      "message",
      "Registro excluído com sucesso"
    );
    console.log(responseBody);
  });
});
