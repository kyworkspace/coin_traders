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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


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

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/ui/Heading.jsx
var Heading = __webpack_require__("BLwg");

// EXTERNAL MODULE: ./src/ui/InlineList.jsx
var InlineList = __webpack_require__("DcUE");

// EXTERNAL MODULE: ./src/ui/Button.jsx
var Button = __webpack_require__("/y5g");

// EXTERNAL MODULE: ./src/ui/Card.jsx
var Card = __webpack_require__("7mAN");

// EXTERNAL MODULE: ./src/ui/Text.jsx
var Text = __webpack_require__("2dud");

// EXTERNAL MODULE: ./src/ui/Modal/context.js
var context = __webpack_require__("HKJM");

// EXTERNAL MODULE: ./src/constants/modals.js
var modals = __webpack_require__("t2hi");

// CONCATENATED MODULE: ./src/components/main/CoinDashlet.jsx


//이건 코인별로 나오는 카드 메뉴들





 //모달 호출




class CoinDashlet_CoinDashlet extends external_react_["PureComponent"] {
  render() {
    const {
      name,
      priceLabel
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(context["a" /* Consumer */], {
      children: ({
        openModal
      }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
        vertical: 4,
        horizontal: 4,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Heading["a" /* default */], {
          level: 4,
          children: [name, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
            children: priceLabel
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InlineList["a" /* default */], {
          spacingBetween: 1,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            primary: true,
            small: true,
            onPress: () => openModal(modals["b" /* TRADE_COIN_MODAL */], {
              type: "buy",
              name,
              price: priceLabel
            }),
            children: "\uB9E4\uB3C4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            small: true,
            onPress: () => openModal(modals["b" /* TRADE_COIN_MODAL */], {
              type: "sell",
              name,
              price: priceLabel
            }),
            children: "\uB9E4\uC218"
          })]
        })]
      })
    });
  }

}

/* harmony default export */ var main_CoinDashlet = (CoinDashlet_CoinDashlet);
// CONCATENATED MODULE: ./src/components/main/CoinOverview.jsx


//각 코인을 나타내는 메뉴, 상단 메뉴





class CoinOverview_CoinOverview extends external_react_["PureComponent"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
        level: 3,
        children: "\uCF54\uC778 \uB3D9\uD5A5"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InlineList["a" /* default */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(main_CoinDashlet, {
          name: "\uBE44\uD2B8\uCF54\uC778",
          priceLabel: "4,216,000"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(main_CoinDashlet, {
          name: "\uC774\uB354\uB9AC\uC6C0",
          priceLabel: "216,000"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(main_CoinDashlet, {
          name: "\uC0BC\uC131\uC804\uC790",
          priceLabel: "88,000"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(main_CoinDashlet, {
          name: "\uC0BC\uC131\uC804\uC790\uC6B0",
          priceLabel: "75,000"
        })]
      })]
    });
  }

}

/* harmony default export */ var main_CoinOverview = (CoinOverview_CoinOverview);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/ui/Input.jsx
var Input = __webpack_require__("5rsU");

// EXTERNAL MODULE: ./src/ui/Form.jsx
var Form = __webpack_require__("+JXW");

// EXTERNAL MODULE: ./src/ui/withStyles.js
var withStyles = __webpack_require__("hr8/");

// CONCATENATED MODULE: ./src/ui/Option.jsx



class Option_Option extends external_react_["PureComponent"] {
  render() {
    const {
      value,
      label,
      disabled
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
      value: value,
      disabled: disabled,
      children: label || value
    });
  }

}

/* harmony default export */ var ui_Option = (Option_Option);
// CONCATENATED MODULE: ./src/ui/Select.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Select 컴포넌트는 대부분 Option 컴포넌트를 포함하고 있으므로,
// Select 컴포넌트를 임포트할때
// Option 컴포넌트를 함께 참조할수 있도록 Option 컴포넌트를 익스포트함

class Select_Select extends external_react_["PureComponent"] {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", _objectSpread(_objectSpread({}, Object(withStyles["a" /* css */])(styles.wrapper)), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", _objectSpread(_objectSpread({
        htmlFor: `input_${name}`
      }, Object(withStyles["a" /* css */])(styles.label, errorMessage && styles.errorLabel)), {}, {
        children: errorMessage || label
      })), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({}, Object(withStyles["a" /* css */])(styles.placeholder, xsmall && styles.xsmallPadding, small && styles.smallPadding, large && styles.largePadding, xlarge && styles.xlargePadding, focused && styles.focus, errorMessage && styles.error)), {}, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("select", _objectSpread(_objectSpread({}, Object(withStyles["a" /* css */])(styles.select, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge)), {}, {
          disabled: disabled,
          id: `input_${name}`,
          ref: this.setRef,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          value: value,
          children: external_react_default.a.Children.map(children, child => /*#__PURE__*/external_react_default.a.cloneElement(child, {
            disabled
          }))
        }))
      }))]
    }));
  }

}

