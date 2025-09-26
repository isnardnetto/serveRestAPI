# 🚀 Projeto de Automação de Testes — ServeRest

Automação de testes **end-to-end (E2E)** e **API** utilizando [Playwright](https://playwright.dev/), garantindo cobertura, confiabilidade e agilidade nas validações do sistema.

---

## 🛠️ Stack Utilizada

- **VS Code** — Ambiente de desenvolvimento recomendado
- **JavaScript (CommonJS)** — Linguagem principal dos testes
- **Playwright** — Framework robusto para automação web e API

---

## 📁 Estrutura do Projeto

```
ProjetoServeRest/
├── src/
│   └── tests/
│       ├── api/      # Testes de API
│       └── e2e/      # Testes End-to-End (UI)
├── playwright.config.js
├── package.json
└── README.md
```

---

## ▶️ Como Executar

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Execute todos os testes:**

   ```bash
   npm test
   ```

3. **Execute apenas testes de API:**

   ```bash
   npm run test:api
   ```

4. **Execute apenas testes E2E:**

   ```bash
   npm run test:e2e
   ```

5. **Visualize o relatório HTML dos testes:**
   ```bash
   npm run report
   ```

---

## 💡 Dicas

- Os testes geram relatórios HTML automáticos na pasta `playwright-report`.
- Para garantir nomes e e-mails únicos nos testes, utilize funções utilitárias de geração randômica.
- O projeto está configurado para CommonJS (`"type": "commonjs"` no `package.json`).
- O arquivo `playwright.config.js` já está pronto para gerar relatórios HTML.

---

## 📄 Licença

Este projeto é livre para fins de estudo e aprimoramento profissional.
