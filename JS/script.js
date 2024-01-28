let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");

buttonElement.addEventListener("click", () => {
  buttonElement.innerHTML = "CALCULATE AGAIN";
});

let rateEUR = 4.38;
let rateUSD = 4.01;
let rateGBP = 5.11;
let rateCHF = 4.65;
let rateTHB = 0.11;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;
    case "USD":
      result = amount / rateUSD;
      break;
    case "GBP":
      result = amount / rateGBP;
      break;
    case "CHF":
      result = amount / rateCHF;
      break;
    case "THB":
      result = amount / rateTHB;
      break;
  }

  resultElement.innerHTML = `<section class="section">Result: ${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}
  <div class="section__paragraphsContainer"><p>EXCHANGE RATES as of January 24 2024 r.</p>
  <p>EURO = 4.38</p>
  <p>DOLLAR = 4.01</p>
  <p>BRITISH POUND = 5.11</p>
  <p>SWISS FRANC = 4.65</p>
  <p>THAI BATH = 0.11</p></div></section>`;
});
