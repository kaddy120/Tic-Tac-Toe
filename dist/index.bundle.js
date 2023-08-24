"use strict";
(self["webpackChunktic_tac_toe"] = self["webpackChunktic_tac_toe"] || []).push([["index"],{

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
  /* color */
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

  /* fonts */

  --step--1: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);
  --step-0: clamp(0.85rem, calc(0.78rem + 0.29vw), 1rem);
  --step-1: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);
  --step-2: clamp(1.2rem, calc(1.07rem + 0.63vw), 1.5rem);
  --step-3: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.75rem);
  --step-4: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.5rem);
  --step-5: clamp(2.07rem, calc(1.73rem + 1.7vw), 3rem);

  /* lengths || spacing */

  --lgth-1: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);
  --lgth-2: clamp(0.5rem, calc(0.46rem + 0.22vw), 0.63rem);
  --lgth-3: clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem);
  --lgth-4: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);
  --lgth-5: clamp(1.5rem, calc(1.37rem + 0.65vw), 1.88rem);
  --lgth-6: clamp(2rem, calc(1.83rem + 0.87vw), 2.5rem);
  --lgth-7: clamp(3rem, calc(2.74rem + 1.3vw), 3.75rem);
  --lgth-8: clamp(4rem, calc(3.65rem + 1.74vw), 5rem);
  --lgth-9: clamp(6rem, calc(5.48rem + 2.61vw), 7.5rem);
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
  margin-inline: var(--lgth-4); /* Minimum margin for small screens */
}

@media (min-width: 1256px) {
  nav {
    margin-inline: auto; /* Let the margin grow on larger screens */
  }
}

main {
  height: 100%;
  position: relative;
}

.icon {
  display: flex;
  font-size: var(--step-4);
  align-items: center;
}

.game-title {
  color: #d9e2e8;
  font-family: Russo One;
  font-size: var(--step-5);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-inline: var(--lgth-2);
}

.game {
  display: flex;
  opacity: 0;
  justify-content: center;
  padding-block: var(--lgth-7);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: fit-content;

  visibility: hidden;
  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */
  transition: opacity 1s linear, visibility 0s linear 500ms;
}

.game .container {
  padding-inline: var(--lgth-3);
  width: 100%;
  max-width: fit-content;
  margin-inline: auto;
}

.splash {
  height: 88%;
}

