let soma = 0.0;
let count = 0;

const valorInput = document.getElementById('valor-input');
const quantidadeInput = document.getElementById('quantidade-input');
const calcularBtn = document.getElementById('calcular-btn');
const resultado = document.getElementById('resultado');
const resultado2 = document.getElementById('resultado2');

valorInput.addEventListener('keypress', (event) => {
    if (event.key === ',' || event.key === '.') {
      event.preventDefault();
      const decimalSeparator = (1.1).toLocaleString().substring(1, 2); // Obter o separador decimal da configuração regional
      event.target.value += decimalSeparator;
  }
});

calcularBtn.addEventListener('click', () => {
  const valor = parseFloat(valorInput.value.replace(',', '.'));
  const quantidade = parseInt(quantidadeInput.value);

  if (!isNaN(valor) && !isNaN(quantidade)) {
    soma += valor * quantidade;
    count += quantidade;
    resultado.textContent = `Preço total: ${soma.toFixed(2)}`;
    resultado2.textContent = `Produtos: ${count}`
    valorInput.value = ''; // Limpa o campo de valor
    quantidadeInput.value = ''; // Limpa o campo de quantidade
  }
});


