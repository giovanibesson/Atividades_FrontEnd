function mostrarImagem() {

    const container = document.getElementById("imagem-container");

    // evita duplicar imagem
    if (container.innerHTML === "") {

        const img = document.createElement("img");

        img.src = "Tabela_Jogos.png"; // caminho da prova
        img.alt = "Tabela de Jogos";
        img.style.display = "block";
        img.style.margin = "20px auto";
        img.style.maxWidth = "80%";

        container.appendChild(img);
    }
}