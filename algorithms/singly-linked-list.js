'use strict';


class Node {
  constructor(value) {
    this.data = value;
    this.nextPoint = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value, position) {
    let node = new Node(value);
    let currentNode = this.head;
    let beforeNodeToAdd = null;
    let addedNode = null;
    let nodeToAdd = null;
    let count = 1;
    const message = {failure: 'Failure: non-existent node in this list. '};
    const length = this.length;


    // not position -> to end of list
    if (!position) {

      // empty list
      if (!currentNode) {
        this.head = node;
        this.length++;

        return node;
      }

      // non empty list
      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      this.length++;
      return node;

    }

    // position is not undefined

    // invalid position
    if (position < 1 || position > length) {
      throw new Error(message.failure);
    }

    // first position
    if (position === 1) {
      node.next = this.head;
      this.head = node;
      this.length++;

      return node;
    }

    while(count < position) {
      beforeNodeToAdd = currentNode;
      nodeToAdd = currentNode.next;
      currentNode = currentNode.next;
      count++;
    }

    beforeNodeToAdd.next = node;
    node.next = nodeToAdd;
    this.length++;

    return node;
  }

  searchNodeAt(position) {
    let currentNode = this.head;
    let length = this.length;
    let count = 1;
    const messase = {failure: 'Failure: non-existent node in this list. '};

    // invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
    }

    // valid position
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  remove(position) {
    let currentNode = this.head;
    const length = this.length;
    let count = 0;
    const message = {failure: 'Failure: non-existent node in this list. '};
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;

    // invalid position
    if (position < 0 || position > length) {
      throw new Error(message.failure);
    }

    // the first node is removed
    if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this.length--;

      return deletedNode;
    }

    // any other node is removed
    while(count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length--;

    return deletedNode;
  }

  print() {
    let count = 0;
    const length = this.length;
    let currentNode = this.head;
    console.log('-------begin-------');
    while (count < length) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
      count++;
    }
    console.log('--------end--------');
  }


}

let list = new SinglyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print();

list.add(6, 1);
list.add(6);
list.add(7,1);
list.add(8, 2);
list.print();
