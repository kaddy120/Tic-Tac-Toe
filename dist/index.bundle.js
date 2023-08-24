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

  endGameScreen.addEventListener('click', () => {
    endGameScreen.classList.remove('box--show');
    setTimeout(restart, 500);
  });

  endGameScreen.addEventListener('keypress', (event) => {
    console.log(event);
  });

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

  const updateScores = () => { };

  const restart = () => {
    _board.clearBoard();
    _changeTurn('O');
    /* also change turns in logic level*/
    _boxes.forEach((box) => {
      box.innerHTML = '<h2></h2>';
    });
  };

  _restartButton.onclick = restart;
  const getBoxes = () => _boxes;

  const showEndgameScreen = (winner) => {
    endGameScreen.classList.add('box--show');
    if (winner == 'draw') {
      _winner.innerHTML = "It's a draw."
      return;
    }

    _winner.innerHTML = `&#127882; Player <span id="winner">${winner}</span> Won! &#127881`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixPQUFPLEtBQUssS0FBSyx3QkFBd0IsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsZ0NBQWdDLHNDQUFzQyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QixpRkFBaUYsMkRBQTJELDJEQUEyRCw0REFBNEQsOERBQThELDZEQUE2RCwwREFBMEQsOEZBQThGLDZEQUE2RCw4REFBOEQsMkRBQTJELDZEQUE2RCwwREFBMEQsMERBQTBELHdEQUF3RCwwREFBMEQsR0FBRyxPQUFPLGNBQWMsZUFBZSxjQUFjLEdBQUcsa0JBQWtCLGtCQUFrQiwwQkFBMEIsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsVUFBVSw2SkFBNkosbUJBQW1CLDhCQUE4QixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyxZQUFZLCtLQUErSyw4QkFBOEIsd0JBQXdCLEdBQUcsU0FBUyxrQkFBa0IsbUNBQW1DLHNCQUFzQixrQ0FBa0MseUNBQXlDLGdDQUFnQyxTQUFTLDJCQUEyQixnREFBZ0QsR0FBRyxVQUFVLGlCQUFpQix1QkFBdUIsR0FBRyxXQUFXLGtCQUFrQiw2QkFBNkIsd0JBQXdCLEdBQUcsaUJBQWlCLG1CQUFtQiwyQkFBMkIsNkJBQTZCLHVCQUF1QixxQkFBcUIsd0JBQXdCLGtDQUFrQyxHQUFHLFdBQVcsa0JBQWtCLGVBQWUsNEJBQTRCLGlDQUFpQyx1QkFBdUIsV0FBVyxhQUFhLFlBQVksY0FBYyx3QkFBd0IseUJBQXlCLGlMQUFpTCxHQUFHLHNCQUFzQixrQ0FBa0MsZ0JBQWdCLDJCQUEyQix3QkFBd0IsR0FBRyxhQUFhLGdCQUFnQixHQUFHLG9CQUFvQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxXQUFXLHVCQUF1QixHQUFHLHdCQUF3QixxQkFBcUIsb0JBQW9CLDJCQUEyQix3QkFBd0IscUJBQXFCLHdCQUF3QixpQ0FBaUMsa0NBQWtDLEdBQUcsd0JBQXdCLG1CQUFtQix3QkFBd0IsNkJBQTZCLHFCQUFxQix3QkFBd0IsdUJBQXVCLEdBQUcsV0FBVyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isb0RBQW9ELEdBQUcseUNBQXlDLHFCQUFxQixHQUFHLDhCQUE4Qix5QkFBeUIsd0JBQXdCLHFCQUFxQixnQkFBZ0IsdUJBQXVCLG9CQUFvQix1QkFBdUIsd0JBQXdCLDBCQUEwQixvQkFBb0IscUJBQXFCLDJCQUEyQixHQUFHLHVCQUF1QixpQ0FBaUMsR0FBRyw4QkFBOEIsbUJBQW1CLEdBQUcsV0FBVyxrQkFBa0Isd0JBQXdCLHdCQUF3QixnQkFBZ0IsdUJBQXVCLDJCQUEyQix1QkFBdUIscUJBQXFCLHdCQUF3Qix3QkFBd0IscUJBQXFCLGlDQUFpQyx3QkFBd0IsaUJBQWlCLEdBQUcsY0FBYyw2QkFBNkIsR0FBRywrQkFBK0IsY0FBYywrQkFBK0IsS0FBSyxHQUFHLGVBQWUsd0JBQXdCLHdCQUF3QixrQ0FBa0MsR0FBRyx1QkFBdUIsd0JBQXdCLG1CQUFtQixnR0FBZ0csR0FBRyx1QkFBdUIsd0JBQXdCLG1CQUFtQixnR0FBZ0csR0FBRyxlQUFlLDRCQUE0Qix5QkFBeUIsS0FBSyxVQUFVLGdFQUFnRSwyQkFBMkIsNEJBQTRCLHdCQUF3Qix3QkFBd0IseUJBQXlCLDRCQUE0Qix3QkFBd0IsaUZBQWlGLEdBQUcsYUFBYSwrREFBK0QsR0FBRyxzQkFBc0IsZ0NBQWdDLEdBQUcsaUNBQWlDLGlDQUFpQyxHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcsUUFBUSw4REFBOEQsMkJBQTJCLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsaUJBQWlCLHVCQUF1QixpQ0FBaUMsd0JBQXdCLEdBQUcsbUJBQW1CLDRCQUE0Qiw2QkFBNkIsb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsYUFBYSx3QkFBd0IseUJBQXlCLGdDQUFnQyxpQkFBaUIsK0NBQStDLHlCQUF5QixxQkFBcUIsNkVBQTZFLEdBQUcsZ0JBQWdCLHFCQUFxQixvQkFBb0IsMkJBQTJCLEdBQUcsZ0JBQWdCLDJCQUEyQixvQkFBb0IsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLFdBQVcsd0JBQXdCLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLG1DQUFtQyxxQkFBcUIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLGdCQUFnQixxQkFBcUIsd0JBQXdCLHdCQUF3QixxQkFBcUIsd0JBQXdCLGtHQUFrRyx3QkFBd0IsR0FBRyxnQkFBZ0IsMEJBQTBCLHlCQUF5Qix3QkFBd0IscUJBQXFCLHVCQUF1QixZQUFZLEdBQUcsY0FBYyx5Q0FBeUMsR0FBRyxjQUFjLHlDQUF5QyxHQUFHLGVBQWUsbUJBQW1CLG9CQUFvQix1QkFBdUIsR0FBRyxlQUFlLG1CQUFtQixvQkFBb0IsdUJBQXVCLHFCQUFxQixHQUFHLGdCQUFnQiwrQkFBK0IscUJBQXFCLDZCQUE2Qiw4QkFBOEIsR0FBRyxlQUFlLGdDQUFnQyw2QkFBNkIsb0JBQW9CLHVCQUF1QixxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRywwREFBMEQsdUJBQXVCLDBCQUEwQix3QkFBd0Isd0JBQXdCLGdCQUFnQiwyQkFBMkIsNkJBQTZCLGlCQUFpQixHQUFHLGVBQWUscUJBQXFCLGdCQUFnQixxQkFBcUIsS0FBSyxlQUFlLGlCQUFpQixHQUFHLGFBQWEsdUJBQXVCLFdBQVcsWUFBWSxhQUFhLGNBQWMsd0JBQXdCLDJCQUEyQixxQkFBcUIsdUJBQXVCLEdBQUcsb0JBQW9CLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLG1CQUFtQixlQUFlLGNBQWMsYUFBYSx3QkFBd0IscUJBQXFCLEdBQUcscURBQXFELHVCQUF1QixhQUFhLGdDQUFnQyxlQUFlLHVCQUF1QixHQUFHLDJCQUEyQixhQUFhLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLGtDQUFrQyxnQkFBZ0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsb0NBQW9DLCtCQUErQixHQUFHLG9CQUFvQixpQ0FBaUMsR0FBRyxxQ0FBcUMsaUNBQWlDLEdBQUcsc0RBQXNELGVBQWUsd0JBQXdCLEdBQUcsOENBQThDLHdCQUF3QixnQ0FBZ0MsR0FBRyx3Q0FBd0MsbUJBQW1CLEdBQUcsd0NBQXdDLGdCQUFnQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsb0NBQW9DLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixnQkFBZ0IsY0FBYyxhQUFhLFlBQVksdUNBQXVDLDBDQUEwQyx3REFBd0QsMkJBQTJCLGlMQUFpTCxHQUFHLGFBQWEsZ0JBQWdCLDJCQUEyQiwrREFBK0Qsd0JBQXdCLEdBQUcsWUFBWSxtQkFBbUIsd0JBQXdCLG9CQUFvQixxQkFBcUIsd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQixvQkFBb0Isd0JBQXdCLGtDQUFrQyxHQUFHLFdBQVcsa0JBQWtCLHVCQUF1QiwwQ0FBMEMsMkJBQTJCLGlCQUFpQixHQUFHLGdCQUFnQixlQUFlLHdCQUF3Qix3SkFBd0osR0FBRyxZQUFZLGVBQWUsR0FBRyxxQkFBcUI7QUFDbDBmO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDam1CMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNib0M7QUFDQzs7QUFFdEI7QUFDZixlQUFlLGtEQUFTO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFTOztBQUV6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHb0M7QUFDcEMsWUFBWSxTQUFTLGlCQUFpQjtBQUNNOztBQUU3QjtBQUNmLGVBQWUsa0RBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEMsd0JBQXdCLGdCQUFnQjtBQUN4QywwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLE1BQU0sSUFBSSxNQUFNO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQywyQkFBMkIsT0FBTztBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0w7QUFDOEM7O0FBRTlCO0FBQ1E7O0FBRTlDO0FBQ0EscUJBQXFCLHVEQUFVO0FBQy9CLGVBQWUsMkRBQWMsQ0FBQyx5REFBVTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3QixpREFBaUQsTUFBTTtBQUN2RCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakMscURBQXFELE1BQU07QUFDM0Q7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUFVO0FBQ3RDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDRCQUE0Qix5REFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DLFVBQVU7O0FBRVYsOERBQWU7QUFDZixFQUFFLG9EQUFLO0FBQ1AsY0FBYyx5REFBVTtBQUN4QjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEdBQUc7QUFDSDs7O0FBR3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENtQjs7QUFFMUM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLCtDQUFVO0FBQ3hCLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVU7QUFDbkMsOEJBQThCLCtDQUFVO0FBQ3hDO0FBQ0EsTUFBTTtBQUNOO0FBQ0EseUJBQXlCLCtDQUFVO0FBQ25DLDhCQUE4QiwrQ0FBVTtBQUN4QztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBTTtBQUN0QjtBQUNBO0FBQ0EsUUFBUSwrQ0FBVTtBQUNsQjs7QUFFQSxnQkFBZ0IsK0NBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sZ0JBQWdCLCtDQUFNO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLCtDQUFVO0FBQ2xCO0FBQ0EsZ0JBQWdCLCtDQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsUUFBUSxxQ0FBcUM7O0FBRUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2dhbWVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zcGxhc2hTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogY29sb3IgKi9cbiAgLS1ncmF5LTUwOiAjZmFmYWZhO1xuICAtLWdyYXktNDAwOiAjZDRkNGQ4O1xuICAtLWdyYXktNTAwOiAjNmI3MjgwO1xuICAtLWdyYXktNjAwOiAjNGI1NTYzO1xuICAtLWdyYXktMzAwOiAjZDRkNGQ4O1xuICAtLWdyYXktMjAwOiAjZTRlNGU3O1xuICAtLWdyYXktMTAwOiAjZjNmNGY2O1xuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xuICAtLWdyYXktODAwOiAjMWYyOTM3O1xuICAtLWdyYXktOTAwOiAjMTExODI3O1xuXG4gIC8qIGZvbnRzICovXG5cbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjY5cmVtLCBjYWxjKDAuNjZyZW0gKyAwLjE4dncpLCAwLjhyZW0pO1xuICAtLXN0ZXAtMDogY2xhbXAoMC44NXJlbSwgY2FsYygwLjc4cmVtICsgMC4yOXZ3KSwgMXJlbSk7XG4gIC0tc3RlcC0xOiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcbiAgLS1zdGVwLTI6IGNsYW1wKDEuMnJlbSwgY2FsYygxLjA3cmVtICsgMC42M3Z3KSwgMS41cmVtKTtcbiAgLS1zdGVwLTM6IGNsYW1wKDEuNDRyZW0sIGNhbGMoMS4yNnJlbSArIDAuODl2dyksIDEuNzVyZW0pO1xuICAtLXN0ZXAtNDogY2xhbXAoMS43M3JlbSwgY2FsYygxLjQ4cmVtICsgMS4yNHZ3KSwgMi41cmVtKTtcbiAgLS1zdGVwLTU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgM3JlbSk7XG5cbiAgLyogbGVuZ3RocyB8fCBzcGFjaW5nICovXG5cbiAgLS1sZ3RoLTE6IGNsYW1wKDAuMjVyZW0sIGNhbGMoMC4yM3JlbSArIDAuMTF2dyksIDAuMzFyZW0pO1xuICAtLWxndGgtMjogY2xhbXAoMC41cmVtLCBjYWxjKDAuNDZyZW0gKyAwLjIydncpLCAwLjYzcmVtKTtcbiAgLS1sZ3RoLTM6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC42OHJlbSArIDAuMzN2dyksIDAuOTRyZW0pO1xuICAtLWxndGgtNDogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XG4gIC0tbGd0aC01OiBjbGFtcCgxLjVyZW0sIGNhbGMoMS4zN3JlbSArIDAuNjV2dyksIDEuODhyZW0pO1xuICAtLWxndGgtNjogY2xhbXAoMnJlbSwgY2FsYygxLjgzcmVtICsgMC44N3Z3KSwgMi41cmVtKTtcbiAgLS1sZ3RoLTc6IGNsYW1wKDNyZW0sIGNhbGMoMi43NHJlbSArIDEuM3Z3KSwgMy43NXJlbSk7XG4gIC0tbGd0aC04OiBjbGFtcCg0cmVtLCBjYWxjKDMuNjVyZW0gKyAxLjc0dncpLCA1cmVtKTtcbiAgLS1sZ3RoLTk6IGNsYW1wKDZyZW0sIGNhbGMoNS40OHJlbSArIDIuNjF2dyksIDcuNXJlbSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLnJlc3VsdHMgc3ZnIHtcbiAgZmlsbDogIzAzNjlhMTtcbiAgZmlsbDogdmFyKC0tZ3JheS01MDApO1xufVxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NWM3YTtcbiAgcGFkZGluZy1ibG9jazogMThweDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luLWlubGluZTogdmFyKC0tbGd0aC00KTsgLyogTWluaW11bSBtYXJnaW4gZm9yIHNtYWxsIHNjcmVlbnMgKi9cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyNTZweCkge1xuICBuYXYge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87IC8qIExldCB0aGUgbWFyZ2luIGdyb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cbiAgfVxufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIGNvbG9yOiAjZDllMmU4O1xuICBmb250LWZhbWlseTogUnVzc28gT25lO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNSk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMik7XG59XG5cbi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcbn1cblxuLmdhbWUgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTMpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLnNwbGFzaCB7XG4gIGhlaWdodDogODglO1xufVxuXG4uc3BsYXNoLW9wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubm90ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwbGFzaCAuY29udGFpbmVyIHtcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTcpO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC00KTtcbn1cblxuLnNwbGFzaC1zdWJoZWFkaW5nIHtcbiAgY29sb3I6ICM4NGE1Yjg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDM4cHggMzhweDtcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogIzI3NWM3YTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3JtLWNvbnRyb2xsZXIgKyAuZm9ybS1jb250cm9sbGVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiAjMjg0OTVkO1xuXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWdyYXktMTAwKTtcbn1cblxuLmZvcm0gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAxLjVweCBzb2xpZCAjMDA3YmZmO1xufVxuXG4uZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg1OWVhZDtcbn1cblxuLnR1cm4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzk5OTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LWZhbWlseTogUnVzc28gT25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNyk7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnR1cm4gaDMge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTNweCkge1xuICAudHVybiBoMyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICB9XG59XG5cbi50dXJuID4gKiB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTYpO1xufVxuXG4ucGxheWVyLVgucGxheWluZyB7XG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XG4gIGNvbG9yOiAjZmJlZGRlO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4ucGxheWVyLU8ucGxheWluZyB7XG4gIGJhY2tncm91bmQ6ICMzMDhkZmU7XG4gIGNvbG9yOiAjZmJlZGRlO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4ucGxheWVyLU8ge1xuICAvKiBiYWNrZ3JvdW5kOiAjZmE4YTJmOyAqL1xuICAvKiBjb2xvcjogI2ZiZWRkZTsgKi9cbn1cblxuLmJveCB7XG4gIC0tYm94LXNpemU6IGNsYW1wKDQuNXJlbSwgY2FsYygtMC44M3JlbSArIDI2LjY3dncpLCA3LjVyZW0pO1xuICB3aWR0aDogdmFyKC0tYm94LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWJveC1zaXplKTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogI2ViZjNmNztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiBoc2woMCwgMCUsIDAlKSAwcHggMnB4IDVweCAtMXB4LCBoc2woMCwgMCUsIDAlKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4uYm94IGgyIHtcbiAgZm9udC1zaXplOiBjbGFtcCg0LjAzcmVtLCBjYWxjKDAuNnJlbSArIDE3LjE1dncpLCA1Ljk2cmVtKTtcbn1cblxuLmJveDpub3QoLmNvbC0zKSB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbGd0aC00KTtcbn1cblxuLmdhbWUtYm9hcmQgPiAqOm5vdCgucm93LTMpIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC00KTtcbn1cblxuLlgsXG4uaWNvbi1YIHtcbiAgY29sb3I6ICNmYjkyM2M7XG59XG5cbi5PLFxuLmljb24tTyB7XG4gIGNvbG9yOiAjNjBhNWZhO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzLjA1cmVtKTtcbiAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZ2FtZS1ib2FyZCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuaGVhZGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaGVhZGVyIHN2ZyB7XG4gIGZpbGw6ICM4NGE1Yjg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5nYW1lLWJvYXJkID4gKiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdGF0dXMge1xuICBwYWRkaW5nLWJsb2NrOiAyNHB4O1xuICBwYWRkaW5nLWlubGluZTogMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xuICB3aWR0aDogMjUwcHg7XG4gIC8qIGJveC1zaGFkb3c6IDAgNHB4IDZweCBoc2xhKDAsIDAlLCAwLjIpOyAqL1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLnN0YXR1cyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbn1cblxuLnN0YXR1cyBoNCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN0YXR1cy13aW4tY291bnQge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zdGF0dXMtZHJhdyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5zdGF0dXMge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ucmVzdWx0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cbi5yZXN1bHRzID4gKiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBib3gtc2hhZG93OiBoc2xhKDAsIDAlLCAwJSwgMC44KSAwcHggMnB4IDVweCAtMXB4LFxuICAgIGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAxcHggM3B4IC0xcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5zY29yZSA+ICoge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG59XG5cbi5zY29yZS1YIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDEzOCwgNDcsIDAuNjIpO1xufVxuXG4uc2NvcmUtTyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDgsIDE0MSwgMjU0LCAwLjU3KTtcbn1cblxuLnNjb3JlIGgzIHtcbiAgY29sb3I6ICM0NDQyNDI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uc2NvcmUgaDIge1xuICBjb2xvcjogIzM3MzYzNjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zcGxhc2ggaDQge1xuICBjb2xvcjogaHNsKDIwMmRlZyAyMCUgNTUlKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1sZ3RoLTMpO1xufVxuXG4uc3BsYXNoIGEge1xuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XG4gIGZvbnQtZmFtaWx5OiAncnVzc28gb25lJztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5zcGxhc2ggYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlci1sYWJlbCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBmb3IgdGhlIGh1bWFuLWJvdCBzbGlkZXIgKi9cbi5zbGlkZXItbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuXG4uc2xpZGVyLTEge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogd2lkdGg6IDQwMHB4OyAqL1xufVxuXG4uc2xpZGVyLTIge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLyogd2lkdGg6IDIwMHB4OyAqL1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZjZmM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG5cbiAgaGVpZ2h0OiA1NHB4O1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubGFiZWwtaHVtYW4sXG4ubGFiZWwtYm90LFxuLmxhYmVsLVgsXG4ubGFiZWwtTyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwtYm90LFxuLmxhYmVsLU8ge1xuICByaWdodDogMDtcbn1cblxuLmxhYmVsLWh1bWFuIHtcbiAgY29sb3I6ICM0YjQ5NDg7XG59XG5cbmlucHV0OmNoZWNrZWQgfiAubGFiZWwtaHVtYW4ge1xuICBjb2xvcjogIzk5OTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1ib3Qge1xuICBjb2xvcjogIzRiNDk0ODtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDk1JSk7XG59XG5cbi5zcGxhc2gtb3B0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcbn1cblxuLnNwbGFzaC1vcHRpb24gKyAuc3BsYXNoLW9wdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtOCk7XG59XG5cbi8qIFNsaWRlciAyIHN0eWxlcyAgKi9cbi5zbGlkZXItMiAuc2xpZGVyOmJlZm9yZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XG59XG5cbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLnNsaWRlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjNjBhNWZhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XG59XG5cbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLU8ge1xuICBjb2xvcjogI2ZiZWRkZTtcbn1cblxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAubGFiZWwtWCB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4ubGFiZWwtWCB7XG4gIGNvbG9yOiAjZmJlZGRlO1xufVxuXG4vKiBXaW4gc3RhdGUgc3R5bGVzICovXG5cbi53aW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMDBweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDI4LCAwLjgyKTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1cywgb3BhY2l0eSA1cztcbiAgLyogYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICovXG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiB0aGUgbm9ybWFsIGJveCBkZWxheXMgdmlzaWJpbGl0eSB0cmFuc2l0aW9uIHNvIGl0IGRvZXNuJ3QgaGlkZSB1bnRpbCBhZnRlciB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIGRvbmUgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIDUwMG1zO1xufVxuXG4ud2luIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMy4zNnJlbSwgY2FsYygyLjAzcmVtICsgNi42NHZ3KSwgNy4wMXJlbSk7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi53aW4gcCB7XG4gIGNvbG9yOiAjYmZjN2NhO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndpbiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0zKTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNXMsIG9wYWNpdHkgNXM7XG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cbiAgb3BhY2l0eTogMDtcbn1cblxuLmJveC0tc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC8qIHRoZSBzaG93biBib3ggZG9lcyBub3QgZGVsYXkgdmlzaWJpbGl0eSwgc28gaXQgc2hvd3MgaW5zdGFudGx5IGFuZCB0cmFuc2l0aW9ucyBvcGFjaXR5ICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhcjtcbn1cblxuLmhlbGxvIHtcbiAgY29sb3I6IHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixVQUFVOztFQUVWLHlEQUF5RDtFQUN6RCxzREFBc0Q7RUFDdEQsc0RBQXNEO0VBQ3RELHVEQUF1RDtFQUN2RCx5REFBeUQ7RUFDekQsd0RBQXdEO0VBQ3hELHFEQUFxRDs7RUFFckQsdUJBQXVCOztFQUV2Qix5REFBeUQ7RUFDekQsd0RBQXdEO0VBQ3hELHlEQUF5RDtFQUN6RCxzREFBc0Q7RUFDdEQsd0RBQXdEO0VBQ3hELHFEQUFxRDtFQUNyRCxxREFBcUQ7RUFDckQsbURBQW1EO0VBQ25ELHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTt3RUFDc0U7RUFDdEUsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTs7Y0FFWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQiw0QkFBNEIsRUFBRSxxQ0FBcUM7QUFDckU7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQixFQUFFLDBDQUEwQztFQUNqRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNw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cUI7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLHFEQUFxRDs7RUFFckQsa0JBQWtCO0VBQ2xCLDhHQUE4RztFQUM5Ryx5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDBEQUEwRDtFQUMxRCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkZBQTJGO0VBQzNGLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBjb2xvciAqL1xcbiAgLS1ncmF5LTUwOiAjZmFmYWZhO1xcbiAgLS1ncmF5LTQwMDogI2Q0ZDRkODtcXG4gIC0tZ3JheS01MDA6ICM2YjcyODA7XFxuICAtLWdyYXktNjAwOiAjNGI1NTYzO1xcbiAgLS1ncmF5LTMwMDogI2Q0ZDRkODtcXG4gIC0tZ3JheS0yMDA6ICNlNGU0ZTc7XFxuICAtLWdyYXktMTAwOiAjZjNmNGY2O1xcbiAgLS1ncmF5LTcwMDogIzM3NDE1MTtcXG4gIC0tZ3JheS04MDA6ICMxZjI5Mzc7XFxuICAtLWdyYXktOTAwOiAjMTExODI3O1xcblxcbiAgLyogZm9udHMgKi9cXG5cXG4gIC0tc3RlcC0tMTogY2xhbXAoMC42OXJlbSwgY2FsYygwLjY2cmVtICsgMC4xOHZ3KSwgMC44cmVtKTtcXG4gIC0tc3RlcC0wOiBjbGFtcCgwLjg1cmVtLCBjYWxjKDAuNzhyZW0gKyAwLjI5dncpLCAxcmVtKTtcXG4gIC0tc3RlcC0xOiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcXG4gIC0tc3RlcC0yOiBjbGFtcCgxLjJyZW0sIGNhbGMoMS4wN3JlbSArIDAuNjN2dyksIDEuNXJlbSk7XFxuICAtLXN0ZXAtMzogY2xhbXAoMS40NHJlbSwgY2FsYygxLjI2cmVtICsgMC44OXZ3KSwgMS43NXJlbSk7XFxuICAtLXN0ZXAtNDogY2xhbXAoMS43M3JlbSwgY2FsYygxLjQ4cmVtICsgMS4yNHZ3KSwgMi41cmVtKTtcXG4gIC0tc3RlcC01OiBjbGFtcCgyLjA3cmVtLCBjYWxjKDEuNzNyZW0gKyAxLjd2dyksIDNyZW0pO1xcblxcbiAgLyogbGVuZ3RocyB8fCBzcGFjaW5nICovXFxuXFxuICAtLWxndGgtMTogY2xhbXAoMC4yNXJlbSwgY2FsYygwLjIzcmVtICsgMC4xMXZ3KSwgMC4zMXJlbSk7XFxuICAtLWxndGgtMjogY2xhbXAoMC41cmVtLCBjYWxjKDAuNDZyZW0gKyAwLjIydncpLCAwLjYzcmVtKTtcXG4gIC0tbGd0aC0zOiBjbGFtcCgwLjc1cmVtLCBjYWxjKDAuNjhyZW0gKyAwLjMzdncpLCAwLjk0cmVtKTtcXG4gIC0tbGd0aC00OiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcXG4gIC0tbGd0aC01OiBjbGFtcCgxLjVyZW0sIGNhbGMoMS4zN3JlbSArIDAuNjV2dyksIDEuODhyZW0pO1xcbiAgLS1sZ3RoLTY6IGNsYW1wKDJyZW0sIGNhbGMoMS44M3JlbSArIDAuODd2dyksIDIuNXJlbSk7XFxuICAtLWxndGgtNzogY2xhbXAoM3JlbSwgY2FsYygyLjc0cmVtICsgMS4zdncpLCAzLjc1cmVtKTtcXG4gIC0tbGd0aC04OiBjbGFtcCg0cmVtLCBjYWxjKDMuNjVyZW0gKyAxLjc0dncpLCA1cmVtKTtcXG4gIC0tbGd0aC05OiBjbGFtcCg2cmVtLCBjYWxjKDUuNDhyZW0gKyAyLjYxdncpLCA3LjVyZW0pO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5yZXN1bHRzIHN2ZyB7XFxuICBmaWxsOiAjMDM2OWExO1xcbiAgZmlsbDogdmFyKC0tZ3JheS01MDApO1xcbn1cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzBhMGEwYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NWM3YTtcXG4gIHBhZGRpbmctYmxvY2s6IDE4cHg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW4taW5saW5lOiB2YXIoLS1sZ3RoLTQpOyAvKiBNaW5pbXVtIG1hcmdpbiBmb3Igc21hbGwgc2NyZWVucyAqL1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1NnB4KSB7XFxuICBuYXYge1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvOyAvKiBMZXQgdGhlIG1hcmdpbiBncm93IG9uIGxhcmdlciBzY3JlZW5zICovXFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgY29sb3I6ICNkOWUyZTg7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTUpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0yKTtcXG59XFxuXFxuLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXIgNTAwbXM7XFxufVxcblxcbi5nYW1lIC5jb250YWluZXIge1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMyk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uc3BsYXNoIHtcXG4gIGhlaWdodDogODglO1xcbn1cXG5cXG4uc3BsYXNoLW9wdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3BsYXNoIC5jb250YWluZXIge1xcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTcpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNCk7XFxufVxcblxcbi5zcGxhc2gtc3ViaGVhZGluZyB7XFxuICBjb2xvcjogIzg0YTViODtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgcGFkZGluZzogMzhweCAzOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICBiYWNrZ3JvdW5kOiAjMjc1YzdhO1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5mb3JtLWNvbnRyb2xsZXIgKyAuZm9ybS1jb250cm9sbGVyIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBwYWRkaW5nLWlubGluZTogMTZweDtcXG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XFxuICBtYXgtd2lkdGg6IDMzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBiYWNrZ3JvdW5kOiAjMjg0OTVkO1xcblxcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0xMDApO1xcbn1cXG5cXG4uZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxLjVweCBzb2xpZCAjMDA3YmZmO1xcbn1cXG5cXG4uZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM4NTllYWQ7XFxufVxcblxcbi50dXJuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTcpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnR1cm4gaDMge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDEzcHgpIHtcXG4gIC50dXJuIGgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcbiAgfVxcbn1cXG5cXG4udHVybiA+ICoge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC02KTtcXG59XFxuXFxuLnBsYXllci1YLnBsYXlpbmcge1xcbiAgYmFja2dyb3VuZDogI2ZhOGEyZjtcXG4gIGNvbG9yOiAjZmJlZGRlO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDBweCAycHggNHB4IDBweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxufVxcblxcbi5wbGF5ZXItTy5wbGF5aW5nIHtcXG4gIGJhY2tncm91bmQ6ICMzMDhkZmU7XFxuICBjb2xvcjogI2ZiZWRkZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC40KSAwcHggMnB4IDRweCAwcHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xcbn1cXG5cXG4ucGxheWVyLU8ge1xcbiAgLyogYmFja2dyb3VuZDogI2ZhOGEyZjsgKi9cXG4gIC8qIGNvbG9yOiAjZmJlZGRlOyAqL1xcbn1cXG5cXG4uYm94IHtcXG4gIC0tYm94LXNpemU6IGNsYW1wKDQuNXJlbSwgY2FsYygtMC44M3JlbSArIDI2LjY3dncpLCA3LjVyZW0pO1xcbiAgd2lkdGg6IHZhcigtLWJveC1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYm94LXNpemUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gIGJhY2tncm91bmQ6ICNlYmYzZjc7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IGhzbCgwLCAwJSwgMCUpIDBweCAycHggNXB4IC0xcHgsIGhzbCgwLCAwJSwgMCUpIDBweCAxcHggM3B4IC0xcHg7XFxufVxcblxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0LjAzcmVtLCBjYWxjKDAuNnJlbSArIDE3LjE1dncpLCA1Ljk2cmVtKTtcXG59XFxuXFxuLmJveDpub3QoLmNvbC0zKSB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWxndGgtNCk7XFxufVxcblxcbi5nYW1lLWJvYXJkID4gKjpub3QoLnJvdy0zKSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTQpO1xcbn1cXG5cXG4uWCxcXG4uaWNvbi1YIHtcXG4gIGNvbG9yOiAjZmI5MjNjO1xcbn1cXG5cXG4uTyxcXG4uaWNvbi1PIHtcXG4gIGNvbG9yOiAjNjBhNWZhO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgMy4wNXJlbSk7XFxuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBzdmcge1xcbiAgZmlsbDogIzg0YTViODtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5nYW1lLWJvYXJkID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIHBhZGRpbmctYmxvY2s6IDI0cHg7XFxuICBwYWRkaW5nLWlubGluZTogMjRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIC8qIGJveC1zaGFkb3c6IDAgNHB4IDZweCBoc2xhKDAsIDAlLCAwLjIpOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLnN0YXR1cyBoMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcXG59XFxuXFxuLnN0YXR1cyBoNCB7XFxuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc3RhdHVzLXdpbi1jb3VudCB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5zdGF0dXMtZHJhdyB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5zdGF0dXMge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5yZXN1bHRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG4ucmVzdWx0cyA+ICoge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2NvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGJveC1zaGFkb3c6IGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAycHggNXB4IC0xcHgsXFxuICAgIGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAxcHggM3B4IC0xcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uc2NvcmUgPiAqIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xcbiAgcGFkZGluZy1ibG9jazogMjBweDtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2NvcmUtWCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTM4LCA0NywgMC42Mik7XFxufVxcblxcbi5zY29yZS1PIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDgsIDE0MSwgMjU0LCAwLjU3KTtcXG59XFxuXFxuLnNjb3JlIGgzIHtcXG4gIGNvbG9yOiAjNDQ0MjQyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4uc2NvcmUgaDIge1xcbiAgY29sb3I6ICMzNzM2MzY7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc3BsYXNoIGg0IHtcXG4gIGNvbG9yOiBoc2woMjAyZGVnIDIwJSA1NSUpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG4gIG1hcmdpbi10b3A6IHZhcigtLWxndGgtMyk7XFxufVxcblxcbi5zcGxhc2ggYSB7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XFxuICBmb250LWZhbWlseTogJ3J1c3NvIG9uZSc7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwbGFzaCBhOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlci1sYWJlbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHRoZSBodW1hbi1ib3Qgc2xpZGVyICovXFxuLnNsaWRlci1sYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAzM3B4O1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIGhlaWdodDogNjJweDtcXG59XFxuXFxuLnNsaWRlci0xIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIHdpZHRoOiA0MDBweDsgKi9cXG59XFxuXFxuLnNsaWRlci0yIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZjZmM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG5cXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBsZWZ0OiA0cHg7XFxuICB0b3A6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubGFiZWwtaHVtYW4sXFxuLmxhYmVsLWJvdCxcXG4ubGFiZWwtWCxcXG4ubGFiZWwtTyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sYWJlbC1ib3QsXFxuLmxhYmVsLU8ge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5sYWJlbC1odW1hbiB7XFxuICBjb2xvcjogIzRiNDk0ODtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1odW1hbiB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1ib3Qge1xcbiAgY29sb3I6ICM0YjQ5NDg7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTUlKTtcXG59XFxuXFxuLnNwbGFzaC1vcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcXG59XFxuXFxuLnNwbGFzaC1vcHRpb24gKyAuc3BsYXNoLW9wdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTgpO1xcbn1cXG5cXG4vKiBTbGlkZXIgMiBzdHlsZXMgICovXFxuLnNsaWRlci0yIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmE4YTJmO1xcbn1cXG5cXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5zbGlkZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICM2MGE1ZmE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XFxufVxcblxcbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLU8ge1xcbiAgY29sb3I6ICNmYmVkZGU7XFxufVxcblxcbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLVgge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcblxcbi5sYWJlbC1YIHtcXG4gIGNvbG9yOiAjZmJlZGRlO1xcbn1cXG5cXG4vKiBXaW4gc3RhdGUgc3R5bGVzICovXFxuXFxuLndpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjAwcHg7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyOCwgMjgsIDAuODIpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1cywgb3BhY2l0eSA1cztcXG4gIC8qIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAqL1xcblxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXIgNTAwbXM7XFxufVxcblxcbi53aW4gaDEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zaXplOiBjbGFtcCgzLjM2cmVtLCBjYWxjKDIuMDNyZW0gKyA2LjY0dncpLCA3LjAxcmVtKTtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi53aW4gcCB7XFxuICBjb2xvcjogI2JmYzdjYTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpbiAuY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0zKTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNXMsIG9wYWNpdHkgNXM7XFxuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uYm94LS1zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgLyogdGhlIHNob3duIGJveCBkb2VzIG5vdCBkZWxheSB2aXNpYmlsaXR5LCBzbyBpdCBzaG93cyBpbnN0YW50bHkgYW5kIHRyYW5zaXRpb25zIG9wYWNpdHkgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhcjtcXG59XFxuXFxuLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgYm90UGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQ29udHJvbGxlcihwbGF5ZXJzKSB7XG4gIGxldCBfYm9hcmQgPSBHYW1lYm9hcmQ7XG4gIGxldCBfbW92ZXNDb3VudCA9IDA7XG4gIGxldCBfaXNQbGF5ZXIxVHVybiA9IHRydWU7XG4gIGxldCBfYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcblxuICBjb25zdCBvcHBvbmVudCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihwbGF5ZXJzW2ldLm5hbWUgPT0gXCJib3RcIil7XG4gICAgICAgIHJldHVybiB7Ym90OiB0cnVlLCB0dXJuOiBpfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2JvdDogZmFsc2UsIHR1cm46IG51bGx9XG4gIH1cblxuICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgIF9hY3RpdmVQbGF5ZXIgPVxuICAgICAgX2FjdGl2ZVBsYXllci50b2tlbiA9PT0gcGxheWVyc1swXS50b2tlbiA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IF9hY3RpdmVQbGF5ZXI7XG5cbiAgY29uc3QgcGxheVJvdW5kID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IHRva2VuID0gZ2V0QWN0aXZlUGxheWVyKCkudG9rZW47XG4gICAgaWYgKCFfYm9hcmQucGxhY2VNb3ZlKHRva2VuLCBpbmRleCkpIHJldHVybiAtMTtcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgcmV0dXJuIHsgaW5kZXgsIHRva2VuIH07XG4gIH07XG5cbiAgY29uc3QgYm90UGxheVJvdW5kID0gKCkgPT4ge1xuICAgIGxldCB0b2tlbiA9IGdldEFjdGl2ZVBsYXllcigpLnRva2VuO1xuICAgIGxldCBpbmRleCA9IGJvdFBsYXllci5nZW5lcmF0ZU1vdmUoX2JvYXJkLmdldEJvYXJkKCkpO1xuXG4gICAgaWYgKCFfYm9hcmQucGxhY2VNb3ZlKHRva2VuLCBpbmRleCkpIHJldHVybiAtMTtcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgcmV0dXJuIHsgaW5kZXgsIHRva2VuIH07XG4gIH07XG5cbiAgY29uc3QgY2hlY2tXaW4gPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCBib2FyZCA9IF9ib2FyZC5nZXRCb2FyZCgpO1xuICAgIGxldCBjb2xTaXplID0gX2JvYXJkLmdldENvbHMoKTtcbiAgICBsZXQgaXNXaW4gPSB0cnVlO1xuXG4gICAgLyogY2hlY2sgaWYgdGhlcmUgaXMgaG9yaXpvbmF0YWwgd2luICovXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMzsgcm93KyspIHtcbiAgICAgIGlzV2luID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDM7IGNvbCsrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3cgKiBjb2xTaXplICsgY29sXSAhPT0gdG9rZW4pIHtcbiAgICAgICAgICBpc1dpbiA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogY2hlY2sgaWYgdGhlcmUgaXMgdmVydGljYWwgd2luICovXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMzsgY29sKyspIHtcbiAgICAgIGlzV2luID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3cgKiBjb2xTaXplICsgY29sXSAhPT0gdG9rZW4pIHtcbiAgICAgICAgICBpc1dpbiA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogY2hlY2sgaWYgdGhlcmUncyBhIGRpYWdvbmFsIHdpbiAqL1xuICAgIGlmIChib2FyZFswXSA9PSB0b2tlbiAmJiBib2FyZFs0XSA9PSB0b2tlbiAmJiBib2FyZFs4XSA9PSB0b2tlbilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmIChib2FyZFs2XSA9PSB0b2tlbiAmJiBib2FyZFs0XSA9PSB0b2tlbiAmJiBib2FyZFsyXSA9PSB0b2tlbilcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNjb3JlID0gKHRva2VuKSA9PiB7XG4gICAgaWYgKHRva2VuID09PSAnZHJhdycpIHtcbiAgICAgIHBsYXllcnNbMF0udGllcyA9IHBsYXllcnNbMF0ud2lucyArIDE7XG4gICAgICBwbGF5ZXJzWzFdLnRpZXMgPSBwbGF5ZXJzWzFdLndpbnMgKyAxO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgaWYgKHBsYXllcnNbaV0udG9rZW4gPT09IHRva2VuKSBwbGF5ZXJzW2ldLndpbnMgPSBwbGF5ZXJzW2ldLndpbnMgKyAxO1xuICAgIH1cbiAgICAvKiBQdXR0aW5nIHRoaXMgaGVyZSBtYWtlcyB0aGlzIGZ1bmN0aW9uIGlucHVyZSAqL1xuICAgIF9hY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICB9O1xuXG4gIHJldHVybiB7b3Bwb25lbnQsIGJvdFBsYXlSb3VuZCwgcGxheVJvdW5kLCBjaGVja1dpbiwgdXBkYXRlU2NvcmUgfTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuLyogaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInOyAqL1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4vc3BsYXNoU2NyZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZVNjcmVlbigpIHtcbiAgbGV0IF9ib2FyZCA9IEdhbWVib2FyZDtcbiAgbGV0IF9yZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKTtcbiAgbGV0IF9yZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQnKTtcbiAgbGV0IF90dXJuWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItWCcpO1xuICBsZXQgX3R1cm5PID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1PJyk7XG4gIGxldCBfd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbm5lcicpO1xuXG4gIGxldCBfc2NvcmVYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLVggaDInKTtcbiAgbGV0IF9zY29yZU8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtTyBoMicpO1xuICBsZXQgX3RpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtdGllcyBoMicpO1xuICBjb25zdCBwbGF5ZXJzID0gZ2V0UGxheWVycygpO1xuICBsZXQgX25hbWVYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLVggI25hbWUnKTtcbiAgbGV0IF9uYW1lTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1PICNuYW1lJyk7XG4gIF9uYW1lTy5pbm5lckhUTUwgPSBgJHtwbGF5ZXJzWzFdLm5hbWV9YDtcbiAgX25hbWVYLmlubmVySFRNTCA9IGAke3BsYXllcnNbMF0ubmFtZX1gO1xuICAvKiBsZXQgX2VuZEdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luJyk7ICovXG4gIGNvbnN0IF9ib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcbiAgY29uc3QgZW5kR2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW4nKTtcblxuICBlbmRHYW1lU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVuZEdhbWVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnYm94LS1zaG93Jyk7XG4gICAgc2V0VGltZW91dChyZXN0YXJ0LCA1MDApO1xuICB9KTtcblxuICBlbmRHYW1lU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcblxuICBjb25zdCBfY2hhbmdlVHVybiA9ICh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbiA9PSAnWCcpIHtcbiAgICAgIF90dXJuTy5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgICBfdHVyblguY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdHVybk8uY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgICAgX3R1cm5YLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5kZXggPSAoYm94KSA9PiB7XG4gICAgY29uc3QgaWQgPSBib3guZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHJldHVybiBwYXJzZUludChpZCk7XG4gIH07XG5cbiAgY29uc3QgcGFpbnRNb3ZlID0gKGJveCwgdG9rZW4pID0+IHtcbiAgICBib3guaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cIiR7dG9rZW59XCI+JHt0b2tlbn08L2gyPmA7XG4gICAgX2NoYW5nZVR1cm4odG9rZW4pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9ICgpID0+IHsgfTtcblxuICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIF9ib2FyZC5jbGVhckJvYXJkKCk7XG4gICAgX2NoYW5nZVR1cm4oJ08nKTtcbiAgICAvKiBhbHNvIGNoYW5nZSB0dXJucyBpbiBsb2dpYyBsZXZlbCovXG4gICAgX2JveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmlubmVySFRNTCA9ICc8aDI+PC9oMj4nO1xuICAgIH0pO1xuICB9O1xuXG4gIF9yZXN0YXJ0QnV0dG9uLm9uY2xpY2sgPSByZXN0YXJ0O1xuICBjb25zdCBnZXRCb3hlcyA9ICgpID0+IF9ib3hlcztcblxuICBjb25zdCBzaG93RW5kZ2FtZVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcbiAgICBlbmRHYW1lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2JveC0tc2hvdycpO1xuICAgIGlmICh3aW5uZXIgPT0gJ2RyYXcnKSB7XG4gICAgICBfd2lubmVyLmlubmVySFRNTCA9IFwiSXQncyBhIGRyYXcuXCJcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfd2lubmVyLmlubmVySFRNTCA9IGAmIzEyNzg4MjsgUGxheWVyIDxzcGFuIGlkPVwid2lubmVyXCI+JHt3aW5uZXJ9PC9zcGFuPiBXb24hICYjMTI3ODgxYFxuICB9O1xuXG4gIGNvbnN0IHBhaW50U2NvcmUgPSAocGxheWVycykgPT4ge1xuICAgIF9zY29yZVguaW5uZXJIVE1MID0gcGxheWVyc1swXS53aW5zO1xuICAgIF9zY29yZU8uaW5uZXJIVE1MID0gcGxheWVyc1sxXS53aW5zO1xuICAgIF90aWVzLmlubmVySFRNTCA9IHBsYXllcnNbMV0udGllcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEluZGV4LFxuICAgIHJlc3RhcnQsXG4gICAgdXBkYXRlU2NvcmVzLFxuICAgIGdldEJveGVzLFxuICAgIHBhaW50TW92ZSxcbiAgICBzaG93RW5kZ2FtZVNjcmVlbixcbiAgICBwYWludFNjb3JlLFxuICB9O1xufVxuIiwiZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCByb3dzID0gMztcbiAgY29uc3QgY29sdW1ucyA9IDM7XG4gIGNvbnN0IE5VTUJFUl9PRl9TUVVBUkVTID0gcm93cyAqIGNvbHVtbnM7XG5cbiAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEFycmF5KE5VTUJFUl9PRl9TUVVBUkVTKTtcbiAgZ2FtZWJvYXJkLmZpbGwoMCk7XG5cbiAgY29uc3QgcGxhY2VNb3ZlID0gKG1vdmUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHNxdWFyZUlzVGFrZW4oaW5kZXgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdhbWVib2FyZFtpbmRleF0gPSBtb3ZlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNxdWFyZUlzVGFrZW4gPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkW2luZGV4XSA9PT0gJ1gnIHx8IGdhbWVib2FyZFtpbmRleF0gPT09ICdPJykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuICBjb25zdCBnZXRSb3dzID0gKCkgPT4gcm93cztcbiAgY29uc3QgZ2V0Q29scyA9ICgpID0+IGNvbHVtbnM7XG5cbiAgY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgICBnYW1lYm9hcmQuZmlsbCgwKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRCb2FyZCwgcGxhY2VNb3ZlLCBnZXRDb2xzLCBjbGVhckJvYXJkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCgpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgb25TdGFydEJ0bkNsaWNrLCBzdGFydCwgZ2V0UGxheWVycyB9IGZyb20gJy4vc3BsYXNoU2NyZWVuJztcblxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9nYW1lU2NyZWVuJztcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVDb250cm9sbGVyJztcblxuZnVuY3Rpb24gU2NyZWVuQ29udHJvbGxlcigpIHtcbiAgY29uc3QgZ2FtZVNjcmVlbiA9IEdhbWVTY3JlZW4oKTtcbiAgY29uc3QgZ2FtZSA9IEdhbWVDb250cm9sbGVyKGdldFBsYXllcnMoKSk7XG5cbiAgbGV0IHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbm5lcicpO1xuICBsZXQgaW5kZXg7XG4gIGxldCBtb3ZlcyA9IDA7XG4gIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5vcHBvbmVudCgpO1xuICBnYW1lU2NyZWVuLnBhaW50U2NvcmUoZ2V0UGxheWVycygpKTtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgLyogSWYgYSBib3QgaXMgcGxheWluZyBmaXJzdCwgc3RhcnQgcGxheWluZyBoZXJlICovXG4gICAgaWYgKG9wcG9uZW50LmJvdCAmJiBvcHBvbmVudC50dXJuID09IDApIHtcbiAgICAgIGNvbnN0IHsgaW5kZXgsIHRva2VuIH0gPSBnYW1lLmJvdFBsYXlSb3VuZCgpO1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpbmRleH1cIl1gKTtcbiAgICAgIC8qIGlmICh0b2tlbiA9PT0gLTEpIHJldHVybjsgKi9cbiAgICAgIGdhbWVTY3JlZW4ucGFpbnRNb3ZlKGJveCwgdG9rZW4pO1xuICAgICAgbW92ZXMrKztcbiAgICB9XG4gICAgZ2FtZVNjcmVlbi5nZXRCb3hlcygpLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmRleCA9IGdhbWVTY3JlZW4uZ2V0SW5kZXgoYm94KTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZ2FtZS5wbGF5Um91bmQoaW5kZXgpO1xuICAgICAgICBpZiAodG9rZW4gPT09IC0xKSByZXR1cm47XG5cbiAgICAgICAgZ2FtZVNjcmVlbi5wYWludE1vdmUoYm94LCB0b2tlbik7XG4gICAgICAgIG1vdmVzKys7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKHRva2VuKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChvcHBvbmVudC5ib3QpIHtcbiAgICAgICAgICBjb25zdCB7IGluZGV4LCB0b2tlbiB9ID0gZ2FtZS5ib3RQbGF5Um91bmQoKTtcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2luZGV4fVwiXWApO1xuICAgICAgICAgIGF3YWl0IHNsZWVwKDQwMCk7XG4gICAgICAgICAgLyogaWYgKHRva2VuID09PSAtMSkgcmV0dXJuOyAqL1xuICAgICAgICAgIGdhbWVTY3JlZW4ucGFpbnRNb3ZlKGJveCwgdG9rZW4pO1xuICAgICAgICAgIG1vdmVzKys7XG4gICAgICAgICAgaWYgKGlzR2FtZU92ZXIodG9rZW4pKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cblxuICBjb25zdCBpc0dhbWVPdmVyID0gKHRva2VuLCBtb3ZlKSA9PiB7XG4gICAgbGV0IF9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgaWYgKGdhbWUuY2hlY2tXaW4odG9rZW4pKSB7XG4gICAgICBnYW1lU2NyZWVuLnNob3dFbmRnYW1lU2NyZWVuKHRva2VuKTtcbiAgICAgIGdhbWUudXBkYXRlU2NvcmUodG9rZW4pO1xuICAgICAgZ2FtZVNjcmVlbi5wYWludFNjb3JlKGdldFBsYXllcnMoKSk7XG4gICAgICBtb3ZlcyA9IDA7XG4gICAgICBfaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChtb3ZlcyA9PT0gOSkge1xuICAgICAgZ2FtZVNjcmVlbi5zaG93RW5kZ2FtZVNjcmVlbignZHJhdycpO1xuICAgICAgZ2FtZS51cGRhdGVTY29yZSgnZHJhdycpO1xuICAgICAgZ2FtZVNjcmVlbi5wYWludFNjb3JlKGdldFBsYXllcnMoKSk7XG4gICAgICBtb3ZlcyA9IDA7XG4gICAgICBfaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBfaXNHYW1lT3ZlcjtcbiAgfTtcblxuICByZXR1cm4gcnVuO1xufVxuXG4vKiBjb25zdCBydW4gPSBTY3JlZW5Db250cm9sbGVyKCk7ICovXG4vKiBydW4oKTsgKi9cblxub25TdGFydEJ0bkNsaWNrKCgpID0+IHtcbiAgc3RhcnQoKTtcbiAgY29uc29sZS5sb2coZ2V0UGxheWVycygpKTtcbiAgY29uc3QgcnVuID0gU2NyZWVuQ29udHJvbGxlcigpO1xuICBydW4oKTtcbn0pO1xuIiwiY29uc3QgcGxheWVyVHlwZSA9IHtcbiAgSFVNQU46ICdodW1hbicsXG4gIEJPVDogJ2JvdCcsXG59O1xuXG5mdW5jdGlvbiBwbGF5ZXIobmFtZSwgdG9rZW4sIHR5cGUgPSBwbGF5ZXJUeXBlLkhVTUFOKSB7XG4gIGlmIChuYW1lLmxlbmd0aCA+IDcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVc2UgYSBzaG9ydCBuYW1lLCBsZXNzIHRoYW4gIDcgY2hhcmFjdGVycy4nKTtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpbnM6IDAsXG4gICAgdGllczogMCxcbiAgICB0eXBlLFxuICAgIG5hbWUsXG4gICAgdG9rZW4sXG4gIH07XG59XG5cblxuY29uc3QgYm90UGxheWVyID0ge1xuICBnZW5lcmF0ZU1vdmUoZ2FtZWJvYXJkKSB7XG4gICAgbGV0IGluZGV4O1xuICAgIGxldCB0cnlDb3VudCA9IDA7XG4gICAgZG8ge1xuICAgICAgdHJ5Q291bnQrKztcbiAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgfSB3aGlsZSAoZ2FtZWJvYXJkW2luZGV4XSAhPT0gMCB8fCB0cnlDb3VudCA+MjAwKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG59XG5cblxuZXhwb3J0IHtwbGF5ZXJUeXBlLCBwbGF5ZXIsIGJvdFBsYXllcn1cbiIsImltcG9ydCB7IHBsYXllciwgcGxheWVyVHlwZSwgYm90UGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGxhc2hTY3JlZW4oKSB7XG4gIGxldCBwbGF5ZXIxID0gbnVsbDtcbiAgbGV0IHBsYXllcjIgPSBudWxsO1xuICBsZXQgcGxheWVycyA9IFtdO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3Bwb25lbnQ6IHBsYXllclR5cGUuSFVNQU4sXG4gICAgbmFtZXM6IHsgcGxheWVyMTogJycsIHBsYXllcjI6ICcnIH0sXG4gICAgcGxheWVyMVRva2VuOiAnWCcsXG4gICAgcGxheWVyMlRva2VuOiAnTycsXG4gIH07XG5cbiAgY29uc3QgaHVtYW5Cb3RUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tYm90LXRvZ2dsZScpO1xuICBjb25zdCB4b1RvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdYLU8tdG9nZ2xlJyk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwbGFzaCBhJyk7XG4gIGNvbnN0IHBsYXllcjJJbnB1dENvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZm9ybS1jb250cm9sbGVyICsgLmZvcm0tY29udHJvbGxlcidcbiAgKTtcbiAgY29uc3QgcGxheWVyMU5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3BsYXllci0xJyk7XG4gIGNvbnN0IHBsYXllcjJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNwbGF5ZXItMicpO1xuXG4gIGh1bWFuQm90VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoaHVtYW5Cb3RUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgb3B0aW9ucy5vcHBvbmVudCA9IHBsYXllclR5cGUuQk9UO1xuICAgICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyID0gcGxheWVyVHlwZS5CT1Q7XG4gICAgICBwbGF5ZXIySW5wdXRDb250cm9sbGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMklucHV0Q29udHJvbGxlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBvcHRpb25zLm9wcG9uZW50ID0gcGxheWVyVHlwZS5IVU1BTjtcbiAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMiA9IHBsYXllclR5cGUuSFVNQU47XG4gICAgfVxuICB9KTtcblxuICB4b1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHhvVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuID0gJ08nO1xuICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4gPSAnWCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuID0gJ1gnO1xuICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4gPSAnTyc7XG4gICAgfVxuICB9KTtcblxuICBwbGF5ZXIxTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIG9wdGlvbnMubmFtZXMucGxheWVyMSA9IHRoaXMudmFsdWU7XG4gIH0pO1xuXG4gIHBsYXllcjJOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyID0gdGhpcy52YWx1ZTtcbiAgfSk7XG5cbiAgLyogVG8tRG86IG1ha2Ugc3VyZSB0aGUgZ2FtZSBpcyBzdGFydGluZyAqL1xuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBfc3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwbGFzaCcpO1xuICAgIGNvbnN0IF9nYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgICBfc3BsYXNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBfZ2FtZS5jbGFzc0xpc3QuYWRkKCdib3gtLXNob3cnKTtcblxuIC8qIEkgZG9uJ3QgbGlrZSB0aGlzIGNvZGUsIGkgZmVlbCBsaWtlIGkgaGF2ZSByZXBlYXRlZCBteXNlbGYgICAqL1xuICAgIGlmIChvcHRpb25zLnBsYXllcjFUb2tlbiA9PSAnWCcpIHtcbiAgICAgIHBsYXllcjEgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMSxcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIxVG9rZW4sXG4gICAgICAgIHBsYXllclR5cGUuSFVNQU5cbiAgICAgICk7XG5cbiAgICAgIHBsYXllcjIgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMixcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4sXG4gICAgICAgIG9wdGlvbnMub3Bwb25lbnRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcjEgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMixcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4sXG4gICAgICAgIHBsYXllclR5cGUuSFVNQU5cbiAgICAgICk7XG4gICAgICBwbGF5ZXIyID0gcGxheWVyKFxuICAgICAgICBvcHRpb25zLm5hbWVzLnBsYXllcjEsXG4gICAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuLFxuICAgICAgICBvcHRpb25zLm9wcG9uZW50XG4gICAgICApO1xuICAgIH1cbiAgICBwbGF5ZXJzID0gW3BsYXllcjEsIHBsYXllcjJdO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiBwbGF5ZXJzO1xuXG4gIGNvbnN0IG9uU3RhcnRCdG5DbGljayA9IChmbikgPT4ge1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm4pO1xuICB9O1xuXG4gIHJldHVybiB7IG9uU3RhcnRCdG5DbGljaywgc3RhcnQsIGdldFBsYXllcnMgfTtcbn1cblxuY29uc3QgeyBvblN0YXJ0QnRuQ2xpY2ssIHN0YXJ0LCBnZXRQbGF5ZXJzIH0gPSBTcGxhc2hTY3JlZW4oKTtcblxuZXhwb3J0IHsgb25TdGFydEJ0bkNsaWNrLCBzdGFydCwgZ2V0UGxheWVycyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9