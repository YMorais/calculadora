function calcular() {
    let salario = parseFloat(document.getElementById("salario").value);
    let percentual = 0;
    
    if (salario <= 1200) {
        percentual = 16;
    } else if (salario <= 2100) {
        percentual = 13;
    } else if (salario <= 3000) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    let aumento = (salario * percentual) / 100;
    let novoSalario = salario + aumento;

    document.getElementById("percentual").innerText = percentual + "%";
    document.getElementById("valorAumento").innerText = aumento.toFixed(2);
    document.getElementById("novoSalario").innerText = novoSalario.toFixed(2);
}
// Função para exibir data e hora atual em tempo real
function exibirDataHora() {
    const data = new Date();
    const dataFormatada = data.toLocaleString('pt-BR', { hour12: false });
    document.getElementById('data-hora').innerText = `Data e Hora Atual: ${dataFormatada}`;
}

// Atualiza a data e hora a cada segundo
setInterval(exibirDataHora, 1000);

// Chama a função imediatamente ao carregar a página
exibirDataHora();

