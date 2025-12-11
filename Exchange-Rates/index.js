const exchangeRatesAPI = require('exchangerate-api');

async function getExchangeRates() {
  try {
    // Using a free tier endpoint (USD as base currency)
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    
    console.log('Exchange Rates (Base: USD)');
    console.log('===========================');
    console.log(`USD: $${data.rates.USD.toFixed(2)}`);
    console.log(`EUR: €${data.rates.EUR.toFixed(2)}`);
    console.log(`GBP: £${data.rates.GBP.toFixed(2)}`);
    console.log('===========================');
    
  } catch (error) {
    console.error('Error fetching exchange rates:', error.message);
  }
}

getExchangeRates();