Select_Select.defaultProps = {
  onChange: () => {},
  autoFocus: false
};
/* harmony default export */ var ui_Select = (Object(withStyles["b" /* withStyles */])(({
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
}))(Select_Select));
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// CONCATENATED MODULE: ./src/components/main/TransactionSearchFilter.jsx



function TransactionSearchFilter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TransactionSearchFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TransactionSearchFilter_ownKeys(Object(source), true).forEach(function (key) { TransactionSearchFilter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TransactionSearchFilter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TransactionSearchFilter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//검색필터
//폼에서 제공받은 프로바이더 를 이용해서 onChange, value  콜백 받음







 //import Api from "../../Api";

class TransactionSearchFilter_TransactionSearchFilter extends external_react_["PureComponent"] {
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

    const cleanedParams = Object.entries(params).filter(([key, value]) => value !== "").reduce((obj, [key, value]) => TransactionSearchFilter_objectSpread(TransactionSearchFilter_objectSpread({}, obj), {}, {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form["a" /* default */], {
      onSubmit: this.handleSubmit,
      initValues: initValues,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form["a" /* default */].Consumer, {
        children: ({
          onChange,
          values
        }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InlineList["a" /* default */], {
          spacingBetween: 2,
          verticalAlign: "bottom",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
            xlarge: true,
            bold: true,
            children: "\uAC80\uC0C9"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ui_Select, {
            name: "code",
            label: "\uCF54\uC778 \uCF54\uB4DC",
            onChange: onChange,
            value: values["code"],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_Option, {
              label: "\uC120\uD0DD\uD574\uC8FC\uC138\uC694",
              value: ""
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_Option, {
              label: "\uBE44\uD2B8\uCF54\uC778(BTX)",
              value: "BTX"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_Option, {
              label: "\uC774\uB354\uB9AC\uC6C0(ETH)",
              value: "ETH"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_Option, {
              label: "\uC0BC\uC131\uC804\uC790",
              value: "samsung"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_Option, {
              label: "\uC0BC\uC131\uC804\uC790\uC6B0",
              value: "samsungWoo"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
            name: "currentPrice_gte",
            label: "\uCD5C\uC18C\uAC70\uB798\uAC00",
            onChange: onChange,
            value: values["currentPrice_gte"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
            name: "currentPrice_lte",
            label: "\uCD5C\uB300\uAC70\uB798\uAC00",
            onChange: onChange,
            value: values["currentPrice_lte"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            type: "submit",
            primary: true,
            children: "\uAC80\uC0C9"
          })]
        })
      })
    });
  }

}

TransactionSearchFilter_TransactionSearchFilter.defaultProps = {
  onChange: () => ({})
};
/* harmony default export */ var main_TransactionSearchFilter = (Object(external_react_router_dom_["withRouter"])(TransactionSearchFilter_TransactionSearchFilter));
// EXTERNAL MODULE: ./src/actions/transactionPackActions.js
var transactionPackActions = __webpack_require__("Jxav");

// EXTERNAL MODULE: ./src/actions/searchFilterActions.js
var searchFilterActions = __webpack_require__("/reB");

// CONCATENATED MODULE: ./src/containers/main/TransactionSearchFilterContainer.jsx

 // import { setTransactionList } from "../../actions/transactionActions";
//import { requestTransactionList } from "../../actions/transactionActions";




const mapStateToProps = state => ({
  initValues: state.searchFilter.params
}); // export default connect(null, { requestTransactionList,setFilter })(
//   TransactionSearchFilter
// );


/* harmony default export */ var TransactionSearchFilterContainer = (Object(external_react_redux_["connect"])(mapStateToProps)(main_TransactionSearchFilter));
// CONCATENATED MODULE: ./src/ui/Table.jsx


function Table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Table_ownKeys(Object(source), true).forEach(function (key) { Table_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Table_Table extends external_react_["Component"] {
  render() {
    const {
      styles,
      children
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("table", Table_objectSpread(Table_objectSpread({}, Object(withStyles["a" /* css */])(styles.table)), {}, {
      children: children
    }));
  }

}

/* harmony default export */ var ui_Table = (Object(withStyles["b" /* withStyles */])(({
  color,
  unit
}) => ({
  table: {
    borderCollapse: "collapse",
    width: "100%"
  }
}))(Table_Table));
// CONCATENATED MODULE: ./src/ui/TableRow.jsx



class TableRow_TableRow extends external_react_["PureComponent"] {
  render() {
    const {
      children,
      isHeader,
      baseline
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
      children: external_react_default.a.Children.map(children, child => /*#__PURE__*/external_react_default.a.cloneElement(child, {
        baseline,
        isHeader
      }))
    });
  }

}

/* harmony default export */ var ui_TableRow = (TableRow_TableRow);
// CONCATENATED MODULE: ./src/ui/TableCell.jsx


function TableCell_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TableCell_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TableCell_ownKeys(Object(source), true).forEach(function (key) { TableCell_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TableCell_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TableCell_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TableCell_TableCell extends external_react_["PureComponent"] {
  render() {
    const {
      align,
      baseline,
      styles,
      children,
      isHeader
    } = this.props;
    const Tag = isHeader ? "th" : "td";
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tag, TableCell_objectSpread(TableCell_objectSpread({}, Object(withStyles["a" /* css */])(styles.cell, isHeader && styles.header, !isHeader && baseline && styles.baseline, align === "center" && styles.alignCenter, align === "right" && styles.alignRight)), {}, {
      children: children
    }));
  }

}

TableCell_TableCell.defaultProps = {
  baseline: true,
  isHeader: false
};
/* harmony default export */ var ui_TableCell = (Object(withStyles["b" /* withStyles */])(({
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
}))(TableCell_TableCell));
// CONCATENATED MODULE: ./src/ui/TableHead.jsx



class TableHead_TableHead extends external_react_["PureComponent"] {
  // 자식 프로퍼티의 값은 JSX 노트 형태 이므로 자바스크립트의 map() 함수가 아니라 리액트에서 제공하는
  // React.Children.map() 함수를 사용해야함. 해당 함수는 자식 프로퍼티에 포함된 JSX의 컴포넌트 엘리먼트를
  // 배열 처럼 취급함. 또한 React.cloneElement() 함수를 사용하여 각각의 자식 컴포넌트에 추가 프로퍼티를 전달함
  // 해당 함수는 JSX 노드를 복사함 다음 특정 프로퍼티를 추가함
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
      children: external_react_default.a.Children.map(children, child => /*#__PURE__*/external_react_default.a.cloneElement(child, {
        isHeader: true
      }))
    });
  }

} //TableHeader 컴포넌트이기 때문에 각 노드에 isHeader 프로퍼티를 추가해줌


/* harmony default export */ var ui_TableHead = (TableHead_TableHead);
// CONCATENATED MODULE: ./src/ui/TableBody.jsx



class TableBody_TableBody extends external_react_["PureComponent"] {
  //Head와 유사한 방식으로 자식프로퍼티를 사용함
  render() {
    const {
      children
    } = this.props;
    const {
      length
    } = external_react_default.a.Children.toArray(children);
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
      children: external_react_default.a.Children.map(children, (child, index) => {
        const baseline = index < length - 1 ? true : false;
        return /*#__PURE__*/external_react_default.a.cloneElement(child, {
          baseline
        });
      })
    }) //마지막을 제외한 행은 밑줄을 표시하도록
    ;
  }

}

/* harmony default export */ var ui_TableBody = (TableBody_TableBody);
// CONCATENATED MODULE: ./src/components/withLoading.jsx


function withLoading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withLoading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withLoading_ownKeys(Object(source), true).forEach(function (key) { withLoading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withLoading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withLoading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ var withLoading = ((loadingMessage = '로딩중') => WrappedComponent => {
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

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(WrappedComponent, withLoading_objectSpread({}, props));
  }

  WithLoading.displayName = `withLoading(${wrappedComponentName})`;
  return WithLoading;
});
// EXTERNAL MODULE: ./src/ui/Spacing.jsx
var Spacing = __webpack_require__("agxQ");

// CONCATENATED MODULE: ./src/components/main/TransactionTable.jsx


// 검색 목록
//데이터 테이블 컴포넌트 사용, 프로퍼티에는 배열형 값이 들어있으므로 map() 함수를 이용해서 출력










const LoadingMessage = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spacing["a" /* default */], {
  vertical: 4,
  horizontal: 2,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
    large: true,
    children: "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uB4E4\uC774\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
  })
});

class TransactionTable_TransactionTable extends external_react_["Component"] {
  render() {
    const {
      transactions
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ui_Table, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableHead, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ui_TableRow, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            align: "left",
            children: "\uCF54\uC778"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            align: "center",
            children: "\uC2DC\uAC00\uCD1D\uC561"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            align: "center",
            children: "\uD604\uC7AC\uC2DC\uC138"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            align: "right",
            children: "\uAC70\uB798 \uC2DC\uAC04"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableBody, {
        children: transactions.map(({
          id,
          name,
          totalPrice,
          currentPrice,
          dateTime
        }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ui_TableRow, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            children: name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            align: "center",
            children: totalPrice
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            align: "center",
            children: currentPrice
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ui_TableCell, {
            align: "right",
            children: dateTime
          })]
        }, id))
      })]
    });
  }

}

