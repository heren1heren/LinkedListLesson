/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/LinkedList.ts":
/*!***************************!*\
  !*** ./src/LinkedList.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.ts");

var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = { value: value, next: null };
        this.tail = this.head;
        this.size = 1;
    }
    LinkedList.prototype.append = function (value) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        this.tail = node;
        var current = this.head;
        if (current.next !== null) {
            while (current.next !== null) {
                current = current.next;
            }
        }
        current.next = node;
        this.size++;
    };
    LinkedList.prototype.prepend = function (value) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        var headCopy = this.head;
        this.head = node;
        this.head.next = headCopy;
        this.size++;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.getHead = function () {
        // returns the first node in the list
        return this.head;
    };
    LinkedList.prototype.getTail = function () {
        return this.tail;
        // returns the last node in the list
    };
    LinkedList.prototype.at = function (index) {
        var copy = this.head;
        for (var i = 0; i < index; i++) {
            copy = copy.next;
        }
        return copy;
    };
    LinkedList.prototype.pop = function () {
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
    };
    LinkedList.prototype.contains = function (value) {
        //returns true if the passed in value is in the list
        // and otherwise returns false.
        /* my ways:
        transversing this.head -> check if(value === this.value).
        Repeat until this.head.next === null
        by using while loop
        */
        var current = this.head;
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
    };
    LinkedList.prototype.find = function (value) {
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
        var current = this.head;
        var maxIndex = this.size - 1;
        for (var i = 0; i <= maxIndex; i++) {
            if (value === current.value) {
                return i;
            }
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.toString = function () {
        /*represents your LinkedList objects as strings,
         so you can print them out and preview them in the console.
        The format should be: ( value ) -> ( value ) -> ( value ) -> null
         */
        //using `` backtick to do so
        var totalStr = '';
        var current = this.head;
        while (current.next !== null) {
            totalStr += "(".concat(current.value, ") -> ");
            current = current.next;
        }
        totalStr += null;
        return totalStr;
    };
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
    LinkedList.prototype.insertAt = function (value, index) {
        // if (index >= this.size || index < 0) {
        //   throw new Error('Index out of bounds');
        // }
        var newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        if (index === 0) {
            this.prepend(value);
        }
        else {
            var current = this.head;
            for (var i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
    };
    LinkedList.prototype.removeAt = function (index) {
        //that removes the node at the given index.
    };
    return LinkedList;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);


/***/ }),

/***/ "./src/Node.ts":
/*!*********************!*\
  !*** ./src/Node.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    Node.prototype.getNext = function () {
        return this.next;
    };
    return Node;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList */ "./src/LinkedList.ts");
// import LinkedList.ts and Node.ts here
console.log('hello.');

