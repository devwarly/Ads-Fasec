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

let index = 0;
const fraseExibida = document.getElementById("frase-exibida");

function trocarFrase() {
    fraseExibida.textContent = frases[index];
    index = (index + 1) % frases.length;
}

setInterval(trocarFrase, 7000);
trocarFrase();