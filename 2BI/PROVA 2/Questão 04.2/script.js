function add(){

    const container = document.getElementById("Cards");

    const jogador = {
        nome: "Lucas Tolentino Coelho de Lima",
        nascimento: "27/08/1997",
        altura: "1,80 m",
        posicao: "Meio-campista",
        rank: "8,8",
        imagem: "img/Lucas_Paqueta.png"
    };

    const card = document.createElement("div");
    card.classList.add("card", "ms-3"); // ms-3 = margem esquerda bootstrap
    card.style.width = "22rem";

    card.innerHTML = `
        <img src="Lucas_Paqueta.webp" class="card-img-top" alt="${jogador.nome}">

        <div class="card-body">
            <h5 class="card-title d-flex justify-content-between align-items-center">
                <span>${jogador.nome}</span>
                <span class="badge text-bg-secondary">${jogador.rank}</span>
            </h5>

            <p class="card-text">
                <span><strong>Nascimento:</strong> ${jogador.nascimento}</span><br>
                <span><strong>Altura:</strong> ${jogador.altura}</span><br>
                <span><strong>Posição:</strong> ${jogador.posicao}</span>
            </p>
        </div>
    `;

    container.appendChild(card);
}