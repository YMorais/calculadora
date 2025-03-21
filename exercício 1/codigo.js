function calcularHorasExtras() {
    let salarioBase = parseFloat(document.getElementById("salarioBase").value);
    let horasExtras = parseFloat(document.getElementById("horasExtras").value);

    let valorHora = salarioBase / 220;
    let valorHoraExtra = valorHora * 1.5;
    let totalExtra = valorHoraExtra * horasExtras;

    document.getElementById("valorHora").innerText = valorHora;
    document.getElementById("valorHoraExtra").innerText = valorHoraExtra;
    document.getElementById("totalExtra").innerText = totalExtra;
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
