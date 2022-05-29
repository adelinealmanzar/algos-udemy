// Singly Linked List

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


}

const dLL = new DoublyLinkedList
dLL.push(1) // 0
dLL.push(2) // 1
dLL.push(3) // 2 
dLL.push(4) // 3
