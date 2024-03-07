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
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
        this.size++;
        return this; //allow chaining
    };
    LinkedList.prototype.prepend = function (value) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        var headCopy = this.head;
        this.head = node;
        this.head.next = headCopy;
        this.size++;
        return this; // allow chaining
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.getTail = function () {
        return this.tail;
    };
    LinkedList.prototype.at = function (index) {
        //returns the node at the given index
        // first element index = 0;
        // based on head and move deep on
        // index[0] = head
        // index[3] = head.next.next.next (3steps in)
        // -> using while loop. every time i hear transver -> using loop
        // sample 1 for...loop
        var copy = this.head;
        for (var i = 0; i <= index; i++) {
            copy = copy.next;
            console.log(copy);
        }
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
linkedList.prepend(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNULE9BQU87QUFDUCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvTGlua2VkTGlzdC50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9Ob2RlLnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtlZExpc3Qge1xuICB2YWx1ZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIG5leHQ6IG9iamVjdDtcbiAgaGVhZDogYW55O1xuICB0YWlsOiBhbnk7XG4gIGluZGV4OiAwO1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5oZWFkID0geyB2YWx1ZTogdmFsdWUsIG5leHQ6IG51bGwgfTtcbiAgICB0aGlzLnRhaWwgPSB0aGlzLmhlYWQ7XG4gICAgdGhpcy5zaXplID0gMTtcbiAgfVxuXG4gIGFwcGVuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIGN1cnJlbnQubmV4dCA9IG5vZGU7XG4gICAgdGhpcy5zaXplKys7XG4gICAgcmV0dXJuIHRoaXM7IC8vYWxsb3cgY2hhaW5pbmdcbiAgfVxuXG4gIHByZXBlbmQodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgY29uc3QgaGVhZENvcHkgPSB0aGlzLmhlYWQ7XG4gICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICB0aGlzLmhlYWQubmV4dCA9IGhlYWRDb3B5O1xuICAgIHRoaXMuc2l6ZSsrO1xuICAgIHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xuICB9XG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuICBnZXRIZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cbiAgZ2V0VGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWlsO1xuICB9XG4gIGF0KGluZGV4OiBudW1iZXIpIHtcbiAgICAvL3JldHVybnMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgLy8gZmlyc3QgZWxlbWVudCBpbmRleCA9IDA7XG4gICAgLy8gYmFzZWQgb24gaGVhZCBhbmQgbW92ZSBkZWVwIG9uXG4gICAgLy8gaW5kZXhbMF0gPSBoZWFkXG4gICAgLy8gaW5kZXhbM10gPSBoZWFkLm5leHQubmV4dC5uZXh0ICgzc3RlcHMgaW4pXG4gICAgLy8gLT4gdXNpbmcgd2hpbGUgbG9vcC4gZXZlcnkgdGltZSBpIGhlYXIgdHJhbnN2ZXIgLT4gdXNpbmcgbG9vcFxuICAgIC8vIHNhbXBsZSAxIGZvci4uLmxvb3BcbiAgICBsZXQgY29weSA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG4gICAgICBjb3B5ID0gY29weS5uZXh0O1xuICAgICAgY29uc29sZS5sb2coY29weSk7XG4gICAgfVxuICB9XG4gIHBvcCgpIHtcbiAgICAvL3JlbW92ZXMgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBsaXN0XG4gIH1cbiAgY29udGFpbnModmFsdWU6IG51bWJlcikge1xuICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW4gdGhlIGxpc3RcbiAgICAvLyBhbmQgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXG4gIH1cbiAgZmluZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLy9yZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZC5cbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICAvKnJlcHJlc2VudHMgeW91ciBMaW5rZWRMaXN0IG9iamVjdHMgYXMgc3RyaW5ncyxcbiAgICAgc28geW91IGNhbiBwcmludCB0aGVtIG91dCBhbmQgcHJldmlldyB0aGVtIGluIHRoZSBjb25zb2xlLiBcbiAgICBUaGUgZm9ybWF0IHNob3VsZCBiZTogKCB2YWx1ZSApIC0+ICggdmFsdWUgKSAtPiAoIHZhbHVlICkgLT4gbnVsbFxuICAgICAqL1xuICB9XG4gIC8qRXh0cmEgQ3JlZGl0IFRpcDogV2hlbiB5b3UgaW5zZXJ0IG9yIHJlbW92ZSBhIG5vZGUsXG4gICBjb25zaWRlciBob3cgaXQgd2lsbCBhZmZlY3QgdGhlIGV4aXN0aW5nIG5vZGVzLiBcbiAgU29tZSBvZiB0aGUgbm9kZXMgd2lsbCBuZWVkIHRoZWlyIG5leHROb2RlIGxpbmsgdXBkYXRlZC5cbiAgKi9cbiAgaW5zZXJ0QXQodmFsdWU6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xuICAgIC8vdGhhdCBpbnNlcnRzIGEgbmV3IG5vZGUgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgLy8gbmVlZCB0byB1cGRhdGUgdGhlIGxpbmsgdG8gcGVyZm9ybSB0aGlzXG4gIH1cbiAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcikge1xuICAgIC8vdGhhdCByZW1vdmVzIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG5leHQ6IG9iamVjdDtcbiAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG5cbiAgZ2V0TmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBMaW5rZWRMaXN0LnRzIGFuZCBOb2RlLnRzIGhlcmVcbmNvbnNvbGUubG9nKCdoZWxsby4nKTtcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgTGlua2VkTGlzdCBmcm9tICcuL0xpbmtlZExpc3QnO1xuXG4vLyBsb29rIGJhY2sgY2xhc3MgYW5kIGZhY3Rvcnkgc3ludGF4IGEgbGl0dGxlIGJpdFxuLy91c2luZyBpbmhlcml0YW5jZSB0byBleHRlbmQgY2xhc3MgUGVyc29uIHRvIGNsYXNzIHNvbGZXYXJkZGV2ZWxvcGVyXG5jb25zdCBsaW5rZWRMaXN0ID0gbmV3IExpbmtlZExpc3QoMSk7XG5saW5rZWRMaXN0LmFwcGVuZCgyKTtcbmxpbmtlZExpc3QuYXBwZW5kKDMpO1xubGlua2VkTGlzdC5hcHBlbmQoNCk7XG5saW5rZWRMaXN0LnByZXBlbmQoMik7XG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0KTtcblxubGlua2VkTGlzdC5hdCgyKTsgLy8gcmV0dXJuIDNcbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QpO1xuLy8gbGlua2VkTGlzdC5wcmVwZW5kKDU1KTtcbi8vIGxldCBkcmFmdCA9IHtcbi8vICAgdmFsdWU6IDM1LFxuLy8gICBuZXh0OiB7XG4vLyAgICAgdmFsdWU6IDM0LFxuLy8gICAgIG5leHQ6IHtcbi8vICAgICAgIHZhbHVlOiAzMyxcbi8vICAgICAgIG5leHQ6IG51bGwsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=