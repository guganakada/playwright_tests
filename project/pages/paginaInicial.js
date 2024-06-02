
class HomePage {
    constructor(page) {
        this.page = page;
        this.searchBox = '#twotabsearchtextbox';
        this.searchButton = 'input[type="submit"]';
    }

    async goto() {
        await this.page.goto('https://www.amazon.com.br/');
    }

    async searchFor(product) {
        await this.page.fill(this.searchBox, product);
        await this.page.click(this.searchButton);
    }
}

module.exports = HomePage;
