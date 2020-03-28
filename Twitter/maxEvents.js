const maxEvents = (arrival, duration) => {
    let eventCount = 0;
    let currentTime = 0;
    for (let event = 0; event < arrival.length; event++) {
        if (currentTime > arrival[event]) {
            continue;
        } else if (currentTime === arrival[event]) {
            currentTime += duration[event]
            eventCount++;
        } else {
            currentTime = (arrival[event] - currentTime) + duration[event];
            eventCount++;
        }
    }

    return eventCount;
}

console.log(maxEvents([1, 3, 5], [2, 2, 2]))
console.log(maxEvents([1, 3, 3, 5, 7], [2, 2, 1, 2, 1]))