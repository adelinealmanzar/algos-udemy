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
