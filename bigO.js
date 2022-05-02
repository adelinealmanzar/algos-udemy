// Write a function that calculates the sum of all numbers from 1 up to and including some number n

// Time Complexity
// O(n)
function addUpToNoOn(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

// O(1)
function addUpToNO1(n) {
    return n * (n + 1) / 2
}

//O(n) because O(n) additive
function upAndDownOn(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    for (let j = 0; j < n; j++) {
        console.log(j)
    }
}

//O(n^2) because O(n) nested/multiplied
function printAllPairsON2(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

// O(n)
function logAtLeast5(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

// O(1)
function logAtMost5(n) {
    for (let i = 0; i < Math.min(5, n); i++) {
        console.log(i)
    }
}

//Space Complexity
// O(1)
function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

//O(n)
function double(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}
