const waitingTime = (tickets, p) => {
    let alexCount = 0;
    if (p === 0 && tickets[p] === 0) return 0;
    while (tickets[p] !== 0) {
        tickets[0] = tickets[0] - 1;
        let firstIndex = tickets.shift();
        tickets.push(firstIndex);
        p--;
        if (p < 0) p = p + tickets.length;
        if (tickets[p] === 0) return alexCount;
        alexCount++;
    }
}

console.log(waitingTime([2, 6, 3, 4, 5], 2))
console.log(waitingTime([4, 2, 1, 2], 2))