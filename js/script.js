document.addEventListener("DOMContentLoaded", event => {
    buscarInscritos();
});

function alterarTema() {
    const tema = document.body.getAttribute('data-theme');
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', novoTema);

    const btTema = document.getElementById('btTema');
    btTema.textContent = "Light"
    if (novoTema == 'light') {
        btTema.textContent = "Dark"
    }
}

function testButton() {
    open('https://www.google.com');
}

function buscarInscritos() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>  response.json()).then(response => {const divInscritos = document.getElementById('inscritos');
        response.forEach(user => {
            const novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = `nome: ${user.name}`;
            divInscritos.appendChild(novoParagrafo);
        });
    }).catch(error => {
        console.error(error);
    });
}
