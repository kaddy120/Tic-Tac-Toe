/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --gray-50: #fafafa;
  --gray-400: #d4d4d8;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-300: #d4d4d8;
  --gray-200: #e4e4e7;
  --gray-100: #f3f4f6;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}

.results svg {
  fill: #0369a1;
  fill: var(--gray-500);
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #0a0a0a;
  background-color: #0c4a6e;
}

html,
body {
  height: 100%;
}

header {
  font-family: 'Russo One', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  background-color: #275c7a;
  padding-block: 18px;
}

nav {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin-inline: auto;
}

main {
  height: 100%;
  position: relative;
}

.icon {
  display: flex;
  font-size: 42px;
  align-items: center;
}

.game-title {
  color: #d9e2e8;
  font-family: Russo One;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.game {
  display: flex;
  opacity: 0;
  justify-content: center;
  padding-block: 64px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  visibility: hidden;
  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */
  transition: opacity 1s linear, visibility 0s linear 500ms;
}

.splash {
  height: 88%;
}

.splash .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-block: 200px; */
}

.splash .splash-subheading {
  color: #84a5b8;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 24px;
}

.turn {
  display: flex;
  border-radius: 34px;
  background: #d9d9d9;
  color: #999;
  width: fit-content;
  font-family: Russo One;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  overflow: hidden;
  margin-bottom: 80px;
  margin-inline: auto;
  padding: 4px;
}

.turn > * {
  border-radius: 34px;
  padding-block: 14px;
  padding-inline: 48px;
}