/* harmony default export */ var main_TransactionTable = (withLoading(LoadingMessage)(TransactionTable_TransactionTable));
// CONCATENATED MODULE: ./src/components/main/TransactionPagination.jsx






class TransactionPagination_TransactionPagination extends external_react_["PureComponent"] {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InlineList["a" /* default */], {
      align: "right",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
        secondary: true,
        disabled: prevDisabled,
        onPress: this.handlePrevPress,
        children: "\uC774\uC804"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
        secondary: true,
        disabled: nextDiasbled,
        onPress: this.handleNextPress,
        children: "\uB2E4\uC74C"
      })]
    });
  }

}

/* harmony default export */ var main_TransactionPagination = (TransactionPagination_TransactionPagination);
// EXTERNAL MODULE: ./src/api-redux-pack/createSelectors.js
var createSelectors = __webpack_require__("0i2N");

// CONCATENATED MODULE: ./src/selectors/transactionSelectors.js
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
} = Object(createSelectors["a" /* default */])('transactions');
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");

// CONCATENATED MODULE: ./src/containers/main/TransactionPaginationContainer.jsx






const TransactionPaginationContainer_mapStateToProps = state => {
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
    loading: transactionListLoadingStateSelector(state)
  };
};

const mapDispatchToProps = {
  requestTransactionList: transactionPackActions["c" /* requestTransactionList */]
};
/* harmony default export */ var TransactionPaginationContainer = (Object(external_react_redux_["connect"])(TransactionPaginationContainer_mapStateToProps, mapDispatchToProps)(main_TransactionPagination));
// CONCATENATED MODULE: ./src/components/main/TransactionList.jsx


