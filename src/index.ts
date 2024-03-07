// import LinkedList.ts and Node.ts here
console.log('hello.');
import Node from './Node';
import LinkedList from './LinkedList';

// look back class and factory syntax a little bit
//using inheritance to extend class Person to class solfWarddeveloper
const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList.at(2); // return 3
console.log(linkedList);
