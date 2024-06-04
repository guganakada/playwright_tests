
class PaginaInicial {

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.mercadolivre.com.br/');
    }

}

module.exports = PaginaInicial;
