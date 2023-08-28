const btnOrdenaPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenaPreco.addEventListener("click", ordenaLivrosPorPreco);

function ordenaLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco;
    })  
    exibeLivros(livrosOrdenados)
}