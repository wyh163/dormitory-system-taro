(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/login/login.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/login/login.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.0@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.scss */ "./src/pages/login/login.scss");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_login_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.0@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












var Login = /*#__PURE__*/function (_Component) {
  Object(D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Login, _Component);

  var _super = Object(D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Login);

  function Login() {
    var _this;

    Object(D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Login);

    _this = _super.apply(this, arguments);
    _this.state = {
      account: '',
      Pwd: ''
    };
    return _this;
  }

  Object(D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Login, [{
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
    value: function handleChange(account) {
      this.setState({
        account: account
      });
    }
  }, {
    key: "handleChangePwd",
    value: function handleChangePwd(Pwd) {
      this.setState({
        Pwd: Pwd
      });
    }
  }, {
    key: "render",
    value: function render() {
      var gotostudent = function gotostudent() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/student/student'
        });
      };

      var gotoindex = function gotoindex() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/index/index'
        });
      };

      var gotosearch = function gotosearch() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/search/search'
        });
      };

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
        className: "box",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtForm */ "a"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtInput */ "b"], {
            name: "account",
            title: "\u8D26\u53F7",
            type: "text",
            placeholder: "",
            value: this.state.account,
            onChange: this.handleChange.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtInput */ "b"], {
            name: "password",
            title: "\u5BC6\u7801",
            type: "password",
            placeholder: "",
            value: this.state.Pwd,
            onChange: this.handleChangePwd.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
            onclick: gotostudent,
            children: "\u5B8C\u6210"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
            onclick: gotoindex,
            children: "\u8FD4\u56DE"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
            onclick: gotosearch,
            children: "\u8FD4\u56DE"
          })]
        })
      });
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/pages/login/login.jsx":
/*!***********************************!*\
  !*** ./src/pages/login/login.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.0@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_login_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./login.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/login/login.jsx");


var config = {"navigationBarTitleText":"登录页面"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_login_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/login', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/login/login.scss":
/*!************************************!*\
  !*** ./src/pages/login/login.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/login/login.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=login.js.map