
class ResultadoPesquisa {

    constructor(page, expect, selectors) {
        this.page = page;
        this.expect = expect;
        this.selectors = selectors;
    }

    async searchFor(product) {
        await this.page.fill(this.selectors.SEARCH_BOX, product);
        // await this.page.click(this.selectors.SEARCH_BUTTON);
        await this.page.tap(this.selectors.SEARCH_BUTTON);
        await this.page.waitForSelector(this.selectors.SEARCH_RESULTS);
    }

    async verifySearchResults(expectedText) {
        const searchResults = this.page.locator(this.selectors.SEARCH_RESULTS);
        await this.expect(searchResults).toHaveText(expectedText);
    }

    async selectProduct() {
        const productLink = await this.page.waitForSelector(`a[title="${this.selectors.PRODUCT_TITLE}"]`);
        await productLink.click();
        await this.page.waitForSelector(this.selectors.PRODUCT_TITLE_SELECTOR);
    }

    async verifyProductTitle(expectedTitle) {
        await this.page.waitForSelector(this.selectors.PRODUCT_TITLE_SELECTOR);
        const productTitle = await this.page.textContent(this.selectors.PRODUCT_TITLE_SELECTOR);
        await this.expect(productTitle).toContain(expectedTitle);
    }

    async verifyCurrentPage(expectedUrl) {
        const currentUrl = this.page.url();
        await this.expect(currentUrl).toBe(expectedUrl);
    }

    async clickAddToCartButton() {
        await this.page.click(this.selectors.ADD_TO_CART_BUTTON);
    }

}

module.exports = ResultadoPesquisa;
