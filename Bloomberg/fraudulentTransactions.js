const fraudulentTransactions = (transactions) => {
    const fraudulent = [];
    // console.log(transactions)

    const lastTransactions = {}

    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        const transactionArr = transaction.split(' ').join('').split(',');
        if (!lastTransactions[transactionArr[0]]) {
            lastTransactions[transactionArr[0]] = { amount: transactionArr[1], time: transactionArr[2], location: transactionArr[3], combined: transaction }
            if (lastTransactions[transactionArr[0]].amount > 1000) fraudulent.push(transaction);
        } else {
            const timeDiff = transactionArr[2] - lastTransactions[transactionArr[0]].time;
            if (timeDiff <= 60 && (transactionArr[3] != lastTransactions[transactionArr[0]].location)) {
                fraudulent.push(lastTransactions[transactionArr[0]].combined);
                fraudulent.push(transaction);
            }
            lastTransactions[transactionArr[0]] = { ...lastTransactions[transactionArr[0]], amount: transactionArr[1], time: transactionArr[2], location: transactionArr[3], combined: transaction }
            if (lastTransactions[transactionArr[0]].amount > 1000) fraudulent.push(transaction);
        }
    }

    return fraudulent;

}

console.log(fraudulentTransactions(['Anne, 100, 1, Boston', 'Anne, 2000, 10, Boston', 'Bob, 50, 20, Boston', 'Cindy, 100, 50, New York', 'Bob, 50, 70, New York']));