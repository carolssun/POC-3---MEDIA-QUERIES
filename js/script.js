const listaGatinhos = [
    { nome: "Mingau", idade: 2, foto: "./images/branco.png", cor: "branco", raca: "Siamês", ração: "Ração Premium", sachê: "Sachê de Atum" },
    { nome: "Whisky", idade: 9, foto: "./images/calico.png", cor: "cálico", raca: "Persa", ração: "Ração Standard", sachê: "Sachê de Frango" },
    { nome: "Café", idade: 6, foto: "./images/marrom.png", cor: "marrom", raca: "Não identificada", ração: "Ração Super Premium", sachê: "Sachê de Carne" },
    { nome: "Luna", idade: 2, foto: "./images/cinza.png", cor: "cinza", raca: "Exótico", ração: "Ração Hipoalergênica", sachê: "Sachê de Salmão" },
    { nome: "Garfield", idade: 4, foto: "./images/laranja.png", cor: "laranja", raca: "Não identificada", ração: "Ração Gourmet", sachê: "Sachê de Peru" }
];

const exibirGatosOrdenados = () => {
    var listaGatinhosCopy = listaGatinhos.slice(); // Gera uma cópia do original 
    listaGatinhosCopy.sort((a, b) => a.idade - b.idade); // Ordena pela idade

    const sectionSort = document.getElementById("galeria");
    const cardsOrdenados = listaGatinhosCopy.map(gato => `
        <article class="card">
            <img src="${gato.foto}" alt="${gato.cor}" class="card-img"/>
            <div class="card-content">
                <h1>${gato.nome}</h1>
                <h2>${gato.idade} anos</h2>
                <p>Cor: ${gato.cor}</p>
                <p>Raça: ${gato.raca}</p>
                <p>Tipo de Ração: ${gato.ração}</p>
                <p>Tipo de Sachê: ${gato.sachê}</p>
            </div>
        </article>
    `);
    sectionSort.innerHTML = cardsOrdenados.join("");
}

window.onload = () => {
    exibirGatosOrdenados();
}