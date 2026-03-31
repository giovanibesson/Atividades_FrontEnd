const cria = document.getElementById("b");
const btn = document.getElementById("botao");
const statusText = document.getElementById("status");

const estados = {
    normal:  "imagens/normal.png",
    puto: "imagens/bravo.png",
    morto: "imagens/morrendo.png",
    comendo: "imagens/comendo.png",
    alimentado: "imagens/feliz.png",
}

let tempo = 0;
let vivo = true;
let intervalo = null;

// controla o tempo e os estados
function iniciar() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        tempo++;

        console.log("tempo:", tempo);

        if (!vivo) return;

        if (tempo >= 20 && tempo < 40) {
            cria.src = estados.puto;
            statusText.innerText = "Estou com fome 😠";
        }

        if (tempo >= 40) {
            cria.src = estados.morto;
            statusText.innerText = "Morri... 💀";
            vivo = false;
        }

    }, 1000);
}

// alimentar o bichinho
btn.addEventListener("click", () => {

    // se estiver morto, revive
    if (!vivo) {
        vivo = true;
        tempo = 0;
        cria.src = estados.alimentado;
        statusText.innerText = "Ressuscitei! 😇";

        setTimeout(() => {
            cria.src = estados.normal;
            statusText.innerText = "Estou vivo novamente 😊";
        }, 2000);

        return;
    }

    // se estiver vivo, alimentar normal
    cria.src = estados.comendo;
    statusText.innerText = "Comendo... 🍖";

    tempo = 0; // reseta fome

    setTimeout(() => {
        cria.src = estados.alimentado;
        statusText.innerText = "Satisfeito 😋";
    }, 1000);

    setTimeout(() => {
        cria.src = estados.normal;
        statusText.innerText = "Tudo bem 😊";
    }, 2000);
});

iniciar();