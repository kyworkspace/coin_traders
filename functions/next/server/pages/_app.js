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

/***/ "+JXW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Provider, {
      value: {
        errors,
        values,
        onChange: this.onChange,
        reset: this.reset
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", {
        onSubmit: this.handleSubmit,
        children: this.props.children
      })
    });
  }

}

_defineProperty(FormProvider, "Consumer", Consumer);

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
  onChange: () => ({}),
  handleSubmit: () => ({}),
  reset: () => ({})
};
/* harmony default export */ __webpack_exports__["a"] = (FormProvider);

/***/ }),

/***/ "/reB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setFilter; });
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

/***/ "/y5g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr8/");


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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, disabled && styles.disabled)), {}, {
      disabled: disabled,
      onClick: onPress,
      type: type,
      children: children
    }));
  }

}

Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* withStyles */ "b"])(({
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0i2N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VjQV");


function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];

  const entitiesSelector = state => resourceSelector(state).entities;

  const collectionSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([resourceSelector], ({
    ids,
    entities
  }) => ids.map(id => entities[id]));

  const loadingStateSelector = state => resourceSelector(state).loadingState;

  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_LIST */ "c"]}/${resourceName}`];

  const createLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CREATE */ "a"]}/${resourceName}`];

  const updateLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE */ "e"]}/${resourceName}`];

  const memberLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH */ "b"]}/${resourceName}`];

  const collectionErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_LIST */ "c"]}/${resourceName}`];

  const createErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CREATE */ "a"]}/${resourceName}`];

  const updateErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE */ "e"]}/${resourceName}`];

  const memberErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH */ "b"]}/${resourceName}`];

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

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-pack"
var external_redux_pack_ = __webpack_require__("gz18");

// EXTERNAL MODULE: ./src/api-redux-pack/actionTypes.js
var actionTypes = __webpack_require__("VjQV");

// CONCATENATED MODULE: ./src/api-redux-pack/createReducers.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //서로 다른 데이터를 처리할때 같은 type의 액션을 사용할 것이므로 액션에서 포함시킨 meta의 resourceName과 리듀서의 이름이 
//일치한 경우에만 리듀서 코드를 실행하도록 만듬

