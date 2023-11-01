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

a {
  font-size: var(--lgth-5);
}

.github{
  display: flex;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* color */\n  --gray-50: #fafafa;\n  --gray-400: #d4d4d8;\n  --gray-500: #6b7280;\n  --gray-600: #4b5563;\n  --gray-300: #d4d4d8;\n  --gray-200: #e4e4e7;\n  --gray-100: #f3f4f6;\n  --gray-700: #374151;\n  --gray-800: #1f2937;\n  --gray-900: #111827;\n\n  /* fonts */\n\n  --step--1: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);\n  --step-0: clamp(0.85rem, calc(0.78rem + 0.29vw), 1rem);\n  --step-1: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);\n  --step-2: clamp(1.2rem, calc(1.07rem + 0.63vw), 1.5rem);\n  --step-3: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.75rem);\n  --step-4: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.5rem);\n  --step-5: clamp(2.07rem, calc(1.73rem + 1.7vw), 3rem);\n\n  /* lengths || spacing */\n\n  --lgth-1: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);\n  --lgth-2: clamp(0.5rem, calc(0.46rem + 0.22vw), 0.63rem);\n  --lgth-3: clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem);\n  --lgth-4: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);\n  --lgth-5: clamp(1.5rem, calc(1.37rem + 0.65vw), 1.88rem);\n  --lgth-6: clamp(2rem, calc(1.83rem + 0.87vw), 2.5rem);\n  --lgth-7: clamp(3rem, calc(2.74rem + 1.3vw), 3.75rem);\n  --lgth-8: clamp(4rem, calc(3.65rem + 1.74vw), 5rem);\n  --lgth-9: clamp(6rem, calc(5.48rem + 2.61vw), 7.5rem);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n.results svg {\n  fill: #0369a1;\n  fill: var(--gray-500);\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: #0a0a0a;\n  background-color: #0c4a6e;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nheader {\n  font-family: 'Russo One', system-ui, -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n    sans-serif;\n  background-color: #275c7a;\n  padding-block: 18px;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1200px;\n  margin-inline: var(--lgth-4); /* Minimum margin for small screens */\n}\n\n@media (min-width: 1256px) {\n  nav {\n    margin-inline: auto; /* Let the margin grow on larger screens */\n  }\n}\n\nmain {\n  height: 100%;\n  position: relative;\n}\n\n.icon {\n  display: flex;\n  font-size: var(--step-4);\n  align-items: center;\n}\n\n.game-title {\n  color: #d9e2e8;\n  font-family: Russo One;\n  font-size: var(--step-5);\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  padding-inline: var(--lgth-2);\n}\n\n.game {\n  display: flex;\n  opacity: 0;\n  justify-content: center;\n  padding-block: var(--lgth-7);\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: fit-content;\n\n  visibility: hidden;\n  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */\n  transition: opacity 1s linear, visibility 0s linear 500ms;\n}\n\n.game .container {\n  padding-inline: var(--lgth-3);\n  width: 100%;\n  max-width: fit-content;\n  margin-inline: auto;\n}\n\n.splash {\n  height: 88%;\n}\n\n.splash-option {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.note {\n  text-align: center;\n}\n\n.splash .container {\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 400px;\n  margin-inline: auto;\n  padding-block: var(--lgth-7);\n  padding-inline: var(--lgth-4);\n}\n\n.splash-subheading {\n  color: #84a5b8;\n  font-family: Roboto;\n  font-size: var(--step-2);\n  font-weight: 700;\n  margin-bottom: 24px;\n  text-align: center;\n}\n\n.form {\n  padding: 38px 38px;\n  margin-bottom: 64px;\n  border-radius: 13px;\n  background: #275c7a;\n  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.1);\n}\n\n.form-controller + .form-controller {\n  margin-top: 32px;\n}\n\n.form input[type='text'] {\n  padding-inline: 16px;\n  padding-block: 14px;\n  max-width: 330px;\n  width: 100%;\n  border-radius: 6px;\n  font-size: 20px;\n  border-radius: 9px;\n  background: #28495d;\n\n  font-family: Roboto;\n  font-size: 22px;\n  font-weight: 500;\n  color: var(--gray-100);\n}\n\n.form input:focus {\n  outline: 1.5px solid #007bff;\n}\n\n.form input::placeholder {\n  color: #859ead;\n}\n\n.turn {\n  display: flex;\n  border-radius: 34px;\n  background: #d9d9d9;\n  color: #999;\n  width: fit-content;\n  font-family: Russo One;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  align-items: center;\n  overflow: hidden;\n  margin-bottom: var(--lgth-7);\n  margin-inline: auto;\n  padding: 4px;\n}\n\n.turn h3 {\n  font-size: var(--step-2);\n}\n\n@media (max-width: 413px) {\n  .turn h3 {\n    font-size: var(--step-0);\n  }\n}\n\n.turn > * {\n  border-radius: 34px;\n  padding-block: 14px;\n  padding-inline: var(--lgth-6);\n}\n\n.player-X.playing {\n  background: #fa8a2f;\n  color: #fbedde;\n  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.player-O.playing {\n  background: #308dfe;\n  color: #fbedde;\n  box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 4px 0px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.player-O {\n  /* background: #fa8a2f; */\n  /* color: #fbedde; */\n}\n\n.box {\n  --box-size: clamp(4.5rem, calc(-0.83rem + 26.67vw), 7.5rem);\n  width: var(--box-size);\n  height: var(--box-size);\n  border-radius: 13px;\n  background: #ebf3f7;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: hsl(0, 0%, 0%) 0px 2px 5px -1px, hsl(0, 0%, 0%) 0px 1px 3px -1px;\n}\n\n.box h2 {\n  font-size: clamp(4.03rem, calc(0.6rem + 17.15vw), 5.96rem);\n}\n\n.box:not(.col-3) {\n  margin-right: var(--lgth-4);\n}\n\n.game-board > *:not(.row-3) {\n  margin-bottom: var(--lgth-4);\n}\n\n.X,\n.icon-X {\n  color: #fb923c;\n}\n\n.O,\n.icon-O {\n  color: #60a5fa;\n}\n\nh1 {\n  font-size: clamp(2.07rem, calc(1.73rem + 1.7vw), 3.05rem);\n  color: var(--gray-900);\n  font-weight: 700;\n}\n\nh3 {\n  font-weight: 500;\n}\n\n.game-board {\n  width: fit-content;\n  margin-bottom: var(--lgth-7);\n  margin-inline: auto;\n}\n\nheader button {\n  background: transparent;\n  font-size: var(--step-3);\n  cursor: pointer;\n}\n\nheader svg {\n  fill: #84a5b8;\n}\n\nbutton:hover {\n  transform: scale(1.03);\n}\n\n.game-board > * {\n  display: flex;\n}\n\n.status {\n  padding-block: 24px;\n  padding-inline: 24px;\n  background: var(--gray-100);\n  width: 250px;\n  /* box-shadow: 0 4px 6px hsla(0, 0%, 0.2); */\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15);\n}\n\n.status h3 {\n  font-weight: 500;\n  font-size: 22px;\n  color: var(--gray-700);\n}\n\n.status h4 {\n  color: var(--gray-900);\n  font-size: 18px;\n}\n\n.status-win-count {\n  margin-bottom: 4px;\n}\n\n.status-draw {\n  margin-top: 8px;\n}\n.status {\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n\n.results {\n  display: flex;\n  justify-content: space-between;\n  max-width: 250px;\n}\n.results > * {\n  font-size: 20px;\n}\n\n.score {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  max-width: 450px;\n  border-radius: 14px;\n  background: #d9d9d9;\n  overflow: hidden;\n  font-family: Roboto;\n  box-shadow: hsla(0, 0%, 0%, 0.8) 0px 2px 5px -1px,\n    hsla(0, 0%, 0%, 0.8) 0px 1px 3px -1px;\n  margin-inline: auto;\n}\n\n.score > * {\n  background: lightgray;\n  padding-inline: 24px;\n  padding-block: 20px;\n  max-width: 150px;\n  text-align: center;\n  flex: 1;\n}\n\n.score-X {\n  background: rgba(250, 138, 47, 0.62);\n}\n\n.score-O {\n  background: rgba(48, 141, 254, 0.57);\n}\n\n.score h3 {\n  color: #444242;\n  font-size: 18px;\n  margin-bottom: 6px;\n}\n\n.score h2 {\n  color: #373636;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.splash h4 {\n  color: hsl(202deg 20% 55%);\n  font-weight: 400;\n  font-size: var(--step-0);\n  margin-top: var(--lgth-3);\n}\n\n.splash a {\n  color: hsla(0, 0%, 100%, 1);\n  font-family: 'russo one';\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.splash a:hover {\n  cursor: pointer;\n}\n\n.slider-label input {\n  display: none;\n}\n\n/* Styles for the human-bot slider */\n.slider-label {\n  position: relative;\n  display: inline-block;\n  border-radius: 33px;\n  background: #d9d9d9;\n  color: #999;\n  font-family: Russo One;\n  font-size: var(--step-2);\n  height: 62px;\n}\n\n.slider-1 {\n  max-width: 400px;\n  width: 100%;\n  /* width: 400px; */\n}\n\n.slider-2 {\n  width: 200px;\n}\n\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 34px;\n  background-color: #ccc;\n  /* width: 200px; */\n  transition: 0.4s;\n}\n\n.slider:before {\n  background-color: #fbfcfc;\n  position: absolute;\n  content: '';\n\n  height: 54px;\n  width: 50%;\n  left: 4px;\n  top: 4px;\n  border-radius: 33px;\n  transition: 0.4s;\n}\n\n.label-human,\n.label-bot,\n.label-X,\n.label-O {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 50%;\n  text-align: center;\n}\n\n.label-bot,\n.label-O {\n  right: 0;\n}\n\n.label-human {\n  color: #4b4948;\n}\n\ninput:checked ~ .label-human {\n  color: #999;\n}\n\ninput:checked ~ .label-bot {\n  color: #4b4948;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(95%);\n}\n\n.splash-option {\n  margin-bottom: var(--lgth-7);\n}\n\n.splash-option + .splash-option {\n  margin-bottom: var(--lgth-8);\n}\n\n/* Slider 2 styles  */\n.slider-2 .slider:before {\n  width: 50%;\n  background: #fa8a2f;\n}\n\n.slider-2 input:checked ~ .slider:before {\n  background: #60a5fa;\n  transform: translateX(90px);\n}\n\n.slider-2 input:checked ~ .label-O {\n  color: #fbedde;\n}\n\n.slider-2 input:checked ~ .label-X {\n  color: #999;\n}\n\n.label-X {\n  color: #fbedde;\n}\n\n/* Win state styles */\n\n.win {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -200px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(28, 28, 28, 0.82);\n  transition: visibility 5s, opacity 5s;\n  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */\n\n  visibility: hidden;\n  /* the normal box delays visibility transition so it doesn't hide until after the opacity transition is done */\n  transition: opacity 1s linear, visibility 0s linear 500ms;\n}\n\n.win h1 {\n  color: #fff;\n  font-family: Russo One;\n  font-size: clamp(3.36rem, calc(2.03rem + 6.64vw), 7.01rem);\n  margin-bottom: 32px;\n}\n\n.win p {\n  color: #bfc7ca;\n  font-family: Roboto;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: normal;\n  text-align: center;\n}\n\n.win .container {\n  max-width: 1200;\n  margin-inline: auto;\n  padding-inline: var(--lgth-3);\n}\n\n.hide {\n  display: none;\n  visibility: hidden;\n  transition: visibility 5s, opacity 5s;\n  /* visibility: hidden; */\n  opacity: 0;\n}\n\n.box--show {\n  opacity: 1;\n  visibility: visible;\n  /* the shown box does not delay visibility, so it shows instantly and transitions opacity */\n  transition: opacity 1s linear, visibility 0s linear;\n}\n\na {\n  font-size: var(--lgth-5);\n}\n\n.github{\n  display: flex;\n}\n"],"sourceRoot":""}]);
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
    // if(token == undefined) return;
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
function GameBoard() {
  const rows = 3;
  const columns = 3;
  const NUMBER_OF_SQUARES = rows * columns;
  // My name is kaddy
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard());


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
      if(token === undefined) return;
      const box = document.querySelector(`[id="${index}"]`);
      /* if (token === -1) return; */
      gameScreen.paintMove(box, token);
      moves++;
    }
    gameScreen.getBoxes().forEach((box) => {
      box.addEventListener('click', async function () {
        index = gameScreen.getIndex(box);
        const { token } = game.playRound(index);
        if(token === undefined) return;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxLQUFLLEtBQUssd0JBQXdCLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGdDQUFnQyxzQ0FBc0Ms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RUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxRQUFRLHFDQUFxQzs7QUFFQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvZ2FtZVNjcmVlbi5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3NwbGFzaFNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvciAqL1xuICAtLWdyYXktNTA6ICNmYWZhZmE7XG4gIC0tZ3JheS00MDA6ICNkNGQ0ZDg7XG4gIC0tZ3JheS01MDA6ICM2YjcyODA7XG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XG4gIC0tZ3JheS0zMDA6ICNkNGQ0ZDg7XG4gIC0tZ3JheS0yMDA6ICNlNGU0ZTc7XG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XG4gIC0tZ3JheS03MDA6ICMzNzQxNTE7XG4gIC0tZ3JheS04MDA6ICMxZjI5Mzc7XG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XG5cbiAgLyogZm9udHMgKi9cblxuICAtLXN0ZXAtLTE6IGNsYW1wKDAuNjlyZW0sIGNhbGMoMC42NnJlbSArIDAuMTh2dyksIDAuOHJlbSk7XG4gIC0tc3RlcC0wOiBjbGFtcCgwLjg1cmVtLCBjYWxjKDAuNzhyZW0gKyAwLjI5dncpLCAxcmVtKTtcbiAgLS1zdGVwLTE6IGNsYW1wKDFyZW0sIGNhbGMoMC45MXJlbSArIDAuNDN2dyksIDEuMjVyZW0pO1xuICAtLXN0ZXAtMjogY2xhbXAoMS4ycmVtLCBjYWxjKDEuMDdyZW0gKyAwLjYzdncpLCAxLjVyZW0pO1xuICAtLXN0ZXAtMzogY2xhbXAoMS40NHJlbSwgY2FsYygxLjI2cmVtICsgMC44OXZ3KSwgMS43NXJlbSk7XG4gIC0tc3RlcC00OiBjbGFtcCgxLjczcmVtLCBjYWxjKDEuNDhyZW0gKyAxLjI0dncpLCAyLjVyZW0pO1xuICAtLXN0ZXAtNTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzcmVtKTtcblxuICAvKiBsZW5ndGhzIHx8IHNwYWNpbmcgKi9cblxuICAtLWxndGgtMTogY2xhbXAoMC4yNXJlbSwgY2FsYygwLjIzcmVtICsgMC4xMXZ3KSwgMC4zMXJlbSk7XG4gIC0tbGd0aC0yOiBjbGFtcCgwLjVyZW0sIGNhbGMoMC40NnJlbSArIDAuMjJ2dyksIDAuNjNyZW0pO1xuICAtLWxndGgtMzogY2xhbXAoMC43NXJlbSwgY2FsYygwLjY4cmVtICsgMC4zM3Z3KSwgMC45NHJlbSk7XG4gIC0tbGd0aC00OiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcbiAgLS1sZ3RoLTU6IGNsYW1wKDEuNXJlbSwgY2FsYygxLjM3cmVtICsgMC42NXZ3KSwgMS44OHJlbSk7XG4gIC0tbGd0aC02OiBjbGFtcCgycmVtLCBjYWxjKDEuODNyZW0gKyAwLjg3dncpLCAyLjVyZW0pO1xuICAtLWxndGgtNzogY2xhbXAoM3JlbSwgY2FsYygyLjc0cmVtICsgMS4zdncpLCAzLjc1cmVtKTtcbiAgLS1sZ3RoLTg6IGNsYW1wKDRyZW0sIGNhbGMoMy42NXJlbSArIDEuNzR2dyksIDVyZW0pO1xuICAtLWxndGgtOTogY2xhbXAoNnJlbSwgY2FsYyg1LjQ4cmVtICsgMi42MXZ3KSwgNy41cmVtKTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG4ucmVzdWx0cyBzdmcge1xuICBmaWxsOiAjMDM2OWExO1xuICBmaWxsOiB2YXIoLS1ncmF5LTUwMCk7XG59XG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzBhMGEwYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnUnVzc28gT25lJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcbiAgICBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1YzdhO1xuICBwYWRkaW5nLWJsb2NrOiAxOHB4O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW4taW5saW5lOiB2YXIoLS1sZ3RoLTQpOyAvKiBNaW5pbXVtIG1hcmdpbiBmb3Igc21hbGwgc2NyZWVucyAqL1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1NnB4KSB7XG4gIG5hdiB7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bzsgLyogTGV0IHRoZSBtYXJnaW4gZ3JvdyBvbiBsYXJnZXIgc2NyZWVucyAqL1xuICB9XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLXRpdGxlIHtcbiAgY29sb3I6ICNkOWUyZTg7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC01KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0yKTtcbn1cblxuLmdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC03KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiB0aGUgbm9ybWFsIGJveCBkZWxheXMgdmlzaWJpbGl0eSB0cmFuc2l0aW9uIHNvIGl0IGRvZXNuJ3QgaGlkZSB1bnRpbCBhZnRlciB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIGRvbmUgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIDUwMG1zO1xufVxuXG4uZ2FtZSAuY29udGFpbmVyIHtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uc3BsYXNoIHtcbiAgaGVpZ2h0OiA4OCU7XG59XG5cbi5zcGxhc2gtb3B0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ub3RlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BsYXNoIC5jb250YWluZXIge1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTQpO1xufVxuXG4uc3BsYXNoLXN1YmhlYWRpbmcge1xuICBjb2xvcjogIzg0YTViODtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogMzhweCAzOHB4O1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjMjc1YzdhO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmZvcm0tY29udHJvbGxlciArIC5mb3JtLWNvbnRyb2xsZXIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICBwYWRkaW5nLWlubGluZTogMTZweDtcbiAgcGFkZGluZy1ibG9jazogMTRweDtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQ6ICMyODQ5NWQ7XG5cbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tZ3JheS0xMDApO1xufVxuXG4uZm9ybSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDEuNXB4IHNvbGlkICMwMDdiZmY7XG59XG5cbi5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODU5ZWFkO1xufVxuXG4udHVybiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIGNvbG9yOiAjOTk5O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgcGFkZGluZzogNHB4O1xufVxuXG4udHVybiBoMyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQxM3B4KSB7XG4gIC50dXJuIGgzIHtcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XG4gIH1cbn1cblxuLnR1cm4gPiAqIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgcGFkZGluZy1ibG9jazogMTRweDtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNik7XG59XG5cbi5wbGF5ZXItWC5wbGF5aW5nIHtcbiAgYmFja2dyb3VuZDogI2ZhOGEyZjtcbiAgY29sb3I6ICNmYmVkZGU7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC40KSAwcHggMnB4IDRweCAwcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XG59XG5cbi5wbGF5ZXItTy5wbGF5aW5nIHtcbiAgYmFja2dyb3VuZDogIzMwOGRmZTtcbiAgY29sb3I6ICNmYmVkZGU7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC40KSAwcHggMnB4IDRweCAwcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XG59XG5cbi5wbGF5ZXItTyB7XG4gIC8qIGJhY2tncm91bmQ6ICNmYThhMmY7ICovXG4gIC8qIGNvbG9yOiAjZmJlZGRlOyAqL1xufVxuXG4uYm94IHtcbiAgLS1ib3gtc2l6ZTogY2xhbXAoNC41cmVtLCBjYWxjKC0wLjgzcmVtICsgMjYuNjd2dyksIDcuNXJlbSk7XG4gIHdpZHRoOiB2YXIoLS1ib3gtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tYm94LXNpemUpO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZWJmM2Y3O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGhzbCgwLCAwJSwgMCUpIDBweCAycHggNXB4IC0xcHgsIGhzbCgwLCAwJSwgMCUpIDBweCAxcHggM3B4IC0xcHg7XG59XG5cbi5ib3ggaDIge1xuICBmb250LXNpemU6IGNsYW1wKDQuMDNyZW0sIGNhbGMoMC42cmVtICsgMTcuMTV2dyksIDUuOTZyZW0pO1xufVxuXG4uYm94Om5vdCguY29sLTMpIHtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1sZ3RoLTQpO1xufVxuXG4uZ2FtZS1ib2FyZCA+ICo6bm90KC5yb3ctMykge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTQpO1xufVxuXG4uWCxcbi5pY29uLVgge1xuICBjb2xvcjogI2ZiOTIzYztcbn1cblxuLk8sXG4uaWNvbi1PIHtcbiAgY29sb3I6ICM2MGE1ZmE7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjA3cmVtLCBjYWxjKDEuNzNyZW0gKyAxLjd2dyksIDMuMDVyZW0pO1xuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5nYW1lLWJvYXJkIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTcpO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG5oZWFkZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oZWFkZXIgc3ZnIHtcbiAgZmlsbDogIzg0YTViODtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLmdhbWUtYm9hcmQgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0YXR1cyB7XG4gIHBhZGRpbmctYmxvY2s6IDI0cHg7XG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XG4gIHdpZHRoOiAyNTBweDtcbiAgLyogYm94LXNoYWRvdzogMCA0cHggNnB4IGhzbGEoMCwgMCUsIDAuMik7ICovXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uc3RhdHVzIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xufVxuXG4uc3RhdHVzIGg0IHtcbiAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3RhdHVzLXdpbi1jb3VudCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnN0YXR1cy1kcmF3IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnN0YXR1cyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5yZXN1bHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuLnJlc3VsdHMgPiAqIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2NvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGJveC1zaGFkb3c6IGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAycHggNXB4IC0xcHgsXG4gICAgaHNsYSgwLCAwJSwgMCUsIDAuOCkgMHB4IDFweCAzcHggLTFweDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLnNjb3JlID4gKiB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleDogMTtcbn1cblxuLnNjb3JlLVgge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTM4LCA0NywgMC42Mik7XG59XG5cbi5zY29yZS1PIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0OCwgMTQxLCAyNTQsIDAuNTcpO1xufVxuXG4uc2NvcmUgaDMge1xuICBjb2xvcjogIzQ0NDI0MjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zY29yZSBoMiB7XG4gIGNvbG9yOiAjMzczNjM2O1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNwbGFzaCBoNCB7XG4gIGNvbG9yOiBoc2woMjAyZGVnIDIwJSA1NSUpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWxndGgtMyk7XG59XG5cbi5zcGxhc2ggYSB7XG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAxKTtcbiAgZm9udC1mYW1pbHk6ICdydXNzbyBvbmUnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNwbGFzaCBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGVyLWxhYmVsIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU3R5bGVzIGZvciB0aGUgaHVtYW4tYm90IHNsaWRlciAqL1xuLnNsaWRlci1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xuICBoZWlnaHQ6IDYycHg7XG59XG5cbi5zbGlkZXItMSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiB3aWR0aDogNDAwcHg7ICovXG59XG5cbi5zbGlkZXItMiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAvKiB3aWR0aDogMjAwcHg7ICovXG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmNmYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcblxuICBoZWlnaHQ6IDU0cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5sYWJlbC1odW1hbixcbi5sYWJlbC1ib3QsXG4ubGFiZWwtWCxcbi5sYWJlbC1PIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYWJlbC1ib3QsXG4ubGFiZWwtTyB7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubGFiZWwtaHVtYW4ge1xuICBjb2xvcjogIzRiNDk0ODtcbn1cblxuaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1odW1hbiB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5pbnB1dDpjaGVja2VkIH4gLmxhYmVsLWJvdCB7XG4gIGNvbG9yOiAjNGI0OTQ4O1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTUlKTtcbn1cblxuLnNwbGFzaC1vcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTcpO1xufVxuXG4uc3BsYXNoLW9wdGlvbiArIC5zcGxhc2gtb3B0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC04KTtcbn1cblxuLyogU2xpZGVyIDIgc3R5bGVzICAqL1xuLnNsaWRlci0yIC5zbGlkZXI6YmVmb3JlIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZhOGEyZjtcbn1cblxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAuc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM2MGE1ZmE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KTtcbn1cblxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAubGFiZWwtTyB7XG4gIGNvbG9yOiAjZmJlZGRlO1xufVxuXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1YIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5sYWJlbC1YIHtcbiAgY29sb3I6ICNmYmVkZGU7XG59XG5cbi8qIFdpbiBzdGF0ZSBzdHlsZXMgKi9cblxuLndpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwMHB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyOCwgMjgsIDAuODIpO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDVzLCBvcGFjaXR5IDVzO1xuICAvKiBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgKi9cblxuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIHRoZSBub3JtYWwgYm94IGRlbGF5cyB2aXNpYmlsaXR5IHRyYW5zaXRpb24gc28gaXQgZG9lc24ndCBoaWRlIHVudGlsIGFmdGVyIHRoZSBvcGFjaXR5IHRyYW5zaXRpb24gaXMgZG9uZSAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXIgNTAwbXM7XG59XG5cbi53aW4gaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcbiAgZm9udC1zaXplOiBjbGFtcCgzLjM2cmVtLCBjYWxjKDIuMDNyZW0gKyA2LjY0dncpLCA3LjAxcmVtKTtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLndpbiBwIHtcbiAgY29sb3I6ICNiZmM3Y2E7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2luIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDA7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTMpO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1cywgb3BhY2l0eSA1cztcbiAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYm94LS1zaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogdGhlIHNob3duIGJveCBkb2VzIG5vdCBkZWxheSB2aXNpYmlsaXR5LCBzbyBpdCBzaG93cyBpbnN0YW50bHkgYW5kIHRyYW5zaXRpb25zIG9wYWNpdHkgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiB2YXIoLS1sZ3RoLTUpO1xufVxuXG4uZ2l0aHVie1xuICBkaXNwbGF5OiBmbGV4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CLFVBQVU7O0VBRVYseURBQXlEO0VBQ3pELHNEQUFzRDtFQUN0RCxzREFBc0Q7RUFDdEQsdURBQXVEO0VBQ3ZELHlEQUF5RDtFQUN6RCx3REFBd0Q7RUFDeEQscURBQXFEOztFQUVyRCx1QkFBdUI7O0VBRXZCLHlEQUF5RDtFQUN6RCx3REFBd0Q7RUFDeEQseURBQXlEO0VBQ3pELHNEQUFzRDtFQUN0RCx3REFBd0Q7RUFDeEQscURBQXFEO0VBQ3JELHFEQUFxRDtFQUNyRCxtREFBbUQ7RUFDbkQscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO3dFQUNzRTtFQUN0RSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFOztjQUVZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDRCQUE0QixFQUFFLHFDQUFxQztBQUNyRTs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CLEVBQUUsMENBQTBDO0VBQ2pFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQiw4R0FBOEc7RUFDOUcseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZDt1Q0FDcUM7QUFDdkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkO3VDQUNxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CO3lDQUN1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE9BQU87QUFDVDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXOztFQUVYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMscURBQXFEOztFQUVyRCxrQkFBa0I7RUFDbEIsOEdBQThHO0VBQzlHLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsMERBQTBEO0VBQzFELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiwyRkFBMkY7RUFDM0YsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIGNvbG9yICovXFxuICAtLWdyYXktNTA6ICNmYWZhZmE7XFxuICAtLWdyYXktNDAwOiAjZDRkNGQ4O1xcbiAgLS1ncmF5LTUwMDogIzZiNzI4MDtcXG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XFxuICAtLWdyYXktMzAwOiAjZDRkNGQ4O1xcbiAgLS1ncmF5LTIwMDogI2U0ZTRlNztcXG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XFxuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xcbiAgLS1ncmF5LTgwMDogIzFmMjkzNztcXG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XFxuXFxuICAvKiBmb250cyAqL1xcblxcbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjY5cmVtLCBjYWxjKDAuNjZyZW0gKyAwLjE4dncpLCAwLjhyZW0pO1xcbiAgLS1zdGVwLTA6IGNsYW1wKDAuODVyZW0sIGNhbGMoMC43OHJlbSArIDAuMjl2dyksIDFyZW0pO1xcbiAgLS1zdGVwLTE6IGNsYW1wKDFyZW0sIGNhbGMoMC45MXJlbSArIDAuNDN2dyksIDEuMjVyZW0pO1xcbiAgLS1zdGVwLTI6IGNsYW1wKDEuMnJlbSwgY2FsYygxLjA3cmVtICsgMC42M3Z3KSwgMS41cmVtKTtcXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjQ0cmVtLCBjYWxjKDEuMjZyZW0gKyAwLjg5dncpLCAxLjc1cmVtKTtcXG4gIC0tc3RlcC00OiBjbGFtcCgxLjczcmVtLCBjYWxjKDEuNDhyZW0gKyAxLjI0dncpLCAyLjVyZW0pO1xcbiAgLS1zdGVwLTU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgM3JlbSk7XFxuXFxuICAvKiBsZW5ndGhzIHx8IHNwYWNpbmcgKi9cXG5cXG4gIC0tbGd0aC0xOiBjbGFtcCgwLjI1cmVtLCBjYWxjKDAuMjNyZW0gKyAwLjExdncpLCAwLjMxcmVtKTtcXG4gIC0tbGd0aC0yOiBjbGFtcCgwLjVyZW0sIGNhbGMoMC40NnJlbSArIDAuMjJ2dyksIDAuNjNyZW0pO1xcbiAgLS1sZ3RoLTM6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC42OHJlbSArIDAuMzN2dyksIDAuOTRyZW0pO1xcbiAgLS1sZ3RoLTQ6IGNsYW1wKDFyZW0sIGNhbGMoMC45MXJlbSArIDAuNDN2dyksIDEuMjVyZW0pO1xcbiAgLS1sZ3RoLTU6IGNsYW1wKDEuNXJlbSwgY2FsYygxLjM3cmVtICsgMC42NXZ3KSwgMS44OHJlbSk7XFxuICAtLWxndGgtNjogY2xhbXAoMnJlbSwgY2FsYygxLjgzcmVtICsgMC44N3Z3KSwgMi41cmVtKTtcXG4gIC0tbGd0aC03OiBjbGFtcCgzcmVtLCBjYWxjKDIuNzRyZW0gKyAxLjN2dyksIDMuNzVyZW0pO1xcbiAgLS1sZ3RoLTg6IGNsYW1wKDRyZW0sIGNhbGMoMy42NXJlbSArIDEuNzR2dyksIDVyZW0pO1xcbiAgLS1sZ3RoLTk6IGNsYW1wKDZyZW0sIGNhbGMoNS40OHJlbSArIDIuNjF2dyksIDcuNXJlbSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnJlc3VsdHMgc3ZnIHtcXG4gIGZpbGw6ICMwMzY5YTE7XFxuICBmaWxsOiB2YXIoLS1ncmF5LTUwMCk7XFxufVxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUnVzc28gT25lJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1YzdhO1xcbiAgcGFkZGluZy1ibG9jazogMThweDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IHZhcigtLWxndGgtNCk7IC8qIE1pbmltdW0gbWFyZ2luIGZvciBzbWFsbCBzY3JlZW5zICovXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjU2cHgpIHtcXG4gIG5hdiB7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87IC8qIExldCB0aGUgbWFyZ2luIGdyb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS10aXRsZSB7XFxuICBjb2xvcjogI2Q5ZTJlODtcXG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNSk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTIpO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC03KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAvKiB0aGUgbm9ybWFsIGJveCBkZWxheXMgdmlzaWJpbGl0eSB0cmFuc2l0aW9uIHNvIGl0IGRvZXNuJ3QgaGlkZSB1bnRpbCBhZnRlciB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIGRvbmUgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcXG59XFxuXFxuLmdhbWUgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0zKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5zcGxhc2gge1xcbiAgaGVpZ2h0OiA4OCU7XFxufVxcblxcbi5zcGxhc2gtb3B0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubm90ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zcGxhc2ggLmNvbnRhaW5lciB7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC00KTtcXG59XFxuXFxuLnNwbGFzaC1zdWJoZWFkaW5nIHtcXG4gIGNvbG9yOiAjODRhNWI4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBwYWRkaW5nOiAzOHB4IDM4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gIGJhY2tncm91bmQ6ICMyNzVjN2E7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmZvcm0tY29udHJvbGxlciArIC5mb3JtLWNvbnRyb2xsZXIge1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIHBhZGRpbmctaW5saW5lOiAxNnB4O1xcbiAgcGFkZGluZy1ibG9jazogMTRweDtcXG4gIG1heC13aWR0aDogMzMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJhY2tncm91bmQ6ICMyODQ5NWQ7XFxuXFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XFxufVxcblxcbi5mb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDEuNXB4IHNvbGlkICMwMDdiZmY7XFxufVxcblxcbi5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzg1OWVhZDtcXG59XFxuXFxuLnR1cm4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcbiAgY29sb3I6ICM5OTk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNyk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4udHVybiBoMyB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MTNweCkge1xcbiAgLnR1cm4gaDMge1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxuICB9XFxufVxcblxcbi50dXJuID4gKiB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgcGFkZGluZy1ibG9jazogMTRweDtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTYpO1xcbn1cXG5cXG4ucGxheWVyLVgucGxheWluZyB7XFxuICBiYWNrZ3JvdW5kOiAjZmE4YTJmO1xcbiAgY29sb3I6ICNmYmVkZGU7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcXG59XFxuXFxuLnBsYXllci1PLnBsYXlpbmcge1xcbiAgYmFja2dyb3VuZDogIzMwOGRmZTtcXG4gIGNvbG9yOiAjZmJlZGRlO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDBweCAycHggNHB4IDBweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxufVxcblxcbi5wbGF5ZXItTyB7XFxuICAvKiBiYWNrZ3JvdW5kOiAjZmE4YTJmOyAqL1xcbiAgLyogY29sb3I6ICNmYmVkZGU7ICovXFxufVxcblxcbi5ib3gge1xcbiAgLS1ib3gtc2l6ZTogY2xhbXAoNC41cmVtLCBjYWxjKC0wLjgzcmVtICsgMjYuNjd2dyksIDcuNXJlbSk7XFxuICB3aWR0aDogdmFyKC0tYm94LXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1ib3gtc2l6ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgYmFja2dyb3VuZDogI2ViZjNmNztcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaHNsKDAsIDAlLCAwJSkgMHB4IDJweCA1cHggLTFweCwgaHNsKDAsIDAlLCAwJSkgMHB4IDFweCAzcHggLTFweDtcXG59XFxuXFxuLmJveCBoMiB7XFxuICBmb250LXNpemU6IGNsYW1wKDQuMDNyZW0sIGNhbGMoMC42cmVtICsgMTcuMTV2dyksIDUuOTZyZW0pO1xcbn1cXG5cXG4uYm94Om5vdCguY29sLTMpIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbGd0aC00KTtcXG59XFxuXFxuLmdhbWUtYm9hcmQgPiAqOm5vdCgucm93LTMpIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNCk7XFxufVxcblxcbi5YLFxcbi5pY29uLVgge1xcbiAgY29sb3I6ICNmYjkyM2M7XFxufVxcblxcbi5PLFxcbi5pY29uLU8ge1xcbiAgY29sb3I6ICM2MGE1ZmE7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzLjA1cmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTcpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIHN2ZyB7XFxuICBmaWxsOiAjODRhNWI4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLmdhbWUtYm9hcmQgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgcGFkZGluZy1ibG9jazogMjRweDtcXG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgLyogYm94LXNoYWRvdzogMCA0cHggNnB4IGhzbGEoMCwgMCUsIDAuMik7ICovXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4uc3RhdHVzIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xcbn1cXG5cXG4uc3RhdHVzIGg0IHtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5zdGF0dXMtd2luLWNvdW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLnN0YXR1cy1kcmF3IHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLnN0YXR1cyB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcbi5yZXN1bHRzID4gKiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zY29yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgYm94LXNoYWRvdzogaHNsYSgwLCAwJSwgMCUsIDAuOCkgMHB4IDJweCA1cHggLTFweCxcXG4gICAgaHNsYSgwLCAwJSwgMCUsIDAuOCkgMHB4IDFweCAzcHggLTFweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5zY29yZSA+ICoge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XFxuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zY29yZS1YIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxMzgsIDQ3LCAwLjYyKTtcXG59XFxuXFxuLnNjb3JlLU8ge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0OCwgMTQxLCAyNTQsIDAuNTcpO1xcbn1cXG5cXG4uc2NvcmUgaDMge1xcbiAgY29sb3I6ICM0NDQyNDI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi5zY29yZSBoMiB7XFxuICBjb2xvcjogIzM3MzYzNjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5zcGxhc2ggaDQge1xcbiAgY29sb3I6IGhzbCgyMDJkZWcgMjAlIDU1JSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tbGd0aC0zKTtcXG59XFxuXFxuLnNwbGFzaCBhIHtcXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAxKTtcXG4gIGZvbnQtZmFtaWx5OiAncnVzc28gb25lJztcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uc3BsYXNoIGE6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVsIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgdGhlIGh1bWFuLWJvdCBzbGlkZXIgKi9cXG4uc2xpZGVyLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbiAgaGVpZ2h0OiA2MnB4O1xcbn1cXG5cXG4uc2xpZGVyLTEge1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogd2lkdGg6IDQwMHB4OyAqL1xcbn1cXG5cXG4uc2xpZGVyLTIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLyogd2lkdGg6IDIwMHB4OyAqL1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmNmYztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcblxcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGxlZnQ6IDRweDtcXG4gIHRvcDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5sYWJlbC1odW1hbixcXG4ubGFiZWwtYm90LFxcbi5sYWJlbC1YLFxcbi5sYWJlbC1PIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxhYmVsLWJvdCxcXG4ubGFiZWwtTyB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmxhYmVsLWh1bWFuIHtcXG4gIGNvbG9yOiAjNGI0OTQ4O1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkIH4gLmxhYmVsLWh1bWFuIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkIH4gLmxhYmVsLWJvdCB7XFxuICBjb2xvcjogIzRiNDk0ODtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5NSUpO1xcbn1cXG5cXG4uc3BsYXNoLW9wdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTcpO1xcbn1cXG5cXG4uc3BsYXNoLW9wdGlvbiArIC5zcGxhc2gtb3B0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtOCk7XFxufVxcblxcbi8qIFNsaWRlciAyIHN0eWxlcyAgKi9cXG4uc2xpZGVyLTIgLnNsaWRlcjpiZWZvcmUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XFxufVxcblxcbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLnNsaWRlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzYwYTVmYTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KTtcXG59XFxuXFxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAubGFiZWwtTyB7XFxuICBjb2xvcjogI2ZiZWRkZTtcXG59XFxuXFxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAubGFiZWwtWCB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLmxhYmVsLVgge1xcbiAgY29sb3I6ICNmYmVkZGU7XFxufVxcblxcbi8qIFdpbiBzdGF0ZSBzdHlsZXMgKi9cXG5cXG4ud2luIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yMDBweDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAyOCwgMC44Mik7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDVzLCBvcGFjaXR5IDVzO1xcbiAgLyogYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICovXFxuXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAvKiB0aGUgbm9ybWFsIGJveCBkZWxheXMgdmlzaWJpbGl0eSB0cmFuc2l0aW9uIHNvIGl0IGRvZXNuJ3QgaGlkZSB1bnRpbCBhZnRlciB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIGRvbmUgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcXG59XFxuXFxuLndpbiBoMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XFxuICBmb250LXNpemU6IGNsYW1wKDMuMzZyZW0sIGNhbGMoMi4wM3JlbSArIDYuNjR2dyksIDcuMDFyZW0pO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLndpbiBwIHtcXG4gIGNvbG9yOiAjYmZjN2NhO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2luIC5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTMpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1cywgb3BhY2l0eSA1cztcXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5ib3gtLXNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAvKiB0aGUgc2hvd24gYm94IGRvZXMgbm90IGRlbGF5IHZpc2liaWxpdHksIHNvIGl0IHNob3dzIGluc3RhbnRseSBhbmQgdHJhbnNpdGlvbnMgb3BhY2l0eSAqL1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyO1xcbn1cXG5cXG5hIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGd0aC01KTtcXG59XFxuXFxuLmdpdGh1YntcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgYm90UGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQ29udHJvbGxlcihwbGF5ZXJzKSB7XG4gIGxldCBfYm9hcmQgPSBHYW1lQm9hcmQ7XG4gIGxldCBfYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcblxuICBjb25zdCBvcHBvbmVudCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihwbGF5ZXJzW2ldLm5hbWUgPT0gXCJib3RcIil7XG4gICAgICAgIHJldHVybiB7Ym90OiB0cnVlLCB0dXJuOiBpfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2JvdDogZmFsc2UsIHR1cm46IG51bGx9XG4gIH1cblxuICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgIF9hY3RpdmVQbGF5ZXIgPVxuICAgICAgX2FjdGl2ZVBsYXllci50b2tlbiA9PT0gcGxheWVyc1swXS50b2tlbiA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IF9hY3RpdmVQbGF5ZXI7XG5cbiAgY29uc3QgcGxheVJvdW5kID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IHRva2VuID0gZ2V0QWN0aXZlUGxheWVyKCkudG9rZW47XG4gICAgaWYgKCFfYm9hcmQucGxhY2VNb3ZlKHRva2VuLCBpbmRleCkpIHJldHVybiAtMTtcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgcmV0dXJuIHsgaW5kZXgsIHRva2VuIH07XG4gIH07XG5cbiAgY29uc3QgYm90UGxheVJvdW5kID0gKCkgPT4ge1xuICAgIGxldCB0b2tlbiA9IGdldEFjdGl2ZVBsYXllcigpLnRva2VuO1xuICAgIGxldCBpbmRleCA9IGJvdFBsYXllci5nZW5lcmF0ZU1vdmUoX2JvYXJkLmdldEJvYXJkKCkpO1xuXG4gICAgaWYgKCFfYm9hcmQucGxhY2VNb3ZlKHRva2VuLCBpbmRleCkpIHJldHVybiAtMTtcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgcmV0dXJuIHsgaW5kZXgsIHRva2VuIH07XG4gIH07XG5cbiAgY29uc3QgY2hlY2tXaW4gPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCBib2FyZCA9IF9ib2FyZC5nZXRCb2FyZCgpO1xuICAgIGxldCBjb2xTaXplID0gX2JvYXJkLmdldENvbHMoKTtcbiAgICBsZXQgaXNXaW4gPSB0cnVlO1xuXG4gICAgLyogY2hlY2sgaWYgdGhlcmUgaXMgaG9yaXpvbmF0YWwgd2luICovXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMzsgcm93KyspIHtcbiAgICAgIGlzV2luID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDM7IGNvbCsrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3cgKiBjb2xTaXplICsgY29sXSAhPT0gdG9rZW4pIHtcbiAgICAgICAgICBpc1dpbiA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogY2hlY2sgaWYgdGhlcmUgaXMgdmVydGljYWwgd2luICovXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMzsgY29sKyspIHtcbiAgICAgIGlzV2luID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3cgKiBjb2xTaXplICsgY29sXSAhPT0gdG9rZW4pIHtcbiAgICAgICAgICBpc1dpbiA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogY2hlY2sgaWYgdGhlcmUncyBhIGRpYWdvbmFsIHdpbiAqL1xuICAgIGlmIChib2FyZFswXSA9PSB0b2tlbiAmJiBib2FyZFs0XSA9PSB0b2tlbiAmJiBib2FyZFs4XSA9PSB0b2tlbilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmIChib2FyZFs2XSA9PSB0b2tlbiAmJiBib2FyZFs0XSA9PSB0b2tlbiAmJiBib2FyZFsyXSA9PSB0b2tlbilcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNjb3JlID0gKHRva2VuKSA9PiB7XG4gICAgaWYgKHRva2VuID09PSAnZHJhdycpIHtcbiAgICAgIHBsYXllcnNbMF0udGllcyA9IHBsYXllcnNbMF0ud2lucyArIDE7XG4gICAgICBwbGF5ZXJzWzFdLnRpZXMgPSBwbGF5ZXJzWzFdLndpbnMgKyAxO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgaWYgKHBsYXllcnNbaV0udG9rZW4gPT09IHRva2VuKSBwbGF5ZXJzW2ldLndpbnMgPSBwbGF5ZXJzW2ldLndpbnMgKyAxO1xuICAgIH1cbiAgICAvKiBQdXR0aW5nIHRoaXMgaGVyZSBtYWtlcyB0aGlzIGZ1bmN0aW9uIGlucHVyZSAqL1xuICAgIF9hY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICB9O1xuXG4gIHJldHVybiB7b3Bwb25lbnQsIGJvdFBsYXlSb3VuZCwgcGxheVJvdW5kLCBjaGVja1dpbiwgdXBkYXRlU2NvcmUgfTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4vc3BsYXNoU2NyZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZVNjcmVlbigpIHtcbiAgbGV0IF9ib2FyZCA9IEdhbWVib2FyZDtcbiAgbGV0IF9yZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKTtcbiAgbGV0IF9yZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQnKTtcbiAgbGV0IF90dXJuWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItWCcpO1xuICBsZXQgX3R1cm5PID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1PJyk7XG4gIGxldCBfd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbm5lcicpO1xuXG4gIGxldCBfc2NvcmVYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLVggaDInKTtcbiAgbGV0IF9zY29yZU8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtTyBoMicpO1xuICBsZXQgX3RpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtdGllcyBoMicpO1xuICBjb25zdCBwbGF5ZXJzID0gZ2V0UGxheWVycygpO1xuICBsZXQgX25hbWVYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLVggI25hbWUnKTtcbiAgbGV0IF9uYW1lTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1PICNuYW1lJyk7XG4gIF9uYW1lTy5pbm5lckhUTUwgPSBgJHtwbGF5ZXJzWzFdLm5hbWV9YDtcbiAgX25hbWVYLmlubmVySFRNTCA9IGAke3BsYXllcnNbMF0ubmFtZX1gO1xuICAvKiBsZXQgX2VuZEdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luJyk7ICovXG4gIGNvbnN0IF9ib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcbiAgY29uc3QgZW5kR2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW4nKTtcbiAgXG4gIGNvbnN0IGhhbmRsZVBsYXlBZ2FpbiA9ICgpID0+IHtcbiAgICBlbmRHYW1lU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2JveC0tc2hvdycpO1xuICAgIHNldFRpbWVvdXQocmVzdGFydCwgNTAwKTtcbiAgfVxuXG4gIGVuZEdhbWVTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5QWdhaW4pO1xuXG4gIGNvbnN0IF9jaGFuZ2VUdXJuID0gKHRva2VuKSA9PiB7XG4gICAgaWYgKHRva2VuID09ICdYJykge1xuICAgICAgX3R1cm5PLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICAgIF90dXJuWC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90dXJuTy5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgICBfdHVyblguY2xhc3NMaXN0LmFkZCgncGxheWluZycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRJbmRleCA9IChib3gpID0+IHtcbiAgICBjb25zdCBpZCA9IGJveC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgcmV0dXJuIHBhcnNlSW50KGlkKTtcbiAgfTtcblxuICBjb25zdCBwYWludE1vdmUgPSAoYm94LCB0b2tlbikgPT4ge1xuICAgIC8vIGlmKHRva2VuID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGJveC5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwiJHt0b2tlbn1cIj4ke3Rva2VufTwvaDI+YDtcbiAgICBfY2hhbmdlVHVybih0b2tlbik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU2NvcmVzID0gKCkgPT4ge307XG5cbiAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcbiAgICBfYm9hcmQuY2xlYXJCb2FyZCgpO1xuICAgIF9jaGFuZ2VUdXJuKCdPJyk7XG4gICAgLyogYWxzbyBjaGFuZ2UgdHVybnMgaW4gbG9naWMgbGV2ZWwqL1xuICAgIF9ib3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGJveC5pbm5lckhUTUwgPSAnPGgyPjwvaDI+JztcbiAgICB9KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVQbGF5QWdhaW4pXG4gIH07XG5cbiAgX3Jlc3RhcnRCdXR0b24ub25jbGljayA9IHJlc3RhcnQ7XG4gIGNvbnN0IGdldEJveGVzID0gKCkgPT4gX2JveGVzO1xuXG4gIGNvbnN0IHNob3dFbmRnYW1lU2NyZWVuID0gKHdpbm5lcikgPT4ge1xuICAgIGVuZEdhbWVTY3JlZW4uY2xhc3NMaXN0LmFkZCgnYm94LS1zaG93Jyk7XG4gICAgaWYgKHdpbm5lciA9PSAnZHJhdycpIHtcbiAgICAgIF93aW5uZXIuaW5uZXJIVE1MID0gXCJJdCdzIGEgZHJhdy5cIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfd2lubmVyLmlubmVySFRNTCA9IGAmIzEyNzg4MjsgUGxheWVyIDxzcGFuIGlkPVwid2lubmVyXCI+JHt3aW5uZXJ9PC9zcGFuPiBXb24hICYjMTI3ODgxYDtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZVBsYXlBZ2Fpbik7XG4gIH07XG5cbiAgY29uc3QgcGFpbnRTY29yZSA9IChwbGF5ZXJzKSA9PiB7XG4gICAgX3Njb3JlWC5pbm5lckhUTUwgPSBwbGF5ZXJzWzBdLndpbnM7XG4gICAgX3Njb3JlTy5pbm5lckhUTUwgPSBwbGF5ZXJzWzFdLndpbnM7XG4gICAgX3RpZXMuaW5uZXJIVE1MID0gcGxheWVyc1sxXS50aWVzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SW5kZXgsXG4gICAgcmVzdGFydCxcbiAgICB1cGRhdGVTY29yZXMsXG4gICAgZ2V0Qm94ZXMsXG4gICAgcGFpbnRNb3ZlLFxuICAgIHNob3dFbmRnYW1lU2NyZWVuLFxuICAgIHBhaW50U2NvcmUsXG4gIH07XG59XG4iLCJmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XG4gIGNvbnN0IHJvd3MgPSAzO1xuICBjb25zdCBjb2x1bW5zID0gMztcbiAgY29uc3QgTlVNQkVSX09GX1NRVUFSRVMgPSByb3dzICogY29sdW1ucztcbiAgLy8gTXkgbmFtZSBpcyBrYWRkeVxuICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgQXJyYXkoTlVNQkVSX09GX1NRVUFSRVMpO1xuICBnYW1lYm9hcmQuZmlsbCgwKTtcblxuICBjb25zdCBwbGFjZU1vdmUgPSAobW92ZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3F1YXJlSXNUYWtlbihpbmRleCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2FtZWJvYXJkW2luZGV4XSA9IG1vdmU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc3F1YXJlSXNUYWtlbiA9IChpbmRleCkgPT4ge1xuICAgIGlmIChnYW1lYm9hcmRbaW5kZXhdID09PSAnWCcgfHwgZ2FtZWJvYXJkW2luZGV4XSA9PT0gJ08nKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IGdldFJvd3MgPSAoKSA9PiByb3dzO1xuICBjb25zdCBnZXRDb2xzID0gKCkgPT4gY29sdW1ucztcblxuICBjb25zdCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICAgIGdhbWVib2FyZC5maWxsKDApO1xuICB9O1xuXG4gIHJldHVybiB7IGdldEJvYXJkLCBwbGFjZU1vdmUsIGdldENvbHMsIGNsZWFyQm9hcmQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkKCk7XG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBvblN0YXJ0QnRuQ2xpY2ssIHN0YXJ0LCBnZXRQbGF5ZXJzIH0gZnJvbSAnLi9zcGxhc2hTY3JlZW4nO1xuXG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL2dhbWVTY3JlZW4nO1xuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vZ2FtZUNvbnRyb2xsZXInO1xuXG5mdW5jdGlvbiBTY3JlZW5Db250cm9sbGVyKCkge1xuICBjb25zdCBnYW1lU2NyZWVuID0gR2FtZVNjcmVlbigpO1xuICBjb25zdCBnYW1lID0gR2FtZUNvbnRyb2xsZXIoZ2V0UGxheWVycygpKTtcblxuICBsZXQgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2lubmVyJyk7XG4gIGxldCBpbmRleDtcbiAgbGV0IG1vdmVzID0gMDtcbiAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lLm9wcG9uZW50KCk7XG4gIGdhbWVTY3JlZW4ucGFpbnRTY29yZShnZXRQbGF5ZXJzKCkpO1xuXG4gIGNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICAvKiBJZiBhIGJvdCBpcyBwbGF5aW5nIGZpcnN0LCBzdGFydCBwbGF5aW5nIGhlcmUgKi9cbiAgICBpZiAob3Bwb25lbnQuYm90ICYmIG9wcG9uZW50LnR1cm4gPT0gMCkge1xuICAgICAgY29uc3QgeyBpbmRleCwgdG9rZW4gfSA9IGdhbWUuYm90UGxheVJvdW5kKCk7XG4gICAgICBpZih0b2tlbiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2luZGV4fVwiXWApO1xuICAgICAgLyogaWYgKHRva2VuID09PSAtMSkgcmV0dXJuOyAqL1xuICAgICAgZ2FtZVNjcmVlbi5wYWludE1vdmUoYm94LCB0b2tlbik7XG4gICAgICBtb3ZlcysrO1xuICAgIH1cbiAgICBnYW1lU2NyZWVuLmdldEJveGVzKCkuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluZGV4ID0gZ2FtZVNjcmVlbi5nZXRJbmRleChib3gpO1xuICAgICAgICBjb25zdCB7IHRva2VuIH0gPSBnYW1lLnBsYXlSb3VuZChpbmRleCk7XG4gICAgICAgIGlmKHRva2VuID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICBnYW1lU2NyZWVuLnBhaW50TW92ZShib3gsIHRva2VuKTtcbiAgICAgICAgbW92ZXMrKztcbiAgICAgICAgaWYgKGlzR2FtZU92ZXIodG9rZW4pKSByZXR1cm47XG5cbiAgICAgICAgaWYgKG9wcG9uZW50LmJvdCkge1xuICAgICAgICAgIGNvbnN0IHsgaW5kZXgsIHRva2VuIH0gPSBnYW1lLmJvdFBsYXlSb3VuZCgpO1xuICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgICAgYXdhaXQgc2xlZXAoNDAwKTtcbiAgICAgICAgICAvKiBpZiAodG9rZW4gPT09IC0xKSByZXR1cm47ICovXG4gICAgICAgICAgZ2FtZVNjcmVlbi5wYWludE1vdmUoYm94LCB0b2tlbik7XG4gICAgICAgICAgbW92ZXMrKztcbiAgICAgICAgICBpZiAoaXNHYW1lT3Zlcih0b2tlbikpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAodG9rZW4sIG1vdmUpID0+IHtcbiAgICBsZXQgX2lzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICBpZiAoZ2FtZS5jaGVja1dpbih0b2tlbikpIHtcbiAgICAgIGdhbWVTY3JlZW4uc2hvd0VuZGdhbWVTY3JlZW4odG9rZW4pO1xuICAgICAgZ2FtZS51cGRhdGVTY29yZSh0b2tlbik7XG4gICAgICBnYW1lU2NyZWVuLnBhaW50U2NvcmUoZ2V0UGxheWVycygpKTtcbiAgICAgIG1vdmVzID0gMDtcbiAgICAgIF9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG1vdmVzID09PSA5KSB7XG4gICAgICBnYW1lU2NyZWVuLnNob3dFbmRnYW1lU2NyZWVuKCdkcmF3Jyk7XG4gICAgICBnYW1lLnVwZGF0ZVNjb3JlKCdkcmF3Jyk7XG4gICAgICBnYW1lU2NyZWVuLnBhaW50U2NvcmUoZ2V0UGxheWVycygpKTtcbiAgICAgIG1vdmVzID0gMDtcbiAgICAgIF9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIF9pc0dhbWVPdmVyO1xuICB9O1xuXG4gIHJldHVybiBydW47XG59XG5cbi8qIGNvbnN0IHJ1biA9IFNjcmVlbkNvbnRyb2xsZXIoKTsgKi9cbi8qIHJ1bigpOyAqL1xuXG5vblN0YXJ0QnRuQ2xpY2soKCkgPT4ge1xuICBzdGFydCgpO1xuICBjb25zb2xlLmxvZyhnZXRQbGF5ZXJzKCkpO1xuICBjb25zdCBydW4gPSBTY3JlZW5Db250cm9sbGVyKCk7XG4gIHJ1bigpO1xufSk7XG4iLCJjb25zdCBwbGF5ZXJUeXBlID0ge1xuICBIVU1BTjogJ2h1bWFuJyxcbiAgQk9UOiAnYm90Jyxcbn07XG5cbmZ1bmN0aW9uIHBsYXllcihuYW1lLCB0b2tlbiwgdHlwZSA9IHBsYXllclR5cGUuSFVNQU4pIHtcbiAgaWYgKG5hbWUubGVuZ3RoID4gNykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBhIHNob3J0IG5hbWUsIGxlc3MgdGhhbiAgNyBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2luczogMCxcbiAgICB0aWVzOiAwLFxuICAgIHR5cGUsXG4gICAgbmFtZSxcbiAgICB0b2tlbixcbiAgfTtcbn1cblxuXG5jb25zdCBib3RQbGF5ZXIgPSB7XG4gIGdlbmVyYXRlTW92ZShnYW1lYm9hcmQpIHtcbiAgICBsZXQgaW5kZXg7XG4gICAgbGV0IHRyeUNvdW50ID0gMDtcbiAgICBkbyB7XG4gICAgICB0cnlDb3VudCsrO1xuICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICB9IHdoaWxlIChnYW1lYm9hcmRbaW5kZXhdICE9PSAwIHx8IHRyeUNvdW50ID4yMDApO1xuICAgIHJldHVybiBpbmRleDtcbiAgfSxcbn1cblxuXG5leHBvcnQge3BsYXllclR5cGUsIHBsYXllciwgYm90UGxheWVyfVxuIiwiaW1wb3J0IHsgcGxheWVyLCBwbGF5ZXJUeXBlLCBib3RQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwbGFzaFNjcmVlbigpIHtcbiAgbGV0IHBsYXllcjEgPSBudWxsO1xuICBsZXQgcGxheWVyMiA9IG51bGw7XG4gIGxldCBwbGF5ZXJzID0gW107XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcHBvbmVudDogcGxheWVyVHlwZS5IVU1BTixcbiAgICBuYW1lczogeyBwbGF5ZXIxOiAnJywgcGxheWVyMjogJycgfSxcbiAgICBwbGF5ZXIxVG9rZW46ICdYJyxcbiAgICBwbGF5ZXIyVG9rZW46ICdPJyxcbiAgfTtcblxuICBjb25zdCBodW1hbkJvdFRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbi1ib3QtdG9nZ2xlJyk7XG4gIGNvbnN0IHhvVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1gtTy10b2dnbGUnKTtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BsYXNoIGEnKTtcbiAgY29uc3QgcGxheWVyMklucHV0Q29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5mb3JtLWNvbnRyb2xsZXIgKyAuZm9ybS1jb250cm9sbGVyJ1xuICApO1xuICBjb25zdCBwbGF5ZXIxTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjcGxheWVyLTEnKTtcbiAgY29uc3QgcGxheWVyMk5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3BsYXllci0yJyk7XG5cbiAgaHVtYW5Cb3RUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChodW1hbkJvdFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICBvcHRpb25zLm9wcG9uZW50ID0gcGxheWVyVHlwZS5CT1Q7XG4gICAgICBvcHRpb25zLm5hbWVzLnBsYXllcjIgPSBwbGF5ZXJUeXBlLkJPVDtcbiAgICAgIHBsYXllcjJJbnB1dENvbnRyb2xsZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIySW5wdXRDb250cm9sbGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIG9wdGlvbnMub3Bwb25lbnQgPSBwbGF5ZXJUeXBlLkhVTUFOO1xuICAgICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyID0gcGxheWVyVHlwZS5IVU1BTjtcbiAgICB9XG4gIH0pO1xuXG4gIHhvVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoeG9Ub2dnbGUuY2hlY2tlZCkge1xuICAgICAgb3B0aW9ucy5wbGF5ZXIxVG9rZW4gPSAnTyc7XG4gICAgICBvcHRpb25zLnBsYXllcjJUb2tlbiA9ICdYJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5wbGF5ZXIxVG9rZW4gPSAnWCc7XG4gICAgICBvcHRpb25zLnBsYXllcjJUb2tlbiA9ICdPJztcbiAgICB9XG4gIH0pO1xuXG4gIHBsYXllcjFOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIxID0gdGhpcy52YWx1ZTtcbiAgfSk7XG5cbiAgcGxheWVyMk5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBvcHRpb25zLm5hbWVzLnBsYXllcjIgPSB0aGlzLnZhbHVlO1xuICB9KTtcblxuICAvKiBUby1EbzogbWFrZSBzdXJlIHRoZSBnYW1lIGlzIHN0YXJ0aW5nICovXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IF9zcGxhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BsYXNoJyk7XG4gICAgY29uc3QgX2dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICAgIF9zcGxhc2guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIF9nYW1lLmNsYXNzTGlzdC5hZGQoJ2JveC0tc2hvdycpO1xuXG4gLyogSSBkb24ndCBsaWtlIHRoaXMgY29kZSwgaSBmZWVsIGxpa2UgaSBoYXZlIHJlcGVhdGVkIG15c2VsZiAgICovXG4gICAgaWYgKG9wdGlvbnMucGxheWVyMVRva2VuID09ICdYJykge1xuICAgICAgcGxheWVyMSA9IHBsYXllcihcbiAgICAgICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIxLFxuICAgICAgICBvcHRpb25zLnBsYXllcjFUb2tlbixcbiAgICAgICAgcGxheWVyVHlwZS5IVU1BTlxuICAgICAgKTtcblxuICAgICAgcGxheWVyMiA9IHBsYXllcihcbiAgICAgICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyLFxuICAgICAgICBvcHRpb25zLnBsYXllcjJUb2tlbixcbiAgICAgICAgb3B0aW9ucy5vcHBvbmVudFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMSA9IHBsYXllcihcbiAgICAgICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyLFxuICAgICAgICBvcHRpb25zLnBsYXllcjJUb2tlbixcbiAgICAgICAgcGxheWVyVHlwZS5IVU1BTlxuICAgICAgKTtcbiAgICAgIHBsYXllcjIgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMSxcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIxVG9rZW4sXG4gICAgICAgIG9wdGlvbnMub3Bwb25lbnRcbiAgICAgICk7XG4gICAgfVxuICAgIHBsYXllcnMgPSBbcGxheWVyMSwgcGxheWVyMl07XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHBsYXllcnM7XG5cbiAgY29uc3Qgb25TdGFydEJ0bkNsaWNrID0gKGZuKSA9PiB7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbik7XG4gIH07XG5cbiAgcmV0dXJuIHsgb25TdGFydEJ0bkNsaWNrLCBzdGFydCwgZ2V0UGxheWVycyB9O1xufVxuXG5jb25zdCB7IG9uU3RhcnRCdG5DbGljaywgc3RhcnQsIGdldFBsYXllcnMgfSA9IFNwbGFzaFNjcmVlbigpO1xuXG5leHBvcnQgeyBvblN0YXJ0QnRuQ2xpY2ssIHN0YXJ0LCBnZXRQbGF5ZXJzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=