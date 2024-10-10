function calculadora()  {
    const largura = prompt('Nos informe a largura em metros :');

    const comprimento = prompt('Agora, nos informe o comprimento em metros desejado:');

  const valor = (Number(largura)) * (Number(comprimento)) * 2 + 700;
    alert('O valor do aluguel é R$: ' + valor);

}