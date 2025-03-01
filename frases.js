
const frases = [
    "Cada linha de código é um passo rumo ao futuro.",
    "Debugar é aprender; errar é evoluir.",
    "Transforme problemas em soluções criativas.",
    "A lógica é sua maior aliada.",
    "Com persistência, até o código mais difícil compila.",
    "Inovação começa com uma ideia e um editor de texto.",
    "O desafio de hoje é a conquista de amanhã.",
    "Seja curioso, o código recompensa exploradores.",
    "Você pode criar o impossível, uma linha por vez.",
    "A prática constante é a chave do domínio.",
    "Cada erro é uma oportunidade para aprender algo novo.",
    "Nunca subestime o poder de uma boa documentação.",
    "Todo programador experiente já foi um iniciante.",
    "A paciência constrói os melhores códigos.",
    "Se não encontrar o caminho, crie um atalho.",
    "Programação é a arte de transformar ideias em realidade.",
    "A complexidade é apenas um quebra-cabeça esperando ser resolvido.",
    "Seu esforço hoje será a base do seu sucesso amanhã.",
    "Resiliência é a linguagem universal dos programadores.",
    "Confie em você, o código acompanha!"
];


let indice = 0;

const exibirFrase = () => {
    const fraseElemento = document.querySelector('.banco_frases');
    fraseElemento.textContent = frases[indice];
    indice = (indice + 1) % frases.length;
};

setInterval(exibirFrase, 10000);

exibirFrase();


const request = indexedDB.open("FrasesDB", 1);

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const store = db.createObjectStore("frases", { keyPath: "id", autoIncrement: true });

    const frases = [
        { texto: "Cada linha de código é um passo rumo ao futuro." },
        { texto: "Debugar é aprender; errar é evoluir." },
        { texto: "Transforme problemas em soluções criativas." },
        { texto: "A lógica é sua maior aliada." },
    ];
    frases.forEach((frase) => store.add(frase));
};

request.onsuccess = (event) => {
    const db = event.target.result;

    const getFrases = () => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction("frases", "readonly");
            const store = transaction.objectStore("frases");
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    };

    getFrases().then((frases) => {
        let indice = 0;
        const fraseElemento = document.querySelector('.banco_frases');
        fraseElemento.textContent = frases[indice].texto;

        setInterval(() => {
            indice = (indice + 1) % frases.length;
            fraseElemento.textContent = frases[indice].texto;
        }, 10000);
    });
};
