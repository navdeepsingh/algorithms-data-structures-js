class Queue {
	constructor() {
		this.data = [];
	}

	add(n) {
		return this.data.unshift(n);
	}

	remove() {
		return this.data.pop();
	}
}

module.exports = Queue;