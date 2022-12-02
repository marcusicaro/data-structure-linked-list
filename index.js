class Linkedlist {

    constructor() {
        this.currentNode = null;
        this.head = null;
    }

    append(value) {
        if(this.head === null) {
            this.head = new Node(value);
            return
        }
        this.currentNode = this.head;
        while (this.currentNode.nextNode !== null) {
            this.currentNode = this.currentNode.nextNode;
        } 
        this.currentNode.nextNode = new Node(value);
    }

    prepend(value) {
        const newHead = new Node(value);
        newHead.nextNode = this.head;
        this.head = newHead;
    }

    size() {
        if(this.head !== null) {
            let ammount = 0;
            if(this.head !== null) {
            this.currentNode = this.head;
            while(this.currentNode.nextNode !== null) {
                this.currentNode = this.currentNode.nextNode;
                ammount += 1;
            }
            return ammount + 1;
            }
            return ammount;
        } 
        return alert('Please insert a node first.')
    }

    tail() {
        if(this.head !== null) {
            while(this.currentNode.nextNode !== null) {
                this.currentNode = this.currentNode.nextNode;
            } 
            return this.currentNode;
        } 
        return alert('Please insert a node first.')
    }

    at(index) {
        if(this.head !== null) {
            if (index > this.size()) {
                return alert('Index is bigger than nodes ammount')
            }

            this.currentNode = this.head;
            for(let i = 0; i < index; i++) {
                this.currentNode = this.currentNode.nextNode;
            }
            return this.currentNode;
        } return alert('Please insert a node first.')
    }

    pop() {
        if(this.head !== null) {
            var a = this.at(this.size() - 2);
            return a.nextNode = null;
        }
        return alert('Please insert a node first.')
    }

    contains(value) {
        if(this.head !== null) {
            this.currentNode = this.head;
            while(this.currentNode.nextNode !== null){
                if(this.currentNode.value === value) {
                    return true
                }
                this.currentNode = this.currentNode.nextNode;
            } 
            if (this.currentNode.value === value) {
                return true
            }
            return false
        }
        return alert('Please insert a node first.')
    }

    find(value) {
        if(this.head !== null) {
            let index = 0
            this.currentNode = this.head;
            while(this.currentNode.nextNode !== null) {
                if(this.currentNode.value === value) {
                    return index
                }
                this.currentNode = this.currentNode.nextNode;
                index += 1;
            }
            if (this.currentNode.value === value) {
                return index;
            }
            return null
        } return alert('Please insert a node first.')
    }

    toString() {
        if(this.head !== null){
            this.currentNode = this.head;
            let print = '';
            while (this.currentNode.nextNode !== null) {
                print += `(${this.currentNode.value}) -> `;
                this.currentNode = this.currentNode.nextNode;
            }
            print += `(${this.currentNode.value}) -> null`;
            return print;
        }
        return alert('Please insert a node first.')
    }
}

class Node {
    constructor(value, nextNode) {
            this.value = value ?? null;
            this.nextNode = nextNode ?? null;
    }
}



const linkedList = new Linkedlist();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);