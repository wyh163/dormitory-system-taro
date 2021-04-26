(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/register/register"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/register/register.jsx":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/register/register.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.0@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.0@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _register_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register.scss */ "./src/pages/register/register.scss");
/* harmony import */ var _register_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_register_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service */ "./src/pages/service/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













var Register = /*#__PURE__*/function (_Component) {
  Object(D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Register, _Component);

  var _super = Object(D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Register);

  function Register() {
    var _this;

    Object(D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Register);

    _this = _super.apply(this, arguments);
    _this.state = {
      account: '',
      Pwd: '',
      pho: ''
    };
    return _this;
  }

  Object(D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Register, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('before service');
      _service__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].getFilmlist().then(function (ret) {
        console.log(ret);

        _this2.setState({
          account: ret.data.data.list[0].Title
        });

        _this2.setState({
          Pwd: ret.data.data.list[1].Title
        });

        _this2.setState({
          pho: ret.data.data.list[2].Title
        });
      });
    }
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
    key: "handleChangepho",
    value: function handleChangepho(pho) {
      this.setState({
        pho: pho
      });
    }
  }, {
    key: "render",
    value: function render() {
      var gotoindex = function gotoindex() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/index/index'
        });
      };

      var gotologin = function gotologin() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/login/login'
        });
      };

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
        className: "box",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtForm */ "a"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtInput */ "b"], {
            name: "account",
            title: "\u8D26\u53F7",
            type: "text",
            placeholder: "",
            value: this.state.account,
            onChange: this.handleChange.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtInput */ "b"], {
            name: "password",
            title: "\u5BC6\u7801",
            type: "password",
            placeholder: "",
            value: this.state.Pwd,
            onChange: this.handleChangePwd.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtInput */ "b"], {
            name: "phone",
            border: false,
            title: "\u624B\u673A\u53F7\u7801",
            type: "phone",
            placeholder: "\u624B\u673A\u53F7\u7801",
            value: this.state.pho,
            onChange: this.handleChangepho.bind(this)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
            onclick: gotologin,
            children: "\u5B8C\u6210"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
            onclick: gotoindex,
            children: "\u8FD4\u56DE"
          })]
        })
      });
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/pages/register/register.jsx":
/*!*****************************************!*\
  !*** ./src/pages/register/register.jsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.0@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_register_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./register.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/register/register.jsx");


var config = {"navigationBarTitleText":"注册页面"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_register_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/register/register', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/register/register.scss":
/*!******************************************!*\
  !*** ./src/pages/register/register.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/register/register.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=register.js.map