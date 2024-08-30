const price = document.getElementById("price");
const quant = document.getElementById("quant");
const btn = document.getElementById("btn");
const btnClear = document.getElementById("btn-clear");
const errorText = document.getElementById("error-text");
const results = document.getElementById("results");

let quantItems = 0;
let total = 0;
btn.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (price.value === "" || quant.value === "") {
    errorText.innerHTML = "Preencha todos os campos!";
  } else {
    errorText.innerHTML = "";

    const priceValue = parseFloat(price.value);
    const quantValue = parseFloat(quant.value);

    quantItems += quantValue;
    total += priceValue * quantValue;

    results.innerHTML = `Total: ${total} reais <br /> Quantidade de items: ${quantItems}`;

    //Limpando o campo
    price.value = "";
    quant.value = "";

    //Tornando o botão de limpar visivel
    btnClear.style.visibility = "visible";
  }
});

btnClear.addEventListener("click", (ev) => {
  ev.preventDefault();

  total = "";
  quantItems = "";
  price.value = "";
  quant.value = "";
  errorText.innerHTML = "";
  results.innerHTML = "";

  //Tornando o botão de limpar invisivel novamente
  btnClear.style.visibility = "hidden";
});
