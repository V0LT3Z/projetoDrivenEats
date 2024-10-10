const nickname = prompt('Qual seu nome?');
const bomDia = document.querySelector(".boas-vindas");
bomDia.innerHTML = `Olá, ${nickname}! Como está? :)`;