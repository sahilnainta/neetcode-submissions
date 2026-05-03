class Node {
    constructor(value = null) {
        this.value = value
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head;
        let i=0
        while(current) {
            if(i==index) {
                return current.value;
            }
            i++;
            current = current.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node = new Node(val);
        node.next = this.head;
        if(!this.head) {
            this.head = this.tail = node;
        } else {
            this.head = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let current = this.head;
        let previous = null;
        let i = 0;
        while (current) {
            if(i == index) {
                if(previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }

                if(this.tail == current) {
                    this.tail = previous;
                }
                return true;
            }
            i++;
            previous = current;
            current = current.next;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

let list = new LinkedList();

console.log(list.getValues());
list.insertHead(1);
list.insertHead(2);
list.insertTail(3);
list.insertTail(4);
list.insertHead(5);
console.log(list.getValues());
console.log(list.get(0));
console.log(list.get(2));
console.log(list.get(4));
// list.remove(2);
list.remove(0);
// list.insertHead(6);
// list.insertTail(7);
console.log(list.getValues());
console.log(list.get(5));