.player-X.playing {
  background: #fa8a2f;
  color: #fbedde;
  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.player-O.playing {
  background: #308dfe;
  color: #fbedde;
  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.player-O {
  /* background: #fa8a2f; */
  /* color: #fbedde; */
}

.box {
  width: 130px;
  height: 130px;
  border-radius: 13px;
  background: #ebf3f7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: hsl(0, 0%, 0%) 0px 2px 5px -1px, hsl(0, 0%, 0%) 0px 1px 3px -1px;
}

.box h2 {
  font-size: 96px;
}

.box:not(.col-3) {
  margin-right: 24px;
  /* border-right: 2px solid var(--gray-600); */
}

.game-board > *:not(.row-3) {
  margin-bottom: 24px;
  /* border-bottom: 2px solid var(--gray-500); */
}

.X,
.icon-X {
  color: #fb923c;
}

.O,
.icon-O {
  color: #60a5fa;
}

h1 {
  font-size: clamp(2.07rem, calc(1.73rem + 1.7vw), 3.05rem);
  color: var(--gray-900);
  font-weight: 700;
}

h3 {
  font-weight: 500;
}

.game-board {
  width: fit-content;
  margin-bottom: 60px;
  margin-inline: auto;
}

header button {
  background: transparent;
  font-size: 32px;
  cursor: pointer;
}

header svg {
  fill: #84a5b8;
}

button:hover {
  transform: scale(1.03);
}

.game-board > * {
  display: flex;
}

.status {
  padding-block: 24px;
  padding-inline: 24px;
  background: var(--gray-100);
  width: 250px;
  /* box-shadow: 0 4px 6px hsla(0, 0%, 0.2); */
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15);
}

.status h3 {
  font-weight: 500;
  font-size: 22px;
  color: var(--gray-700);
}

.status h4 {
  color: var(--gray-900);
  font-size: 18px;
}

.status-win-count {
  margin-bottom: 4px;
}

.status-draw {
  margin-top: 8px;
}
.status {
  font-weight: normal;
  margin-bottom: 32px;
}

.results {
  display: flex;
  justify-content: space-between;
  max-width: 250px;
}
.results > * {
  font-size: 20px;
}

.score {
  display: flex;
  border-radius: 14px;
  background: #d9d9d9;
  overflow: hidden;
  font-family: Roboto;
  box-shadow: hsla(0, 0%, 0%, 0.8) 0px 2px 5px -1px,
    hsla(0, 0%, 0%, 0.8) 0px 1px 3px -1px;
}

.score > * {
  background: lightgray;
  padding-inline: 24px;
  padding-block: 20px;
  min-width: 150px;
  text-align: center;
}

.score-X {
  background: rgba(48, 141, 254, 0.57);
}

.score-O {
  background: rgba(250, 138, 47, 0.62);
}

.score h3 {
  color: #444242;
  font-size: 18px;
  margin-bottom: 6px;
}

.score h2 {
  color: #373636;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}

.splash h4 {
  color: #84a5b8;
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 132px;
}

.splash a {
  color: hsla(0, 0%, 100%, 1);
  font-family: 'russo one';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.splash a:hover {
  cursor: pointer;
}

.slider-label input {
  display: none;
}

/* Styles for the human-bot slider */
.slider-label {
  position: relative;
  display: inline-block;
  border-radius: 33px;
  background: #d9d9d9;
  color: #999;
  font-family: Russo One;
  font-size: 28px;
  height: 62px;
}

.slider-1 {
  width: 400px;
}

.slider-2 {
  width: 200px;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #ccc;
  /* width: 200px; */
  transition: 0.4s;
}

.slider:before {
  background-color: #fbfcfc;
  position: absolute;
  content: '';

  height: 54px;
  width: 200px;
  left: 4px;
  top: 4px;
  border-radius: 33px;
  transition: 0.4s;
}

.label-human,
.label-bot,
.label-X,
.label-O {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  text-align: center;
}

.label-bot,
.label-O {
  right: 0;
}

.label-human {
  color: #4b4948;
}

input:checked ~ .label-human {
  color: #999;
}

input:checked ~ .label-bot {
  color: #4b4948;
}

input:checked + .slider:before {
  transform: translateX(190px);
}

.slider-label:first-of-type {
  margin-bottom: 78px;
}

.slider-label {
  margin-bottom: 32px;
}

/* Slider 2 styles  */
.slider-2 .slider:before {
  width: 50%;
  background: #fa8a2f;
}

.slider-2 input:checked ~ .slider:before {
  background: #60a5fa;
  transform: translateX(90px);
}

.slider-2 input:checked ~ .label-O {
  color: #fbedde;
}

.slider-2 input:checked ~ .label-X {
  color: #999;
}

.label-X {
  color: #fbedde;
}

/* Win state styles */

.win {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -200px;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(28, 28, 28, 0.82);
  transition: visibility 5s, opacity 5s;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */

  visibility: hidden;
  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */
  transition: opacity 1s linear, visibility 0s linear 500ms;
}

.win h1 {
  color: #fff;
  font-family: Russo One;
  font-size: 128px;
  margin-bottom: 32px;
}

.win p {
  color: #bfc7ca;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.hide {
  display: none;
  visibility: hidden;
  transition: visibility 5s, opacity 5s;
  /* visibility: hidden; */
  opacity: 0;
}

.box--show {
  opacity: 1;
  visibility: visible;
  /* the shown box does not delay visibility, so it shows instantly and transitions opacity */
  transition: opacity 1s linear, visibility 0s linear;
}

.hello {
  color: red;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --gray-50: #fafafa;\n  --gray-400: #d4d4d8;\n  --gray-500: #6b7280;\n  --gray-600: #4b5563;\n  --gray-300: #d4d4d8;\n  --gray-200: #e4e4e7;\n  --gray-100: #f3f4f6;\n  --gray-700: #374151;\n  --gray-800: #1f2937;\n  --gray-900: #111827;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n.results svg {\n  fill: #0369a1;\n  fill: var(--gray-500);\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: #0a0a0a;\n  background-color: #0c4a6e;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nheader {\n  font-family: 'Russo One', system-ui, -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n    sans-serif;\n  background-color: #275c7a;\n  padding-block: 18px;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\nmain {\n  height: 100%;\n  position: relative;\n}\n\n.icon {\n  display: flex;\n  font-size: 42px;\n  align-items: center;\n}\n\n.game-title {\n  color: #d9e2e8;\n  font-family: Russo One;\n  font-size: 72px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.game {\n  display: flex;\n  opacity: 0;\n  justify-content: center;\n  padding-block: 64px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n\n  visibility: hidden;\n  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */\n  transition: opacity 1s linear, visibility 0s linear 500ms;\n}\n\n.splash {\n  height: 88%;\n}\n\n.splash .container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* padding-block: 200px; */\n}\n\n.splash .splash-subheading {\n  color: #84a5b8;\n  font-family: Roboto;\n  font-size: 20px;\n  font-weight: normal;\n  margin-bottom: 24px;\n}\n\n.turn {\n  display: flex;\n  border-radius: 34px;\n  background: #d9d9d9;\n  color: #999;\n  width: fit-content;\n  font-family: Russo One;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  align-items: center;\n  overflow: hidden;\n  margin-bottom: 80px;\n  margin-inline: auto;\n  padding: 4px;\n}\n\n.turn > * {\n  border-radius: 34px;\n  padding-block: 14px;\n  padding-inline: 48px;\n}\n\n.player-X.playing {\n  background: #fa8a2f;\n  color: #fbedde;\n  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.player-O.playing {\n  background: #308dfe;\n  color: #fbedde;\n  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.player-O {\n  /* background: #fa8a2f; */\n  /* color: #fbedde; */\n}\n\n.box {\n  width: 130px;\n  height: 130px;\n  border-radius: 13px;\n  background: #ebf3f7;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: hsl(0, 0%, 0%) 0px 2px 5px -1px, hsl(0, 0%, 0%) 0px 1px 3px -1px;\n}\n\n.box h2 {\n  font-size: 96px;\n}\n\n.box:not(.col-3) {\n  margin-right: 24px;\n  /* border-right: 2px solid var(--gray-600); */\n}\n\n.game-board > *:not(.row-3) {\n  margin-bottom: 24px;\n  /* border-bottom: 2px solid var(--gray-500); */\n}\n\n.X,\n.icon-X {\n  color: #fb923c;\n}\n\n.O,\n.icon-O {\n  color: #60a5fa;\n}\n\nh1 {\n  font-size: clamp(2.07rem, calc(1.73rem + 1.7vw), 3.05rem);\n  color: var(--gray-900);\n  font-weight: 700;\n}\n\nh3 {\n  font-weight: 500;\n}\n\n.game-board {\n  width: fit-content;\n  margin-bottom: 60px;\n  margin-inline: auto;\n}\n\nheader button {\n  background: transparent;\n  font-size: 32px;\n  cursor: pointer;\n}\n\nheader svg {\n  fill: #84a5b8;\n}\n\nbutton:hover {\n  transform: scale(1.03);\n}\n\n.game-board > * {\n  display: flex;\n}\n\n.status {\n  padding-block: 24px;\n  padding-inline: 24px;\n  background: var(--gray-100);\n  width: 250px;\n  /* box-shadow: 0 4px 6px hsla(0, 0%, 0.2); */\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15);\n}\n\n.status h3 {\n  font-weight: 500;\n  font-size: 22px;\n  color: var(--gray-700);\n}\n\n.status h4 {\n  color: var(--gray-900);\n  font-size: 18px;\n}\n\n.status-win-count {\n  margin-bottom: 4px;\n}\n\n.status-draw {\n  margin-top: 8px;\n}\n.status {\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n\n.results {\n  display: flex;\n  justify-content: space-between;\n  max-width: 250px;\n}\n.results > * {\n  font-size: 20px;\n}\n\n.score {\n  display: flex;\n  border-radius: 14px;\n  background: #d9d9d9;\n  overflow: hidden;\n  font-family: Roboto;\n  box-shadow: hsla(0, 0%, 0%, 0.8) 0px 2px 5px -1px,\n    hsla(0, 0%, 0%, 0.8) 0px 1px 3px -1px;\n}\n\n.score > * {\n  background: lightgray;\n  padding-inline: 24px;\n  padding-block: 20px;\n  min-width: 150px;\n  text-align: center;\n}\n\n.score-X {\n  background: rgba(48, 141, 254, 0.57);\n}\n\n.score-O {\n  background: rgba(250, 138, 47, 0.62);\n}\n\n.score h3 {\n  color: #444242;\n  font-size: 18px;\n  margin-bottom: 6px;\n}\n\n.score h2 {\n  color: #373636;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.splash h4 {\n  color: #84a5b8;\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 20px;\n  margin-bottom: 132px;\n}\n\n.splash a {\n  color: hsla(0, 0%, 100%, 1);\n  font-family: 'russo one';\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.splash a:hover {\n  cursor: pointer;\n}\n\n.slider-label input {\n  display: none;\n}\n\n/* Styles for the human-bot slider */\n.slider-label {\n  position: relative;\n  display: inline-block;\n  border-radius: 33px;\n  background: #d9d9d9;\n  color: #999;\n  font-family: Russo One;\n  font-size: 28px;\n  height: 62px;\n}\n\n.slider-1 {\n  width: 400px;\n}\n\n.slider-2 {\n  width: 200px;\n}\n\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 34px;\n  background-color: #ccc;\n  /* width: 200px; */\n  transition: 0.4s;\n}\n\n.slider:before {\n  background-color: #fbfcfc;\n  position: absolute;\n  content: '';\n\n  height: 54px;\n  width: 200px;\n  left: 4px;\n  top: 4px;\n  border-radius: 33px;\n  transition: 0.4s;\n}\n\n.label-human,\n.label-bot,\n.label-X,\n.label-O {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 50%;\n  text-align: center;\n}\n\n.label-bot,\n.label-O {\n  right: 0;\n}\n\n.label-human {\n  color: #4b4948;\n}\n\ninput:checked ~ .label-human {\n  color: #999;\n}\n\ninput:checked ~ .label-bot {\n  color: #4b4948;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(190px);\n}\n\n.slider-label:first-of-type {\n  margin-bottom: 78px;\n}\n\n.slider-label {\n  margin-bottom: 32px;\n}\n\n/* Slider 2 styles  */\n.slider-2 .slider:before {\n  width: 50%;\n  background: #fa8a2f;\n}\n\n.slider-2 input:checked ~ .slider:before {\n  background: #60a5fa;\n  transform: translateX(90px);\n}\n\n.slider-2 input:checked ~ .label-O {\n  color: #fbedde;\n}\n\n.slider-2 input:checked ~ .label-X {\n  color: #999;\n}\n\n.label-X {\n  color: #fbedde;\n}\n\n/* Win state styles */\n\n.win {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -200px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(28, 28, 28, 0.82);\n  transition: visibility 5s, opacity 5s;\n  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */\n\n  visibility: hidden;\n  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */\n  transition: opacity 1s linear, visibility 0s linear 500ms;\n}\n\n.win h1 {\n  color: #fff;\n  font-family: Russo One;\n  font-size: 128px;\n  margin-bottom: 32px;\n}\n\n.win p {\n  color: #bfc7ca;\n  font-family: Roboto;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: normal;\n  text-align: center;\n}\n\n.hide {\n  display: none;\n  visibility: hidden;\n  transition: visibility 5s, opacity 5s;\n  /* visibility: hidden; */\n  opacity: 0;\n}\n\n.box--show {\n  opacity: 1;\n  visibility: visible;\n  /* the shown box does not delay visibility, so it shows instantly and transitions opacity */\n  transition: opacity 1s linear, visibility 0s linear;\n}\n\n.hello {\n  color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


cosnole.log("Yeah, I got loaded");

function SplashScreen() {
  /* splash model */
  const settings = {
    opponent: playerType.HUMAN,
    names: { player1: 'king', player2: 'frank' },
    player1Move: 'X',
    player2Move: 'O',
  };

  const humanBotToggle = document.getElementById('human-bot-toggle');
  const xoToggle = document.getElementById('X-O-toggle');

  humanBotToggle.addEventListener('change', () => {
    if (humanBotToggle.checked) {
      settings.opponent = playerType.BOT;
      settings.names.player2 = playerType.BOT;
    }
  });

  xoToggle.addEventListener('change', () => {
    if (xoToggle.checked) {
      settings.player1Move = 'O';
      settings.player2Move = 'X';
    } else {
      settings.player1Move = 'X';
      settings.player2Move = 'O';
    }
  });

  player1 = player(
    settings.names.player1,
    settings.player1Move,
    playerType.HUMAN
  );

  player2 = player(
    settings.names.player2,
    settings.player2Move,
    settings.opponent
  );

  let players = [player1, player2];

  /* To-Do: make sure the game is starting */
  const start = () => {
    const _splash = document.querySelector('.splash');
    const _game = document.querySelector('.game');
    _splash.classList.add('hide');
    _game.classList.add('box--show');
  };

  let activePlayer = players[0];
}

function GameScreen() {
  let _results = document.querySelector('.results');
  let _restartButton = document.querySelector('#restart');
  let _turnX = document.querySelector('.player-X');
  let _turnO = document.querySelector('.player-O');
  const _boxes = document.querySelectorAll('.box');

  const turn = (move) => {
    if (move == 'X') {
      _turnO.classList.add('playing');
      _turnX.classList.remove('playing');
    } else {
      _turnO.classList.remove('playing');
      _turnX.classList.add('playing');
    }
  };

  const getIndex = (box) => {
    const id = box.getAttribute('id');
    return parseInt(id) - 1;
  };

  const placeMove = (box, move) => {
    box.innerHTML = `<h2 class="${move}">${move}</h2>`;
  };

  const updateScores = () => {};

  const changeTurn = () => {};

  const restart = () => {
    _restartButton.addEventListener('click', function () {
      /* show that it's X turn  */
      turn('O');
      _boxes.forEach((box) => {
        box.innerHTML = '<h2></h2>';
      });
      _results.classList.add('hide');
    });
  };
}

function GameEndScreen() {
  const endGameScreen = document.querySelector('#win');

  function restartGame() {}

  endGameScreen.addEventListener('click', () => {
    endGameScreen.classList.remove('box--show');
  });
  endGameScreen.addEventListener('keypress', (event) => {
    console.log(event);
  });
}

function ScreenController() {
  let _winner = document.querySelector('#win');
  let winner = document.getElementsByClassName('winner');
  let _endGameScreen = document.querySelector('.win');

  const run = () => {
    _view.restart();
    _view.boxes.forEach((box) => {
      box.addEventListener('click', function () {
        let move;
        if (_isPlayer1Turn) {
          move = 'X';
          _view.turn(move);
        } else {
          move = 'O';
          _view.turn(move);
        }
        const index = _view.getIndex(box);
        if (placeMove(move, index) == -1) return;

        _view.placeMove(box, move);
        /* TODO
         1. The game stop after win
        */
        _movesCount++;
        if (checkWin(move)) {
          _view.showEndgameScreen();
          gameboard.fill(0);
          _movesCount = 0;
          return;
        } else if (_movesCount === 9) {
          gameboard.fill(0);
          _movesCount = 0;
          /* game is tie */
          /* _results.classList.remove('hide'); */
          return;
        }
        _isPlayer1Turn = !_isPlayer1Turn;
      });
    });
  };

  const showEndgameScreen = () => {
    _results.classList.remove('hide');
    _endGameScreen.classList.add('box--show');
  };

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  return {}; 
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGdDQUFnQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsR0FBRyxP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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLEtBQUssSUFBSSxLQUFLO0FBQ2hEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWdyYXktNTA6ICNmYWZhZmE7XG4gIC0tZ3JheS00MDA6ICNkNGQ0ZDg7XG4gIC0tZ3JheS01MDA6ICM2YjcyODA7XG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XG4gIC0tZ3JheS0zMDA6ICNkNGQ0ZDg7XG4gIC0tZ3JheS0yMDA6ICNlNGU0ZTc7XG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XG4gIC0tZ3JheS03MDA6ICMzNzQxNTE7XG4gIC0tZ3JheS04MDA6ICMxZjI5Mzc7XG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLnJlc3VsdHMgc3ZnIHtcbiAgZmlsbDogIzAzNjlhMTtcbiAgZmlsbDogdmFyKC0tZ3JheS01MDApO1xufVxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NWM3YTtcbiAgcGFkZGluZy1ibG9jazogMThweDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdGl0bGUge1xuICBjb2xvcjogI2Q5ZTJlODtcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYmxvY2s6IDY0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcbn1cblxuLnNwbGFzaCB7XG4gIGhlaWdodDogODglO1xufVxuXG4uc3BsYXNoIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBwYWRkaW5nLWJsb2NrOiAyMDBweDsgKi9cbn1cblxuLnNwbGFzaCAuc3BsYXNoLXN1YmhlYWRpbmcge1xuICBjb2xvcjogIzg0YTViODtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4udHVybiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIGNvbG9yOiAjOTk5O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi50dXJuID4gKiB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XG4gIHBhZGRpbmctaW5saW5lOiA0OHB4O1xufVxuXG4ucGxheWVyLVgucGxheWluZyB7XG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XG4gIGNvbG9yOiAjZmJlZGRlO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4ucGxheWVyLU8ucGxheWluZyB7XG4gIGJhY2tncm91bmQ6ICMzMDhkZmU7XG4gIGNvbG9yOiAjZmJlZGRlO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4ucGxheWVyLU8ge1xuICAvKiBiYWNrZ3JvdW5kOiAjZmE4YTJmOyAqL1xuICAvKiBjb2xvcjogI2ZiZWRkZTsgKi9cbn1cblxuLmJveCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogI2ViZjNmNztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiBoc2woMCwgMCUsIDAlKSAwcHggMnB4IDVweCAtMXB4LCBoc2woMCwgMCUsIDAlKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4uYm94IGgyIHtcbiAgZm9udC1zaXplOiA5NnB4O1xufVxuXG4uYm94Om5vdCguY29sLTMpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAvKiBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTYwMCk7ICovXG59XG5cbi5nYW1lLWJvYXJkID4gKjpub3QoLnJvdy0zKSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmF5LTUwMCk7ICovXG59XG5cbi5YLFxuLmljb24tWCB7XG4gIGNvbG9yOiAjZmI5MjNjO1xufVxuXG4uTyxcbi5pY29uLU8ge1xuICBjb2xvcjogIzYwYTVmYTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgMy4wNXJlbSk7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmdhbWUtYm9hcmQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmhlYWRlciBzdmcge1xuICBmaWxsOiAjODRhNWI4O1xufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uZ2FtZS1ib2FyZCA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhdHVzIHtcbiAgcGFkZGluZy1ibG9jazogMjRweDtcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcbiAgd2lkdGg6IDI1MHB4O1xuICAvKiBib3gtc2hhZG93OiAwIDRweCA2cHggaHNsYSgwLCAwJSwgMC4yKTsgKi9cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5zdGF0dXMgaDMge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XG59XG5cbi5zdGF0dXMgaDQge1xuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zdGF0dXMtd2luLWNvdW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc3RhdHVzLWRyYXcge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uc3RhdHVzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnJlc3VsdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG4ucmVzdWx0cyA+ICoge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zY29yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGJveC1zaGFkb3c6IGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAycHggNXB4IC0xcHgsXG4gICAgaHNsYSgwLCAwJSwgMCUsIDAuOCkgMHB4IDFweCAzcHggLTFweDtcbn1cblxuLnNjb3JlID4gKiB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjb3JlLVgge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ4LCAxNDEsIDI1NCwgMC41Nyk7XG59XG5cbi5zY29yZS1PIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDEzOCwgNDcsIDAuNjIpO1xufVxuXG4uc2NvcmUgaDMge1xuICBjb2xvcjogIzQ0NDI0MjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zY29yZSBoMiB7XG4gIGNvbG9yOiAjMzczNjM2O1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNwbGFzaCBoNCB7XG4gIGNvbG9yOiAjODRhNWI4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEzMnB4O1xufVxuXG4uc3BsYXNoIGEge1xuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XG4gIGZvbnQtZmFtaWx5OiAncnVzc28gb25lJztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5zcGxhc2ggYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlci1sYWJlbCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBmb3IgdGhlIGh1bWFuLWJvdCBzbGlkZXIgKi9cbi5zbGlkZXItbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuXG4uc2xpZGVyLTEge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5zbGlkZXItMiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAvKiB3aWR0aDogMjAwcHg7ICovXG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmNmYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcblxuICBoZWlnaHQ6IDU0cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmxhYmVsLWh1bWFuLFxuLmxhYmVsLWJvdCxcbi5sYWJlbC1YLFxuLmxhYmVsLU8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhYmVsLWJvdCxcbi5sYWJlbC1PIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sYWJlbC1odW1hbiB7XG4gIGNvbG9yOiAjNGI0OTQ4O1xufVxuXG5pbnB1dDpjaGVja2VkIH4gLmxhYmVsLWh1bWFuIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmlucHV0OmNoZWNrZWQgfiAubGFiZWwtYm90IHtcbiAgY29sb3I6ICM0YjQ5NDg7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOTBweCk7XG59XG5cbi5zbGlkZXItbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDc4cHg7XG59XG5cbi5zbGlkZXItbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4vKiBTbGlkZXIgMiBzdHlsZXMgICovXG4uc2xpZGVyLTIgLnNsaWRlcjpiZWZvcmUge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmE4YTJmO1xufVxuXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5zbGlkZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzYwYTVmYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpO1xufVxuXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1PIHtcbiAgY29sb3I6ICNmYmVkZGU7XG59XG5cbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLVgge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmxhYmVsLVgge1xuICBjb2xvcjogI2ZiZWRkZTtcbn1cblxuLyogV2luIHN0YXRlIHN0eWxlcyAqL1xuXG4ud2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjAwcHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAyOCwgMC44Mik7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNXMsIG9wYWNpdHkgNXM7XG4gIC8qIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAqL1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcbn1cblxuLndpbiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUnVzc28gT25lO1xuICBmb250LXNpemU6IDEyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ud2luIHAge1xuICBjb2xvcjogI2JmYzdjYTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDVzLCBvcGFjaXR5IDVzO1xuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gIG9wYWNpdHk6IDA7XG59XG5cbi5ib3gtLXNob3cge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAvKiB0aGUgc2hvd24gYm94IGRvZXMgbm90IGRlbGF5IHZpc2liaWxpdHksIHNvIGl0IHNob3dzIGluc3RhbnRseSBhbmQgdHJhbnNpdGlvbnMgb3BhY2l0eSAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXI7XG59XG5cbi5oZWxsbyB7XG4gIGNvbG9yOiByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFF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QUFtRDtBQUNyRDs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWdyYXktNTA6ICNmYWZhZmE7XFxuICAtLWdyYXktNDAwOiAjZDRkNGQ4O1xcbiAgLS1ncmF5LTUwMDogIzZiNzI4MDtcXG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XFxuICAtLWdyYXktMzAwOiAjZDRkNGQ4O1xcbiAgLS1ncmF5LTIwMDogI2U0ZTRlNztcXG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XFxuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xcbiAgLS1ncmF5LTgwMDogIzFmMjkzNztcXG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnJlc3VsdHMgc3ZnIHtcXG4gIGZpbGw6ICMwMzY5YTE7XFxuICBmaWxsOiB2YXIoLS1ncmF5LTUwMCk7XFxufVxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUnVzc28gT25lJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1YzdhO1xcbiAgcGFkZGluZy1ibG9jazogMThweDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgY29sb3I6ICNkOWUyZTg7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zaXplOiA3MnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcGFjaXR5OiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJsb2NrOiA2NHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXIgNTAwbXM7XFxufVxcblxcbi5zcGxhc2gge1xcbiAgaGVpZ2h0OiA4OCU7XFxufVxcblxcbi5zcGxhc2ggLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIHBhZGRpbmctYmxvY2s6IDIwMHB4OyAqL1xcbn1cXG5cXG4uc3BsYXNoIC5zcGxhc2gtc3ViaGVhZGluZyB7XFxuICBjb2xvcjogIzg0YTViODtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLnR1cm4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcbiAgY29sb3I6ICM5OTk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4udHVybiA+ICoge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XFxuICBwYWRkaW5nLWlubGluZTogNDhweDtcXG59XFxuXFxuLnBsYXllci1YLnBsYXlpbmcge1xcbiAgYmFja2dyb3VuZDogI2ZhOGEyZjtcXG4gIGNvbG9yOiAjZmJlZGRlO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDBweCAycHggNHB4IDBweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxufVxcblxcbi5wbGF5ZXItTy5wbGF5aW5nIHtcXG4gIGJhY2tncm91bmQ6ICMzMDhkZmU7XFxuICBjb2xvcjogI2ZiZWRkZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC40KSAwcHggMnB4IDRweCAwcHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xcbn1cXG5cXG4ucGxheWVyLU8ge1xcbiAgLyogYmFja2dyb3VuZDogI2ZhOGEyZjsgKi9cXG4gIC8qIGNvbG9yOiAjZmJlZGRlOyAqL1xcbn1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgYmFja2dyb3VuZDogI2ViZjNmNztcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaHNsKDAsIDAlLCAwJSkgMHB4IDJweCA1cHggLTFweCwgaHNsKDAsIDAlLCAwJSkgMHB4IDFweCAzcHggLTFweDtcXG59XFxuXFxuLmJveCBoMiB7XFxuICBmb250LXNpemU6IDk2cHg7XFxufVxcblxcbi5ib3g6bm90KC5jb2wtMykge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbiAgLyogYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tZ3JheS02MDApOyAqL1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCA+ICo6bm90KC5yb3ctMykge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmF5LTUwMCk7ICovXFxufVxcblxcbi5YLFxcbi5pY29uLVgge1xcbiAgY29sb3I6ICNmYjkyM2M7XFxufVxcblxcbi5PLFxcbi5pY29uLU8ge1xcbiAgY29sb3I6ICM2MGE1ZmE7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzLjA1cmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIHN2ZyB7XFxuICBmaWxsOiAjODRhNWI4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLmdhbWUtYm9hcmQgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgcGFkZGluZy1ibG9jazogMjRweDtcXG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgLyogYm94LXNoYWRvdzogMCA0cHggNnB4IGhzbGEoMCwgMCUsIDAuMik7ICovXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4uc3RhdHVzIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xcbn1cXG5cXG4uc3RhdHVzIGg0IHtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5zdGF0dXMtd2luLWNvdW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLnN0YXR1cy1kcmF3IHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLnN0YXR1cyB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcbi5yZXN1bHRzID4gKiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zY29yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGJveC1zaGFkb3c6IGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAycHggNXB4IC0xcHgsXFxuICAgIGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAxcHggM3B4IC0xcHg7XFxufVxcblxcbi5zY29yZSA+ICoge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XFxuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNjb3JlLVgge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0OCwgMTQxLCAyNTQsIDAuNTcpO1xcbn1cXG5cXG4uc2NvcmUtTyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTM4LCA0NywgMC42Mik7XFxufVxcblxcbi5zY29yZSBoMyB7XFxuICBjb2xvcjogIzQ0NDI0MjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuXFxuLnNjb3JlIGgyIHtcXG4gIGNvbG9yOiAjMzczNjM2O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNwbGFzaCBoNCB7XFxuICBjb2xvcjogIzg0YTViODtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTMycHg7XFxufVxcblxcbi5zcGxhc2ggYSB7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XFxuICBmb250LWZhbWlseTogJ3J1c3NvIG9uZSc7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwbGFzaCBhOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlci1sYWJlbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHRoZSBodW1hbi1ib3Qgc2xpZGVyICovXFxuLnNsaWRlci1sYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAzM3B4O1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGhlaWdodDogNjJweDtcXG59XFxuXFxuLnNsaWRlci0xIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnNsaWRlci0yIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZjZmM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG5cXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGxlZnQ6IDRweDtcXG4gIHRvcDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5sYWJlbC1odW1hbixcXG4ubGFiZWwtYm90LFxcbi5sYWJlbC1YLFxcbi5sYWJlbC1PIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxhYmVsLWJvdCxcXG4ubGFiZWwtTyB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmxhYmVsLWh1bWFuIHtcXG4gIGNvbG9yOiAjNGI0OTQ4O1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkIH4gLmxhYmVsLWh1bWFuIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkIH4gLmxhYmVsLWJvdCB7XFxuICBjb2xvcjogIzRiNDk0ODtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOTBweCk7XFxufVxcblxcbi5zbGlkZXItbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiA3OHB4O1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi8qIFNsaWRlciAyIHN0eWxlcyAgKi9cXG4uc2xpZGVyLTIgLnNsaWRlcjpiZWZvcmUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XFxufVxcblxcbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLnNsaWRlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzYwYTVmYTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KTtcXG59XFxuXFxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAubGFiZWwtTyB7XFxuICBjb2xvcjogI2ZiZWRkZTtcXG59XFxuXFxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAubGFiZWwtWCB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLmxhYmVsLVgge1xcbiAgY29sb3I6ICNmYmVkZGU7XFxufVxcblxcbi8qIFdpbiBzdGF0ZSBzdHlsZXMgKi9cXG5cXG4ud2luIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yMDBweDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAyOCwgMC44Mik7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDVzLCBvcGFjaXR5IDVzO1xcbiAgLyogYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICovXFxuXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAvKiB0aGUgbm9ybWFsIGJveCBkZWxheXMgdmlzaWJpbGl0eSB0cmFuc2l0aW9uIHNvIGl0IGRvZXNuJ3QgaGlkZSB1bnRpbCBhZnRlciB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIGRvbmUgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcXG59XFxuXFxuLndpbiBoMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XFxuICBmb250LXNpemU6IDEyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLndpbiBwIHtcXG4gIGNvbG9yOiAjYmZjN2NhO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1cywgb3BhY2l0eSA1cztcXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5ib3gtLXNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAvKiB0aGUgc2hvd24gYm94IGRvZXMgbm90IGRlbGF5IHZpc2liaWxpdHksIHNvIGl0IHNob3dzIGluc3RhbnRseSBhbmQgdHJhbnNpdGlvbnMgb3BhY2l0eSAqL1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb3Nub2xlLmxvZyhcIlllYWgsIEkgZ290IGxvYWRlZFwiKTtcblxuZnVuY3Rpb24gU3BsYXNoU2NyZWVuKCkge1xuICAvKiBzcGxhc2ggbW9kZWwgKi9cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgb3Bwb25lbnQ6IHBsYXllclR5cGUuSFVNQU4sXG4gICAgbmFtZXM6IHsgcGxheWVyMTogJ2tpbmcnLCBwbGF5ZXIyOiAnZnJhbmsnIH0sXG4gICAgcGxheWVyMU1vdmU6ICdYJyxcbiAgICBwbGF5ZXIyTW92ZTogJ08nLFxuICB9O1xuXG4gIGNvbnN0IGh1bWFuQm90VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWJvdC10b2dnbGUnKTtcbiAgY29uc3QgeG9Ub2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnWC1PLXRvZ2dsZScpO1xuXG4gIGh1bWFuQm90VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoaHVtYW5Cb3RUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgc2V0dGluZ3Mub3Bwb25lbnQgPSBwbGF5ZXJUeXBlLkJPVDtcbiAgICAgIHNldHRpbmdzLm5hbWVzLnBsYXllcjIgPSBwbGF5ZXJUeXBlLkJPVDtcbiAgICB9XG4gIH0pO1xuXG4gIHhvVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoeG9Ub2dnbGUuY2hlY2tlZCkge1xuICAgICAgc2V0dGluZ3MucGxheWVyMU1vdmUgPSAnTyc7XG4gICAgICBzZXR0aW5ncy5wbGF5ZXIyTW92ZSA9ICdYJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0dGluZ3MucGxheWVyMU1vdmUgPSAnWCc7XG4gICAgICBzZXR0aW5ncy5wbGF5ZXIyTW92ZSA9ICdPJztcbiAgICB9XG4gIH0pO1xuXG4gIHBsYXllcjEgPSBwbGF5ZXIoXG4gICAgc2V0dGluZ3MubmFtZXMucGxheWVyMSxcbiAgICBzZXR0aW5ncy5wbGF5ZXIxTW92ZSxcbiAgICBwbGF5ZXJUeXBlLkhVTUFOXG4gICk7XG5cbiAgcGxheWVyMiA9IHBsYXllcihcbiAgICBzZXR0aW5ncy5uYW1lcy5wbGF5ZXIyLFxuICAgIHNldHRpbmdzLnBsYXllcjJNb3ZlLFxuICAgIHNldHRpbmdzLm9wcG9uZW50XG4gICk7XG5cbiAgbGV0IHBsYXllcnMgPSBbcGxheWVyMSwgcGxheWVyMl07XG5cbiAgLyogVG8tRG86IG1ha2Ugc3VyZSB0aGUgZ2FtZSBpcyBzdGFydGluZyAqL1xuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBfc3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwbGFzaCcpO1xuICAgIGNvbnN0IF9nYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgICBfc3BsYXNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBfZ2FtZS5jbGFzc0xpc3QuYWRkKCdib3gtLXNob3cnKTtcbiAgfTtcblxuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcbn1cblxuZnVuY3Rpb24gR2FtZVNjcmVlbigpIHtcbiAgbGV0IF9yZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKTtcbiAgbGV0IF9yZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQnKTtcbiAgbGV0IF90dXJuWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItWCcpO1xuICBsZXQgX3R1cm5PID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1PJyk7XG4gIGNvbnN0IF9ib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcblxuICBjb25zdCB0dXJuID0gKG1vdmUpID0+IHtcbiAgICBpZiAobW92ZSA9PSAnWCcpIHtcbiAgICAgIF90dXJuTy5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgICBfdHVyblguY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdHVybk8uY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgICAgX3R1cm5YLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5kZXggPSAoYm94KSA9PiB7XG4gICAgY29uc3QgaWQgPSBib3guZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHJldHVybiBwYXJzZUludChpZCkgLSAxO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlTW92ZSA9IChib3gsIG1vdmUpID0+IHtcbiAgICBib3guaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cIiR7bW92ZX1cIj4ke21vdmV9PC9oMj5gO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAoKSA9PiB7fTtcblxuICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIF9yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgLyogc2hvdyB0aGF0IGl0J3MgWCB0dXJuICAqL1xuICAgICAgdHVybignTycpO1xuICAgICAgX2JveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBib3guaW5uZXJIVE1MID0gJzxoMj48L2gyPic7XG4gICAgICB9KTtcbiAgICAgIF9yZXN1bHRzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZUVuZFNjcmVlbigpIHtcbiAgY29uc3QgZW5kR2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW4nKTtcblxuICBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHt9XG5cbiAgZW5kR2FtZVNjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbmRHYW1lU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2JveC0tc2hvdycpO1xuICB9KTtcbiAgZW5kR2FtZVNjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIoKSB7XG4gIGxldCBfd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbicpO1xuICBsZXQgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2lubmVyJyk7XG4gIGxldCBfZW5kR2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4nKTtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgX3ZpZXcucmVzdGFydCgpO1xuICAgIF92aWV3LmJveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbW92ZTtcbiAgICAgICAgaWYgKF9pc1BsYXllcjFUdXJuKSB7XG4gICAgICAgICAgbW92ZSA9ICdYJztcbiAgICAgICAgICBfdmlldy50dXJuKG1vdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmUgPSAnTyc7XG4gICAgICAgICAgX3ZpZXcudHVybihtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IF92aWV3LmdldEluZGV4KGJveCk7XG4gICAgICAgIGlmIChwbGFjZU1vdmUobW92ZSwgaW5kZXgpID09IC0xKSByZXR1cm47XG5cbiAgICAgICAgX3ZpZXcucGxhY2VNb3ZlKGJveCwgbW92ZSk7XG4gICAgICAgIC8qIFRPRE9cbiAgICAgICAgIDEuIFRoZSBnYW1lIHN0b3AgYWZ0ZXIgd2luXG4gICAgICAgICovXG4gICAgICAgIF9tb3Zlc0NvdW50Kys7XG4gICAgICAgIGlmIChjaGVja1dpbihtb3ZlKSkge1xuICAgICAgICAgIF92aWV3LnNob3dFbmRnYW1lU2NyZWVuKCk7XG4gICAgICAgICAgZ2FtZWJvYXJkLmZpbGwoMCk7XG4gICAgICAgICAgX21vdmVzQ291bnQgPSAwO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfbW92ZXNDb3VudCA9PT0gOSkge1xuICAgICAgICAgIGdhbWVib2FyZC5maWxsKDApO1xuICAgICAgICAgIF9tb3Zlc0NvdW50ID0gMDtcbiAgICAgICAgICAvKiBnYW1lIGlzIHRpZSAqL1xuICAgICAgICAgIC8qIF9yZXN1bHRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX2lzUGxheWVyMVR1cm4gPSAhX2lzUGxheWVyMVR1cm47XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93RW5kZ2FtZVNjcmVlbiA9ICgpID0+IHtcbiAgICBfcmVzdWx0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgX2VuZEdhbWVTY3JlZW4uY2xhc3NMaXN0LmFkZCgnYm94LS1zaG93Jyk7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgfTtcbiAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuXG4gIHJldHVybiB7fTsgXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==