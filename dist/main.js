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
        var tailCopy = this.tail;
        this.tail = node;
        this.head.next = tailCopy;
        this.size++;
        // let current = this;
        // if (current.next !== null) {
        //   while (current.next !== null) {
        //     current = current.next;
        //   }
        //   current.next = node;
        // } else {
        //   this.next = node;
        // }
    };
    // reset() {
    //   // how to reset a linkedList?
    //   console.log(this);
    // }
    LinkedList.prototype.prepend = function (value) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        var headCopy = this.head;
        this.head = node;
        this.head.next = headCopy;
        this.size++;
    };
    LinkedList.prototype.getSize = function () {
        //count how many values inside nested linkedList
        // here we are -> need to store some properties in the list
        // returns the total number of nodes in the list
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
    };
    LinkedList.prototype.pop = function () {
        //removes the last element from the list
    };
    LinkedList.prototype.contains = function (value) {
        //returns true if the passed in value is in the list
        // and otherwise returns false.
    };
    LinkedList.prototype.find = function (value) {
        //returns the index of the node containing value, or null if not found.
    };
    LinkedList.prototype.toString = function () {
        /*represents your LinkedList objects as strings,
         so you can print them out and preview them in the console.
        The format should be: ( value ) -> ( value ) -> ( value ) -> null
         */
    };
    /*Extra Credit Tip: When you insert or remove a node,
     consider how it will affect the existing nodes.
    Some of the nodes will need their nextNode link updated.
    */
    LinkedList.prototype.insertAt = function (value, index) {
        //that inserts a new node with the provided value at the given index
        // need to update the link to perform this
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
console.log(linkedList);
linkedList.at(2); // return 3
// console.log(linkedList);
// linkedList.prepend(55);
// let draft = {
//   value: 35,
//   next: {
//     value: 34,
//     next: {
//       value: 33,
//       next: null,
//     },
//   },
// };

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9MaW5rZWRMaXN0LnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL05vZGUudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua2VkTGlzdCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgbmV4dDogb2JqZWN0O1xuICBoZWFkOiBvYmplY3Q7XG4gIHRhaWw6IG9iamVjdDtcbiAgaW5kZXg6IDA7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmhlYWQgPSB7IHZhbHVlOiB2YWx1ZSwgbmV4dDogbnVsbCB9O1xuICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLnNpemUgPSAxO1xuICB9XG5cbiAgYXBwZW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGNvbnN0IHRhaWxDb3B5ID0gdGhpcy50YWlsO1xuXG4gICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICB0aGlzLmhlYWQubmV4dCA9IHRhaWxDb3B5O1xuICAgIHRoaXMuc2l6ZSsrO1xuXG4gICAgLy8gbGV0IGN1cnJlbnQgPSB0aGlzO1xuXG4gICAgLy8gaWYgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgIC8vICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgIC8vICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIC8vICAgfVxuICAgIC8vICAgY3VycmVudC5uZXh0ID0gbm9kZTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5uZXh0ID0gbm9kZTtcbiAgICAvLyB9XG4gIH1cbiAgLy8gcmVzZXQoKSB7XG4gIC8vICAgLy8gaG93IHRvIHJlc2V0IGEgbGlua2VkTGlzdD9cbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgLy8gfVxuICBwcmVwZW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGNvbnN0IGhlYWRDb3B5ID0gdGhpcy5oZWFkO1xuICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgdGhpcy5oZWFkLm5leHQgPSBoZWFkQ29weTtcbiAgICB0aGlzLnNpemUrKztcbiAgfVxuICBnZXRTaXplKCkge1xuICAgIC8vY291bnQgaG93IG1hbnkgdmFsdWVzIGluc2lkZSBuZXN0ZWQgbGlua2VkTGlzdFxuICAgIC8vIGhlcmUgd2UgYXJlIC0+IG5lZWQgdG8gc3RvcmUgc29tZSBwcm9wZXJ0aWVzIGluIHRoZSBsaXN0XG4gICAgLy8gcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0XG5cbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG4gIGdldEhlYWQoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cbiAgZ2V0VGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWlsO1xuICAgIC8vIHJldHVybnMgdGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICB9XG4gIGF0KGluZGV4OiBudW1iZXIpIHtcbiAgICAvL3JldHVybnMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgLy8gZmlyc3QgZWxlbWVudCBpbmRleCA9IDA7XG4gICAgLy8gYmFzZWQgb24gaGVhZCBhbmQgbW92ZSBkZWVwIG9uXG4gICAgLy8gaW5kZXhbMF0gPSBoZWFkXG4gICAgLy8gaW5kZXhbM10gPSBoZWFkLm5leHQubmV4dC5uZXh0ICgzc3RlcHMgaW4pXG4gICAgLy8gLT4gdXNpbmcgd2hpbGUgbG9vcC4gZXZlcnkgdGltZSBpIGhlYXIgdHJhbnN2ZXIgLT4gdXNpbmcgbG9vcFxuICAgIC8vIHNhbXBsZSAxIGZvci4uLmxvb3BcbiAgICAvLyBsZXQgY29weSA9IHRoaXMuaGVhZDtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG4gICAgLy8gICBjb3B5ID0gY29weS5uZXh0O1xuICAgIC8vIGNvbnNvbGUubG9nKGNvcHkpO1xuICB9XG5cbiAgcG9wKCkge1xuICAgIC8vcmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGxpc3RcbiAgfVxuICBjb250YWlucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCBpbiB2YWx1ZSBpcyBpbiB0aGUgbGlzdFxuICAgIC8vIGFuZCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cbiAgfVxuICBmaW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvL3JldHVybnMgdGhlIGluZGV4IG9mIHRoZSBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIC8qcmVwcmVzZW50cyB5b3VyIExpbmtlZExpc3Qgb2JqZWN0cyBhcyBzdHJpbmdzLFxuICAgICBzbyB5b3UgY2FuIHByaW50IHRoZW0gb3V0IGFuZCBwcmV2aWV3IHRoZW0gaW4gdGhlIGNvbnNvbGUuIFxuICAgIFRoZSBmb3JtYXQgc2hvdWxkIGJlOiAoIHZhbHVlICkgLT4gKCB2YWx1ZSApIC0+ICggdmFsdWUgKSAtPiBudWxsXG4gICAgICovXG4gIH1cbiAgLypFeHRyYSBDcmVkaXQgVGlwOiBXaGVuIHlvdSBpbnNlcnQgb3IgcmVtb3ZlIGEgbm9kZSxcbiAgIGNvbnNpZGVyIGhvdyBpdCB3aWxsIGFmZmVjdCB0aGUgZXhpc3Rpbmcgbm9kZXMuIFxuICBTb21lIG9mIHRoZSBub2RlcyB3aWxsIG5lZWQgdGhlaXIgbmV4dE5vZGUgbGluayB1cGRhdGVkLlxuICAqL1xuICBpbnNlcnRBdCh2YWx1ZTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XG4gICAgLy90aGF0IGluc2VydHMgYSBuZXcgbm9kZSB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAvLyBuZWVkIHRvIHVwZGF0ZSB0aGUgbGluayB0byBwZXJmb3JtIHRoaXNcbiAgfVxuICByZW1vdmVBdChpbmRleDogbnVtYmVyKSB7XG4gICAgLy90aGF0IHJlbW92ZXMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4LlxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbmV4dDogb2JqZWN0O1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gIH1cblxuICBnZXROZXh0KCkge1xuICAgIHJldHVybiB0aGlzLm5leHQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IExpbmtlZExpc3QudHMgYW5kIE5vZGUudHMgaGVyZVxuY29uc29sZS5sb2coJ2hlbGxvLicpO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBMaW5rZWRMaXN0IGZyb20gJy4vTGlua2VkTGlzdCc7XG5cbi8vIGxvb2sgYmFjayBjbGFzcyBhbmQgZmFjdG9yeSBzeW50YXggYSBsaXR0bGUgYml0XG4vL3VzaW5nIGluaGVyaXRhbmNlIHRvIGV4dGVuZCBjbGFzcyBQZXJzb24gdG8gY2xhc3Mgc29sZldhcmRkZXZlbG9wZXJcbmNvbnN0IGxpbmtlZExpc3QgPSBuZXcgTGlua2VkTGlzdCgxKTtcbmxpbmtlZExpc3QuYXBwZW5kKDIpO1xubGlua2VkTGlzdC5hcHBlbmQoMyk7XG5saW5rZWRMaXN0LmFwcGVuZCg0KTtcbmxpbmtlZExpc3QuYXBwZW5kKDUpO1xubGlua2VkTGlzdC5hcHBlbmQoNik7XG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0KTtcblxubGlua2VkTGlzdC5hdCgyKTsgLy8gcmV0dXJuIDNcbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QpO1xuLy8gbGlua2VkTGlzdC5wcmVwZW5kKDU1KTtcbi8vIGxldCBkcmFmdCA9IHtcbi8vICAgdmFsdWU6IDM1LFxuLy8gICBuZXh0OiB7XG4vLyAgICAgdmFsdWU6IDM0LFxuLy8gICAgIG5leHQ6IHtcbi8vICAgICAgIHZhbHVlOiAzMyxcbi8vICAgICAgIG5leHQ6IG51bGwsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=