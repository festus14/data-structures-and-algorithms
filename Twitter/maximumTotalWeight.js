const maximumTotalWeight = (weights, tasks, p) => {
    tasks = tasks.map(elem => (2 * elem))
    let tasksAddObj = {};
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] <= p) {
            if (tasksAddObj[tasks[i]]) {
                tasksAddObj[tasks[i]] = Math.max(weights[i], tasksAddObj[tasks[i]])
            } else tasksAddObj[tasks[i]] = weights[i]
        }
        let tasksAdd = tasks[i]
        let weightsAdd = weights[i]
        for (let j = i + 1; j < tasks.length; j++) {
            tasksAdd += tasks[j]
            if (tasksAdd > p) continue;
            weightsAdd += weights[j]
            if (tasksAddObj[tasksAdd]) {
                tasksAddObj[tasksAdd] = Math.max(weightsAdd, tasksAddObj[tasksAdd])
            } else tasksAddObj[tasksAdd] = weightsAdd
        }
    }
    return Math.max(...Object.values(tasksAddObj))
}

console.log(maximumTotalWeight([3, 2, 2], [3, 2, 2], 9))
console.log(maximumTotalWeight([2, 4, 4, 5], [2, 2, 3, 4], 15))