export default class Node {
  value: number;
  nextNode: object;
  constructor(value: number) {
    this.value = value;
    this.nextNode = null;
  }
}
