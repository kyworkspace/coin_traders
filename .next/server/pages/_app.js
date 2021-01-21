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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_ModalProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/ModalProvider */ "./src/ModalProvider.jsx");
/* harmony import */ var _src_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/AppLayout */ "./src/components/AppLayout.jsx");
/* harmony import */ var _src_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/containers/NotificationContainer */ "./src/containers/NotificationContainer.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_containers_RouterStateContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/containers/RouterStateContainer */ "./src/containers/RouterStateContainer.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const isServer = true;

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "store", Object(_src_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"])());
  }

  render() {
    const {
      Component,
      router,
      pageProps
    } = this.props;
    const Router = isServer ? react_router__WEBPACK_IMPORTED_MODULE_8__["StaticRouter"] : react_router_dom__WEBPACK_IMPORTED_MODULE_9__["BrowserRouter"];
    const routerProps = isServer ? {
      location: router.asPath
    } : {};
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        store: this.store,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Router, _objectSpread(_objectSpread({}, routerProps), {}, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_containers_RouterStateContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ModalProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ "./src/ModalProvider.jsx":
/*!*******************************!*\
  !*** ./src/ModalProvider.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_Modal_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Modal/create */ "./src/ui/Modal/create.jsx");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/modals */ "./src/constants/modals.js");
/* harmony import */ var _containers_main_TradeCoinPageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/main/TradeCoinPageContainer */ "./src/containers/main/TradeCoinPageContainer.js");
/* harmony import */ var _containers_signup_RegisterPageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/signup/RegisterPageContainer */ "./src/containers/signup/RegisterPageContainer.jsx");

 //import TradeCoinPage from "./components/main/TradeCoinPage";



/* harmony default export */ __webpack_exports__["default"] = (Object(_ui_Modal_create__WEBPACK_IMPORTED_MODULE_0__["default"])({
  [_constants_modals__WEBPACK_IMPORTED_MODULE_1__["TRADE_COIN_MODAL"]]: _containers_main_TradeCoinPageContainer__WEBPACK_IMPORTED_MODULE_2__["default"],
  [_constants_modals__WEBPACK_IMPORTED_MODULE_1__["REGISTER_USER_MODAL"]]: _containers_signup_RegisterPageContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/actions/notificationActions.js":
/*!********************************************!*\
  !*** ./src/actions/notificationActions.js ***!
  \********************************************/
/*! exports provided: SHOW_NOTIFICATION, HIDE_NOTIFICATION, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return SHOW_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_NOTIFICATION", function() { return HIDE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';
function showMessage(message, warning = false) {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      message,
      warning
    }
  };
}
function hideMessage() {
  return {
    type: HIDE_NOTIFICATION
  };
}

/***/ }),

/***/ "./src/actions/routerActions.js":
/*!**************************************!*\
  !*** ./src/actions/routerActions.js ***!
  \**************************************/
/*! exports provided: SET_LOCATION, setLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOCATION", function() { return SET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return setLocation; });
const SET_LOCATION = 'router/SET_LOCATION';
function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: {
      location
    }
  };
}

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

/***/ "./src/actions/transactionActions.js":
/*!*******************************************!*\
  !*** ./src/actions/transactionActions.js ***!
  \*******************************************/
/*! exports provided: LOADING_TRANSACTION_LIST, SET_TRANSACTION_LIST, SET_ERROR, TRADE_COMPLETE, tradeComplete, setError, setTransactionList, createTransaction, requestTransactionList, loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_TRANSACTION_LIST", function() { return LOADING_TRANSACTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TRANSACTION_LIST", function() { return SET_TRANSACTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_COMPLETE", function() { return TRADE_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradeComplete", function() { return tradeComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setError", function() { return setError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransactionList", function() { return setTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransaction", function() { return createTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTransactionList", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return loading; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./src/Api.js");
/* harmony import */ var _notificationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationActions */ "./src/actions/notificationActions.js");


const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
const SET_ERROR = 'transaction/SET_ERROR';
const TRADE_COMPLETE = 'transaction/TRADE_COMPLETE';
function tradeComplete() {
  return {
    type: TRADE_COMPLETE
  };
}
function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: {
      errorMessage
    }
  };
}
function setTransactionList(transactions) {
  console.log("트랜잭션 액션");
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions
  };
}
function createTransaction(data, onComplete) {
  return dispatch => _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/transactions', data).then(({
    data
  }) => {
    dispatch(tradeComplete());
    onComplete();
  }, error => dispatch(setError(error.response.data.errorMessage)));
}
function requestTransactionList(params) {
  return dispatch => {
    dispatch(loading());
    _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/transactions', {
      params
    }).then(({
      data
    }) => dispatch(setTransactionList(data)), error => {
      dispatch(setError(error.response.data.errorMessage)); //  dispatch(showMessage(error.response.data.errorMessage,true))
    }); //axios는 에러가 발생할때 then의 두번째 인자에 해당하는 함수를 호출함
  }; //함수를 반환함
}
function loading() {
  return {
    type: LOADING_TRANSACTION_LIST
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

/***/ "./src/actions/userActions.js":
/*!************************************!*\
  !*** ./src/actions/userActions.js ***!
  \************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var _api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-redux-pack/createActions */ "./src/api-redux-pack/createActions.js");

const {
  create
} = Object(_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__["default"])('users');
function createUser(data, onComplete) {
  return create(data, {}, {
    notification: {
      success: '회원가입 , 성공적'
    },
    onSuccess: onComplete
  });
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

/***/ "./src/api-redux-pack/createReducers.js":
/*!**********************************************!*\
  !*** ./src/api-redux-pack/createReducers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/api-redux-pack/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //서로 다른 데이터를 처리할때 같은 type의 액션을 사용할 것이므로 액션에서 포함시킨 meta의 resourceName과 리듀서의 이름이 
//일치한 경우에만 리듀서 코드를 실행하도록 만듬

/* harmony default export */ __webpack_exports__["default"] = ((...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]}/${name}`]: false
      },
      errorState: {
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]}/${name}`]: false
      },
      pagination: {}
    };

    apiReducers[name] = (state = initState, action) => {
      const {
        type,
        payload,
        meta
      } = action;
      const {
        resourceName,
        key
      } = meta || {};

      if (resourceName !== name) {
        return state;
      }

      switch (type) {
        case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]:
          {
            return Object(redux_pack__WEBPACK_IMPORTED_MODULE_0__["handle"])(state, action, {
              start: prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                loadingState: _objectSpread(_objectSpread({}, prevState.loadingState), {}, {
                  [`${type}/${name}`]: true
                }),
                errorState: _objectSpread(_objectSpread({}, prevState.errorState), {}, {
                  [`${type}/${name}`]: false
                })
              }),
              success: prevState => {
                const {
                  data
                } = payload;

                if (type === _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]) {
                  const {
                    pageNumber,
                    pageSize
                  } = meta || {};
                  const ids = data.map(entity => entity[key]);
                  const entities = data.reduce((finalEntities, entity) => _objectSpread(_objectSpread({}, finalEntities), {}, {
                    [entity[key]]: entity
                  }), {});
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    ids,
                    entities: _objectSpread(_objectSpread({}, prevState.entities), entities),
                    loadingState: _objectSpread(_objectSpread({}, prevState.loadingState), {}, {
                      [`${type}/${name}`]: false
                    }),
                    errorState: _objectSpread(_objectSpread({}, prevState.errorState), {}, {
                      [`${type}/${name}`]: false
                    }),
                    pagination: {
                      number: pageNumber,
                      size: pageSize
                    }
                  });
                } else {
                  const id = data[key];
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    id,
                    entities: _objectSpread(_objectSpread({}, prevState.entities), {}, {
                      [id]: data
                    }),
                    loadingState: _objectSpread(_objectSpread({}, prevState.loadingState), {}, {
                      [`${type}/${name}`]: false
                    }),
                    errorState: _objectSpread(_objectSpread({}, prevState.errorState), {}, {
                      [`${type}/${name}`]: false
                    })
                  });
                }
              },
              failure: prevState => {
                const {
                  errorMessage
                } = payload.response ? payload.response.data : {};
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  loadingState: _objectSpread(_objectSpread({}, prevState.loadingState), {}, {
                    [`${type}/${name}`]: false
                  }),
                  errorState: _objectSpread(_objectSpread({}, prevState.errorState), {}, {
                    [`${type}/${name}`]: errorMessage || true
                  })
                });
              }
            });
          }

        case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["RESET"]:
          return initState;

        default:
          return state;
      }
    };

    return apiReducers;
  }, {});
});

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

/***/ "./src/components/AppLayout.jsx":
/*!**************************************!*\
  !*** ./src/components/AppLayout.jsx ***!
  \**************************************/
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
/* harmony import */ var _ui_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/withStyles */ "./src/ui/withStyles.js");
/* harmony import */ var _AppNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppNav */ "./src/components/AppNav.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\AppLayout.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AppLayout extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      children,
      styles
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_ui_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.wrapper)), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AppNav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_ui_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.body)), {}, {
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

}

AppLayout.propTypes = _objectSpread(_objectSpread({}, _ui_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_ui_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  unit
}) => ({
  wrapper: {
    marginTop: _AppNav__WEBPACK_IMPORTED_MODULE_4__["HEIGHT"]
  },
  body: {
    padding: unit * 4
  }
}))(AppLayout));

/***/ }),

/***/ "./src/components/AppNav.jsx":
/*!***********************************!*\
  !*** ./src/components/AppNav.jsx ***!
  \***********************************/
/*! exports provided: HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/withStyles */ "./src/ui/withStyles.js");
/* harmony import */ var _ui_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Heading */ "./src/ui/Heading.jsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Text */ "./src/ui/Text.jsx");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/modals */ "./src/constants/modals.js");
/* harmony import */ var _ui_Modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/Modal/context */ "./src/ui/Modal/context.js");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/Button */ "./src/ui/Button.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\AppNav.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//최상단 네비 메뉴, 페이지 제목, 회원가입 버튼







const HEIGHT = 64;

class AppNav extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      styles
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.wrapper)), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.container)), {}, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
          level: 3,
          inverse: true,
          children: "\uCF54\uC778 \uAC70\uB798\uC18C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Modal_context__WEBPACK_IMPORTED_MODULE_6__["Consumer"], {
          children: ({
            openModal
          }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            inverse: true,
            bold: true,
            large: true,
            onPress: () => openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_5__["REGISTER_USER_MODAL"]),
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this);
  }

}

AppNav.propTypes = _objectSpread({}, _ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  color,
  depth,
  unit
}) => ({
  wrapper: _objectSpread(_objectSpread({}, depth.level1), {}, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: HEIGHT - 4,
    backgroundColor: color.primary
  }),
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: unit * 2,
    paddingRight: unit * 2
  }
}))(AppNav));

/***/ }),

/***/ "./src/components/main/Notification.jsx":
/*!**********************************************!*\
  !*** ./src/components/main/Notification.jsx ***!
  \**********************************************/
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
/* harmony import */ var _ui_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Toast */ "./src/ui/Toast.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\Notification.jsx";




class Notification extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      showMessage,
      message,
      warning
    } = this.props;
    return showMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Toast__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: message,
      warning: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this);
  }

}

Notification.propTypes = {
  showMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  warning: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/components/main/TradeCoinPage.jsx":
/*!***********************************************!*\
  !*** ./src/components/main/TradeCoinPage.jsx ***!
  \***********************************************/
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
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text.jsx");
/* harmony import */ var _ui_Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Spacing */ "./src/ui/Spacing.jsx");
/* harmony import */ var _ui_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Input */ "./src/ui/Input.jsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Button */ "./src/ui/Button.jsx");
/* harmony import */ var _ui_InlineList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/InlineList */ "./src/ui/InlineList.jsx");
/* harmony import */ var _ui_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/Form */ "./src/ui/Form.jsx");
/* harmony import */ var _ui_Modal_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/Modal/context */ "./src/ui/Modal/context.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\main\\TradeCoinPage.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class TradeCoinPage extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, closeModal) {
    const {
      name,
      code,
      createTransaction
    } = this.props;

    const formValue = _objectSpread(_objectSpread({}, values), {}, {
      code,
      name
    });

    console.log("code", code);
    console.log("name", name);
    createTransaction(formValue, closeModal);
  }

  render() {
    const {
      name,
      price,
      type,
      loading
    } = this.props;
    const typeName = type === "sell" ? "판매" : "구매";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Modal_context__WEBPACK_IMPORTED_MODULE_9__["Consumer"], {
      children: ({
        closeModal
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: values => this.handleSubmit(values, closeModal),
        initValues: {
          currentPrice: price
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Consumer, {
          children: ({
            onChange,
            values
          }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
            horizontal: 4,
            vertical: 8,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
              xlarge: true,
              bold: true,
              children: [name, " ", typeName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
              bottom: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                name: "currentPrice",
                label: "\uAE08\uC561",
                value: values["currentPrice"],
                onChange: onChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
              bottom: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                name: "amount",
                label: "\uC218\uB7C9",
                value: values["amount"],
                onChange: onChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_InlineList__WEBPACK_IMPORTED_MODULE_7__["default"], {
              spacingBetween: 1,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                primary: true,
                disabled: loading,
                children: loading ? '거래처리중' : typeName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                onPress: closeModal,
                children: "\uCDE8\uC18C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this);
  }

}

TradeCoinPage.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (TradeCoinPage);

/***/ }),

/***/ "./src/components/signup/RegisterPage.jsx":
/*!************************************************!*\
  !*** ./src/components/signup/RegisterPage.jsx ***!
  \************************************************/
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
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text.jsx");
/* harmony import */ var _ui_Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Spacing */ "./src/ui/Spacing.jsx");
/* harmony import */ var _ui_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Input */ "./src/ui/Input.jsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Button */ "./src/ui/Button.jsx");
/* harmony import */ var _ui_InlineList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/InlineList */ "./src/ui/InlineList.jsx");
/* harmony import */ var _ui_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/Form */ "./src/ui/Form.jsx");
/* harmony import */ var _ui_Modal_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/Modal/context */ "./src/ui/Modal/context.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\components\\signup\\RegisterPage.jsx";










class RegisterPage extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, closeModal) {
    const {
      createUser
    } = this.props;
    createUser(values, closeModal);
  }

  render() {
    const {
      loading
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Modal_context__WEBPACK_IMPORTED_MODULE_9__["Consumer"], {
      children: ({
        closeModal
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: values => this.handleSubmit(values, closeModal),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Consumer, {
          children: ({
            onChange
          }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
            horizontal: 4,
            vertical: 8,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
              xlarge: true,
              bold: true,
              children: "\uD68C\uC6D0\uB4F1\uB85D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
              bottom: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                name: "userId",
                label: "\uC0AC\uC6A9\uC790 \uC544\uC774\uB514",
                onChange: onChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
              bottom: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                name: "totalAmount",
                label: "\uC790\uC0B0\uCD1D\uC561",
                type: "number",
                onChange: onChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_InlineList__WEBPACK_IMPORTED_MODULE_7__["default"], {
              spacingBetween: 1,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                type: "submit",
                primary: true,
                disabled: loading,
                children: "\uD68C\uC6D0\uB4F1\uB85D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                onPress: closeModal,
                disabled: loading,
                children: "\uCDE8\uC18C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this);
  }

}

RegisterPage.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  createUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

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

/***/ "./src/containers/NotificationContainer.jsx":
/*!**************************************************!*\
  !*** ./src/containers/NotificationContainer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/Notification */ "./src/components/main/Notification.jsx");



const mapStateToProps = state => {
  const {
    showMessage,
    message,
    warning
  } = state.notification;
  return {
    showMessage,
    message,
    warning
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_main_Notification__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/containers/RouterStateContainer.jsx":
/*!*************************************************!*\
  !*** ./src/containers/RouterStateContainer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/routerActions */ "./src/actions/routerActions.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose/compose */ "recompose/compose");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_5__);







class RouterState extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  componentDidMount() {
    const {
      setLocation,
      location
    } = this.props;
    setLocation(location);
  }

  componentDidUpdate() {
    const {
      setLocation,
      location
    } = this.props;
    setLocation(location);
  }

  render() {
    return null;
  }

}

RouterState.propTypes = {
  setLocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_5___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  setLocation: _actions_routerActions__WEBPACK_IMPORTED_MODULE_3__["setLocation"]
}), react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(RouterState));

/***/ }),

/***/ "./src/containers/main/TradeCoinPageContainer.js":
/*!*******************************************************!*\
  !*** ./src/containers/main/TradeCoinPageContainer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TradeCoinPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TradeCoinPage */ "./src/components/main/TradeCoinPage.jsx");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/actions/transactionPackActions.js");

 //import {createTransaction} from '../../actions/transactionActions';



const mapStateToProps = state => {
  const {
    loadingState
  } = state.transactions;
  const loading = loadingState[_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["CREATE_TRANSACTION"]];
  return {
    loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, {
  createTransaction: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["createTransaction"]
})(_components_main_TradeCoinPage__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/containers/signup/RegisterPageContainer.jsx":
/*!*********************************************************!*\
  !*** ./src/containers/signup/RegisterPageContainer.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_signup_RegisterPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/signup/RegisterPage */ "./src/components/signup/RegisterPage.jsx");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/userActions */ "./src/actions/userActions.js");
/* harmony import */ var _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/userSelectors */ "./src/selectors/userSelectors.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(state => ({
  loading: Object(_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_3__["userCreateLoadingStateSelector"])(state)
}), {
  createUser: _actions_userActions__WEBPACK_IMPORTED_MODULE_2__["createUser"]
})(_components_signup_RegisterPage__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/debounce.jsx":
/*!**************************!*\
  !*** ./src/debounce.jsx ***!
  \**************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }

    inDebounce = setTimeout(() => func(...args), delay);
  };
}

/***/ }),