// look back class and factory syntax a little bit
//using inheritance to extend class Person to class solfWarddeveloper
var linkedList = new _LinkedList__WEBPACK_IMPORTED_MODULE_0__["default"](1);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RCLFVBQVUsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFeEIsd0JBQXdCO0FBQ3hCLGNBQWM7QUFDZCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUVMLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsT0FBTztBQUNQLEtBQUs7QUFFTCw2QkFBNkI7QUFFN0IsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixJQUFJO0FBQ0osdUJBQXVCO0FBQ3ZCLG9DQUFvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL0xpbmtlZExpc3QudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvTm9kZS50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuXG4gIGhlYWQ6IGFueTtcblxuICB0YWlsOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmhlYWQgPSB7IHZhbHVlOiB2YWx1ZSwgbmV4dDogbnVsbCB9O1xuICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLnNpemUgPSAxO1xuICB9XG5cbiAgYXBwZW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuXG4gICAgdGhpcy50YWlsID0gbm9kZTtcblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgaWYgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50Lm5leHQgPSBub2RlO1xuICAgIHRoaXMuc2l6ZSsrO1xuICB9XG5cbiAgcHJlcGVuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICBjb25zdCBoZWFkQ29weSA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgIHRoaXMuaGVhZC5uZXh0ID0gaGVhZENvcHk7XG4gICAgdGhpcy5zaXplKys7XG4gIH1cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG4gIGdldEhlYWQoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cbiAgZ2V0VGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWlsO1xuICAgIC8vIHJldHVybnMgdGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICB9XG4gIGF0KGluZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgY29weSA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgIGNvcHkgPSBjb3B5Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBjb3B5O1xuICB9XG5cbiAgcG9wKCkge1xuICAgIC8vaG93IHRvIHJlbW92ZSB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGxpc3Q/Pz9cbiAgICAvL2ZpcnN0IEkgZG8gdGhpcy50YWlsID0gbGFzdCB0YWlsOyAgYW5kIHRoaXMudGFpbC5uZXh0ID0gbnVsbDtcblxuICAgIC8qIGRvbid0IGtub3cgaG93IHRvIGRvIHRoaXMudGFpbCA9IHByZXZpb3VzIHRhaWxcbiAgICBhc3N1bXB0aW9uczpcbiAgICAxLiB0cmFuc3ZlcnNlIGhlYWQgLT4gZGVsZXRlIGxhc3QgZWxlbWVudCBjb250YWlucyBuZXh0Om51bGxcbiAgICAgICBkb24ndCBrbm93IGhvdyB0byBkZWxldGUgbGFzdCBlbGVtZW50IGNvbnRhaW5zIG5leHQ6bnVsbFxuICAgICAtPiAxLjEgY3JlYXRlIGEgLi4uLi4gXG4gICAgICAgICAgICAgdHJ5IHdoaWxlKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkgdG8gdHJhbnN2ZXJzZSB0aGUgbGlua2VkIGxpc3RcbiAgICAgICAgICAgIC0+IDEuMS4xIGRvbid0IGtub3cgaG93IHRvIC4uLi5cbiAgICAgICAgMS4yIFxuICAgICAtPiB0aGlzLnRhaWwgPSB0aGlzLmF0KHNpemUtMilcblxuICAgICAyLiBhbm90aGVyIHdheSBleGNlcHQgKDEuKVxuICAgICAzLiBhbm90aGVyIHdheSBvZiBhbm90aGVyIHdheS4uLlxuICAgICAqL1xuXG4gICAgdGhpcy50YWlsID0gdGhpcy5hdCh0aGlzLnNpemUgLSAyKTtcblxuICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLnNpemUtLTtcbiAgfVxuXG4gIGNvbnRhaW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGluIHRoZSBsaXN0XG4gICAgLy8gYW5kIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICAgIC8qIG15IHdheXM6IFxuICAgIHRyYW5zdmVyc2luZyB0aGlzLmhlYWQgLT4gY2hlY2sgaWYodmFsdWUgPT09IHRoaXMudmFsdWUpLiBcbiAgICBSZXBlYXQgdW50aWwgdGhpcy5oZWFkLm5leHQgPT09IG51bGxcbiAgICBieSB1c2luZyB3aGlsZSBsb29wXG4gICAgKi9cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIC8vXG4gICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIC8vIG5vdCBza2lwcGluZyB0aGUgZmlyc3QgdGhpcy5oZWFkLnZhbHVlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZmluZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLy9yZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbm9kZSBjb250YWluaW5nIHZhbHVlLFxuICAgIC8vb3IgbnVsbCBpZiBub3QgZm91bmQuXG5cbiAgICAvKiBhc3N1bXB0aW9uczpcbiAgICB1c2luZyBmb3IgbG9vcCB0byB0cmFuc3ZlcnNlIGFuZCB1c2luZyAnaScgaW4gdGhlIGZvci4ubG9vcCAuXG4gICAgdG8gdHJhY2sgICdjdXJyZW50IGluZGV4JyA9ICdjdXJyZW50IGknXG4gICAgc28gaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gXG5cblxuICAgIHJldHVybiBmYWxzZVxuXG4gICAgKi9cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGNvbnN0IG1heEluZGV4ID0gdGhpcy5zaXplIC0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBtYXhJbmRleDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICAvKnJlcHJlc2VudHMgeW91ciBMaW5rZWRMaXN0IG9iamVjdHMgYXMgc3RyaW5ncyxcbiAgICAgc28geW91IGNhbiBwcmludCB0aGVtIG91dCBhbmQgcHJldmlldyB0aGVtIGluIHRoZSBjb25zb2xlLiBcbiAgICBUaGUgZm9ybWF0IHNob3VsZCBiZTogKCB2YWx1ZSApIC0+ICggdmFsdWUgKSAtPiAoIHZhbHVlICkgLT4gbnVsbFxuICAgICAqL1xuICAgIC8vdXNpbmcgYGAgYmFja3RpY2sgdG8gZG8gc29cbiAgICBsZXQgdG90YWxTdHIgPSAnJztcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICB0b3RhbFN0ciArPSBgKCR7Y3VycmVudC52YWx1ZX0pIC0+IGA7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICB0b3RhbFN0ciArPSBudWxsO1xuICAgIHJldHVybiB0b3RhbFN0cjtcbiAgfVxuICAvKkV4dHJhIENyZWRpdCBUaXA6IFdoZW4geW91IGluc2VydCBvciByZW1vdmUgYSBub2RlLFxuICAgY29uc2lkZXIgaG93IGl0IHdpbGwgYWZmZWN0IHRoZSBleGlzdGluZyBub2Rlcy4gXG4gIFNvbWUgb2YgdGhlIG5vZGVzIHdpbGwgbmVlZCB0aGVpciBuZXh0Tm9kZSBsaW5rIHVwZGF0ZWQuXG4gICovXG4gIC8vIGluc2VydEF0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgLy8gICAvL3RoYXQgaW5zZXJ0cyBhIG5ldyBub2RlIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAvLyAgIC8qKlxuICAvLyAgICAqIGNvcHlpbmcgZmlyc3RIYWxmIGFuZCBzZWNvbmQgSGFsZiBvZiB0aGUgb3JpZ2luYWwgIHRoaXMuaGVhZFxuICAvLyAgICAqIGJ5IGxvb3BpbmdcbiAgLy8gICAgKlxuICAvLyAgICAqIGNyZWF0ZSBhIG5ldyBub2RlXG4gIC8vICAgICogbGlua2luZyBuZXcgbm9kZSB0byB0aGUgZmlyc3QgSGFsZiAoY3VycmVudCA9IG5vZGUpXG4gIC8vICAgICpcbiAgLy8gICAgKiBuZXcgbm9kZS5uZXh0ID0gc2Vjb25kIEhhbGZcbiAgLy8gICAgKi9cblxuICAvLyAgIC8vIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgLy8gICAvLyBzdGFydCBjb3B5aW5nIHNlY29uZEhhbGZcbiAgLy8gICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgLy8gICBjb25zdCBzZWNvbmRIYWxmID0gbmV3IE5vZGUobnVsbCk7XG4gIC8vICAgbGV0IGN1cnJlbnQxID0gc2Vjb25kSGFsZjtcbiAgLy8gICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnNpemUgLSAxOyBpKyspIHtcbiAgLy8gICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gIC8vICAgICBpZiAoaSA+IGluZGV4KSB7XG4gIC8vICAgICAgIGlmIChzZWNvbmRIYWxmLnZhbHVlID09PSBudWxsKSB7XG4gIC8vICAgICAgICAgc2Vjb25kSGFsZi52YWx1ZSA9IGN1cnJlbnQudmFsdWU7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGN1cnJlbnQudmFsdWUpO1xuICAvLyAgICAgICAgIGN1cnJlbnQxLm5leHQgPSBub2RlO1xuICAvLyAgICAgICAgIC8vdHJhbnN2ZXJzZSBhbmQgYXNzaWduaW5nIGVhY2ggdmFsdWUgYW5kIG5leHQgdG8gc2Vjb25kSGFsZi5cbiAgLy8gICAgICAgICBjdXJyZW50MSA9IGN1cnJlbnQxLm5leHQ7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS5sb2coc2Vjb25kSGFsZik7XG4gIC8vICAgbGV0IGkgPSAwO1xuICAvLyAgIHdoaWxlIChpIDwgaW5kZXggJiYgY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gIC8vICAgICBpKys7XG4gIC8vICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAvLyAgIH1cbiAgLy8gICBjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAvLyAgIGN1cnJlbnQubmV4dCA9IG5vZGU7XG4gIC8vICAgY29uc29sZS5sb2coY3VycmVudC5uZXh0KTtcblxuICAvLyAgIGN1cnJlbnQubmV4dC5uZXh0ID0gc2Vjb25kSGFsZjtcbiAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50KTtcbiAgLy8gfVxuICBpbnNlcnRBdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgLy8gaWYgKGluZGV4ID49IHRoaXMuc2l6ZSB8fCBpbmRleCA8IDApIHtcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcignSW5kZXggb3V0IG9mIGJvdW5kcycpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLnByZXBlbmQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXggLSAxOyBpKyspIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIH1cbiAgICAgIG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG4gICAgICB0aGlzLnNpemUrKztcbiAgICB9XG4gIH1cbiAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcikge1xuICAgIC8vdGhhdCByZW1vdmVzIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG5leHQ6IG9iamVjdDtcbiAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG5cbiAgZ2V0TmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBMaW5rZWRMaXN0LnRzIGFuZCBOb2RlLnRzIGhlcmVcbmNvbnNvbGUubG9nKCdoZWxsby4nKTtcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgTGlua2VkTGlzdCBmcm9tICcuL0xpbmtlZExpc3QnO1xuXG4vLyBsb29rIGJhY2sgY2xhc3MgYW5kIGZhY3Rvcnkgc3ludGF4IGEgbGl0dGxlIGJpdFxuLy91c2luZyBpbmhlcml0YW5jZSB0byBleHRlbmQgY2xhc3MgUGVyc29uIHRvIGNsYXNzIHNvbGZXYXJkZGV2ZWxvcGVyXG5jb25zdCBsaW5rZWRMaXN0ID0gbmV3IExpbmtlZExpc3QoMSk7XG5saW5rZWRMaXN0LmFwcGVuZCgyKTtcbmxpbmtlZExpc3QuYXBwZW5kKDMpO1xubGlua2VkTGlzdC5hcHBlbmQoNCk7XG5saW5rZWRMaXN0LmFwcGVuZCg1KTtcbmxpbmtlZExpc3QuYXBwZW5kKDYpO1xubGlua2VkTGlzdC5hcHBlbmQoNyk7XG5saW5rZWRMaXN0LmFwcGVuZCg4KTtcbmxpbmtlZExpc3QuYXBwZW5kKDkpO1xubGlua2VkTGlzdC5hcHBlbmQoMTApO1xubGlua2VkTGlzdC5pbnNlcnRBdCgnYUJlYXV0aWZ1bE5vZGVCZXR3ZWVuM0FuZDQnLCBsaW5rZWRMaXN0LmZpbmQoMykpO1xuY29uc29sZS5sb2cobGlua2VkTGlzdCk7XG5cbi8vIGNvbnN0IGxpbmtlZExpc3QxID0ge1xuLy8gICB2YWx1ZTogMCxcbi8vICAgbmV4dDoge1xuLy8gICAgIHZhbHVlOiAxLFxuLy8gICAgIG5leHQ6IHtcbi8vICAgICAgIHZhbHVlOiAyLFxuLy8gICAgICAgbmV4dDoge1xuLy8gICAgICAgICB2YWx1ZTogMyxcbi8vICAgICAgICAgbmV4dDoge1xuLy8gICAgICAgICAgIHZhbHVlOiA0LFxuLy8gICAgICAgICAgIG5leHQ6IG51bGwsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBjb25zdCBjb3B5ID0ge1xuLy8gICB2YWx1ZTogMyxcbi8vICAgbmV4dDoge1xuLy8gICAgIHZhbHVlOiA0LFxuLy8gICAgIG5leHQ6IG51bGwsXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBsZXQgY3VycmVudCA9IGxpbmtlZExpc3QxO1xuXG4vLyBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbi8vICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbi8vIH1cbi8vIGN1cnJlbnQubmV4dCA9IGNvcHk7XG4vLyBjb25zb2xlLmxvZyhjdXJyZW50KTsgLy8gaXQgd29ya3NcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==