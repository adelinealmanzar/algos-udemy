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

// for two strings, determine if they're anagrams (same length, same letters, same frequency)
function isAnagram(s1, s2) {
    if (s1 === "" && s2 === s1) {
        return true
    } else if (s1.length !== s2.length) {
        return false
    }
    let freqCount1 = {}
    let freqCount2 = {}
    for (let char of s1) {
        freqCount1[char] = (freqCount1[char] || 0) + 1
    }
    for (let char of s2) {
        freqCount2[char] = (freqCount2[char] || 0) + 1
    }
    for (let key in freqCount1) {
        if (!(key in freqCount2)) {
            return false
        }
        if (freqCount1[key] !== freqCount2[key]) {
            return false
        }
    }
    return true
}

function anotherIsAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }

    const lookup = {}
    for (let i = 0; i < s1.length; i++) {
        let letter = s1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    for (let i = 0; i < s2.length; i++) {
        let letter = s1[i]
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }
    return true
}

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

function countUniqueValues(arr) {
    if (arr.length === 0) return 0
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

function isSubsequence(s1, s2) {
    let resultS = ""

    let i = 0
    for (let j = 0; j < s2.length; j++) {
        if (s1[i] === s2[j]) {
            resultS += s2[j]
            i++
        }
    }
    return resultS === s1
}

function maxSubArraySum(arr, subL) {
    
}

console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)) //5