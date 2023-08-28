let livros = [];
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


async function getBooks() {
    const response = await fetch(url);

    livros = await response.json();

    let livrosComDesconto = aplicarDescontos(livros);

    exibeLivros(livrosComDesconto);

}

getBooks();

