class ProdutoComponente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const titulo = this.getAttribute('titulo');
        const preco = this.getAttribute('preco');
        const imgSrc = this.getAttribute('imgSrc');
        const link = this.getAttribute('link');
        const isOferta = this.hasAttribute('isOferta');

        const div = document.createElement("div");
        div.className = `produto-card ${isOferta ? 'best' : 'lanc'}`;
        div.innerHTML = `
            <div class="destaques-img position-relative">
                <a href="${link}">
                    <img src="${imgSrc}" alt="${titulo}" class="w-100">
                </a>
                ${isOferta ? '<span class="badge oferta-badge position-absolute bg-primary text-white">Oferta</span>' : ''}
            </div>
            <div class="text-center mt-2">
                <div class="rating">
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                </div>
                <p class="my-1">${titulo}</p>
                <span class="fw-bold">R$ ${preco}</span>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("produto-componente", ProdutoComponente);