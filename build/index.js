/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");


//'use strict';

// Select all link in page
var allLink = document.querySelectorAll('a');
// Select Link Place into Modal
var exitGoToBtn = document.querySelector('.exit-go-to-btn');
// Select Timer place
var exitTimerDisplay = document.querySelector('#exit-timer');
// Select Timer Row
var exitTimerText = document.querySelector('#exit-timer-text');
// Select Modal Box
var exitPopup = document.querySelector('.exit-popup');
// Select Modal Overlay
var exitOverlay = document.querySelector('.exit-overlay');
// Select Close Modal Button
var exitCloseBtn = document.querySelector('.exit-close');
// Select Close Modal X
var exitCloseBtnX = document.querySelector('.exit-close-x');
// Select href print
var exitHrefPrink = document.querySelector('.exit-href-print');

// Close Popup on click Outside Modal Box
function exitCloseOverlay(data) {
  exitOverlay.addEventListener('click', function () {
    clearInterval(data);
    exitTimerDisplay.textContent = '10';
    exitOverlay.classList.add('exit-hidden');
    exitPopup.classList.add('exit-hidden');
  });
}

// Click Close Modal Button Function
function exitClosePopupBtn(data) {
  exitCloseBtn.addEventListener('click', function () {
    clearInterval(data);
    exitTimerDisplay.textContent = '10';
    exitOverlay.classList.add('exit-hidden');
    exitPopup.classList.add('exit-hidden');
  });
}

// Click Close Modal Button Function
function exitClosePopupBtnX(data) {
  exitCloseBtnX.addEventListener('click', function () {
    clearInterval(data);
    exitTimerDisplay.textContent = '10';
    exitOverlay.classList.add('exit-hidden');
    exitPopup.classList.add('exit-hidden');
  });
}

// Click Go to External Link Confirm Button Function
function exitConfirmLink(intervallo, allLink) {
  exitGoToBtn.addEventListener('click', function () {
    clearInterval(intervallo);
    exitTimerText.textContent = 'Caricamento....';
    window.location.href = allLink;
  });
}

// Stop Timer Function
function exitStopTimer(display, intervallo) {
  clearInterval(intervallo);
  exitTimerText.textContent = 'Caricamento....';
}

// Countdown Function
function exitStartTimer(duration, display, allLink) {
  exitTimerDisplay.textContent = '10';
  var timer = duration,
    seconds;
  var intervallo = setInterval(function () {
    seconds = parseInt(timer % 60, 10);

    // Put 0 berfore numbers < 10
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Print Countdown
    display.textContent = seconds;

    // Actions When cycle is running
    if (--timer < 0) {
      // Set timer == duration
      timer = duration;
      // Go to external link without finish circle
      exitConfirmLink(intervallo, allLink);
    }

    // Close Modal Button on click and reset timer
    exitClosePopupBtn(intervallo);

    // Close Modal Button on click and reset timer
    exitClosePopupBtnX(intervallo);

    // Close Modal Overlay on click and reset timer
    exitCloseOverlay(intervallo);

    // Go to external Link on
    exitGoToBtn.addEventListener('click', function () {
      exitStopTimer(display, intervallo);
      window.location.href = allLink;
    });

    // Action When loop is finished
    if (seconds == '00') {
      exitStopTimer(display, intervallo);
      window.location.href = allLink;
    }
  }, 1000);
}

// For Loop through all page link to check which is external
for (var i = 0; i < allLink.length; i++) {
  // Take the one that is clicked
  allLink[i].addEventListener('click', function (e) {
    // Stop link function
    e.preventDefault();
    // Set external link rules
    var isExternalLink = function isExternalLink(url) {
      var tmp = document.createElement('a');
      tmp.href = url;
      return tmp.host !== window.location.host;
    };

    // Set link href on click
    var hreflink = this.href;
    var classLink = e.target.className;

    // Actions when is external link
    if (isExternalLink(hreflink) && !classLink.includes("noExitNotifier")) {
      // Set external link to Confirm Button
      exitGoToBtn.href = hreflink;
      // Print link 
      exitHrefPrink.textContent = hreflink;
      // Show Overlay
      exitOverlay.classList.remove('exit-hidden');
      // Show Modal Box
      exitPopup.classList.remove('exit-hidden');
      // Start Timer
      exitStartTimer(10, exitTimerDisplay, hreflink);
    } else {
      // Go Directly To internal link
      window.location.href = hreflink;
    }
  });
}
if (false) {}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexit_website"] = self["webpackChunkexit_website"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map