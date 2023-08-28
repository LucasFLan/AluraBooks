const botoes = document.querySelectorAll('.btn');
const botaoDisponiveis = document.getElementById('btnLivrosDisponiveis')

botoes.forEach((btn) => {
    btn.addEventListener('click', filtrarLivros)
})

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria === 'disponivel' ? FiltrarPorDisponibilidade() : FiltrarPorCategoria(categoria);
    exibeLivros(livrosFiltrados);
    if(categoria === 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalLivrosDisponiveis(valorTotal) 
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function FiltrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
    ValorTotalDisponivel.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `

}



