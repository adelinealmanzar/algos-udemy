// naive solution O(N^2) runtime
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

// O(N)
function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let freqCount1 = {}
    let freqCount2 = {}
    for (let el of arr1) {
        freqCount1[el] = (freqCount1[el] || 0) + 1
    }
    for (let el of arr2) {
        freqCount2[el] = (freqCount2[el] || 0) + 1
    }
    for (let key in freqCount1) {
        if (!(key ** 2 in freqCount2)) {
            return false
        }
        if (freqCount2[key ** 2] !== freqCount1[key]) {
            return false
        }
    }
    return true
}