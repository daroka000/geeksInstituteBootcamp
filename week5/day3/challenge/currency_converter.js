const API_KEY = '95eb12175a557930399fa64f'; 
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

async function fetchCurrencies() {
  try {
    const res = await fetch(`${BASE_URL}/codes`);
    const data = await res.json();

    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');

    data.supported_codes.forEach(([code, name]) => {
      const option1 = new Option(`${code} - ${name}`, code);
      const option2 = new Option(`${code} - ${name}`, code);
      fromSelect.add(option1);
      toSelect.add(option2);
    });

    fromSelect.value = "USD";
    toSelect.value = "ILS";

    convertCurrency();
  } catch (error) {
    alert("Erreur lors du chargement des devises.");
  }
}

async function convertCurrency() {
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;
  const amount = document.getElementById('amount').value;

  try {
    const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    const data = await res.json();
    document.getElementById('result').innerText = `${data.conversion_result} ${to}`;
  } catch (error) {
    alert("Erreur de conversion.");
  }
}

function switchCurrencies() {
  const from = document.getElementById('fromCurrency');
  const to = document.getElementById('toCurrency');
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  convertCurrency();
}

// Initialisation
fetchCurrencies();
