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
