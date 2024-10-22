const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "8hewyp",
  e2e: {
    setupNodeEvents(on, config) {
      console.log("Allure Writer Loaded"); // Adicione este log
      allureWriter(on, config);
      return config; // Retorna a configuração atualizada
    },
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: "spec", // Usando um reporter padrão para testes
    baseUrl: 'https://automationexercise.com/login', // URL do site de teste
  },
});
