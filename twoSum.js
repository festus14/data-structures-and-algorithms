var twoSum = function(nums, target) {
    let ansArray = [];
    let arrObj = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return ansArray = [i, j]
            }
        }

    }
};

var twoSum = function(nums, target) {
    let ansArray = [];
    let arrObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!arrObj[nums[i]]) {
            arrObj[nums[i]] = i;
        } else {
            arrObj[nums[i]] = i;
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (arrObj[target - nums[j]]) {
            return ansArray = [j, arrObj[target - nums[j]]];
        }
    }
}

const twoSum = function(nums, target) {
    let ansArray = [];
    let arrObj = {};
    for (let i = 0; i < nums.length; i++) {
        arrObj[nums[i]] = i;
    }

    for (let j = 0; j < nums.length; j++) {
        if (arrObj[target - nums[j]] && j !== arrObj[target - nums[j]]) {
            return ansArray = [j, arrObj[target - nums[j]]];
        }
    }
}

console.log(twoSum([1, 3, 4, 2], 6))