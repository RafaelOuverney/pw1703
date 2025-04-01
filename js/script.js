document.addEventListener("DOMContentLoaded", event => {
    buscarInscritos();
    construirModal();
    const temaLocal = localStorage.getItem('tema');
    document.body.setAttribute('data-theme', temaLocal || 'light');
});

function alterarTema() {
    const tema = document.body.getAttribute('data-theme');
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    localStorage.setItem('tema', novoTema);
    document.body.setAttribute('data-theme', novoTema);

    const btTema = document.getElementById('btTema');
    btTema.textContent = "Light"
    if (novoTema == 'light') {
        btTema.textContent = "Dark"
    }
}

function construirModal(){
    const botaoSaibaMais = document.getElementById('saibaMais');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');

    modalImg.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modalImg.src = "https://picsum.photos/200/200";
    });

    botaoSaibaMais.addEventListener('click', () => {
        modal.classList.remove('hidden');
    })

    const botaoFechar = document.getElementById('fecharModal');
    botaoFechar.addEventListener('click', () => {
        modal.classList.add('hidden');
    })

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.add('hidden');
        }
    })
};

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
