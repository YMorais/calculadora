// Seleciona os elementos HTML com IDs específicos e atribui-los a variáveis.
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let res = document.getElementById('res');

// Função para adicionar um resultado ao parágrafo
function adicionarResultado(texto) {
    res.innerHTML += `<p>${texto}</p>`;
}

// Função de soma
function somar() {
    let resultado = Number(n1.value) + Number(n2.value);
    adicionarResultado(`O resultado da soma entre ${n1.value} e ${n2.value} é: ${resultado}`);
}

// Função de subtração
function subtrair() {
    let resultado = Number(n1.value) - Number(n2.value);
    adicionarResultado(`O resultado da subtração entre ${n1.value} e ${n2.value} é: ${resultado}`);
}

// Função de multiplicação
function multiplicar() {
    let resultado = Number(n1.value) * Number(n2.value);
    adicionarResultado(`O resultado da multiplicação entre ${n1.value} e ${n2.value} é: ${resultado}`);
}

// Função de divisão (com verificação para divisão por zero)
function dividir() {
    if (Number(n2.value) === 0) {
        adicionarResultado(`Erro: divisão por zero não permitida.`);
    } else {
        let resultado = Number(n1.value) / Number(n2.value);
        adicionarResultado(`O resultado da divisão entre ${n1.value} e ${n2.value} é: ${resultado}`);
    }
}

// Função de potência
function potencia() {
    let resultado = Math.pow(Number(n1.value), Number(n2.value));
    adicionarResultado(`${n1.value} elevado a ${n2.value} é: ${resultado}`);
}

// Função de raiz quadrada
function raizQuadrada() {
    let resultado = Math.sqrt(Number(n1.value));
    adicionarResultado(`A raiz quadrada de ${n1.value} é: ${resultado}`);
}

// Função para limpar os resultados
function limpar() {
    res.innerHTML = "<p>Aqui irá aparecer o resultado...</p>";
}