/***/ "./src/middlewares/notificationEffects.js":
/*!************************************************!*\
  !*** ./src/middlewares/notificationEffects.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_transactionActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/transactionActions */ "./src/actions/transactionActions.js");
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/actions/notificationActions.js");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../debounce */ "./src/debounce.jsx");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_3__);


 //redux-pack

 //import {FETCH_TRANSACTION_LIST,createTransaction} from '../actions/transactionPackActions'

const debouceRunner = Object(_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(action => action(), 4000);
/* harmony default export */ __webpack_exports__["default"] = (store => nextRunner => action => {
  const {
    type,
    meta
  } = action;

  if (meta && meta.notification) {
    const {
      success,
      error
    } = meta.notification;

    if (success && meta[redux_pack__WEBPACK_IMPORTED_MODULE_3__["KEY"].LIFECYCLE] === redux_pack__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"].SUCCESS) {
      //성공
      store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(success));
      debouceRunner(() => store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["hideMessage"])()));
    } else if (error && meta[redux_pack__WEBPACK_IMPORTED_MODULE_3__["KEY"].LIFECYCLE] === redux_pack__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"].FAILURE) {
      //실패
      store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(error, true));
      debouceRunner(() => store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["hideMessage"])()));
    }
  }

  return nextRunner(action);
});

/***/ }),

/***/ "./src/middlewares/routerEffects.js":
/*!******************************************!*\
  !*** ./src/middlewares/routerEffects.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/routerActions */ "./src/actions/routerActions.js");
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/actions/searchFilterActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parse(qs) {
  //쿼리 스트링 값을 객체로 반환함
  const queryString = qs.substr(1);
  const chunk = queryString.split('&');
  return chunk.map(chunk => chunk.split("=")).reduce((result, [key, value]) => _objectSpread(_objectSpread({}, result), {}, {
    [key]: value
  }), {});
}

/* harmony default export */ __webpack_exports__["default"] = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__["SET_LOCATION"]) {
    //주소 동기화 액션에서만 작동
    const {
      pathname,
      search
    } = payload.location;

    if (pathname === '/') {
      //경로가 일치할때만 작동
      store.dispatch(Object(_actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_1__["setFilter"])(parse(search)));
    }
  }

  return result;
});

/***/ }),

/***/ "./src/middlewares/searchFilterEffects.js":
/*!************************************************!*\
  !*** ./src/middlewares/searchFilterEffects.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/actions/searchFilterActions.js");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/transactionPackActions */ "./src/actions/transactionPackActions.js");


/* harmony default export */ __webpack_exports__["default"] = (store => nextRunner => action => {
  //검색 필터 변경이 생길때 자동으로 검색결과 요청을 구현
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]) {
    const {
      params
    } = payload || {};
    store.dispatch(Object(_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["resetTransactionList"])()); //검색결과를 요청하기 전에 현재 검색 목록 초기화

    store.dispatch(Object(_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["requestTransactionList"])(params));
  }

  return result;
});

/***/ }),

/***/ "./src/middlewares/transactionEffects.js":
/*!***********************************************!*\
  !*** ./src/middlewares/transactionEffects.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_transactionActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/transactionActions */ "./src/actions/transactionActions.js");
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/actions/notificationActions.js");


/* harmony default export */ __webpack_exports__["default"] = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === _actions_transactionActions__WEBPACK_IMPORTED_MODULE_0__["TRADE_COMPLETE"]) {
    const message = "거래목록을 최선 정보로 업데이트 하였습니다. trnasactionEffects";
    store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(message));
    store.dispatch(Object(_actions_transactionActions__WEBPACK_IMPORTED_MODULE_0__["requestTransactionList"])());
  }

  return result;
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_redux_pack_createReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-redux-pack/createReducers */ "./src/api-redux-pack/createReducers.js");
/* harmony import */ var _notificationReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationReducer */ "./src/reducers/notificationReducer.js");
/* harmony import */ var _searchFilterReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchFilterReducer */ "./src/reducers/searchFilterReducer.js");
/* harmony import */ var _routerReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routerReducer */ "./src/reducers/routerReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import transactions from './transactionReducer'; //api 호출 방식으로 변경함




const apiReducers = Object(_api_redux_pack_createReducers__WEBPACK_IMPORTED_MODULE_0__["default"])('transactions', 'users');
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, apiReducers), {}, {
  notification: _notificationReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  searchFilter: _searchFilterReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  router: _routerReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/reducers/notificationReducer.js":
/*!*********************************************!*\
  !*** ./src/reducers/notificationReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/actions/notificationActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  message: '',
  warning: false,
  showMessage: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["SHOW_NOTIFICATION"]:
      {
        const {
          message,
          warning
        } = payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          showMessage: true,
          message,
          warning
        });
      }

    case _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["HIDE_NOTIFICATION"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          message: '',
          showMessage: false
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/routerReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/routerReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/routerActions */ "./src/actions/routerActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  location: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__["SET_LOCATION"]:
      {
        const {
          location
        } = payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          location
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/searchFilterReducer.js":
/*!*********************************************!*\
  !*** ./src/reducers/searchFilterReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/actions/searchFilterActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  params: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]:
      {
        const {
          params
        } = payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          params
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/selectors/userSelectors.js":
/*!****************************************!*\
  !*** ./src/selectors/userSelectors.js ***!
  \****************************************/
/*! exports provided: userCreateLoadingStateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCreateLoadingStateSelector", function() { return userCreateLoadingStateSelector; });
/* harmony import */ var _api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-redux-pack/createSelectors */ "./src/api-redux-pack/createSelectors.js");

const {
  createLoadingStateSelector: userCreateLoadingStateSelector
} = Object(_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__["default"])('users');

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middlewares_notificationEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middlewares/notificationEffects */ "./src/middlewares/notificationEffects.js");
/* harmony import */ var _middlewares_transactionEffects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middlewares/transactionEffects */ "./src/middlewares/transactionEffects.js");
/* harmony import */ var _middlewares_searchFilterEffects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middlewares/searchFilterEffects */ "./src/middlewares/searchFilterEffects.js");
/* harmony import */ var _middlewares_routerEffects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middlewares/routerEffects */ "./src/middlewares/routerEffects.js");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_8__);




 //import {SET_TRANSACTION_LIST} from '../actions/transactionActions';



 //redux-pack

 // const customMiddleware = store =>nextRunner => action =>{
//     console.log('미들웨어1 액션객체',action); //nextRunner 이전 작업
//     console.log('미들웨어1 실행전',store.getState()); //nextRunner 이전 작업 2
//     const result = nextRunner(action);;
//     console.log('미들웨어1 실행 후',store.getState()); //nextRunner 이후
//     return result;
// }
// const customMiddleware1 = () => nextRunner => action =>{
//     if(action.type === SET_TRANSACTION_LIST){
//         return nextRunner({
//             ...action,
//             payload :[{
//                 id : 0,
//                 code : 'DOIT',
//                 name : '두잇코인',
//                 totalPrice : 100000,
//                 currentPrice : 1111,
//                 dateTime : '현재시간',
//             }]
//         })
//     }
//     return nextRunner(action);
// }
// const customMiddleware2 = store =>nextRunner => action =>{
//     console.log('미들웨어2 액션 전달됨',action); //nextRunner 이전 작업
//     console.log('미들웨어2 실행전',store.getState()); //nextRunner 이전 작업 2
//     const result = nextRunner(action);;
//     console.log('미들웨어 2 실행후',store.getState()); //nextRunner 이후
//     return result;
// }
// export default initStates =>createStore(
//     combineReducers(reducers),
//     initStates,
//     composeWithDevTools(),
// )

/* harmony default export */ __webpack_exports__["default"] = (initStates => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]), initStates, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_pack__WEBPACK_IMPORTED_MODULE_8__["middleware"], _middlewares_notificationEffects__WEBPACK_IMPORTED_MODULE_4__["default"], _middlewares_transactionEffects__WEBPACK_IMPORTED_MODULE_5__["default"], _middlewares_searchFilterEffects__WEBPACK_IMPORTED_MODULE_6__["default"], _middlewares_routerEffects__WEBPACK_IMPORTED_MODULE_7__["default"]))));

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

/***/ "./src/ui/Modal/create.jsx":
/*!*********************************!*\
  !*** ./src/ui/Modal/create.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createModalProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ "./src/ui/Modal/index.jsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/ui/Modal/context.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Modal\\create.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //혹은 Modal from './index.js'


function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false
      };
      this.handleClose = this.handleClose.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen(contentId, modalProps) {
      this.contentId = contentId;
      this.modalProps = modalProps;
      this.setState({
        showModal: true
      });
    }

    handleClose() {
      this.setState({
        showModal: false
      });
    }

    render() {
      const {
        children
      } = this.props;
      const {
        showModal
      } = this.state;
      const ModalContent = ContentMap[this.contentId];
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        value: {
          openModal: this.handleOpen,
          closeModal: this.handleClose
        },
        children: [children, showModal && ModalContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ModalContent, _objectSpread({}, this.modalProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this);
    }

  };
}

/***/ }),

/***/ "./src/ui/Modal/index.jsx":
/*!********************************!*\
  !*** ./src/ui/Modal/index.jsx ***!
  \********************************/
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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./src/ui/Card.jsx");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withStyles */ "./src/ui/withStyles.js");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Modal\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //Casd 컴포넌트를 사용하여 둥근 모서리로 만든 Modal 컴포넌트

class Modal extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      styles,
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_4__["css"])(styles.overlay)), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_4__["css"])(styles.wrapper)), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_4__["css"])(styles.container)), {}, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
            vertical: 2,
            horizontal: 2,
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }

}

Modal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(() => ({
  overlay: {
    position: "fixed",
    zIndex: 9999,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)"
  },
  wrapper: {
    verticalAlign: "middle"
  },
  container: {
    margin: "40px auto 0px",
    width: 700
  }
}))(Modal));

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

/***/ "./src/ui/Toast.jsx":
/*!**************************!*\
  !*** ./src/ui/Toast.jsx ***!
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
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spacing */ "./src/ui/Spacing.jsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text */ "./src/ui/Text.jsx");

var _jsxFileName = "C:\\React\\coin_traders\\src\\ui\\Toast.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Toast extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      message,
      styles,
      warning
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.overlay)), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.wrapper, warning && styles.warning)), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
          vertical: 4,
          horizontal: 8,
          children: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

}

Toast.propTypes = _objectSpread(_objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"]), {}, {
  warning: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  depth,
  unit,
  color
}) => ({
  overlay: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: unit * 4
  },
  wrapper: _objectSpread(_objectSpread({}, depth.level1), {}, {
    borderRadius: unit,
    backgroundColor: color.secondary,
    padding: unit * 2,
    marginBottom: unit * 4
  }),
  warning: {
    backgroundColor: color.error
  }
}))(Toast));

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

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

