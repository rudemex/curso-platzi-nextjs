webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./components/PodcastListWithClick.js":
/*!********************************************!*\
  !*** ./components/PodcastListWithClick.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");










var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          podcasts = _this$props.podcasts,
          onClickPodcast = _this$props.onClickPodcast;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3593609829"
      }, podcasts.map(function (podcast) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "/".concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_8__["default"])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_8__["default"])(podcast.title), ".").concat(podcast.id),
          key: podcast.id,
          onClick: function onClick(event) {
            return onClickPodcast(event, podcast);
          },
          className: "jsx-3593609829" + " " + 'podcast'
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: "jsx-3593609829"
        }, podcast.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3593609829" + " " + 'meta'
        }, Math.ceil(podcast.duration / 60), " minutes"));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3593609829"
      }, ".podcast.jsx-3593609829{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3593609829:hover{color:#000;}.podcast.jsx-3593609829 h3.jsx-3593609829{margin:0;}.podcast.jsx-3593609829 .meta.jsx-3593609829{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWRlbGdhZG9cXFByb2plY3RzXFxSZWFjdFxcbmV4dGpzXFxjdXJzby1wbGF0emktbmV4dGpzXFxjb21wb25lbnRzXFxQb2RjYXN0TGlzdFdpdGhDbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQndCLEFBR21DLEFBUUgsQUFHRixBQUdFLFNBRmYsRUFIQSxBQU1xQixHQWRJLGNBZUwsZ0JBQ3BCLG9CQWZlLFdBQ0UsYUFDMkIsd0NBQ3pCLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWRlbGdhZG9cXFByb2plY3RzXFxSZWFjdFxcbmV4dGpzXFxjdXJzby1wbGF0emktbmV4dGpzXFxjb21wb25lbnRzXFxQb2RjYXN0TGlzdFdpdGhDbGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBvZGNhc3RzLCBvbkNsaWNrUG9kY2FzdCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgeyBwb2RjYXN0cy5tYXAoKHBvZGNhc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHtzbHVnKHBvZGNhc3QuY2hhbm5lbC50aXRsZSl9LiR7cG9kY2FzdC5jaGFubmVsLmlkfS8ke3NsdWcocG9kY2FzdC50aXRsZSl9LiR7cG9kY2FzdC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwb2RjYXN0JyBrZXk9e3BvZGNhc3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGV2ZW50KSA9PiBvbkNsaWNrUG9kY2FzdChldmVudCwgcG9kY2FzdCkgfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+eyBwb2RjYXN0LnRpdGxlIH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXRhJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBNYXRoLmNlaWwocG9kY2FzdC5kdXJhdGlvbiAvIDYwKSB9IG1pbnV0ZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKSkgfVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnBvZGNhc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvZGNhc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvZGNhc3QgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb2RjYXN0IC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\mdelgado\\Projects\\React\\nextjs\\curso-platzi-nextjs\\components\\PodcastListWithClick.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.23571296d04167439449.hot-update.js.map