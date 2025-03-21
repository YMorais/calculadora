document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".botao");

    // Adiciona um efeito ao passar o mouse sobre os botões
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Exibe uma mensagem no console ao carregar a página
    console.log("Página inicial carregada com sucesso!");
});
