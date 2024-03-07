export default class Node {
  value: number;
  next: object;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  getNext() {
    return this.next;
  }
}
