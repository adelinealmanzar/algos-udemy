function charCount(str) {
    // make an object for return
    let result = {}
    //loop over string for each char
    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        //if char is num/letteer AND is a key in the object, add one to count
        if (result[char] > 0) {
            result[char]++
        }
        // if char is a num/lettere AND isn't in the object, add it to object with inital value of 1
        else {
            result[char] = 1
        }
    }

    return result
}