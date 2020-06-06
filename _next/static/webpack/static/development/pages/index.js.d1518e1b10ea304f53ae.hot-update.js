webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./data.tsx");
var _this = undefined,
    _jsxFileName = "/home/sean/code/datascienceslugs.github.io/components/layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Layout = function Layout(_ref) {
  var children = _ref.children,
      pageId = _ref.pageId;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "".concat("", "/favicon.ico"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: _config__WEBPACK_IMPORTED_MODULE_4__["siteTitle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), "/* for constellations on the home page, keep this in layout so that it doesnt get diffed out */", __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "".concat("", "/constellation.js"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "".concat("", "/images/menu-bar.png"),
    alt: "Home",
    className: "fullLogo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })))), _config__WEBPACK_IMPORTED_MODULE_4__["navBar"].map(function (_ref2) {
    var linkText = _ref2.linkText,
        pageId = _ref2.pageId;
    return __jsx("div", {
      key: pageId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "".concat("", "/posts/").concat(pageId),
      as: "".concat("", "/posts/").concat(pageId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "navItem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, linkText)));
  })), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, children), pageId !== "home" ? __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "\u2190 Back to home"))) : __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footerContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, _data__WEBPACK_IMPORTED_MODULE_5__["footerLinks"].map(function (fInfo) {
    return __jsx("div", {
      key: fInfo.linkText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: fInfo.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, fInfo.linkText));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./data.tsx":
/*!******************!*\
  !*** ./data.tsx ***!
  \******************/
/*! exports provided: footerLinks, people, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerLinks", function() { return footerLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "people", function() { return people; });
var footerLinks = [{
  href: "https://github.com/datascienceslugs",
  linkText: "Github"
}, {
  href: "https://www.instagram.com/datascienceucsc/?igshid=1kwj608v894a5",
  linkText: "Instagram"
}, {
  href: "https://www.linkedin.com/company/datascienceucsc/",
  linkText: "Linktext"
}, {
  href: "mailto:ucscdatascience@gmail.com",
  linkText: "Email Us!"
}];
var people = [{
  id: "anders",
  name: "Anders Poirel",
  role: "President"
}, {
  id: "julian",
  name: "Julian Lehrer",
  role: "Vice-President"
}, {
  id: "oasys",
  name: "Oasys Okubo",
  role: "Officer"
},
/*  {
  id: "garret",
  name: "Garret Leising",
  role: "",
}, */
{
  id: "bijay",
  name: "Bijay Khadja",
  role: "Officer"
}, {
  id: "sean",
  name: "Sean Breckenridge",
  role: "Officer, Web Development Officer"
}, {
  id: "ryan",
  name: "Ryan Darling",
  role: "Former President"
}];
/* harmony default export */ __webpack_exports__["default"] = (people);

/***/ })

})
//# sourceMappingURL=index.js.d1518e1b10ea304f53ae.hot-update.js.map