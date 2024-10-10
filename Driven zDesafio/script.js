let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;
let pratoNome = "", bebidaNome = "", sobremesaNome = "";
let pratoPreco = 0, bebidaPreco = 0, sobremesaPreco = 0;

function selecionarPrato(botaoPratos) {
    const botaoSelecionadoAntes = document.querySelector(".pratos .selecionado");
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado");
    }

    botaoPratos.classList.add("selecionado");
    pratoSelecionado = true;
    pratoNome = botaoPratos.querySelector("h4").textContent;
    pratoPreco = parseFloat(botaoPratos.querySelector(".valor-prato-1").textContent.replace("R$ ", "").replace(",", "."));

    verificarSelecao();
}



function selecionarBebida(botaoBebidas) {
    const botaoSelecionadoAntes = document.querySelector(".bebidas .selecionado");
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado");
    }


    botaoBebidas.classList.add("selecionado");
    bebidaSelecionada = true;
    bebidaNome = botaoBebidas.querySelector("h4").textContent;
    bebidaPreco = parseFloat(botaoBebidas.querySelector(".valor-bebida-1").textContent.replace("R$ ", "").replace(",", "."));

    verificarSelecao();
}



function selecionarSobremesa(botaoSobremesas) {
    const botaoSelecionadoAntes = document.querySelector(".sobremesa .selecionado");
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado");
    }

    botaoSobremesas.classList.add("selecionado");
    sobremesaSelecionada = true;
    sobremesaNome = botaoSobremesas.querySelector("h4").textContent;
    sobremesaPreco = parseFloat(botaoSobremesas.querySelector(".valor-sobremesa-1").textContent.replace("R$ ", "").replace(",", "."));

    verificarSelecao();
}




function verificarSelecao() {
    const botao = document.querySelector(".botao-fechar-pedido");

    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botao.innerHTML = "Fechar pedido";
        botao.style.backgroundColor = "#32CD32";
        botao.disabled = false; 
    } 
    
    else {
        botao.disabled = true; 
    }
}




function mostrarConfirmacao() {
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        document.querySelector(".p_confirmacao_comida").textContent = `${pratoNome}: R$ ${pratoPreco.toFixed(2)}`;
        document.querySelector(".p_confirmacao_bebida").textContent = `${bebidaNome}: R$ ${bebidaPreco.toFixed(2)}`;
        document.querySelector(".p_confirmacao_sobremesa").textContent = `${sobremesaNome}: R$ ${sobremesaPreco.toFixed(2)}`;
        const total = pratoPreco + bebidaPreco + sobremesaPreco;
        document.querySelector(".p_confirmacao_valor").textContent = `Total: R$ ${total.toFixed(2)}`;
        document.querySelector(".tela_de_confirmacao").classList.remove("escondido");
    }
}






function cancelarPedido() {
    document.querySelector(".tela_de_confirmacao").classList.add("escondido");
}









//ZAP ZAP//


function enviarPedido() {
    const total = (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2).replace('.', ',');
    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoNome}
    - Bebida: ${bebidaNome}
    - Sobremesa: ${sobremesaNome}
    Total: R$ ${total}`;

 
    const encodedMessage = encodeURIComponent(mensagem);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}
