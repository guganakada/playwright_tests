
class ResultadoPesquisa {

    constructor(page, expect) {
        this.page = page;
        this.searchBox = '#cb1-edit';
        this.searchButton = 'button[type="submit"]';
        this.expect = expect;
        this.searchResultsSelector = '.ui-search-breadcrumb__title';
        this.productSelector = 'a[title="Fone De Ouvido Bluetooth Sem Fio Tws Microfone Todos Celular"]';
        this.productTitleSelector = '.ui-pdp-title';
        this.addToCartButtonSelector = 'button.andes-button.ui-pdp-action--secondary';
    }

    async searchFor(product) {
        await this.page.fill(this.searchBox, product);
        await this.page.click(this.searchButton);
    }

    async verifySearchResults(expectedText) {
        const spanText = await this.page.textContent(this.searchResultsSelector);
        this.expect(spanText).toContain(expectedText);
    }

    async selectProduct() {
        await this.page.click(this.productSelector);
    }

    async verifyProductTitle(expectedTitle) {
        const productTitle = await this.page.textContent(this.productTitleSelector);
        this.expect(productTitle).toContain(expectedTitle);
    }

    async verifyCurrentPage(expectedUrl) {
        const currentUrl = this.page.url();
        this.expect(currentUrl).toBe(expectedUrl);
    }

    async clickAddToCartButton() {
        await this.page.click(this.addToCartButtonSelector);
    }

}

module.exports = ResultadoPesquisa;
