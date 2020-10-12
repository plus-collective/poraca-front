webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/confirm/confirm.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/routes/confirm/confirm.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/app/app.js":
/*!***********************************!*\
  !*** ./src/components/app/app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/home */ "./src/routes/home/index.js");
/* harmony import */ var _routes_business__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/business */ "./src/routes/business/index.js");
/* harmony import */ var _routes_bizs_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/bizs-list */ "./src/routes/bizs-list/index.js");
/* harmony import */ var _routes_confirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes/confirm */ "./src/routes/confirm/index.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar */ "./src/components/navbar/index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.css */ "./src/components/app/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/emi/dev/web/poraca/src/components/app/app.js";

 // import logo from '../../images/logo.svg';








class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/home",
      component: _routes_home__WEBPACK_IMPORTED_MODULE_2__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/bizslist",
      component: _routes_bizs_list__WEBPACK_IMPORTED_MODULE_4__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/biz",
      component: _routes_business__WEBPACK_IMPORTED_MODULE_3__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/confirm",
      component: _routes_business__WEBPACK_IMPORTED_MODULE_3__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, '404'))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/routes/confirm/confirm.css":
/*!****************************************!*\
  !*** ./src/routes/confirm/confirm.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./confirm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/confirm/confirm.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./confirm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/confirm/confirm.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./confirm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/confirm/confirm.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/confirm/confirm.js":
/*!***************************************!*\
  !*** ./src/routes/confirm/confirm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_district_filter_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/district-filter-home */ "./src/components/district-filter-home/index.js");
/* harmony import */ var _components_district_filter_biz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/district-filter-biz */ "./src/components/district-filter-biz/index.js");
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/popup */ "./src/components/popup/index.js");
/* harmony import */ var _components_list_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/list-element */ "./src/components/list-element/index.js");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tags */ "./src/components/tags/index.js");
/* harmony import */ var _confirm_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm.css */ "./src/routes/confirm/confirm.css");
/* harmony import */ var _confirm_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_confirm_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/emi/dev/web/poraca/src/routes/confirm/confirm.js";









function Confirm(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    class: "hero is-primary is-fullheight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "hero-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container p-5 has-text-centered is-vcentered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    class: "title is-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "\xBFEn que barrio estas?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_district_filter_home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "BUSCAR",
    action: "/bizslist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }))))) //   {/* <Popup></Popup> */}
  //   {/* <Tags></Tags>
  //   <ListElement opt="biz"></ListElement> */}
  //   {/* <ListElement opt="product"></ListElement> */}
  // </div>
  ;
}

/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ }),

/***/ "./src/routes/confirm/index.js":
/*!*************************************!*\
  !*** ./src/routes/confirm/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm.js */ "./src/routes/confirm/confirm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _confirm_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// RE EXPORT MAIN COMPONENT TO LATER IMPORT VIA FOLDER
// You put your stateless component in component-name-view.js, 
// your container component in component-name-container.js, 
// your global state component in component-name-redux.js


/***/ })

})
//# sourceMappingURL=main.7f40fe33cd130ebedc41.hot-update.js.map