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
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");







//import Link from 'next/link';


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
          href: "/".concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_7__["default"])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_7__["default"])(podcast.title), ".").concat(podcast.id),
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
      }, ".podcast.jsx-3593609829{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3593609829:hover{color:#000;}.podcast.jsx-3593609829 h3.jsx-3593609829{margin:0;}.podcast.jsx-3593609829 .meta.jsx-3593609829{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWRlbGdhZG9cXFByb2plY3RzXFxSZWFjdFxcbmV4dGpzXFxjdXJzby1wbGF0emktbmV4dGpzXFxjb21wb25lbnRzXFxQb2RjYXN0TGlzdFdpdGhDbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQndCLEFBR21DLEFBUUgsQUFHRixBQUdFLFNBRmYsRUFIQSxBQU1xQixHQWRJLGNBZUwsZ0JBQ3BCLG9CQWZlLFdBQ0UsYUFDMkIsd0NBQ3pCLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWRlbGdhZG9cXFByb2plY3RzXFxSZWFjdFxcbmV4dGpzXFxjdXJzby1wbGF0emktbmV4dGpzXFxjb21wb25lbnRzXFxQb2RjYXN0TGlzdFdpdGhDbGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcG9kY2FzdHMsIG9uQ2xpY2tQb2RjYXN0IH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICB7IHBvZGNhc3RzLm1hcCgocG9kY2FzdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3NsdWcocG9kY2FzdC5jaGFubmVsLnRpdGxlKX0uJHtwb2RjYXN0LmNoYW5uZWwuaWR9LyR7c2x1Zyhwb2RjYXN0LnRpdGxlKX0uJHtwb2RjYXN0LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BvZGNhc3QnIGtleT17cG9kY2FzdC5pZH1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZXZlbnQpID0+IG9uQ2xpY2tQb2RjYXN0KGV2ZW50LCBwb2RjYXN0KSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57IHBvZGNhc3QudGl0bGUgfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21ldGEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IE1hdGguY2VpbChwb2RjYXN0LmR1cmF0aW9uIC8gNjApIH0gbWludXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApKSB9XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucG9kY2FzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucG9kY2FzdDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucG9kY2FzdCBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvZGNhc3QgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\mdelgado\\Projects\\React\\nextjs\\curso-platzi-nextjs\\components\\PodcastListWithClick.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.75911f259762192ec06b.hot-update.js.map