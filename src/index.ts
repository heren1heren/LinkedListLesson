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
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.append(8);
linkedList.append(9);
linkedList.append(10);
linkedList.insertAt('aBeautifulNodeBetween3And4', linkedList.find(3));
console.log(linkedList);

// const linkedList1 = {
//   value: 0,
//   next: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

// const copy = {
//   value: 3,
//   next: {
//     value: 4,
//     next: null,
//   },
// };

// let current = linkedList1;

// for (let i = 1; i <= 4; i++) {
//   current = current.next;
// }
// current.next = copy;
// console.log(current); // it works