/***/ "recompose/compose":
/*!************************************!*\
  !*** external "recompose/compose" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-pack":
/*!*****************************!*\
  !*** external "redux-pack" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-pack");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kYWxQcm92aWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvbm90aWZpY2F0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9yb3V0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3NlYXJjaEZpbHRlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHJhbnNhY3Rpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3RyYW5zYWN0aW9uUGFja0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS1yZWR1eC1wYWNrL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGktcmVkdXgtcGFjay9jcmVhdGVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGktcmVkdXgtcGFjay9jcmVhdGVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpLXJlZHV4LXBhY2svY3JlYXRlU2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcExheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluL05vdGlmaWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9UcmFkZUNvaW5QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWdudXAvUmVnaXN0ZXJQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ob3RpZmljYXRpb25Db250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1JvdXRlclN0YXRlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9tYWluL1RyYWRlQ29pblBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvc2lnbnVwL1JlZ2lzdGVyUGFnZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlYm91bmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvbm90aWZpY2F0aW9uRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvcm91dGVyRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvc2VhcmNoRmlsdGVyRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvdHJhbnNhY3Rpb25FZmZlY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbm90aWZpY2F0aW9uUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcm91dGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2VhcmNoRmlsdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0b3JzL3VzZXJTZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91aS9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0hlYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9JbmxpbmVMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvSW5wdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9Nb2RhbC9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy91aS9Nb2RhbC9jcmVhdGUuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9Nb2RhbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NwYWNpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9UZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1RvYXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXdpdGgtc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWFwaHJvZGl0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXdpdGgtc3R5bGVzL2xpYi9UaGVtZWRTdHlsZVNoZWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjb21wb3NlL2NvbXBvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiXSwibmFtZXMiOlsicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJpc1NlcnZlciIsIk15QXBwIiwiY29uZmlndXJlU3RvcmUiLCJwcm9wcyIsIlJvdXRlciIsIlN0YXRpY1JvdXRlciIsIkJyb3dzZXJSb3V0ZXIiLCJyb3V0ZXJQcm9wcyIsImxvY2F0aW9uIiwiYXNQYXRoIiwic3RvcmUiLCJBcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjcmVhdGVQcm92aWRlciIsIlRSQURFX0NPSU5fTU9EQUwiLCJUcmFkZUNvaW5QYWdlIiwiUkVHSVNURVJfVVNFUl9NT0RBTCIsIlJlZ2lzdGVyUGFnZSIsIlNIT1dfTk9USUZJQ0FUSU9OIiwiSElERV9OT1RJRklDQVRJT04iLCJzaG93TWVzc2FnZSIsIm1lc3NhZ2UiLCJ3YXJuaW5nIiwidHlwZSIsInBheWxvYWQiLCJoaWRlTWVzc2FnZSIsIlNFVF9MT0NBVElPTiIsInNldExvY2F0aW9uIiwiU0VUX0ZJTFRFUiIsInNldEZpbHRlciIsInBhcmFtcyIsIkxPQURJTkdfVFJBTlNBQ1RJT05fTElTVCIsIlNFVF9UUkFOU0FDVElPTl9MSVNUIiwiU0VUX0VSUk9SIiwiVFJBREVfQ09NUExFVEUiLCJ0cmFkZUNvbXBsZXRlIiwic2V0RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRUcmFuc2FjdGlvbkxpc3QiLCJ0cmFuc2FjdGlvbnMiLCJsb2ciLCJjcmVhdGVUcmFuc2FjdGlvbiIsImRhdGEiLCJvbkNvbXBsZXRlIiwiZGlzcGF0Y2giLCJwb3N0IiwidGhlbiIsImVycm9yIiwicmVzcG9uc2UiLCJyZXF1ZXN0VHJhbnNhY3Rpb25MaXN0IiwibG9hZGluZyIsImdldCIsIkZFVENIX1RSQU5TQUNUSU9OX0xJU1QiLCJDUkVBVEVfVFJBTlNBQ1RJT04iLCJjb2xsZWN0aW9uIiwicmVzZXQiLCJjcmVhdGVBY3Rpb25zIiwicmVzZXRUcmFuc2FjdGlvbkxpc3QiLCJQQUdFX1NJWkUiLCJfcGFnZSIsIm1ldGEiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJub3RpZmljYXRpb24iLCJzdWNjZXNzIiwiX2xpbWl0Iiwib25TdWNjZXNzIiwiY3JlYXRlVXNlciIsIkZFVENIX0xJU1QiLCJGRVRDSCIsIlVQREFURSIsIkNSRUFURSIsIlJFU0VUIiwicmVzb3VyY2VOYW1lIiwia2V5IiwicHJvbWlzZSIsIm1lbWJlciIsImlkIiwidXBkYXRlIiwicmVkdWNlck5hbWVzIiwicmVkdWNlIiwiYXBpUmVkdWNlcnMiLCJuYW1lIiwiaW5pdFN0YXRlIiwiaWRzIiwiZW50aXRpZXMiLCJsb2FkaW5nU3RhdGUiLCJlcnJvclN0YXRlIiwicGFnaW5hdGlvbiIsInN0YXRlIiwiYWN0aW9uIiwiaGFuZGxlIiwic3RhcnQiLCJwcmV2U3RhdGUiLCJtYXAiLCJlbnRpdHkiLCJmaW5hbEVudGl0aWVzIiwibnVtYmVyIiwic2l6ZSIsImZhaWx1cmUiLCJjcmVhdGVTZWxlY3RvcnMiLCJyZXNvdXJjZVNlbGVjdG9yIiwiZW50aXRpZXNTZWxlY3RvciIsImNvbGxlY3Rpb25TZWxlY3RvciIsImNyZWF0ZVNlbGVjdG9yIiwibG9hZGluZ1N0YXRlU2VsZWN0b3IiLCJlcnJvclN0YXRlU2VsZWN0b3IiLCJjb2xsZWN0aW9uTG9hZGluZ1N0YXRlU2VsZWN0b3IiLCJjcmVhdGVMb2FkaW5nU3RhdGVTZWxlY3RvciIsInVwZGF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yIiwibWVtYmVyTG9hZGluZ1N0YXRlU2VsZWN0b3IiLCJjb2xsZWN0aW9uRXJyb3JTdGF0ZVNlbGVjdG9yIiwiY3JlYXRlRXJyb3JTdGF0ZVNlbGVjdG9yIiwidXBkYXRlRXJyb3JTdGF0ZVNlbGVjdG9yIiwibWVtYmVyRXJyb3JTdGF0ZVNlbGVjdG9yIiwicGFnaW5hdGlvblNlbGVjdG9yIiwiQXBwTGF5b3V0IiwiUHVyZUNvbXBvbmVudCIsImNoaWxkcmVuIiwic3R5bGVzIiwiY3NzIiwid3JhcHBlciIsImJvZHkiLCJwcm9wVHlwZXMiLCJ3aXRoU3R5bGVzUHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIndpdGhTdHlsZXMiLCJ1bml0IiwibWFyZ2luVG9wIiwiSEVJR0hUIiwicGFkZGluZyIsIkFwcE5hdiIsImNvbnRhaW5lciIsIm9wZW5Nb2RhbCIsImNvbG9yIiwiZGVwdGgiLCJsZXZlbDEiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYWxpZ25JdGVtcyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiTm90aWZpY2F0aW9uIiwiYm9vbCIsInN0cmluZyIsImNvbnN0cnVjdG9yIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsInZhbHVlcyIsImNsb3NlTW9kYWwiLCJjb2RlIiwiZm9ybVZhbHVlIiwicHJpY2UiLCJ0eXBlTmFtZSIsImN1cnJlbnRQcmljZSIsIm9uQ2hhbmdlIiwiZnVuYyIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJSb3V0ZXJTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwib2JqZWN0IiwiY29tcG9zZSIsIndpdGhSb3V0ZXIiLCJ1c2VyQ3JlYXRlTG9hZGluZ1N0YXRlU2VsZWN0b3IiLCJkZWJvdW5jZSIsImRlbGF5IiwiaW5EZWJvdW5jZSIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGVib3VjZVJ1bm5lciIsIm5leHRSdW5uZXIiLCJLRVkiLCJMSUZFQ1lDTEUiLCJTVUNDRVNTIiwiRkFJTFVSRSIsInBhcnNlIiwicXMiLCJxdWVyeVN0cmluZyIsInN1YnN0ciIsImNodW5rIiwic3BsaXQiLCJyZXN1bHQiLCJ2YWx1ZSIsInBhdGhuYW1lIiwic2VhcmNoIiwiY3JlYXRlUmVkdWNlcnMiLCJzZWFyY2hGaWx0ZXIiLCJpbml0U3RhdGVzIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInJlZHV4UGFja01pZGRsZXdhcmUiLCJub3RpZmljYXRpb25FZmZlY3RzIiwidHJhbnNhY3Rpb25FZmZlY3RzIiwic2VhcmNoRmlsdGVyRWZmZWN0cyIsInJvdXRlckVmZmVjcyIsIkJ1dHRvbiIsImRpc2FibGVkIiwibGFyZ2UiLCJ4bGFyZ2UiLCJzbWFsbCIsInhzbWFsbCIsInNlY29uZGFyeSIsIm9uUHJlc3MiLCJkZWZhdWx0IiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsImZvbnRXZWlnaHQiLCJib3JkZXIiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJtZCIsImJvbGQiLCJvdXRsaW5lIiwiY3Vyc29yIiwiZ3JheUxpZ2h0IiwiYm94U2hhZG93IiwieGciLCJsZyIsInNtIiwieHMiLCJ3aGl0ZSIsInByaW1hcnlEYXJrIiwiZ3JheURhcmsiLCJvcGFjaXR5IiwiZ3JheSIsIkNhcmQiLCJzcGFjaW5nUHJvcHMiLCJzcGFjaW5nUHJvcFR5cGUiLCJvdmVyZmxvdyIsIm1hcmdpbkJvdHRvbSIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJjcmVhdGVDb250ZXh0IiwiRm9ybVByb3ZpZGVyIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiaW5pdFZhbHVlcyIsInZhbGlkYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiT2JqZWN0IiwibGVuZ3RoIiwib25TdWJtaXQiLCJ1cGRhdGVkVmFsdWUiLCJzZXRTdGF0ZSIsImVycm9ycyIsImhlYWRpbmdUYWdzIiwiSGVhZGluZyIsImludmVyc2UiLCJsZXZlbCIsIkhlYWRpbmdUYWciLCJkYXJrIiwibGluZUhlaWdodCIsImgxIiwibGV2ZWwyIiwiaDIiLCJsZXZlbDMiLCJoMyIsImxldmVsNCIsImxldmVsNSIsImxldmVsNiIsIklubGluZUxpc3QiLCJhbGlnbiIsInNwYWNpbmdCZXR3ZWVuIiwidmVydGljYWxBbGlnbiIsImFsaWduQ2VudGVyIiwiYWxpZ25SaWdodCIsInZlcnRpY2FsQWxpZ25Ub3AiLCJ2ZXJ0aWNhbEFsaWduQm90dG9tIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIm1hcmdpblJpZ2h0Iiwib25lT2YiLCJmbGV4V3JhcCIsIklucHV0Iiwic2V0UmVmIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiYXV0b0ZvY3VzIiwicmVmIiwiZm9jdXMiLCJsYWJlbCIsImVycm9yTGFiZWwiLCJpbnB1dCIsIm9uZU9mVHlwZSIsImNyZWF0ZU1vZGFsUHJvdmlkZXIiLCJDb250ZW50TWFwIiwiTW9kYWxQcm92aWRlciIsInNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsImNvbnRlbnRJZCIsIm1vZGFsUHJvcHMiLCJNb2RhbENvbnRlbnQiLCJNb2RhbCIsIm92ZXJsYXkiLCJ6SW5kZXgiLCJtYXJnaW4iLCJib3R0b20iLCJyaWdodCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlNwYWNpbmciLCJjb21wdXRlZFRvcCIsImNvbXB1dGVkQm90dG9tIiwiY29tcHV0ZWRMZWZ0IiwiY29tcHV0ZWRSaWdodCIsImNvbXB1dGVkU3R5bGVzIiwiZmxleCIsIm1hcmdpbkxlZnQiLCJUZXh0IiwibGlnaHQiLCJub3JtYWwiLCJMQVJHRV9BTkRfQUJPVkUiLCJCUkVBS1BPSU5UX05BTUVTIiwiTEFSR0UiLCJNRURJVU0iLCJTTUFMTCIsImJyZWFrcG9pbnRzIiwicmVzcG9uc2l2ZSIsInByaW50Iiwic2Vjb25kYXJ5RGFyayIsIlRvYXN0IiwiVGhlbWVkU3R5bGVTaGVldCIsInJlZ2lzdGVySW50ZXJmYWNlIiwiYXBocm9kaXRlSW50ZXJmYWNlIiwicmVnaXN0ZXJUaGVtZSIsIlRoZW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVB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Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1vZGFsUHJvdmlkZXIgZnJvbSAnLi4vc3JjL01vZGFsUHJvdmlkZXInO1xuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9BcHBMYXlvdXQnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRhaW5lciBmcm9tICcuLi9zcmMvY29udGFpbmVycy9Ob3RpZmljYXRpb25Db250YWluZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSb3V0ZXJTdGF0ZUNvbnRhaW5lciBmcm9tICcuLi9zcmMvY29udGFpbmVycy9Sb3V0ZXJTdGF0ZUNvbnRhaW5lcic7XG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcm91dGVyLCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgUm91dGVyID0gaXNTZXJ2ZXIgPyBTdGF0aWNSb3V0ZXIgOiBCcm93c2VyUm91dGVyO1xuICAgIGNvbnN0IHJvdXRlclByb3BzID0gaXNTZXJ2ZXIgPyB7IGxvY2F0aW9uOiByb3V0ZXIuYXNQYXRoIH0gOiB7fTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMuc3RvcmV9PlxuICAgICAgICAgIDxSb3V0ZXIgey4uLnJvdXRlclByb3BzfT5cbiAgICAgICAgICAgIDxSb3V0ZXJTdGF0ZUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgPE1vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25Db250YWluZXIgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L01vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uQ29udGFpbmVyIC8+XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgQXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkwgOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBpOyIsImltcG9ydCBjcmVhdGVQcm92aWRlciBmcm9tIFwiLi91aS9Nb2RhbC9jcmVhdGVcIjtcclxuaW1wb3J0IHsgVFJBREVfQ09JTl9NT0RBTCxSRUdJU1RFUl9VU0VSX01PREFMIH0gZnJvbSBcIi4vY29uc3RhbnRzL21vZGFsc1wiO1xyXG4vL2ltcG9ydCBUcmFkZUNvaW5QYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi9UcmFkZUNvaW5QYWdlXCI7XHJcbmltcG9ydCBUcmFkZUNvaW5QYWdlIGZyb20gXCIuL2NvbnRhaW5lcnMvbWFpbi9UcmFkZUNvaW5QYWdlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9jb250YWluZXJzL3NpZ251cC9SZWdpc3RlclBhZ2VDb250YWluZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvdmlkZXIoe1xyXG4gIFtUUkFERV9DT0lOX01PREFMXTogVHJhZGVDb2luUGFnZSxcclxuICBbUkVHSVNURVJfVVNFUl9NT0RBTF0gOiBSZWdpc3RlclBhZ2VcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBTSE9XX05PVElGSUNBVElPTiA9ICdub3RpZmljYXRpb24vU0hPV19OT1RJRklDQVRJT04nO1xyXG5leHBvcnQgY29uc3QgSElERV9OT1RJRklDQVRJT04gPSAnbm90aWZpY2F0aW9uL0hJREVfTk9USUZJQ0FUSU9OJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVzc2FnZShtZXNzYWdlLHdhcm5pbmcgPSBmYWxzZSl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBTSE9XX05PVElGSUNBVElPTixcclxuICAgICAgICBwYXlsb2FkIDoge21lc3NhZ2Usd2FybmluZ31cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZU1lc3NhZ2UoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IEhJREVfTk9USUZJQ0FUSU9OLFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IFNFVF9MT0NBVElPTiA9ICdyb3V0ZXIvU0VUX0xPQ0FUSU9OJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhdGlvbihsb2NhdGlvbil7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBTRVRfTE9DQVRJT04sXHJcbiAgICAgICAgcGF5bG9hZCA6IHtsb2NhdGlvbn0sXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgU0VUX0ZJTFRFUiA9ICdzZWFyY2hGaWx0ZXIvU0VUX0ZJTFRFUic7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXIocGFyYW1zKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFNFVF9GSUxURVIsXHJcbiAgICAgICAgcGF5bG9hZCA6IHtwYXJhbXN9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQXBpIGZyb20gJy4uL0FwaSc7XHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gXCIuL25vdGlmaWNhdGlvbkFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FESU5HX1RSQU5TQUNUSU9OX0xJU1QgPSAndHJhbnNhY3Rpb24vTE9BRElOR19UUkFOU0FDVElPTl9MSVNUJztcclxuZXhwb3J0IGNvbnN0IFNFVF9UUkFOU0FDVElPTl9MSVNUID0gJ3RyYW5zYWN0aW9uL1NFVF9UUkFOU0FDVElPTl9MSVNUJztcclxuZXhwb3J0IGNvbnN0IFNFVF9FUlJPUiA9ICd0cmFuc2FjdGlvbi9TRVRfRVJST1InO1xyXG5leHBvcnQgY29uc3QgVFJBREVfQ09NUExFVEUgPSAndHJhbnNhY3Rpb24vVFJBREVfQ09NUExFVEUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYWRlQ29tcGxldGUoKXtcclxuICAgIHJldHVybiB7dHlwZSA6IFRSQURFX0NPTVBMRVRFfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVycm9yKGVycm9yTWVzc2FnZSl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBTRVRfRVJST1IsXHJcbiAgICAgICAgcGF5bG9hZCA6IHtlcnJvck1lc3NhZ2V9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNhY3Rpb25MaXN0KHRyYW5zYWN0aW9ucykge1xyXG4gICAgY29uc29sZS5sb2coXCLtirjrnpzsnq3shZgg7JWh7IWYXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBTRVRfVFJBTlNBQ1RJT05fTElTVCxcclxuICAgICAgICBwYXlsb2FkIDogdHJhbnNhY3Rpb25zLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGF0YSxvbkNvbXBsZXRlKXtcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiBBcGkucG9zdCgnL3RyYW5zYWN0aW9ucycsZGF0YSkudGhlbigoe2RhdGF9KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHRyYWRlQ29tcGxldGUoKSk7XHJcbiAgICAgICAgb25Db21wbGV0ZSgpXHJcbiAgICB9LFxyXG4gICAgZXJyb3IgPT4gZGlzcGF0Y2goc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvck1lc3NhZ2UpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0VHJhbnNhY3Rpb25MaXN0KHBhcmFtcyl7XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKT0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2FkaW5nKCkpO1xyXG4gICAgICAgIEFwaS5nZXQoJy90cmFuc2FjdGlvbnMnLHtwYXJhbXN9KVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAoe2RhdGF9KT0+ZGlzcGF0Y2goc2V0VHJhbnNhY3Rpb25MaXN0KGRhdGEpKVxyXG4gICAgICAgICAgICAsZXJyb3IgPT57XHJcbiAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIC8vICBkaXNwYXRjaChzaG93TWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yTWVzc2FnZSx0cnVlKSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgLy9heGlvc+uKlCDsl5Drn6zqsIAg67Cc7IOd7ZWg65WMIHRoZW7snZgg65GQ67KI7Ke4IOyduOyekOyXkCDtlbTri7ntlZjripQg7ZWo7IiY66W8IO2YuOy2nO2VqFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL+2VqOyImOulvCDrsJjtmZjtlahcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmcoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IExPQURJTkdfVFJBTlNBQ1RJT05fTElTVCxcclxuICAgIH1cclxufSIsImltcG9ydCBBcGkgZnJvbSAnLi4vQXBpJztcclxuaW1wb3J0IGNyZWF0ZUFjdGlvbnMgZnJvbSAnLi4vYXBpLXJlZHV4LXBhY2svY3JlYXRlQWN0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZFVENIX1RSQU5TQUNUSU9OX0xJU1QgPSAndHJhbnNhY3Rpb24vRkVUQ0hfVFJBTlNBQ1RJT05fTElTVCc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBTlNBQ1RJT04gPSAndHJhbnNhY3Rpb24vQ1JFQVRFX1RSQU5TQUNUSU9OJztcclxuY29uc3QgeyBjb2xsZWN0aW9uLCBjcmVhdGUsIHJlc2V0IH0gPSBjcmVhdGVBY3Rpb25zKCd0cmFuc2FjdGlvbnMnKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldFRyYW5zYWN0aW9uTGlzdCA9IHJlc2V0O1xyXG5cclxuY29uc3QgUEFHRV9TSVpFID0gMTA7XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gcmVxdWVzdFRyYW5zYWN0aW9uTGlzdChwYXJhbXMsX3BhZ2U9MSl7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGUgOiBGRVRDSF9UUkFOU0FDVElPTl9MSVNULFxyXG4vLyAgICAgICAgIHByb21pc2UgOiBBcGkuZ2V0KCcvdHJhbnNhY3Rpb25zJyx7cGFyYW1zOnsuLi5wYXJhbXMsX3BhZ2UsX2xpbWl0IDogUEFHRV9TSVpFfX0pLFxyXG4vLyAgICAgICAgIG1ldGEgOntcclxuLy8gICAgICAgICAgICAgcGFnZU51bWJlciA6IF9wYWdlLFxyXG4vLyAgICAgICAgICAgICBwYWdlU2l6ZSA6IFBBR0VfU0laRSxcclxuLy8gICAgICAgICAgICAgbm90aWZpY2F0aW9uIDoge1xyXG4vLyAgICAgICAgICAgICAgICAgc3VjY2VzcyA6IFwi6rGw656YIOuqqeuhneydhCDstZzsi6DsoJXrs7TroZwg7JeF642w7J207Yq4IO2VmOyYgOyKteuLiOuLpC5cIixcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yIDogJ+qxsOuemOuqqeuhneydhCDqsLHsi6DtlZjripQg7KSR7JeQIOusuOygnOqwgCDrsJzsg53tlZjsmIDsirXri4jri6QuJ1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vQVBJIO2YuOy2nCDrsKnsi53snLzroZwg6rWQ7LK0XHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0VHJhbnNhY3Rpb25MaXN0KHBhcmFtcyxfcGFnZT0xKXtcclxuICAgIGNvbnN0IG1ldGEgPSB7XHJcbiAgICAgICAgcGFnZU51bWJlciA6IF9wYWdlLFxyXG4gICAgICAgIHBhZ2VTaXplIDogUEFHRV9TSVpFLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbiA6IHtcclxuICAgICAgICAgICAgc3VjY2VzcyA6IFwi6rGw656YIOuqqeuhneydhCDstZzsi6DsoJXrs7TroZwg7JeF642w7J207Yq4IO2VmOyYgOyKteuLiOuLpC4gVHJhbnNhY3Rpb25QYWNrQWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJvciA6ICfqsbDrnpjrqqnroZ3snYQg6rCx7Iug7ZWY64qUIOykkeyXkCDrrLjsoJzqsIAg67Cc7IOd7ZWY7JiA7Iq164uI64ukLidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sbGVjdGlvbih7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIF9wYWdlLFxyXG4gICAgICAgIF9saW1pdCA6IFBBR0VfU0laRVxyXG4gICAgfSxtZXRhKVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGF0YSxvbkNvbXBsZXRlKXtcclxuICAgIFxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlIDogQ1JFQVRFX1RSQU5TQUNUSU9OLFxyXG4vLyAgICAgICAgIHByb21pc2UgOiBBcGkucG9zdCgnL3RyYW5zYWN0aW9ucycsZGF0YSksXHJcbi8vICAgICAgICAgbWV0YSA6IHtcclxuLy8gICAgICAgICAgICAgb25TdWNjZXNzIDogb25Db21wbGV0ZSxcclxuLy8gICAgICAgICAgICAgbm90aWZpY2F0aW9uIDoge1xyXG4vLyAgICAgICAgICAgICAgICAgc3VjY2VzcyA6ICfqsbDrnpjqsIAg7ISx6rO17KCB7Jy866GcIOyZhOujjOuQmOyXiOyKteuLiOuLpC4nLFxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGF0YSxvbkNvbXBsZXRlKXtcclxuICAgIGNvbnN0IG1ldGEgPSB7XHJcbiAgICAgICAgb25TdWNjZXNzIDogb25Db21wbGV0ZSxcclxuICAgICAgICBub3RpZmljYXRpb24gOiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgOiAn6rGw656Y6rCAIOyEseqzteyggeycvOuhnCDsmYTro4zrkJjsl4jsirXri4jri6QuJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlKGRhdGEse30sbWV0YSk7XHJcbn0iLCJpbXBvcnQgY3JlYXRlQWN0aW9ucyBmcm9tICcuLi9hcGktcmVkdXgtcGFjay9jcmVhdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IHtjcmVhdGV9ID0gY3JlYXRlQWN0aW9ucygndXNlcnMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VyKGRhdGEsb25Db21wbGV0ZSl7XHJcbiAgICByZXR1cm4gY3JlYXRlKFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24gOiB7c3VjY2VzcyA6ICftmozsm5DqsIDsnoUgLCDshLHqs7XsoIEnfSxcclxuICAgICAgICAgICAgb25TdWNjZXNzIDogb25Db21wbGV0ZSxcclxuICAgICAgICB9XHJcbiAgICApXHJcbn0iLCJleHBvcnQgY29uc3QgRkVUQ0hfTElTVCA9ICdhcGktcmVkdXgtcGFjay9GRVRDSF9MSVNUJztcclxuZXhwb3J0IGNvbnN0IEZFVENIID0gJ2FwaS1yZWR1eC1wYWNrL0ZFVENIJztcclxuZXhwb3J0IGNvbnN0IFVQREFURSA9ICdhcGktcmVkdXgtcGFjay9VUERBVEUnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFID0gJ2FwaS1yZWR1eC1wYWNrL0NSRUFURSc7XHJcbmV4cG9ydCBjb25zdCBSRVNFVCA9ICdhcGktcmVkdXgtcGFjay9SRVNFVCc7IiwiaW1wb3J0IHtGRVRDSF9MSVNULENSRUFURSxVUERBVEUsRkVUQ0gsUkVTRVR9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uL0FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocmVzb3VyY2VOYW1lLCBrZXkgPSAnaWQnKSA9Pih7XHJcbiAgICBjb2xsZWN0aW9uIDogKHBhcmFtcz17fSwgbWV0YT17fSkgPT4gKHtcclxuICAgICAgICB0eXBlIDogRkVUQ0hfTElTVCxcclxuICAgICAgICBwcm9taXNlIDogQXBpLmdldChyZXNvdXJjZU5hbWUse3BhcmFtc30pLFxyXG4gICAgICAgIG1ldGEgOiB7XHJcbiAgICAgICAgICAgIC4uLm1ldGEsXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lLFxyXG4gICAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgbWVtYmVyIDogKGlkLHBhcmFtcz17fSxtZXRhPXt9KT0+KHtcclxuICAgICAgICB0eXBlIDogRkVUQ0gsXHJcbiAgICAgICAgcHJvbWlzZSA6IEFwaS5nZXQoYCR7cmVzb3VyY2VOYW1lfS8ke2lkfWAse3BhcmFtc30pLFxyXG4gICAgICAgIG1ldGEgOiB7XHJcbiAgICAgICAgICAgIC4uLm1ldGEsXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lLFxyXG4gICAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgY3JlYXRlIDogKGRhdGEscGFyYW1zPXt9LG1ldGE9e30pPT4oe1xyXG4gICAgICAgIHR5cGUgOiBDUkVBVEUsXHJcbiAgICAgICAgcHJvbWlzZSA6IEFwaS5wb3N0KHJlc291cmNlTmFtZSxkYXRhLHtwYXJhbXN9KSxcclxuICAgICAgICBtZXRhIDoge1xyXG4gICAgICAgICAgICAuLi5tZXRhLFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIHJlc291cmNlTmFtZVxyXG4gICAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgdXBkYXRlIDogKGlkLGRhdGEscGFyYW1zPXt9LG1ldGE9e30pPT4oe1xyXG4gICAgICAgIHR5cGUgOiBVUERBVEUsXHJcbiAgICAgICAgcHJvbWlzZSA6IEFwaS5nZXQoYCR7cmVzb3VyY2VOYW1lfS8ke2lkfWAsZGF0YSx7cGFyYW1zfSksXHJcbiAgICAgICAgbWV0YSA6IHtcclxuICAgICAgICAgICAgLi4ubWV0YSxcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICByZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcbiAgICByZXNldCA6ICgpPT4oe1xyXG4gICAgICAgIHR5cGUgOiBSRVNFVCxcclxuICAgICAgICBtZXRhIDoge3Jlc291cmNlTmFtZX1cclxuICAgIH0pXHJcbn0pIiwiaW1wb3J0IHtoYW5kbGV9IGZyb20gJ3JlZHV4LXBhY2snO1xyXG5pbXBvcnQgeyBDUkVBVEUsVVBEQVRFLEZFVENILEZFVENIX0xJU1QsUkVTRVQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuLy/shJzroZwg64uk66W4IOuNsOydtO2EsOulvCDsspjrpqztlaDrlYwg6rCZ7J2AIHR5cGXsnZgg7JWh7IWY7J2EIOyCrOyaqe2VoCDqsoPsnbTrr4DroZwg7JWh7IWY7JeQ7IScIO2PrO2VqOyLnO2CqCBtZXRh7J2YIHJlc291cmNlTmFtZeqzvCDrpqzrk4DshJzsnZgg7J2066aE7J20IFxyXG4vL+ydvOy5mO2VnCDqsr3smrDsl5Drp4wg66as65OA7IScIOy9lOuTnOulvCDsi6TtlontlZjrj4TroZ0g66eM65OsXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5yZWR1Y2VyTmFtZXMpPT57XHJcbiAgICByZXR1cm4gcmVkdWNlck5hbWVzLnJlZHVjZSgoYXBpUmVkdWNlcnMsbmFtZSk9PntcclxuICAgICAgICBjb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkcyA6IFtdLFxyXG4gICAgICAgICAgICBlbnRpdGllcyA6IHt9LFxyXG4gICAgICAgICAgICBsb2FkaW5nU3RhdGUgOiB7XHJcbiAgICAgICAgICAgICAgICBbYCR7Q1JFQVRFfS8ke25hbWV9YF0gOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFtgJHtVUERBVEV9LyR7bmFtZX1gXSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgW2Ake0ZFVENIfS8ke25hbWV9YF0gOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFtgJHtGRVRDSF9MSVNUfS8ke25hbWV9YF0gOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JTdGF0ZSA6IHtcclxuICAgICAgICAgICAgICAgIFtgJHtDUkVBVEV9LyR7bmFtZX1gXSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgW2Ake1VQREFURX0vJHtuYW1lfWBdIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBbYCR7RkVUQ0h9LyR7bmFtZX1gXSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgW2Ake0ZFVENIX0xJU1R9LyR7bmFtZX1gXSA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uIDoge30sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhcGlSZWR1Y2Vyc1tuYW1lXSA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgcGF5bG9hZCxtZXRhfSA9IGFjdGlvbjtcclxuICAgICAgICAgICAgY29uc3Qge3Jlc291cmNlTmFtZSxrZXl9ID0gbWV0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc291cmNlTmFtZSAhPT0gbmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgVVBEQVRFOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGRVRDSDpcclxuICAgICAgICAgICAgICAgIGNhc2UgQ1JFQVRFIDpcclxuICAgICAgICAgICAgICAgIGNhc2UgRkVUQ0hfTElTVCA6e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoc3RhdGUsYWN0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0IDogcHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nU3RhdGU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5sb2FkaW5nU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3R5cGV9LyR7bmFtZX1gXSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JTdGF0ZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3JTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7dHlwZX0vJHtuYW1lfWBdIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIDogcHJldlN0YXRlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09IEZFVENIX0xJU1Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwYWdlTnVtYmVyLHBhZ2VTaXplfSA9IG1ldGEgfHx7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHMgPSBkYXRhLm1hcChlbnRpdHk9PmVudGl0eVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRpdGllcyA9IGRhdGEucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmluYWxFbnRpdGllcyxlbnRpdHkpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmluYWxFbnRpdGllcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlbnRpdHlba2V5XV0gOiBlbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdGllcyA6IHsuLi5wcmV2U3RhdGUuZW50aXRpZXMsLi4uZW50aXRpZXN9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nU3RhdGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUubG9hZGluZ1N0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3R5cGV9LyR7bmFtZX1gXSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclN0YXRlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7dHlwZX0vJHtuYW1lfWBdIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24gOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgOiBwYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0aWVzIDogey4uLnByZXZTdGF0ZS5lbnRpdGllcyxbaWRdIDogZGF0YX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdTdGF0ZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5sb2FkaW5nU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7dHlwZX0vJHtuYW1lfWBdIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yU3RhdGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3JTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHt0eXBlfS8ke25hbWV9YF0gOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZSA6IHByZXZTdGF0ZSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtlcnJvck1lc3NhZ2V9ID0gcGF5bG9hZC5yZXNwb25zZSA/IHBheWxvYWQucmVzcG9uc2UuZGF0YSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1N0YXRlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUubG9hZGluZ1N0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7dHlwZX0vJHtuYW1lfWBdIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclN0YXRlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3JTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3R5cGV9LyR7bmFtZX1gXSA6IGVycm9yTWVzc2FnZXx8dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgUkVTRVQgOiByZXR1cm4gaW5pdFN0YXRlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdCA6IHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXBpUmVkdWNlcnM7XHJcbiAgICB9LHt9KVxyXG59IiwiaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQge0NSRUFURSxVUERBVEUsRkVUQ0hfTElTVCxGRVRDSH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMocmVzb3VyY2VOYW1lKXtcclxuICAgIGNvbnN0IHJlc291cmNlU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZVtyZXNvdXJjZU5hbWVdO1xyXG4gICAgY29uc3QgZW50aXRpZXNTZWxlY3RvciA9IHN0YXRlID0+IHJlc291cmNlU2VsZWN0b3Ioc3RhdGUpLmVudGl0aWVzO1xyXG4gICAgY29uc3QgY29sbGVjdGlvblNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgW3Jlc291cmNlU2VsZWN0b3JdLFxyXG4gICAgICAgICh7aWRzLGVudGl0aWVzfSk9Pmlkcy5tYXAoaWQ9PmVudGl0aWVzW2lkXSlcclxuICAgIClcclxuICAgIGNvbnN0IGxvYWRpbmdTdGF0ZVNlbGVjdG9yID0gc3RhdGUgPT4gcmVzb3VyY2VTZWxlY3RvcihzdGF0ZSkubG9hZGluZ1N0YXRlO1xyXG4gICAgY29uc3QgZXJyb3JTdGF0ZVNlbGVjdG9yID0gc3RhdGUgPT4gcmVzb3VyY2VTZWxlY3RvcihzdGF0ZSkuZXJyb3JTdGF0ZTtcclxuXHJcbiAgICBjb25zdCBjb2xsZWN0aW9uTG9hZGluZ1N0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiBsb2FkaW5nU3RhdGVTZWxlY3RvcihzdGF0ZSlbYCR7RkVUQ0hfTElTVH0vJHtyZXNvdXJjZU5hbWV9YF07XHJcbiAgICBjb25zdCBjcmVhdGVMb2FkaW5nU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGxvYWRpbmdTdGF0ZVNlbGVjdG9yKHN0YXRlKVtgJHtDUkVBVEV9LyR7cmVzb3VyY2VOYW1lfWBdXHJcbiAgICBjb25zdCB1cGRhdGVMb2FkaW5nU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGxvYWRpbmdTdGF0ZVNlbGVjdG9yKHN0YXRlKVtgJHtVUERBVEV9LyR7cmVzb3VyY2VOYW1lfWBdO1xyXG4gICAgY29uc3QgbWVtYmVyTG9hZGluZ1N0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiBsb2FkaW5nU3RhdGVTZWxlY3RvcihzdGF0ZSlbYCR7RkVUQ0h9LyR7cmVzb3VyY2VOYW1lfWBdXHJcblxyXG4gICAgY29uc3QgY29sbGVjdGlvbkVycm9yU3RhdGVTZWxlY3RvciA9IHN0YXRlID0+IGVycm9yU3RhdGVTZWxlY3RvcihzdGF0ZSlbYCR7RkVUQ0hfTElTVH0vJHtyZXNvdXJjZU5hbWV9YF07XHJcbiAgICBjb25zdCBjcmVhdGVFcnJvclN0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiBlcnJvclN0YXRlU2VsZWN0b3Ioc3RhdGUpW2Ake0NSRUFURX0vJHtyZXNvdXJjZU5hbWV9YF07XHJcbiAgICBjb25zdCB1cGRhdGVFcnJvclN0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiBlcnJvclN0YXRlU2VsZWN0b3Ioc3RhdGUpW2Ake1VQREFURX0vJHtyZXNvdXJjZU5hbWV9YF07XHJcbiAgICBjb25zdCBtZW1iZXJFcnJvclN0YXRlU2VsZWN0b3IgPSBzdGF0ZSA9PiBlcnJvclN0YXRlU2VsZWN0b3Ioc3RhdGUpW2Ake0ZFVENIfS8ke3Jlc291cmNlTmFtZX1gXTtcclxuXHJcbiAgICBjb25zdCBwYWdpbmF0aW9uU2VsZWN0b3IgPSBzdGF0ZSA9PntcclxuICAgICAgICBjb25zdCB7cGFnaW5hdGlvbn0gPSByZXNvdXJjZVNlbGVjdG9yKHN0YXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBudW1iZXIgOiBwYWdpbmF0aW9uLm51bWJlciB8fCAwLFxyXG4gICAgICAgICAgICBzaXplIDogcGFnaW5hdGlvbi5zaXplXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVudGl0aWVzU2VsZWN0b3IsXHJcbiAgICAgICAgY29sbGVjdGlvblNlbGVjdG9yLFxyXG4gICAgICAgIGNvbGxlY3Rpb25Mb2FkaW5nU3RhdGVTZWxlY3RvcixcclxuICAgICAgICBjcmVhdGVMb2FkaW5nU3RhdGVTZWxlY3RvcixcclxuICAgICAgICB1cGRhdGVMb2FkaW5nU3RhdGVTZWxlY3RvcixcclxuICAgICAgICBtZW1iZXJMb2FkaW5nU3RhdGVTZWxlY3RvcixcclxuICAgICAgICBwYWdpbmF0aW9uU2VsZWN0b3IsXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNzcywgd2l0aFN0eWxlc1Byb3BUeXBlcyB9IGZyb20gXCIuLi91aS93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCBBcHBOYXYsIHsgSEVJR0hUIH0gZnJvbSBcIi4vQXBwTmF2XCI7XHJcblxyXG5jbGFzcyBBcHBMYXlvdXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzdHlsZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHsuLi5jc3Moc3R5bGVzLndyYXBwZXIpfT5cclxuICAgICAgICA8QXBwTmF2IC8+XHJcbiAgICAgICAgPGRpdiB7Li4uY3NzKHN0eWxlcy5ib2R5KX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIC4uLndpdGhTdHlsZXNQcm9wVHlwZXMsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygoeyB1bml0IH0pID0+ICh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiBIRUlHSFQsXHJcbiAgfSxcclxuICBib2R5OiB7XHJcbiAgICBwYWRkaW5nOiB1bml0ICogNCxcclxuICB9LFxyXG59KSkoQXBwTGF5b3V0KTtcclxuIiwiLy/stZzsg4Hri6gg64Sk67mEIOuplOuJtCwg7Y6Y7J207KeAIOygnOuqqSwg7ZqM7JuQ6rCA7J6FIOuyhO2KvFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3NzLCB3aXRoU3R5bGVzUHJvcFR5cGVzIH0gZnJvbSBcIi4uL3VpL3dpdGhTdHlsZXNcIjtcclxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL3VpL0hlYWRpbmdcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4uL3VpL1RleHRcIjtcclxuaW1wb3J0IHtSRUdJU1RFUl9VU0VSX01PREFMfSBmcm9tICcuLi9jb25zdGFudHMvbW9kYWxzJztcclxuaW1wb3J0IHtDb25zdW1lciBhcyBNb2RhbH0gZnJvbSBcIi4uL3VpL01vZGFsL2NvbnRleHRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSEVJR0hUID0gNjQ7XHJcblxyXG5jbGFzcyBBcHBOYXYgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHN0eWxlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgey4uLmNzcyhzdHlsZXMud3JhcHBlcil9PlxyXG4gICAgICAgIDxkaXYgey4uLmNzcyhzdHlsZXMuY29udGFpbmVyKX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBsZXZlbD17M30gaW52ZXJzZT5cclxuICAgICAgICAgICAg7L2U7J24IOqxsOuemOyGjFxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPE1vZGFsPlxyXG4gICAgICAgICAgICB7KHtvcGVuTW9kYWx9KT0+KFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaW52ZXJzZSBib2xkIGxhcmdlIG9uUHJlc3M9eygpPT5vcGVuTW9kYWwoUkVHSVNURVJfVVNFUl9NT0RBTCl9PlxyXG4gICAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BcHBOYXYucHJvcFR5cGVzID0ge1xyXG4gIC4uLndpdGhTdHlsZXNQcm9wVHlwZXMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGNvbG9yLCBkZXB0aCwgdW5pdCB9KSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIC4uLmRlcHRoLmxldmVsMSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IEhFSUdIVCAtIDQsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLnByaW1hcnksXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHBhZGRpbmdMZWZ0OiB1bml0ICogMixcclxuICAgIHBhZGRpbmdSaWdodDogdW5pdCAqIDIsXHJcbiAgfSxcclxufSkpKEFwcE5hdik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vdWkvVG9hc3QnO1xyXG5cclxuY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dNZXNzYWdlLG1lc3NhZ2Usd2FybmluZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBzaG93TWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgIDxUb2FzdCBtZXNzYWdlPXttZXNzYWdlfSB3YXJuaW5nID0ge3dhcm5pbmd9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzPXtcclxuICAgIHNob3dNZXNzYWdlIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtZXNzYWdlIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHdhcm5pbmcgOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4uLy4uL3VpL1RleHRcIjtcclxuaW1wb3J0IFNwYWNpbmcgZnJvbSBcIi4uLy4uL3VpL1NwYWNpbmdcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi91aS9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi91aS9CdXR0b25cIjtcclxuaW1wb3J0IElubGluZUxpc3QgZnJvbSBcIi4uLy4uL3VpL0lubGluZUxpc3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL3VpL0Zvcm1cIjtcclxuaW1wb3J0IHsgQ29uc3VtZXIgYXMgTW9kYWwgfSBmcm9tIFwiLi4vLi4vdWkvTW9kYWwvY29udGV4dFwiO1xyXG5cclxuY2xhc3MgVHJhZGVDb2luUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQodmFsdWVzLCBjbG9zZU1vZGFsKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGNvZGUsIGNyZWF0ZVRyYW5zYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZm9ybVZhbHVlID0ge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGNvZGUsXHJcbiAgICAgIG5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coXCJjb2RlXCIsIGNvZGUpO1xyXG4gICAgY29uc29sZS5sb2coXCJuYW1lXCIsIG5hbWUpO1xyXG5cclxuICAgIGNyZWF0ZVRyYW5zYWN0aW9uKGZvcm1WYWx1ZSxjbG9zZU1vZGFsKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIHR5cGUsIGxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUgPT09IFwic2VsbFwiID8gXCLtjJDrp6RcIiA6IFwi6rWs66ekXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWw+XHJcbiAgICAgICAgeyh7IGNsb3NlTW9kYWwgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHRoaXMuaGFuZGxlU3VibWl0KHZhbHVlcywgY2xvc2VNb2RhbCl9XHJcbiAgICAgICAgICAgIGluaXRWYWx1ZXM9e3sgY3VycmVudFByaWNlOiBwcmljZSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db25zdW1lcj5cclxuICAgICAgICAgICAgICB7KHsgb25DaGFuZ2UsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3BhY2luZyBob3Jpem9udGFsPXs0fSB2ZXJ0aWNhbD17OH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHhsYXJnZSBib2xkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfSB7dHlwZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPFNwYWNpbmcgYm90dG9tPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW50UHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLquIjslaFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlc1tcImN1cnJlbnRQcmljZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1NwYWNpbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGFjaW5nIGJvdHRvbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7IiY65+JXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXNbXCJhbW91bnRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9TcGFjaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8SW5saW5lTGlzdCBzcGFjaW5nQmV0d2Vlbj17MX0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZz8n6rGw656Y7LKY66as7KSRJzp0eXBlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9e2Nsb3NlTW9kYWx9Puy3qOyGjDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0lubGluZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L1NwYWNpbmc+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtLkNvbnN1bWVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuVHJhZGVDb2luUGFnZS5wcm9wVHlwZXMgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWRlQ29pblBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi8uLi91aS9UZXh0JztcclxuaW1wb3J0IFNwYWNpbmcgZnJvbSAnLi4vLi4vdWkvU3BhY2luZyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi91aS9JbnB1dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vdWkvQnV0dG9uJ1xyXG5pbXBvcnQgSW5saW5lTGlzdCBmcm9tICcuLi8uLi91aS9JbmxpbmVMaXN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vdWkvRm9ybSc7XHJcbmltcG9ydCB7Q29uc3VtZXIgYXMgTW9kYWx9IGZyb20gJy4uLy4uL3VpL01vZGFsL2NvbnRleHQnO1xyXG5cclxuXHJcbmNsYXNzIFJlZ2lzdGVyUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KHZhbHVlcyxjbG9zZU1vZGFsKXtcclxuICAgICAgICBjb25zdCB7Y3JlYXRlVXNlcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNyZWF0ZVVzZXIodmFsdWVzLGNsb3NlTW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7bG9hZGluZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbD5cclxuICAgICAgICAgICAgICAgIHsoe2Nsb3NlTW9kYWx9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt2YWx1ZXM9PnRoaXMuaGFuZGxlU3VibWl0KHZhbHVlcyxjbG9zZU1vZGFsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnN1bWVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7b25DaGFuZ2V9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjaW5nIGhvcml6b250YWw9ezR9IHZlcnRpY2FsPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgeGxhcmdlIGJvbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtmozsm5Drk7HroZ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2luZyBib3R0b209ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VySWRcIiBsYWJlbCA9IFwi7IKs7Jqp7J6QIOyVhOydtOuUlFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjaW5nIGJvdHRvbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInRvdGFsQW1vdW50XCIgbGFiZWwgPSBcIuyekOyCsOy0neyVoVwiIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17b25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lTGlzdCBzcGFjaW5nQmV0d2Vlbj17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBwcmltYXJ5IGRpc2FibGVkPXtsb2FkaW5nfT7tmozsm5Drk7HroZ08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25QcmVzcz17Y2xvc2VNb2RhbH0gZGlzYWJsZWQ9e2xvYWRpbmd9Puy3qOyGjDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubGluZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnN1bWVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJQYWdlLnByb3BUeXBlcyA9IHtcclxuICAgIGxvYWRpbmc6UHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjcmVhdGVVc2VyIDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBhZ2U7IiwiZXhwb3J0IGNvbnN0IFRSQURFX0NPSU5fTU9EQUwgPSAnbW9kYWwvVFJBREVfQ09JTl9NT0RBTCc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX01PREFMID0gJ21vZGFsL1JFR0lTVEVSX1VTRVJfTU9EQUwnOyIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9Ob3RpZmljYXRpb24nO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT57XHJcbiAgICBjb25zdCB7c2hvd01lc3NhZ2UsbWVzc2FnZSx3YXJuaW5nfSA9IHN0YXRlLm5vdGlmaWNhdGlvbjtcclxuICAgIHJldHVybiB7c2hvd01lc3NhZ2UsbWVzc2FnZSx3YXJuaW5nfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5vdGlmaWNhdGlvbik7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3NldExvY2F0aW9ufSBmcm9tICcuLi9hY3Rpb25zL3JvdXRlckFjdGlvbnMnO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjb21wb3NlIGZyb20gJ3JlY29tcG9zZS9jb21wb3NlJztcclxuXHJcbmNsYXNzIFJvdXRlclN0YXRlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHsgc2V0TG9jYXRpb24sIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNldExvY2F0aW9uKGxvY2F0aW9uKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgc2V0TG9jYXRpb24sIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNldExvY2F0aW9uKGxvY2F0aW9uKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuUm91dGVyU3RhdGUucHJvcFR5cGVzID0ge1xyXG4gICAgc2V0TG9jYXRpb24gOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGxvY2F0aW9uIDogUHJvcFR5cGVzLm9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShjb25uZWN0KG51bGwsIHsgc2V0TG9jYXRpb24gfSksIHdpdGhSb3V0ZXIpKFJvdXRlclN0YXRlKTsiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFRyYWRlQ29pblBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYWluL1RyYWRlQ29pblBhZ2UnO1xyXG4vL2ltcG9ydCB7Y3JlYXRlVHJhbnNhY3Rpb259IGZyb20gJy4uLy4uL2FjdGlvbnMvdHJhbnNhY3Rpb25BY3Rpb25zJztcclxuaW1wb3J0IHtjcmVhdGVUcmFuc2FjdGlvbixDUkVBVEVfVFJBTlNBQ1RJT059IGZyb20gJy4uLy4uL2FjdGlvbnMvdHJhbnNhY3Rpb25QYWNrQWN0aW9ucyc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PntcclxuICAgIGNvbnN0IHtsb2FkaW5nU3RhdGV9ID0gc3RhdGUudHJhbnNhY3Rpb25zO1xyXG4gICAgY29uc3QgbG9hZGluZyA9IGxvYWRpbmdTdGF0ZVtDUkVBVEVfVFJBTlNBQ1RJT05dO1xyXG4gICAgcmV0dXJuIHtsb2FkaW5nfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMse2NyZWF0ZVRyYW5zYWN0aW9ufSkoVHJhZGVDb2luUGFnZSk7IiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaWdudXAvUmVnaXN0ZXJQYWdlJztcclxuaW1wb3J0IHtjcmVhdGVVc2VyfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXJBY3Rpb25zJztcclxuaW1wb3J0IHt1c2VyQ3JlYXRlTG9hZGluZ1N0YXRlU2VsZWN0b3J9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy91c2VyU2VsZWN0b3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBzdGF0ZT0+KHtcclxuICAgICAgICBsb2FkaW5nIDogdXNlckNyZWF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yKHN0YXRlKSxcclxuICAgIH0pLFxyXG4gICAge2NyZWF0ZVVzZXJ9LFxyXG4pKFJlZ2lzdGVyUGFnZSk7IiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XHJcbiAgICBsZXQgaW5EZWJvdW5jZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbiAgICAgIGlmIChpbkRlYm91bmNlKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGluRGVib3VuY2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGluRGVib3VuY2UgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IGZ1bmMoLi4uYXJncyksXHJcbiAgICAgICAgZGVsYXkpO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQge1NFVF9FUlJPUn0gZnJvbSAnLi4vYWN0aW9ucy90cmFuc2FjdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlLFNIT1dfTk9USUZJQ0FUSU9OLGhpZGVNZXNzYWdlfSBmcm9tICcuLi9hY3Rpb25zL25vdGlmaWNhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tICcuLi9kZWJvdW5jZSc7XHJcbi8vcmVkdXgtcGFja1xyXG5pbXBvcnQge0tFWSxMSUZFQ1lDTEV9IGZyb20gJ3JlZHV4LXBhY2snXHJcbi8vaW1wb3J0IHtGRVRDSF9UUkFOU0FDVElPTl9MSVNULGNyZWF0ZVRyYW5zYWN0aW9ufSBmcm9tICcuLi9hY3Rpb25zL3RyYW5zYWN0aW9uUGFja0FjdGlvbnMnXHJcblxyXG5jb25zdCBkZWJvdWNlUnVubmVyID0gZGVib3VuY2UoYWN0aW9uPT4gYWN0aW9uKCksNDAwMCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0UnVubmVyPT4gYWN0aW9uPT57XHJcbiAgICBjb25zdCB7dHlwZSxtZXRhfSA9IGFjdGlvbjtcclxuICAgIGlmKG1ldGEgJiYgbWV0YS5ub3RpZmljYXRpb24pe1xyXG4gICAgICAgIGNvbnN0IHtzdWNjZXNzICwgZXJyb3J9ID0gbWV0YS5ub3RpZmljYXRpb247XHJcblxyXG4gICAgICAgIGlmKHN1Y2Nlc3MmJm1ldGFbS0VZLkxJRkVDWUNMRV09PT1MSUZFQ1lDTEUuU1VDQ0VTUyl7Ly/shLHqs7VcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2hvd01lc3NhZ2Uoc3VjY2VzcykpXHJcbiAgICAgICAgICAgIGRlYm91Y2VSdW5uZXIoKCkgPT5zdG9yZS5kaXNwYXRjaChoaWRlTWVzc2FnZSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXJyb3IgJiYgbWV0YVtLRVkuTElGRUNZQ0xFXSA9PT0gTElGRUNZQ0xFLkZBSUxVUkUpeyAvL+yLpO2MqFxyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93TWVzc2FnZShlcnJvcix0cnVlKSk7XHJcbiAgICAgICAgICAgIGRlYm91Y2VSdW5uZXIoKCk9PnN0b3JlLmRpc3BhdGNoKGhpZGVNZXNzYWdlKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIG5leHRSdW5uZXIoYWN0aW9uKTtcclxuXHJcbn0iLCJpbXBvcnQgeyBTRVRfTE9DQVRJT04gfSBmcm9tICcuLi9hY3Rpb25zL3JvdXRlckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXRGaWx0ZXIgfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaEZpbHRlckFjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gcGFyc2UocXMpe1xyXG4gICAgLy/sv7zrpqwg7Iqk7Yq466eBIOqwkuydhCDqsJ3ssrTroZwg67CY7ZmY7ZWoXHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN1YnN0cigxKTtcclxuICAgIGNvbnN0IGNodW5rID0gcXVlcnlTdHJpbmcuc3BsaXQoJyYnKTtcclxuICAgIHJldHVybiBjaHVua1xyXG4gICAgLm1hcCgoY2h1bmspPT5jaHVuay5zcGxpdChcIj1cIikpXHJcbiAgICAucmVkdWNlKChyZXN1bHQsW2tleSx2YWx1ZV0pPT4oe1xyXG4gICAgICAgIC4uLnJlc3VsdCxba2V5XTp2YWx1ZVxyXG4gICAgfSkse30pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZT0+bmV4dFJ1bm5lcj0+YWN0aW9uPT57XHJcbiAgICBjb25zdCB7dHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV4dFJ1bm5lcihhY3Rpb24pO1xyXG4gICAgaWYodHlwZSA9PT0gU0VUX0xPQ0FUSU9OKXsgLy/so7zshowg64+Z6riw7ZmUIOyVoeyFmOyXkOyEnOunjCDsnpHrj5lcclxuICAgICAgICBjb25zdCB7cGF0aG5hbWUsc2VhcmNofSA9IHBheWxvYWQubG9jYXRpb247XHJcbiAgICAgICAgaWYocGF0aG5hbWUgPT09Jy8nKXsgLy/qsr3roZzqsIAg7J287LmY7ZWg65WM66eMIOyekeuPmVxyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzZXRGaWx0ZXIocGFyc2Uoc2VhcmNoKSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufSIsImltcG9ydCB7U0VUX0ZJTFRFUn0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2hGaWx0ZXJBY3Rpb25zJztcclxuaW1wb3J0IHtyZXF1ZXN0VHJhbnNhY3Rpb25MaXN0LHJlc2V0VHJhbnNhY3Rpb25MaXN0fSBmcm9tICcuLi9hY3Rpb25zL3RyYW5zYWN0aW9uUGFja0FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dFJ1bm5lciA9PiBhY3Rpb249PntcclxuICAgIC8v6rKA7IOJIO2VhO2EsCDrs4Dqsr3snbQg7IOd6ri465WMIOyekOuPmeycvOuhnCDqsoDsg4nqsrDqs7wg7JqU7LKt7J2EIOq1rO2YhFxyXG4gICAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXh0UnVubmVyKGFjdGlvbik7XHJcbiAgICBpZih0eXBlID09PSBTRVRfRklMVEVSKXtcclxuICAgICAgICBjb25zdCB7cGFyYW1zfSA9IHBheWxvYWQgfHwge307XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVzZXRUcmFuc2FjdGlvbkxpc3QoKSk7XHJcbiAgICAgICAgLy/qsoDsg4nqsrDqs7zrpbwg7JqU7LKt7ZWY6riwIOyghOyXkCDtmITsnqwg6rKA7IOJIOuqqeuhnSDstIjquLDtmZRcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXF1ZXN0VHJhbnNhY3Rpb25MaXN0KHBhcmFtcykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufSIsImltcG9ydCB7XHJcbiAgICBUUkFERV9DT01QTEVURSxcclxuICAgIHJlcXVlc3RUcmFuc2FjdGlvbkxpc3QsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy90cmFuc2FjdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi9hY3Rpb25zL25vdGlmaWNhdGlvbkFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dFJ1bm5lciA9PiBhY3Rpb249PiB7XHJcbiAgICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5leHRSdW5uZXIoYWN0aW9uKTtcclxuICAgIGlmKHR5cGUgPT09IFRSQURFX0NPTVBMRVRFKXtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCLqsbDrnpjrqqnroZ3snYQg7LWc7ISgIOygleuztOuhnCDsl4XrjbDsnbTtirgg7ZWY7JiA7Iq164uI64ukLiB0cm5hc2FjdGlvbkVmZmVjdHNcIjtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93TWVzc2FnZShtZXNzYWdlKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVxdWVzdFRyYW5zYWN0aW9uTGlzdCgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0iLCIvL2ltcG9ydCB0cmFuc2FjdGlvbnMgZnJvbSAnLi90cmFuc2FjdGlvblJlZHVjZXInOyAvL2FwaSDtmLjstpwg67Cp7Iud7Jy866GcIOuzgOqyve2VqFxyXG5pbXBvcnQgY3JlYXRlUmVkdWNlcnMgZnJvbSAnLi4vYXBpLXJlZHV4LXBhY2svY3JlYXRlUmVkdWNlcnMnO1xyXG5pbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uUmVkdWNlcic7XHJcbmltcG9ydCBzZWFyY2hGaWx0ZXIgZnJvbSAnLi9zZWFyY2hGaWx0ZXJSZWR1Y2VyJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlclJlZHVjZXInO1xyXG5cclxuY29uc3QgYXBpUmVkdWNlcnMgPSBjcmVhdGVSZWR1Y2VycygndHJhbnNhY3Rpb25zJywndXNlcnMnKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvL3RyYW5zYWN0aW9ucyxcclxuICAgIC4uLmFwaVJlZHVjZXJzLFxyXG4gICAgbm90aWZpY2F0aW9uLFxyXG4gICAgc2VhcmNoRmlsdGVyLFxyXG4gICAgcm91dGVyXHJcbn0iLCJpbXBvcnQge1NIT1dfTk9USUZJQ0FUSU9OLEhJREVfTk9USUZJQ0FUSU9OfSBmcm9tICcuLi9hY3Rpb25zL25vdGlmaWNhdGlvbkFjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgbWVzc2FnZSA6JycsXHJcbiAgICB3YXJuaW5nIDogZmFsc2UsXHJcbiAgICBzaG93TWVzc2FnZSA6IGZhbHNlLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0U3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7dHlwZSxwYXlsb2FkfSA9IGFjdGlvblxyXG5cclxuICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlIFNIT1dfTk9USUZJQ0FUSU9OIDpcclxuICAgICAgICAgICAge2NvbnN0e21lc3NhZ2Usd2FybmluZ30gPSBwYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBISURFX05PVElGSUNBVElPTiA6IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0IDogXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTRVRfTE9DQVRJT059IGZyb20gJy4uL2FjdGlvbnMvcm91dGVyQWN0aW9ucyc7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPXtcclxuICAgIGxvY2F0aW9uIDoge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLGFjdGlvbik9PntcclxuICAgIGNvbnN0IHt0eXBlLHBheWxvYWR9ID0gYWN0aW9uO1xyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGNhc2UgU0VUX0xPQ0FUSU9OIDoge1xyXG4gICAgICAgICAgICBjb25zdCB7bG9jYXRpb259ID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2NhdGlvbn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQgOiByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTRVRfRklMVEVSIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2hGaWx0ZXJBY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIHBhcmFtcyA6e31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRTdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgY29uc3Qge3R5cGUsIHBheWxvYWR9ID0gYWN0aW9uO1xyXG5cclxuICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlIFNFVF9GSUxURVIgOntcclxuICAgICAgICAgICAgY29uc3QgeyBwYXJhbXMgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybnsuLi5zdGF0ZSxwYXJhbXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0IDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGNyZWF0ZVNlbGVjdG9ycyBmcm9tICcuLi9hcGktcmVkdXgtcGFjay9jcmVhdGVTZWxlY3RvcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGNyZWF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yIDogdXNlckNyZWF0ZUxvYWRpbmdTdGF0ZVNlbGVjdG9yXHJcbn0gPSBjcmVhdGVTZWxlY3RvcnMoJ3VzZXJzJyk7IiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgbm90aWZpY2F0aW9uRWZmZWN0cyBmcm9tICcuLi9taWRkbGV3YXJlcy9ub3RpZmljYXRpb25FZmZlY3RzJ1xyXG4vL2ltcG9ydCB7U0VUX1RSQU5TQUNUSU9OX0xJU1R9IGZyb20gJy4uL2FjdGlvbnMvdHJhbnNhY3Rpb25BY3Rpb25zJztcclxuaW1wb3J0IHRyYW5zYWN0aW9uRWZmZWN0cyBmcm9tICcuLi9taWRkbGV3YXJlcy90cmFuc2FjdGlvbkVmZmVjdHMnO1xyXG5pbXBvcnQgc2VhcmNoRmlsdGVyRWZmZWN0cyBmcm9tICcuLi9taWRkbGV3YXJlcy9zZWFyY2hGaWx0ZXJFZmZlY3RzJztcclxuaW1wb3J0IHJvdXRlckVmZmVjcyBmcm9tICcuLi9taWRkbGV3YXJlcy9yb3V0ZXJFZmZlY3RzJ1xyXG4vL3JlZHV4LXBhY2tcclxuaW1wb3J0IHttaWRkbGV3YXJlIGFzIHJlZHV4UGFja01pZGRsZXdhcmV9IGZyb20gJ3JlZHV4LXBhY2snO1xyXG5cclxuXHJcbi8vIGNvbnN0IGN1c3RvbU1pZGRsZXdhcmUgPSBzdG9yZSA9Pm5leHRSdW5uZXIgPT4gYWN0aW9uID0+e1xyXG4vLyAgICAgY29uc29sZS5sb2coJ+uvuOuTpOybqOyWtDEg7JWh7IWY6rCd7LK0JyxhY3Rpb24pOyAvL25leHRSdW5uZXIg7J207KCEIOyekeyXhVxyXG4vLyAgICAgY29uc29sZS5sb2coJ+uvuOuTpOybqOyWtDEg7Iuk7ZaJ7KCEJyxzdG9yZS5nZXRTdGF0ZSgpKTsgLy9uZXh0UnVubmVyIOydtOyghCDsnpHsl4UgMlxyXG5cclxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IG5leHRSdW5uZXIoYWN0aW9uKTs7XHJcblxyXG4vLyAgICAgY29uc29sZS5sb2coJ+uvuOuTpOybqOyWtDEg7Iuk7ZaJIO2bhCcsc3RvcmUuZ2V0U3RhdGUoKSk7IC8vbmV4dFJ1bm5lciDsnbTtm4RcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGN1c3RvbU1pZGRsZXdhcmUxID0gKCkgPT4gbmV4dFJ1bm5lciA9PiBhY3Rpb24gPT57XHJcbi8vICAgICBpZihhY3Rpb24udHlwZSA9PT0gU0VUX1RSQU5TQUNUSU9OX0xJU1Qpe1xyXG4vLyAgICAgICAgIHJldHVybiBuZXh0UnVubmVyKHtcclxuLy8gICAgICAgICAgICAgLi4uYWN0aW9uLFxyXG4vLyAgICAgICAgICAgICBwYXlsb2FkIDpbe1xyXG4vLyAgICAgICAgICAgICAgICAgaWQgOiAwLFxyXG4vLyAgICAgICAgICAgICAgICAgY29kZSA6ICdET0lUJyxcclxuLy8gICAgICAgICAgICAgICAgIG5hbWUgOiAn65GQ7J6H7L2U7J24JyxcclxuLy8gICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgOiAxMDAwMDAsXHJcbi8vICAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2UgOiAxMTExLFxyXG4vLyAgICAgICAgICAgICAgICAgZGF0ZVRpbWUgOiAn7ZiE7J6s7Iuc6rCEJyxcclxuLy8gICAgICAgICAgICAgfV1cclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIG5leHRSdW5uZXIoYWN0aW9uKTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY3VzdG9tTWlkZGxld2FyZTIgPSBzdG9yZSA9Pm5leHRSdW5uZXIgPT4gYWN0aW9uID0+e1xyXG4vLyAgICAgY29uc29sZS5sb2coJ+uvuOuTpOybqOyWtDIg7JWh7IWYIOyghOuLrOuQqCcsYWN0aW9uKTsgLy9uZXh0UnVubmVyIOydtOyghCDsnpHsl4VcclxuLy8gICAgIGNvbnNvbGUubG9nKCfrr7jrk6Tsm6jslrQyIOyLpO2WieyghCcsc3RvcmUuZ2V0U3RhdGUoKSk7IC8vbmV4dFJ1bm5lciDsnbTsoIQg7J6R7JeFIDJcclxuXHJcbi8vICAgICBjb25zdCByZXN1bHQgPSBuZXh0UnVubmVyKGFjdGlvbik7O1xyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKCfrr7jrk6Tsm6jslrQgMiDsi6Ttlontm4QnLHN0b3JlLmdldFN0YXRlKCkpOyAvL25leHRSdW5uZXIg7J207ZuEXHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBpbml0U3RhdGVzID0+Y3JlYXRlU3RvcmUoXHJcbi8vICAgICBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpLFxyXG4vLyAgICAgaW5pdFN0YXRlcyxcclxuLy8gICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoKSxcclxuLy8gKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdFN0YXRlcyA9PmNyZWF0ZVN0b3JlKFxyXG4gICAgY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSxcclxuICAgIGluaXRTdGF0ZXMsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuayxyZWR1eFBhY2tNaWRkbGV3YXJlLG5vdGlmaWNhdGlvbkVmZmVjdHMsdHJhbnNhY3Rpb25FZmZlY3RzLHNlYXJjaEZpbHRlckVmZmVjdHMscm91dGVyRWZmZWNzKSlcclxuICAgICxcclxuKSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3NzIH0gZnJvbSBcIi4vd2l0aFN0eWxlc1wiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHN0eWxlcyxcclxuICAgICAgbGFyZ2UsXHJcbiAgICAgIHhsYXJnZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIHhzbWFsbCxcclxuICAgICAgcHJpbWFyeSxcclxuICAgICAgc2Vjb25kYXJ5LFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBvblByZXNzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgey4uLmNzcyhcclxuICAgICAgICAgIHN0eWxlcy5kZWZhdWx0LFxyXG4gICAgICAgICAgeHNtYWxsICYmIHN0eWxlcy54c21hbGwsXHJcbiAgICAgICAgICBzbWFsbCAmJiBzdHlsZXMuc21hbGwsXHJcbiAgICAgICAgICBsYXJnZSAmJiBzdHlsZXMubGFyZ2UsXHJcbiAgICAgICAgICB4bGFyZ2UgJiYgc3R5bGVzLnhsYXJnZSxcclxuICAgICAgICAgIHNlY29uZGFyeSAmJiBzdHlsZXMuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgcHJpbWFyeSAmJiBzdHlsZXMucHJpbWFyeSxcclxuICAgICAgICAgIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uUHJlc3N9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgeHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sLFxyXG4gIHhsYXJnZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2Vjb25kYXJ5OiBQcm9wVHlwZXMuYm9vbCxcclxuICBwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcclxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uUHJlc3M6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIG9uUHJlc3M6ICgpID0+IHt9LFxyXG4gIHhzbWFsbDogZmFsc2UsXHJcbiAgc21hbGw6IGZhbHNlLFxyXG4gIGxhcmdlOiBmYWxzZSxcclxuICB4bGFyZ2U6IGZhbHNlLFxyXG4gIHNlY29uZGFyeTogZmFsc2UsXHJcbiAgcHJpbWFyeTogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGNvbG9yLCBzaXplLCB1bml0LCBkZXB0aCwgZm9udFdlaWdodCB9KSA9PiAoe1xyXG4gIGRlZmF1bHQ6IHtcclxuICAgIC4uLmRlcHRoLmxldmVsMSxcclxuICAgIGJvcmRlcjogMSxcclxuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IuZGVmYXVsdCxcclxuICAgIGJvcmRlclJhZGl1czogdW5pdCxcclxuICAgIGNvbG9yOiBjb2xvci5kZWZhdWx0LFxyXG4gICAgZm9udFNpemU6IHNpemUubWQsXHJcbiAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LmJvbGQsXHJcbiAgICBwYWRkaW5nOiB1bml0ICogMixcclxuICAgIHBhZGRpbmdMZWZ0OiB1bml0ICogNCxcclxuICAgIHBhZGRpbmdSaWdodDogdW5pdCAqIDQsXHJcbiAgICBvdXRsaW5lOiAwLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5ncmF5TGlnaHQsXHJcbiAgICB9LFxyXG4gICAgXCI6Zm9jdXNcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFwiMCAwIDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS54ZyxcclxuICAgIHBhZGRpbmc6IHVuaXQgKiAyLjUsXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgZm9udFNpemU6IHNpemUubGcsXHJcbiAgICBwYWRkaW5nOiB1bml0ICogMi41LFxyXG4gIH0sXHJcbiAgc21hbGw6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLnNtLFxyXG4gICAgcGFkZGluZzogdW5pdCAqIDEuNSxcclxuICB9LFxyXG4gIHhzbWFsbDoge1xyXG4gICAgZm9udFNpemU6IHNpemUueHMsXHJcbiAgICBwYWRkaW5nOiB1bml0LFxyXG4gIH0sXHJcbiAgcHJpbWFyeToge1xyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLnByaW1hcnksXHJcbiAgICBjb2xvcjogY29sb3Iud2hpdGUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLnByaW1hcnksXHJcbiAgICBcIjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IucHJpbWFyeURhcmssXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5OiB7XHJcbiAgICBib3JkZXJDb2xvcjogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgY29sb3I6IGNvbG9yLnNlY29uZGFyeSxcclxuICB9LFxyXG4gIGRpc2FibGVkOiB7XHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IuZ3JheURhcmssXHJcbiAgICBjb2xvcjogY29sb3IuZ3JheUxpZ2h0LFxyXG4gICAgY3Vyc29yOiBcImRlZmF1bHRcIixcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IuZ3JheSxcclxuICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5ncmF5LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSkoQnV0dG9uKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCBTcGFjaW5nLCB7IHByb3BUeXBlcyBhcyBzcGFjaW5nUHJvcFR5cGUgfSBmcm9tIFwiLi9TcGFjaW5nXCI7XHJcblxyXG5jbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc3R5bGVzLCAuLi5zcGFjaW5nUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHsuLi5jc3Moc3R5bGVzLndyYXBwZXIpfT5cclxuICAgICAgICA8U3BhY2luZyB7Li4uc3BhY2luZ1Byb3BzfT57Y2hpbGRyZW59PC9TcGFjaW5nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5DYXJkLnByb3BUeXBlcyA9IHtcclxuICAuLi5zcGFjaW5nUHJvcFR5cGUsXHJcbiAgLi4ud2l0aFN0eWxlc1Byb3BUeXBlcyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGRlcHRoLCB1bml0LCBjb2xvciB9KSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIC4uLmRlcHRoLmxldmVsMSxcclxuICAgIGJvcmRlclJhZGl1czogdW5pdCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3Iud2hpdGUsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiB1bml0ICogNCxcclxuICB9LFxyXG59KSkoQ2FyZCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgeyBQcm92aWRlciwgQ29uc3VtZXIgfSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY2xhc3MgRm9ybVByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIENvbnN1bWVyID0gQ29uc3VtZXI7XHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh7IGluaXRWYWx1ZXMgfSwgcHJldlN0YXRlKSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPVxyXG4gICAgICBpbml0VmFsdWVzICE9PSBwcmV2U3RhdGUuaW5pdFZhbHVlcyA/IGluaXRWYWx1ZXMgOiBwcmV2U3RhdGUudmFsdWVzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5pdFZhbHVlcyxcclxuICAgICAgdmFsdWVzLFxyXG4gICAgICBlcnJvcjoge30sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlcywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8v662Q7J6EP1xyXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoZXJyb3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU3VibWl0KHZhbHVlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShuYW1lLCB1cGRhdGVkVmFsdWUpIHtcclxuICAgIHRoaXMudmFsaWRhdGUodGhpcy5zdGF0ZS52YWx1ZXMpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoeyB2YWx1ZXMgfSkgPT4gKHtcclxuICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgIFtuYW1lXTogdXBkYXRlZFZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiB7fSB9KTtcclxuICB9XHJcbiAgdmFsaWRhdGUodmFsdWVzKSB7XHJcbiAgICBjb25zdCB7IHZhbGlkYXRlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKCF2YWxpZGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnByb3BzLnZhbGlkYXRlKHZhbHVlcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZXMsIGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7IGVycm9ycywgdmFsdWVzLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSwgcmVzZXQ6IHRoaXMucmVzZXQgfX1cclxuPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9mb3JtPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkZvcm1Qcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdmFsaWRhdGU6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRm9ybVByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbml0VmFsdWVzOiB7fSxcclxuICB2YWxpZGF0ZTogKCkgPT4gKHt9KSxcclxuICBvbkNoYW5nZTogKCkgPT4gKHt9KSxcclxuICBoYW5kbGVTdWJtaXQ6ICgpID0+ICh7fSksXHJcbiAgcmVzZXQ6ICgpID0+ICh7fSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtUHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3NzIH0gZnJvbSBcIi4vd2l0aFN0eWxlc1wiO1xyXG5jb25zdCBoZWFkaW5nVGFncyA9IFtcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiXTtcclxuXHJcbmNsYXNzIEhlYWRpbmcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpbnZlcnNlLCBsZXZlbCwgc3R5bGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IEhlYWRpbmdUYWcgPSBoZWFkaW5nVGFnc1tsZXZlbCAtIDFdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEhlYWRpbmdUYWdcclxuICAgICAgICB7Li4uY3NzKFxyXG4gICAgICAgICAgc3R5bGVzLmRlZmF1bHQsXHJcbiAgICAgICAgICBzdHlsZXNbYGxldmVsJHtsZXZlbH1gXSxcclxuICAgICAgICAgIGludmVyc2UgJiYgc3R5bGVzLmludmVyc2VcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0hlYWRpbmdUYWc+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgZGFyazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxldmVsOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygoeyBjb2xvciwgZm9udFdlaWdodCwgc2l6ZSwgbGluZUhlaWdodCwgdW5pdCB9KSA9PiAoe1xyXG4gIGRlZmF1bHQ6IHtcclxuICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQubGcsXHJcbiAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LmJvbGQsXHJcbiAgfSxcclxuICBpbnZlcnNlOiB7XHJcbiAgICBjb2xvcjogY29sb3Iud2hpdGUsXHJcbiAgfSxcclxuICBsZXZlbDE6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLmgxLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0ICogMixcclxuICAgIG1hcmdpbkJvdHRvbTogdW5pdCAqIDQsXHJcbiAgfSxcclxuICBsZXZlbDI6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLmgyLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0ICogMixcclxuICAgIG1hcmdpbkJvdHRvbTogdW5pdCAqIDQsXHJcbiAgfSxcclxuICBsZXZlbDM6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLmgzLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0ICogMS41LFxyXG4gICAgbWFyZ2luQm90dG9tOiB1bml0ICogMyxcclxuICB9LFxyXG4gIGxldmVsNDoge1xyXG4gICAgZm9udFNpemU6IHNpemUueGcsXHJcbiAgICBtYXJnaW5Ub3A6IHVuaXQsXHJcbiAgICBtYXJnaW5Cb3R0b206IHVuaXQgKiAyLFxyXG4gIH0sXHJcbiAgbGV2ZWw1OiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5tZCxcclxuICAgIG1hcmdpblRvcDogdW5pdCxcclxuICAgIG1hcmdpbkJvdHRvbTogdW5pdCAqIDIsXHJcbiAgfSxcclxuICBsZXZlbDY6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLm1kLFxyXG4gICAgbWFyZ2luVG9wOiB1bml0LFxyXG4gICAgbWFyZ2luQm90dG9tOiB1bml0LFxyXG4gIH0sXHJcbn0pKShIZWFkaW5nKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCB7IHVuaXQgfSBmcm9tIFwiLi9UaGVtZVwiO1xyXG5cclxuY2xhc3MgSW5saW5lTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYWxpZ24sXHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBzdHlsZXMsXHJcbiAgICAgIHNwYWNpbmdCZXR3ZWVuLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgey4uLmNzcyhcclxuICAgICAgICAgIHN0eWxlcy53cmFwcGVyLFxyXG4gICAgICAgICAgYWxpZ24gPT09IFwiY2VudGVyXCIgJiYgc3R5bGVzLmFsaWduQ2VudGVyLFxyXG4gICAgICAgICAgYWxpZ24gPT09IFwicmlnaHRcIiAmJiBzdHlsZXMuYWxpZ25SaWdodCxcclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ24gPT09IFwidG9wXCIgJiYgc3R5bGVzLnZlcnRpY2FsQWxpZ25Ub3AsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduID09PSBcImJvdHRvbVwiICYmIHN0eWxlcy52ZXJ0aWNhbEFsaWduQm90dG9tXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiB7Li4uY3NzKHsgbWFyZ2luUmlnaHQ6IHNwYWNpbmdCZXR3ZWVuICogdW5pdCB9KX0+e2NoaWxkfTwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5JbmxpbmVMaXN0LnByb3BUeXBlcyA9IHtcclxuICAuLi53aXRoU3R5bGVzUHJvcFR5cGVzLFxyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcclxuICB2ZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMub25lT2YoW1widG9wXCIsIFwibWlkZGxlXCIsIFwiYm90dG9tXCJdKSxcclxuICBzcGFjaW5nQmV0d2VlbjogUHJvcFR5cGVzLm51bWJlcixcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5JbmxpbmVMaXN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBzcGFjaW5nQmV0d2VlbjogMSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoKCkgPT4gKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIiwgLy/qsIDroZzrsLDsuZgg7IaN7ISx7KCB7JqpXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCAvL+qwgOuhnOuwsOy5mCDsho3shLHsoIHsmqlcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIiwgLy/tmZTrqbQg67CW7J2YIO2VmOychOyalOyGjOulvCDslYTrnpjroZwg67CA7Ja0IOuwsOy5mFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLCAvL+2VmOychOyalOyGjOulvCDsmbzsqr3rtoDthLAg67Cw7LmYXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCAvL+2VmOychOyalOyGjOulvCDsg4HtlZgg6rCA7Jq0642wIOygleugrFxyXG4gIH0sXHJcbiAgYWxpZ25DZW50ZXI6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgYWxpZ25SaWdodDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgLy/tlZjsnITsmpTshowg7Jik66W47Kq9IOygleugrFxyXG4gIH0sXHJcbiAgdmVydGljYWxBbGlnblRvcDoge1xyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsIC8v7ZWY7JyE64K07Jqp7J2EIOychOuhnCDsoJXroKxcclxuICB9LFxyXG4gIHZlcnRpY2FsQWxpZ25Cb3R0b206IHtcclxuICAgIC8v7ZWY7JyEIOyalOyGjOydmCDrgrTsmqnsnYQg7JWE656Y66GcIOygleugrFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxyXG4gIH0sXHJcbn0pKShJbmxpbmVMaXN0KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnNldFJlZiA9IHRoaXMuc2V0UmVmLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZWYuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UmVmKHJlZikge1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICBsYWJlbCxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIHN0eWxlcyxcclxuICAgICAgbGFyZ2UsXHJcbiAgICAgIHhsYXJnZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIHhzbWFsbCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmaWVsZHNldCB7Li4uY3NzKHN0eWxlcy53cmFwcGVyKX0+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPXtgaW5wdXRfJHtuYW1lfWB9XHJcbiAgICAgICAgICB7Li4uY3NzKHN0eWxlcy5sYWJlbCwgZXJyb3JNZXNzYWdlICYmIHN0eWxlcy5lcnJvckxhYmVsKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlIHx8IGxhYmVsfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4uY3NzKFxyXG4gICAgICAgICAgICBzdHlsZXMuaW5wdXQsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSAmJiBzdHlsZXMuZXJyb3IsXHJcbiAgICAgICAgICAgIHhzbWFsbCAmJiBzdHlsZXMueHNtYWxsLFxyXG4gICAgICAgICAgICBzbWFsbCAmJiBzdHlsZXMuc21hbGwsXHJcbiAgICAgICAgICAgIGxhcmdlICYmIHN0eWxlcy5sYXJnZSxcclxuICAgICAgICAgICAgeGxhcmdlICYmIHN0eWxlcy54bGFyZ2VcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBpZD17YGlucHV0XyR7bmFtZX1gfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgLi4ud2l0aFN0eWxlc1Byb3BUeXBlcyxcclxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1widGV4dFwiLCBcIm51bWJlclwiLCBcInByaWNlXCJdKSxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gIGF1dG9Gb2N1czogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKCh7IGRlcHRoLCB1bml0LCBjb2xvciwgc2l6ZSwgbGluZUhlaWdodCB9KSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIH0sXHJcbiAgbGFiZWw6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIGZvbnRTaXplOiBzaXplLnhzLFxyXG4gICAgdG9wOiAyLFxyXG4gICAgbGVmdDogdW5pdCAqIDIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIG1hcmdpblRvcDogMixcclxuICAgIGZvbnRTaXplOiBzaXplLm1kLFxyXG4gICAgbGluZUhlaWdodDogbGluZUhlaWdodC5tZCxcclxuICAgIHBhZGRpbmc6IHVuaXQgKiAxLjUsXHJcbiAgICBib3JkZXI6IDEsXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IucHJpbWFyeSxcclxuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICBvdXRsaW5lOiAwLFxyXG4gICAgXCI6Zm9jdXNcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFwiMCAwIDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS54ZyxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5sZyxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5zbSxcclxuICAgIHBhZGRpbmc6IHVuaXQsXHJcbiAgfSxcclxuICBlcnJvckxhYmVsOiB7XHJcbiAgICBjb2xvcjogY29sb3IuZXJyb3IsXHJcbiAgfSxcclxuICBlcnJvcjoge1xyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLmVycm9yLFxyXG4gIH0sXHJcbn0pKShJbnB1dCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCB7UHJvdmlkZXIsIENvbnN1bWVyfSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vTW9kYWxcIjsgLy/tmLnsnYAgTW9kYWwgZnJvbSAnLi9pbmRleC5qcydcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNb2RhbFByb3ZpZGVyKENvbnRlbnRNYXAgPSB7fSkge1xyXG4gIHJldHVybiBjbGFzcyBNb2RhbFByb3ZpZGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7IHNob3dNb2RhbDogZmFsc2UgfTtcclxuICAgICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5oYW5kbGVPcGVuID0gdGhpcy5oYW5kbGVPcGVuLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3Blbihjb250ZW50SWQsIG1vZGFsUHJvcHMpIHtcclxuICAgICAgdGhpcy5jb250ZW50SWQgPSBjb250ZW50SWQ7XHJcbiAgICAgIHRoaXMubW9kYWxQcm9wcyA9IG1vZGFsUHJvcHM7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZSgpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHsgc2hvd01vZGFsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBNb2RhbENvbnRlbnQgPSBDb250ZW50TWFwW3RoaXMuY29udGVudElkXTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyXHJcbiAgICAgICAgICB2YWx1ZT17eyBvcGVuTW9kYWw6IHRoaXMuaGFuZGxlT3BlbiwgY2xvc2VNb2RhbDogdGhpcy5oYW5kbGVDbG9zZSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIHtzaG93TW9kYWwgJiYgTW9kYWxDb250ZW50ICYmIChcclxuICAgICAgICAgICAgPE1vZGFsPlxyXG4gICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQgey4uLnRoaXMubW9kYWxQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmRcIjtcclxuaW1wb3J0IHsgY3NzLCB3aXRoU3R5bGVzIH0gZnJvbSBcIi4uL3dpdGhTdHlsZXNcIjtcclxuXHJcbi8vQ2FzZCDsu7Ttj6zrhIztirjrpbwg7IKs7Jqp7ZWY7JesIOuRpeq3vCDrqqjshJzrpqzroZwg66eM65OgIE1vZGFsIOy7tO2PrOuEjO2KuFxyXG5cclxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHN0eWxlcywgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHsuLi5jc3Moc3R5bGVzLm92ZXJsYXkpfT5cclxuICAgICAgICA8ZGl2IHsuLi5jc3Moc3R5bGVzLndyYXBwZXIpfT5cclxuICAgICAgICAgIDxkaXYgey4uLmNzcyhzdHlsZXMuY29udGFpbmVyKX0+XHJcbiAgICAgICAgICAgIDxDYXJkIHZlcnRpY2FsPXsyfSBob3Jpem9udGFsPXsyfT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygoKSA9PiAoe1xyXG4gIG92ZXJsYXk6IHtcclxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICB6SW5kZXg6IDk5OTksXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLC41KVwiLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luOiBcIjQwcHggYXV0byAwcHhcIixcclxuICAgIHdpZHRoOiA3MDAsXHJcbiAgfSxcclxufSkpKE1vZGFsKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCB7IHVuaXQgfSBmcm9tIFwiLi9UaGVtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAvL+ydtCDqsJLsnLzroZwg6rO16rCEIOuEiOu5hCDqs4TsgrBcclxuICB0b3A6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdmVydGljYWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmNsYXNzIFNwYWNpbmcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICB0b3AsXHJcbiAgICAgIGJvdHRvbSxcclxuICAgICAgbGVmdCxcclxuICAgICAgcmlnaHQsXHJcbiAgICAgIHZlcnRpY2FsLFxyXG4gICAgICBob3Jpem9udGFsLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBjb21wdXRlZFRvcCA9IHRvcCA/IHRvcCA6IHZlcnRpY2FsO1xyXG4gICAgY29uc3QgY29tcHV0ZWRCb3R0b20gPSBib3R0b20gPyBib3R0b20gOiB2ZXJ0aWNhbDtcclxuICAgIGNvbnN0IGNvbXB1dGVkTGVmdCA9IGxlZnQgPyBsZWZ0IDogaG9yaXpvbnRhbDtcclxuICAgIGNvbnN0IGNvbXB1dGVkUmlnaHQgPSByaWdodCA/IHJpZ2h0IDogaG9yaXpvbnRhbDtcclxuXHJcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IHtcclxuICAgICAgZmxleDogMSxcclxuICAgICAgLi4uKGNvbXB1dGVkVG9wICYmIHsgbWFyZ2luVG9wOiBjb21wdXRlZFRvcCAqIHVuaXQgfSksXHJcbiAgICAgIC4uLihjb21wdXRlZEJvdHRvbSAmJiB7IG1hcmdpbkJvdHRvbTogY29tcHV0ZWRCb3R0b20gKiB1bml0IH0pLFxyXG4gICAgICAuLi4oY29tcHV0ZWRMZWZ0ICYmIHsgbWFyZ2luTGVmdDogY29tcHV0ZWRMZWZ0ICogdW5pdCB9KSxcclxuICAgICAgLi4uKGNvbXB1dGVkUmlnaHQgJiYgeyBtYXJnaW5SaWdodDogY29tcHV0ZWRSaWdodCAqIHVuaXQgfSksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8ZGl2IHsuLi5jc3MoY29tcHV0ZWRTdHlsZXMpfT57Y2hpbGRyZW59PC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuU3BhY2luZy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGFjaW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNzcyB9IGZyb20gXCIuL3dpdGhTdHlsZXNcIjtcclxuXHJcbmNsYXNzIFRleHQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBib2xkLFxyXG4gICAgICBsaWdodCxcclxuICAgICAgc3R5bGVzLFxyXG4gICAgICBsYXJnZSxcclxuICAgICAgeGxhcmdlLFxyXG4gICAgICBzbWFsbCxcclxuICAgICAgeHNtYWxsLFxyXG4gICAgICBwcmltYXJ5LFxyXG4gICAgICBzZWNvbmRhcnksXHJcbiAgICAgIGludmVyc2UsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgey4uLmNzcyhcclxuICAgICAgICAgIHN0eWxlcy5kZWZhdWx0LFxyXG4gICAgICAgICAgeHNtYWxsICYmIHN0eWxlcy54c21hbGwsXHJcbiAgICAgICAgICBzbWFsbCAmJiBzdHlsZXMuc21hbGwsXHJcbiAgICAgICAgICBsYXJnZSAmJiBzdHlsZXMubGFyZ2UsXHJcbiAgICAgICAgICB4bGFyZ2UgJiYgc3R5bGVzLnhsYXJnZSxcclxuICAgICAgICAgIHNlY29uZGFyeSAmJiBzdHlsZXMuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgcHJpbWFyeSAmJiBzdHlsZXMucHJpbWFyeSxcclxuICAgICAgICAgIGJvbGQgJiYgc3R5bGVzLmJvbGQsXHJcbiAgICAgICAgICBsaWdodCAmJiBzdHlsZXMubGlnaHQsXHJcbiAgICAgICAgICBpbnZlcnNlICYmIHN0eWxlcy5pbnZlcnNlXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblRleHQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIGJvbGQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcclxuICB4c21hbGw6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgeGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzZWNvbmRhcnk6IFByb3BUeXBlcy5ib29sLFxyXG4gIHByaW1hcnk6IFByb3BUeXBlcy5ib29sLFxyXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygoeyBjb2xvciwgZm9udFdlaWdodCwgc2l6ZSwgbGluZUhlaWdodCB9KSA9PiAoe1xyXG4gIGRlZmF1bHQ6IHtcclxuICAgIGNvbG9yOiBjb2xvci5kZWZhdWx0LFxyXG4gICAgZm9udFNpemU6IHNpemUubWQsXHJcbiAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0Lm1kLFxyXG4gICAgZm9udFdlaWdodDogZm9udFdlaWdodC5ub3JtYWwsXHJcbiAgfSxcclxuICB4bGFyZ2U6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLnhnLFxyXG4gICAgbGluZUhlaWdodDogbGluZUhlaWdodC54ZyxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS5sZyxcclxuICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQubGcsXHJcbiAgfSxcclxuICBzbWFsbDoge1xyXG4gICAgZm9udFNpemU6IHNpemUuc20sXHJcbiAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0LnNtLFxyXG4gIH0sXHJcbiAgeHNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogc2l6ZS54cyxcclxuICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQueHMsXHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBjb2xvcjogY29sb3IucHJpbWFyeSxcclxuICB9LFxyXG4gIHNlY29uZGFyeToge1xyXG4gICAgY29sb3I6IGNvbG9yLnNlY29uZGFyeSxcclxuICB9LFxyXG4gIGxpZ2h0OiB7XHJcbiAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LmxpZ2h0LFxyXG4gIH0sXHJcbiAgYm9sZDoge1xyXG4gICAgZm9udFdlaWdodDogZm9udFdlaWdodC5ib2xkLFxyXG4gIH0sXHJcbiAgaW52ZXJzZToge1xyXG4gICAgY29sb3I6IGNvbG9yLndoaXRlLFxyXG4gIH0sXHJcbn0pKShUZXh0KTtcclxuIiwiZXhwb3J0IGNvbnN0IExBUkdFX0FORF9BQk9WRSA9ICdsYXJnZUFuZEFib3ZlJztcclxuY29uc3QgQlJFQUtQT0lOVF9OQU1FUyA9IHtcclxuICBMQVJHRTogJ2xhcmdlJyxcclxuICBNRURJVU06ICdtZWRpdW0nLFxyXG4gIFNNQUxMOiAnc21hbGwnLFxyXG59O1xyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgW0JSRUFLUE9JTlRfTkFNRVMuTEFSR0VdOiAxMTI4LFxyXG4gIFtCUkVBS1BPSU5UX05BTUVTLk1FRElVTV06IDc0NCxcclxuICBbQlJFQUtQT0lOVF9OQU1FUy5TTUFMTF06IDMyNyxcclxufTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgW0xBUkdFX0FORF9BQk9WRV06IGBAbWVkaWEgKG1pbi13aWR0aDogJHticmVha3BvaW50c1tCUkVBS1BPSU5UX05BTUVTLkxBUkdFXX1weClgLFxyXG4gIFtCUkVBS1BPSU5UX05BTUVTLlNNQUxMXTogYEBtZWRpYSAobWF4LXdpZHRoOiAke2JyZWFrcG9pbnRzW0JSRUFLUE9JTlRfTkFNRVMuTUVESVVNXSAtIDF9cHgpYCxcclxuICBwcmludDogJ0BtZWRpYSBwcmludCcsXHJcbn07XHJcbmV4cG9ydCBjb25zdCB1bml0ID0gNDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyDsg4nsg4FcclxuICBjb2xvcjoge1xyXG4gICAgcHJpbWFyeTogJyMyMTk2RjMnLCAvLyDso7wg7IOJ7IOBXHJcbiAgICBwcmltYXJ5RGFyazogJyMxOTc2RDInLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzAwOTY4OCcsIC8vIOu2gCDsg4nsg4FcclxuICAgIHNlY29uZGFyeURhcms6ICcjMDA3OTZiJyxcclxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBncmF5OiAnIzllOWU5ZScsXHJcbiAgICBncmF5TGlnaHQ6ICcjZWVlZWVlJyxcclxuICAgIGdyYXlEYXJrOiAnIzYxNjE2MScsXHJcbiAgICBib3JkZXI6ICdyZ2JhKDAsIDAsIDAsIC4xNSknLFxyXG4gICAgZGVmYXVsdDogJyMzMzMzMzMnLCAvLyDquLDrs7gg66y47J6QIOyDieyDgVxyXG4gICAgZXJyb3I6ICcjZTUxYzIzJywgLy8g7Jik66WYIOyDieyDgVxyXG4gIH0sXHJcbiAgLy8g7Y+w7Yq4IOyCrOydtOymiFxyXG4gIHNpemU6IHtcclxuICAgIGgxOiA0OCxcclxuICAgIGgyOiAzNixcclxuICAgIGgzOiAyOCxcclxuICAgIHhnOiAyNCxcclxuICAgIGxnOiAxOCxcclxuICAgIG1kOiAxNCxcclxuICAgIHNtOiAxMixcclxuICAgIHhzOiAxMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHQ6IHtcclxuICAgIHhnOiAxLjYsXHJcbiAgICBsZzogMS42LFxyXG4gICAgbWQ6IDEuNSxcclxuICAgIHNtOiAxLjQsXHJcbiAgICB4czogMS40LFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDoge1xyXG4gICAgYm9sZDogJ2JvbGQnLFxyXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcclxuICAgIGxpZ2h0OiAzMDAsXHJcbiAgfSxcclxuICBkZXB0aDoge1xyXG4gICAgbGV2ZWwxOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCknLFxyXG4gICAgfSxcclxuICAgIGxldmVsMjoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpJyxcclxuICAgIH0sXHJcbiAgICBsZXZlbDM6IHtcclxuICAgICAgYm94U2hhZG93OiAnMCA4cHggMTdweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIOq4uOydtCDri6jsnIRcclxuICB1bml0LFxyXG4gIC8vIOuwmOydke2YlSDrr7jrlJTslrQg7IaN7ISxXHJcbiAgcmVzcG9uc2l2ZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjc3MsIHdpdGhTdHlsZXNQcm9wVHlwZXMgfSBmcm9tIFwiLi93aXRoU3R5bGVzXCI7XHJcbmltcG9ydCBTcGFjaW5nIGZyb20gXCIuL1NwYWNpbmdcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xyXG5cclxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG1lc3NhZ2UsIHN0eWxlcywgd2FybmluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgey4uLmNzcyhzdHlsZXMub3ZlcmxheSl9PlxyXG4gICAgICAgIDxkaXYgey4uLmNzcyhzdHlsZXMud3JhcHBlciwgd2FybmluZyAmJiBzdHlsZXMud2FybmluZyl9PlxyXG4gICAgICAgICAgPFNwYWNpbmcgdmVydGljYWw9ezR9IGhvcml6b250YWw9ezh9PlxyXG4gICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgIDwvU3BhY2luZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuVG9hc3QucHJvcFR5cGVzID0ge1xyXG4gIC4uLndpdGhTdHlsZXNQcm9wVHlwZXMsXHJcbiAgd2FybmluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoKHsgZGVwdGgsIHVuaXQsIGNvbG9yIH0pID0+ICh7XHJcbiAgb3ZlcmxheToge1xyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgbWFyZ2luOiB1bml0ICogNCxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIC4uLmRlcHRoLmxldmVsMSxcclxuICAgIGJvcmRlclJhZGl1czogdW5pdCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgcGFkZGluZzogdW5pdCAqIDIsXHJcbiAgICBtYXJnaW5Cb3R0b206IHVuaXQgKiA0LFxyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5lcnJvcixcclxuICB9LFxyXG59KSkoVG9hc3QpO1xyXG4iLCJpbXBvcnQgVGhlbWVkU3R5bGVTaGVldCBmcm9tICdyZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldCc7XHJcbmltcG9ydCBhcGhyb2RpdGVJbnRlcmZhY2UgZnJvbSAncmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWFwaHJvZGl0ZSc7XHJcbmltcG9ydCB7Y3NzLHdpdGhTdHlsZXMsd2l0aFN0eWxlc1Byb3BUeXBlc30gZnJvbSAncmVhY3Qtd2l0aC1zdHlsZXMnO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi9UaGVtZSc7XHJcblxyXG5UaGVtZWRTdHlsZVNoZWV0LnJlZ2lzdGVySW50ZXJmYWNlKGFwaHJvZGl0ZUludGVyZmFjZSk7XHJcblRoZW1lZFN0eWxlU2hlZXQucmVnaXN0ZXJUaGVtZShUaGVtZSk7XHJcblxyXG5leHBvcnQgeyBjc3MsIHdpdGhTdHlsZXMsIHdpdGhTdHlsZXNQcm9wVHlwZXMsIFRoZW1lZFN0eWxlU2hlZXQgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdpdGgtc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1hcGhyb2RpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtd2l0aC1zdHlsZXMvbGliL1RoZW1lZFN0eWxlU2hlZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29tcG9zZS9jb21wb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wYWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=