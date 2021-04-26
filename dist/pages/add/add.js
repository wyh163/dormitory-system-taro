(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/add/add"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/add/add.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/add/add.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Add; });
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.0@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.0@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _add_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add.scss */ "./src/pages/add/add.scss");
/* harmony import */ var _add_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_add_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













var Add = /*#__PURE__*/function (_Component) {
  Object(D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Add, _Component);

  var _super = Object(D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Add);

  function Add() {
    var _this;

    Object(D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Add);

    _this = _super.apply(this, arguments);
    _this.state = Object(D_myproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      value: ''
    }, "value", '');
    return _this;
  }

  Object(D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Add, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "handleChangeclass",
    value: function handleChangeclass(value) {
      this.setState({
        valueclass: value
      });
    }
  }, {
    key: "handleChangenumber",
    value: function handleChangenumber(value) {
      this.setState({
        valuenumber: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var gotosearch = function gotosearch() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/search/search'
        });
      };

      var gotologin = function gotologin() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/search/search'
        });
      };

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
        className: "box",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtForm */ "a"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtInput */ "b"], {
            name: "value",
            title: "\u59D3\u540D",
            type: "text",
            placeholder: "",
            value: this.state.value,
            onChange: this.handleChange.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtInput */ "b"], {
            name: "class",
            title: "\u73ED\u7EA7",
            type: "text",
            placeholder: "",
            value: this.state.valueclass,
            onChange: this.handleChangeclass.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtInput */ "b"], {
            name: "value3",
            title: "\u5B66\u53F7",
            type: "text",
            placeholder: "",
            value: this.state.valuetelephone,
            onChange: this.handleChangenumber.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "a"], {
            onclick: gotosearch,
            children: "\u6DFB\u52A0"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "a"], {
            onclick: gotosearch,
            children: "\u8FD4\u56DE"
          })]
        })
      });
    }
  }]);

  return Add;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/pages/add/add.jsx":
/*!*******************************!*\
  !*** ./src/pages/add/add.jsx ***!
  \*******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.0@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_add_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./add.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/add/add.jsx");


var config = {"navigationBarTitleText":"添加页面"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_add_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/add/add', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/add/add.scss":
/*!********************************!*\
  !*** ./src/pages/add/add.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/add/add.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=add.js.map