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
linkedList.at(2); // return 3
console.log(linkedList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUNYRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsd0NBQXdDO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFZ0I7QUFFdEMsa0RBQWtEO0FBQ2xELHFFQUFxRTtBQUNyRSxJQUFNLFVBQVUsR0FBRyxJQUFJLG1EQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFckIsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL0xpbmtlZExpc3QudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvTm9kZS50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuXG4gIGhlYWQ6IGFueTtcblxuICB0YWlsOiBvYmplY3Q7XG4gIGluZGV4OiAwO1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5oZWFkID0geyB2YWx1ZTogdmFsdWUsIG5leHQ6IG51bGwgfTtcbiAgICB0aGlzLnRhaWwgPSB0aGlzLmhlYWQ7XG4gICAgdGhpcy5zaXplID0gMTtcbiAgfVxuXG4gIGFwcGVuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcblxuICAgIHRoaXMudGFpbCA9IG5vZGU7XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGlmIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudC5uZXh0ID0gbm9kZTtcbiAgICB0aGlzLnNpemUrKztcbiAgfVxuICAvLyByZXNldCgpIHtcbiAgLy8gICAvLyBob3cgdG8gcmVzZXQgYSBsaW5rZWRMaXN0P1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAvLyB9XG4gIHByZXBlbmQodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgY29uc3QgaGVhZENvcHkgPSB0aGlzLmhlYWQ7XG4gICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICB0aGlzLmhlYWQubmV4dCA9IGhlYWRDb3B5O1xuICAgIHRoaXMuc2l6ZSsrO1xuICB9XG4gIGdldFNpemUoKSB7XG4gICAgLy9jb3VudCBob3cgbWFueSB2YWx1ZXMgaW5zaWRlIG5lc3RlZCBsaW5rZWRMaXN0XG4gICAgLy8gaGVyZSB3ZSBhcmUgLT4gbmVlZCB0byBzdG9yZSBzb21lIHByb3BlcnRpZXMgaW4gdGhlIGxpc3RcbiAgICAvLyByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGxpc3RcblxuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cbiAgZ2V0SGVhZCgpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBub2RlIGluIHRoZSBsaXN0XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuICBnZXRUYWlsKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWw7XG4gICAgLy8gcmV0dXJucyB0aGUgbGFzdCBub2RlIGluIHRoZSBsaXN0XG4gIH1cbiAgYXQoaW5kZXg6IG51bWJlcikge1xuICAgIC8vcmV0dXJucyB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAvLyBmaXJzdCBlbGVtZW50IGluZGV4ID0gMDtcbiAgICAvLyBiYXNlZCBvbiBoZWFkIGFuZCBtb3ZlIGRlZXAgb25cbiAgICAvLyBpbmRleFswXSA9IGhlYWRcbiAgICAvLyBpbmRleFszXSA9IGhlYWQubmV4dC5uZXh0Lm5leHQgKDNzdGVwcyBpbilcbiAgICAvLyAtPiB1c2luZyB3aGlsZSBsb29wLiBldmVyeSB0aW1lIGkgaGVhciB0cmFuc3ZlciAtPiB1c2luZyBsb29wXG4gICAgLy8gc2FtcGxlIDEgZm9yLi4ubG9vcFxuICAgIC8vIGxldCBjb3B5ID0gdGhpcy5oZWFkO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAvLyAgIGNvcHkgPSBjb3B5Lm5leHQ7XG4gICAgLy8gY29uc29sZS5sb2coY29weSk7XG4gIH1cblxuICBwb3AoKSB7XG4gICAgLy9yZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgbGlzdFxuICB9XG4gIGNvbnRhaW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGluIHRoZSBsaXN0XG4gICAgLy8gYW5kIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICB9XG4gIGZpbmQodmFsdWU6IG51bWJlcikge1xuICAgIC8vcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG5vZGUgY29udGFpbmluZyB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgLypyZXByZXNlbnRzIHlvdXIgTGlua2VkTGlzdCBvYmplY3RzIGFzIHN0cmluZ3MsXG4gICAgIHNvIHlvdSBjYW4gcHJpbnQgdGhlbSBvdXQgYW5kIHByZXZpZXcgdGhlbSBpbiB0aGUgY29uc29sZS4gXG4gICAgVGhlIGZvcm1hdCBzaG91bGQgYmU6ICggdmFsdWUgKSAtPiAoIHZhbHVlICkgLT4gKCB2YWx1ZSApIC0+IG51bGxcbiAgICAgKi9cbiAgfVxuICAvKkV4dHJhIENyZWRpdCBUaXA6IFdoZW4geW91IGluc2VydCBvciByZW1vdmUgYSBub2RlLFxuICAgY29uc2lkZXIgaG93IGl0IHdpbGwgYWZmZWN0IHRoZSBleGlzdGluZyBub2Rlcy4gXG4gIFNvbWUgb2YgdGhlIG5vZGVzIHdpbGwgbmVlZCB0aGVpciBuZXh0Tm9kZSBsaW5rIHVwZGF0ZWQuXG4gICovXG4gIGluc2VydEF0KHZhbHVlOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcbiAgICAvL3RoYXQgaW5zZXJ0cyBhIG5ldyBub2RlIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgIC8vIG5lZWQgdG8gdXBkYXRlIHRoZSBsaW5rIHRvIHBlcmZvcm0gdGhpc1xuICB9XG4gIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpIHtcbiAgICAvL3RoYXQgcmVtb3ZlcyB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICB2YWx1ZTogbnVtYmVyO1xuICBuZXh0OiBvYmplY3Q7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgfVxuXG4gIGdldE5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgTGlua2VkTGlzdC50cyBhbmQgTm9kZS50cyBoZXJlXG5jb25zb2xlLmxvZygnaGVsbG8uJyk7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IExpbmtlZExpc3QgZnJvbSAnLi9MaW5rZWRMaXN0JztcblxuLy8gbG9vayBiYWNrIGNsYXNzIGFuZCBmYWN0b3J5IHN5bnRheCBhIGxpdHRsZSBiaXRcbi8vdXNpbmcgaW5oZXJpdGFuY2UgdG8gZXh0ZW5kIGNsYXNzIFBlcnNvbiB0byBjbGFzcyBzb2xmV2FyZGRldmVsb3BlclxuY29uc3QgbGlua2VkTGlzdCA9IG5ldyBMaW5rZWRMaXN0KDEpO1xubGlua2VkTGlzdC5hcHBlbmQoMik7XG5saW5rZWRMaXN0LmFwcGVuZCgzKTtcbmxpbmtlZExpc3QuYXBwZW5kKDQpO1xuXG5saW5rZWRMaXN0LmF0KDIpOyAvLyByZXR1cm4gM1xuY29uc29sZS5sb2cobGlua2VkTGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=