.splash-option {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note {
  text-align: center;
}

.splash .container {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin-inline: auto;
  padding-block: var(--lgth-7);
  padding-inline: var(--lgth-4);
}

.splash-subheading {
  color: #84a5b8;
  font-family: Roboto;
  font-size: var(--step-2);
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
}

.form {
  padding: 38px 38px;
  margin-bottom: 64px;
  border-radius: 13px;
  background: #275c7a;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.1);
}

.form-controller + .form-controller {
  margin-top: 32px;
}

.form input[type='text'] {
  padding-inline: 16px;
  padding-block: 14px;
  max-width: 330px;
  width: 100%;
  border-radius: 6px;
  font-size: 20px;
  border-radius: 9px;
  background: #28495d;

  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  color: var(--gray-100);
}

.form input:focus {
  outline: 1.5px solid #007bff;
}

.form input::placeholder {
  color: #859ead;
}

.turn {
  display: flex;
  border-radius: 34px;
  background: #d9d9d9;
  color: #999;
  width: fit-content;
  font-family: Russo One;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  overflow: hidden;
  margin-bottom: var(--lgth-7);
  margin-inline: auto;
  padding: 4px;
}

.turn h3 {
  font-size: var(--step-2);
}

@media (max-width: 413px) {
  .turn h3 {
    font-size: var(--step-0);
  }
}

.turn > * {
  border-radius: 34px;
  padding-block: 14px;
  padding-inline: var(--lgth-6);
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
  --box-size: clamp(4.5rem, calc(-0.83rem + 26.67vw), 7.5rem);
  width: var(--box-size);
  height: var(--box-size);
  border-radius: 13px;
  background: #ebf3f7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: hsl(0, 0%, 0%) 0px 2px 5px -1px, hsl(0, 0%, 0%) 0px 1px 3px -1px;
}

.box h2 {
  font-size: clamp(4.03rem, calc(0.6rem + 17.15vw), 5.96rem);
}

.box:not(.col-3) {
  margin-right: var(--lgth-4);
}

.game-board > *:not(.row-3) {
  margin-bottom: var(--lgth-4);
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
  margin-bottom: var(--lgth-7);
  margin-inline: auto;
}

header button {
  background: transparent;
  font-size: var(--step-3);
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
  justify-content: center;
  width: 100%;
  max-width: 450px;
  border-radius: 14px;
  background: #d9d9d9;
  overflow: hidden;
  font-family: Roboto;
  box-shadow: hsla(0, 0%, 0%, 0.8) 0px 2px 5px -1px,
    hsla(0, 0%, 0%, 0.8) 0px 1px 3px -1px;
  margin-inline: auto;
}

.score > * {
  background: lightgray;
  padding-inline: 24px;
  padding-block: 20px;
  max-width: 150px;
  text-align: center;
  flex: 1;
}

.score-X {
  background: rgba(250, 138, 47, 0.62);
}

.score-O {
  background: rgba(48, 141, 254, 0.57);
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
  color: hsl(202deg 20% 55%);
  font-weight: 400;
  font-size: var(--step-0);
  margin-top: var(--lgth-3);
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
  font-size: var(--step-2);
  height: 62px;
}

.slider-1 {
  max-width: 400px;
  width: 100%;
  /* width: 400px; */
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
  width: 50%;
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
  transform: translateX(95%);
}

.splash-option {
  margin-bottom: var(--lgth-7);
}

.splash-option + .splash-option {
  margin-bottom: var(--lgth-8);
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
  font-size: clamp(3.36rem, calc(2.03rem + 6.64vw), 7.01rem);
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

.win .container {
  max-width: 1200;
  margin-inline: auto;
  padding-inline: var(--lgth-3);
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* color */\n  --gray-50: #fafafa;\n  --gray-400: #d4d4d8;\n  --gray-500: #6b7280;\n  --gray-600: #4b5563;\n  --gray-300: #d4d4d8;\n  --gray-200: #e4e4e7;\n  --gray-100: #f3f4f6;\n  --gray-700: #374151;\n  --gray-800: #1f2937;\n  --gray-900: #111827;\n\n  /* fonts */\n\n  --step--1: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);\n  --step-0: clamp(0.85rem, calc(0.78rem + 0.29vw), 1rem);\n  --step-1: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);\n  --step-2: clamp(1.2rem, calc(1.07rem + 0.63vw), 1.5rem);\n  --step-3: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.75rem);\n  --step-4: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.5rem);\n  --step-5: clamp(2.07rem, calc(1.73rem + 1.7vw), 3rem);\n\n  /* lengths || spacing */\n\n  --lgth-1: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);\n  --lgth-2: clamp(0.5rem, calc(0.46rem + 0.22vw), 0.63rem);\n  --lgth-3: clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem);\n  --lgth-4: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);\n  --lgth-5: clamp(1.5rem, calc(1.37rem + 0.65vw), 1.88rem);\n  --lgth-6: clamp(2rem, calc(1.83rem + 0.87vw), 2.5rem);\n  --lgth-7: clamp(3rem, calc(2.74rem + 1.3vw), 3.75rem);\n  --lgth-8: clamp(4rem, calc(3.65rem + 1.74vw), 5rem);\n  --lgth-9: clamp(6rem, calc(5.48rem + 2.61vw), 7.5rem);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n.results svg {\n  fill: #0369a1;\n  fill: var(--gray-500);\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: #0a0a0a;\n  background-color: #0c4a6e;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nheader {\n  font-family: 'Russo One', system-ui, -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n    sans-serif;\n  background-color: #275c7a;\n  padding-block: 18px;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1200px;\n  margin-inline: var(--lgth-4); /* Minimum margin for small screens */\n}\n\n@media (min-width: 1256px) {\n  nav {\n    margin-inline: auto; /* Let the margin grow on larger screens */\n  }\n}\n\nmain {\n  height: 100%;\n  position: relative;\n}\n\n.icon {\n  display: flex;\n  font-size: var(--step-4);\n  align-items: center;\n}\n\n.game-title {\n  color: #d9e2e8;\n  font-family: Russo One;\n  font-size: var(--step-5);\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  padding-inline: var(--lgth-2);\n}\n\n.game {\n  display: flex;\n  opacity: 0;\n  justify-content: center;\n  padding-block: var(--lgth-7);\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: fit-content;\n\n  visibility: hidden;\n  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */\n  transition: opacity 1s linear, visibility 0s linear 500ms;\n}\n\n.game .container {\n  padding-inline: var(--lgth-3);\n  width: 100%;\n  max-width: fit-content;\n  margin-inline: auto;\n}\n\n.splash {\n  height: 88%;\n}\n\n.splash-option {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.note {\n  text-align: center;\n}\n\n.splash .container {\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 400px;\n  margin-inline: auto;\n  padding-block: var(--lgth-7);\n  padding-inline: var(--lgth-4);\n}\n\n.splash-subheading {\n  color: #84a5b8;\n  font-family: Roboto;\n  font-size: var(--step-2);\n  font-weight: 700;\n  margin-bottom: 24px;\n  text-align: center;\n}\n\n.form {\n  padding: 38px 38px;\n  margin-bottom: 64px;\n  border-radius: 13px;\n  background: #275c7a;\n  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.1);\n}\n\n.form-controller + .form-controller {\n  margin-top: 32px;\n}\n\n.form input[type='text'] {\n  padding-inline: 16px;\n  padding-block: 14px;\n  max-width: 330px;\n  width: 100%;\n  border-radius: 6px;\n  font-size: 20px;\n  border-radius: 9px;\n  background: #28495d;\n\n  font-family: Roboto;\n  font-size: 22px;\n  font-weight: 500;\n  color: var(--gray-100);\n}\n\n.form input:focus {\n  outline: 1.5px solid #007bff;\n}\n\n.form input::placeholder {\n  color: #859ead;\n}\n\n.turn {\n  display: flex;\n  border-radius: 34px;\n  background: #d9d9d9;\n  color: #999;\n  width: fit-content;\n  font-family: Russo One;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  align-items: center;\n  overflow: hidden;\n  margin-bottom: var(--lgth-7);\n  margin-inline: auto;\n  padding: 4px;\n}\n\n.turn h3 {\n  font-size: var(--step-2);\n}\n\n@media (max-width: 413px) {\n  .turn h3 {\n    font-size: var(--step-0);\n  }\n}\n\n.turn > * {\n  border-radius: 34px;\n  padding-block: 14px;\n  padding-inline: var(--lgth-6);\n}\n\n.player-X.playing {\n  background: #fa8a2f;\n  color: #fbedde;\n  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.player-O.playing {\n  background: #308dfe;\n  color: #fbedde;\n  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.player-O {\n  /* background: #fa8a2f; */\n  /* color: #fbedde; */\n}\n\n.box {\n  --box-size: clamp(4.5rem, calc(-0.83rem + 26.67vw), 7.5rem);\n  width: var(--box-size);\n  height: var(--box-size);\n  border-radius: 13px;\n  background: #ebf3f7;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: hsl(0, 0%, 0%) 0px 2px 5px -1px, hsl(0, 0%, 0%) 0px 1px 3px -1px;\n}\n\n.box h2 {\n  font-size: clamp(4.03rem, calc(0.6rem + 17.15vw), 5.96rem);\n}\n\n.box:not(.col-3) {\n  margin-right: var(--lgth-4);\n}\n\n.game-board > *:not(.row-3) {\n  margin-bottom: var(--lgth-4);\n}\n\n.X,\n.icon-X {\n  color: #fb923c;\n}\n\n.O,\n.icon-O {\n  color: #60a5fa;\n}\n\nh1 {\n  font-size: clamp(2.07rem, calc(1.73rem + 1.7vw), 3.05rem);\n  color: var(--gray-900);\n  font-weight: 700;\n}\n\nh3 {\n  font-weight: 500;\n}\n\n.game-board {\n  width: fit-content;\n  margin-bottom: var(--lgth-7);\n  margin-inline: auto;\n}\n\nheader button {\n  background: transparent;\n  font-size: var(--step-3);\n  cursor: pointer;\n}\n\nheader svg {\n  fill: #84a5b8;\n}\n\nbutton:hover {\n  transform: scale(1.03);\n}\n\n.game-board > * {\n  display: flex;\n}\n\n.status {\n  padding-block: 24px;\n  padding-inline: 24px;\n  background: var(--gray-100);\n  width: 250px;\n  /* box-shadow: 0 4px 6px hsla(0, 0%, 0.2); */\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15);\n}\n\n.status h3 {\n  font-weight: 500;\n  font-size: 22px;\n  color: var(--gray-700);\n}\n\n.status h4 {\n  color: var(--gray-900);\n  font-size: 18px;\n}\n\n.status-win-count {\n  margin-bottom: 4px;\n}\n\n.status-draw {\n  margin-top: 8px;\n}\n.status {\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n\n.results {\n  display: flex;\n  justify-content: space-between;\n  max-width: 250px;\n}\n.results > * {\n  font-size: 20px;\n}\n\n.score {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  max-width: 450px;\n  border-radius: 14px;\n  background: #d9d9d9;\n  overflow: hidden;\n  font-family: Roboto;\n  box-shadow: hsla(0, 0%, 0%, 0.8) 0px 2px 5px -1px,\n    hsla(0, 0%, 0%, 0.8) 0px 1px 3px -1px;\n  margin-inline: auto;\n}\n\n.score > * {\n  background: lightgray;\n  padding-inline: 24px;\n  padding-block: 20px;\n  max-width: 150px;\n  text-align: center;\n  flex: 1;\n}\n\n.score-X {\n  background: rgba(250, 138, 47, 0.62);\n}\n\n.score-O {\n  background: rgba(48, 141, 254, 0.57);\n}\n\n.score h3 {\n  color: #444242;\n  font-size: 18px;\n  margin-bottom: 6px;\n}\n\n.score h2 {\n  color: #373636;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.splash h4 {\n  color: hsl(202deg 20% 55%);\n  font-weight: 400;\n  font-size: var(--step-0);\n  margin-top: var(--lgth-3);\n}\n\n.splash a {\n  color: hsla(0, 0%, 100%, 1);\n  font-family: 'russo one';\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.splash a:hover {\n  cursor: pointer;\n}\n\n.slider-label input {\n  display: none;\n}\n\n/* Styles for the human-bot slider */\n.slider-label {\n  position: relative;\n  display: inline-block;\n  border-radius: 33px;\n  background: #d9d9d9;\n  color: #999;\n  font-family: Russo One;\n  font-size: var(--step-2);\n  height: 62px;\n}\n\n.slider-1 {\n  max-width: 400px;\n  width: 100%;\n  /* width: 400px; */\n}\n\n.slider-2 {\n  width: 200px;\n}\n\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 34px;\n  background-color: #ccc;\n  /* width: 200px; */\n  transition: 0.4s;\n}\n\n.slider:before {\n  background-color: #fbfcfc;\n  position: absolute;\n  content: '';\n\n  height: 54px;\n  width: 50%;\n  left: 4px;\n  top: 4px;\n  border-radius: 33px;\n  transition: 0.4s;\n}\n\n.label-human,\n.label-bot,\n.label-X,\n.label-O {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 50%;\n  text-align: center;\n}\n\n.label-bot,\n.label-O {\n  right: 0;\n}\n\n.label-human {\n  color: #4b4948;\n}\n\ninput:checked ~ .label-human {\n  color: #999;\n}\n\ninput:checked ~ .label-bot {\n  color: #4b4948;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(95%);\n}\n\n.splash-option {\n  margin-bottom: var(--lgth-7);\n}\n\n.splash-option + .splash-option {\n  margin-bottom: var(--lgth-8);\n}\n\n/* Slider 2 styles  */\n.slider-2 .slider:before {\n  width: 50%;\n  background: #fa8a2f;\n}\n\n.slider-2 input:checked ~ .slider:before {\n  background: #60a5fa;\n  transform: translateX(90px);\n}\n\n.slider-2 input:checked ~ .label-O {\n  color: #fbedde;\n}\n\n.slider-2 input:checked ~ .label-X {\n  color: #999;\n}\n\n.label-X {\n  color: #fbedde;\n}\n\n/* Win state styles */\n\n.win {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -200px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(28, 28, 28, 0.82);\n  transition: visibility 5s, opacity 5s;\n  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */\n\n  visibility: hidden;\n  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */\n  transition: opacity 1s linear, visibility 0s linear 500ms;\n}\n\n.win h1 {\n  color: #fff;\n  font-family: Russo One;\n  font-size: clamp(3.36rem, calc(2.03rem + 6.64vw), 7.01rem);\n  margin-bottom: 32px;\n}\n\n.win p {\n  color: #bfc7ca;\n  font-family: Roboto;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: normal;\n  text-align: center;\n}\n\n.win .container {\n  max-width: 1200;\n  margin-inline: auto;\n  padding-inline: var(--lgth-3);\n}\n\n.hide {\n  display: none;\n  visibility: hidden;\n  transition: visibility 5s, opacity 5s;\n  /* visibility: hidden; */\n  opacity: 0;\n}\n\n.box--show {\n  opacity: 1;\n  visibility: visible;\n  /* the shown box does not delay visibility, so it shows instantly and transitions opacity */\n  transition: opacity 1s linear, visibility 0s linear;\n}\n\n.hello {\n  color: red;\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



function GameController(players) {
  let _board = _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"];
  let _movesCount = 0;
  let _isPlayer1Turn = true;
  let _activePlayer = players[0];

  const opponent = () => {
    for (let i = 0; i <  players.length; i++) {
      if(players[i].name == "bot"){
        return {bot: true, turn: i}
      }
    }
    return {bot: false, turn: null}
  }

  const switchPlayerTurn = () => {
    _activePlayer =
      _activePlayer.token === players[0].token ? players[1] : players[0];
  };

  const getActivePlayer = () => _activePlayer;

  const playRound = (index) => {
    let token = getActivePlayer().token;
    if (!_board.placeMove(token, index)) return -1;
    switchPlayerTurn();
    return { index, token };
  };

  const botPlayRound = () => {
    let token = getActivePlayer().token;
    let index = _player__WEBPACK_IMPORTED_MODULE_1__.botPlayer.generateMove(_board.getBoard());

    if (!_board.placeMove(token, index)) return -1;
    switchPlayerTurn();
    return { index, token };
  };

  const checkWin = (token) => {
    const board = _board.getBoard();
    let colSize = _board.getCols();
    let isWin = true;

    /* check if there is horizonatal win */
    for (let row = 0; row < 3; row++) {
      isWin = true;
      for (let col = 0; col < 3; col++) {
        if (board[row * colSize + col] !== token) {
          isWin = false;
          continue;
        }
      }
      if (isWin) {
        return true;
      }
    }

    /* check if there is vertical win */
    for (let col = 0; col < 3; col++) {
      isWin = true;
      for (let row = 0; row < 3; row++) {
        if (board[row * colSize + col] !== token) {
          isWin = false;
          continue;
        }
      }
      if (isWin) {
        return true;
      }
    }

    /* check if there's a diagonal win */
    if (board[0] == token && board[4] == token && board[8] == token)
      return true;
    if (board[6] == token && board[4] == token && board[2] == token)
      return true;

    return false;
  };

  const updateScore = (token) => {
    if (token === 'draw') {
      players[0].ties = players[0].wins + 1;
      players[1].ties = players[1].wins + 1;
    }
    for (let i = 0; i < 2; i++) {
      if (players[i].token === token) players[i].wins = players[i].wins + 1;
    }
    /* Putting this here makes this function inpure */
    _activePlayer = players[0];
  };

  return {opponent, botPlayRound, playRound, checkWin, updateScore };
}


/***/ }),

/***/ "./src/gameScreen.js":
/*!***************************!*\
  !*** ./src/gameScreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameScreen)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _splashScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashScreen */ "./src/splashScreen.js");

