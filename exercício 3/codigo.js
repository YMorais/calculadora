function calcularTransporte() {
    const quantidadePessoas = document.getElementById('quantidadePessoas').value;
    const diasUteis = document.getElementById('diasUteis').value;
    let valorPorPessoa;

    // Determina o valor por pessoa/dia com base na quantidade de pessoas
    if (quantidadePessoas >= 1 && quantidadePessoas <= 49) {
        valorPorPessoa = 4.50;
    } else if (quantidadePessoas >= 50 && quantidadePessoas <= 99) {
        valorPorPessoa = 4.10;
    } else if (quantidadePessoas >= 100 && quantidadePessoas <= 149) {
        valorPorPessoa = 3.80;
    } else if (quantidadePessoas >= 150) {
        valorPorPessoa = 3.60;
    } else {
        alert("Quantidade de pessoas inválida");
        return;
    }

    // Calcula o custo total
    const custoTotal = quantidadePessoas * valorPorPessoa * diasUteis;

    // Exibe o resultado
    document.getElementById('custoTotal').textContent = custoTotal.toFixed(2);
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

