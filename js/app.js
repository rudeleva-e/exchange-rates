'use strict';
const update={
    date: '20 июля',
    usd:{
        buyRate:'73,75',
        sellRate:'75,24',
    },
    eur:{
        buyRate: '86,70',
        sellRate: '88,74',
    }
};
function updateExchangeRates(upDate){
    const buyEur = document.getElementById('eur-buy-rate');
    buyEur.textContent=upDate.eur.buyRate;
    const sellEur = document.getElementById('eur-sell-rate');
    sellEur.textContent=upDate.eur.sellRate;
    const buyUsd = document.getElementById('usd-buy-rate');
    buyUsd.textContent=upDate.usd.buyRate;
    const sellUsd = document.getElementById('usd-sell-rate');
    sellUsd.textContent=upDate.usd.sellRate;
    const date= document.getElementById('date');
    date.textContent=upDate.date;
}
updateExchangeRates(update);

