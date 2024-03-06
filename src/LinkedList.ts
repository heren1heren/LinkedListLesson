export default class LinkedList {
  // do I need to have any properties in this LinkedList?
  // constructor?

  append(value: number) {
    // adds a new node containing value to the end of the list
  }

  prepend(value: number) {
    //adds a new node containing value to the start of the list
  }
  get size() {
    // here we are -> need to store some properties in the list
    // returns the total number of nodes in the list
    return;
  }
  get head() {
    // returns the first node in the list
    return;
  }
  get tail() {
    // returns the last node in the list
    return;
  }
  at(index: number) {
    //returns the node at the given index
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
