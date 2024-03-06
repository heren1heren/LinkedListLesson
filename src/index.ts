// import LinkedList.ts and Node.ts here
console.log('hello.');
import Node from './Node';
import LinkedList from './LinkedList';

// look back class and factory syntax a little bit
//using inheritance to extend class Person to class solfWarddeveloper
let node1 = new Node(35);
let node2 = new Node(333);
node1.nextNode = node2;
console.log(node1);