/* import { player } from './player'; */


function GameScreen() {
  let _board = _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"];
  let _results = document.querySelector('.results');
  let _restartButton = document.querySelector('#restart');
  let _turnX = document.querySelector('.player-X');
  let _turnO = document.querySelector('.player-O');
  let _winner = document.querySelector('#winner');

  let _scoreX = document.querySelector('.score-X h2');
  let _scoreO = document.querySelector('.score-O h2');
  let _ties = document.querySelector('.score-ties h2');
  const players = (0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.getPlayers)();
  let _nameX = document.querySelector('.score-X #name');
  let _nameO = document.querySelector('.score-O #name');
  _nameO.innerHTML = `${players[1].name}`;
  _nameX.innerHTML = `${players[0].name}`;
  /* let _endGameScreen = document.querySelector('.win'); */
  const _boxes = document.querySelectorAll('.box');
  const endGameScreen = document.querySelector('#win');
  
  const handlePlayAgain = () => {
    endGameScreen.classList.remove('box--show');
    setTimeout(restart, 500);
  }

  endGameScreen.addEventListener('click', handlePlayAgain);

  const _changeTurn = (token) => {
    if (token == 'X') {
      _turnO.classList.add('playing');
      _turnX.classList.remove('playing');
    } else {
      _turnO.classList.remove('playing');
      _turnX.classList.add('playing');
    }
  };

  const getIndex = (box) => {
    const id = box.getAttribute('id');
    return parseInt(id);
  };

  const paintMove = (box, token) => {
    box.innerHTML = `<h2 class="${token}">${token}</h2>`;
    _changeTurn(token);
  };

  const updateScores = () => {};

  const restart = () => {
    _board.clearBoard();
    _changeTurn('O');
    /* also change turns in logic level*/
    _boxes.forEach((box) => {
      box.innerHTML = '<h2></h2>';
    });
    window.removeEventListener('keypress', handlePlayAgain)
  };

  _restartButton.onclick = restart;
  const getBoxes = () => _boxes;

  const showEndgameScreen = (winner) => {
    endGameScreen.classList.add('box--show');
    if (winner == 'draw') {
      _winner.innerHTML = "It's a draw.";
      return;
    }

    _winner.innerHTML = `&#127882; Player <span id="winner">${winner}</span> Won! &#127881`;

    window.addEventListener('keypress', handlePlayAgain);
  };

  const paintScore = (players) => {
    _scoreX.innerHTML = players[0].wins;
    _scoreO.innerHTML = players[1].wins;
    _ties.innerHTML = players[1].ties;
  };

  return {
    getIndex,
    restart,
    updateScores,
    getBoxes,
    paintMove,
    showEndgameScreen,
    paintScore,
  };
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Gameboard() {
  const rows = 3;
  const columns = 3;
  const NUMBER_OF_SQUARES = rows * columns;

  const gameboard = new Array(NUMBER_OF_SQUARES);
  gameboard.fill(0);

  const placeMove = (move, index) => {
    if (squareIsTaken(index)) {
      return false;
    }
    gameboard[index] = move;
    return true;
  };

  const squareIsTaken = (index) => {
    if (gameboard[index] === 'X' || gameboard[index] === 'O') return true;
    return false;
  };

  const getBoard = () => gameboard;
  const getRows = () => rows;
  const getCols = () => columns;

  const clearBoard = () => {
    gameboard.fill(0);
  };

  return { getBoard, placeMove, getCols, clearBoard };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard());


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _splashScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashScreen */ "./src/splashScreen.js");
/* harmony import */ var _gameScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameScreen */ "./src/gameScreen.js");
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameController */ "./src/gameController.js");






function ScreenController() {
  const gameScreen = (0,_gameScreen__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const game = (0,_gameController__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.getPlayers)());

  let winner = document.getElementsByClassName('winner');
  let index;
  let moves = 0;
  const opponent = game.opponent();
  gameScreen.paintScore((0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.getPlayers)());

  const run = () => {
    /* If a bot is playing first, start playing here */
    if (opponent.bot && opponent.turn == 0) {
      const { index, token } = game.botPlayRound();
      const box = document.querySelector(`[id="${index}"]`);
      /* if (token === -1) return; */
      gameScreen.paintMove(box, token);
      moves++;
    }
    gameScreen.getBoxes().forEach((box) => {
      box.addEventListener('click', async function () {
        index = gameScreen.getIndex(box);
        const { token } = game.playRound(index);
        if (token === -1) return;

        gameScreen.paintMove(box, token);
        moves++;
        if (isGameOver(token)) return;

        if (opponent.bot) {
          const { index, token } = game.botPlayRound();
          const box = document.querySelector(`[id="${index}"]`);
          await sleep(400);
          /* if (token === -1) return; */
          gameScreen.paintMove(box, token);
          moves++;
          if (isGameOver(token)) return;
        }
      });
    });
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const isGameOver = (token, move) => {
    let _isGameOver = false;
    if (game.checkWin(token)) {
      gameScreen.showEndgameScreen(token);
      game.updateScore(token);
      gameScreen.paintScore((0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.getPlayers)());
      moves = 0;
      _isGameOver = true;
    } else if (moves === 9) {
      gameScreen.showEndgameScreen('draw');
      game.updateScore('draw');
      gameScreen.paintScore((0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.getPlayers)());
      moves = 0;
      _isGameOver = true;
    }
    return _isGameOver;
  };

  return run;
}

/* const run = ScreenController(); */
/* run(); */

(0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.onStartBtnClick)(() => {
  (0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.start)();
  console.log((0,_splashScreen__WEBPACK_IMPORTED_MODULE_1__.getPlayers)());
  const run = ScreenController();
  run();
});


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   botPlayer: () => (/* binding */ botPlayer),
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   playerType: () => (/* binding */ playerType)
/* harmony export */ });
const playerType = {
  HUMAN: 'human',
  BOT: 'bot',
};

function player(name, token, type = playerType.HUMAN) {
  if (name.length > 7) {
    console.error('Use a short name, less than  7 characters.');
    return -1;
  }

  return {
    wins: 0,
    ties: 0,
    type,
    name,
    token,
  };
}


const botPlayer = {
  generateMove(gameboard) {
    let index;
    let tryCount = 0;
    do {
      tryCount++;
      index = Math.floor(Math.random() * 9);
    } while (gameboard[index] !== 0 || tryCount >200);
    return index;
  },
}





/***/ }),

/***/ "./src/splashScreen.js":
/*!*****************************!*\
  !*** ./src/splashScreen.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SplashScreen),
/* harmony export */   getPlayers: () => (/* binding */ getPlayers),
/* harmony export */   onStartBtnClick: () => (/* binding */ onStartBtnClick),
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


function SplashScreen() {
  let player1 = null;
  let player2 = null;
  let players = [];

  const options = {
    opponent: _player__WEBPACK_IMPORTED_MODULE_0__.playerType.HUMAN,
    names: { player1: '', player2: '' },
    player1Token: 'X',
    player2Token: 'O',
  };

  const humanBotToggle = document.getElementById('human-bot-toggle');
  const xoToggle = document.getElementById('X-O-toggle');
  const startBtn = document.querySelector('.splash a');
  const player2InputController = document.querySelector(
    '.form-controller + .form-controller'
  );
  const player1NameInput = document.querySelector('input#player-1');
  const player2NameInput = document.querySelector('input#player-2');

  humanBotToggle.addEventListener('change', () => {
    if (humanBotToggle.checked) {
      options.opponent = _player__WEBPACK_IMPORTED_MODULE_0__.playerType.BOT;
      options.names.player2 = _player__WEBPACK_IMPORTED_MODULE_0__.playerType.BOT;
      player2InputController.classList.add('hide');
    } else {
      player2InputController.classList.remove('hide');
      options.opponent = _player__WEBPACK_IMPORTED_MODULE_0__.playerType.HUMAN;
      options.names.player2 = _player__WEBPACK_IMPORTED_MODULE_0__.playerType.HUMAN;
    }
  });

  xoToggle.addEventListener('change', () => {
    if (xoToggle.checked) {
      options.player1Token = 'O';
      options.player2Token = 'X';
    } else {
      options.player1Token = 'X';
      options.player2Token = 'O';
    }
  });

  player1NameInput.addEventListener('change', function() {
    options.names.player1 = this.value;
  });

  player2NameInput.addEventListener('change', function() {
    options.names.player2 = this.value;
  });

  /* To-Do: make sure the game is starting */
  const start = () => {
    const _splash = document.querySelector('.splash');
    const _game = document.querySelector('.game');
    _splash.classList.add('hide');
    _game.classList.add('box--show');

 /* I don't like this code, i feel like i have repeated myself   */
    if (options.player1Token == 'X') {
      player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(
        options.names.player1,
        options.player1Token,
        _player__WEBPACK_IMPORTED_MODULE_0__.playerType.HUMAN
      );

      player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(
        options.names.player2,
        options.player2Token,
        options.opponent
      );
    } else {
      player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(
        options.names.player2,
        options.player2Token,
        _player__WEBPACK_IMPORTED_MODULE_0__.playerType.HUMAN
      );
      player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(
        options.names.player1,
        options.player1Token,
        options.opponent
      );
    }
    players = [player1, player2];
  };

  const getPlayers = () => players;

  const onStartBtnClick = (fn) => {
    startBtn.addEventListener('click', fn);
  };

  return { onStartBtnClick, start, getPlayers };
}

