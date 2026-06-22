let paginasAtuais = [];
let paginaAtual = 0;

function abrirTutorial(inicio, fim) {

    paginasAtuais =
        tutorialPages.slice(
            inicio,
            fim + 1
        );

    paginaAtual = 0;

    inicializarTutorial();
    mostrarPaginaTutorial();

    document.getElementById(
        "tutorialModal"
    ).style.display = "flex";
}

function mostrarPaginaTutorial() {

    const pagina = paginasAtuais[paginaAtual];

    let html = `<h1>${pagina.titulo}</h1>`;

    pagina.conteudo.forEach(item => {

        if(item.tipo === "texto") {
            html += `<p>${item.valor}</p>`;
        }

        if(item.tipo === "imagem") {
            html += `<img src="${item.src}" class="tutorialImage" width="${item.size[0]}" height="${item.size[1]}">`;
        }

    });

    document.getElementById("tutorialPage").innerHTML = html;

    document.getElementById("tutorialCounter").textContent = `${paginaAtual + 1} / ${paginasAtuais.length}`;
}

// btnNextTutorial.onclick = () => {

//     if (
//         paginaAtual <
//         paginasAtuais.length - 1
//     ) {

//         paginaAtual++;

//         mostrarPaginaTutorial();
//     }
// };

// btnPrevTutorial.onclick = () => {

//     if (paginaAtual > 0) {

//         paginaAtual--;

//         mostrarPaginaTutorial();
//     }
// };

// btnCloseTutorial.onclick = () => {

//     document.getElementById(
//         "tutorialModal"
//     ).style.display = "none";
// };


function inicializarTutorial() {

    document
        .getElementById("btnNextTutorial")
        .onclick = () => {

            if(
                paginaAtual <
                paginasAtuais.length - 1
            ) {

                paginaAtual++;

                mostrarPaginaTutorial();
            }
        };

    document
        .getElementById("btnPrevTutorial")
        .onclick = () => {

            if(paginaAtual > 0) {

                paginaAtual--;

                mostrarPaginaTutorial();
            }
        };

    document
        .getElementById("btnCloseTutorial")
        .onclick = () => {

            document
                .getElementById(
                    "tutorialModal"
                )
                .style.display = "none";
        };
}

function reabrirTutorial() {

    document
        .getElementById(
            "tutorialModal"
        )
        .style.display = "flex";
}

window.Tutorial = {
    abrir: abrirTutorial,
    reabrir: reabrirTutorial
};