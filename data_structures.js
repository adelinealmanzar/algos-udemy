// Singly Linked List

const { isValidElement } = require("react/cjs/react.production.min")
const { ThemeConsumer } = require("styled-components")

class SinglySinglyNode {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		const newSinglyNode = new SinglyNode(val)
		if (!this.head) {
			this.head = newSinglyNode
			this.tail = this.head
		} else {
			this.tail.next = newSinglyNode
			this.tail = newSinglyNode
		}
		this.length += 1
		return this
	}

	pop() {
		if (!this.head) return undefined

		let current = this.head
		let newTail = current
		while (this.next) {
			newTail = current
			current = current.next
		}
		this.tail = newTail
		this.tail.next = null
		this.length -= 1

		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		return current
	}
	
	shift() {
		if (this.length === 0) return undefined
		let prevHead = this.head
		this.head = prevHead.next
		this.length -= 1
		if (this.length === 0) {
			this.tail = null
		}
		return prevHead
	}

	unshift(val) {
		const newSinglyNode = new SinglyNode(val)
		if (this.length === 0) {
			this.head = newSinglyNode
			this.tail = this.head
		} else {
			newSinglyNode.next = this.head
			this.head = newSinglyNode
		}

		this.length += 1
		return this
	}

	get(index) {
		if (index < 0 || index >= this.length) return null
		let counter = 0
		let current = this.head
		while (counter !== index) {
			current = current.next
			counter ++
		}
		return current
	}

	set(index, val) {
		let foundSinglyNode = this.get(index)
		if (foundSinglyNode) {
			foundSinglyNode.val = val
			return true
		}
		return false
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return !!this.push(val)
		if (index === 0) return !!this.unshift(val)

		let newSinglyNode = new SinglyNode(val)
		let priorSinglyNode = this.get(index - 1)
		let nextSinglyNode = priorSinglyNode.next
		priorSinglyNode.next = newSinglyNode
		newSinglyNode.next = nextSinglyNode
		this.length += 1
		return true
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined
		if (index === this.length - 1) return this.pop()
		if (index === 0) return this.shift()

		const prevSinglyNode = this.get(index - 1)
		const removed = prevSinglyNode.next
		prevSinglyNode.next = removed.next
		this.length -= 1
		return removed
	}

	reverse() {
		let SinglyNode = this.head
		this.head = this.tail //13
		this.tail = SinglyNode
		let next
		let prev = null
		for (let i = 0; i < this.length; i++) {
			next = SinglyNode.next
			SinglyNode.next = prev
			prev = SinglyNode
			SinglyNode = next
		}
		return this
	}
}

// Doubly Linked Lists
class DoublyNode {
	constructor(val) {
		this.val = val
		this.next = null
		this.previous = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		const newNode = new DoublyNode(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.previous = this.tail
			this.tail = newNode
		}
		this.length += 1
		return this
	}

	pop() {
		if (this.length === 0) return undefined

		const previousTail = this.tail

		if (this.length === 1) {
			this.tail = null
			this.head = null
		} else {
			this.tail = previousTail.previous
			this.tail.next = null
			previousTail.previous = null
		}
		this.length -= 1
		return previousTail
	}

	shift() {
		if (this.length === 0) return undefined

		const previousHead = this.head
		if (this.length === 1) {
			this.tail = null
			this.head = null
		} else {
			this.head = previousHead.next
			this.head.previous = null
			previousHead.next = null
		}
		this.length -= 1
		return previousHead
	}

	unshift(val) {
		const newNode = new SinglyNode(val)

		const previousHead = this.head
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			previousHead.previous = newNode
			newNode.next = previousHead
			this.head = newNode
		}

		this.length += 1
		return this
	}

	get(index) {
		if (index < 0 || index >= this.length) return null
		const mid = Math.floor(this.length/2)
		let current
		if (index <= this.length/2) {
			current = this.head
			for (let i = 0; i <= mid; i++) {
				if (i === index) return current
				current = current.next
			}
		} else {
			current = this.tail
			for (let i = this.length - 1; i > mid; i--) {
				if (i === index) return current
				current = current.previous
			}
		}
	}

	set(index, val) {
		let foundNode = this.get(index)

		if (foundNode) {
			foundNode.val = val
			return true
		}
		return false
	}

	insert(index, val) {
		if (index < 0 || index >= this.length) return false
		if (index === 0) return !!this.unshift(val)
		if (index === this.length || this.length === 0) return !!this.push(val)

		const newNode = new DoublyNode(val)
		const foundNode = this.get(index)

		newNode.previous = foundNode.previous
		foundNode.previous.next = newNode
		foundNode.previous = newNode
		newNode.next = foundNode

		this.length += 1
		return true
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined
		if (index === 0) return this.shift()
		if (index === this.length - 1 ) return this.pop()

		const foundNode = this.get(index)
		const beforeNode = foundNode.previous
		const afterNode = foundNode.next

		beforeNode.next = afterNode
		afterNode.previous = beforeNode

		foundNode.next = null
		foundNode.previous = null

		length -= 1
		return foundNode

	}
}

// Stack
class StackNode {
	constructor(val) {
		this.val = val
		this.next = null
	}
}
class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}
	// add to beginning
	push(val) {
		const newNode = newNode(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			let prevFirst = this.first
			this.first = newNode
			newNode.next = prevFirst
		}
		return this.size += 1
	}
	// remove from beginning
	pop() {
		let removed = this.first
		if (!this.first) return null
		if (this.size === 1) {
			this.first = null
			this.last = null
		} else {
			this.first = removed.next
		}
		this.size -= 1
		return removed.val
	}
}

