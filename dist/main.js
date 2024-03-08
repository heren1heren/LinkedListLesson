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
    LinkedList.prototype.insertAt = function (value, index) {
        var newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        if (index === 0) {
            this.prepend(value);
        }
        else {
            var current = this.head;
            for (var i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next; // copying current.next inside newNode.next
            current.next = newNode;
            this.size++;
        }
    };
    LinkedList.prototype.removeAt = function (index) {
        //that removes the node at the given index.
        //transversing to  node{index-1}
        var current = this.head;
        for (var i = 1; i < index; i++) {
            current = current.next;
        }
        var copy = current.next.next;
        console.log(copy);
        current.next = copy;
        console.log(current);
        this.size--;
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
linkedList.removeAt(4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBRUwsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1AsS0FBSztBQUVMLDZCQUE2QjtBQUU3QixpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLElBQUk7QUFDSix1QkFBdUI7QUFDdkIsb0NBQW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvTGlua2VkTGlzdC50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9Ob2RlLnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtlZExpc3Qge1xuICB2YWx1ZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG5cbiAgaGVhZDogYW55O1xuXG4gIHRhaWw6IGFueTtcbiAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaGVhZCA9IHsgdmFsdWU6IHZhbHVlLCBuZXh0OiBudWxsIH07XG4gICAgdGhpcy50YWlsID0gdGhpcy5oZWFkO1xuICAgIHRoaXMuc2l6ZSA9IDE7XG4gIH1cblxuICBhcHBlbmQodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICB0aGlzLnRhaWwgPSBub2RlO1xuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICBpZiAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnQubmV4dCA9IG5vZGU7XG4gICAgdGhpcy5zaXplKys7XG4gIH1cblxuICBwcmVwZW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGNvbnN0IGhlYWRDb3B5ID0gdGhpcy5oZWFkO1xuICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgdGhpcy5oZWFkLm5leHQgPSBoZWFkQ29weTtcbiAgICB0aGlzLnNpemUrKztcbiAgfVxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cbiAgZ2V0SGVhZCgpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBub2RlIGluIHRoZSBsaXN0XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuICBnZXRUYWlsKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWw7XG4gICAgLy8gcmV0dXJucyB0aGUgbGFzdCBub2RlIGluIHRoZSBsaXN0XG4gIH1cbiAgYXQoaW5kZXg6IG51bWJlcikge1xuICAgIGxldCBjb3B5ID0gdGhpcy5oZWFkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgY29weSA9IGNvcHkubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH1cblxuICBwb3AoKSB7XG4gICAgLy9ob3cgdG8gcmVtb3ZlIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgbGlzdD8/P1xuICAgIC8vZmlyc3QgSSBkbyB0aGlzLnRhaWwgPSBsYXN0IHRhaWw7ICBhbmQgdGhpcy50YWlsLm5leHQgPSBudWxsO1xuXG4gICAgLyogZG9uJ3Qga25vdyBob3cgdG8gZG8gdGhpcy50YWlsID0gcHJldmlvdXMgdGFpbFxuICAgIGFzc3VtcHRpb25zOlxuICAgIDEuIHRyYW5zdmVyc2UgaGVhZCAtPiBkZWxldGUgbGFzdCBlbGVtZW50IGNvbnRhaW5zIG5leHQ6bnVsbFxuICAgICAgIGRvbid0IGtub3cgaG93IHRvIGRlbGV0ZSBsYXN0IGVsZW1lbnQgY29udGFpbnMgbmV4dDpudWxsXG4gICAgIC0+IDEuMSBjcmVhdGUgYSAuLi4uLiBcbiAgICAgICAgICAgICB0cnkgd2hpbGUoY3VycmVudC5uZXh0ICE9PSBudWxsKSB0byB0cmFuc3ZlcnNlIHRoZSBsaW5rZWQgbGlzdFxuICAgICAgICAgICAgLT4gMS4xLjEgZG9uJ3Qga25vdyBob3cgdG8gLi4uLlxuICAgICAgICAxLjIgXG4gICAgIC0+IHRoaXMudGFpbCA9IHRoaXMuYXQoc2l6ZS0yKVxuXG4gICAgIDIuIGFub3RoZXIgd2F5IGV4Y2VwdCAoMS4pXG4gICAgIDMuIGFub3RoZXIgd2F5IG9mIGFub3RoZXIgd2F5Li4uXG4gICAgICovXG5cbiAgICB0aGlzLnRhaWwgPSB0aGlzLmF0KHRoaXMuc2l6ZSAtIDIpO1xuXG4gICAgdGhpcy50YWlsLm5leHQgPSBudWxsO1xuICAgIHRoaXMuc2l6ZS0tO1xuICB9XG5cbiAgY29udGFpbnModmFsdWU6IG51bWJlcikge1xuICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW4gdGhlIGxpc3RcbiAgICAvLyBhbmQgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXG4gICAgLyogbXkgd2F5czogXG4gICAgdHJhbnN2ZXJzaW5nIHRoaXMuaGVhZCAtPiBjaGVjayBpZih2YWx1ZSA9PT0gdGhpcy52YWx1ZSkuIFxuICAgIFJlcGVhdCB1bnRpbCB0aGlzLmhlYWQubmV4dCA9PT0gbnVsbFxuICAgIGJ5IHVzaW5nIHdoaWxlIGxvb3BcbiAgICAqL1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgLy9cbiAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgICAgLy8gbm90IHNraXBwaW5nIHRoZSBmaXJzdCB0aGlzLmhlYWQudmFsdWVcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmaW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvL3JldHVybnMgdGhlIGluZGV4IG9mIHRoZSBub2RlIGNvbnRhaW5pbmcgdmFsdWUsXG4gICAgLy9vciBudWxsIGlmIG5vdCBmb3VuZC5cblxuICAgIC8qIGFzc3VtcHRpb25zOlxuICAgIHVzaW5nIGZvciBsb29wIHRvIHRyYW5zdmVyc2UgYW5kIHVzaW5nICdpJyBpbiB0aGUgZm9yLi5sb29wIC5cbiAgICB0byB0cmFjayAgJ2N1cnJlbnQgaW5kZXgnID0gJ2N1cnJlbnQgaSdcbiAgICBzbyBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBcblxuXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgICAqL1xuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgY29uc3QgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heEluZGV4OyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIC8qcmVwcmVzZW50cyB5b3VyIExpbmtlZExpc3Qgb2JqZWN0cyBhcyBzdHJpbmdzLFxuICAgICBzbyB5b3UgY2FuIHByaW50IHRoZW0gb3V0IGFuZCBwcmV2aWV3IHRoZW0gaW4gdGhlIGNvbnNvbGUuIFxuICAgIFRoZSBmb3JtYXQgc2hvdWxkIGJlOiAoIHZhbHVlICkgLT4gKCB2YWx1ZSApIC0+ICggdmFsdWUgKSAtPiBudWxsXG4gICAgICovXG4gICAgLy91c2luZyBgYCBiYWNrdGljayB0byBkbyBzb1xuICAgIGxldCB0b3RhbFN0ciA9ICcnO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIHRvdGFsU3RyICs9IGAoJHtjdXJyZW50LnZhbHVlfSkgLT4gYDtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHRvdGFsU3RyICs9IG51bGw7XG4gICAgcmV0dXJuIHRvdGFsU3RyO1xuICB9XG4gIC8qRXh0cmEgQ3JlZGl0IFRpcDogV2hlbiB5b3UgaW5zZXJ0IG9yIHJlbW92ZSBhIG5vZGUsXG4gICBjb25zaWRlciBob3cgaXQgd2lsbCBhZmZlY3QgdGhlIGV4aXN0aW5nIG5vZGVzLiBcbiAgU29tZSBvZiB0aGUgbm9kZXMgd2lsbCBuZWVkIHRoZWlyIG5leHROb2RlIGxpbmsgdXBkYXRlZC5cbiAgKi9cblxuICBpbnNlcnRBdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMucHJlcGVuZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgfVxuICAgICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudC5uZXh0OyAvLyBjb3B5aW5nIGN1cnJlbnQubmV4dCBpbnNpZGUgbmV3Tm9kZS5uZXh0XG4gICAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgdGhpcy5zaXplKys7XG4gICAgfVxuICB9XG4gIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpIHtcbiAgICAvL3RoYXQgcmVtb3ZlcyB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgLy90cmFuc3ZlcnNpbmcgdG8gIG5vZGV7aW5kZXgtMX1cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIGNvbnN0IGNvcHkgPSBjdXJyZW50Lm5leHQubmV4dDtcbiAgICBjb25zb2xlLmxvZyhjb3B5KTtcbiAgICBjdXJyZW50Lm5leHQgPSBjb3B5O1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuICAgIHRoaXMuc2l6ZS0tO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbmV4dDogb2JqZWN0O1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gIH1cblxuICBnZXROZXh0KCkge1xuICAgIHJldHVybiB0aGlzLm5leHQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IExpbmtlZExpc3QudHMgYW5kIE5vZGUudHMgaGVyZVxuY29uc29sZS5sb2coJ2hlbGxvLicpO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBMaW5rZWRMaXN0IGZyb20gJy4vTGlua2VkTGlzdCc7XG5cbi8vIGxvb2sgYmFjayBjbGFzcyBhbmQgZmFjdG9yeSBzeW50YXggYSBsaXR0bGUgYml0XG4vL3VzaW5nIGluaGVyaXRhbmNlIHRvIGV4dGVuZCBjbGFzcyBQZXJzb24gdG8gY2xhc3Mgc29sZldhcmRkZXZlbG9wZXJcbmNvbnN0IGxpbmtlZExpc3QgPSBuZXcgTGlua2VkTGlzdCgxKTtcbmxpbmtlZExpc3QuYXBwZW5kKDIpO1xubGlua2VkTGlzdC5hcHBlbmQoMyk7XG5saW5rZWRMaXN0LmFwcGVuZCg0KTtcbmxpbmtlZExpc3QuYXBwZW5kKDUpO1xuXG5saW5rZWRMaXN0LnJlbW92ZUF0KDQpO1xuY29uc29sZS5sb2cobGlua2VkTGlzdCk7XG5cbi8vIGNvbnN0IGxpbmtlZExpc3QxID0ge1xuLy8gICB2YWx1ZTogMCxcbi8vICAgbmV4dDoge1xuLy8gICAgIHZhbHVlOiAxLFxuLy8gICAgIG5leHQ6IHtcbi8vICAgICAgIHZhbHVlOiAyLFxuLy8gICAgICAgbmV4dDoge1xuLy8gICAgICAgICB2YWx1ZTogMyxcbi8vICAgICAgICAgbmV4dDoge1xuLy8gICAgICAgICAgIHZhbHVlOiA0LFxuLy8gICAgICAgICAgIG5leHQ6IG51bGwsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBjb25zdCBjb3B5ID0ge1xuLy8gICB2YWx1ZTogMyxcbi8vICAgbmV4dDoge1xuLy8gICAgIHZhbHVlOiA0LFxuLy8gICAgIG5leHQ6IG51bGwsXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBsZXQgY3VycmVudCA9IGxpbmtlZExpc3QxO1xuXG4vLyBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbi8vICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbi8vIH1cbi8vIGN1cnJlbnQubmV4dCA9IGNvcHk7XG4vLyBjb25zb2xlLmxvZyhjdXJyZW50KTsgLy8gaXQgd29ya3NcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==