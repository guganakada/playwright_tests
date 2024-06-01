
const { test, expect } = require('@playwright/test');
// const { waitForSelector } = require('@playwright/test');
// const { screenshot } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Acessar a página inicial da Amazon
    await page.goto('https://www.amazon.com.br/');
});

test.describe('Produtos', () => {

    test('Busca de produtos', async ({ page }) => {

        // Pesquisar por "fones de ouvido"
        await page.waitForTimeout(5000);
        await page.fill('#twotabsearchtextbox', 'fones de ouvido');

        // Clicar no botão de pesquisa
        await page.click('input[type="submit"]');

        // Verifica resultado de pesquisa
        const spanText = await page.textContent('.a-color-state.a-text-bold');
        expect(spanText).toContain('fones de ouvido');
                
        // Seleciona produto de pesquisado
        await page.waitForTimeout(5000);
        const elementoSelecionado = page.locator('[cel_widget_id="MAIN-SEARCH_RESULTS-4"]');
        await elementoSelecionado.click();

        // Seleciona produto de pesquisado
        await page.waitForTimeout(5000);
        const productTitle = await page.textContent('#productTitle.a-size-large.product-title-word-break');
        expect(productTitle).toContain('Baseus Bowie MA10 ANC Fone De Ouvido Bluetooth com Cancelamento de Ruído Ativo 140h de bateria IPX6 À Prova D\'água');
        
    });
    
});
