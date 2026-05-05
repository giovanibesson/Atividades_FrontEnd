function revelar() {

    // ALTERAR IMAGEM
    const imagem = document.querySelector(".card-img-top");
    imagem.src = "_vinicius_junior.png";

    // ALTERAR TEXTOS
    const nome = document.getElementById("Nome");
    const rank = document.getElementById("Rank");
    const data = document.getElementById("Data_Nas");
    const altura = document.getElementById("Alutra");
    const posicao = document.querySelector("#Posição\\ "); // ID com espaço

    nome.innerHTML = "Vinícius José Paixão de Oliveira Júnior ";
    rank.innerHTML = "9.5";
    data.innerHTML = "12/07/2000 (25 anos)";
    altura.innerHTML = "1,76 m";
    posicao.innerHTML = "Ponta-esquerda / Atacante";

    // REMOVER CLASSES PLACEHOLDER E ADICIONAR card-text
    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });

    // remover efeito glow também
    const glow = document.querySelectorAll(".placeholder-glow");
    glow.forEach(el => el.classList.remove("placeholder-glow"));
}