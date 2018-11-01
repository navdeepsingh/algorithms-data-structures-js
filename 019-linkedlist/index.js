// Solution
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	size() {
		
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}
	 
}

module.exports = {Node, LinkedList};
