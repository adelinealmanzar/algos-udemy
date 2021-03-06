function charCount(str) {
    // make an object for return
    let result = {}
    //loop over string for each char
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        //if char is num/letteer AND is a key in the object, add one to count
        if (/[a-z0-9]/.test(char)) { // check for alphaneumeric characters
            if (result[char] > 0) {
                result[char]++
            }
            // if char is a num/lettere AND isn't in the object, add it to object with inital value of 1
            else {
                result[char] = 1
            }
        }
    }
    return result
}

function refactoredCharCount(str) {
    let obj = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) { // check for alphaneumeric characters with faster runtime
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1 // if obj[char] truthy, add one count to obj[char] else it will equal to 1
        }
    }
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123)) { //lower alpha
        return false
    }
    return true
}

function maxSubArraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

function search(arr, val) {
    let min = 0
    let max = arr.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentEl = arr[middle]

        if (currentEl < val) {
            min = middle + 1
        }
        else if (currentEl > val) {
            max = middle - 1
        }
        else {
            return middle
        }
    }
    return -1
}

function power(base, exp) {
    if (exp === 0) return 1
    return base * power(base, exp-1)
}

function factorial(num) {
    if (num === 0) return 1
    return num * factorial(num-1)
}

function sameFrequency(num1, num2) {
    if (num1.length !== num2.length) return false
    const arr1 = num1.toString().split('').sort().join('')
    const arr2 = num2.toString().split('').sort().join('')
    return arr1 === arr2
}

function areThereDuplicates() {
    const obj = {}
    for (let val of arguments) {
        obj[val] = ++obj[val] || 1
    }
    for (let key of Object.keys(obj)) {
        if (obj[key] > 1) return true
    }
    return false
}

function recursiveRange(num) {
    if (num === 1) return 1
    return num + recursiveRange(num-1)
}

function averagePair(arr, tar) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        if ((arr[left] + arr[right])/2 === tar) {
            return true
        } else if ((arr[left] + arr[right])/2 < tar) {
            left++
        } else if ((arr[left] + arr[right])/2 > tar) {
            right--
        }
    }
    return false
}

function binarySearch(arr, val) {
	let left = 0
	let right = arr.length
    let middle = Math.floor((left + right)/2)

	while (arr[middle] !== val && left < right) {
		if (val > arr[middle]) {
			left = middle + 1
		} else if (val < arr[middle]) {
			right = middle - 1
	    }
        middle = Math.floor((left + right)/2)
    }
    return arr[middle] === val ? middle : -1
}

function findNumber(arr, k) {
    for (let char of arr) {
        if (char === k) return 'YES'
    }
    return 'NO'
}

function oddNumbers(l, r) {
    let resultArr = []
    while (l <= r) {
        if (l % 2 === 0) {
            l += 1
        } else {
            resultArr.push(l)
            l += 2
        }
    }
    return resultArr
}


function findMaximum(arr, m) {
    let maxDiff = 0
    let tempDiff = 0
    if (arr.length < m) return null
    for (let i = 0; i < m; i++) {
        maxDiff += arr[i]
    }
    tempDiff = maxDiff
    for (let i = m; i < arr.length; i++) {
        console.log('max', maxDiff)
        console.log('temp', tempDiff)
        tempDiff = tempDiff - arr[i - m]
        console.log(tempDiff)
        maxDiff = Math.max(maxDiff, tempDiff)
    }
    return maxDiff
}

console.log(findMaximum([1,2,4,5,8], 3))

    //Brute Force Approach
    // declare object var (will have key = a[i] and values = [] of abs values greater than d)
    // loop through a to make object var
    // loop through a and then loop through b (but O(N^2) runtime)
    // if Math.abs(a[i] - a[j]) > d push to arrays within object values
    
    // loop through object keys for if value(array).length is equal to a.length to return object key


