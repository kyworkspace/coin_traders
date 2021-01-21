module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_main_MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/main/MainPage */ "./src/components/main/MainPage.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\pages\\index.jsx";



class IndexDocument extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_main_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IndexDocument);

/***/ }),

/***/ "./src/Api.js":
/*!********************!*\
  !*** ./src/Api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:4000/'
});
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./src/actions/searchFilterActions.js":
/*!********************************************!*\
  !*** ./src/actions/searchFilterActions.js ***!
  \********************************************/
/*! exports provided: SET_FILTER, setFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
const SET_FILTER = 'searchFilter/SET_FILTER';
function setFilter(params) {
  return {
    type: SET_FILTER,
    payload: {
      params
    }
  };
}

/***/ }),

/***/ "./src/actions/transactionPackActions.js":
/*!***********************************************!*\
  !*** ./src/actions/transactionPackActions.js ***!
  \***********************************************/
/*! exports provided: FETCH_TRANSACTION_LIST, CREATE_TRANSACTION, resetTransactionList, requestTransactionList, createTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRANSACTION_LIST", function() { return FETCH_TRANSACTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TRANSACTION", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTransactionList", function() { return resetTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTransactionList", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransaction", function() { return createTransaction; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./src/Api.js");
/* harmony import */ var _api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-redux-pack/createActions */ "./src/api-redux-pack/createActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';
const {
  collection,
  create,
  reset
} = Object(_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__["default"])('transactions');
const resetTransactionList = reset;
const PAGE_SIZE = 10; // export function requestTransactionList(params,_page=1){
//     return {
//         type : FETCH_TRANSACTION_LIST,
//         promise : Api.get('/transactions',{params:{...params,_page,_limit : PAGE_SIZE}}),
//         meta :{
//             pageNumber : _page,
//             pageSize : PAGE_SIZE,
//             notification : {
//                 success : "거래 목록을 최신정보로 업데이트 하였습니다.",
//                 error : '거래목록을 갱신하는 중에 문제가 발생하였습니다.'
//             }
//         }
//     }
// }
//API 호출 방식으로 교체

function requestTransactionList(params, _page = 1) {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: "거래 목록을 최신정보로 업데이트 하였습니다. TransactionPackAction",
      error: '거래목록을 갱신하는 중에 문제가 발생하였습니다.'
    }
  };
  return collection(_objectSpread(_objectSpread({}, params), {}, {
    _page,
    _limit: PAGE_SIZE
  }), meta);
} // export function createTransaction(data,onComplete){
//     return {
//         type : CREATE_TRANSACTION,
//         promise : Api.post('/transactions',data),
//         meta : {
//             onSuccess : onComplete,
//             notification : {
//                 success : '거래가 성공적으로 완료되었습니다.',
//             }
//         }
//     }
// }

function createTransaction(data, onComplete) {
  const meta = {
    onSuccess: onComplete,
    notification: {
      success: '거래가 성공적으로 완료되었습니다.'
    }
  };
  return create(data, {}, meta);
}

/***/ }),

/***/ "./src/api-redux-pack/actionTypes.js":
/*!*******************************************!*\
  !*** ./src/api-redux-pack/actionTypes.js ***!
  \*******************************************/
/*! exports provided: FETCH_LIST, FETCH, UPDATE, CREATE, RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LIST", function() { return FETCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE", function() { return CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
const FETCH_LIST = 'api-redux-pack/FETCH_LIST';
const FETCH = 'api-redux-pack/FETCH';
const UPDATE = 'api-redux-pack/UPDATE';
const CREATE = 'api-redux-pack/CREATE';
const RESET = 'api-redux-pack/RESET';

/***/ }),

/***/ "./src/api-redux-pack/createActions.js":
/*!*********************************************!*\
  !*** ./src/api-redux-pack/createActions.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/api-redux-pack/actionTypes.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api */ "./src/Api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ((resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LIST"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get(resourceName, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  member: (id, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${resourceName}/${id}`, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  create: (data, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post(resourceName, data, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${resourceName}/${id}`, data, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  reset: () => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET"],
    meta: {
      resourceName
    }
  })
}));

/***/ }),

/***/ "./src/api-redux-pack/createSelectors.js":
/*!***********************************************!*\
  !*** ./src/api-redux-pack/createSelectors.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/api-redux-pack/actionTypes.js");


function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];

  const entitiesSelector = state => resourceSelector(state).entities;

  const collectionSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([resourceSelector], ({
    ids,
    entities
  }) => ids.map(id => entities[id]));

  const loadingStateSelector = state => resourceSelector(state).loadingState;

  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]}/${resourceName}`];

  const createLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"]}/${resourceName}`];

  const updateLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]}/${resourceName}`];

  const memberLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"]}/${resourceName}`];

  const collectionErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]}/${resourceName}`];

  const createErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"]}/${resourceName}`];

  const updateErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]}/${resourceName}`];

  const memberErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"]}/${resourceName}`];

  const paginationSelector = state => {
    const {
      pagination
    } = resourceSelector(state);
    return {
      number: pagination.number || 0,
      size: pagination.size
    };
  };

  return {
    entitiesSelector,
    collectionSelector,
    collectionLoadingStateSelector,
    createLoadingStateSelector,
    updateLoadingStateSelector,
    memberLoadingStateSelector,
    paginationSelector
  };
}

/***/ }),

/***/ "./src/components/main/CoinDashlet.jsx":
/*!*********************************************!*\
  !*** ./src/components/main/CoinDashlet.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Heading */ "./src/ui/Heading.jsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Button */ "./src/ui/Button.jsx");
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Card */ "./src/ui/Card.jsx");
/* harmony import */ var _ui_InlineList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/InlineList */ "./src/ui/InlineList.jsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text.jsx");
/* harmony import */ var _ui_Modal_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/Modal/context */ "./src/ui/Modal/context.js");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/modals */ "./src/constants/modals.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\CoinDashlet.jsx";
//이건 코인별로 나오는 카드 메뉴들






 //모달 호출




class CoinDashlet extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      name,
      priceLabel
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Modal_context__WEBPACK_IMPORTED_MODULE_8__["Consumer"], {
      children: ({
        openModal
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        vertical: 4,
        horizontal: 4,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
          level: 4,
          children: [name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: priceLabel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_InlineList__WEBPACK_IMPORTED_MODULE_6__["default"], {
          spacingBetween: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            primary: true,
            small: true,
            onPress: () => openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_9__["TRADE_COIN_MODAL"], {
              type: "buy",
              name,
              price: priceLabel
            }),
            children: "\uB9E4\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            small: true,
            onPress: () => openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_9__["TRADE_COIN_MODAL"], {
              type: "sell",
              name,
              price: priceLabel
            }),
            children: "\uB9E4\uC218"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }

}

CoinDashlet.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  priceLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CoinDashlet);

/***/ }),

/***/ "./src/components/main/CoinOverview.jsx":
/*!**********************************************!*\
  !*** ./src/components/main/CoinOverview.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Heading */ "./src/ui/Heading.jsx");
/* harmony import */ var _ui_InlineList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/InlineList */ "./src/ui/InlineList.jsx");
/* harmony import */ var _CoinDashlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CoinDashlet */ "./src/components/main/CoinDashlet.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\CoinOverview.jsx";
//각 코인을 나타내는 메뉴, 상단 메뉴





class CoinOverview extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: 3,
        children: "\uCF54\uC778 \uB3D9\uD5A5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_InlineList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CoinDashlet__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "\uBE44\uD2B8\uCF54\uC778",
          priceLabel: "4,216,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CoinDashlet__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "\uC774\uB354\uB9AC\uC6C0",
          priceLabel: "216,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CoinDashlet__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "\uC0BC\uC131\uC804\uC790",
          priceLabel: "88,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CoinDashlet__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "\uC0BC\uC131\uC804\uC790\uC6B0",
          priceLabel: "75,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CoinOverview);

/***/ }),

/***/ "./src/components/main/MainPage.jsx":
/*!******************************************!*\
  !*** ./src/components/main/MainPage.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CoinOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoinOverview */ "./src/components/main/CoinOverview.jsx");
/* harmony import */ var _containers_main_TransactionListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/main/TransactionListContainer */ "./src/containers/main/TransactionListContainer.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\MainPage.jsx";


 //import NotificationContainer from "../../containers/main/NotificationContainer";

class MainPage extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CoinOverview__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_main_TransactionListContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/components/main/TransactionList.jsx":
/*!*************************************************!*\
  !*** ./src/components/main/TransactionList.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Heading */ "./src/ui/Heading.jsx");
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Card */ "./src/ui/Card.jsx");
/* harmony import */ var _containers_main_TransactionSearchFilterContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/main/TransactionSearchFilterContainer */ "./src/containers/main/TransactionSearchFilterContainer.jsx");
/* harmony import */ var _TransactionTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionTable */ "./src/components/main/TransactionTable.jsx");
/* harmony import */ var _containers_main_TransactionPaginationContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/main/TransactionPaginationContainer */ "./src/containers/main/TransactionPaginationContainer.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\TransactionList.jsx";
//검색 및 결과 목록 화면 구성
 //import Api from "../../Api";







class TransactionList extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {// Api.get("/transactions").then(({ data }) =>
    //   this.props.setTransactionList(data)
    // );
    //this.props.requestTransactionList();
    //함수형태로 가져오는 것이기 때문에 여기서 콜백
    // routerEffect 미들웨어에서 자동으로 거래목록 요청하기 때문에 필요없음
  }

  render() {
    const {
      transactions,
      loading
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
        level: 3,
        children: "\uAC70\uB798\uD604\uD669"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        vertical: 4,
        horizontal: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_main_TransactionSearchFilterContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TransactionTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
          transactions: transactions,
          isLoading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_main_TransactionPaginationContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TransactionList);

/***/ }),

/***/ "./src/components/main/TransactionPagination.jsx":
/*!*******************************************************!*\
  !*** ./src/components/main/TransactionPagination.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_InlineList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/InlineList */ "./src/ui/InlineList.jsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Button */ "./src/ui/Button.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\TransactionPagination.jsx";





class TransactionPagination extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleNextPress = this.handleNextPress.bind(this);
    this.handlePrevPress = this.handlePrevPress.bind(this);
  }

  handleNextPress() {
    const {
      requestTransactionList,
      pageNumber,
      searchParams
    } = this.props;
    requestTransactionList(searchParams, pageNumber + 1);
  }

  handlePrevPress() {
    const {
      requestTransactionList,
      pageNumber,
      searchParams
    } = this.props;
    requestTransactionList(searchParams, pageNumber - 1);
  }

  render() {
    const {
      loading,
      pageNumber,
      hasNext
    } = this.props;
    const prevDisabled = loading || pageNumber <= 1;
    const nextDiasbled = loading || !hasNext;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_InlineList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "right",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        secondary: true,
        disabled: prevDisabled,
        onPress: this.handlePrevPress,
        children: "\uC774\uC804"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        secondary: true,
        disabled: nextDiasbled,
        onPress: this.handleNextPress,
        children: "\uB2E4\uC74C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this);
  }

}

TransactionPagination.propTypes = {
  hasNext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  pageNumber: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  requestTransactionList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TransactionPagination);

/***/ }),

/***/ "./src/components/main/TransactionSearchFilter.jsx":
/*!*********************************************************!*\
  !*** ./src/components/main/TransactionSearchFilter.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_InlineList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/InlineList */ "./src/ui/InlineList.jsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Button */ "./src/ui/Button.jsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text.jsx");
/* harmony import */ var _ui_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Input */ "./src/ui/Input.jsx");
/* harmony import */ var _ui_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/Form */ "./src/ui/Form.jsx");
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/Select */ "./src/ui/Select.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\TransactionSearchFilter.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//검색필터
//폼에서 제공받은 프로바이더 를 이용해서 onChange, value  콜백 받음








 //import Api from "../../Api";

class TransactionSearchFilter extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(params) {
    //const { requestTransactionList,setFilter } = this.props; //검색 주소값을 넘겨주기 위해 변경
    const {
      setFilter,
      history
    } = this.props; // Api.get("/transactions", { params }).then(({ data }) =>
    //   setTransactionList(data)
    // );

    const cleanedParams = Object.entries(params).filter(([key, value]) => value !== "").reduce((obj, [key, value]) => _objectSpread(_objectSpread({}, obj), {}, {
      [key]: value
    }), {}); // requestTransactionList(cleanedParams);
    // setFilter(cleanedParams);

    const queryString = Object.entries(cleanedParams).map(([key, value]) => `${key}=${value}`) //['code=BTX', 'price=100']
    .join('&'); //'code=BTX&price=100'

    history.push(`/?${queryString}`);
  }

  render() {
    const {
      initValues
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onSubmit: this.handleSubmit,
      initValues: initValues,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Consumer, {
        children: ({
          onChange,
          values
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_InlineList__WEBPACK_IMPORTED_MODULE_3__["default"], {
          spacingBetween: 2,
          verticalAlign: "bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
            xlarge: true,
            bold: true,
            children: "\uAC80\uC0C9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: "code",
            label: "\uCF54\uC778 \uCF54\uB4DC",
            onChange: onChange,
            value: values["code"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Select__WEBPACK_IMPORTED_MODULE_8__["Option"], {
              label: "\uC120\uD0DD\uD574\uC8FC\uC138\uC694",
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Select__WEBPACK_IMPORTED_MODULE_8__["Option"], {
              label: "\uBE44\uD2B8\uCF54\uC778(BTX)",
              value: "BTX"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Select__WEBPACK_IMPORTED_MODULE_8__["Option"], {
              label: "\uC774\uB354\uB9AC\uC6C0(ETH)",
              value: "ETH"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Select__WEBPACK_IMPORTED_MODULE_8__["Option"], {
              label: "\uC0BC\uC131\uC804\uC790",
              value: "samsung"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Select__WEBPACK_IMPORTED_MODULE_8__["Option"], {
              label: "\uC0BC\uC131\uC804\uC790\uC6B0",
              value: "samsungWoo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "currentPrice_gte",
            label: "\uCD5C\uC18C\uAC70\uB798\uAC00",
            onChange: onChange,
            value: values["currentPrice_gte"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "currentPrice_lte",
            label: "\uCD5C\uB300\uAC70\uB798\uAC00",
            onChange: onChange,
            value: values["currentPrice_lte"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: "submit",
            primary: true,
            children: "\uAC80\uC0C9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this);
  }

}

TransactionSearchFilter.defaultProps = {
  onChange: () => ({})
};
TransactionSearchFilter.propTypes = {
  requestTransactionList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  setFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(TransactionSearchFilter));

/***/ }),

/***/ "./src/components/main/TransactionTable.jsx":
/*!**************************************************!*\
  !*** ./src/components/main/TransactionTable.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Table */ "./src/ui/Table.jsx");
/* harmony import */ var _ui_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/TableRow */ "./src/ui/TableRow.jsx");
/* harmony import */ var _ui_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/TableCell */ "./src/ui/TableCell.jsx");
/* harmony import */ var _ui_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/TableHead */ "./src/ui/TableHead.jsx");
/* harmony import */ var _ui_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/TableBody */ "./src/ui/TableBody.jsx");
/* harmony import */ var _withLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../withLoading */ "./src/components/withLoading.jsx");
/* harmony import */ var _ui_Spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/Spacing */ "./src/ui/Spacing.jsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\TransactionTable.jsx";
// 검색 목록
//데이터 테이블 컴포넌트 사용, 프로퍼티에는 배열형 값이 들어있으므로 map() 함수를 이용해서 출력











const LoadingMessage = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
  vertical: 4,
  horizontal: 2,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
    large: true,
    children: "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uB4E4\uC774\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 3
}, undefined);

class TransactionTable extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      transactions
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            align: "left",
            children: "\uCF54\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            align: "center",
            children: "\uC2DC\uAC00\uCD1D\uC561"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            align: "center",
            children: "\uD604\uC7AC\uC2DC\uC138"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            align: "right",
            children: "\uAC70\uB798 \uC2DC\uAC04"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: transactions.map(({
          id,
          name,
          totalPrice,
          currentPrice,
          dateTime
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            align: "center",
            children: totalPrice
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            align: "center",
            children: currentPrice
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
            align: "right",
            children: dateTime
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }, this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this);
  }

}

TransactionTable.propTypes = {
  transactions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({// name: PropTypes.string,
    // id: PropTypes.number,
    // totalPrice: PropTypes.number,
    //currentPrice: PropTypes.number,
    // dateTime: PropTypes.string,
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withLoading__WEBPACK_IMPORTED_MODULE_8__["default"])(LoadingMessage)(TransactionTable));

/***/ }),

/***/ "./src/components/withLoading.jsx":
/*!****************************************!*\
  !*** ./src/components/withLoading.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\withLoading.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((loadingMessage = '로딩중') => WrappedComponent => {
  const {
    displayName,
    name: componentName
  } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoading(_ref) {
    let {
      isLoading
    } = _ref,
        props = _objectWithoutProperties(_ref, ["isLoading"]);

    if (isLoading) {
      return loadingMessage;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, this);
  }

  WithLoading.displayName = `withLoading(${wrappedComponentName})`;
  return WithLoading;
});

/***/ }),

/***/ "./src/constants/modals.js":
/*!*********************************!*\
  !*** ./src/constants/modals.js ***!
  \*********************************/