/* harmony default export */ var createReducers = ((...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${actionTypes["a" /* CREATE */]}/${name}`]: false,
        [`${actionTypes["e" /* UPDATE */]}/${name}`]: false,
        [`${actionTypes["b" /* FETCH */]}/${name}`]: false,
        [`${actionTypes["c" /* FETCH_LIST */]}/${name}`]: false
      },
      errorState: {
        [`${actionTypes["a" /* CREATE */]}/${name}`]: false,
        [`${actionTypes["e" /* UPDATE */]}/${name}`]: false,
        [`${actionTypes["b" /* FETCH */]}/${name}`]: false,
        [`${actionTypes["c" /* FETCH_LIST */]}/${name}`]: false
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
        case actionTypes["e" /* UPDATE */]:
        case actionTypes["b" /* FETCH */]:
        case actionTypes["a" /* CREATE */]:
        case actionTypes["c" /* FETCH_LIST */]:
          {
            return Object(external_redux_pack_["handle"])(state, action, {
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

                if (type === actionTypes["c" /* FETCH_LIST */]) {
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

        case actionTypes["d" /* RESET */]:
          return initState;

        default:
          return state;
      }
    };

    return apiReducers;
  }, {});
});
// CONCATENATED MODULE: ./src/actions/notificationActions.js
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
// CONCATENATED MODULE: ./src/reducers/notificationReducer.js
function notificationReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notificationReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notificationReducer_ownKeys(Object(source), true).forEach(function (key) { notificationReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notificationReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notificationReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const notificationReducer_initState = {
  message: '',
  warning: false,
  showMessage: false
};
/* harmony default export */ var notificationReducer = ((state = notificationReducer_initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SHOW_NOTIFICATION:
      {
        const {
          message,
          warning
        } = payload;
        return notificationReducer_objectSpread(notificationReducer_objectSpread({}, state), {}, {
          showMessage: true,
          message,
          warning
        });
      }

    case HIDE_NOTIFICATION:
      {
        return notificationReducer_objectSpread(notificationReducer_objectSpread({}, state), {}, {
          message: '',
          showMessage: false
        });
      }

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./src/actions/searchFilterActions.js
var searchFilterActions = __webpack_require__("/reB");

// CONCATENATED MODULE: ./src/reducers/searchFilterReducer.js
function searchFilterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function searchFilterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { searchFilterReducer_ownKeys(Object(source), true).forEach(function (key) { searchFilterReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { searchFilterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function searchFilterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const searchFilterReducer_initState = {
  params: {}
};
/* harmony default export */ var searchFilterReducer = ((state = searchFilterReducer_initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case searchFilterActions["a" /* SET_FILTER */]:
      {
        const {
          params
        } = payload;
        return searchFilterReducer_objectSpread(searchFilterReducer_objectSpread({}, state), {}, {
          params
        });
      }

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/actions/routerActions.js
const SET_LOCATION = 'router/SET_LOCATION';
function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: {
      location
    }
  };
}
// CONCATENATED MODULE: ./src/reducers/routerReducer.js
function routerReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function routerReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { routerReducer_ownKeys(Object(source), true).forEach(function (key) { routerReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { routerReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function routerReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const routerReducer_initState = {
  location: {}
};
/* harmony default export */ var routerReducer = ((state = routerReducer_initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SET_LOCATION:
      {
        const {
          location
        } = payload;
        return routerReducer_objectSpread(routerReducer_objectSpread({}, state), {}, {
          location
        });
      }

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/index.js
function reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import transactions from './transactionReducer'; //api 호출 방식으로 변경함




const reducers_apiReducers = createReducers('transactions', 'users');
/* harmony default export */ var reducers = (reducers_objectSpread(reducers_objectSpread({}, reducers_apiReducers), {}, {
  notification: notificationReducer,
  searchFilter: searchFilterReducer,
  router: routerReducer
}));
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./src/Api.js
var Api = __webpack_require__("yUrU");

// CONCATENATED MODULE: ./src/actions/transactionActions.js


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
  return dispatch => Api["a" /* default */].post('/transactions', data).then(({
    data
  }) => {
    dispatch(tradeComplete());
    onComplete();
  }, error => dispatch(setError(error.response.data.errorMessage)));
}
function requestTransactionList(params) {
  return dispatch => {
    dispatch(transactionActions_loading());
    Api["a" /* default */].get('/transactions', {
      params
    }).then(({
      data
    }) => dispatch(setTransactionList(data)), error => {
      dispatch(setError(error.response.data.errorMessage)); //  dispatch(showMessage(error.response.data.errorMessage,true))
    }); //axios는 에러가 발생할때 then의 두번째 인자에 해당하는 함수를 호출함
  }; //함수를 반환함
}
function transactionActions_loading() {
  return {
    type: LOADING_TRANSACTION_LIST
  };
}
// CONCATENATED MODULE: ./src/debounce.jsx
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }

    inDebounce = setTimeout(() => func(...args), delay);
  };
}
// CONCATENATED MODULE: ./src/middlewares/notificationEffects.js


 //redux-pack

 //import {FETCH_TRANSACTION_LIST,createTransaction} from '../actions/transactionPackActions'

const debouceRunner = debounce(action => action(), 4000);
/* harmony default export */ var notificationEffects = (store => nextRunner => action => {
  const {
    type,
    meta
  } = action;

  if (meta && meta.notification) {
    const {
      success,
      error
    } = meta.notification;

    if (success && meta[external_redux_pack_["KEY"].LIFECYCLE] === external_redux_pack_["LIFECYCLE"].SUCCESS) {
      //성공
      store.dispatch(showMessage(success));
      debouceRunner(() => store.dispatch(hideMessage()));
    } else if (error && meta[external_redux_pack_["KEY"].LIFECYCLE] === external_redux_pack_["LIFECYCLE"].FAILURE) {
      //실패
      store.dispatch(showMessage(error, true));
      debouceRunner(() => store.dispatch(hideMessage()));
    }
  }

  return nextRunner(action);
});
// CONCATENATED MODULE: ./src/middlewares/transactionEffects.js


/* harmony default export */ var transactionEffects = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === TRADE_COMPLETE) {
    const message = "거래목록을 최선 정보로 업데이트 하였습니다. trnasactionEffects";
    store.dispatch(showMessage(message));
    store.dispatch(requestTransactionList());
  }

  return result;
});
// EXTERNAL MODULE: ./src/actions/transactionPackActions.js
var transactionPackActions = __webpack_require__("Jxav");

// CONCATENATED MODULE: ./src/middlewares/searchFilterEffects.js


/* harmony default export */ var searchFilterEffects = (store => nextRunner => action => {
  //검색 필터 변경이 생길때 자동으로 검색결과 요청을 구현
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === searchFilterActions["a" /* SET_FILTER */]) {
    const {
      params
    } = payload || {};
    store.dispatch(Object(transactionPackActions["d" /* resetTransactionList */])()); //검색결과를 요청하기 전에 현재 검색 목록 초기화

    store.dispatch(Object(transactionPackActions["c" /* requestTransactionList */])(params));
  }

  return result;
});
// CONCATENATED MODULE: ./src/middlewares/routerEffects.js
function routerEffects_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function routerEffects_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { routerEffects_ownKeys(Object(source), true).forEach(function (key) { routerEffects_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { routerEffects_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function routerEffects_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parse(qs) {
  //쿼리 스트링 값을 객체로 반환함
  const queryString = qs.substr(1);
  const chunk = queryString.split('&');
  return chunk.map(chunk => chunk.split("=")).reduce((result, [key, value]) => routerEffects_objectSpread(routerEffects_objectSpread({}, result), {}, {
    [key]: value
  }), {});
}

/* harmony default export */ var routerEffects = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === SET_LOCATION) {
    //주소 동기화 액션에서만 작동
    const {
      pathname,
      search
    } = payload.location;

    if (pathname === '/') {
      //경로가 일치할때만 작동
      store.dispatch(Object(searchFilterActions["b" /* setFilter */])(parse(search)));
    }
  }

  return result;
});
// CONCATENATED MODULE: ./src/store/configureStore.js




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

/* harmony default export */ var configureStore = (initStates => Object(external_redux_["createStore"])(Object(external_redux_["combineReducers"])(reducers), initStates, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, external_redux_pack_["middleware"], notificationEffects, transactionEffects, searchFilterEffects, routerEffects))));
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/ui/Card.jsx
var Card = __webpack_require__("7mAN");

// EXTERNAL MODULE: ./src/ui/withStyles.js
var withStyles = __webpack_require__("hr8/");

// CONCATENATED MODULE: ./src/ui/Modal/index.jsx


function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modal_ownKeys(Object(source), true).forEach(function (key) { Modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //Casd 컴포넌트를 사용하여 둥근 모서리로 만든 Modal 컴포넌트

class Modal_Modal extends external_react_["PureComponent"] {
  render() {
    const {
      styles,
      children
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", Modal_objectSpread(Modal_objectSpread({}, Object(withStyles["a" /* css */])(styles.overlay)), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", Modal_objectSpread(Modal_objectSpread({}, Object(withStyles["a" /* css */])(styles.wrapper)), {}, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", Modal_objectSpread(Modal_objectSpread({}, Object(withStyles["a" /* css */])(styles.container)), {}, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
            vertical: 2,
            horizontal: 2,
            children: children
          })
        }))
      }))
    }));
  }

}

/* harmony default export */ var ui_Modal = (Object(withStyles["b" /* withStyles */])(() => ({
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
}))(Modal_Modal));
// EXTERNAL MODULE: ./src/ui/Modal/context.js
var context = __webpack_require__("HKJM");

// CONCATENATED MODULE: ./src/ui/Modal/create.jsx



function create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_ownKeys(Object(source), true).forEach(function (key) { create_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //혹은 Modal from './index.js'


function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends external_react_["PureComponent"] {
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
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(context["b" /* Provider */], {
        value: {
          openModal: this.handleOpen,
          closeModal: this.handleClose
        },
        children: [children, showModal && ModalContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_Modal, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalContent, create_objectSpread({}, this.modalProps))
        })]
      });
    }

  };
}
// EXTERNAL MODULE: ./src/constants/modals.js
var modals = __webpack_require__("t2hi");

// EXTERNAL MODULE: ./src/ui/Text.jsx
var Text = __webpack_require__("2dud");

// EXTERNAL MODULE: ./src/ui/Spacing.jsx
var Spacing = __webpack_require__("agxQ");

// EXTERNAL MODULE: ./src/ui/Input.jsx
var Input = __webpack_require__("5rsU");

// EXTERNAL MODULE: ./src/ui/Button.jsx
var Button = __webpack_require__("/y5g");

// EXTERNAL MODULE: ./src/ui/InlineList.jsx
var InlineList = __webpack_require__("DcUE");

// EXTERNAL MODULE: ./src/ui/Form.jsx
var Form = __webpack_require__("+JXW");

// CONCATENATED MODULE: ./src/components/main/TradeCoinPage.jsx



function TradeCoinPage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TradeCoinPage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TradeCoinPage_ownKeys(Object(source), true).forEach(function (key) { TradeCoinPage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TradeCoinPage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TradeCoinPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class TradeCoinPage_TradeCoinPage extends external_react_["PureComponent"] {
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

    const formValue = TradeCoinPage_objectSpread(TradeCoinPage_objectSpread({}, values), {}, {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(context["a" /* Consumer */], {
      children: ({
        closeModal
      }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form["a" /* default */], {
        onSubmit: values => this.handleSubmit(values, closeModal),
        initValues: {
          currentPrice: price
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form["a" /* default */].Consumer, {
          children: ({
            onChange,
            values
          }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Spacing["a" /* default */], {
            horizontal: 4,
            vertical: 8,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Text["a" /* default */], {
              xlarge: true,
              bold: true,
              children: [name, " ", typeName]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spacing["a" /* default */], {
              bottom: 2,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                name: "currentPrice",
                label: "\uAE08\uC561",
                value: values["currentPrice"],
                onChange: onChange
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spacing["a" /* default */], {
              bottom: 2,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                name: "amount",
                label: "\uC218\uB7C9",
                value: values["amount"],
                onChange: onChange
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InlineList["a" /* default */], {
              spacingBetween: 1,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                primary: true,
                disabled: loading,
                children: loading ? '거래처리중' : typeName
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                onPress: closeModal,
                children: "\uCDE8\uC18C"
              })]
            })]
          })
        })
      })
    });
  }

}

/* harmony default export */ var main_TradeCoinPage = (TradeCoinPage_TradeCoinPage);
// CONCATENATED MODULE: ./src/containers/main/TradeCoinPageContainer.js

 //import {createTransaction} from '../../actions/transactionActions';



const mapStateToProps = state => {
  const {
    loadingState
  } = state.transactions;
  const loading = loadingState[transactionPackActions["a" /* CREATE_TRANSACTION */]];
  return {
    loading
  };
};

/* harmony default export */ var TradeCoinPageContainer = (Object(external_react_redux_["connect"])(mapStateToProps, {
  createTransaction: transactionPackActions["b" /* createTransaction */]
})(main_TradeCoinPage));
// EXTERNAL MODULE: ./src/containers/signup/RegisterPageContainer.jsx + 3 modules
var RegisterPageContainer = __webpack_require__("kkfp");

// CONCATENATED MODULE: ./src/ModalProvider.jsx

 //import TradeCoinPage from "./components/main/TradeCoinPage";



/* harmony default export */ var src_ModalProvider = (createModalProvider({
  [modals["b" /* TRADE_COIN_MODAL */]]: TradeCoinPageContainer,
  [modals["a" /* REGISTER_USER_MODAL */]]: RegisterPageContainer["a" /* default */]
}));
// EXTERNAL MODULE: ./src/components/AppLayout.jsx + 1 modules
var AppLayout = __webpack_require__("tPB8");

// EXTERNAL MODULE: ./src/containers/NotificationContainer.jsx + 2 modules
var NotificationContainer = __webpack_require__("jStO");

// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__("MGin");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: external "recompose/compose"
var compose_ = __webpack_require__("s1hs");
var compose_default = /*#__PURE__*/__webpack_require__.n(compose_);

// CONCATENATED MODULE: ./src/containers/RouterStateContainer.jsx






class RouterStateContainer_RouterState extends external_react_["PureComponent"] {
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

/* harmony default export */ var RouterStateContainer = (compose_default()(Object(external_react_redux_["connect"])(null, {
  setLocation: setLocation
}), external_react_router_["withRouter"])(RouterStateContainer_RouterState));
// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const isServer = true;

class _app_MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "store", configureStore());
  }

  render() {
    const {
      Component,
      router,
      pageProps
    } = this.props;
    const Router = isServer ? external_react_router_["StaticRouter"] : external_react_router_dom_["BrowserRouter"];
    const routerProps = isServer ? {
      location: router.asPath
    } : {};
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(app["Container"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
        store: this.store,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Router, _app_objectSpread(_app_objectSpread({}, routerProps), {}, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(RouterStateContainer, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src_ModalProvider, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AppLayout["a" /* default */], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NotificationContainer["a" /* default */], {})]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NotificationContainer["a" /* default */], {})]
        }))
      })
    });
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "2dud":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr8/");


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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse)), {}, {
      children: children
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* withStyles */ "b"])(({
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

/***/ "5rsU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr8/");



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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("fieldset", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.wrapper)), {}, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", _objectSpread(_objectSpread({
        htmlFor: `input_${name}`
      }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.label, errorMessage && styles.errorLabel)), {}, {
        children: errorMessage || label
      })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.input, errorMessage && styles.error, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge)), {}, {
        id: `input_${name}`,
        ref: this.setRef,
        type: type,
        onChange: this.handleChange,
        value: value
      }))]
    }));
  }

}

Input.defaultProps = {
  onChange: () => {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* withStyles */ "b"])(({
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

/***/ "7mAN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr8/");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("agxQ");


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

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.wrapper)), {}, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Spacing__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _objectSpread(_objectSpread({}, spacingProps), {}, {
        children: children
      }))
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* withStyles */ "b"])(({
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

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BLwg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr8/");


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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(HeadingTag, _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.default, styles[`level${level}`], inverse && styles.inverse)), {}, {
      children: children
    }));
  }

}

Heading.defaultProps = {
  level: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* withStyles */ "b"])(({
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

/***/ "DcUE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr8/");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Hx9w");


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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(styles.wrapper, align === "center" && styles.alignCenter, align === "right" && styles.alignRight, verticalAlign === "top" && styles.verticalAlignTop, verticalAlign === "bottom" && styles.verticalAlignBottom)), {}, {
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])({
        marginRight: spacingBetween * _Theme__WEBPACK_IMPORTED_MODULE_3__[/* unit */ "b"]
      })), {}, {
        children: child
      })))
    }));
  }

}

InlineList.defaultProps = {
  spacingBetween: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[/* withStyles */ "b"])(() => ({
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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HKJM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Provider,
  Consumer
} = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

/***/ }),

/***/ "Hx9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LARGE_AND_ABOVE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unit; });
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
/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ "Jxav":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FETCH_TRANSACTION_LIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createTransaction; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yUrU");
/* harmony import */ var _api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("x+L6");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';
const {
  collection,
  create,
  reset
} = Object(_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('transactions');
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

/***/ "MGin":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "VjQV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET; });
const FETCH_LIST = 'api-redux-pack/FETCH_LIST';
const FETCH = 'api-redux-pack/FETCH';
const UPDATE = 'api-redux-pack/UPDATE';
const CREATE = 'api-redux-pack/CREATE';
const RESET = 'api-redux-pack/RESET';

/***/ }),

/***/ "VnKK":
/***/ (function(module, exports) {

module.exports = require("react-with-styles/lib/ThemedStyleSheet");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "agxQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export propTypes */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hr8/");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Hx9w");


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
      marginTop: computedTop * _Theme__WEBPACK_IMPORTED_MODULE_4__[/* unit */ "b"]
    }), computedBottom && {
      marginBottom: computedBottom * _Theme__WEBPACK_IMPORTED_MODULE_4__[/* unit */ "b"]
    }), computedLeft && {
      marginLeft: computedLeft * _Theme__WEBPACK_IMPORTED_MODULE_4__[/* unit */ "b"]
    }), computedRight && {
      marginRight: computedRight * _Theme__WEBPACK_IMPORTED_MODULE_4__[/* unit */ "b"]
    });

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", _objectSpread(_objectSpread({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__[/* css */ "a"])(computedStyles)), {}, {
      children: children
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Spacing);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "da7j":
/***/ (function(module, exports) {

module.exports = require("react-with-styles-interface-aphrodite");

/***/ }),

/***/ "gz18":
/***/ (function(module, exports) {

module.exports = require("redux-pack");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hr8/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VnKK");
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("da7j");
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zoyD");
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]; });

/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Hx9w");




react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerInterface(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default.a);
react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerTheme(_Theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);


/***/ }),

/***/ "jStO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/ui/withStyles.js
var withStyles = __webpack_require__("hr8/");

// EXTERNAL MODULE: ./src/ui/Spacing.jsx
var Spacing = __webpack_require__("agxQ");

// EXTERNAL MODULE: ./src/ui/Text.jsx
var Text = __webpack_require__("2dud");

// CONCATENATED MODULE: ./src/ui/Toast.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Toast_Toast extends external_react_["PureComponent"] {
  render() {
    const {
      message,
      styles,
      warning
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({}, Object(withStyles["a" /* css */])(styles.overlay)), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({}, Object(withStyles["a" /* css */])(styles.wrapper, warning && styles.warning)), {}, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spacing["a" /* default */], {
          vertical: 4,
          horizontal: 8,
          children: message
        })
      }))
    }));
  }

}

/* harmony default export */ var ui_Toast = (Object(withStyles["b" /* withStyles */])(({
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
}))(Toast_Toast));
// CONCATENATED MODULE: ./src/components/main/Notification.jsx




class Notification_Notification extends external_react_["PureComponent"] {
  render() {
    const {
      showMessage,
      message,
      warning
    } = this.props;
    return showMessage && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_Toast, {
      message: message,
      warning: warning
    });
  }

}

/* harmony default export */ var main_Notification = (Notification_Notification);
// CONCATENATED MODULE: ./src/containers/NotificationContainer.jsx



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

/* harmony default export */ var NotificationContainer = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps)(main_Notification));

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kkfp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/ui/Text.jsx
var Text = __webpack_require__("2dud");

// EXTERNAL MODULE: ./src/ui/Spacing.jsx
var Spacing = __webpack_require__("agxQ");

// EXTERNAL MODULE: ./src/ui/Input.jsx
var Input = __webpack_require__("5rsU");

// EXTERNAL MODULE: ./src/ui/Button.jsx
var Button = __webpack_require__("/y5g");

// EXTERNAL MODULE: ./src/ui/InlineList.jsx
var InlineList = __webpack_require__("DcUE");

// EXTERNAL MODULE: ./src/ui/Form.jsx
var Form = __webpack_require__("+JXW");

// EXTERNAL MODULE: ./src/ui/Modal/context.js
var context = __webpack_require__("HKJM");

// CONCATENATED MODULE: ./src/components/signup/RegisterPage.jsx











class RegisterPage_RegisterPage extends external_react_["PureComponent"] {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(context["a" /* Consumer */], {
      children: ({
        closeModal
      }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form["a" /* default */], {
        onSubmit: values => this.handleSubmit(values, closeModal),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form["a" /* default */].Consumer, {
          children: ({
            onChange
          }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Spacing["a" /* default */], {
            horizontal: 4,
            vertical: 8,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
              xlarge: true,
              bold: true,
              children: "\uD68C\uC6D0\uB4F1\uB85D"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spacing["a" /* default */], {
              bottom: 2,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                name: "userId",
                label: "\uC0AC\uC6A9\uC790 \uC544\uC774\uB514",
                onChange: onChange
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spacing["a" /* default */], {
              bottom: 2,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                name: "totalAmount",
                label: "\uC790\uC0B0\uCD1D\uC561",
                type: "number",
                onChange: onChange
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InlineList["a" /* default */], {
              spacingBetween: 1,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                type: "submit",
                primary: true,
                disabled: loading,
                children: "\uD68C\uC6D0\uB4F1\uB85D"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                onPress: closeModal,
                disabled: loading,
                children: "\uCDE8\uC18C"
              })]
            })]
          })
        })
      })
    });
  }

}

/* harmony default export */ var signup_RegisterPage = (RegisterPage_RegisterPage);
// EXTERNAL MODULE: ./src/api-redux-pack/createActions.js
var createActions = __webpack_require__("x+L6");

// CONCATENATED MODULE: ./src/actions/userActions.js

const {
  create
} = Object(createActions["a" /* default */])('users');
function createUser(data, onComplete) {
  return create(data, {}, {
    notification: {
      success: '회원가입 , 성공적'
    },
    onSuccess: onComplete
  });
}
// EXTERNAL MODULE: ./src/api-redux-pack/createSelectors.js
var createSelectors = __webpack_require__("0i2N");

// CONCATENATED MODULE: ./src/selectors/userSelectors.js

const {
  createLoadingStateSelector: userCreateLoadingStateSelector
} = Object(createSelectors["a" /* default */])('users');
// CONCATENATED MODULE: ./src/containers/signup/RegisterPageContainer.jsx




/* harmony default export */ var RegisterPageContainer = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(state => ({
  loading: userCreateLoadingStateSelector(state)
}), {
  createUser: createUser
})(signup_RegisterPage));

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s1hs":
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),

/***/ "t2hi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRADE_COIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGISTER_USER_MODAL; });
const TRADE_COIN_MODAL = 'modal/TRADE_COIN_MODAL';
const REGISTER_USER_MODAL = 'modal/REGISTER_USER_MODAL';

/***/ }),

/***/ "tPB8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/ui/withStyles.js
var withStyles = __webpack_require__("hr8/");

// EXTERNAL MODULE: ./src/ui/Heading.jsx
var Heading = __webpack_require__("BLwg");

// EXTERNAL MODULE: ./src/ui/Text.jsx
var Text = __webpack_require__("2dud");

// EXTERNAL MODULE: ./src/constants/modals.js
var modals = __webpack_require__("t2hi");

// EXTERNAL MODULE: ./src/ui/Modal/context.js
var context = __webpack_require__("HKJM");

// EXTERNAL MODULE: ./src/ui/Button.jsx
var Button = __webpack_require__("/y5g");

// CONCATENATED MODULE: ./src/components/AppNav.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//최상단 네비 메뉴, 페이지 제목, 회원가입 버튼







const HEIGHT = 64;

class AppNav_AppNav extends external_react_["PureComponent"] {
  render() {
    const {
      styles
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({}, Object(withStyles["a" /* css */])(styles.wrapper)), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", _objectSpread(_objectSpread({}, Object(withStyles["a" /* css */])(styles.container)), {}, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          level: 3,
          inverse: true,
          children: "\uCF54\uC778 \uAC70\uB798\uC18C"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(context["a" /* Consumer */], {
          children: ({
            openModal
          }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            inverse: true,
            bold: true,
            large: true,
            onPress: () => openModal(modals["a" /* REGISTER_USER_MODAL */]),
            children: "\uD68C\uC6D0\uAC00\uC785"
          })
        })]
      }))
    }));
  }

}

/* harmony default export */ var components_AppNav = (Object(withStyles["b" /* withStyles */])(({
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
}))(AppNav_AppNav));
// CONCATENATED MODULE: ./src/components/AppLayout.jsx



function AppLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppLayout_ownKeys(Object(source), true).forEach(function (key) { AppLayout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AppLayout_AppLayout extends external_react_["PureComponent"] {
  render() {
    const {
      children,
      styles
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", AppLayout_objectSpread(AppLayout_objectSpread({}, Object(withStyles["a" /* css */])(styles.wrapper)), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_AppNav, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", AppLayout_objectSpread(AppLayout_objectSpread({}, Object(withStyles["a" /* css */])(styles.body)), {}, {
        children: children
      }))]
    }));
  }

}

/* harmony default export */ var components_AppLayout = __webpack_exports__["a"] = (Object(withStyles["b" /* withStyles */])(({
  unit
}) => ({
  wrapper: {
    marginTop: HEIGHT
  },
  body: {
    padding: unit * 4
  }
}))(AppLayout_AppLayout));

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "x+L6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VjQV");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yUrU");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = ((resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_LIST */ "c"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(resourceName, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  member: (id, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH */ "b"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`${resourceName}/${id}`, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  create: (data, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CREATE */ "a"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(resourceName, data, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE */ "e"],
    promise: _Api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`${resourceName}/${id}`, data, {
      params
    }),
    meta: _objectSpread(_objectSpread({}, meta), {}, {
      key,
      resourceName
    })
  }),
  reset: () => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* RESET */ "d"],
    meta: {
      resourceName
    }
  })
}));

/***/ }),

/***/ "yUrU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:4000/'
});
/* harmony default export */ __webpack_exports__["a"] = (Api);

/***/ }),

/***/ "zoyD":
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });