(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/student/student"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/student/student.jsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/student/student.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.0@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.0@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _student_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student.scss */ "./src/pages/student/student.scss");
/* harmony import */ var _student_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_student_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












var Student = /*#__PURE__*/function (_Component) {
  Object(D_myproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Student, _Component);

  var _super = Object(D_myproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Student);

  function Student() {
    var _this;

    Object(D_myproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Student);

    _this = _super.apply(this, arguments);
    _this.state = {
      value: ''
    };
    return _this;
  }

  Object(D_myproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Student, [{
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
    key: "onChange",
    value: function onChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "onActionClick",
    value: function onActionClick() {
      console.log('value');
    }
  }, {
    key: "render",
    value: function render() {
      var gotoadd = function gotoadd() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
          url: '/pages/add/add'
        });
      };

      {
        var gotorevise = function gotorevise() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
            url: '/pages/revise/revise'
          });
        };

        {
          var gotodelete = function gotodelete() {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
              url: '/pages/delete/delete'
            });
          };

          {
            var gotologin = function gotologin() {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
                url: '/pages/login/login'
              });
            };

            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
              className: "box",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtSearchBar */ "c"], {
                inputType: "number",
                value: this.state.value,
                onChange: this.onChange.bind(this),
                onActionClick: this.onActionClick.bind(this)
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
                onclick: gotoadd,
                children: "\u6DFB\u52A0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
                onclick: gotorevise,
                children: "\u4FEE\u6539"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
                onclick: gotodelete,
                children: "\u5220\u9664"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
                onclick: gotologin,
                children: "\u8FD4\u56DE"
              })]
            });
          }
        }
      }
    }
  }]);

  return Student;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/pages/student/student.jsx":
/*!***************************************!*\
  !*** ./src/pages/student/student.jsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.0@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_student_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./student.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/student/student.jsx");


var config = {"navigationBarTitleText":"学生宿舍管理系统"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_student_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/student/student', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/student/student.scss":
/*!****************************************!*\
  !*** ./src/pages/student/student.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/student/student.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=student.js.map