
class SearchResultsPage {
    constructor(page) {
        this.page = page;
        this.searchResultsSelector = '.a-color-state.a-text-bold';
        this.productSelector = '[cel_widget_id="MAIN-SEARCH_RESULTS-4"]';
        this.productTitleSelector = '#productTitle.a-size-large.product-title-word-break';
    }

    async verifySearchResults(expectedText) {
        const spanText = await this.page.textContent(this.searchResultsSelector);
        expect(spanText).toContain(expectedText);
    }

    async selectProduct() {
        await this.page.click(this.productSelector);
    }

    async verifyProductTitle(expectedTitle) {
        const productTitle = await this.page.textContent(this.productTitleSelector);
        expect(productTitle).toContain(expectedTitle);
    }
}

module.exports = SearchResultsPage;
