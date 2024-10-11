const { defineConfig } = require('allure-cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  resultsDir: 'allure-results', // Diretório para os resultados do Allure
  reportDir: 'allure-report', // Diretório onde o relatório será salvo
  cleanResults: true, // Limpar resultados anteriores antes de executar os testes

  e2e: {
    setupNodeEvents(on, config) {
      // Adicionando o allureWriter para garantir que o plugin capture os resultados
      allureWriter(on, config);
      return config;
    },
  },
});