const { onStartBtnClick, start, getPlayers } = SplashScreen();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixPQUFPLEtBQUssS0FBSyx3QkFBd0IsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsZ0NBQWdDLHNDQUFzQyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JB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QUNYOztBQUVBLFFBQVEscUNBQXFDOztBQUVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9nYW1lU2NyZWVuLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3BsYXNoU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC8qIGNvbG9yICovXG4gIC0tZ3JheS01MDogI2ZhZmFmYTtcbiAgLS1ncmF5LTQwMDogI2Q0ZDRkODtcbiAgLS1ncmF5LTUwMDogIzZiNzI4MDtcbiAgLS1ncmF5LTYwMDogIzRiNTU2MztcbiAgLS1ncmF5LTMwMDogI2Q0ZDRkODtcbiAgLS1ncmF5LTIwMDogI2U0ZTRlNztcbiAgLS1ncmF5LTEwMDogI2YzZjRmNjtcbiAgLS1ncmF5LTcwMDogIzM3NDE1MTtcbiAgLS1ncmF5LTgwMDogIzFmMjkzNztcbiAgLS1ncmF5LTkwMDogIzExMTgyNztcblxuICAvKiBmb250cyAqL1xuXG4gIC0tc3RlcC0tMTogY2xhbXAoMC42OXJlbSwgY2FsYygwLjY2cmVtICsgMC4xOHZ3KSwgMC44cmVtKTtcbiAgLS1zdGVwLTA6IGNsYW1wKDAuODVyZW0sIGNhbGMoMC43OHJlbSArIDAuMjl2dyksIDFyZW0pO1xuICAtLXN0ZXAtMTogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XG4gIC0tc3RlcC0yOiBjbGFtcCgxLjJyZW0sIGNhbGMoMS4wN3JlbSArIDAuNjN2dyksIDEuNXJlbSk7XG4gIC0tc3RlcC0zOiBjbGFtcCgxLjQ0cmVtLCBjYWxjKDEuMjZyZW0gKyAwLjg5dncpLCAxLjc1cmVtKTtcbiAgLS1zdGVwLTQ6IGNsYW1wKDEuNzNyZW0sIGNhbGMoMS40OHJlbSArIDEuMjR2dyksIDIuNXJlbSk7XG4gIC0tc3RlcC01OiBjbGFtcCgyLjA3cmVtLCBjYWxjKDEuNzNyZW0gKyAxLjd2dyksIDNyZW0pO1xuXG4gIC8qIGxlbmd0aHMgfHwgc3BhY2luZyAqL1xuXG4gIC0tbGd0aC0xOiBjbGFtcCgwLjI1cmVtLCBjYWxjKDAuMjNyZW0gKyAwLjExdncpLCAwLjMxcmVtKTtcbiAgLS1sZ3RoLTI6IGNsYW1wKDAuNXJlbSwgY2FsYygwLjQ2cmVtICsgMC4yMnZ3KSwgMC42M3JlbSk7XG4gIC0tbGd0aC0zOiBjbGFtcCgwLjc1cmVtLCBjYWxjKDAuNjhyZW0gKyAwLjMzdncpLCAwLjk0cmVtKTtcbiAgLS1sZ3RoLTQ6IGNsYW1wKDFyZW0sIGNhbGMoMC45MXJlbSArIDAuNDN2dyksIDEuMjVyZW0pO1xuICAtLWxndGgtNTogY2xhbXAoMS41cmVtLCBjYWxjKDEuMzdyZW0gKyAwLjY1dncpLCAxLjg4cmVtKTtcbiAgLS1sZ3RoLTY6IGNsYW1wKDJyZW0sIGNhbGMoMS44M3JlbSArIDAuODd2dyksIDIuNXJlbSk7XG4gIC0tbGd0aC03OiBjbGFtcCgzcmVtLCBjYWxjKDIuNzRyZW0gKyAxLjN2dyksIDMuNzVyZW0pO1xuICAtLWxndGgtODogY2xhbXAoNHJlbSwgY2FsYygzLjY1cmVtICsgMS43NHZ3KSwgNXJlbSk7XG4gIC0tbGd0aC05OiBjbGFtcCg2cmVtLCBjYWxjKDUuNDhyZW0gKyAyLjYxdncpLCA3LjVyZW0pO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi5yZXN1bHRzIHN2ZyB7XG4gIGZpbGw6ICMwMzY5YTE7XG4gIGZpbGw6IHZhcigtLWdyYXktNTAwKTtcbn1cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMGEwYTBhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdSdXNzbyBPbmUnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxuICAgIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzVjN2E7XG4gIHBhZGRpbmctYmxvY2s6IDE4cHg7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IHZhcigtLWxndGgtNCk7IC8qIE1pbmltdW0gbWFyZ2luIGZvciBzbWFsbCBzY3JlZW5zICovXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjU2cHgpIHtcbiAgbmF2IHtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvOyAvKiBMZXQgdGhlIG1hcmdpbiBncm93IG9uIGxhcmdlciBzY3JlZW5zICovXG4gIH1cbn1cblxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdGl0bGUge1xuICBjb2xvcjogI2Q5ZTJlODtcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTUpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTIpO1xufVxuXG4uZ2FtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIHRoZSBub3JtYWwgYm94IGRlbGF5cyB2aXNpYmlsaXR5IHRyYW5zaXRpb24gc28gaXQgZG9lc24ndCBoaWRlIHVudGlsIGFmdGVyIHRoZSBvcGFjaXR5IHRyYW5zaXRpb24gaXMgZG9uZSAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXIgNTAwbXM7XG59XG5cbi5nYW1lIC5jb250YWluZXIge1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0zKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5zcGxhc2gge1xuICBoZWlnaHQ6IDg4JTtcbn1cblxuLnNwbGFzaC1vcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5vdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGxhc2ggLmNvbnRhaW5lciB7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC03KTtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNCk7XG59XG5cbi5zcGxhc2gtc3ViaGVhZGluZyB7XG4gIGNvbG9yOiAjODRhNWI4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAzOHB4IDM4cHg7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6ICMyNzVjN2E7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uZm9ybS1jb250cm9sbGVyICsgLmZvcm0tY29udHJvbGxlciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XG4gIHBhZGRpbmctaW5saW5lOiAxNnB4O1xuICBwYWRkaW5nLWJsb2NrOiAxNHB4O1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYmFja2dyb3VuZDogIzI4NDk1ZDtcblxuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XG59XG5cbi5mb3JtIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMS41cHggc29saWQgIzAwN2JmZjtcbn1cblxuLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4NTllYWQ7XG59XG5cbi50dXJuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgY29sb3I6ICM5OTk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTcpO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi50dXJuIGgzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDEzcHgpIHtcbiAgLnR1cm4gaDMge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgfVxufVxuXG4udHVybiA+ICoge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICBwYWRkaW5nLWJsb2NrOiAxNHB4O1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC02KTtcbn1cblxuLnBsYXllci1YLnBsYXlpbmcge1xuICBiYWNrZ3JvdW5kOiAjZmE4YTJmO1xuICBjb2xvcjogI2ZiZWRkZTtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDBweCAycHggNHB4IDBweCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcbn1cblxuLnBsYXllci1PLnBsYXlpbmcge1xuICBiYWNrZ3JvdW5kOiAjMzA4ZGZlO1xuICBjb2xvcjogI2ZiZWRkZTtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDBweCAycHggNHB4IDBweCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcbn1cblxuLnBsYXllci1PIHtcbiAgLyogYmFja2dyb3VuZDogI2ZhOGEyZjsgKi9cbiAgLyogY29sb3I6ICNmYmVkZGU7ICovXG59XG5cbi5ib3gge1xuICAtLWJveC1zaXplOiBjbGFtcCg0LjVyZW0sIGNhbGMoLTAuODNyZW0gKyAyNi42N3Z3KSwgNy41cmVtKTtcbiAgd2lkdGg6IHZhcigtLWJveC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1ib3gtc2l6ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6ICNlYmYzZjc7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogaHNsKDAsIDAlLCAwJSkgMHB4IDJweCA1cHggLTFweCwgaHNsKDAsIDAlLCAwJSkgMHB4IDFweCAzcHggLTFweDtcbn1cblxuLmJveCBoMiB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoNC4wM3JlbSwgY2FsYygwLjZyZW0gKyAxNy4xNXZ3KSwgNS45NnJlbSk7XG59XG5cbi5ib3g6bm90KC5jb2wtMykge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWxndGgtNCk7XG59XG5cbi5nYW1lLWJvYXJkID4gKjpub3QoLnJvdy0zKSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNCk7XG59XG5cbi5YLFxuLmljb24tWCB7XG4gIGNvbG9yOiAjZmI5MjNjO1xufVxuXG4uTyxcbi5pY29uLU8ge1xuICBjb2xvcjogIzYwYTVmYTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgMy4wNXJlbSk7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmdhbWUtYm9hcmQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNyk7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmhlYWRlciBzdmcge1xuICBmaWxsOiAjODRhNWI4O1xufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uZ2FtZS1ib2FyZCA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhdHVzIHtcbiAgcGFkZGluZy1ibG9jazogMjRweDtcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcbiAgd2lkdGg6IDI1MHB4O1xuICAvKiBib3gtc2hhZG93OiAwIDRweCA2cHggaHNsYSgwLCAwJSwgMC4yKTsgKi9cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5zdGF0dXMgaDMge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XG59XG5cbi5zdGF0dXMgaDQge1xuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zdGF0dXMtd2luLWNvdW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc3RhdHVzLWRyYXcge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uc3RhdHVzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnJlc3VsdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG4ucmVzdWx0cyA+ICoge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zY29yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgYm94LXNoYWRvdzogaHNsYSgwLCAwJSwgMCUsIDAuOCkgMHB4IDJweCA1cHggLTFweCxcbiAgICBoc2xhKDAsIDAlLCAwJSwgMC44KSAwcHggMXB4IDNweCAtMXB4O1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uc2NvcmUgPiAqIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBwYWRkaW5nLWlubGluZTogMjRweDtcbiAgcGFkZGluZy1ibG9jazogMjBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4OiAxO1xufVxuXG4uc2NvcmUtWCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxMzgsIDQ3LCAwLjYyKTtcbn1cblxuLnNjb3JlLU8ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ4LCAxNDEsIDI1NCwgMC41Nyk7XG59XG5cbi5zY29yZSBoMyB7XG4gIGNvbG9yOiAjNDQ0MjQyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnNjb3JlIGgyIHtcbiAgY29sb3I6ICMzNzM2MzY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3BsYXNoIGg0IHtcbiAgY29sb3I6IGhzbCgyMDJkZWcgMjAlIDU1JSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbGd0aC0zKTtcbn1cblxuLnNwbGFzaCBhIHtcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDEpO1xuICBmb250LWZhbWlseTogJ3J1c3NvIG9uZSc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uc3BsYXNoIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZXItbGFiZWwgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTdHlsZXMgZm9yIHRoZSBodW1hbi1ib3Qgc2xpZGVyICovXG4uc2xpZGVyLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LWZhbWlseTogUnVzc28gT25lO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gIGhlaWdodDogNjJweDtcbn1cblxuLnNsaWRlci0xIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIHdpZHRoOiA0MDBweDsgKi9cbn1cblxuLnNsaWRlci0yIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmY2ZjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuXG4gIGhlaWdodDogNTRweDtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmxhYmVsLWh1bWFuLFxuLmxhYmVsLWJvdCxcbi5sYWJlbC1YLFxuLmxhYmVsLU8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhYmVsLWJvdCxcbi5sYWJlbC1PIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sYWJlbC1odW1hbiB7XG4gIGNvbG9yOiAjNGI0OTQ4O1xufVxuXG5pbnB1dDpjaGVja2VkIH4gLmxhYmVsLWh1bWFuIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmlucHV0OmNoZWNrZWQgfiAubGFiZWwtYm90IHtcbiAgY29sb3I6ICM0YjQ5NDg7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5NSUpO1xufVxuXG4uc3BsYXNoLW9wdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNyk7XG59XG5cbi5zcGxhc2gtb3B0aW9uICsgLnNwbGFzaC1vcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTgpO1xufVxuXG4vKiBTbGlkZXIgMiBzdHlsZXMgICovXG4uc2xpZGVyLTIgLnNsaWRlcjpiZWZvcmUge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmE4YTJmO1xufVxuXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5zbGlkZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzYwYTVmYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpO1xufVxuXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1PIHtcbiAgY29sb3I6ICNmYmVkZGU7XG59XG5cbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLVgge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmxhYmVsLVgge1xuICBjb2xvcjogI2ZiZWRkZTtcbn1cblxuLyogV2luIHN0YXRlIHN0eWxlcyAqL1xuXG4ud2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjAwcHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAyOCwgMC44Mik7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNXMsIG9wYWNpdHkgNXM7XG4gIC8qIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAqL1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcbn1cblxuLndpbiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUnVzc28gT25lO1xuICBmb250LXNpemU6IGNsYW1wKDMuMzZyZW0sIGNhbGMoMi4wM3JlbSArIDYuNjR2dyksIDcuMDFyZW0pO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ud2luIHAge1xuICBjb2xvcjogI2JmYzdjYTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53aW4gLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMyk7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDVzLCBvcGFjaXR5IDVzO1xuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gIG9wYWNpdHk6IDA7XG59XG5cbi5ib3gtLXNob3cge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAvKiB0aGUgc2hvd24gYm94IGRvZXMgbm90IGRlbGF5IHZpc2liaWxpdHksIHNvIGl0IHNob3dzIGluc3RhbnRseSBhbmQgdHJhbnNpdGlvbnMgb3BhY2l0eSAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXI7XG59XG5cbi5oZWxsbyB7XG4gIGNvbG9yOiByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjs7RUFFbkIsVUFBVTs7RUFFVix5REFBeUQ7RUFDekQsc0RBQXNEO0VBQ3RELHNEQUFzRDtFQUN0RCx1REFBdUQ7RUFDdkQseURBQXlEO0VBQ3pELHdEQUF3RDtFQUN4RCxxREFBcUQ7O0VBRXJELHVCQUF1Qjs7RUFFdkIseURBQXlEO0VBQ3pELHdEQUF3RDtFQUN4RCx5REFBeUQ7RUFDekQsc0RBQXNEO0VBQ3RELHdEQUF3RDtFQUN4RCxxREFBcUQ7RUFDckQscURBQXFEO0VBQ3JELG1EQUFtRDtFQUNuRCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7d0VBQ3NFO0VBQ3RFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0U7O2NBRVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsNEJBQTRCLEVBQUUscUNBQXFDO0FBQ3JFOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUIsRUFBRSwwQ0FBMEM7RUFDakU7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FB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QUVyQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1Asa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyxxREFBcUQ7O0VBRXJELGtCQUFrQjtFQUNsQiw4R0FBOEc7RUFDOUcseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QiwwREFBMEQ7RUFDMUQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDJGQUEyRjtFQUMzRixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLyogY29sb3IgKi9cXG4gIC0tZ3JheS01MDogI2ZhZmFmYTtcXG4gIC0tZ3JheS00MDA6ICNkNGQ0ZDg7XFxuICAtLWdyYXktNTAwOiAjNmI3MjgwO1xcbiAgLS1ncmF5LTYwMDogIzRiNTU2MztcXG4gIC0tZ3JheS0zMDA6ICNkNGQ0ZDg7XFxuICAtLWdyYXktMjAwOiAjZTRlNGU3O1xcbiAgLS1ncmF5LTEwMDogI2YzZjRmNjtcXG4gIC0tZ3JheS03MDA6ICMzNzQxNTE7XFxuICAtLWdyYXktODAwOiAjMWYyOTM3O1xcbiAgLS1ncmF5LTkwMDogIzExMTgyNztcXG5cXG4gIC8qIGZvbnRzICovXFxuXFxuICAtLXN0ZXAtLTE6IGNsYW1wKDAuNjlyZW0sIGNhbGMoMC42NnJlbSArIDAuMTh2dyksIDAuOHJlbSk7XFxuICAtLXN0ZXAtMDogY2xhbXAoMC44NXJlbSwgY2FsYygwLjc4cmVtICsgMC4yOXZ3KSwgMXJlbSk7XFxuICAtLXN0ZXAtMTogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XFxuICAtLXN0ZXAtMjogY2xhbXAoMS4ycmVtLCBjYWxjKDEuMDdyZW0gKyAwLjYzdncpLCAxLjVyZW0pO1xcbiAgLS1zdGVwLTM6IGNsYW1wKDEuNDRyZW0sIGNhbGMoMS4yNnJlbSArIDAuODl2dyksIDEuNzVyZW0pO1xcbiAgLS1zdGVwLTQ6IGNsYW1wKDEuNzNyZW0sIGNhbGMoMS40OHJlbSArIDEuMjR2dyksIDIuNXJlbSk7XFxuICAtLXN0ZXAtNTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzcmVtKTtcXG5cXG4gIC8qIGxlbmd0aHMgfHwgc3BhY2luZyAqL1xcblxcbiAgLS1sZ3RoLTE6IGNsYW1wKDAuMjVyZW0sIGNhbGMoMC4yM3JlbSArIDAuMTF2dyksIDAuMzFyZW0pO1xcbiAgLS1sZ3RoLTI6IGNsYW1wKDAuNXJlbSwgY2FsYygwLjQ2cmVtICsgMC4yMnZ3KSwgMC42M3JlbSk7XFxuICAtLWxndGgtMzogY2xhbXAoMC43NXJlbSwgY2FsYygwLjY4cmVtICsgMC4zM3Z3KSwgMC45NHJlbSk7XFxuICAtLWxndGgtNDogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XFxuICAtLWxndGgtNTogY2xhbXAoMS41cmVtLCBjYWxjKDEuMzdyZW0gKyAwLjY1dncpLCAxLjg4cmVtKTtcXG4gIC0tbGd0aC02OiBjbGFtcCgycmVtLCBjYWxjKDEuODNyZW0gKyAwLjg3dncpLCAyLjVyZW0pO1xcbiAgLS1sZ3RoLTc6IGNsYW1wKDNyZW0sIGNhbGMoMi43NHJlbSArIDEuM3Z3KSwgMy43NXJlbSk7XFxuICAtLWxndGgtODogY2xhbXAoNHJlbSwgY2FsYygzLjY1cmVtICsgMS43NHZ3KSwgNXJlbSk7XFxuICAtLWxndGgtOTogY2xhbXAoNnJlbSwgY2FsYyg1LjQ4cmVtICsgMi42MXZ3KSwgNy41cmVtKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ucmVzdWx0cyBzdmcge1xcbiAgZmlsbDogIzAzNjlhMTtcXG4gIGZpbGw6IHZhcigtLWdyYXktNTAwKTtcXG59XFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwYTBhMGE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdSdXNzbyBPbmUnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzVjN2E7XFxuICBwYWRkaW5nLWJsb2NrOiAxOHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogdmFyKC0tbGd0aC00KTsgLyogTWluaW11bSBtYXJnaW4gZm9yIHNtYWxsIHNjcmVlbnMgKi9cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyNTZweCkge1xcbiAgbmF2IHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bzsgLyogTGV0IHRoZSBtYXJnaW4gZ3JvdyBvbiBsYXJnZXIgc2NyZWVucyAqL1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXRpdGxlIHtcXG4gIGNvbG9yOiAjZDllMmU4O1xcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC01KTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMik7XFxufVxcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcGFjaXR5OiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC8qIHRoZSBub3JtYWwgYm94IGRlbGF5cyB2aXNpYmlsaXR5IHRyYW5zaXRpb24gc28gaXQgZG9lc24ndCBoaWRlIHVudGlsIGFmdGVyIHRoZSBvcGFjaXR5IHRyYW5zaXRpb24gaXMgZG9uZSAqL1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIDUwMG1zO1xcbn1cXG5cXG4uZ2FtZSAuY29udGFpbmVyIHtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTMpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLnNwbGFzaCB7XFxuICBoZWlnaHQ6IDg4JTtcXG59XFxuXFxuLnNwbGFzaC1vcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNwbGFzaCAuY29udGFpbmVyIHtcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC03KTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTQpO1xcbn1cXG5cXG4uc3BsYXNoLXN1YmhlYWRpbmcge1xcbiAgY29sb3I6ICM4NGE1Yjg7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBhZGRpbmc6IDM4cHggMzhweDtcXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgYmFja2dyb3VuZDogIzI3NWM3YTtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sbGVyICsgLmZvcm0tY29udHJvbGxlciB7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XFxuICBwYWRkaW5nLWJsb2NrOiAxNHB4O1xcbiAgbWF4LXdpZHRoOiAzMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYmFja2dyb3VuZDogIzI4NDk1ZDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMTAwKTtcXG59XFxuXFxuLmZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMS41cHggc29saWQgIzAwN2JmZjtcXG59XFxuXFxuLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjODU5ZWFkO1xcbn1cXG5cXG4udHVybiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBjb2xvcjogIzk5OTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi50dXJuIGgzIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQxM3B4KSB7XFxuICAudHVybiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG4gIH1cXG59XFxuXFxuLnR1cm4gPiAqIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICBwYWRkaW5nLWJsb2NrOiAxNHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNik7XFxufVxcblxcbi5wbGF5ZXItWC5wbGF5aW5nIHtcXG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XFxuICBjb2xvcjogI2ZiZWRkZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC40KSAwcHggMnB4IDRweCAwcHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xcbn1cXG5cXG4ucGxheWVyLU8ucGxheWluZyB7XFxuICBiYWNrZ3JvdW5kOiAjMzA4ZGZlO1xcbiAgY29sb3I6ICNmYmVkZGU7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcXG59XFxuXFxuLnBsYXllci1PIHtcXG4gIC8qIGJhY2tncm91bmQ6ICNmYThhMmY7ICovXFxuICAvKiBjb2xvcjogI2ZiZWRkZTsgKi9cXG59XFxuXFxuLmJveCB7XFxuICAtLWJveC1zaXplOiBjbGFtcCg0LjVyZW0sIGNhbGMoLTAuODNyZW0gKyAyNi42N3Z3KSwgNy41cmVtKTtcXG4gIHdpZHRoOiB2YXIoLS1ib3gtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJveC1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWJmM2Y3O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBoc2woMCwgMCUsIDAlKSAwcHggMnB4IDVweCAtMXB4LCBoc2woMCwgMCUsIDAlKSAwcHggMXB4IDNweCAtMXB4O1xcbn1cXG5cXG4uYm94IGgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNC4wM3JlbSwgY2FsYygwLjZyZW0gKyAxNy4xNXZ3KSwgNS45NnJlbSk7XFxufVxcblxcbi5ib3g6bm90KC5jb2wtMykge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1sZ3RoLTQpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCA+ICo6bm90KC5yb3ctMykge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC00KTtcXG59XFxuXFxuLlgsXFxuLmljb24tWCB7XFxuICBjb2xvcjogI2ZiOTIzYztcXG59XFxuXFxuLk8sXFxuLmljb24tTyB7XFxuICBjb2xvcjogIzYwYTVmYTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiBjbGFtcCgyLjA3cmVtLCBjYWxjKDEuNzNyZW0gKyAxLjd2dyksIDMuMDVyZW0pO1xcbiAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNyk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgc3ZnIHtcXG4gIGZpbGw6ICM4NGE1Yjg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnN0YXR1cyB7XFxuICBwYWRkaW5nLWJsb2NrOiAyNHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XFxuICB3aWR0aDogMjUwcHg7XFxuICAvKiBib3gtc2hhZG93OiAwIDRweCA2cHggaHNsYSgwLCAwJSwgMC4yKTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbi5zdGF0dXMgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XFxufVxcblxcbi5zdGF0dXMgaDQge1xcbiAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnN0YXR1cy13aW4tY291bnQge1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uc3RhdHVzLWRyYXcge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4uc3RhdHVzIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4ucmVzdWx0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuLnJlc3VsdHMgPiAqIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNjb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBib3gtc2hhZG93OiBoc2xhKDAsIDAlLCAwJSwgMC44KSAwcHggMnB4IDVweCAtMXB4LFxcbiAgICBoc2xhKDAsIDAlLCAwJSwgMC44KSAwcHggMXB4IDNweCAtMXB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLnNjb3JlID4gKiB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nLWlubGluZTogMjRweDtcXG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNjb3JlLVgge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDEzOCwgNDcsIDAuNjIpO1xcbn1cXG5cXG4uc2NvcmUtTyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ4LCAxNDEsIDI1NCwgMC41Nyk7XFxufVxcblxcbi5zY29yZSBoMyB7XFxuICBjb2xvcjogIzQ0NDI0MjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuXFxuLnNjb3JlIGgyIHtcXG4gIGNvbG9yOiAjMzczNjM2O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNwbGFzaCBoNCB7XFxuICBjb2xvcjogaHNsKDIwMmRlZyAyMCUgNTUlKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1sZ3RoLTMpO1xcbn1cXG5cXG4uc3BsYXNoIGEge1xcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDEpO1xcbiAgZm9udC1mYW1pbHk6ICdydXNzbyBvbmUnO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zcGxhc2ggYTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXItbGFiZWwgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogU3R5bGVzIGZvciB0aGUgaHVtYW4tYm90IHNsaWRlciAqL1xcbi5zbGlkZXItbGFiZWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBjb2xvcjogIzk5OTtcXG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICBoZWlnaHQ6IDYycHg7XFxufVxcblxcbi5zbGlkZXItMSB7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiB3aWR0aDogNDAwcHg7ICovXFxufVxcblxcbi5zbGlkZXItMiB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAvKiB3aWR0aDogMjAwcHg7ICovXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmY2ZjO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuXFxuICBoZWlnaHQ6IDU0cHg7XFxuICB3aWR0aDogNTAlO1xcbiAgbGVmdDogNHB4O1xcbiAgdG9wOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzM3B4O1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLmxhYmVsLWh1bWFuLFxcbi5sYWJlbC1ib3QsXFxuLmxhYmVsLVgsXFxuLmxhYmVsLU8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGFiZWwtYm90LFxcbi5sYWJlbC1PIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ubGFiZWwtaHVtYW4ge1xcbiAgY29sb3I6ICM0YjQ5NDg7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgfiAubGFiZWwtaHVtYW4ge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgfiAubGFiZWwtYm90IHtcXG4gIGNvbG9yOiAjNGI0OTQ4O1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDk1JSk7XFxufVxcblxcbi5zcGxhc2gtb3B0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNyk7XFxufVxcblxcbi5zcGxhc2gtb3B0aW9uICsgLnNwbGFzaC1vcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC04KTtcXG59XFxuXFxuLyogU2xpZGVyIDIgc3R5bGVzICAqL1xcbi5zbGlkZXItMiAuc2xpZGVyOmJlZm9yZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZhOGEyZjtcXG59XFxuXFxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAuc2xpZGVyOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjNjBhNWZhO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpO1xcbn1cXG5cXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1PIHtcXG4gIGNvbG9yOiAjZmJlZGRlO1xcbn1cXG5cXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1YIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4ubGFiZWwtWCB7XFxuICBjb2xvcjogI2ZiZWRkZTtcXG59XFxuXFxuLyogV2luIHN0YXRlIHN0eWxlcyAqL1xcblxcbi53aW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTIwMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDI4LCAwLjgyKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNXMsIG9wYWNpdHkgNXM7XFxuICAvKiBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgKi9cXG5cXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC8qIHRoZSBub3JtYWwgYm94IGRlbGF5cyB2aXNpYmlsaXR5IHRyYW5zaXRpb24gc28gaXQgZG9lc24ndCBoaWRlIHVudGlsIGFmdGVyIHRoZSBvcGFjaXR5IHRyYW5zaXRpb24gaXMgZG9uZSAqL1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIDUwMG1zO1xcbn1cXG5cXG4ud2luIGgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMy4zNnJlbSwgY2FsYygyLjAzcmVtICsgNi42NHZ3KSwgNy4wMXJlbSk7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4ud2luIHAge1xcbiAgY29sb3I6ICNiZmM3Y2E7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53aW4gLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDA7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMyk7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDVzLCBvcGFjaXR5IDVzO1xcbiAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmJveC0tc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC8qIHRoZSBzaG93biBib3ggZG9lcyBub3QgZGVsYXkgdmlzaWJpbGl0eSwgc28gaXQgc2hvd3MgaW5zdGFudGx5IGFuZCB0cmFuc2l0aW9ucyBvcGFjaXR5ICovXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXI7XFxufVxcblxcbi5oZWxsbyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGJvdFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIocGxheWVycykge1xuICBsZXQgX2JvYXJkID0gR2FtZWJvYXJkO1xuICBsZXQgX21vdmVzQ291bnQgPSAwO1xuICBsZXQgX2lzUGxheWVyMVR1cm4gPSB0cnVlO1xuICBsZXQgX2FjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG5cbiAgY29uc3Qgb3Bwb25lbnQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocGxheWVyc1tpXS5uYW1lID09IFwiYm90XCIpe1xuICAgICAgICByZXR1cm4ge2JvdDogdHJ1ZSwgdHVybjogaX1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtib3Q6IGZhbHNlLCB0dXJuOiBudWxsfVxuICB9XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICBfYWN0aXZlUGxheWVyID1cbiAgICAgIF9hY3RpdmVQbGF5ZXIudG9rZW4gPT09IHBsYXllcnNbMF0udG9rZW4gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBfYWN0aXZlUGxheWVyO1xuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChpbmRleCkgPT4ge1xuICAgIGxldCB0b2tlbiA9IGdldEFjdGl2ZVBsYXllcigpLnRva2VuO1xuICAgIGlmICghX2JvYXJkLnBsYWNlTW92ZSh0b2tlbiwgaW5kZXgpKSByZXR1cm4gLTE7XG4gICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIHJldHVybiB7IGluZGV4LCB0b2tlbiB9O1xuICB9O1xuXG4gIGNvbnN0IGJvdFBsYXlSb3VuZCA9ICgpID0+IHtcbiAgICBsZXQgdG9rZW4gPSBnZXRBY3RpdmVQbGF5ZXIoKS50b2tlbjtcbiAgICBsZXQgaW5kZXggPSBib3RQbGF5ZXIuZ2VuZXJhdGVNb3ZlKF9ib2FyZC5nZXRCb2FyZCgpKTtcblxuICAgIGlmICghX2JvYXJkLnBsYWNlTW92ZSh0b2tlbiwgaW5kZXgpKSByZXR1cm4gLTE7XG4gICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIHJldHVybiB7IGluZGV4LCB0b2tlbiB9O1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrV2luID0gKHRva2VuKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBfYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICBsZXQgY29sU2l6ZSA9IF9ib2FyZC5nZXRDb2xzKCk7XG4gICAgbGV0IGlzV2luID0gdHJ1ZTtcblxuICAgIC8qIGNoZWNrIGlmIHRoZXJlIGlzIGhvcml6b25hdGFsIHdpbiAqL1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XG4gICAgICBpc1dpbiA9IHRydWU7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAzOyBjb2wrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93ICogY29sU2l6ZSArIGNvbF0gIT09IHRva2VuKSB7XG4gICAgICAgICAgaXNXaW4gPSBmYWxzZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIGNoZWNrIGlmIHRoZXJlIGlzIHZlcnRpY2FsIHdpbiAqL1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDM7IGNvbCsrKSB7XG4gICAgICBpc1dpbiA9IHRydWU7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAzOyByb3crKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93ICogY29sU2l6ZSArIGNvbF0gIT09IHRva2VuKSB7XG4gICAgICAgICAgaXNXaW4gPSBmYWxzZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIGNoZWNrIGlmIHRoZXJlJ3MgYSBkaWFnb25hbCB3aW4gKi9cbiAgICBpZiAoYm9hcmRbMF0gPT0gdG9rZW4gJiYgYm9hcmRbNF0gPT0gdG9rZW4gJiYgYm9hcmRbOF0gPT0gdG9rZW4pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoYm9hcmRbNl0gPT0gdG9rZW4gJiYgYm9hcmRbNF0gPT0gdG9rZW4gJiYgYm9hcmRbMl0gPT0gdG9rZW4pXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTY29yZSA9ICh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RyYXcnKSB7XG4gICAgICBwbGF5ZXJzWzBdLnRpZXMgPSBwbGF5ZXJzWzBdLndpbnMgKyAxO1xuICAgICAgcGxheWVyc1sxXS50aWVzID0gcGxheWVyc1sxXS53aW5zICsgMTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIGlmIChwbGF5ZXJzW2ldLnRva2VuID09PSB0b2tlbikgcGxheWVyc1tpXS53aW5zID0gcGxheWVyc1tpXS53aW5zICsgMTtcbiAgICB9XG4gICAgLyogUHV0dGluZyB0aGlzIGhlcmUgbWFrZXMgdGhpcyBmdW5jdGlvbiBpbnB1cmUgKi9cbiAgICBfYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcbiAgfTtcblxuICByZXR1cm4ge29wcG9uZW50LCBib3RQbGF5Um91bmQsIHBsYXlSb3VuZCwgY2hlY2tXaW4sIHVwZGF0ZVNjb3JlIH07XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbi8qIGltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyJzsgKi9cbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuL3NwbGFzaFNjcmVlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTY3JlZW4oKSB7XG4gIGxldCBfYm9hcmQgPSBHYW1lYm9hcmQ7XG4gIGxldCBfcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJyk7XG4gIGxldCBfcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0Jyk7XG4gIGxldCBfdHVyblggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLVgnKTtcbiAgbGV0IF90dXJuTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItTycpO1xuICBsZXQgX3dpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXInKTtcblxuICBsZXQgX3Njb3JlWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1YIGgyJyk7XG4gIGxldCBfc2NvcmVPID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLU8gaDInKTtcbiAgbGV0IF90aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLXRpZXMgaDInKTtcbiAgY29uc3QgcGxheWVycyA9IGdldFBsYXllcnMoKTtcbiAgbGV0IF9uYW1lWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1YICNuYW1lJyk7XG4gIGxldCBfbmFtZU8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtTyAjbmFtZScpO1xuICBfbmFtZU8uaW5uZXJIVE1MID0gYCR7cGxheWVyc1sxXS5uYW1lfWA7XG4gIF9uYW1lWC5pbm5lckhUTUwgPSBgJHtwbGF5ZXJzWzBdLm5hbWV9YDtcbiAgLyogbGV0IF9lbmRHYW1lU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbicpOyAqL1xuICBjb25zdCBfYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG4gIGNvbnN0IGVuZEdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luJyk7XG4gIFxuICBjb25zdCBoYW5kbGVQbGF5QWdhaW4gPSAoKSA9PiB7XG4gICAgZW5kR2FtZVNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdib3gtLXNob3cnKTtcbiAgICBzZXRUaW1lb3V0KHJlc3RhcnQsIDUwMCk7XG4gIH1cblxuICBlbmRHYW1lU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheUFnYWluKTtcblxuICBjb25zdCBfY2hhbmdlVHVybiA9ICh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbiA9PSAnWCcpIHtcbiAgICAgIF90dXJuTy5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgICBfdHVyblguY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdHVybk8uY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgICAgX3R1cm5YLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5kZXggPSAoYm94KSA9PiB7XG4gICAgY29uc3QgaWQgPSBib3guZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHJldHVybiBwYXJzZUludChpZCk7XG4gIH07XG5cbiAgY29uc3QgcGFpbnRNb3ZlID0gKGJveCwgdG9rZW4pID0+IHtcbiAgICBib3guaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cIiR7dG9rZW59XCI+JHt0b2tlbn08L2gyPmA7XG4gICAgX2NoYW5nZVR1cm4odG9rZW4pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgX2JvYXJkLmNsZWFyQm9hcmQoKTtcbiAgICBfY2hhbmdlVHVybignTycpO1xuICAgIC8qIGFsc28gY2hhbmdlIHR1cm5zIGluIGxvZ2ljIGxldmVsKi9cbiAgICBfYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guaW5uZXJIVE1MID0gJzxoMj48L2gyPic7XG4gICAgfSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlUGxheUFnYWluKVxuICB9O1xuXG4gIF9yZXN0YXJ0QnV0dG9uLm9uY2xpY2sgPSByZXN0YXJ0O1xuICBjb25zdCBnZXRCb3hlcyA9ICgpID0+IF9ib3hlcztcblxuICBjb25zdCBzaG93RW5kZ2FtZVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcbiAgICBlbmRHYW1lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2JveC0tc2hvdycpO1xuICAgIGlmICh3aW5uZXIgPT0gJ2RyYXcnKSB7XG4gICAgICBfd2lubmVyLmlubmVySFRNTCA9IFwiSXQncyBhIGRyYXcuXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3dpbm5lci5pbm5lckhUTUwgPSBgJiMxMjc4ODI7IFBsYXllciA8c3BhbiBpZD1cIndpbm5lclwiPiR7d2lubmVyfTwvc3Bhbj4gV29uISAmIzEyNzg4MWA7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVQbGF5QWdhaW4pO1xuICB9O1xuXG4gIGNvbnN0IHBhaW50U2NvcmUgPSAocGxheWVycykgPT4ge1xuICAgIF9zY29yZVguaW5uZXJIVE1MID0gcGxheWVyc1swXS53aW5zO1xuICAgIF9zY29yZU8uaW5uZXJIVE1MID0gcGxheWVyc1sxXS53aW5zO1xuICAgIF90aWVzLmlubmVySFRNTCA9IHBsYXllcnNbMV0udGllcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEluZGV4LFxuICAgIHJlc3RhcnQsXG4gICAgdXBkYXRlU2NvcmVzLFxuICAgIGdldEJveGVzLFxuICAgIHBhaW50TW92ZSxcbiAgICBzaG93RW5kZ2FtZVNjcmVlbixcbiAgICBwYWludFNjb3JlLFxuICB9O1xufVxuIiwiZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCByb3dzID0gMztcbiAgY29uc3QgY29sdW1ucyA9IDM7XG4gIGNvbnN0IE5VTUJFUl9PRl9TUVVBUkVTID0gcm93cyAqIGNvbHVtbnM7XG5cbiAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEFycmF5KE5VTUJFUl9PRl9TUVVBUkVTKTtcbiAgZ2FtZWJvYXJkLmZpbGwoMCk7XG5cbiAgY29uc3QgcGxhY2VNb3ZlID0gKG1vdmUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHNxdWFyZUlzVGFrZW4oaW5kZXgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdhbWVib2FyZFtpbmRleF0gPSBtb3ZlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNxdWFyZUlzVGFrZW4gPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkW2luZGV4XSA9PT0gJ1gnIHx8IGdhbWVib2FyZFtpbmRleF0gPT09ICdPJykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuICBjb25zdCBnZXRSb3dzID0gKCkgPT4gcm93cztcbiAgY29uc3QgZ2V0Q29scyA9ICgpID0+IGNvbHVtbnM7XG5cbiAgY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgICBnYW1lYm9hcmQuZmlsbCgwKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRCb2FyZCwgcGxhY2VNb3ZlLCBnZXRDb2xzLCBjbGVhckJvYXJkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCgpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgb25TdGFydEJ0bkNsaWNrLCBzdGFydCwgZ2V0UGxheWVycyB9IGZyb20gJy4vc3BsYXNoU2NyZWVuJztcblxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9nYW1lU2NyZWVuJztcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVDb250cm9sbGVyJztcblxuZnVuY3Rpb24gU2NyZWVuQ29udHJvbGxlcigpIHtcbiAgY29uc3QgZ2FtZVNjcmVlbiA9IEdhbWVTY3JlZW4oKTtcbiAgY29uc3QgZ2FtZSA9IEdhbWVDb250cm9sbGVyKGdldFBsYXllcnMoKSk7XG5cbiAgbGV0IHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbm5lcicpO1xuICBsZXQgaW5kZXg7XG4gIGxldCBtb3ZlcyA9IDA7XG4gIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5vcHBvbmVudCgpO1xuICBnYW1lU2NyZWVuLnBhaW50U2NvcmUoZ2V0UGxheWVycygpKTtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgLyogSWYgYSBib3QgaXMgcGxheWluZyBmaXJzdCwgc3RhcnQgcGxheWluZyBoZXJlICovXG4gICAgaWYgKG9wcG9uZW50LmJvdCAmJiBvcHBvbmVudC50dXJuID09IDApIHtcbiAgICAgIGNvbnN0IHsgaW5kZXgsIHRva2VuIH0gPSBnYW1lLmJvdFBsYXlSb3VuZCgpO1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpbmRleH1cIl1gKTtcbiAgICAgIC8qIGlmICh0b2tlbiA9PT0gLTEpIHJldHVybjsgKi9cbiAgICAgIGdhbWVTY3JlZW4ucGFpbnRNb3ZlKGJveCwgdG9rZW4pO1xuICAgICAgbW92ZXMrKztcbiAgICB9XG4gICAgZ2FtZVNjcmVlbi5nZXRCb3hlcygpLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmRleCA9IGdhbWVTY3JlZW4uZ2V0SW5kZXgoYm94KTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZ2FtZS5wbGF5Um91bmQoaW5kZXgpO1xuICAgICAgICBpZiAodG9rZW4gPT09IC0xKSByZXR1cm47XG5cbiAgICAgICAgZ2FtZVNjcmVlbi5wYWludE1vdmUoYm94LCB0b2tlbik7XG4gICAgICAgIG1vdmVzKys7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKHRva2VuKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChvcHBvbmVudC5ib3QpIHtcbiAgICAgICAgICBjb25zdCB7IGluZGV4LCB0b2tlbiB9ID0gZ2FtZS5ib3RQbGF5Um91bmQoKTtcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2luZGV4fVwiXWApO1xuICAgICAgICAgIGF3YWl0IHNsZWVwKDQwMCk7XG4gICAgICAgICAgLyogaWYgKHRva2VuID09PSAtMSkgcmV0dXJuOyAqL1xuICAgICAgICAgIGdhbWVTY3JlZW4ucGFpbnRNb3ZlKGJveCwgdG9rZW4pO1xuICAgICAgICAgIG1vdmVzKys7XG4gICAgICAgICAgaWYgKGlzR2FtZU92ZXIodG9rZW4pKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cblxuICBjb25zdCBpc0dhbWVPdmVyID0gKHRva2VuLCBtb3ZlKSA9PiB7XG4gICAgbGV0IF9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgaWYgKGdhbWUuY2hlY2tXaW4odG9rZW4pKSB7XG4gICAgICBnYW1lU2NyZWVuLnNob3dFbmRnYW1lU2NyZWVuKHRva2VuKTtcbiAgICAgIGdhbWUudXBkYXRlU2NvcmUodG9rZW4pO1xuICAgICAgZ2FtZVNjcmVlbi5wYWludFNjb3JlKGdldFBsYXllcnMoKSk7XG4gICAgICBtb3ZlcyA9IDA7XG4gICAgICBfaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChtb3ZlcyA9PT0gOSkge1xuICAgICAgZ2FtZVNjcmVlbi5zaG93RW5kZ2FtZVNjcmVlbignZHJhdycpO1xuICAgICAgZ2FtZS51cGRhdGVTY29yZSgnZHJhdycpO1xuICAgICAgZ2FtZVNjcmVlbi5wYWludFNjb3JlKGdldFBsYXllcnMoKSk7XG4gICAgICBtb3ZlcyA9IDA7XG4gICAgICBfaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBfaXNHYW1lT3ZlcjtcbiAgfTtcblxuICByZXR1cm4gcnVuO1xufVxuXG4vKiBjb25zdCBydW4gPSBTY3JlZW5Db250cm9sbGVyKCk7ICovXG4vKiBydW4oKTsgKi9cblxub25TdGFydEJ0bkNsaWNrKCgpID0+IHtcbiAgc3RhcnQoKTtcbiAgY29uc29sZS5sb2coZ2V0UGxheWVycygpKTtcbiAgY29uc3QgcnVuID0gU2NyZWVuQ29udHJvbGxlcigpO1xuICBydW4oKTtcbn0pO1xuIiwiY29uc3QgcGxheWVyVHlwZSA9IHtcbiAgSFVNQU46ICdodW1hbicsXG4gIEJPVDogJ2JvdCcsXG59O1xuXG5mdW5jdGlvbiBwbGF5ZXIobmFtZSwgdG9rZW4sIHR5cGUgPSBwbGF5ZXJUeXBlLkhVTUFOKSB7XG4gIGlmIChuYW1lLmxlbmd0aCA+IDcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVc2UgYSBzaG9ydCBuYW1lLCBsZXNzIHRoYW4gIDcgY2hhcmFjdGVycy4nKTtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpbnM6IDAsXG4gICAgdGllczogMCxcbiAgICB0eXBlLFxuICAgIG5hbWUsXG4gICAgdG9rZW4sXG4gIH07XG59XG5cblxuY29uc3QgYm90UGxheWVyID0ge1xuICBnZW5lcmF0ZU1vdmUoZ2FtZWJvYXJkKSB7XG4gICAgbGV0IGluZGV4O1xuICAgIGxldCB0cnlDb3VudCA9IDA7XG4gICAgZG8ge1xuICAgICAgdHJ5Q291bnQrKztcbiAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgfSB3aGlsZSAoZ2FtZWJvYXJkW2luZGV4XSAhPT0gMCB8fCB0cnlDb3VudCA+MjAwKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG59XG5cblxuZXhwb3J0IHtwbGF5ZXJUeXBlLCBwbGF5ZXIsIGJvdFBsYXllcn1cbiIsImltcG9ydCB7IHBsYXllciwgcGxheWVyVHlwZSwgYm90UGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGxhc2hTY3JlZW4oKSB7XG4gIGxldCBwbGF5ZXIxID0gbnVsbDtcbiAgbGV0IHBsYXllcjIgPSBudWxsO1xuICBsZXQgcGxheWVycyA9IFtdO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3Bwb25lbnQ6IHBsYXllclR5cGUuSFVNQU4sXG4gICAgbmFtZXM6IHsgcGxheWVyMTogJycsIHBsYXllcjI6ICcnIH0sXG4gICAgcGxheWVyMVRva2VuOiAnWCcsXG4gICAgcGxheWVyMlRva2VuOiAnTycsXG4gIH07XG5cbiAgY29uc3QgaHVtYW5Cb3RUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tYm90LXRvZ2dsZScpO1xuICBjb25zdCB4b1RvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdYLU8tdG9nZ2xlJyk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwbGFzaCBhJyk7XG4gIGNvbnN0IHBsYXllcjJJbnB1dENvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZm9ybS1jb250cm9sbGVyICsgLmZvcm0tY29udHJvbGxlcidcbiAgKTtcbiAgY29uc3QgcGxheWVyMU5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3BsYXllci0xJyk7XG4gIGNvbnN0IHBsYXllcjJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNwbGF5ZXItMicpO1xuXG4gIGh1bWFuQm90VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoaHVtYW5Cb3RUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgb3B0aW9ucy5vcHBvbmVudCA9IHBsYXllclR5cGUuQk9UO1xuICAgICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyID0gcGxheWVyVHlwZS5CT1Q7XG4gICAgICBwbGF5ZXIySW5wdXRDb250cm9sbGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMklucHV0Q29udHJvbGxlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBvcHRpb25zLm9wcG9uZW50ID0gcGxheWVyVHlwZS5IVU1BTjtcbiAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMiA9IHBsYXllclR5cGUuSFVNQU47XG4gICAgfVxuICB9KTtcblxuICB4b1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHhvVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuID0gJ08nO1xuICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4gPSAnWCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuID0gJ1gnO1xuICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4gPSAnTyc7XG4gICAgfVxuICB9KTtcblxuICBwbGF5ZXIxTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIG9wdGlvbnMubmFtZXMucGxheWVyMSA9IHRoaXMudmFsdWU7XG4gIH0pO1xuXG4gIHBsYXllcjJOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyID0gdGhpcy52YWx1ZTtcbiAgfSk7XG5cbiAgLyogVG8tRG86IG1ha2Ugc3VyZSB0aGUgZ2FtZSBpcyBzdGFydGluZyAqL1xuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBfc3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwbGFzaCcpO1xuICAgIGNvbnN0IF9nYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgICBfc3BsYXNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBfZ2FtZS5jbGFzc0xpc3QuYWRkKCdib3gtLXNob3cnKTtcblxuIC8qIEkgZG9uJ3QgbGlrZSB0aGlzIGNvZGUsIGkgZmVlbCBsaWtlIGkgaGF2ZSByZXBlYXRlZCBteXNlbGYgICAqL1xuICAgIGlmIChvcHRpb25zLnBsYXllcjFUb2tlbiA9PSAnWCcpIHtcbiAgICAgIHBsYXllcjEgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMSxcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIxVG9rZW4sXG4gICAgICAgIHBsYXllclR5cGUuSFVNQU5cbiAgICAgICk7XG5cbiAgICAgIHBsYXllcjIgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMixcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4sXG4gICAgICAgIG9wdGlvbnMub3Bwb25lbnRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcjEgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMixcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4sXG4gICAgICAgIHBsYXllclR5cGUuSFVNQU5cbiAgICAgICk7XG4gICAgICBwbGF5ZXIyID0gcGxheWVyKFxuICAgICAgICBvcHRpb25zLm5hbWVzLnBsYXllcjEsXG4gICAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuLFxuICAgICAgICBvcHRpb25zLm9wcG9uZW50XG4gICAgICApO1xuICAgIH1cbiAgICBwbGF5ZXJzID0gW3BsYXllcjEsIHBsYXllcjJdO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiBwbGF5ZXJzO1xuXG4gIGNvbnN0IG9uU3RhcnRCdG5DbGljayA9IChmbikgPT4ge1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm4pO1xuICB9O1xuXG4gIHJldHVybiB7IG9uU3RhcnRCdG5DbGljaywgc3RhcnQsIGdldFBsYXllcnMgfTtcbn1cblxuY29uc3QgeyBvblN0YXJ0QnRuQ2xpY2ssIHN0YXJ0LCBnZXRQbGF5ZXJzIH0gPSBTcGxhc2hTY3JlZW4oKTtcblxuZXhwb3J0IHsgb25TdGFydEJ0bkNsaWNrLCBzdGFydCwgZ2V0UGxheWVycyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9