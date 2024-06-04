
class ResultadoPesquisa {

    constructor(page, expect) {
        this.page = page;
        // this.searchBox = '#twotabsearchtextbox';
        this.searchBox = '#cb1-edit';
        this.searchButton = 'button[type="submit"]';
        this.expect = expect;
        this.searchResultsSelector = '.ui-search-breadcrumb__title';
        // this.productSelector = '[cel_widget_id="MAIN-SEARCH_RESULTS-4"]';        
        this.productSelector = 'a[title="Fone De Ouvido Bluetooth Sem Fio Tws Microfone Todos Celular"]';
        // this.productSelector = 'h2.a-size-mini a[href="/Ouvido-JBL-C50HI-Intra-Auricular-Preto/dp/B07JQKQ91F/ref=sr_1_5?crid=2H15ID38JJKT1&dib=eyJ2IjoiMSJ9.ZdttvyzB5NbNPIYdVpBdBH-bcC3FqS1e6dvfROyvKwN4nJFUQPvaUeJSCbn7E6Srs_ATY6nX_G_S6pClhi3ZHdpVVwESv-fgBglWiDfn4kDvCunQ3VB5I83F8nuFdqxDGJ36tsj1bnokNiA9hyW8rsnKSz_Cxm_kUpkPMWyJzW-Fj7bp3FTTMkEkJ4fPW_vK5vrwo53gKO4vndwC7HrB4Udj3C82FPUwxIsIC_hfL4S6byjUKJPuKlp8XbUXFjZIJOcgafCq34fEsnOKRFC94K82MycPN40giC28xeSWE9s.zm2177gO0tZzVA512HmtIjg8pDQ6lr2YXWGk2bDtByo&dib_tag=se&keywords=fones+de+ouvido&qid=1717293112&sprefix=%2Caps%2C353&sr=8-5"]';
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