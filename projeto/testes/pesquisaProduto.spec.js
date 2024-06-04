const { test, expect } = require('@playwright/test');
const PaginaInicial = require('../paginas/paginaInicial');
const ResultadoPesquisa = require('../paginas/resultadoPesquisa');

test.describe('Pesquisa produto', () => {

    test.beforeEach(async ({ page }) => {
        const paginaInicial = new PaginaInicial(page);
        await paginaInicial.goto();
    });

    test('Busca de produtos', async ({ page }) => {
        // const paginaInicial = new PaginaInicial(page);
        const resultadoPesquisa = new ResultadoPesquisa(page, expect);

        // Pesquisar por "fones de ouvido"
        await resultadoPesquisa.searchFor('fone de ouvido');

        // Verifica resultado de pesquisa
        await resultadoPesquisa.verifySearchResults('Fone de ouvido');
        
        // Seleciona produto de pesquisado
        await resultadoPesquisa.selectProduct();

        // Verifica título do produto
        await resultadoPesquisa.verifyProductTitle(`Fone De Ouvido Bluetooth Sem Fio Tws Microfone Todos Celular`);
        // 'Fone De Ouvido'

        // Clica no botão "Adicionar ao carrinho"
        // await resultadoPesquisa.clickAddToCartButton();

        // Verifica a URL da página atual
        // await resultadoPesquisa.verifyCurrentPage('https://www.mercadolivre.com.br/'); // Substitua com a URL esperada

        // Espera por 5 segundos antes de finalizar o teste
        await page.waitForTimeout(5000);
    });

});
