{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.38;
    const rateUSD = 4.01;
    const rateGBP = 5.11;
    const rateCHF = 4.65;
    const rateTHB = 0.11;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;
      case "USD":
        return amount / rateUSD;
      case "GBP":
        return amount / rateGBP;
      case "CHF":
        return amount / rateCHF;
      case "THB":
        return amount / rateTHB;
    }
  };

  const updateResultText = (amount, currency, result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `<section class="section">Result: ${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}
  <div class="section__paragraphsContainer"><p>EXCHANGE RATES as of January 24 2024 r.</p>
  <p>EURO = 4.38</p>
  <p>DOLLAR = 4.01</p>
  <p>BRITISH POUND = 5.11</p>
  <p>SWISS FRANC = 4.65</p>
  <p>THAI BATH = 0.11</p></div></section>`;
  };

  const calculateButton = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", () => {
    buttonElement.innerHTML = "CALCULATE AGAIN";
  })};

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    calculateButton();
    updateResultText(amount, currency, result);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
   };

   init();
};