function stringFormattedWeeklyPrices(dailyPrice) {
    let ans = [];
    let sum = 0;
    for (let j = 0; j < dailyPrice.length; j++) {
        if (dailyPrice.length >= 7) {
            for (let i = 0; i < dailyPrice.length; i++) {
                if (i <= 6) {
                    sum += dailyPrice[i];
                }

                if (i === 6) {
                    ans.push((sum / 7).toFixed("2"));
                    sum = 0;
                }
            }
        }
        dailyPrice.shift();
    }

    return ans;
}
console.log(stringFormattedWeeklyPrices([7, 8, 8, 11, 9, 7, 5, 6]));