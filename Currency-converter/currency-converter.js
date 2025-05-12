function convertCurrency() {
    let amount = document.querySelector('#amount').value;
    let from = document.querySelector('#fromCurrency').value;
    let to = document.querySelector('#toCurrency').value;

    let rates = {
        USD: { INR: 83, EUR: 0.93, CNY: 7.24, JPY: 155.33 },
        INR: { USD: 0.012, EUR: 0.011, CNY: 0.087, JPY: 1.87 },
        EUR: { USD: 1.07, INR: 89, CNY: 8.13, JPY: 167.34 },
        CNY: { USD: 0.14, INR: 11.49, EUR: 0.12, JPY: 20.6 },
        JPY: { USD: 0.0064, INR: 0.53, EUR: 0.006, CNY: 0.049 }
    };

    if (from === to) {
        document.querySelector('#result').innerHTML = `Converted amount: ${amount.toFixed(3)} ${to}`;
        return;
    }

    let converted = amount * rates[from][to];
    document.querySelector('#result').innerHTML = `Converted amount: ${converted.toFixed(3)} ${to}`;
}