//Merge Sort
function merge(arr1, arr2) {
	let results = []
	let i = 0
	let j = 0
	// will exaust our condition if one arr is shorter than anohtr
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]){
			results.push(arr1[i]) // push smaller num
			i++
		} else {
			results.push(arr2[j])
			j++
		}
	}
	// so need a condition for each arr length for the remainder of each arr
	while (i < arr1.length) {
		results.push(arr1[i])
		i++
	}

	while (j < arr2.length) {
		results.push(arr2[j])
		j++
	}
	return results
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr //to exit recursion loop
	let mid = Math.floor(arr.length/2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid)) // with no second argument, defaults to the end of the arr
	return marge(left, right)
}

// Quick Sort
function pivot(arr, start=0, end=arr.length+1) {
	function swap(array, i, j) {
		let temp = array[i]
			array[i] = array[j]
			array[j] = temp
	}
	
	let pivot = arr[start] // pivot will be the first el to start
	let swapIdx = start // counter will start at pivot index

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++ // add one to swap counter to know where to swap pivot eventually
			swap(arr, swapIdx, i) // swap right els to the left before pivot indx (which moves with each greater than item)
		}
	}
	swap(arr, start, swapIdx) // swap starting el (which should be original pivot) with actual pivot position (where should be)
	return swapIdx 
}

// Radix Sort
// return digit at the nth place
function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}
getDigit(12345, 0) // 5 (place is backwards)

// return a count of digits in num
function digitCount(num) {
	if (num === 0) return 1
	return Math.floor(Math.log10(Math.abs(num))) + 1
	// or return num.toString().length 
}

// return the number of digits in the largest num in numsArr
function mostDigits(nums) {
	let maxDigits = 0
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]))
	}
	return maxDigits
}

function radixSort(nums) {
	let maxDigitCount =  mostDigits(nums)
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({length: 10}, () => [])
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k)
			digitBuckets[digit].push(nums[i])
		}
		nums = [].concat(...digitBuckets)
	}
	return nums
}