/*! exports provided: TRADE_COIN_MODAL, REGISTER_USER_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_COIN_MODAL", function() { return TRADE_COIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_MODAL", function() { return REGISTER_USER_MODAL; });
const TRADE_COIN_MODAL = 'modal/TRADE_COIN_MODAL';
const REGISTER_USER_MODAL = 'modal/REGISTER_USER_MODAL';

/***/ }),

/***/ "./src/containers/main/TransactionListContainer.jsx":
/*!**********************************************************!*\
  !*** ./src/containers/main/TransactionListContainer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionList */ "./src/components/main/TransactionList.jsx");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/actions/transactionPackActions.js");
/* harmony import */ var _selectors_transactionSelectors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/transactionSelectors.js */ "./src/selectors/transactionSelectors.js");

 //import { setTransactionList } from "../../actions/transactionActions";
//import { requestTransactionList } from "../../actions/transactionActions";




const mapStateToProps = state => {
  // const { ids, entities,loadingState } = state.transactions;
  // const loading = loadingState[FETCH_TRANSACTION_LIST];
  // const transactions = ids.map((id) => entities[id]);
  // return {transactions,loading}
  // 셀렉터에 모든 내부 기능을 넘김
  return {
    transactions: Object(_selectors_transactionSelectors_js__WEBPACK_IMPORTED_MODULE_3__["transactionListSelector"])(state),
    loading: Object(_selectors_transactionSelectors_js__WEBPACK_IMPORTED_MODULE_3__["transactionListLoadingStateSelector"])(state)
  };
};

const mapDisPatchToProps = {
  requestTransactionList: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["requestTransactionList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDisPatchToProps)(_components_main_TransactionList__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/containers/main/TransactionPaginationContainer.jsx":
/*!****************************************************************!*\
  !*** ./src/containers/main/TransactionPaginationContainer.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionPagination */ "./src/components/main/TransactionPagination.jsx");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/actions/transactionPackActions.js");
/* harmony import */ var _selectors_transactionSelectors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/transactionSelectors.js */ "./src/selectors/transactionSelectors.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);






const mapStateToProps = state => {
  // const {pagination,loadingState,ids} = state.transactions;
  // const { number , size } = pagination;
  // const loading = loadingState[FETCH_TRANSACTION_LIST]; //로딩 구분 & 분리
  // return {
  //     searchParams : state.searchFilter.params,
  //     pageNumber : number || 1,
  //     hasNext : ids.length === size,
  //     //결과 목록의 개수가 페이지 크기가 같을 경우 다음페이지 존재한다고 가정,
  //     loading,
  // }
  const {
    pagination,
    ids
  } = state.transactions;
  const {
    number,
    size
  } = pagination;
  return {
    searchParams: state.searchFilter.params,
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading: Object(_selectors_transactionSelectors_js__WEBPACK_IMPORTED_MODULE_3__["transactionListLoadingStateSelector"])(state)
  };
};

const mapDispatchToProps = {
  requestTransactionList: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["requestTransactionList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_main_TransactionPagination__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/containers/main/TransactionSearchFilterContainer.jsx":
/*!******************************************************************!*\
  !*** ./src/containers/main/TransactionSearchFilterContainer.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionSearchFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionSearchFilter */ "./src/components/main/TransactionSearchFilter.jsx");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/actions/transactionPackActions.js");
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/searchFilterActions */ "./src/actions/searchFilterActions.js");

 // import { setTransactionList } from "../../actions/transactionActions";
//import { requestTransactionList } from "../../actions/transactionActions";




const mapStateToProps = state => ({
  initValues: state.searchFilter.params
}); // export default connect(null, { requestTransactionList,setFilter })(
//   TransactionSearchFilter
// );


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_main_TransactionSearchFilter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/selectors/transactionSelectors.js":
/*!***********************************************!*\
  !*** ./src/selectors/transactionSelectors.js ***!
  \***********************************************/
/*! exports provided: transactionsSelector, transactionListSelector, transactionListLoadingStateSelector, transactionCreateLoadingStateSelector, paginationSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionsSelector", function() { return transactionsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionListSelector", function() { return transactionListSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionListLoadingStateSelector", function() { return transactionListLoadingStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionCreateLoadingStateSelector", function() { return transactionCreateLoadingStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginationSelector", function() { return paginationSelector; });
/* harmony import */ var _api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-redux-pack/createSelectors */ "./src/api-redux-pack/createSelectors.js");
// import {
// FETCH_TRANSACTION_LIST,
// CREATE_TRANSACTION,
// } from '../actions/transactionPackActions';
// import {createSelector} from 'reselect'
// export const transactionsSelector = state => state.transactions; 
// //스토어데이터에서 거래 정보를 추출하는 셀렉터
// // export const transactionListSelector = (state) =>{
// //             //그래프 DB 구조의 거래목록자료를 원본배열로 변환하는 셀렉터.
// //             const {ids,entities} = transactionsSelector(state);
// //             return ids.map((id)=>entities[id]);
// //         }
// export const transactionListSelector = createSelector(
//     [transactionsSelector],transactions=>{
//         const {ids,entities} = transactions;
//         return ids.map(id=>entities[id]);
//     }
// )
// //반복된 구조를 반환하는 경우 reselector에 저장시켜둬서 언제든 빠르게 찾아낼수 있다.
// export const loadingStateSelector = state => transactionsSelector(state).loadingState;
// //거래 정보의 전체 로딩 정보 객체를 추출하는 셀렉터
// export const transactionListLoadingStateSelector = state => loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
// //전체 거래 목록요청의 로딩상태만 추출하는 셀렉터
// export const transactionCreateLoadingStateSelector = state => loadingStateSelector(state)[CREATE_TRANSACTION];
// //거래 생성 요청의 로딩상태만을 추출하는 셀렉터

const {
  resourceSelector: transactionsSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector
} = Object(_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__["default"])('transactions');

/***/ }),

/***/ "./src/ui/Button.jsx":
/*!***************************!*\
  !*** ./src/ui/Button.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Button.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Button extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      type,
      onPress
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, disabled && styles.disabled)), {}, {
      disabled: disabled,
      onClick: onPress,
      type: type,
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this);
  }

}

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  xsmall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  xlarge: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onPress: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  color,
  size,
  unit,
  depth,
  fontWeight
}) => ({
  default: _objectSpread(_objectSpread({}, depth.level1), {}, {
    border: 1,
    borderStyle: "solid",
    borderColor: color.default,
    borderRadius: unit,
    color: color.default,
    fontSize: size.md,
    fontWeight: fontWeight.bold,
    padding: unit * 2,
    paddingLeft: unit * 4,
    paddingRight: unit * 4,
    outline: 0,
    cursor: "pointer",
    ":hover": {
      backgroundColor: color.grayLight
    },
    ":focus": {
      boxShadow: "0 0 0px 2px rgba(0, 0, 0, 0.3)"
    }
  }),
  xlarge: {
    fontSize: size.xg,
    padding: unit * 2.5
  },
  large: {
    fontSize: size.lg,
    padding: unit * 2.5
  },
  small: {
    fontSize: size.sm,
    padding: unit * 1.5
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
    ":hover": {
      backgroundColor: color.primaryDark
    }
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary
  },
  disabled: {
    borderColor: color.grayDark,
    color: color.grayLight,
    cursor: "default",
    opacity: 0.5,
    backgroundColor: color.gray,
    ":hover": {
      backgroundColor: color.gray
    }
  }
}))(Button));

/***/ }),

/***/ "./src/ui/Card.jsx":
/*!*************************!*\
  !*** ./src/ui/Card.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spacing */ "./src/ui/Spacing.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Card.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






class Card extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const _this$props = this.props,
          {
      children,
      styles
    } = _this$props,
          spacingProps = _objectWithoutProperties(_this$props, ["children", "styles"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.wrapper)), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, spacingProps), {}, {
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

}

Card.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _Spacing__WEBPACK_IMPORTED_MODULE_4__["propTypes"]), _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  depth,
  unit,
  color
}) => ({
  wrapper: _objectSpread(_objectSpread({}, depth.level1), {}, {
    borderRadius: unit,
    backgroundColor: color.white,
    display: "flex",
    overflow: "hidden",
    marginBottom: unit * 4
  })
}))(Card));

/***/ }),

/***/ "./src/ui/Form.jsx":
/*!*************************!*\
  !*** ./src/ui/Form.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Form.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Provider,
  Consumer
} = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});

class FormProvider extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  static getDerivedStateFromProps({
    initValues
  }, prevState) {
    const values = initValues !== prevState.initValues ? initValues : prevState.values;
    return {
      initValues,
      values,
      error: {}
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {
      values,
      error
    } = this.state;
    e.preventDefault(); //뭐임?

    if (Object.values(error).length === 0) {
      this.props.onSubmit(values);
    }
  }

  onChange(name, updatedValue) {
    this.validate(this.state.values);
    this.setState(({
      values
    }) => ({
      values: _objectSpread(_objectSpread({}, values), {}, {
        [name]: updatedValue
      })
    }));
  }

  reset() {
    this.setState({
      values: {}
    });
  }

  validate(values) {
    const {
      validate
    } = this.props;

    if (!validate) {
      return;
    }

    const errors = this.props.validate(values);
    this.setState({
      errors
    });
  }

  render() {
    const {
      values,
      errors
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Provider, {
      value: {
        errors,
        values,
        onChange: this.onChange,
        reset: this.reset
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: this.handleSubmit,
        children: this.props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this);
  }

}

_defineProperty(FormProvider, "Consumer", Consumer);

FormProvider.propTypes = {
  validate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
  onChange: () => ({}),
  handleSubmit: () => ({}),
  reset: () => ({})
};
/* harmony default export */ __webpack_exports__["default"] = (FormProvider);

/***/ }),

/***/ "./src/ui/Heading.jsx":
/*!****************************!*\
  !*** ./src/ui/Heading.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Heading.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

class Heading extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      children,
      inverse,
      level,
      styles
    } = this.props;
    const HeadingTag = headingTags[level - 1];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeadingTag, _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.default, styles[`level${level}`], inverse && styles.inverse)), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }

}

Heading.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  level: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Heading.defaultProps = {
  level: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  color,
  fontWeight,
  size,
  lineHeight,
  unit
}) => ({
  default: {
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.bold
  },
  inverse: {
    color: color.white
  },
  level1: {
    fontSize: size.h1,
    marginTop: unit * 2,
    marginBottom: unit * 4
  },
  level2: {
    fontSize: size.h2,
    marginTop: unit * 2,
    marginBottom: unit * 4
  },
  level3: {
    fontSize: size.h3,
    marginTop: unit * 1.5,
    marginBottom: unit * 3
  },
  level4: {
    fontSize: size.xg,
    marginTop: unit,
    marginBottom: unit * 2
  },
  level5: {
    fontSize: size.md,
    marginTop: unit,
    marginBottom: unit * 2
  },
  level6: {
    fontSize: size.md,
    marginTop: unit,
    marginBottom: unit
  }
}))(Heading));

/***/ }),

/***/ "./src/ui/InlineList.jsx":
/*!*******************************!*\
  !*** ./src/ui/InlineList.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Theme */ "./src/ui/Theme.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\InlineList.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class InlineList extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      align,
      children,
      styles,
      spacingBetween,
      verticalAlign
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.wrapper, align === "center" && styles.alignCenter, align === "right" && styles.alignRight, verticalAlign === "top" && styles.verticalAlignTop, verticalAlign === "bottom" && styles.verticalAlignBottom)), {}, {
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])({
        marginRight: spacingBetween * _Theme__WEBPACK_IMPORTED_MODULE_4__["unit"]
      })), {}, {
        children: child
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  }

}

InlineList.propTypes = _objectSpread(_objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["left", "center", "right"]),
  verticalAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "middle", "bottom"]),
  spacingBetween: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
});
InlineList.defaultProps = {
  spacingBetween: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(() => ({
  wrapper: {
    display: "flex",
    //가로배치 속성적용
    flexDirection: "row",
    //가로배치 속성적용
    flexWrap: "wrap",
    //화면 밖의 하위요소를 아래로 밀어 배치
    justifyContent: "flex-start",
    //하위요소를 왼쪽부터 배치
    alignItems: "center" //하위요소를 상하 가운데 정렬

  },
  alignCenter: {
    justifyContent: "center"
  },
  alignRight: {
    justifyContent: "flex-end" //하위요소 오른쪽 정렬

  },
  verticalAlignTop: {
    alignItems: "flex-start" //하위내용을 위로 정렬

  },
  verticalAlignBottom: {
    //하위 요소의 내용을 아래로 정렬
    alignItems: "flex-end"
  }
}))(InlineList));

/***/ }),

/***/ "./src/ui/Input.jsx":
/*!**************************!*\
  !*** ./src/ui/Input.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Input.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Input extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {
      name,
      onChange
    } = this.props;

    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const {
      errorMessage,
      label,
      value,
      name,
      type,
      styles,
      large,
      xlarge,
      small,
      xsmall
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.wrapper)), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", _objectSpread(_objectSpread({
        htmlFor: `input_${name}`
      }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.label, errorMessage && styles.errorLabel)), {}, {
        children: errorMessage || label
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.input, errorMessage && styles.error, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge)), {}, {
        id: `input_${name}`,
        ref: this.setRef,
        type: type,
        onChange: this.handleChange,
        value: value
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this);
  }

}

Input.propTypes = _objectSpread(_objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["text", "number", "price"]),
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});
Input.defaultProps = {
  onChange: () => {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  depth,
  unit,
  color,
  size,
  lineHeight
}) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: "relative"
  },
  label: {
    display: "block",
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: "pointer"
  },
  input: {
    marginTop: 2,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    padding: unit * 1.5,
    border: 1,
    borderColor: color.primary,
    borderStyle: "solid",
    borderRadius: 4,
    outline: 0,
    ":focus": {
      boxShadow: "0 0 0px 2px rgba(0, 0, 0, 0.3)"
    }
  },
  xlarge: {
    fontSize: size.xg
  },
  large: {
    fontSize: size.lg
  },
  small: {
    fontSize: size.sm,
    padding: unit
  },
  errorLabel: {
    color: color.error
  },
  error: {
    borderColor: color.error
  }
}))(Input));

/***/ }),

/***/ "./src/ui/Modal/context.js":
/*!*********************************!*\
  !*** ./src/ui/Modal/context.js ***!
  \*********************************/
/*! exports provided: Provider, Consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Provider,
  Consumer
} = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

/***/ }),

/***/ "./src/ui/Option.jsx":
/*!***************************!*\
  !*** ./src/ui/Option.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Option.jsx";



class Option extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      value,
      label,
      disabled
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: value,
      disabled: disabled,
      children: label || value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  }

}

Option.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./src/ui/Select.jsx":
/*!***************************!*\
  !*** ./src/ui/Select.jsx ***!
  \***************************/
/*! exports provided: Option, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Option */ "./src/ui/Option.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_4__["default"]; });


var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Select.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Select 컴포넌트는 대부분 Option 컴포넌트를 포함하고 있으므로,
// Select 컴포넌트를 임포트할때
// Option 컴포넌트를 함께 참조할수 있도록 Option 컴포넌트를 익스포트함

class Select extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      focused: false
    };
  }

  handleFocus() {
    this.setState({
      focused: true
    });
  }

  handleBlur() {
    this.setState({
      focused: false
    });
  }

  handleChange(e) {
    const {
      name,
      onChange
    } = this.props;

    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const {
      children,
      disabled,
      errorMessage,
      label,
      value,
      name,
      styles,
      large,
      xlarge,
      small,
      xsmall
    } = this.props;
    const {
      focused
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.wrapper)), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", _objectSpread(_objectSpread({
        htmlFor: `input_${name}`
      }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.label, errorMessage && styles.errorLabel)), {}, {
        children: errorMessage || label
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.placeholder, xsmall && styles.xsmallPadding, small && styles.smallPadding, large && styles.largePadding, xlarge && styles.xlargePadding, focused && styles.focus, errorMessage && styles.error)), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.select, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge)), {}, {
          disabled: disabled,
          id: `input_${name}`,
          ref: this.setRef,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          value: value,
          children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
            disabled
          }))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this);
  }

}

Select.propTypes = _objectSpread(_objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});
Select.defaultProps = {
  onChange: () => {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  depth,
  unit,
  color,
  size,
  lineHeight
}) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: "relative"
  },
  label: {
    display: "block",
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: "pointer"
  },
  placeholder: {
    marginTop: 2,
    border: 1,
    borderColor: color.primary,
    borderRadius: 4,
    padding: unit * 1.5
  },
  focus: {
    boxShadow: "0 0 0px 2px rgba(0, 0, 0, 0.3)"
  },
  xlargePadding: {
    padding: unit * 2
  },
  largePadding: {
    padding: unit * 2
  },
  smallPadding: {
    padding: unit - 1
  },
  select: {
    fontSize: size.md,
    lineHeight: lineHeight.md,
    backgroundColor: color.white,
    border: 0,
    outline: 0,
    width: "100%"
  },
  xlarge: {
    fontSize: size.xg
  },
  large: {
    fontSize: size.lg
  },
  small: {
    fontSize: size.sm
  },
  errorLabel: {
    color: color.error
  },
  error: {
    borderColor: color.error
  }
}))(Select));

