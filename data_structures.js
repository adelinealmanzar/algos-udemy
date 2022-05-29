// Singly Linked List

class Node {
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
		const newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length += 1
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
		prevHead.next = null
		this.length -= 1
		if (this.length === 0) {
			this.tail = null
		}
		return prevHead
	}

}

const first = new Node('hi')
first.next = new Node('there')

const list = new SinglyLinkedList()
list.push('hello')
list.push('there')
console.log(list.pop())