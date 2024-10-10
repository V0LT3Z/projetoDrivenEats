function primeiroNumero() {
    const primeiroPasso = (Number (prompt('Por favor,nos informe o primeiro o primeiro número: ')));
    alert("Ok, registramos seu primeiro número, agora nos informe o segundo número")
    const segundoPasso = (Number(prompt("Agora escolha seu segundo número, por favor.")))
    alert("Ok, registramos seu segundo número, por favor, agora nos informe a operação desejada, clicando nos botões")
    const operação = prompt("Por favor, nos informe qual a operação que você deseja realizar em que: '+' = soma, '-' = subtração e '*' = multplicação.")
    const resultado1 = primeiroPasso + segundoPasso;
    const resultado2 = primeiroPasso - segundoPasso;
    const resultado3 = primeiroPasso * segundoPasso;

    if(operação === "+" ){
        resultado1;
        alert("O resultado é: " + resultado1);
    } 
    else if(operação === "-"){
        resultado2;
        alert("O resultado é: " + resultado2);
    }
    else {
    resultado3;
    alert("O resultado é: " + resultado3);
}
}