const FASES = {

    1: {
        id: 1,
        nome: "Introdução: Move and Draw",
        proximaFase: 2,

        toolbox: "basica",

        tutorial: {
            inicio: 3,
            fim: 4
        },

        arquivoReferencia: "quadrado.json"
    },

    2: {
        id: 2,
        nome: "Introdução ao FOR",
        proximaFase: 3,

        toolbox: "repeticao",

        tutorial: {
            inicio: 5,
            fim: 6
        },

        arquivoReferencia: "escadinha.json"
    },

    3: {
        id: 3,
        nome: "Espaços",
        proximaFase: 4,

        toolbox: "repeticao",

        tutorial: {
            inicio: 7,
            fim: 7
        },

        arquivoReferencia: "escada falhada.json"
    },

    4: {
        id: 4,
        nome: "Iteração",
        proximaFase: 5,

        toolbox: "repeticao",

        tutorial: {
            inicio: 8,
            fim: 8
        },

        arquivoReferencia: "grafico.json"
    },

    5: {
        id: 5,
        nome: "Passo",
        proximaFase: 6,

        toolbox: "repeticao",

        tutorial: {
            inicio: 9,
            fim: 9
        },

        arquivoReferencia: "escalada.json"
    },

    6: {
        id: 6,
        nome: "Desafio: Espiral",
        proximaFase: null,

        toolbox: "repeticao",

        tutorial: {
            inicio: 10,
            fim: 10
        },

        arquivoReferencia: "espiral.json"
    }

};