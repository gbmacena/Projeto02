let soma = 0.0;
let count = 0;

while (true) {
  let valor = prompt('Valor do produto (Digite "parar" para encerrar):');
  if (valor.toLowerCase() === 'parar') {
    break;
  } else {
    let quantidade = parseInt(prompt('Quantidade de Produtos:'));
    soma = soma + parseFloat(valor) * quantidade;
    count = count + 1;
  }
}

console.log(`O valor total dos produtos é igual a: ${soma} e o total é de ${count} produtos!`);
