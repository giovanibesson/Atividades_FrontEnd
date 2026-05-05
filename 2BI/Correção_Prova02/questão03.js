let mostrandoPrimeiros = true;

function proximoGrupos() {

    if (mostrandoPrimeiros) {

        // GRUPO D
        document.getElementById("tituloA").innerText = "🅳 Grupo D";
        document.getElementById("listaA").innerHTML = `
            <li>Estados Unidos</li>
            <li>Paraguai</li>
            <li>Austrália</li>
            <li>Turquia</li>
        `;
        document.getElementById("fatoA").innerText =
            "Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas.";

        // GRUPO E
        document.getElementById("tituloB").innerText = "🅴 Grupo E";
        document.getElementById("listaB").innerHTML = `
            <li>Alemanha</li>
            <li>Equador</li>
            <li>Costa do Marfim</li>
            <li>Curaçao</li>
        `;
        document.getElementById("fatoB").innerText =
            "Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.";

        // GRUPO F
        document.getElementById("tituloC").innerText = "🅵 Grupo F";
        document.getElementById("listaC").innerHTML = `
            <li>Holanda</li>
            <li>Japão</li>
            <li>Tunísia</li>
            <li>Suécia</li>
        `;
        document.getElementById("fatoC").innerText =
            "Holanda e Japão já protagonizaram jogos equilibrados. Suécia tem histórico forte na Europa.";

    } else {


        document.getElementById("tituloA").innerText = "🅰️ Grupo A";
        document.getElementById("listaA").innerHTML = `
            <li>México</li>
            <li>África do Sul</li>
            <li>Coreia do Sul</li>
            <li>República Tcheca</li>
        `;
        document.getElementById("fatoA").innerText =
            "O jogo de abertura será México x África do Sul...";

        document.getElementById("tituloB").innerText = "🅱️ Grupo B";
        document.getElementById("listaB").innerHTML = `
            <li>Canadá</li>
            <li>Suíça</li>
            <li>Catar</li>
            <li>Vaga Europeia (Bósnia)</li>
        `;
        document.getElementById("fatoB").innerText =
            "O Canadá joga em casa...";

        document.getElementById("tituloC").innerText = "🅲 Grupo C";
        document.getElementById("listaC").innerHTML = `
            <li>Brasil</li>
            <li>Marrocos</li>
            <li>Haiti</li>
            <li>Escócia</li>
        `;
        document.getElementById("fatoC").innerText =
            "Brasil nunca perdeu para a Escócia...";
    }

    mostrandoPrimeiros = !mostrandoPrimeiros;
}