/***/ }),

/***/ "./src/ui/Spacing.jsx":
/*!****************************!*\
  !*** ./src/ui/Spacing.jsx ***!
  \****************************/
/*! exports provided: propTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Theme */ "./src/ui/Theme.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Spacing.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const propTypes = {
  //이 값으로 공간 너비 계산
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

class Spacing extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      children,
      top,
      bottom,
      left,
      right,
      vertical,
      horizontal
    } = this.props;
    const computedTop = top ? top : vertical;
    const computedBottom = bottom ? bottom : vertical;
    const computedLeft = left ? left : horizontal;
    const computedRight = right ? right : horizontal;

    const computedStyles = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
      flex: 1
    }, computedTop && {
      marginTop: computedTop * _Theme__WEBPACK_IMPORTED_MODULE_4__["unit"]
    }), computedBottom && {
      marginBottom: computedBottom * _Theme__WEBPACK_IMPORTED_MODULE_4__["unit"]
    }), computedLeft && {
      marginLeft: computedLeft * _Theme__WEBPACK_IMPORTED_MODULE_4__["unit"]
    }), computedRight && {
      marginRight: computedRight * _Theme__WEBPACK_IMPORTED_MODULE_4__["unit"]
    });

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(computedStyles)), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }, this);
  }

}

Spacing.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Spacing);

/***/ }),

/***/ "./src/ui/Table.jsx":
/*!**************************!*\
  !*** ./src/ui/Table.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Table.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Table extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      styles,
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.table)), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, this);
  }

}

Table.propTypes = _objectSpread(_objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  color,
  unit
}) => ({
  table: {
    borderCollapse: "collapse",
    width: "100%"
  }
}))(Table));

/***/ }),

/***/ "./src/ui/TableBody.jsx":
/*!******************************!*\
  !*** ./src/ui/TableBody.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\TableBody.jsx";



class TableBody extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  //Head와 유사한 방식으로 자식프로퍼티를 사용함
  render() {
    const {
      children
    } = this.props;
    const {
      length
    } = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(children);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, (child, index) => {
        const baseline = index < length - 1 ? true : false;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
          baseline
        });
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this) //마지막을 제외한 행은 밑줄을 표시하도록
    ;
  }

}

TableBody.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ }),

/***/ "./src/ui/TableCell.jsx":
/*!******************************!*\
  !*** ./src/ui/TableCell.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\TableCell.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class TableCell extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      align,
      baseline,
      styles,
      children,
      isHeader
    } = this.props;
    const Tag = isHeader ? "th" : "td";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tag, _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.cell, isHeader && styles.header, !isHeader && baseline && styles.baseline, align === "center" && styles.alignCenter, align === "right" && styles.alignRight)), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

}

TableCell.propTypes = _objectSpread(_objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["left", "center", "right"]),
  baseline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});
TableCell.defaultProps = {
  baseline: true,
  isHeader: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  color,
  unit
}) => ({
  cell: {
    paddingTop: unit * 4,
    paddingBottom: unit * 4,
    paddingRight: unit * 8,
    paddingLeft: unit * 8,
    backgroundColor: color.white,
    textAlign: "left"
  },
  header: {
    backgroundColor: color.primary,
    color: color.white
  },
  baseline: {
    borderBottom: `1px solid ${color.border}`
  },
  alignCenter: {
    textAlign: "center"
  },
  alignRight: {
    textAlign: "right"
  }
}))(TableCell));

/***/ }),

/***/ "./src/ui/TableHead.jsx":
/*!******************************!*\
  !*** ./src/ui/TableHead.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\TableHead.jsx";



class TableHead extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  // 자식 프로퍼티의 값은 JSX 노트 형태 이므로 자바스크립트의 map() 함수가 아니라 리액트에서 제공하는
  // React.Children.map() 함수를 사용해야함. 해당 함수는 자식 프로퍼티에 포함된 JSX의 컴포넌트 엘리먼트를
  // 배열 처럼 취급함. 또한 React.cloneElement() 함수를 사용하여 각각의 자식 컴포넌트에 추가 프로퍼티를 전달함
  // 해당 함수는 JSX 노드를 복사함 다음 특정 프로퍼티를 추가함
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
        isHeader: true
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }

} //TableHeader 컴포넌트이기 때문에 각 노드에 isHeader 프로퍼티를 추가해줌


TableHead.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (TableHead);

/***/ }),

/***/ "./src/ui/TableRow.jsx":
/*!*****************************!*\
  !*** ./src/ui/TableRow.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\TableRow.jsx";



class TableRow extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      children,
      isHeader,
      baseline
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
        baseline,
        isHeader
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  }

}

TableRow.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  baseline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ }),

/***/ "./src/ui/Text.jsx":
/*!*************************!*\
  !*** ./src/ui/Text.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/ui/withStyles.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Text.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Text extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      children,
      bold,
      light,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      inverse
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse)), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this);
  }

}

Text.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  bold: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  light: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  xsmall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  xlarge: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  color,
  fontWeight,
  size,
  lineHeight
}) => ({
  default: {
    color: color.default,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    fontWeight: fontWeight.normal
  },
  xlarge: {
    fontSize: size.xg,
    lineHeight: lineHeight.xg
  },
  large: {
    fontSize: size.lg,
    lineHeight: lineHeight.lg
  },
  small: {
    fontSize: size.sm,
    lineHeight: lineHeight.sm
  },
  xsmall: {
    fontSize: size.xs,
    lineHeight: lineHeight.xs
  },
  primary: {
    color: color.primary
  },
  secondary: {
    color: color.secondary
  },
  light: {
    fontWeight: fontWeight.light
  },
  bold: {
    fontWeight: fontWeight.bold
  },
  inverse: {
    color: color.white
  }
}))(Text));

/***/ }),

/***/ "./src/ui/Theme.js":
/*!*************************!*\
  !*** ./src/ui/Theme.js ***!
  \*************************/
/*! exports provided: LARGE_AND_ABOVE, unit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARGE_AND_ABOVE", function() { return LARGE_AND_ABOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
};
const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327
};
const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: '@media print'
};
const unit = 4;
/* harmony default export */ __webpack_exports__["default"] = ({
  // 색상
  color: {
    primary: '#2196F3',
    // 주 색상
    primaryDark: '#1976D2',
    secondary: '#009688',
    // 부 색상
    secondaryDark: '#00796b',
    white: '#FFFFFF',
    gray: '#9e9e9e',
    grayLight: '#eeeeee',
    grayDark: '#616161',
    border: 'rgba(0, 0, 0, .15)',
    default: '#333333',
    // 기본 문자 색상
    error: '#e51c23' // 오류 색상

  },
  // 폰트 사이즈
  size: {
    h1: 48,
    h2: 36,
    h3: 28,
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10
  },
  lineHeight: {
    xg: 1.6,
    lg: 1.6,
    md: 1.5,
    sm: 1.4,
    xs: 1.4
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    light: 300
  },
  depth: {
    level1: {
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)'
    },
    level2: {
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)'
    },
    level3: {
      boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)'
    }
  },
  // 길이 단위
  unit,
  // 반응형 미디어 속성
  responsive
});

/***/ }),

/***/ "./src/ui/withStyles.js":
/*!******************************!*\
  !*** ./src/ui/withStyles.js ***!
  \******************************/
/*! exports provided: css, withStyles, withStylesPropTypes, ThemedStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-with-styles/lib/ThemedStyleSheet */ "react-with-styles/lib/ThemedStyleSheet");
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ThemedStyleSheet", function() { return react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-with-styles-interface-aphrodite */ "react-with-styles-interface-aphrodite");
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-with-styles */ "react-with-styles");
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStylesPropTypes", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"]; });

/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Theme */ "./src/ui/Theme.js");




react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerInterface(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default.a);
react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerTheme(_Theme__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-with-styles":
/*!************************************!*\
  !*** external "react-with-styles" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),

/***/ "react-with-styles-interface-aphrodite":
/*!********************************************************!*\
  !*** external "react-with-styles-interface-aphrodite" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles-interface-aphrodite");

/***/ }),