//검색 및 결과 목록 화면 구성
 //import Api from "../../Api";







class TransactionList_TransactionList extends external_react_["Component"] {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
        level: 3,
        children: "\uAC70\uB798\uD604\uD669"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
        vertical: 4,
        horizontal: 4,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TransactionSearchFilterContainer, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(main_TransactionTable, {
          transactions: transactions,
          isLoading: loading
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TransactionPaginationContainer, {})]
    });
  }

}

/* harmony default export */ var main_TransactionList = (TransactionList_TransactionList);
// CONCATENATED MODULE: ./src/containers/main/TransactionListContainer.jsx

 //import { setTransactionList } from "../../actions/transactionActions";
//import { requestTransactionList } from "../../actions/transactionActions";




const TransactionListContainer_mapStateToProps = state => {
  // const { ids, entities,loadingState } = state.transactions;
  // const loading = loadingState[FETCH_TRANSACTION_LIST];
  // const transactions = ids.map((id) => entities[id]);
  // return {transactions,loading}
  // 셀렉터에 모든 내부 기능을 넘김
  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state)
  };
};

const mapDisPatchToProps = {
  requestTransactionList: transactionPackActions["c" /* requestTransactionList */]
};
/* harmony default export */ var TransactionListContainer = (Object(external_react_redux_["connect"])(TransactionListContainer_mapStateToProps, mapDisPatchToProps)(main_TransactionList));
// CONCATENATED MODULE: ./src/components/main/MainPage.jsx




 //import NotificationContainer from "../../containers/main/NotificationContainer";

class MainPage_MainPage extends external_react_["PureComponent"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(main_CoinOverview, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TransactionListContainer, {})]
    });
  }

}

/* harmony default export */ var main_MainPage = (MainPage_MainPage);
// CONCATENATED MODULE: ./pages/index.jsx




class pages_IndexDocument extends external_react_["PureComponent"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(main_MainPage, {});
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexDocument);

/***/ }),

/***/ "da7j":
/***/ (function(module, exports) {

module.exports = require("react-with-styles-interface-aphrodite");

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

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "t2hi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRADE_COIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGISTER_USER_MODAL; });
const TRADE_COIN_MODAL = 'modal/TRADE_COIN_MODAL';
const REGISTER_USER_MODAL = 'modal/REGISTER_USER_MODAL';

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

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