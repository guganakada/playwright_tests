
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/paginaInicial');
const SearchResultsPage = require('../pages/resultadoPesquisa');

test.describe('Product Search', () => {

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
    });

    test('Busca de produtos', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchResultsPage = new SearchResultsPage(page);

        // Pesquisar por "fones de ouvido"
        await homePage.searchFor('fones de ouvido');

        // Verifica resultado de pesquisa
        await searchResultsPage.verifySearchResults('fones de ouvido');

        // Seleciona produto de pesquisado
        await searchResultsPage.selectProduct();

        // Verifica título do produto
        await searchResultsPage.verifyProductTitle('Baseus Bowie MA10 ANC Fone De Ouvido Bluetooth com Cancelamento de Ruído Ativo 140h de bateria IPX6 À Prova D\'água');
    });

});
