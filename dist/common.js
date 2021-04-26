(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/pages/service/api.js":
/*!**********************************!*\
  !*** ./src/pages/service/api.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rootPath = 'http://127.0.0.1:5000';
var apiObject = {
  register: rootPath + '/user/register',
  //注册
  login: rootPath + '/user/login',
  //登录
  getCheckList: rootPath + '/user/getCheckList',
  updateCheckList: rootPath + '/user/updateCheckList',
  leaverecord_add: rootPath + '/leaverecord/add',
  //增加离校记录
  leaverecord_query: rootPath + '/leaverecord/query',
  //查询离校记录
  leaverecord_modify: rootPath + '/leaverecord/modify',
  //修改离校记录
  leaverecord_delete: rootPath + '/leaverecord/delete',
  //删除离校记录
  inoutthing_query: rootPath + '/inoutthing/query',
  //查询进出记录
  inoutthing_add: rootPath + '/inoutthing/add',
  //增加进出记录
  inoutthing_modify: rootPath + '/inoutthing/modify',
  //修改进出记录
  inoutthing_delete: rootPath + '/inoutthing/delete',
  //删除进出记录
  lateback_add: rootPath + '/lateback/add',
  //增加晚归记录
  lateback_query: rootPath + '/lateback/query',
  //查询晚归记录
  lateback_modify: rootPath + '/lateback/modify',
  //修改晚归记录
  lateback_delete: rootPath + '/lateback/delete' //删除晚归记录

};
/* harmony default export */ __webpack_exports__["a"] = (apiObject);

/***/ }),

/***/ "./src/pages/service/httpservice.js":
/*!******************************************!*\
  !*** ./src/pages/service/httpservice.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_myproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.0@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);


/* unused harmony default export */ var _unused_webpack_default_export = ({
  request: function request(option) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request(Object(D_myproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_myproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, option), {}, {
      method: method,
      header: Object(D_myproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        'content-type': 'application/json'
      }, option.header)
    }));
  },
  get: function get(option) {
    return this.request(option, 'GET');
  }
});

/***/ }),

/***/ "./src/pages/service/index.js":
/*!************************************!*\
  !*** ./src/pages/service/index.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.0@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpservice */ "./src/pages/service/httpservice.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "./src/pages/service/request.js");



var service = {
  getFilmlist: function getFilmlist() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.request({
      url: 'http://127.0.0.1:5000/user/login',
      data: {
        'account': 'admin',
        'password': 'admin666'
      },
      method: 'GET'
    }); //   .then(res => console.log(res.data))
    //   return httpservice.get({
    //    //   url:'http://y-condor.com/article/list?page=1&size=3&Is_chinese=1',
    //       url: 'http://127.0.0.1:5000/user/login'
    // })
  }
}; // const data = {
//    account: 'admin',
//    password: 'admin666'
// }
// login(data)

/* harmony default export */ __webpack_exports__["a"] = (service);

/***/ }),

/***/ "./src/pages/service/request.js":
/*!**************************************!*\
  !*** ./src/pages/service/request.js ***!
  \**************************************/
/*! exports provided: getJSON, postJSON, register, login, getCheckList, updateCheckList, leaverecord_add, leaverecord_query, leaverecord_modify, leaverecord_delete, inoutthing_query, inoutthing_add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getJSON */
/* unused harmony export postJSON */
/* unused harmony export register */
/* unused harmony export login */
/* unused harmony export getCheckList */
/* unused harmony export updateCheckList */
/* unused harmony export leaverecord_add */
/* unused harmony export leaverecord_query */
/* unused harmony export leaverecord_modify */
/* unused harmony export leaverecord_delete */
/* unused harmony export inoutthing_query */
/* unused harmony export inoutthing_add */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.0@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/pages/service/api.js");


function getJSON(url, data) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.request({
    url: url,
    data: data,
    method: 'GET'
  }).then(function (res) {
    return console.log(res.data);
  });
}
function postJSON(url, data) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.request({
    url: url,
    data: data,
    method: 'POST'
  }).then(function (res) {
    return console.log(res.data);
  });
}
function register(data) {
  postJSON(apiObject.register, data);
}
function login(data) {
  getJSON(_api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].login, data);
}
function getCheckList() {
  getJSON(apiObject.getCheckList);
}
function updateCheckList() {
  getJSON(apiObject.updateCheckList);
}
function leaverecord_add() {
  getJSON(apiObject.leaverecord_add);
}
function leaverecord_query() {
  getJSON(apiObject.leaverecord_query);
}
function leaverecord_modify() {
  getJSON(apiObject.leaverecord_modify);
}
function leaverecord_delete() {
  getJSON(apiObject.leaverecord_delete);
}
function inoutthing_query() {
  getJSON(apiObject.inoutthing_query);
}
function inoutthing_add() {
  getJSON(apiObject.inoutthing_add);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map