const botao = document.getElementById('lermais1');
const conteudo = document.getElementById('conteudo01');

botao.addEventListener('click', () => {
    if (conteudo.classList.contains('novo-conteudo')) {
        conteudo.classList.remove('novo-conteudo');
        conteudo.style.height = '250px'; // Altura inicial para conteúdo "fechado"
        botao.textContent = '🔻Ler Mais';
    } else {
        conteudo.classList.add('novo-conteudo');
        conteudo.style.height = 'auto'; // Ajusta para mostrar todo o conteúdo
        botao.textContent = '🔺Ler Menos';
    }
});

const botao2 = document.getElementById('lermais2');
const conteudo2 = document.getElementById('conteudo02');

botao2.addEventListener('click', () => {
    if (conteudo2.classList.contains('novo-conteudo')) {
        conteudo2.classList.remove('novo-conteudo');
        conteudo2.style.height = '250px'; // Altura inicial para conteúdo "fechado"
        botao2.textContent = '🔻Ler Mais';
    } else {
        conteudo2.classList.add('novo-conteudo');
        conteudo2.style.height = 'auto'; // Ajusta para mostrar todo o conteúdo
        botao2.textContent = '🔺Ler Menos';
    }
});

const botao3 = document.getElementById('lermais3');
const conteudo3 = document.getElementById('conteudo03');

botao3.addEventListener('click', () => {
    if (conteudo3.classList.contains('novo-conteudo')) {
        conteudo3.classList.remove('novo-conteudo');
        conteudo3.style.height = '250px'; // Altura inicial para conteúdo "fechado"
        botao3.textContent = '🔻Ler Mais';
    } else {
        conteudo3.classList.add('novo-conteudo');
        conteudo3.style.height = 'auto'; // Ajusta para mostrar todo o conteúdo
        botao3.textContent = '🔺Ler Menos';
    }
});
