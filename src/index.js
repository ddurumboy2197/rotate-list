class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    rotate(k) {
        if (!this.head || k === 0) {
            return;
        }
        let current = this.head;
        let length = 1;
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
            length++;
        }
        tail.next = this.head;
        let newTail = this.head;
        for (let i = 0; i < length - k % length - 1; i++) {
            newTail = newTail.next;
        }
        this.head = newTail.next;
        newTail.next = null;
    }

    printList() {
        let current = this.head;
        let output = '';
        while (current) {
            output += current.data + ' ';
            current = current.next;
        }
        console.log(output);
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log('Asl ro'yxat:');
list.printList();
list.rotate(2);
console.log('Aylangan ro'yxat:');
list.printList();
