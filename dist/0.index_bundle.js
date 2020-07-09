(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/assets/gh-battle.jpg":
/*!**********************************!*\
  !*** ./src/assets/gh-battle.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9503839cd95a15e0f4b069fc1a2939f7.jpg\";\n\n//# sourceURL=webpack:///./src/assets/gh-battle.jpg?");

/***/ }),

/***/ "./src/assets/hackernews.jpg":
/*!***********************************!*\
  !*** ./src/assets/hackernews.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"61ce3d0cf9a556cf72b629bd3cc52330.jpg\";\n\n//# sourceURL=webpack:///./src/assets/hackernews.jpg?");

/***/ }),

/***/ "./src/assets/smartbrain.jpg":
/*!***********************************!*\
  !*** ./src/assets/smartbrain.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"70d2eca30115ee48d0affba9e107ef8d.jpg\";\n\n//# sourceURL=webpack:///./src/assets/smartbrain.jpg?");

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Project = function Project(_ref) {\n  var project = _ref.project;\n  var name = project.name,\n      src = project.src,\n      alt = project.alt,\n      description = project.description,\n      technologies = project.technologies,\n      link = project.link;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"project\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"project-img project-item\",\n    src: src,\n    alt: alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"project-info project-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"project-description\"\n  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"project-technologies\"\n  }, technologies), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: link,\n    target: \"_blank\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"View Project\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/components/Project.js?");

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/components/Project.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Projects = /*#__PURE__*/function (_React$Component) {\n  _inherits(Projects, _React$Component);\n\n  var _super = _createSuper(Projects);\n\n  function Projects() {\n    var _this;\n\n    _classCallCheck(this, Projects);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      projects: [{\n        name: \"GitHub Battle\",\n        src: __webpack_require__(/*! ../assets/gh-battle.jpg */ \"./src/assets/gh-battle.jpg\"),\n        alt: \"Battle your friends on GitHub\",\n        description: \"Enter two GitHub users to battle each other. Results are based on their stars and followers. Also, finds/sorts popular repositories for several coding languages in GitHub.\",\n        technologies: \"Technologies: HTML, CSS, JavaScript, React, React Hooks, React Router, Github's API. Deployed with Netlify.\",\n        link: 'https://modest-lichterman-dbae69.netlify.app/'\n      }, {\n        name: \"Smartbrain\",\n        src: __webpack_require__(/*! ../assets/smartbrain.jpg */ \"./src/assets/smartbrain.jpg\"),\n        alt: \"Find faces through an http image search.\",\n        description: \"Detects the faces of an image provided via http. Created a login feature to store ranking of a user based on the amount of times they used the application.\",\n        technologies: \"Technologies: HTML, CSS, JavaScript, React, React Router, Clarifai's API. Back-end utilizes Node.js, Express framework, and PostgreSQL to handle and store user data. Deployed with Netlify.\",\n        link: 'https://relaxed-northcutt-5526a8.netlify.app/'\n      }, {\n        name: \"HackerNews Clone\",\n        src: __webpack_require__(/*! ../assets/hackernews.jpg */ \"./src/assets/hackernews.jpg\"),\n        alt: \"Clone of the HackerNews website.\",\n        description: \"Clone of the HackerNews, the social news website focused on different technologies and entrepreneurship.\",\n        technologies: \"Technologies used: HTML, CSS, JavaScript, React, React Hooks, React Router, HackerNews' API. Deployed with Netlify.\",\n        link: 'https://flamboyant-knuth-92e3d3.netlify.app/'\n      }]\n    });\n\n    return _this;\n  }\n\n  _createClass(Projects, [{\n    key: \"render\",\n    value: function render() {\n      var projects = this.state.projects;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"project-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"spc-font\"\n      }, \"Projects\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), projects.map(function (proj) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          key: proj.name,\n          project: proj\n        });\n      }));\n    }\n  }]);\n\n  return Projects;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/components/Projects.js?");

/***/ })

}]);