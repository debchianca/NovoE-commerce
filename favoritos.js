// Carrega produtos favoritos do LocalStorage e exibe na página
document.addEventListener("DOMContentLoaded", function () {
    const listaFavoritos = document.getElementById('lista-favoritos');
    
    // Verifica se existem favoritos salvos no LocalStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.length === 0) {
        // Se não houver favoritos, exibe uma mensagem
        listaFavoritos.innerHTML = '<p class="text-center">Você não tem produtos favoritos ainda.</p>';
    } else {
        // Se houver produtos favoritos, cria os cards e insere na página
        favoritos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'col';
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">R$ ${produto.preco}</p>
                        <button class="btn btn-danger w-100" onclick="removerFavorito('${produto.id}')">Remover</button>
                    </div>
                </div>
            `;
            listaFavoritos.appendChild(card);
        });
    }
});

// Função para remover produto dos favoritos
function removerFavorito(id) {
    // Carrega a lista atual de favoritos do LocalStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    // Filtra a lista de favoritos removendo o produto com o ID especificado
    favoritos = favoritos.filter(produto => produto.id !== id);
    
    // Atualiza o LocalStorage com a nova lista
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    
    // Recarrega a página para atualizar a lista de favoritos exibida
    location.reload();
}

// Exemplo de como adicionar um produto aos favoritos (coloque isso nas páginas de produtos)
function adicionarAosFavoritos(produtoId, nome, preco, imagem) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    // Verifica se o produto já está na lista de favoritos
    if (favoritos.some(produto => produto.id === produtoId)) {
        alert("Este produto já está nos seus favoritos!");
        return;
    }

    // Adiciona o produto aos favoritos
    const produto = { id: produtoId, nome, preco, imagem };
    favoritos.push(produto);
    
    // Salva a lista atualizada de favoritos no LocalStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    
    alert("Produto adicionado aos favoritos!");
}
