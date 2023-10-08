webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
  _jsxFileName = "C:\\web\\zerocho\\practice\\prepare\\front\\components\\PostForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var PostForm = function PostForm() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.post;
    }),
    imagePaths = _useSelector.imagePaths;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
    text = _useState[0],
    setText = _useState[1];
  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["addPost"]);
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    style: {
      "float": "right"
    },
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, imagePaths.map(function (v) {
    return __jsx("div", {
      key: v,
      style: {
        display: "inline-block"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: v,
      style: {
        width: "200px"
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, "\uC81C\uAC70")));
  })));
};
_s(PostForm, "aYMEQtBKSmjNQIIZyRHsv5PXnfU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});
_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);
var _c;
$RefreshReg$(_c, "PostForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsIl9zIiwiX3VzZVNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJvbkNoYW5nZVRleHQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiYWRkUG9zdCIsIl9fanN4IiwiRm9ybSIsInN0eWxlIiwibWFyZ2luIiwiZW5jVHlwZSIsIm9uRmluaXNoIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIklucHV0IiwiVGV4dEFyZWEiLCJvbkNoYW5nZSIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm11bHRpcGxlIiwiaGlkZGVuIiwiQnV0dG9uIiwiaHRtbFR5cGUiLCJtYXAiLCJ2Iiwia2V5IiwiZGlzcGxheSIsInNyYyIsIndpZHRoIiwiYWx0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1U7QUFDRTtBQUNaO0FBRTNDLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUNyQixJQUFBQyxZQUFBLEdBQXVCQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQWpEQyxVQUFVLEdBQUFKLFlBQUEsQ0FBVkksVUFBVTtFQUNsQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFBQyxTQUFBLEdBQXdCQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUE3QkMsSUFBSSxHQUFBRixTQUFBO0lBQUVHLE9BQU8sR0FBQUgsU0FBQTtFQUNwQixJQUFNSSxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBQyxFQUFLO0lBQ3RDSCxPQUFPLENBQUNHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDekIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLFFBQVEsR0FBR0oseURBQVcsQ0FBQyxZQUFNO0lBQ2pDUCxRQUFRLENBQUNZLHNEQUFPLENBQUM7RUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE9BQ0VDLEtBQUEsQ0FBQ0MseUNBQUk7SUFDSEMsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFjLENBQUU7SUFDakNDLE9BQU8sRUFBQyxxQkFBcUI7SUFDN0JDLFFBQVEsRUFBRVAsUUFBUztJQUFBUSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVuQlosS0FBQSxDQUFDYSwwQ0FBSyxDQUFDQyxRQUFRO0lBQ2JqQixLQUFLLEVBQUVOLElBQUs7SUFDWndCLFFBQVEsRUFBRXRCLFlBQWE7SUFDdkJ1QixTQUFTLEVBQUUsR0FBSTtJQUNmQyxXQUFXLEVBQUMsd0VBQWlCO0lBQUFYLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQzlCLENBQUMsRUFDRlosS0FBQTtJQUFBTSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNFWixLQUFBO0lBQU9rQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxRQUFRO0lBQUNDLE1BQU07SUFBQWQsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3JDWixLQUFBLENBQUNxQiwyQ0FBTTtJQUFBZixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSwwQ0FBZ0IsQ0FBQyxFQUN4QlosS0FBQSxDQUFDcUIsMkNBQU07SUFBQ0gsSUFBSSxFQUFDLFNBQVM7SUFBQ2hCLEtBQUssRUFBRTtNQUFFLFNBQU87SUFBUSxDQUFFO0lBQUNvQixRQUFRLEVBQUMsUUFBUTtJQUFBaEIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsaUJBRTNELENBQ0wsQ0FBQyxFQUNOWixLQUFBO0lBQUFNLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0cxQixVQUFVLENBQUNxQyxHQUFHLENBQUMsVUFBQ0MsQ0FBQztJQUFBLE9BQ2hCeEIsS0FBQTtNQUFLeUIsR0FBRyxFQUFFRCxDQUFFO01BQUN0QixLQUFLLEVBQUU7UUFBRXdCLE9BQU8sRUFBRTtNQUFlLENBQUU7TUFBQXBCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQzlDWixLQUFBO01BQUsyQixHQUFHLEVBQUVILENBQUU7TUFBQ3RCLEtBQUssRUFBRTtRQUFFMEIsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDQyxHQUFHLEVBQUVMLENBQUU7TUFBQWxCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQyxFQUNsRFosS0FBQTtNQUFBTSxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUNFWixLQUFBLENBQUNxQiwyQ0FBTTtNQUFBZixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxpQkFBVyxDQUNmLENBQ0YsQ0FBQztFQUFBLENBQ1AsQ0FDRSxDQUNELENBQUM7QUFFWCxDQUFDO0FBQUMvQixFQUFBLENBMUNJRCxRQUFRO0VBQUEsUUFDV0csdURBQVcsRUFDakJLLHVEQUFXO0FBQUE7QUFBQTBDLEVBQUEsR0FGeEJsRCxRQUFRO0FBNENDQSx1RUFBUSxFQUFDO0FBQUEsSUFBQWtELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcyNWNmNjAyNDZmOTRkNTU1NDg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkUG9zdCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxyXG4gICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cclxuICAgID5cclxuICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiAvPlxyXG4gICAgICAgIDxCdXR0b24+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICDsp7nsp7lcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==