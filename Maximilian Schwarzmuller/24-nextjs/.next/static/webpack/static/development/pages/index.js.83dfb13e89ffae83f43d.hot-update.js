webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mijanur/MYCODE/JAVASCRIPT/REACTJS/react-courses-master/Maximilian Schwarzmuller/24-nextjs/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) {\n  function isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n\n    try {\n      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n\n  return function () {\n    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived),\n        result;\n\n    if (isNativeReflectConstruct()) {\n      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor;\n\n      result = Reflect.construct(Super, arguments, NewTarget);\n    } else {\n      result = Super.apply(this, arguments);\n    }\n\n    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result);\n  };\n}\n\n\n\n\n\nvar IndexPage =\n/*#__PURE__*/\nfunction (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(IndexPage, _Component);\n\n  var _super = _createSuper(IndexPage);\n\n  function IndexPage() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, IndexPage);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(IndexPage, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 17\n        }\n      }, \"The Main Page of \", this.props.appName), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }\n      }, \"Go to\", \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/auth\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 25\n        }\n      }, \"Auth\"))), __jsx(\"button\", {\n        onClick: function onClick() {\n          return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(\"/auth\");\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 17\n        }\n      }, \"Go to Auth\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    // before execute render\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(context);\n                return _context.abrupt(\"return\", {\n                  app: app\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return IndexPage;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsIlJvdXRlciIsInB1c2giLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImFwcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsUzs7Ozs7Ozs7Ozs7Ozs7OzZCQU9PO0FBQ0wsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBc0IsS0FBS0MsS0FBTCxDQUFXQyxPQUFqQyxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDVSxHQURWLEVBRUksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBRkosQ0FGSixFQVFJO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLENBQU47QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJKLENBREo7QUFZSDs7O0FBbkJEOzs7OzhGQUM2QkMsTzs7Ozs7QUFDekJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtpREFDTztBQUFDRyxxQkFBRyxFQUFIQTtBQUFELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSlNDLCtDOztBQXFCdkI7QUFFY1Qsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIC8vIGJlZm9yZSBleGVjdXRlIHJlbmRlclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHthcHB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPlRoZSBNYWluIFBhZ2Ugb2Yge3RoaXMucHJvcHMuYXBwTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBHbyB0b3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5BdXRoPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvYXV0aFwiKX0+R28gdG8gQXV0aDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})