// Queue

class QueueNode {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	// add to end
	enqueue(val) {
		const newNode = new QueueNode(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		
		return this.size += 1
	}

	// remove from beginning
	dequeue() {
		if (!this.first) return null

		const prevFirst = this.first
		this.first = prevFirst.next
		this.size -= 1
		return prevFirst.val
	}
}

// Binary Search Tree
class BinaryNode {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(val) {
		const newNode = new BinaryNode(val)
		let current = this.root

		if (!this.root) {
			this.root = newNode
			return this
		}
		while (true) {
			if (val === current.val) return undefined
			if (val < current.val) {
				// check if left exists
				if (!current.left) {
					current.left = newNode
					return this
				} else {
					current = current.left
				}
			} else if (val > current.val) {
				// check if right exists
				if (!current.right) {
					current.right = newNode
					return this
				} else {
					current = current.right
				}
			}
		}
	}

	find(val) {
		if (!this.root) return false

		let current = this.root
		let found = false
		while (current && !found) {
			if (val < current.val) {
				current = current.left
			} else if (val > current.val) {
				current = current.right
			} else {
				found = true
			}
		}
		return found
	}

	BFS() {
		let visited = []
		let queue = []
		let node = this.root

		queue.push(node)

		while (queue.length) {
			node = queue.shift()
			visited.push(node.val)
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}

		return visited
	}

	//DFS
	preOrder() {
		let visited = []
		let current = this.root

		function traverse(node) {
			visited.push(node.val)
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}
		
		traverse(current)
		return visited
	}

	postOrder() {
		let visited = []
		let current = this.root

		function traverse(node) {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
			visited.push(node.val)
		}

		traverse(current)
		return visited
	}

	InOrder() {
		let visited = []
		let current = this.root
		
		function traverse(node) {
			if (node.left) traverse(node)
			visited.push(node)
			if (node.right) traverse(node)
		}

		traverse(current)
		return visited
	}

}
class MaxBinaryHeap {
	constructor() {
		this.values = []
	}

	insert(val) {
		this.values.push(val)
		this.bubbleUp()
	}

	bubbleUp() {
		let childIndex = this.values.length - 1
		let child = this.values[childIndex]

		while (true) {
			let parentIndex = Math.floor((childIndex - 1)/2)
			let parent = this.values[parentIndex]

			if (parent >= child) break
			this.values[parentIndex] = child
			this.values[childIndex] = parent
			
			childIndex = parentIndex
		}
	}

	extractMax() {
		let max = this.values[0]
		let end = this.values.pop()
		// account for if array empty, do don't keep adding 1
		if (this.values.length > 0) {
			this.values[0] = end
			this.sinkDown()
		}

		return max
	}

	sinkDown() {
		let idx = 0
		const length = this.values.length
		const el = this.values[0]

		while (true) {
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2

			let leftChild, rightChild
			let swapIdx = null

			// validate valid index
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx]
				if (leftChild > el) swapIdx = leftChildInx
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx]
				// check if swap hasn't happened yet or if it has happened but right is bigger than left
				if (
					(swapIdx === null && rightChild > el) || 
					(swapIdx !== null && rightChild > leftChild)
				) swapIdx = rightChildIdx
			}

			if (swap === null) break // if swap didn't happen, get out of loop
			this.values[idx] = this.values[swapIdx]
			this.values[swapIdx] = el
			idx = swapIdx //index to swap is swapped with previous root
		}
	}
}

class PriorityNode {
	constructor(val, priority) {
		this.val = val
		this.priority = priority
	}
}
class PriorityQueue {
	constructor() {
		this.values = []
	}

	enqueue(val, priority) {
		const newNode = new PriorityNode(val, priority)

		this.values.push(newNode)
		this.bubbleUp()
	}

	bubbleUp() {
		let childIndex = this.values.length - 1
		let child = this.values[childIndex]

		while (true) {
			let parentIndex = Math.floor((childIndex - 1)/2)
			let parent = this.values[parentIndex]

			if (parent.priority >= child.priority) break
			this.values[parentIndex] = child
			this.values[childIndex] = parent
			
			childIndex = parentIndex
		}
	}

	dequeue() {
		let min = this.values[0]
		let end = this.values.pop()
		// account for if array empty, do don't keep adding 1
		if (this.values.length > 0) {
			this.values[0] = end
			this.sinkDown()
		}

		return min
	}
    // reverse logic for basically extracting min
	sinkDown() {
		let idx = 0
		const length = this.values.length
		const el = this.values[0]

		while (true) {
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2

			let leftChild, rightChild
			let swapIdx = null

			// validate valid index
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx]
				if (leftChild.priority < el) swapIdx = leftChildInx
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx]
				// check if swap hasn't happened yet or if it has happened but right is bigger than left
				if (
					(swapIdx === null && rightChild.priority < el) || 
					(swapIdx !== null && rightChild.priority < leftChild)
				) swapIdx = rightChildIdx
			}

			if (swap === null) break // if swap didn't happen, get out of loop
			this.values[idx] = this.values[swapIdx]
			this.values[swapIdx] = el
			idx = swapIdx //index to swap is swapped with previous root
		}
	}
}