const conversionRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, JPY: 129 },
    GBP: { USD: 1.34, EUR: 1.14, GBP: 1, JPY: 147 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, JPY: 1 }
};

document.getElementById('convert').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, ingrese un monto válido');
        return;
    }

    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    document.getElementById('result').value = `${convertedAmount.toFixed(2)} ${toCurrency}`;
});
