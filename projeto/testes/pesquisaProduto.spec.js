const { test, expect, devices } = require('@playwright/test');
const PaginaInicial = require('../paginas/paginaInicial');
const ResultadoPesquisa = require('../paginas/resultadoPesquisa');

const URLS = {
    HOME: 'https://www.mercadolivre.com.br/',
};

const SELECTORS = {
    SEARCH_BOX: '#cb1-edit',
    SEARCH_BUTTON: 'button[type="submit"]',
    SEARCH_RESULTS: '.ui-search-breadcrumb__title',
    PRODUCT_TITLE: 'Fone De Ouvido Bluetooth Sem Fio Tws Microfone Todos Celular',
    PRODUCT_TITLE_SELECTOR: '.ui-pdp-title',
    // ADD_TO_CART_BUTTON: 'button.andes-button.ui-pdp-action--secondary',
    POPUP_CLOSE_BUTTON: '#download-app-bottom-banner-close', 
};

// const iPad = devices['iPad Pro 11'];

// test.use({ ...iPad, headless: false });

test.describe('Pesquisa produto', () => {

    let paginaInicial;
    let resultadoPesquisa;

    test.beforeEach(async ({ page }) => {
        paginaInicial = new PaginaInicial(page, URLS.HOME);
        resultadoPesquisa = new ResultadoPesquisa(page, expect, SELECTORS);
        await paginaInicial.goto();
    });

    test('Busca de produtos no iPad', async ({ page }) => {

        // Fecha o pop-up se ele aparecer
        try {
            const popupCloseButton = await page.$(SELECTORS.POPUP_CLOSE_BUTTON);
            if (popupCloseButton) {
                await popupCloseButton.click();
            }
        } catch (error) {
            console.log('Pop-up não apareceu ou já foi fechado.');
        }

        // Pesquisar por "fones de ouvido"
        await resultadoPesquisa.searchFor('fone de ouvido');

        // Verifica resultado de pesquisa
        await resultadoPesquisa.verifySearchResults('Fone de ouvido');
        
        // Seleciona produto pesquisado
        await resultadoPesquisa.selectProduct();

        // Verifica título do produto
        await resultadoPesquisa.verifyProductTitle('Fone De Ouvido Bluetooth Sem Fio Tws Microfone Todos Celular');

        // Espera pela presença do botão "Adicionar ao carrinho"
        // await resultadoPesquisa.waitForSelector(SELECTORS.ADD_TO_CART_BUTTON);

    });

    test.afterEach(async ({ page }) => {
        await page.evaluate(() => localStorage.clear());
        await page.close();
    });
});
