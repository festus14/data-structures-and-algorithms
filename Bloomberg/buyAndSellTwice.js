const buyAndSellTwice = (prices) => {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let profit = Number.MIN_SAFE_INTEGER;
    let minIndex = 0;
    let profitIndex = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        minPrice = Math.min(minPrice, price);
        if (minPrice === price) minIndex = i;
        profit = Math.max(profit, (price - minPrice));
        if (profit === (price - minPrice)) profitIndex = i;
    }

    minPrice = Number.MAX_SAFE_INTEGER;
    let profitTwo = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < minIndex; i++) {
        const price = prices[i];
        minPrice = Math.min(minPrice, price);
        profitTwo = Math.max(profitTwo, (price - minPrice));
    }

    minPrice = Number.MAX_SAFE_INTEGER;
    let profitThree = Number.MIN_SAFE_INTEGER;

    for (let i = profitIndex + 1; i < prices.length; i++) {
        const price = prices[i];
        minPrice = Math.min(minPrice, price);
        profitThree = Math.max(profitThree, (price - minPrice));
    }

    return profit + Math.max(profitTwo, profitThree);
}

console.log(buyAndSellTwice([12, 11, 13, 9, 12, 8, 14, 13, 15]))