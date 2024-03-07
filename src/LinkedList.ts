import Node from './Node';
export default class LinkedList {
  value: number;
  size: number;

  head: any;

  tail: any;
  constructor(value: number) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.size = 1;
  }

  append(value: number) {
    const node = new Node(value);

    this.tail = node;

    let current = this.head;

    if (current.next !== null) {
      while (current.next !== null) {
        current = current.next;
      }
    }
    current.next = node;
    this.size++;
  }

  prepend(value: number) {
    const node = new Node(value);
    const headCopy = this.head;
    this.head = node;
    this.head.next = headCopy;
    this.size++;
  }
  getSize() {
    return this.size;
  }
  getHead() {
    // returns the first node in the list
    return this.head;
  }
  getTail() {
    return this.tail;
    // returns the last node in the list
  }
  at(index: number) {
    let copy = this.head;
    for (let i = 0; i < index; i++) {
      copy = copy.next;
    }
    return copy;
  }

  pop() {
    //how to remove the last element from the list???
    //first I do this.tail = last tail;  and this.tail.next = null;

    /* don't know how to do this.tail = previous tail
    assumptions:
    1. transverse head -> delete last element contains next:null
       don't know how to delete last element contains next:null
     -> 1.1 create a ..... 
             try while(current.next !== null) to transverse the linked list
            -> 1.1.1 don't know how to ....
        1.2 
     -> this.tail = this.at(size-2)

     2. another way except (1.)
     3. another way of another way...
     */

    this.tail = this.at(this.size - 2);

    this.tail.next = null;
    this.size--;
  }

  contains(value: number) {
    //returns true if the passed in value is in the list
    // and otherwise returns false.
    /* my ways: 
    transversing this.head -> check if(value === this.value). 
    Repeat until this.head.next === null
    by using while loop
    */
    let current = this.head;

    //
    while (current.next !== null) {
      if (value === current.value) {
        // not skipping the first this.head.value
        return true;
      }
      current = current.next;
      if (value === current.value) {
        return true;
      }
    }

    return false;
  }
  find(value: number) {
    //returns the index of the node containing value,
    //or null if not found.

    /* assumptions:
    using for loop to transverse and using 'i' in the for..loop .
    to track  'current index' = 'current i'
    so if (value === current.value) {
      return true
    } 


    return false

    */

    let current = this.head;
    const maxIndex = this.size - 1;
    for (let i = 0; i <= maxIndex; i++) {
      if (value === current.value) {
        return i;
      }
      current = current.next;
    }
    return null;
  }
  toString() {
    /*represents your LinkedList objects as strings,
     so you can print them out and preview them in the console. 
    The format should be: ( value ) -> ( value ) -> ( value ) -> null
     */
    //using `` backtick to do so
    let totalStr = '';
    let current = this.head;
    while (current.next !== null) {
      totalStr += `(${current.value}) -> `;
      current = current.next;
    }
    totalStr += null;
    return totalStr;
  }
  /*Extra Credit Tip: When you insert or remove a node,
   consider how it will affect the existing nodes. 
  Some of the nodes will need their nextNode link updated.
  */
  // insertAt(value: number | string, index: number) {
  //   //that inserts a new node with the provided value at the given index
  //   /**
  //    * copying firstHalf and second Half of the original  this.head
  //    * by looping
  //    *
  //    * create a new node
  //    * linking new node to the first Half (current = node)
  //    *
  //    * new node.next = second Half
  //    */

  //   // const node = new Node(value);

  //   // start copying secondHalf
  //   let current = this.head;
  //   const secondHalf = new Node(null);
  //   let current1 = secondHalf;
  //   for (let i = 1; i <= this.size - 1; i++) {
  //     current = current.next;
  //     if (i > index) {
  //       if (secondHalf.value === null) {
  //         secondHalf.value = current.value;
  //       } else {
  //         const node = new Node(current.value);
  //         current1.next = node;
  //         //transverse and assigning each value and next to secondHalf.
  //         current1 = current1.next;
  //       }
  //     }
  //   }
  //   console.log(secondHalf);
  //   let i = 0;
  //   while (i < index && current.next !== null) {
  //     i++;
  //     current = current.next;
  //   }
  //   const node = new Node(value);
  //   current.next = node;
  //   console.log(current.next);

  //   current.next.next = secondHalf;
  //   console.log(current);
  // }
  insertAt(value: number | string, index: number) {
    // if (index >= this.size || index < 0) {
    //   throw new Error('Index out of bounds');
    // }

    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    }
  }
  removeAt(index: number) {
    //that removes the node at the given index.
  }
}