/***/ "react-with-styles/lib/ThemedStyleSheet":
/*!*********************************************************!*\
  !*** external "react-with-styles/lib/ThemedStyleSheet" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles/lib/ThemedStyleSheet");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc2VhcmNoRmlsdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFuc2FjdGlvblBhY2tBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGktcmVkdXgtcGFjay9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpLXJlZHV4LXBhY2svY3JlYXRlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpLXJlZHV4LXBhY2svY3JlYXRlU2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4vQ29pbkRhc2hsZXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4vQ29pbk92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluL01haW5QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluL1RyYW5zYWN0aW9uTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9UcmFuc2FjdGlvblBhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4vVHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4vVHJhbnNhY3Rpb25UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2l0aExvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL21haW4vVHJhbnNhY3Rpb25MaXN0Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9tYWluL1RyYW5zYWN0aW9uUGFnaW5hdGlvbkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvbWFpbi9UcmFuc2FjdGlvblNlYXJjaEZpbHRlckNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdG9ycy90cmFuc2FjdGlvblNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0Zvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9IZWFkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvSW5saW5lTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTW9kYWwvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvT3B0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvU3BhY2luZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVGFibGVDZWxsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVGFibGVIZWFkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVGFibGVSb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9UZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13aXRoLXN0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1hcGhyb2RpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiXSwibmFtZXMiOlsiSW5kZXhEb2N1bWVudCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJBcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJTRVRfRklMVEVSIiwic2V0RmlsdGVyIiwicGFyYW1zIiwidHlwZSIsInBheWxvYWQiLCJGRVRDSF9UUkFOU0FDVElPTl9MSVNUIiwiQ1JFQVRFX1RSQU5TQUNUSU9OIiwiY29sbGVjdGlvbiIsInJlc2V0IiwiY3JlYXRlQWN0aW9ucyIsInJlc2V0VHJhbnNhY3Rpb25MaXN0IiwiUEFHRV9TSVpFIiwicmVxdWVzdFRyYW5zYWN0aW9uTGlzdCIsIl9wYWdlIiwibWV0YSIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsIm5vdGlmaWNhdGlvbiIsInN1Y2Nlc3MiLCJlcnJvciIsIl9saW1pdCIsImNyZWF0ZVRyYW5zYWN0aW9uIiwiZGF0YSIsIm9uQ29tcGxldGUiLCJvblN1Y2Nlc3MiLCJGRVRDSF9MSVNUIiwiRkVUQ0giLCJVUERBVEUiLCJDUkVBVEUiLCJSRVNFVCIsInJlc291cmNlTmFtZSIsImtleSIsInByb21pc2UiLCJnZXQiLCJtZW1iZXIiLCJpZCIsInBvc3QiLCJ1cGRhdGUiLCJjcmVhdGVTZWxlY3RvcnMiLCJyZXNvdXJjZVNlbGVjdG9yIiwic3RhdGUiLCJlbnRpdGllc1NlbGVjdG9yIiwiZW50aXRpZXMiLCJjb2xsZWN0aW9uU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImlkcyIsIm1hcCIsImxvYWRpbmdTdGF0ZVNlbGVjdG9yIiwibG9hZGluZ1N0YXRlIiwiZXJyb3JTdGF0ZVNlbGVjdG9yIiwiZXJyb3JTdGF0ZSIsImNvbGxlY3Rpb25Mb2FkaW5nU3RhdGVTZWxlY3RvciIsImNyZWF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yIiwidXBkYXRlTG9hZGluZ1N0YXRlU2VsZWN0b3IiLCJtZW1iZXJMb2FkaW5nU3RhdGVTZWxlY3RvciIsImNvbGxlY3Rpb25FcnJvclN0YXRlU2VsZWN0b3IiLCJjcmVhdGVFcnJvclN0YXRlU2VsZWN0b3IiLCJ1cGRhdGVFcnJvclN0YXRlU2VsZWN0b3IiLCJtZW1iZXJFcnJvclN0YXRlU2VsZWN0b3IiLCJwYWdpbmF0aW9uU2VsZWN0b3IiLCJwYWdpbmF0aW9uIiwibnVtYmVyIiwic2l6ZSIsIkNvaW5EYXNobGV0IiwibmFtZSIsInByaWNlTGFiZWwiLCJwcm9wcyIsIm9wZW5Nb2RhbCIsIlRSQURFX0NPSU5fTU9EQUwiLCJwcmljZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIkNvaW5PdmVydmlldyIsIk1haW5QYWdlIiwiVHJhbnNhY3Rpb25MaXN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJ0cmFuc2FjdGlvbnMiLCJsb2FkaW5nIiwiVHJhbnNhY3Rpb25QYWdpbmF0aW9uIiwiY29uc3RydWN0b3IiLCJoYW5kbGVOZXh0UHJlc3MiLCJiaW5kIiwiaGFuZGxlUHJldlByZXNzIiwic2VhcmNoUGFyYW1zIiwiaGFzTmV4dCIsInByZXZEaXNhYmxlZCIsIm5leHREaWFzYmxlZCIsImJvb2wiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIlRyYW5zYWN0aW9uU2VhcmNoRmlsdGVyIiwiaGFuZGxlU3VibWl0IiwiaGlzdG9yeSIsImNsZWFuZWRQYXJhbXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwidmFsdWUiLCJyZWR1Y2UiLCJvYmoiLCJxdWVyeVN0cmluZyIsImpvaW4iLCJwdXNoIiwiaW5pdFZhbHVlcyIsIm9uQ2hhbmdlIiwidmFsdWVzIiwiZGVmYXVsdFByb3BzIiwid2l0aFJvdXRlciIsIkxvYWRpbmdNZXNzYWdlIiwiVHJhbnNhY3Rpb25UYWJsZSIsInRvdGFsUHJpY2UiLCJjdXJyZW50UHJpY2UiLCJkYXRlVGltZSIsImFycmF5T2YiLCJzaGFwZSIsIndpdGhMb2FkaW5nIiwibG9hZGluZ01lc3NhZ2UiLCJXcmFwcGVkQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnROYW1lIiwid3JhcHBlZENvbXBvbmVudE5hbWUiLCJXaXRoTG9hZGluZyIsImlzTG9hZGluZyIsIlJFR0lTVEVSX1VTRVJfTU9EQUwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ0cmFuc2FjdGlvbkxpc3RTZWxlY3RvciIsInRyYW5zYWN0aW9uTGlzdExvYWRpbmdTdGF0ZVNlbGVjdG9yIiwibWFwRGlzUGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsInNlYXJjaEZpbHRlciIsImxlbmd0aCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInRyYW5zYWN0aW9uc1NlbGVjdG9yIiwidHJhbnNhY3Rpb25DcmVhdGVMb2FkaW5nU3RhdGVTZWxlY3RvciIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJzdHlsZXMiLCJsYXJnZSIsInhsYXJnZSIsInNtYWxsIiwieHNtYWxsIiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm9uUHJlc3MiLCJjc3MiLCJkZWZhdWx0Iiwibm9kZSIsIndpdGhTdHlsZXMiLCJjb2xvciIsInVuaXQiLCJkZXB0aCIsImZvbnRXZWlnaHQiLCJsZXZlbDEiLCJib3JkZXIiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJtZCIsImJvbGQiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJvdXRsaW5lIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiZ3JheUxpZ2h0IiwiYm94U2hhZG93IiwieGciLCJsZyIsInNtIiwieHMiLCJ3aGl0ZSIsInByaW1hcnlEYXJrIiwiZ3JheURhcmsiLCJvcGFjaXR5IiwiZ3JheSIsIkNhcmQiLCJzcGFjaW5nUHJvcHMiLCJ3cmFwcGVyIiwic3BhY2luZ1Byb3BUeXBlIiwid2l0aFN0eWxlc1Byb3BUeXBlcyIsImRpc3BsYXkiLCJvdmVyZmxvdyIsIm1hcmdpbkJvdHRvbSIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJGb3JtUHJvdmlkZXIiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcmV2U3RhdGUiLCJ2YWxpZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3VibWl0IiwidXBkYXRlZFZhbHVlIiwic2V0U3RhdGUiLCJlcnJvcnMiLCJoZWFkaW5nVGFncyIsIkhlYWRpbmciLCJpbnZlcnNlIiwibGV2ZWwiLCJIZWFkaW5nVGFnIiwiZGFyayIsImxpbmVIZWlnaHQiLCJoMSIsIm1hcmdpblRvcCIsImxldmVsMiIsImgyIiwibGV2ZWwzIiwiaDMiLCJsZXZlbDQiLCJsZXZlbDUiLCJsZXZlbDYiLCJJbmxpbmVMaXN0IiwiYWxpZ24iLCJzcGFjaW5nQmV0d2VlbiIsInZlcnRpY2FsQWxpZ24iLCJhbGlnbkNlbnRlciIsImFsaWduUmlnaHQiLCJ2ZXJ0aWNhbEFsaWduVG9wIiwidmVydGljYWxBbGlnbkJvdHRvbSIsIkNoaWxkcmVuIiwiY2hpbGQiLCJtYXJnaW5SaWdodCIsIm9uZU9mIiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiSW5wdXQiLCJzZXRSZWYiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJhdXRvRm9jdXMiLCJyZWYiLCJmb2N1cyIsImVycm9yTWVzc2FnZSIsImxhYmVsIiwiZXJyb3JMYWJlbCIsImlucHV0Iiwib25lT2ZUeXBlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiT3B0aW9uIiwiU2VsZWN0IiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiZm9jdXNlZCIsInBsYWNlaG9sZGVyIiwieHNtYWxsUGFkZGluZyIsInNtYWxsUGFkZGluZyIsImxhcmdlUGFkZGluZyIsInhsYXJnZVBhZGRpbmciLCJzZWxlY3QiLCJjbG9uZUVsZW1lbnQiLCJ3aWR0aCIsImJvdHRvbSIsInJpZ2h0IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiU3BhY2luZyIsImNvbXB1dGVkVG9wIiwiY29tcHV0ZWRCb3R0b20iLCJjb21wdXRlZExlZnQiLCJjb21wdXRlZFJpZ2h0IiwiY29tcHV0ZWRTdHlsZXMiLCJmbGV4IiwibWFyZ2luTGVmdCIsIlRhYmxlIiwidGFibGUiLCJib3JkZXJDb2xsYXBzZSIsIlRhYmxlQm9keSIsInRvQXJyYXkiLCJpbmRleCIsImJhc2VsaW5lIiwiVGFibGVDZWxsIiwiaXNIZWFkZXIiLCJUYWciLCJjZWxsIiwiaGVhZGVyIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0QWxpZ24iLCJib3JkZXJCb3R0b20iLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRleHQiLCJsaWdodCIsIm5vcm1hbCIsIkxBUkdFX0FORF9BQk9WRSIsIkJSRUFLUE9JTlRfTkFNRVMiLCJMQVJHRSIsIk1FRElVTSIsIlNNQUxMIiwiYnJlYWtwb2ludHMiLCJyZXNwb25zaXZlIiwicHJpbnQiLCJzZWNvbmRhcnlEYXJrIiwiVGhlbWVkU3R5bGVTaGVldCIsInJlZ2lzdGVySW50ZXJmYWNlIiwiYXBocm9kaXRlSW50ZXJmYWNlIiwicmVnaXN0ZXJUaGVtZSIsIlRoZW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LDZFQUFnQixDQUFDQyxpQkFBakIsQ0FBbUNDLDRFQUFuQztBQUNBRiw2RUFBZ0IsQ0FBQ0csYUFBakIsQ0FBK0JDLDhDQUEvQjs7Ozs7Ozs7Ozs7O0FDTkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL21haW4vTWFpblBhZ2UnO1xuXG5jbGFzcyBJbmRleERvY3VtZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE1haW5QYWdlIC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4RG9jdW1lbnQ7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBBcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTCA6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcGk7IiwiZXhwb3J0IGNvbnN0IFNFVF9GSUxURVIgPSAnc2VhcmNoRmlsdGVyL1NFVF9GSUxURVInO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyKHBhcmFtcyl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBTRVRfRklMVEVSLFxyXG4gICAgICAgIHBheWxvYWQgOiB7cGFyYW1zfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEFwaSBmcm9tICcuLi9BcGknO1xyXG5pbXBvcnQgY3JlYXRlQWN0aW9ucyBmcm9tICcuLi9hcGktcmVkdXgtcGFjay9jcmVhdGVBY3Rpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRkVUQ0hfVFJBTlNBQ1RJT05fTElTVCA9ICd0cmFuc2FjdGlvbi9GRVRDSF9UUkFOU0FDVElPTl9MSVNUJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9UUkFOU0FDVElPTiA9ICd0cmFuc2FjdGlvbi9DUkVBVEVfVFJBTlNBQ1RJT04nO1xyXG5jb25zdCB7IGNvbGxlY3Rpb24sIGNyZWF0ZSwgcmVzZXQgfSA9IGNyZWF0ZUFjdGlvbnMoJ3RyYW5zYWN0aW9ucycpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0VHJhbnNhY3Rpb25MaXN0ID0gcmVzZXQ7XHJcblxyXG5jb25zdCBQQUdFX1NJWkUgPSAxMDtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0VHJhbnNhY3Rpb25MaXN0KHBhcmFtcyxfcGFnZT0xKXtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZSA6IEZFVENIX1RSQU5TQUNUSU9OX0xJU1QsXHJcbi8vICAgICAgICAgcHJvbWlzZSA6IEFwaS5nZXQoJy90cmFuc2FjdGlvbnMnLHtwYXJhbXM6ey4uLnBhcmFtcyxfcGFnZSxfbGltaXQgOiBQQUdFX1NJWkV9fSksXHJcbi8vICAgICAgICAgbWV0YSA6e1xyXG4vLyAgICAgICAgICAgICBwYWdlTnVtYmVyIDogX3BhZ2UsXHJcbi8vICAgICAgICAgICAgIHBhZ2VTaXplIDogUEFHRV9TSVpFLFxyXG4vLyAgICAgICAgICAgICBub3RpZmljYXRpb24gOiB7XHJcbi8vICAgICAgICAgICAgICAgICBzdWNjZXNzIDogXCLqsbDrnpgg66qp66Gd7J2EIOy1nOyLoOygleuztOuhnCDsl4XrjbDsnbTtirgg7ZWY7JiA7Iq164uI64ukLlwiLFxyXG4vLyAgICAgICAgICAgICAgICAgZXJyb3IgOiAn6rGw656Y66qp66Gd7J2EIOqwseyLoO2VmOuKlCDspJHsl5Ag66y47KCc6rCAIOuwnOyDne2VmOyYgOyKteuLiOuLpC4nXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9BUEkg7Zi47LacIOuwqeyLneycvOuhnCDqtZDssrRcclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RUcmFuc2FjdGlvbkxpc3QocGFyYW1zLF9wYWdlPTEpe1xyXG4gICAgY29uc3QgbWV0YSA9IHtcclxuICAgICAgICBwYWdlTnVtYmVyIDogX3BhZ2UsXHJcbiAgICAgICAgcGFnZVNpemUgOiBQQUdFX1NJWkUsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uIDoge1xyXG4gICAgICAgICAgICBzdWNjZXNzIDogXCLqsbDrnpgg66qp66Gd7J2EIOy1nOyLoOygleuztOuhnCDsl4XrjbDsnbTtirgg7ZWY7JiA7Iq164uI64ukLiBUcmFuc2FjdGlvblBhY2tBY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIGVycm9yIDogJ+qxsOuemOuqqeuhneydhCDqsLHsi6DtlZjripQg7KSR7JeQIOusuOygnOqwgCDrsJzsg53tlZjsmIDsirXri4jri6QuJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0aW9uKHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgX3BhZ2UsXHJcbiAgICAgICAgX2xpbWl0IDogUEFHRV9TSVpFXHJcbiAgICB9LG1ldGEpXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbihkYXRhLG9uQ29tcGxldGUpe1xyXG4gICAgXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGUgOiBDUkVBVEVfVFJBTlNBQ1RJT04sXHJcbi8vICAgICAgICAgcHJvbWlzZSA6IEFwaS5wb3N0KCcvdHJhbnNhY3Rpb25zJyxkYXRhKSxcclxuLy8gICAgICAgICBtZXRhIDoge1xyXG4vLyAgICAgICAgICAgICBvblN1Y2Nlc3MgOiBvbkNvbXBsZXRlLFxyXG4vLyAgICAgICAgICAgICBub3RpZmljYXRpb24gOiB7XHJcbi8vICAgICAgICAgICAgICAgICBzdWNjZXNzIDogJ+qxsOuemOqwgCDshLHqs7XsoIHsnLzroZwg7JmE66OM65CY7JeI7Iq164uI64ukLicsXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbihkYXRhLG9uQ29tcGxldGUpe1xyXG4gICAgY29uc3QgbWV0YSA9IHtcclxuICAgICAgICBvblN1Y2Nlc3MgOiBvbkNvbXBsZXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbiA6IHtcclxuICAgICAgICAgICAgc3VjY2VzcyA6ICfqsbDrnpjqsIAg7ISx6rO17KCB7Jy866GcIOyZhOujjOuQmOyXiOyKteuLiOuLpC4nLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGUoZGF0YSx7fSxtZXRhKTtcclxufSIsImV4cG9ydCBjb25zdCBGRVRDSF9MSVNUID0gJ2FwaS1yZWR1eC1wYWNrL0ZFVENIX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0ggPSAnYXBpLXJlZHV4LXBhY2svRkVUQ0gnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFID0gJ2FwaS1yZWR1eC1wYWNrL1VQREFURSc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEUgPSAnYXBpLXJlZHV4LXBhY2svQ1JFQVRFJztcclxuZXhwb3J0IGNvbnN0IFJFU0VUID0gJ2FwaS1yZWR1eC1wYWNrL1JFU0VUJzsiLCJpbXBvcnQge0ZFVENIX0xJU1QsQ1JFQVRFLFVQREFURSxGRVRDSCxSRVNFVH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vQXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXNvdXJjZU5hbWUsIGtleSA9ICdpZCcpID0+KHtcclxuICAgIGNvbGxlY3Rpb24gOiAocGFyYW1zPXt9LCBtZXRhPXt9KSA9PiAoe1xyXG4gICAgICAgIHR5cGUgOiBGRVRDSF9MSVNULFxyXG4gICAgICAgIHByb21pc2UgOiBBcGkuZ2V0KHJlc291cmNlTmFtZSx7cGFyYW1zfSksXHJcbiAgICAgICAgbWV0YSA6IHtcclxuICAgICAgICAgICAgLi4ubWV0YSxcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICByZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBtZW1iZXIgOiAoaWQscGFyYW1zPXt9LG1ldGE9e30pPT4oe1xyXG4gICAgICAgIHR5cGUgOiBGRVRDSCxcclxuICAgICAgICBwcm9taXNlIDogQXBpLmdldChgJHtyZXNvdXJjZU5hbWV9LyR7aWR9YCx7cGFyYW1zfSksXHJcbiAgICAgICAgbWV0YSA6IHtcclxuICAgICAgICAgICAgLi4ubWV0YSxcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICByZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBjcmVhdGUgOiAoZGF0YSxwYXJhbXM9e30sbWV0YT17fSk9Pih7XHJcbiAgICAgICAgdHlwZSA6IENSRUFURSxcclxuICAgICAgICBwcm9taXNlIDogQXBpLnBvc3QocmVzb3VyY2VOYW1lLGRhdGEse3BhcmFtc30pLFxyXG4gICAgICAgIG1ldGEgOiB7XHJcbiAgICAgICAgICAgIC4uLm1ldGEsXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcbiAgICB1cGRhdGUgOiAoaWQsZGF0YSxwYXJhbXM9e30sbWV0YT17fSk9Pih7XHJcbiAgICAgICAgdHlwZSA6IFVQREFURSxcclxuICAgICAgICBwcm9taXNlIDogQXBpLmdldChgJHtyZXNvdXJjZU5hbWV9LyR7aWR9YCxkYXRhLHtwYXJhbXN9KSxcclxuICAgICAgICBtZXRhIDoge1xyXG4gICAgICAgICAgICAuLi5tZXRhLFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIHJlc291cmNlTmFtZSxcclxuICAgICAgICB9XHJcbiAgICB9KSxcclxuICAgIHJlc2V0IDogKCk9Pih7XHJcbiAgICAgICAgdHlwZSA6IFJFU0VULFxyXG4gICAgICAgIG1ldGEgOiB7cmVzb3VyY2VOYW1lfVxyXG4gICAgfSlcclxufSkiLCJpbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7Q1JFQVRFLFVQREFURSxGRVRDSF9MSVNULEZFVENIfSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ycyhyZXNvdXJjZU5hbWUpe1xyXG4gICAgY29uc3QgcmVzb3VyY2VTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlW3Jlc291cmNlTmFtZV07XHJcbiAgICBjb25zdCBlbnRpdGllc1NlbGVjdG9yID0gc3RhdGUgPT4gcmVzb3VyY2VTZWxlY3RvcihzdGF0ZSkuZW50aXRpZXM7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgICBbcmVzb3VyY2VTZWxlY3Rvcl0sXHJcbiAgICAgICAgKHtpZHMsZW50aXRpZXN9KT0+aWRzLm1hcChpZD0+ZW50aXRpZXNbaWRdKVxyXG4gICAgKVxyXG4gICAgY29uc3QgbG9hZGluZ1N0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiByZXNvdXJjZVNlbGVjdG9yKHN0YXRlKS5sb2FkaW5nU3RhdGU7XHJcbiAgICBjb25zdCBlcnJvclN0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiByZXNvdXJjZVNlbGVjdG9yKHN0YXRlKS5lcnJvclN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGNvbGxlY3Rpb25Mb2FkaW5nU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGxvYWRpbmdTdGF0ZVNlbGVjdG9yKHN0YXRlKVtgJHtGRVRDSF9MSVNUfS8ke3Jlc291cmNlTmFtZX1gXTtcclxuICAgIGNvbnN0IGNyZWF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yID0gc3RhdGUgPT4gbG9hZGluZ1N0YXRlU2VsZWN0b3Ioc3RhdGUpW2Ake0NSRUFURX0vJHtyZXNvdXJjZU5hbWV9YF1cclxuICAgIGNvbnN0IHVwZGF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yID0gc3RhdGUgPT4gbG9hZGluZ1N0YXRlU2VsZWN0b3Ioc3RhdGUpW2Ake1VQREFURX0vJHtyZXNvdXJjZU5hbWV9YF07XHJcbiAgICBjb25zdCBtZW1iZXJMb2FkaW5nU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGxvYWRpbmdTdGF0ZVNlbGVjdG9yKHN0YXRlKVtgJHtGRVRDSH0vJHtyZXNvdXJjZU5hbWV9YF1cclxuXHJcbiAgICBjb25zdCBjb2xsZWN0aW9uRXJyb3JTdGF0ZVNlbGVjdG9yID0gc3RhdGUgPT4gZXJyb3JTdGF0ZVNlbGVjdG9yKHN0YXRlKVtgJHtGRVRDSF9MSVNUfS8ke3Jlc291cmNlTmFtZX1gXTtcclxuICAgIGNvbnN0IGNyZWF0ZUVycm9yU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGVycm9yU3RhdGVTZWxlY3RvcihzdGF0ZSlbYCR7Q1JFQVRFfS8ke3Jlc291cmNlTmFtZX1gXTtcclxuICAgIGNvbnN0IHVwZGF0ZUVycm9yU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGVycm9yU3RhdGVTZWxlY3RvcihzdGF0ZSlbYCR7VVBEQVRFfS8ke3Jlc291cmNlTmFtZX1gXTtcclxuICAgIGNvbnN0IG1lbWJlckVycm9yU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGVycm9yU3RhdGVTZWxlY3RvcihzdGF0ZSlbYCR7RkVUQ0h9LyR7cmVzb3VyY2VOYW1lfWBdO1xyXG5cclxuICAgIGNvbnN0IHBhZ2luYXRpb25TZWxlY3RvciA9IHN0YXRlID0+e1xyXG4gICAgICAgIGNvbnN0IHtwYWdpbmF0aW9ufSA9IHJlc291cmNlU2VsZWN0b3Ioc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG51bWJlciA6IHBhZ2luYXRpb24ubnVtYmVyIHx8IDAsXHJcbiAgICAgICAgICAgIHNpemUgOiBwYWdpbmF0aW9uLnNpemVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW50aXRpZXNTZWxlY3RvcixcclxuICAgICAgICBjb2xsZWN0aW9uU2VsZWN0b3IsXHJcbiAgICAgICAgY29sbGVjdGlvbkxvYWRpbmdTdGF0ZVNlbGVjdG9yLFxyXG4gICAgICAgIGNyZWF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yLFxyXG4gICAgICAgIHVwZGF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yLFxyXG4gICAgICAgIG1lbWJlckxvYWRpbmdTdGF0ZVNlbGVjdG9yLFxyXG4gICAgICAgIHBhZ2luYXRpb25TZWxlY3RvcixcclxuICAgIH1cclxufSIsIi8v7J206rG0IOy9lOyduOuzhOuhnCDrgpjsmKTripQg7Lm065OcIOuplOuJtOuTpFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi4vLi4vdWkvSGVhZGluZ1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL3VpL0NhcmRcIjtcclxuaW1wb3J0IElubGluZUxpc3QgZnJvbSBcIi4uLy4uL3VpL0lubGluZUxpc3RcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4uLy4uL3VpL1RleHRcIjtcclxuLy/rqqjri6wg7Zi47LacXHJcbmltcG9ydCB7IENvbnN1bWVyIGFzIE1vZGFsIH0gZnJvbSBcIi4uLy4uL3VpL01vZGFsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgVFJBREVfQ09JTl9NT0RBTCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvbW9kYWxzXCI7XHJcblxyXG5jbGFzcyBDb2luRGFzaGxldCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2VMYWJlbCB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbD5cclxuICAgICAgICB7KHsgb3Blbk1vZGFsIH0pID0+IChcclxuICAgICAgICAgIDxDYXJkIHZlcnRpY2FsPXs0fSBob3Jpem9udGFsPXs0fT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgbGV2ZWw9ezR9PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgIDxUZXh0PntwcmljZUxhYmVsfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8SW5saW5lTGlzdCBzcGFjaW5nQmV0d2Vlbj17MX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbChUUkFERV9DT0lOX01PREFMLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXlcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZUxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOunpOuPhFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoVFJBREVfQ09JTl9NT0RBTCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg66ek7IiYXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvSW5saW5lTGlzdD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkNvaW5EYXNobGV0LnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHByaWNlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2luRGFzaGxldDtcclxuIiwiLy/qsIEg7L2U7J247J2EIOuCmO2DgOuCtOuKlCDrqZTribQsIOyDgeuLqCDrqZTribRcclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uLy4uL3VpL0hlYWRpbmdcIjtcclxuaW1wb3J0IElubGluZUxpc3QgZnJvbSBcIi4uLy4uL3VpL0lubGluZUxpc3RcIjtcclxuXHJcbmltcG9ydCBDb2luRGFzaGxldCBmcm9tIFwiLi9Db2luRGFzaGxldFwiO1xyXG5cclxuY2xhc3MgQ29pbk92ZXJ2aWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkaW5nIGxldmVsPXszfT7svZTsnbgg64+Z7ZalPC9IZWFkaW5nPlxyXG4gICAgICAgIDxJbmxpbmVMaXN0PlxyXG4gICAgICAgICAgPENvaW5EYXNobGV0IG5hbWU9XCLruYTtirjsvZTsnbhcIiBwcmljZUxhYmVsPVwiNCwyMTYsMDAwXCIgLz5cclxuICAgICAgICAgIDxDb2luRGFzaGxldCBuYW1lPVwi7J20642U66as7JuAXCIgcHJpY2VMYWJlbD1cIjIxNiwwMDBcIiAvPlxyXG4gICAgICAgICAgPENvaW5EYXNobGV0IG5hbWU9XCLsgrzshLHsoITsnpBcIiBwcmljZUxhYmVsPVwiODgsMDAwXCIgLz5cclxuICAgICAgICAgIDxDb2luRGFzaGxldCBuYW1lPVwi7IK87ISx7KCE7J6Q7JqwXCIgcHJpY2VMYWJlbD1cIjc1LDAwMFwiIC8+XHJcbiAgICAgICAgPC9JbmxpbmVMaXN0PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvaW5PdmVydmlldztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvaW5PdmVydmlldyBmcm9tIFwiLi9Db2luT3ZlcnZpZXdcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uTGlzdENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9tYWluL1RyYW5zYWN0aW9uTGlzdENvbnRhaW5lclwiO1xyXG4vL2ltcG9ydCBOb3RpZmljYXRpb25Db250YWluZXIgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvbWFpbi9Ob3RpZmljYXRpb25Db250YWluZXJcIjtcclxuXHJcblxyXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Q29pbk92ZXJ2aWV3IC8+XHJcbiAgICAgICAgPFRyYW5zYWN0aW9uTGlzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xyXG4iLCIvL+qygOyDiSDrsI8g6rKw6rO8IOuqqeuhnSDtmZTrqbQg6rWs7ISxXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vaW1wb3J0IEFwaSBmcm9tIFwiLi4vLi4vQXBpXCI7XHJcbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi8uLi91aS9IZWFkaW5nXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi91aS9DYXJkXCI7XHJcblxyXG5pbXBvcnQgVHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXJDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvbWFpbi9UcmFuc2FjdGlvblNlYXJjaEZpbHRlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25UYWJsZSBmcm9tIFwiLi9UcmFuc2FjdGlvblRhYmxlXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblBhZ2luYXRpb25Db250YXRpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvbWFpbi9UcmFuc2FjdGlvblBhZ2luYXRpb25Db250YWluZXInO1xyXG5cclxuY2xhc3MgVHJhbnNhY3Rpb25MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIEFwaS5nZXQoXCIvdHJhbnNhY3Rpb25zXCIpLnRoZW4oKHsgZGF0YSB9KSA9PlxyXG4gICAgLy8gICB0aGlzLnByb3BzLnNldFRyYW5zYWN0aW9uTGlzdChkYXRhKVxyXG4gICAgLy8gKTtcclxuICAgIC8vdGhpcy5wcm9wcy5yZXF1ZXN0VHJhbnNhY3Rpb25MaXN0KCk7XHJcbiAgICAvL+2VqOyImO2Yle2DnOuhnCDqsIDsoLjsmKTripQg6rKD7J206riwIOuVjOusuOyXkCDsl6zquLDshJwg7L2c67CxXHJcbiAgICAvLyByb3V0ZXJFZmZlY3Qg66+465Ok7Juo7Ja07JeQ7IScIOyekOuPmeycvOuhnCDqsbDrnpjrqqnroZ0g7JqU7LKt7ZWY6riwIOuVjOusuOyXkCDtlYTsmpTsl4bsnYxcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdHJhbnNhY3Rpb25zLGxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHsvKiDqsoDsg4nrtoDrtoQgKi99XHJcbiAgICAgICAgPEhlYWRpbmcgbGV2ZWw9ezN9PuqxsOuemO2YhO2ZqTwvSGVhZGluZz5cclxuICAgICAgICA8Q2FyZCB2ZXJ0aWNhbD17NH0gaG9yaXpvbnRhbD17NH0+XHJcbiAgICAgICAgICA8VHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXJDb250YWluZXIgLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgey8qIOuqqeuhnSDrtoDrtoQgKi99XHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8VHJhbnNhY3Rpb25UYWJsZSB0cmFuc2FjdGlvbnM9e3RyYW5zYWN0aW9uc30gaXNMb2FkaW5nPXtsb2FkaW5nfS8+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxUcmFuc2FjdGlvblBhZ2luYXRpb25Db250YXRpbmVyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25MaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IElubGluZUxpc3QgZnJvbSAnLi4vLi4vdWkvSW5saW5lTGlzdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vdWkvQnV0dG9uJztcclxuXHJcbmNsYXNzIFRyYW5zYWN0aW9uUGFnaW5hdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU5leHRQcmVzcyA9IHRoaXMuaGFuZGxlTmV4dFByZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcmV2UHJlc3MgPSB0aGlzLmhhbmRsZVByZXZQcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlTmV4dFByZXNzKCl7XHJcbiAgICAgICAgY29uc3QgeyByZXF1ZXN0VHJhbnNhY3Rpb25MaXN0ICwgcGFnZU51bWJlciwgc2VhcmNoUGFyYW1zfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmVxdWVzdFRyYW5zYWN0aW9uTGlzdChzZWFyY2hQYXJhbXMscGFnZU51bWJlcisxKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVByZXZQcmVzcygpe1xyXG4gICAgICAgIGNvbnN0IHtyZXF1ZXN0VHJhbnNhY3Rpb25MaXN0LCBwYWdlTnVtYmVyLHNlYXJjaFBhcmFtc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJlcXVlc3RUcmFuc2FjdGlvbkxpc3Qoc2VhcmNoUGFyYW1zLHBhZ2VOdW1iZXItMSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9hZGluZywgcGFnZU51bWJlcixoYXNOZXh0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgcHJldkRpc2FibGVkID0gbG9hZGluZyB8fCBwYWdlTnVtYmVyIDw9MTtcclxuICAgICAgICBjb25zdCBuZXh0RGlhc2JsZWQgPSBsb2FkaW5nIHx8ICFoYXNOZXh0O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbmxpbmVMaXN0IGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2Vjb25kYXJ5IGRpc2FibGVkID0ge3ByZXZEaXNhYmxlZH0gb25QcmVzcz17dGhpcy5oYW5kbGVQcmV2UHJlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIOydtOyghFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNlY29uZGFyeSBkaXNhYmxlZCA9IHtuZXh0RGlhc2JsZWR9IG9uUHJlc3M9e3RoaXMuaGFuZGxlTmV4dFByZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICDri6TsnYxcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0lubGluZUxpc3Q+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuVHJhbnNhY3Rpb25QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIGhhc05leHQgOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHBhZ2VOdW1iZXIgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbG9hZGluZyA6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWVzdFRyYW5zYWN0aW9uTGlzdCA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvblBhZ2luYXRpb247IiwiLy/qsoDsg4ntlYTthLBcclxuLy/tj7zsl5DshJwg7KCc6rO167Cb7J2AIO2UhOuhnOuwlOydtOuNlCDrpbwg7J207Jqp7ZW07IScIG9uQ2hhbmdlLCB2YWx1ZSAg7L2c67CxIOuwm+ydjFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSW5saW5lTGlzdCBmcm9tIFwiLi4vLi4vdWkvSW5saW5lTGlzdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9CdXR0b25cIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4uLy4uL3VpL1RleHRcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi91aS9JbnB1dFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vdWkvRm9ybVwiO1xyXG5cclxuaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tIFwiLi4vLi4vdWkvU2VsZWN0XCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL2ltcG9ydCBBcGkgZnJvbSBcIi4uLy4uL0FwaVwiO1xyXG5cclxuY2xhc3MgVHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBoYW5kbGVTdWJtaXQocGFyYW1zKSB7XHJcbiAgICAvL2NvbnN0IHsgcmVxdWVzdFRyYW5zYWN0aW9uTGlzdCxzZXRGaWx0ZXIgfSA9IHRoaXMucHJvcHM7IC8v6rKA7IOJIOyjvOyGjOqwkuydhCDrhJjqsqjso7zquLAg7JyE7ZW0IOuzgOqyvVxyXG4gICAgY29uc3R7c2V0RmlsdGVyLGhpc3Rvcnl9ID0gdGhpcy5wcm9wc1xyXG4gICAgLy8gQXBpLmdldChcIi90cmFuc2FjdGlvbnNcIiwgeyBwYXJhbXMgfSkudGhlbigoeyBkYXRhIH0pID0+XHJcbiAgICAvLyAgIHNldFRyYW5zYWN0aW9uTGlzdChkYXRhKVxyXG4gICAgLy8gKTtcclxuICAgIGNvbnN0IGNsZWFuZWRQYXJhbXMgPSBPYmplY3QuZW50cmllcyhwYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUgIT09IFwiXCIpXHJcbiAgICAgIC5yZWR1Y2UoKG9iaiwgW2tleSwgdmFsdWVdKSA9PiAoeyAuLi5vYmosIFtrZXldOiB2YWx1ZSB9KSwge30pO1xyXG4gICAgLy8gcmVxdWVzdFRyYW5zYWN0aW9uTGlzdChjbGVhbmVkUGFyYW1zKTtcclxuICAgIC8vIHNldEZpbHRlcihjbGVhbmVkUGFyYW1zKTtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmVudHJpZXMoY2xlYW5lZFBhcmFtcylcclxuICAgIC5tYXAoKFtrZXksdmFsdWVdKT0+YCR7a2V5fT0ke3ZhbHVlfWApIC8vWydjb2RlPUJUWCcsICdwcmljZT0xMDAnXVxyXG4gICAgLmpvaW4oJyYnKTsgLy8nY29kZT1CVFgmcHJpY2U9MTAwJ1xyXG4gICAgaGlzdG9yeS5wdXNoKGAvPyR7cXVlcnlTdHJpbmd9YCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aW5pdFZhbHVlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBpbml0VmFsdWVzPXtpbml0VmFsdWVzfT5cclxuICAgICAgICA8Rm9ybS5Db25zdW1lcj5cclxuICAgICAgICAgIHsoeyBvbkNoYW5nZSwgdmFsdWVzIH0pID0+IChcclxuICAgICAgICAgICAgPElubGluZUxpc3Qgc3BhY2luZ0JldHdlZW49ezJ9IHZlcnRpY2FsQWxpZ249XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICA8VGV4dCB4bGFyZ2UgYm9sZD5cclxuICAgICAgICAgICAgICAgIOqygOyDiVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuy9lOyduCDsvZTrk5xcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlc1tcImNvZGVcIl19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBsYWJlbD1cIuyEoO2Dne2VtOyjvOyEuOyalFwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gbGFiZWw9XCLruYTtirjsvZTsnbgoQlRYKVwiIHZhbHVlPVwiQlRYXCIgLz5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gbGFiZWw9XCLsnbTrjZTrpqzsm4AoRVRIKVwiIHZhbHVlPVwiRVRIXCIgLz5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gbGFiZWw9XCLsgrzshLHsoITsnpBcIiB2YWx1ZT1cInNhbXN1bmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBsYWJlbD1cIuyCvOyEseyghOyekOyasFwiIHZhbHVlPVwic2Ftc3VuZ1dvb1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY3VycmVudFByaWNlX2d0ZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuy1nOyGjOqxsOuemOqwgFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzW1wiY3VycmVudFByaWNlX2d0ZVwiXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImN1cnJlbnRQcmljZV9sdGVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLstZzrjIDqsbDrnpjqsIBcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlc1tcImN1cnJlbnRQcmljZV9sdGVcIl19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAg6rKA7IOJXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvSW5saW5lTGlzdD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtLkNvbnN1bWVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuVHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG9uQ2hhbmdlOiAoKSA9PiAoe30pLFxyXG59O1xyXG5cclxuVHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXIucHJvcFR5cGVzID0geyByZXF1ZXN0VHJhbnNhY3Rpb25MaXN0OiBQcm9wVHlwZXMuZnVuYyxcclxuc2V0RmlsdGVyIDogUHJvcFR5cGVzLmZ1bmMgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXIpIDtcclxuIiwiLy8g6rKA7IOJIOuqqeuhnVxyXG4vL+uNsOydtO2EsCDthYzsnbTruJQg7Lu07Y+s64SM7Yq4IOyCrOyaqSwg7ZSE66Gc7Y287Yuw7JeQ64qUIOuwsOyXtO2YlSDqsJLsnbQg65Ok7Ja07J6I7Jy866+A66GcIG1hcCgpIO2VqOyImOulvCDsnbTsmqntlbTshJwg7Lac66ClXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uLy4uL3VpL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiLi4vLi4vdWkvVGFibGVSb3dcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiLi4vLi4vdWkvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIi4uLy4uL3VpL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCIuLi8uLi91aS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IHdpdGhMb2FkaW5nIGZyb20gXCIuLi93aXRoTG9hZGluZ1wiO1xyXG5pbXBvcnQgU3BhY2luZyBmcm9tIFwiLi4vLi4vdWkvU3BhY2luZ1wiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vLi4vdWkvVGV4dFwiO1xyXG5cclxuY29uc3QgTG9hZGluZ01lc3NhZ2UgPSAoXHJcbiAgPFNwYWNpbmcgdmVydGljYWw9ezR9IGhvcml6b250YWwgPXsyfT5cclxuICAgIDxUZXh0IGxhcmdlPuuNsOydtO2EsOulvCDrtojrn6zrk6TsnbTqs6Ag7J6I7Iq164uI64ukLjwvVGV4dD5cclxuICA8L1NwYWNpbmc+XHJcbilcclxuXHJcblxyXG5jbGFzcyBUcmFuc2FjdGlvblRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHRyYW5zYWN0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUYWJsZT5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPuy9lOyduDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+7Iuc6rCA7LSd7JWhPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj7tmITsnqzsi5zshLg8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+6rGw656YIOyLnOqwhDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge3RyYW5zYWN0aW9ucy5tYXAoXHJcbiAgICAgICAgICAgICh7IGlkLCBuYW1lLCB0b3RhbFByaWNlLCBjdXJyZW50UHJpY2UsIGRhdGVUaW1lIH0pID0+IChcclxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntuYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPnt0b3RhbFByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntjdXJyZW50UHJpY2V9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57ZGF0ZVRpbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UcmFuc2FjdGlvblRhYmxlLnByb3BUeXBlcyA9IHtcclxuICB0cmFuc2FjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgLy8gbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgLy8gaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIC8vIHRvdGFsUHJpY2U6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIC8vY3VycmVudFByaWNlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAvLyBkYXRlVGltZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pXHJcbiAgKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMb2FkaW5nKExvYWRpbmdNZXNzYWdlKShUcmFuc2FjdGlvblRhYmxlKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKGxvYWRpbmdNZXNzYWdlID0gJ+uhnOuUqeykkScpID0+IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICBjb25zdCB7IGRpc3BsYXlOYW1lLCBuYW1lOiBjb21wb25lbnROYW1lIH0gPSBXcmFwcGVkQ29tcG9uZW50O1xuICBjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IGRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudE5hbWU7XG5cbiAgZnVuY3Rpb24gV2l0aExvYWRpbmcoeyBpc0xvYWRpbmcsIC4uLnByb3BzIH0pIHtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gbG9hZGluZ01lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gIH1cbiAgV2l0aExvYWRpbmcuZGlzcGxheU5hbWUgPSBgd2l0aExvYWRpbmcoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcbiAgcmV0dXJuIFdpdGhMb2FkaW5nO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFERV9DT0lOX01PREFMID0gJ21vZGFsL1RSQURFX0NPSU5fTU9EQUwnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9NT0RBTCA9ICdtb2RhbC9SRUdJU1RFUl9VU0VSX01PREFMJzsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvbkxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWFpbi9UcmFuc2FjdGlvbkxpc3RcIjtcclxuLy9pbXBvcnQgeyBzZXRUcmFuc2FjdGlvbkxpc3QgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90cmFuc2FjdGlvbkFjdGlvbnNcIjtcclxuLy9pbXBvcnQgeyByZXF1ZXN0VHJhbnNhY3Rpb25MaXN0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdHJhbnNhY3Rpb25BY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZFVENIX1RSQU5TQUNUSU9OX0xJU1QsIHJlcXVlc3RUcmFuc2FjdGlvbkxpc3QgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90cmFuc2FjdGlvblBhY2tBY3Rpb25zXCI7XHJcbmltcG9ydCB7dHJhbnNhY3Rpb25MaXN0U2VsZWN0b3IsbG9hZGluZ1N0YXRlU2VsZWN0b3IsdHJhbnNhY3Rpb25MaXN0TG9hZGluZ1N0YXRlU2VsZWN0b3J9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy90cmFuc2FjdGlvblNlbGVjdG9ycy5qcydcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgaWRzLCBlbnRpdGllcyxsb2FkaW5nU3RhdGUgfSA9IHN0YXRlLnRyYW5zYWN0aW9ucztcclxuICAvLyBjb25zdCBsb2FkaW5nID0gbG9hZGluZ1N0YXRlW0ZFVENIX1RSQU5TQUNUSU9OX0xJU1RdO1xyXG4gIC8vIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGlkcy5tYXAoKGlkKSA9PiBlbnRpdGllc1tpZF0pO1xyXG4gIC8vIHJldHVybiB7dHJhbnNhY3Rpb25zLGxvYWRpbmd9XHJcbiAgLy8g7IWA66CJ7YSw7JeQIOuqqOuToCDrgrTrtoAg6riw64ql7J2EIOuEmOq5gFxyXG4gIFxyXG4gIHJldHVybiB7IHRyYW5zYWN0aW9ucyA6IHRyYW5zYWN0aW9uTGlzdFNlbGVjdG9yKHN0YXRlKSwgbG9hZGluZyA6IHRyYW5zYWN0aW9uTGlzdExvYWRpbmdTdGF0ZVNlbGVjdG9yKHN0YXRlKX07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNQYXRjaFRvUHJvcHMgPSB7XHJcbiAgcmVxdWVzdFRyYW5zYWN0aW9uTGlzdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNQYXRjaFRvUHJvcHMpKFRyYW5zYWN0aW9uTGlzdCk7XHJcbiIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25QYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWFpbi9UcmFuc2FjdGlvblBhZ2luYXRpb24nO1xyXG5pbXBvcnQge0ZFVENIX1RSQU5TQUNUSU9OX0xJU1QsIHJlcXVlc3RUcmFuc2FjdGlvbkxpc3R9IGZyb20gJy4uLy4uL2FjdGlvbnMvdHJhbnNhY3Rpb25QYWNrQWN0aW9ucyc7XHJcbmltcG9ydCB7bG9hZGluZ1N0YXRlU2VsZWN0b3IsdHJhbnNhY3Rpb25MaXN0TG9hZGluZ1N0YXRlU2VsZWN0b3J9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy90cmFuc2FjdGlvblNlbGVjdG9ycy5qcydcclxuaW1wb3J0IHsgaXNEdXJhdGlvbiB9IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PntcclxuICAgIC8vIGNvbnN0IHtwYWdpbmF0aW9uLGxvYWRpbmdTdGF0ZSxpZHN9ID0gc3RhdGUudHJhbnNhY3Rpb25zO1xyXG4gICAgLy8gY29uc3QgeyBudW1iZXIgLCBzaXplIH0gPSBwYWdpbmF0aW9uO1xyXG4gICAgLy8gY29uc3QgbG9hZGluZyA9IGxvYWRpbmdTdGF0ZVtGRVRDSF9UUkFOU0FDVElPTl9MSVNUXTsgLy/roZzrlKkg6rWs67aEICYg67aE66asXHJcbiAgICAvLyByZXR1cm4ge1xyXG4gICAgLy8gICAgIHNlYXJjaFBhcmFtcyA6IHN0YXRlLnNlYXJjaEZpbHRlci5wYXJhbXMsXHJcbiAgICAvLyAgICAgcGFnZU51bWJlciA6IG51bWJlciB8fCAxLFxyXG4gICAgLy8gICAgIGhhc05leHQgOiBpZHMubGVuZ3RoID09PSBzaXplLFxyXG4gICAgLy8gICAgIC8v6rKw6rO8IOuqqeuhneydmCDqsJzsiJjqsIAg7Y6Y7J207KeAIO2BrOq4sOqwgCDqsJnsnYQg6rK97JqwIOuLpOydjO2OmOydtOyngCDsobTsnqztlZzri6Tqs6Ag6rCA7KCVLFxyXG4gICAgLy8gICAgIGxvYWRpbmcsXHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCB7cGFnaW5hdGlvbixpZHN9ID0gc3RhdGUudHJhbnNhY3Rpb25zO1xyXG4gICAgY29uc3Qge251bWJlcixzaXplfSA9IHBhZ2luYXRpb247XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaFBhcmFtcyA6IHN0YXRlLnNlYXJjaEZpbHRlci5wYXJhbXMsXHJcbiAgICAgICAgcGFnZU51bWJlciA6IG51bWJlciB8fCAxICxcclxuICAgICAgICBoYXNOZXh0IDogaWRzLmxlbmd0aCA9PT0gc2l6ZSxcclxuICAgICAgICBsb2FkaW5nIDogdHJhbnNhY3Rpb25MaXN0TG9hZGluZ1N0YXRlU2VsZWN0b3Ioc3RhdGUpLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICByZXF1ZXN0VHJhbnNhY3Rpb25MaXN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoVHJhbnNhY3Rpb25QYWdpbmF0aW9uKTsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblNlYXJjaEZpbHRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tYWluL1RyYW5zYWN0aW9uU2VhcmNoRmlsdGVyXCI7XHJcbi8vIGltcG9ydCB7IHNldFRyYW5zYWN0aW9uTGlzdCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RyYW5zYWN0aW9uQWN0aW9uc1wiO1xyXG4vL2ltcG9ydCB7IHJlcXVlc3RUcmFuc2FjdGlvbkxpc3QgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90cmFuc2FjdGlvbkFjdGlvbnNcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFRyYW5zYWN0aW9uTGlzdCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RyYW5zYWN0aW9uUGFja0FjdGlvbnNcIjtcclxuaW1wb3J0IHtzZXRGaWx0ZXJ9IGZyb20gJy4uLy4uL2FjdGlvbnMvc2VhcmNoRmlsdGVyQWN0aW9ucydcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9Pih7XHJcbiAgaW5pdFZhbHVlcyA6IHN0YXRlLnNlYXJjaEZpbHRlci5wYXJhbXMsXHJcbn0pXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgcmVxdWVzdFRyYW5zYWN0aW9uTGlzdCxzZXRGaWx0ZXIgfSkoXHJcbi8vICAgVHJhbnNhY3Rpb25TZWFyY2hGaWx0ZXJcclxuLy8gKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShUcmFuc2FjdGlvblNlYXJjaEZpbHRlcik7IiwiLy8gaW1wb3J0IHtcclxuLy8gRkVUQ0hfVFJBTlNBQ1RJT05fTElTVCxcclxuLy8gQ1JFQVRFX1RSQU5TQUNUSU9OLFxyXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvdHJhbnNhY3Rpb25QYWNrQWN0aW9ucyc7XHJcbi8vIGltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0J1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCB0cmFuc2FjdGlvbnNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnRyYW5zYWN0aW9uczsgXHJcbi8vIC8v7Iqk7Yag7Ja0642w7J207YSw7JeQ7IScIOqxsOuemCDsoJXrs7Trpbwg7LaU7Lac7ZWY64qUIOyFgOugie2EsFxyXG5cclxuLy8gLy8gZXhwb3J0IGNvbnN0IHRyYW5zYWN0aW9uTGlzdFNlbGVjdG9yID0gKHN0YXRlKSA9PntcclxuLy8gLy8gICAgICAgICAgICAgLy/qt7jrnpjtlIQgREIg6rWs7KGw7J2YIOqxsOuemOuqqeuhneyekOujjOulvCDsm5Drs7jrsLDsl7TroZwg67OA7ZmY7ZWY64qUIOyFgOugie2EsC5cclxuLy8gLy8gICAgICAgICAgICAgY29uc3Qge2lkcyxlbnRpdGllc30gPSB0cmFuc2FjdGlvbnNTZWxlY3RvcihzdGF0ZSk7XHJcbi8vIC8vICAgICAgICAgICAgIHJldHVybiBpZHMubWFwKChpZCk9PmVudGl0aWVzW2lkXSk7XHJcbi8vIC8vICAgICAgICAgfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHRyYW5zYWN0aW9uTGlzdFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgICBbdHJhbnNhY3Rpb25zU2VsZWN0b3JdLHRyYW5zYWN0aW9ucz0+e1xyXG4vLyAgICAgICAgIGNvbnN0IHtpZHMsZW50aXRpZXN9ID0gdHJhbnNhY3Rpb25zO1xyXG4vLyAgICAgICAgIHJldHVybiBpZHMubWFwKGlkPT5lbnRpdGllc1tpZF0pO1xyXG4vLyAgICAgfVxyXG4vLyApXHJcblxyXG4vLyAvL+uwmOuzteuQnCDqtazsobDrpbwg67CY7ZmY7ZWY64qUIOqyveyasCByZXNlbGVjdG9y7JeQIOyggOyepeyLnOy8nOuRrOyEnCDslrjsoJzrk6Ag67mg66W06rKMIOywvuyVhOuCvOyImCDsnojri6QuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9hZGluZ1N0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiB0cmFuc2FjdGlvbnNTZWxlY3RvcihzdGF0ZSkubG9hZGluZ1N0YXRlO1xyXG4vLyAvL+qxsOuemCDsoJXrs7TsnZgg7KCE7LK0IOuhnOuUqSDsoJXrs7Qg6rCd7LK066W8IOy2lOy2nO2VmOuKlCDshYDroInthLBcclxuXHJcbi8vIGV4cG9ydCBjb25zdCB0cmFuc2FjdGlvbkxpc3RMb2FkaW5nU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGxvYWRpbmdTdGF0ZVNlbGVjdG9yKHN0YXRlKVtGRVRDSF9UUkFOU0FDVElPTl9MSVNUXTtcclxuLy8gLy/soITssrQg6rGw656YIOuqqeuhneyalOyyreydmCDroZzrlKnsg4Htg5zrp4wg7LaU7Lac7ZWY64qUIOyFgOugie2EsFxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHRyYW5zYWN0aW9uQ3JlYXRlTG9hZGluZ1N0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiBsb2FkaW5nU3RhdGVTZWxlY3RvcihzdGF0ZSlbQ1JFQVRFX1RSQU5TQUNUSU9OXTtcclxuLy8gLy/qsbDrnpgg7IOd7ISxIOyalOyyreydmCDroZzrlKnsg4Htg5zrp4zsnYQg7LaU7Lac7ZWY64qUIOyFgOugie2EsFxyXG5cclxuaW1wb3J0IGNyZWF0ZVNlbGVjdG9ycyBmcm9tICcuLi9hcGktcmVkdXgtcGFjay9jcmVhdGVTZWxlY3RvcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIHJlc291cmNlU2VsZWN0b3IgOiB0cmFuc2FjdGlvbnNTZWxlY3RvcixcclxuICAgIGNvbGxlY3Rpb25TZWxlY3RvciA6IHRyYW5zYWN0aW9uTGlzdFNlbGVjdG9yLFxyXG4gICAgY29sbGVjdGlvbkxvYWRpbmdTdGF0ZVNlbGVjdG9yIDogdHJhbnNhY3Rpb25MaXN0TG9hZGluZ1N0YXRlU2VsZWN0b3IsXHJcbiAgICBjcmVhdGVMb2FkaW5nU3RhdGVTZWxlY3RvciA6IHRyYW5zYWN0aW9uQ3JlYXRlTG9hZGluZ1N0YXRlU2VsZWN0b3IsXHJcbiAgICBwYWdpbmF0aW9uU2VsZWN0b3IsXHJcbn0gPSBjcmVhdGVTZWxlY3RvcnMoJ3RyYW5zYWN0aW9ucycpOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3NzIH0gZnJvbSBcIi4vd2l0aFN0eWxlc1wiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHN0eWxlcyxcclxuICAgICAgbGFyZ2UsXHJcbiAgICAgIHhsYXJnZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIHhzbWFsbCxcclxuICAgICAgcHJpbWFyeSxcclxuICAgICAgc2Vjb25kYXJ5LFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBvblByZXNzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgey4uLmNzcyhcclxuICAgICAgICAgIHN0eWxlcy5kZWZhdWx0LFxyXG4gICAgICAgICAgeHNtYWxsICYmIHN0eWxlcy54c21hbGwsXHJcbiAgICAgICAgICBzbWFsbCAmJiBzdHlsZXMuc21hbGwsXHJcbiAgICAgICAgICBsYXJnZSAmJiBzdHlsZXMubGFyZ2UsXHJcbiAgICAgICAgICB4bGFyZ2UgJiYgc3R5bGVzLnhsYXJnZSxcclxuICAgICAgICAgIHNlY29uZGFyeSAmJiBzdHlsZXMuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgcHJpbWFyeSAmJiBzdHlsZXMucHJpbWFyeSxcclxuICAgICAgICAgIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uUHJlc3N9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgeHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sLFxyXG4gIHhsYXJnZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2Vjb25kYXJ5OiBQcm9wVHlwZXMuYm9vbCxcclxuICBwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcclxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uUHJlc3M6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIG9uUHJlc3M6ICgpID0+IHt9LFxyXG4gIHhzbWFsbDogZmFsc2UsXHJcbiAgc21hbGw6IGZhbHNlLFxyXG4gIGxhcmdlOiBmYWxzZSxcclxuICB4bGFyZ2U6IGZhbHNlLFxyXG4gIHNlY29uZGFyeTogZmFsc2UsXHJcbiAgcHJpbWFyeTogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGNvbG9yLCBzaXplLCB1bml0LCBkZXB0aCwgZm9udFdlaWdodCB9KSA9PiAoe1xyXG4gIGRlZmF1bHQ6IHtcclxuICAgIC4uLmRlcHRoLmxldmVsMSxcclxuICAgIGJvcmRlcjogMSxcclxuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IuZGVmYXVsdCxcclxuICAgIGJvcmRlclJhZGl1czogdW5pdCxcclxuICAgIGNvbG9yOiBjb2xvci5kZWZhdWx0LFxyXG4gICAgZm9udFNpemU6IHNpemUubWQsXHJcbiAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LmJvbGQsXHJcbiAgICBwYWRkaW5nOiB1bml0ICogMixcclxuICAgIHBhZGRpbmdMZWZ0OiB1bml0ICogNCxcclxuICAgIHBhZGRpbmdSaWdodDogdW5pdCAqIDQsXHJcbiAgICBvdXRsaW5lOiAwLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5ncmF5TGlnaHQsXHJcbiAgICB9LFxyXG4gICAgXCI6Zm9jdXNcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFwiMCAwIDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS54ZyxcclxuICAgIHBhZGRpbmc6IHVuaXQgKiAyLjUsXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgZm9udFNpemU6IHNpemUubGcsXHJcbiAgICBwYWRkaW5nOiB1bml0ICogMi41LFxyXG4gIH0sXHJcbiAgc21hbGw6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLnNtLFxyXG4gICAgcGFkZGluZzogdW5pdCAqIDEuNSxcclxuICB9LFxyXG4gIHhzbWFsbDoge1xyXG4gICAgZm9udFNpemU6IHNpemUueHMsXHJcbiAgICBwYWRkaW5nOiB1bml0LFxyXG4gIH0sXHJcbiAgcHJpbWFyeToge1xyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLnByaW1hcnksXHJcbiAgICBjb2xvcjogY29sb3Iud2hpdGUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLnByaW1hcnksXHJcbiAgICBcIjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IucHJpbWFyeURhcmssXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5OiB7XHJcbiAgICBib3JkZXJDb2xvcjogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgY29sb3I6IGNvbG9yLnNlY29uZGFyeSxcclxuICB9LFxyXG4gIGRpc2FibGVkOiB7XHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IuZ3JheURhcmssXHJcbiAgICBjb2xvcjogY29sb3IuZ3JheUxpZ2h0LFxyXG4gICAgY3Vyc29yOiBcImRlZmF1bHRcIixcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IuZ3JheSxcclxuICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5ncmF5LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSkoQnV0dG9uKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCBTcGFjaW5nLCB7IHByb3BUeXBlcyBhcyBzcGFjaW5nUHJvcFR5cGUgfSBmcm9tIFwiLi9TcGFjaW5nXCI7XHJcblxyXG5jbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc3R5bGVzLCAuLi5zcGFjaW5nUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHsuLi5jc3Moc3R5bGVzLndyYXBwZXIpfT5cclxuICAgICAgICA8U3BhY2luZyB7Li4uc3BhY2luZ1Byb3BzfT57Y2hpbGRyZW59PC9TcGFjaW5nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5DYXJkLnByb3BUeXBlcyA9IHtcclxuICAuLi5zcGFjaW5nUHJvcFR5cGUsXHJcbiAgLi4ud2l0aFN0eWxlc1Byb3BUeXBlcyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGRlcHRoLCB1bml0LCBjb2xvciB9KSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIC4uLmRlcHRoLmxldmVsMSxcclxuICAgIGJvcmRlclJhZGl1czogdW5pdCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3Iud2hpdGUsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiB1bml0ICogNCxcclxuICB9LFxyXG59KSkoQ2FyZCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgeyBQcm92aWRlciwgQ29uc3VtZXIgfSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY2xhc3MgRm9ybVByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIENvbnN1bWVyID0gQ29uc3VtZXI7XHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh7IGluaXRWYWx1ZXMgfSwgcHJldlN0YXRlKSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPVxyXG4gICAgICBpbml0VmFsdWVzICE9PSBwcmV2U3RhdGUuaW5pdFZhbHVlcyA/IGluaXRWYWx1ZXMgOiBwcmV2U3RhdGUudmFsdWVzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5pdFZhbHVlcyxcclxuICAgICAgdmFsdWVzLFxyXG4gICAgICBlcnJvcjoge30sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlcywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8v662Q7J6EP1xyXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoZXJyb3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU3VibWl0KHZhbHVlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShuYW1lLCB1cGRhdGVkVmFsdWUpIHtcclxuICAgIHRoaXMudmFsaWRhdGUodGhpcy5zdGF0ZS52YWx1ZXMpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoeyB2YWx1ZXMgfSkgPT4gKHtcclxuICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgIFtuYW1lXTogdXBkYXRlZFZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiB7fSB9KTtcclxuICB9XHJcbiAgdmFsaWRhdGUodmFsdWVzKSB7XHJcbiAgICBjb25zdCB7IHZhbGlkYXRlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKCF2YWxpZGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnByb3BzLnZhbGlkYXRlKHZhbHVlcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZXMsIGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7IGVycm9ycywgdmFsdWVzLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSwgcmVzZXQ6IHRoaXMucmVzZXQgfX1cclxuPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9mb3JtPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkZvcm1Qcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdmFsaWRhdGU6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRm9ybVByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbml0VmFsdWVzOiB7fSxcclxuICB2YWxpZGF0ZTogKCkgPT4gKHt9KSxcclxuICBvbkNoYW5nZTogKCkgPT4gKHt9KSxcclxuICBoYW5kbGVTdWJtaXQ6ICgpID0+ICh7fSksXHJcbiAgcmVzZXQ6ICgpID0+ICh7fSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtUHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3NzIH0gZnJvbSBcIi4vd2l0aFN0eWxlc1wiO1xyXG5jb25zdCBoZWFkaW5nVGFncyA9IFtcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiXTtcclxuXHJcbmNsYXNzIEhlYWRpbmcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpbnZlcnNlLCBsZXZlbCwgc3R5bGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IEhlYWRpbmdUYWcgPSBoZWFkaW5nVGFnc1tsZXZlbCAtIDFdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEhlYWRpbmdUYWdcclxuICAgICAgICB7Li4uY3NzKFxyXG4gICAgICAgICAgc3R5bGVzLmRlZmF1bHQsXHJcbiAgICAgICAgICBzdHlsZXNbYGxldmVsJHtsZXZlbH1gXSxcclxuICAgICAgICAgIGludmVyc2UgJiYgc3R5bGVzLmludmVyc2VcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0hlYWRpbmdUYWc+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgZGFyazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxldmVsOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygoeyBjb2xvciwgZm9udFdlaWdodCwgc2l6ZSwgbGluZUhlaWdodCwgdW5pdCB9KSA9PiAoe1xyXG4gIGRlZmF1bHQ6IHtcclxuICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQubGcsXHJcbiAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LmJvbGQsXHJcbiAgfSxcclxuICBpbnZlcnNlOiB7XHJcbiAgICBjb2xvcjogY29sb3Iud2hpdGUsXHJcbiAgfSxcclxuICBsZXZlbDE6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLmgxLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0ICogMixcclxuICAgIG1hcmdpbkJvdHRvbTogdW5pdCAqIDQsXHJcbiAgfSxcclxuICBsZXZlbDI6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLmgyLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0ICogMixcclxuICAgIG1hcmdpbkJvdHRvbTogdW5pdCAqIDQsXHJcbiAgfSxcclxuICBsZXZlbDM6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLmgzLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0ICogMS41LFxyXG4gICAgbWFyZ2luQm90dG9tOiB1bml0ICogMyxcclxuICB9LFxyXG4gIGxldmVsNDoge1xyXG4gICAgZm9udFNpemU6IHNpemUueGcsXHJcbiAgICBtYXJnaW5Ub3A6IHVuaXQsXHJcbiAgICBtYXJnaW5Cb3R0b206IHVuaXQgKiAyLFxyXG4gIH0sXHJcbiAgbGV2ZWw1OiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5tZCxcclxuICAgIG1hcmdpblRvcDogdW5pdCxcclxuICAgIG1hcmdpbkJvdHRvbTogdW5pdCAqIDIsXHJcbiAgfSxcclxuICBsZXZlbDY6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLm1kLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0LFxyXG4gICAgbWFyZ2luQm90dG9tOiB1bml0LFxyXG4gIH0sXHJcbn0pKShIZWFkaW5nKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCB7IHVuaXQgfSBmcm9tIFwiLi9UaGVtZVwiO1xyXG5cclxuY2xhc3MgSW5saW5lTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYWxpZ24sXHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBzdHlsZXMsXHJcbiAgICAgIHNwYWNpbmdCZXR3ZWVuLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgey4uLmNzcyhcclxuICAgICAgICAgIHN0eWxlcy53cmFwcGVyLFxyXG4gICAgICAgICAgYWxpZ24gPT09IFwiY2VudGVyXCIgJiYgc3R5bGVzLmFsaWduQ2VudGVyLFxyXG4gICAgICAgICAgYWxpZ24gPT09IFwicmlnaHRcIiAmJiBzdHlsZXMuYWxpZ25SaWdodCxcclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ24gPT09IFwidG9wXCIgJiYgc3R5bGVzLnZlcnRpY2FsQWxpZ25Ub3AsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduID09PSBcImJvdHRvbVwiICYmIHN0eWxlcy52ZXJ0aWNhbEFsaWduQm90dG9tXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiB7Li4uY3NzKHsgbWFyZ2luUmlnaHQ6IHNwYWNpbmdCZXR3ZWVuICogdW5pdCB9KX0+e2NoaWxkfTwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5JbmxpbmVMaXN0LnByb3BUeXBlcyA9IHtcclxuICAuLi53aXRoU3R5bGVzUHJvcFR5cGVzLFxyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcclxuICB2ZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMub25lT2YoW1widG9wXCIsIFwibWlkZGxlXCIsIFwiYm90dG9tXCJdKSxcclxuICBzcGFjaW5nQmV0d2VlbjogUHJvcFR5cGVzLm51bWJlcixcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5JbmxpbmVMaXN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBzcGFjaW5nQmV0d2VlbjogMSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoKCkgPT4gKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIiwgLy/qsIDroZzrsLDsuZgg7IaN7ISx7KCB7JqpXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCAvL+qwgOuhnOuwsOy5mCDsho3shLHsoIHsmqlcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIiwgLy/tmZTrqbQg67CW7J2YIO2VmOychOyalOyGjOulvCDslYTrnpjroZwg67CA7Ja0IOuwsOy5mFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLCAvL+2VmOychOyalOyGjOulvCDsmbzsqr3rtoDthLAg67Cw7LmYXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCAvL+2VmOychOyalOyGjOulvCDsg4HtlZgg6rCA7Jq0642wIOygleugrFxyXG4gIH0sXHJcbiAgYWxpZ25DZW50ZXI6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgYWxpZ25SaWdodDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgLy/tlZjsnITsmpTshowg7Jik66W47Kq9IOygleugrFxyXG4gIH0sXHJcbiAgdmVydGljYWxBbGlnblRvcDoge1xyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsIC8v7ZWY7JyE64K07Jqp7J2EIOychOuhnCDsoJXroKxcclxuICB9LFxyXG4gIHZlcnRpY2FsQWxpZ25Cb3R0b206IHtcclxuICAgIC8v7ZWY7JyEIOyalOyGjOydmCDrgrTsmqnsnYQg7JWE656Y66GcIOygleugrFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxyXG4gIH0sXHJcbn0pKShJbmxpbmVMaXN0KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnNldFJlZiA9IHRoaXMuc2V0UmVmLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZWYuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UmVmKHJlZikge1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICBsYWJlbCxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIHN0eWxlcyxcclxuICAgICAgbGFyZ2UsXHJcbiAgICAgIHhsYXJnZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIHhzbWFsbCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmaWVsZHNldCB7Li4uY3NzKHN0eWxlcy53cmFwcGVyKX0+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPXtgaW5wdXRfJHtuYW1lfWB9XHJcbiAgICAgICAgICB7Li4uY3NzKHN0eWxlcy5sYWJlbCwgZXJyb3JNZXNzYWdlICYmIHN0eWxlcy5lcnJvckxhYmVsKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlIHx8IGxhYmVsfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4uY3NzKFxyXG4gICAgICAgICAgICBzdHlsZXMuaW5wdXQsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSAmJiBzdHlsZXMuZXJyb3IsXHJcbiAgICAgICAgICAgIHhzbWFsbCAmJiBzdHlsZXMueHNtYWxsLFxyXG4gICAgICAgICAgICBzbWFsbCAmJiBzdHlsZXMuc21hbGwsXHJcbiAgICAgICAgICAgIGxhcmdlICYmIHN0eWxlcy5sYXJnZSxcclxuICAgICAgICAgICAgeGxhcmdlICYmIHN0eWxlcy54bGFyZ2VcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBpZD17YGlucHV0XyR7bmFtZX1gfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgLi4ud2l0aFN0eWxlc1Byb3BUeXBlcyxcclxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1widGV4dFwiLCBcIm51bWJlclwiLCBcInByaWNlXCJdKSxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gIGF1dG9Gb2N1czogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGRlcHRoLCB1bml0LCBjb2xvciwgc2l6ZSwgbGluZUhlaWdodCB9KSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIH0sXHJcbiAgbGFiZWw6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIGZvbnRTaXplOiBzaXplLnhzLFxyXG4gICAgdG9wOiAyLFxyXG4gICAgbGVmdDogdW5pdCAqIDIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIG1hcmdpblRvcDogMixcclxuICAgIGZvbnRTaXplOiBzaXplLm1kLFxyXG4gICAgbGluZUhlaWdodDogbGluZUhlaWdodC5tZCxcclxuICAgIHBhZGRpbmc6IHVuaXQgKiAxLjUsXHJcbiAgICBib3JkZXI6IDEsXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IucHJpbWFyeSxcclxuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICBvdXRsaW5lOiAwLFxyXG4gICAgXCI6Zm9jdXNcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFwiMCAwIDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS54ZyxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5sZyxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5zbSxcclxuICAgIHBhZGRpbmc6IHVuaXQsXHJcbiAgfSxcclxuICBlcnJvckxhYmVsOiB7XHJcbiAgICBjb2xvcjogY29sb3IuZXJyb3IsXHJcbiAgfSxcclxuICBlcnJvcjoge1xyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLmVycm9yLFxyXG4gIH0sXHJcbn0pKShJbnB1dCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCB7UHJvdmlkZXIsIENvbnN1bWVyfSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIE9wdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGxhYmVsLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxyXG4gICAgICAgIHtsYWJlbCB8fCB2YWx1ZX1cclxuICAgICAgPC9vcHRpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuT3B0aW9uLnByb3BUeXBlcyA9IHtcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCBPcHRpb24gZnJvbSBcIi4vT3B0aW9uXCI7XHJcblxyXG5leHBvcnQgeyBPcHRpb24gfTtcclxuXHJcbi8vIFNlbGVjdCDsu7Ttj6zrhIztirjripQg64yA67aA67aEIE9wdGlvbiDsu7Ttj6zrhIztirjrpbwg7Y+s7ZWo7ZWY6rOgIOyeiOycvOuvgOuhnCxcclxuLy8gU2VsZWN0IOy7tO2PrOuEjO2KuOulvCDsnoTtj6ztirjtlaDrlYxcclxuLy8gT3B0aW9uIOy7tO2PrOuEjO2KuOulvCDtlajqu5gg7LC47KGw7ZWg7IiYIOyeiOuPhOuhnSBPcHRpb24g7Lu07Y+s64SM7Yq466W8IOydteyKpO2PrO2KuO2VqFxyXG5cclxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc2V0UmVmID0gdGhpcy5zZXRSZWYuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUJsdXIgPSB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlQmx1cigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgb25DaGFuZ2UobmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZWYuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UmVmKHJlZikge1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICBsYWJlbCxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHN0eWxlcyxcclxuICAgICAgbGFyZ2UsXHJcbiAgICAgIHhsYXJnZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIHhzbWFsbCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBmb2N1c2VkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZpZWxkc2V0IHsuLi5jc3Moc3R5bGVzLndyYXBwZXIpfT5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9e2BpbnB1dF8ke25hbWV9YH1cclxuICAgICAgICAgIHsuLi5jc3Moc3R5bGVzLmxhYmVsLCBlcnJvck1lc3NhZ2UgJiYgc3R5bGVzLmVycm9yTGFiZWwpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2UgfHwgbGFiZWx9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uY3NzKFxyXG4gICAgICAgICAgICBzdHlsZXMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHhzbWFsbCAmJiBzdHlsZXMueHNtYWxsUGFkZGluZyxcclxuICAgICAgICAgICAgc21hbGwgJiYgc3R5bGVzLnNtYWxsUGFkZGluZyxcclxuICAgICAgICAgICAgbGFyZ2UgJiYgc3R5bGVzLmxhcmdlUGFkZGluZyxcclxuICAgICAgICAgICAgeGxhcmdlICYmIHN0eWxlcy54bGFyZ2VQYWRkaW5nLFxyXG4gICAgICAgICAgICBmb2N1c2VkICYmIHN0eWxlcy5mb2N1cyxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIHN0eWxlcy5lcnJvclxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHsuLi5jc3MoXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlbGVjdCxcclxuICAgICAgICAgICAgICB4c21hbGwgJiYgc3R5bGVzLnhzbWFsbCxcclxuICAgICAgICAgICAgICBzbWFsbCAmJiBzdHlsZXMuc21hbGwsXHJcbiAgICAgICAgICAgICAgbGFyZ2UgJiYgc3R5bGVzLmxhcmdlLFxyXG4gICAgICAgICAgICAgIHhsYXJnZSAmJiBzdHlsZXMueGxhcmdlXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke25hbWV9YH1cclxuICAgICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+XHJcbiAgICAgICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGRpc2FibGVkIH0pXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5TZWxlY3QucHJvcFR5cGVzID0ge1xyXG4gIC4uLndpdGhTdHlsZXNQcm9wVHlwZXMsXHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgYXV0b0ZvY3VzOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoKHsgZGVwdGgsIHVuaXQsIGNvbG9yLCBzaXplLCBsaW5lSGVpZ2h0IH0pID0+ICh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBsYWJlbDoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgZm9udFNpemU6IHNpemUueHMsXHJcbiAgICB0b3A6IDIsXHJcbiAgICBsZWZ0OiB1bml0ICogMixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgfSxcclxuICBwbGFjZWhvbGRlcjoge1xyXG4gICAgbWFyZ2luVG9wOiAyLFxyXG4gICAgYm9yZGVyOiAxLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLnByaW1hcnksXHJcbiAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICBwYWRkaW5nOiB1bml0ICogMS41LFxyXG4gIH0sXHJcbiAgZm9jdXM6IHtcclxuICAgIGJveFNoYWRvdzogXCIwIDAgMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICB9LFxyXG4gIHhsYXJnZVBhZGRpbmc6IHtcclxuICAgIHBhZGRpbmc6IHVuaXQgKiAyLFxyXG4gIH0sXHJcbiAgbGFyZ2VQYWRkaW5nOiB7XHJcbiAgICBwYWRkaW5nOiB1bml0ICogMixcclxuICB9LFxyXG4gIHNtYWxsUGFkZGluZzoge1xyXG4gICAgcGFkZGluZzogdW5pdCAtIDEsXHJcbiAgfSxcclxuICBzZWxlY3Q6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLm1kLFxyXG4gICAgbGluZUhlaWdodDogbGluZUhlaWdodC5tZCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3Iud2hpdGUsXHJcbiAgICBib3JkZXI6IDAsXHJcbiAgICBvdXRsaW5lOiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgeGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS54ZyxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5sZyxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5zbSxcclxuICB9LFxyXG4gIGVycm9yTGFiZWw6IHtcclxuICAgIGNvbG9yOiBjb2xvci5lcnJvcixcclxuICB9LFxyXG4gIGVycm9yOiB7XHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IuZXJyb3IsXHJcbiAgfSxcclxufSkpKFNlbGVjdCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIi4vd2l0aFN0eWxlc1wiO1xyXG5pbXBvcnQgeyB1bml0IH0gZnJvbSBcIi4vVGhlbWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgLy/snbQg6rCS7Jy866GcIOqzteqwhCDrhIjruYQg6rOE7IKwXHJcbiAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlcixcclxuICByaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGhvcml6b250YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5jbGFzcyBTcGFjaW5nIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgdG9wLFxyXG4gICAgICBib3R0b20sXHJcbiAgICAgIGxlZnQsXHJcbiAgICAgIHJpZ2h0LFxyXG4gICAgICB2ZXJ0aWNhbCxcclxuICAgICAgaG9yaXpvbnRhbCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgY29tcHV0ZWRUb3AgPSB0b3AgPyB0b3AgOiB2ZXJ0aWNhbDtcclxuICAgIGNvbnN0IGNvbXB1dGVkQm90dG9tID0gYm90dG9tID8gYm90dG9tIDogdmVydGljYWw7XHJcbiAgICBjb25zdCBjb21wdXRlZExlZnQgPSBsZWZ0ID8gbGVmdCA6IGhvcml6b250YWw7XHJcbiAgICBjb25zdCBjb21wdXRlZFJpZ2h0ID0gcmlnaHQgPyByaWdodCA6IGhvcml6b250YWw7XHJcblxyXG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSB7XHJcbiAgICAgIGZsZXg6IDEsXHJcbiAgICAgIC4uLihjb21wdXRlZFRvcCAmJiB7IG1hcmdpblRvcDogY29tcHV0ZWRUb3AgKiB1bml0IH0pLFxyXG4gICAgICAuLi4oY29tcHV0ZWRCb3R0b20gJiYgeyBtYXJnaW5Cb3R0b206IGNvbXB1dGVkQm90dG9tICogdW5pdCB9KSxcclxuICAgICAgLi4uKGNvbXB1dGVkTGVmdCAmJiB7IG1hcmdpbkxlZnQ6IGNvbXB1dGVkTGVmdCAqIHVuaXQgfSksXHJcbiAgICAgIC4uLihjb21wdXRlZFJpZ2h0ICYmIHsgbWFyZ2luUmlnaHQ6IGNvbXB1dGVkUmlnaHQgKiB1bml0IH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiB7Li4uY3NzKGNvbXB1dGVkU3R5bGVzKX0+e2NoaWxkcmVufTwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcblNwYWNpbmcucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BhY2luZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNzcywgd2l0aFN0eWxlc1Byb3BUeXBlcyB9IGZyb20gXCIuL3dpdGhTdHlsZXNcIjtcclxuXHJcbmNsYXNzIFRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHN0eWxlcywgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gPHRhYmxlIHsuLi5jc3Moc3R5bGVzLnRhYmxlKX0+e2NoaWxkcmVufTwvdGFibGU+O1xyXG4gIH1cclxufVxyXG5cclxuVGFibGUucHJvcFR5cGVzID0ge1xyXG4gIC4uLndpdGhTdHlsZXNQcm9wVHlwZXMsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGNvbG9yLCB1bml0IH0pID0+ICh7XHJcbiAgdGFibGU6IHtcclxuICAgIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxufSkpKFRhYmxlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgVGFibGVCb2R5IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgLy9IZWFk7JmAIOycoOyCrO2VnCDrsKnsi53snLzroZwg7J6Q7Iud7ZSE66Gc7Y287Yuw66W8IOyCrOyaqe2VqFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJhc2VsaW5lID0gaW5kZXggPCBsZW5ndGggLSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBiYXNlbGluZSB9KTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC90Ym9keT5cclxuICAgICAgLy/rp4jsp4Drp4nsnYQg7KCc7Jm47ZWcIO2WieydgCDrsJHspITsnYQg7ZGc7Iuc7ZWY64+E66GdXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuVGFibGVCb2R5LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUJvZHk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3NzLCB3aXRoU3R5bGVzUHJvcFR5cGVzIH0gZnJvbSBcIi4vd2l0aFN0eWxlc1wiO1xyXG5cclxuY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhbGlnbiwgYmFzZWxpbmUsIHN0eWxlcywgY2hpbGRyZW4sIGlzSGVhZGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgVGFnID0gaXNIZWFkZXIgPyBcInRoXCIgOiBcInRkXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGFnXHJcbiAgICAgICAgey4uLmNzcyhcclxuICAgICAgICAgIHN0eWxlcy5jZWxsLFxyXG4gICAgICAgICAgaXNIZWFkZXIgJiYgc3R5bGVzLmhlYWRlcixcclxuICAgICAgICAgICFpc0hlYWRlciAmJiBiYXNlbGluZSAmJiBzdHlsZXMuYmFzZWxpbmUsXHJcbiAgICAgICAgICBhbGlnbiA9PT0gXCJjZW50ZXJcIiAmJiBzdHlsZXMuYWxpZ25DZW50ZXIsXHJcbiAgICAgICAgICBhbGlnbiA9PT0gXCJyaWdodFwiICYmIHN0eWxlcy5hbGlnblJpZ2h0XHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9UYWc+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuVGFibGVDZWxsLnByb3BUeXBlcyA9IHtcclxuICAuLi53aXRoU3R5bGVzUHJvcFR5cGVzLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXHJcbiAgYmFzZWxpbmU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGlzSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcblRhYmxlQ2VsbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFzZWxpbmU6IHRydWUsXHJcbiAgaXNIZWFkZXI6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygoeyBjb2xvciwgdW5pdCB9KSA9PiAoe1xyXG4gIGNlbGw6IHtcclxuICAgIHBhZGRpbmdUb3A6IHVuaXQgKiA0LFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdW5pdCAqIDQsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IHVuaXQgKiA4LFxyXG4gICAgcGFkZGluZ0xlZnQ6IHVuaXQgKiA4LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci53aGl0ZSxcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IucHJpbWFyeSxcclxuICAgIGNvbG9yOiBjb2xvci53aGl0ZSxcclxuICB9LFxyXG4gIGJhc2VsaW5lOiB7XHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtjb2xvci5ib3JkZXJ9YCxcclxuICB9LFxyXG4gIGFsaWduQ2VudGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBhbGlnblJpZ2h0OiB7XHJcbiAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICB9LFxyXG59KSkoVGFibGVDZWxsKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgVGFibGVIZWFkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgLy8g7J6Q7IudIO2UhOuhnO2NvO2LsOydmCDqsJLsnYAgSlNYIOuFuO2KuCDtmJXtg5wg7J2066+A66GcIOyekOuwlOyKpO2BrOumve2KuOydmCBtYXAoKSDtlajsiJjqsIAg7JWE64uI6528IOumrOyVoe2KuOyXkOyEnCDsoJzqs7XtlZjripRcclxuICAvLyBSZWFjdC5DaGlsZHJlbi5tYXAoKSDtlajsiJjrpbwg7IKs7Jqp7ZW07JW87ZWoLiDtlbTri7kg7ZWo7IiY64qUIOyekOyLnSDtlITroZztjbzti7Dsl5Ag7Y+s7ZWo65CcIEpTWOydmCDsu7Ttj6zrhIztirgg7JeY66as66i87Yq466W8XHJcbiAgLy8g67Cw7Je0IOyymOufvCDst6jquIntlaguIOuYkO2VnCBSZWFjdC5jbG9uZUVsZW1lbnQoKSDtlajsiJjrpbwg7IKs7Jqp7ZWY7JesIOqwgeqwgeydmCDsnpDsi50g7Lu07Y+s64SM7Yq47JeQIOy2lOqwgCDtlITroZztjbzti7Drpbwg7KCE64us7ZWoXHJcbiAgLy8g7ZW064u5IO2VqOyImOuKlCBKU1gg64W465Oc66W8IOuzteyCrO2VqCDri6TsnYwg7Yq57KCVIO2UhOuhnO2NvO2LsOulvCDstpTqsIDtlahcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT5cclxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBpc0hlYWRlcjogdHJ1ZSB9KVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4vL1RhYmxlSGVhZGVyIOy7tO2PrOuEjO2KuOydtOq4sCDrlYzrrLjsl5Ag6rCBIOuFuOuTnOyXkCBpc0hlYWRlciDtlITroZztjbzti7Drpbwg7LaU6rCA7ZW07KSMXHJcblxyXG5UYWJsZUhlYWQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmNsYXNzIFRhYmxlUm93IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaXNIZWFkZXIsIGJhc2VsaW5lIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+XHJcbiAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgYmFzZWxpbmUsIGlzSGVhZGVyIH0pXHJcbiAgICAgICAgKX1cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UYWJsZVJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGJhc2VsaW5lOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc0hlYWRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNzcyB9IGZyb20gXCIuL3dpdGhTdHlsZXNcIjtcclxuXHJcbmNsYXNzIFRleHQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBib2xkLFxyXG4gICAgICBsaWdodCxcclxuICAgICAgc3R5bGVzLFxyXG4gICAgICBsYXJnZSxcclxuICAgICAgeGxhcmdlLFxyXG4gICAgICBzbWFsbCxcclxuICAgICAgeHNtYWxsLFxyXG4gICAgICBwcmltYXJ5LFxyXG4gICAgICBzZWNvbmRhcnksXHJcbiAgICAgIGludmVyc2UsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgey4uLmNzcyhcclxuICAgICAgICAgIHN0eWxlcy5kZWZhdWx0LFxyXG4gICAgICAgICAgeHNtYWxsICYmIHN0eWxlcy54c21hbGwsXHJcbiAgICAgICAgICBzbWFsbCAmJiBzdHlsZXMuc21hbGwsXHJcbiAgICAgICAgICBsYXJnZSAmJiBzdHlsZXMubGFyZ2UsXHJcbiAgICAgICAgICB4bGFyZ2UgJiYgc3R5bGVzLnhsYXJnZSxcclxuICAgICAgICAgIHNlY29uZGFyeSAmJiBzdHlsZXMuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgcHJpbWFyeSAmJiBzdHlsZXMucHJpbWFyeSxcclxuICAgICAgICAgIGJvbGQgJiYgc3R5bGVzLmJvbGQsXHJcbiAgICAgICAgICBsaWdodCAmJiBzdHlsZXMubGlnaHQsXHJcbiAgICAgICAgICBpbnZlcnNlICYmIHN0eWxlcy5pbnZlcnNlXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblRleHQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIGJvbGQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcclxuICB4c21hbGw6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgeGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzZWNvbmRhcnk6IFByb3BUeXBlcy5ib29sLFxyXG4gIHByaW1hcnk6IFByb3BUeXBlcy5ib29sLFxyXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygoeyBjb2xvciwgZm9udFdlaWdodCwgc2l6ZSwgbGluZUhlaWdodCB9KSA9PiAoe1xyXG4gIGRlZmF1bHQ6IHtcclxuICAgIGNvbG9yOiBjb2xvci5kZWZhdWx0LFxyXG4gICAgZm9udFNpemU6IHNpemUubWQsXHJcbiAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0Lm1kLFxyXG4gICAgZm9udFdlaWdodDogZm9udFdlaWdodC5ub3JtYWwsXHJcbiAgfSxcclxuICB4bGFyZ2U6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLnhnLFxyXG4gICAgbGluZUhlaWdodDogbGluZUhlaWdodC54ZyxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5sZyxcclxuICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQubGcsXHJcbiAgfSxcclxuICBzbWFsbDoge1xyXG4gICAgZm9udFNpemU6IHNpemUuc20sXHJcbiAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0LnNtLFxyXG4gIH0sXHJcbiAgeHNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS54cyxcclxuICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQueHMsXHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBjb2xvcjogY29sb3IucHJpbWFyeSxcclxuICB9LFxyXG4gIHNlY29uZGFyeToge1xyXG4gICAgY29sb3I6IGNvbG9yLnNlY29uZGFyeSxcclxuICB9LFxyXG4gIGxpZ2h0OiB7XHJcbiAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LmxpZ2h0LFxyXG4gIH0sXHJcbiAgYm9sZDoge1xyXG4gICAgZm9udFdlaWdodDogZm9udFdlaWdodC5ib2xkLFxyXG4gIH0sXHJcbiAgaW52ZXJzZToge1xyXG4gICAgY29sb3I6IGNvbG9yLndoaXRlLFxyXG4gIH0sXHJcbn0pKShUZXh0KTtcclxuIiwiZXhwb3J0IGNvbnN0IExBUkdFX0FORF9BQk9WRSA9ICdsYXJnZUFuZEFib3ZlJztcclxuY29uc3QgQlJFQUtQT0lOVF9OQU1FUyA9IHtcclxuICBMQVJHRTogJ2xhcmdlJyxcclxuICBNRURJVU06ICdtZWRpdW0nLFxyXG4gIFNNQUxMOiAnc21hbGwnLFxyXG59O1xyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgW0JSRUFLUE9JTlRfTkFNRVMuTEFSR0VdOiAxMTI4LFxyXG4gIFtCUkVBS1BPSU5UX05BTUVTLk1FRElVTV06IDc0NCxcclxuICBbQlJFQUtQT0lOVF9OQU1FUy5TTUFMTF06IDMyNyxcclxufTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgW0xBUkdFX0FORF9BQk9WRV06IGBAbWVkaWEgKG1pbi13aWR0aDogJHticmVha3BvaW50c1tCUkVBS1BPSU5UX05BTUVTLkxBUkdFXX1weClgLFxyXG4gIFtCUkVBS1BPSU5UX05BTUVTLlNNQUxMXTogYEBtZWRpYSAobWF4LXdpZHRoOiAke2JyZWFrcG9pbnRzW0JSRUFLUE9JTlRfTkFNRVMuTUVESVVNXSAtIDF9cHgpYCxcclxuICBwcmludDogJ0BtZWRpYSBwcmludCcsXHJcbn07XHJcbmV4cG9ydCBjb25zdCB1bml0ID0gNDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyDsg4nsg4FcclxuICBjb2xvcjoge1xyXG4gICAgcHJpbWFyeTogJyMyMTk2RjMnLCAvLyDso7wg7IOJ7IOBXHJcbiAgICBwcmltYXJ5RGFyazogJyMxOTc2RDInLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzAwOTY4OCcsIC8vIOu2gCDsg4nsg4FcclxuICAgIHNlY29uZGFyeURhcms6ICcjMDA3OTZiJyxcclxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBncmF5OiAnIzllOWU5ZScsXHJcbiAgICBncmF5TGlnaHQ6ICcjZWVlZWVlJyxcclxuICAgIGdyYXlEYXJrOiAnIzYxNjE2MScsXHJcbiAgICBib3JkZXI6ICdyZ2JhKDAsIDAsIDAsIC4xNSknLFxyXG4gICAgZGVmYXVsdDogJyMzMzMzMzMnLCAvLyDquLDrs7gg66y47J6QIOyDieyDgVxyXG4gICAgZXJyb3I6ICcjZTUxYzIzJywgLy8g7Jik66WYIOyDieyDgVxyXG4gIH0sXHJcbiAgLy8g7Y+w7Yq4IOyCrOydtOymiFxyXG4gIHNpemU6IHtcclxuICAgIGgxOiA0OCxcclxuICAgIGgyOiAzNixcclxuICAgIGgzOiAyOCxcclxuICAgIHhnOiAyNCxcclxuICAgIGxnOiAxOCxcclxuICAgIG1kOiAxNCxcclxuICAgIHNtOiAxMixcclxuICAgIHhzOiAxMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHQ6IHtcclxuICAgIHhnOiAxLjYsXHJcbiAgICBsZzogMS42LFxyXG4gICAgbWQ6IDEuNSxcclxuICAgIHNtOiAxLjQsXHJcbiAgICB4czogMS40LFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDoge1xyXG4gICAgYm9sZDogJ2JvbGQnLFxyXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcclxuICAgIGxpZ2h0OiAzMDAsXHJcbiAgfSxcclxuICBkZXB0aDoge1xyXG4gICAgbGV2ZWwxOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCknLFxyXG4gICAgfSxcclxuICAgIGxldmVsMjoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpJyxcclxuICAgIH0sXHJcbiAgICBsZXZlbDM6IHtcclxuICAgICAgYm94U2hhZG93OiAnMCA4cHggMTdweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIOq4uOydtCDri6jsnIRcclxuICB1bml0LFxyXG4gIC8vIOuwmOydke2YlSDrr7jrlJTslrQg7IaN7ISxXHJcbiAgcmVzcG9uc2l2ZSxcclxufTtcclxuIiwiaW1wb3J0IFRoZW1lZFN0eWxlU2hlZXQgZnJvbSAncmVhY3Qtd2l0aC1zdHlsZXMvbGliL1RoZW1lZFN0eWxlU2hlZXQnO1xyXG5pbXBvcnQgYXBocm9kaXRlSW50ZXJmYWNlIGZyb20gJ3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1hcGhyb2RpdGUnO1xyXG5pbXBvcnQge2Nzcyx3aXRoU3R5bGVzLHdpdGhTdHlsZXNQcm9wVHlwZXN9IGZyb20gJ3JlYWN0LXdpdGgtc3R5bGVzJztcclxuaW1wb3J0IFRoZW1lIGZyb20gJy4vVGhlbWUnO1xyXG5cclxuVGhlbWVkU3R5bGVTaGVldC5yZWdpc3RlckludGVyZmFjZShhcGhyb2RpdGVJbnRlcmZhY2UpO1xyXG5UaGVtZWRTdHlsZVNoZWV0LnJlZ2lzdGVyVGhlbWUoVGhlbWUpO1xyXG5cclxuZXhwb3J0IHsgY3NzLCB3aXRoU3R5bGVzLCB3aXRoU3R5bGVzUHJvcFR5cGVzLCBUaGVtZWRTdHlsZVNoZWV0IH07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC13aXRoLXN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtYXBocm9kaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdpdGgtc3R5bGVzL2xpYi9UaGVtZWRTdHlsZVNoZWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9