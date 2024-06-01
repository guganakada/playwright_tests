const { page } = require('@playwright/test');

async function acessarPaginaInicialAmazon() {
  await page.goto('https://www.amazon.com.br/');
}

module.exports = {
  acessarPaginaInicialAmazon,
};
