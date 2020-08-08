const buyAndSell = (prices) => {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let profit = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        minPrice = Math.min(minPrice, price);
        const newProfit = price - minPrice;
        profit = Math.max(profit, newProfit);
    }

    return profit;
}

console.log(buyAndSell([12, 11, 13, 9, 12, 8, 14, 13, 15]))