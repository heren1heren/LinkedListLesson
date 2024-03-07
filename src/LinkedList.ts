import Node from './Node';
export default class LinkedList {
  value: number;
  size: number;

  head: any;

  tail: object;
  index: 0;
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
  // reset() {
  //   // how to reset a linkedList?
  //   console.log(this);
  // }
  prepend(value: number) {
    const node = new Node(value);
    const headCopy = this.head;
    this.head = node;
    this.head.next = headCopy;
    this.size++;
  }
  getSize() {
    //count how many values inside nested linkedList
    // here we are -> need to store some properties in the list
    // returns the total number of nodes in the list

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
    //returns the node at the given index
    // first element index = 0;
    // based on head and move deep on
    // index[0] = head
    // index[3] = head.next.next.next (3steps in)
    // -> using while loop. every time i hear transver -> using loop
    // sample 1 for...loop
    // let copy = this.head;
    // for (let i = 0; i <= index; i++) {
    //   copy = copy.next;
    // console.log(copy);
  }

  pop() {
    //removes the last element from the list
  }
  contains(value: number) {
    //returns true if the passed in value is in the list
    // and otherwise returns false.
  }
  find(value: number) {
    //returns the index of the node containing value, or null if not found.
  }
  toString() {
    /*represents your LinkedList objects as strings,
     so you can print them out and preview them in the console. 
    The format should be: ( value ) -> ( value ) -> ( value ) -> null
     */
  }
  /*Extra Credit Tip: When you insert or remove a node,
   consider how it will affect the existing nodes. 
  Some of the nodes will need their nextNode link updated.
  */
  insertAt(value: number, index: number) {
    //that inserts a new node with the provided value at the given index
    // need to update the link to perform this
  }
  removeAt(index: number) {
    //that removes the node at the given index.
  }
}
