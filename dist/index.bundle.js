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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxLQUFLLEtBQUssd0JBQXdCLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGdDQUFnQyxzQ0FBc0Ms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O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsUUFBUSxxQ0FBcUM7O0FBRUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2dhbWVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zcGxhc2hTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogY29sb3IgKi9cbiAgLS1ncmF5LTUwOiAjZmFmYWZhO1xuICAtLWdyYXktNDAwOiAjZDRkNGQ4O1xuICAtLWdyYXktNTAwOiAjNmI3MjgwO1xuICAtLWdyYXktNjAwOiAjNGI1NTYzO1xuICAtLWdyYXktMzAwOiAjZDRkNGQ4O1xuICAtLWdyYXktMjAwOiAjZTRlNGU3O1xuICAtLWdyYXktMTAwOiAjZjNmNGY2O1xuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xuICAtLWdyYXktODAwOiAjMWYyOTM3O1xuICAtLWdyYXktOTAwOiAjMTExODI3O1xuXG4gIC8qIGZvbnRzICovXG5cbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjY5cmVtLCBjYWxjKDAuNjZyZW0gKyAwLjE4dncpLCAwLjhyZW0pO1xuICAtLXN0ZXAtMDogY2xhbXAoMC44NXJlbSwgY2FsYygwLjc4cmVtICsgMC4yOXZ3KSwgMXJlbSk7XG4gIC0tc3RlcC0xOiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcbiAgLS1zdGVwLTI6IGNsYW1wKDEuMnJlbSwgY2FsYygxLjA3cmVtICsgMC42M3Z3KSwgMS41cmVtKTtcbiAgLS1zdGVwLTM6IGNsYW1wKDEuNDRyZW0sIGNhbGMoMS4yNnJlbSArIDAuODl2dyksIDEuNzVyZW0pO1xuICAtLXN0ZXAtNDogY2xhbXAoMS43M3JlbSwgY2FsYygxLjQ4cmVtICsgMS4yNHZ3KSwgMi41cmVtKTtcbiAgLS1zdGVwLTU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgM3JlbSk7XG5cbiAgLyogbGVuZ3RocyB8fCBzcGFjaW5nICovXG5cbiAgLS1sZ3RoLTE6IGNsYW1wKDAuMjVyZW0sIGNhbGMoMC4yM3JlbSArIDAuMTF2dyksIDAuMzFyZW0pO1xuICAtLWxndGgtMjogY2xhbXAoMC41cmVtLCBjYWxjKDAuNDZyZW0gKyAwLjIydncpLCAwLjYzcmVtKTtcbiAgLS1sZ3RoLTM6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC42OHJlbSArIDAuMzN2dyksIDAuOTRyZW0pO1xuICAtLWxndGgtNDogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XG4gIC0tbGd0aC01OiBjbGFtcCgxLjVyZW0sIGNhbGMoMS4zN3JlbSArIDAuNjV2dyksIDEuODhyZW0pO1xuICAtLWxndGgtNjogY2xhbXAoMnJlbSwgY2FsYygxLjgzcmVtICsgMC44N3Z3KSwgMi41cmVtKTtcbiAgLS1sZ3RoLTc6IGNsYW1wKDNyZW0sIGNhbGMoMi43NHJlbSArIDEuM3Z3KSwgMy43NXJlbSk7XG4gIC0tbGd0aC04OiBjbGFtcCg0cmVtLCBjYWxjKDMuNjVyZW0gKyAxLjc0dncpLCA1cmVtKTtcbiAgLS1sZ3RoLTk6IGNsYW1wKDZyZW0sIGNhbGMoNS40OHJlbSArIDIuNjF2dyksIDcuNXJlbSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLnJlc3VsdHMgc3ZnIHtcbiAgZmlsbDogIzAzNjlhMTtcbiAgZmlsbDogdmFyKC0tZ3JheS01MDApO1xufVxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NWM3YTtcbiAgcGFkZGluZy1ibG9jazogMThweDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luLWlubGluZTogdmFyKC0tbGd0aC00KTsgLyogTWluaW11bSBtYXJnaW4gZm9yIHNtYWxsIHNjcmVlbnMgKi9cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyNTZweCkge1xuICBuYXYge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87IC8qIExldCB0aGUgbWFyZ2luIGdyb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cbiAgfVxufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIGNvbG9yOiAjZDllMmU4O1xuICBmb250LWZhbWlseTogUnVzc28gT25lO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNSk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMik7XG59XG5cbi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciA1MDBtcztcbn1cblxuLmdhbWUgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTMpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLnNwbGFzaCB7XG4gIGhlaWdodDogODglO1xufVxuXG4uc3BsYXNoLW9wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubm90ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwbGFzaCAuY29udGFpbmVyIHtcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTcpO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC00KTtcbn1cblxuLnNwbGFzaC1zdWJoZWFkaW5nIHtcbiAgY29sb3I6ICM4NGE1Yjg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDM4cHggMzhweDtcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogIzI3NWM3YTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3JtLWNvbnRyb2xsZXIgKyAuZm9ybS1jb250cm9sbGVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiAjMjg0OTVkO1xuXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWdyYXktMTAwKTtcbn1cblxuLmZvcm0gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAxLjVweCBzb2xpZCAjMDA3YmZmO1xufVxuXG4uZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg1OWVhZDtcbn1cblxuLnR1cm4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzk5OTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LWZhbWlseTogUnVzc28gT25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNyk7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnR1cm4gaDMge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTNweCkge1xuICAudHVybiBoMyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICB9XG59XG5cbi50dXJuID4gKiB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTYpO1xufVxuXG4ucGxheWVyLVgucGxheWluZyB7XG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XG4gIGNvbG9yOiAjZmJlZGRlO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4ucGxheWVyLU8ucGxheWluZyB7XG4gIGJhY2tncm91bmQ6ICMzMDhkZmU7XG4gIGNvbG9yOiAjZmJlZGRlO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuNCkgMHB4IDJweCA0cHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4ucGxheWVyLU8ge1xuICAvKiBiYWNrZ3JvdW5kOiAjZmE4YTJmOyAqL1xuICAvKiBjb2xvcjogI2ZiZWRkZTsgKi9cbn1cblxuLmJveCB7XG4gIC0tYm94LXNpemU6IGNsYW1wKDQuNXJlbSwgY2FsYygtMC44M3JlbSArIDI2LjY3dncpLCA3LjVyZW0pO1xuICB3aWR0aDogdmFyKC0tYm94LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWJveC1zaXplKTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogI2ViZjNmNztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiBoc2woMCwgMCUsIDAlKSAwcHggMnB4IDVweCAtMXB4LCBoc2woMCwgMCUsIDAlKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4uYm94IGgyIHtcbiAgZm9udC1zaXplOiBjbGFtcCg0LjAzcmVtLCBjYWxjKDAuNnJlbSArIDE3LjE1dncpLCA1Ljk2cmVtKTtcbn1cblxuLmJveDpub3QoLmNvbC0zKSB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbGd0aC00KTtcbn1cblxuLmdhbWUtYm9hcmQgPiAqOm5vdCgucm93LTMpIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC00KTtcbn1cblxuLlgsXG4uaWNvbi1YIHtcbiAgY29sb3I6ICNmYjkyM2M7XG59XG5cbi5PLFxuLmljb24tTyB7XG4gIGNvbG9yOiAjNjBhNWZhO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzLjA1cmVtKTtcbiAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZ2FtZS1ib2FyZCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuaGVhZGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaGVhZGVyIHN2ZyB7XG4gIGZpbGw6ICM4NGE1Yjg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5nYW1lLWJvYXJkID4gKiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdGF0dXMge1xuICBwYWRkaW5nLWJsb2NrOiAyNHB4O1xuICBwYWRkaW5nLWlubGluZTogMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xuICB3aWR0aDogMjUwcHg7XG4gIC8qIGJveC1zaGFkb3c6IDAgNHB4IDZweCBoc2xhKDAsIDAlLCAwLjIpOyAqL1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLnN0YXR1cyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbn1cblxuLnN0YXR1cyBoNCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN0YXR1cy13aW4tY291bnQge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zdGF0dXMtZHJhdyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5zdGF0dXMge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ucmVzdWx0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cbi5yZXN1bHRzID4gKiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBib3gtc2hhZG93OiBoc2xhKDAsIDAlLCAwJSwgMC44KSAwcHggMnB4IDVweCAtMXB4LFxuICAgIGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAxcHggM3B4IC0xcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5zY29yZSA+ICoge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG59XG5cbi5zY29yZS1YIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDEzOCwgNDcsIDAuNjIpO1xufVxuXG4uc2NvcmUtTyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDgsIDE0MSwgMjU0LCAwLjU3KTtcbn1cblxuLnNjb3JlIGgzIHtcbiAgY29sb3I6ICM0NDQyNDI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uc2NvcmUgaDIge1xuICBjb2xvcjogIzM3MzYzNjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zcGxhc2ggaDQge1xuICBjb2xvcjogaHNsKDIwMmRlZyAyMCUgNTUlKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1sZ3RoLTMpO1xufVxuXG4uc3BsYXNoIGEge1xuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XG4gIGZvbnQtZmFtaWx5OiAncnVzc28gb25lJztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5zcGxhc2ggYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlci1sYWJlbCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBmb3IgdGhlIGh1bWFuLWJvdCBzbGlkZXIgKi9cbi5zbGlkZXItbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuXG4uc2xpZGVyLTEge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogd2lkdGg6IDQwMHB4OyAqL1xufVxuXG4uc2xpZGVyLTIge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLyogd2lkdGg6IDIwMHB4OyAqL1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZjZmM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG5cbiAgaGVpZ2h0OiA1NHB4O1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubGFiZWwtaHVtYW4sXG4ubGFiZWwtYm90LFxuLmxhYmVsLVgsXG4ubGFiZWwtTyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwtYm90LFxuLmxhYmVsLU8ge1xuICByaWdodDogMDtcbn1cblxuLmxhYmVsLWh1bWFuIHtcbiAgY29sb3I6ICM0YjQ5NDg7XG59XG5cbmlucHV0OmNoZWNrZWQgfiAubGFiZWwtaHVtYW4ge1xuICBjb2xvcjogIzk5OTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1ib3Qge1xuICBjb2xvcjogIzRiNDk0ODtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDk1JSk7XG59XG5cbi5zcGxhc2gtb3B0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcbn1cblxuLnNwbGFzaC1vcHRpb24gKyAuc3BsYXNoLW9wdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtOCk7XG59XG5cbi8qIFNsaWRlciAyIHN0eWxlcyAgKi9cbi5zbGlkZXItMiAuc2xpZGVyOmJlZm9yZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmYThhMmY7XG59XG5cbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLnNsaWRlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjNjBhNWZhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XG59XG5cbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLU8ge1xuICBjb2xvcjogI2ZiZWRkZTtcbn1cblxuLnNsaWRlci0yIGlucHV0OmNoZWNrZWQgfiAubGFiZWwtWCB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4ubGFiZWwtWCB7XG4gIGNvbG9yOiAjZmJlZGRlO1xufVxuXG4vKiBXaW4gc3RhdGUgc3R5bGVzICovXG5cbi53aW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMDBweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDI4LCAwLjgyKTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1cywgb3BhY2l0eSA1cztcbiAgLyogYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICovXG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiB0aGUgbm9ybWFsIGJveCBkZWxheXMgdmlzaWJpbGl0eSB0cmFuc2l0aW9uIHNvIGl0IGRvZXNuJ3QgaGlkZSB1bnRpbCBhZnRlciB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIGRvbmUgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIDUwMG1zO1xufVxuXG4ud2luIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmU7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMy4zNnJlbSwgY2FsYygyLjAzcmVtICsgNi42NHZ3KSwgNy4wMXJlbSk7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi53aW4gcCB7XG4gIGNvbG9yOiAjYmZjN2NhO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndpbiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0zKTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNXMsIG9wYWNpdHkgNXM7XG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cbiAgb3BhY2l0eTogMDtcbn1cblxuLmJveC0tc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC8qIHRoZSBzaG93biBib3ggZG9lcyBub3QgZGVsYXkgdmlzaWJpbGl0eSwgc28gaXQgc2hvd3MgaW5zdGFudGx5IGFuZCB0cmFuc2l0aW9ucyBvcGFjaXR5ICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhcjtcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbGd0aC01KTtcbn1cblxuLmdpdGh1YntcbiAgZGlzcGxheTogZmxleDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixVQUFVOztFQUVWLHlEQUF5RDtFQUN6RCxzREFBc0Q7RUFDdEQsc0RBQXNEO0VBQ3RELHVEQUF1RDtFQUN2RCx5REFBeUQ7RUFDekQsd0RBQXdEO0VBQ3hELHFEQUFxRDs7RUFFckQsdUJBQXVCOztFQUV2Qix5REFBeUQ7RUFDekQsd0RBQXdEO0VBQ3hELHlEQUF5RDtFQUN6RCxzREFBc0Q7RUFDdEQsd0RBQXdEO0VBQ3hELHFEQUFxRDtFQUNyRCxxREFBcUQ7RUFDckQsbURBQW1EO0VBQ25ELHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTt3RUFDc0U7RUFDdEUsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTs7Y0FFWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQiw0QkFBNEIsRUFBRSxxQ0FB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QkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLHFEQUFxRDs7RUFFckQsa0JBQWtCO0VBQ2xCLDhHQUE4RztFQUM5Ryx5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDBEQUEwRDtFQUMxRCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkZBQTJGO0VBQzNGLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBjb2xvciAqL1xcbiAgLS1ncmF5LTUwOiAjZmFmYWZhO1xcbiAgLS1ncmF5LTQwMDogI2Q0ZDRkODtcXG4gIC0tZ3JheS01MDA6ICM2YjcyODA7XFxuICAtLWdyYXktNjAwOiAjNGI1NTYzO1xcbiAgLS1ncmF5LTMwMDogI2Q0ZDRkODtcXG4gIC0tZ3JheS0yMDA6ICNlNGU0ZTc7XFxuICAtLWdyYXktMTAwOiAjZjNmNGY2O1xcbiAgLS1ncmF5LTcwMDogIzM3NDE1MTtcXG4gIC0tZ3JheS04MDA6ICMxZjI5Mzc7XFxuICAtLWdyYXktOTAwOiAjMTExODI3O1xcblxcbiAgLyogZm9udHMgKi9cXG5cXG4gIC0tc3RlcC0tMTogY2xhbXAoMC42OXJlbSwgY2FsYygwLjY2cmVtICsgMC4xOHZ3KSwgMC44cmVtKTtcXG4gIC0tc3RlcC0wOiBjbGFtcCgwLjg1cmVtLCBjYWxjKDAuNzhyZW0gKyAwLjI5dncpLCAxcmVtKTtcXG4gIC0tc3RlcC0xOiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcXG4gIC0tc3RlcC0yOiBjbGFtcCgxLjJyZW0sIGNhbGMoMS4wN3JlbSArIDAuNjN2dyksIDEuNXJlbSk7XFxuICAtLXN0ZXAtMzogY2xhbXAoMS40NHJlbSwgY2FsYygxLjI2cmVtICsgMC44OXZ3KSwgMS43NXJlbSk7XFxuICAtLXN0ZXAtNDogY2xhbXAoMS43M3JlbSwgY2FsYygxLjQ4cmVtICsgMS4yNHZ3KSwgMi41cmVtKTtcXG4gIC0tc3RlcC01OiBjbGFtcCgyLjA3cmVtLCBjYWxjKDEuNzNyZW0gKyAxLjd2dyksIDNyZW0pO1xcblxcbiAgLyogbGVuZ3RocyB8fCBzcGFjaW5nICovXFxuXFxuICAtLWxndGgtMTogY2xhbXAoMC4yNXJlbSwgY2FsYygwLjIzcmVtICsgMC4xMXZ3KSwgMC4zMXJlbSk7XFxuICAtLWxndGgtMjogY2xhbXAoMC41cmVtLCBjYWxjKDAuNDZyZW0gKyAwLjIydncpLCAwLjYzcmVtKTtcXG4gIC0tbGd0aC0zOiBjbGFtcCgwLjc1cmVtLCBjYWxjKDAuNjhyZW0gKyAwLjMzdncpLCAwLjk0cmVtKTtcXG4gIC0tbGd0aC00OiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcXG4gIC0tbGd0aC01OiBjbGFtcCgxLjVyZW0sIGNhbGMoMS4zN3JlbSArIDAuNjV2dyksIDEuODhyZW0pO1xcbiAgLS1sZ3RoLTY6IGNsYW1wKDJyZW0sIGNhbGMoMS44M3JlbSArIDAuODd2dyksIDIuNXJlbSk7XFxuICAtLWxndGgtNzogY2xhbXAoM3JlbSwgY2FsYygyLjc0cmVtICsgMS4zdncpLCAzLjc1cmVtKTtcXG4gIC0tbGd0aC04OiBjbGFtcCg0cmVtLCBjYWxjKDMuNjVyZW0gKyAxLjc0dncpLCA1cmVtKTtcXG4gIC0tbGd0aC05OiBjbGFtcCg2cmVtLCBjYWxjKDUuNDhyZW0gKyAyLjYxdncpLCA3LjVyZW0pO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5yZXN1bHRzIHN2ZyB7XFxuICBmaWxsOiAjMDM2OWExO1xcbiAgZmlsbDogdmFyKC0tZ3JheS01MDApO1xcbn1cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzBhMGEwYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NWM3YTtcXG4gIHBhZGRpbmctYmxvY2s6IDE4cHg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW4taW5saW5lOiB2YXIoLS1sZ3RoLTQpOyAvKiBNaW5pbXVtIG1hcmdpbiBmb3Igc21hbGwgc2NyZWVucyAqL1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1NnB4KSB7XFxuICBuYXYge1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvOyAvKiBMZXQgdGhlIG1hcmdpbiBncm93IG9uIGxhcmdlciBzY3JlZW5zICovXFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgY29sb3I6ICNkOWUyZTg7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTUpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0yKTtcXG59XFxuXFxuLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXIgNTAwbXM7XFxufVxcblxcbi5nYW1lIC5jb250YWluZXIge1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtMyk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uc3BsYXNoIHtcXG4gIGhlaWdodDogODglO1xcbn1cXG5cXG4uc3BsYXNoLW9wdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3BsYXNoIC5jb250YWluZXIge1xcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTcpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNCk7XFxufVxcblxcbi5zcGxhc2gtc3ViaGVhZGluZyB7XFxuICBjb2xvcjogIzg0YTViODtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgcGFkZGluZzogMzhweCAzOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICBiYWNrZ3JvdW5kOiAjMjc1YzdhO1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5mb3JtLWNvbnRyb2xsZXIgKyAuZm9ybS1jb250cm9sbGVyIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBwYWRkaW5nLWlubGluZTogMTZweDtcXG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XFxuICBtYXgtd2lkdGg6IDMzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBiYWNrZ3JvdW5kOiAjMjg0OTVkO1xcblxcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0xMDApO1xcbn1cXG5cXG4uZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxLjVweCBzb2xpZCAjMDA3YmZmO1xcbn1cXG5cXG4uZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM4NTllYWQ7XFxufVxcblxcbi50dXJuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTcpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnR1cm4gaDMge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDEzcHgpIHtcXG4gIC50dXJuIGgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcbiAgfVxcbn1cXG5cXG4udHVybiA+ICoge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC02KTtcXG59XFxuXFxuLnBsYXllci1YLnBsYXlpbmcge1xcbiAgYmFja2dyb3VuZDogI2ZhOGEyZjtcXG4gIGNvbG9yOiAjZmJlZGRlO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDBweCAycHggNHB4IDBweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxufVxcblxcbi5wbGF5ZXItTy5wbGF5aW5nIHtcXG4gIGJhY2tncm91bmQ6ICMzMDhkZmU7XFxuICBjb2xvcjogI2ZiZWRkZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC40KSAwcHggMnB4IDRweCAwcHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xcbn1cXG5cXG4ucGxheWVyLU8ge1xcbiAgLyogYmFja2dyb3VuZDogI2ZhOGEyZjsgKi9cXG4gIC8qIGNvbG9yOiAjZmJlZGRlOyAqL1xcbn1cXG5cXG4uYm94IHtcXG4gIC0tYm94LXNpemU6IGNsYW1wKDQuNXJlbSwgY2FsYygtMC44M3JlbSArIDI2LjY3dncpLCA3LjVyZW0pO1xcbiAgd2lkdGg6IHZhcigtLWJveC1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYm94LXNpemUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gIGJhY2tncm91bmQ6ICNlYmYzZjc7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IGhzbCgwLCAwJSwgMCUpIDBweCAycHggNXB4IC0xcHgsIGhzbCgwLCAwJSwgMCUpIDBweCAxcHggM3B4IC0xcHg7XFxufVxcblxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0LjAzcmVtLCBjYWxjKDAuNnJlbSArIDE3LjE1dncpLCA1Ljk2cmVtKTtcXG59XFxuXFxuLmJveDpub3QoLmNvbC0zKSB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWxndGgtNCk7XFxufVxcblxcbi5nYW1lLWJvYXJkID4gKjpub3QoLnJvdy0zKSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTQpO1xcbn1cXG5cXG4uWCxcXG4uaWNvbi1YIHtcXG4gIGNvbG9yOiAjZmI5MjNjO1xcbn1cXG5cXG4uTyxcXG4uaWNvbi1PIHtcXG4gIGNvbG9yOiAjNjBhNWZhO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgMy4wNXJlbSk7XFxuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBzdmcge1xcbiAgZmlsbDogIzg0YTViODtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5nYW1lLWJvYXJkID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIHBhZGRpbmctYmxvY2s6IDI0cHg7XFxuICBwYWRkaW5nLWlubGluZTogMjRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIC8qIGJveC1zaGFkb3c6IDAgNHB4IDZweCBoc2xhKDAsIDAlLCAwLjIpOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLnN0YXR1cyBoMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcXG59XFxuXFxuLnN0YXR1cyBoNCB7XFxuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc3RhdHVzLXdpbi1jb3VudCB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5zdGF0dXMtZHJhdyB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5zdGF0dXMge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5yZXN1bHRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG4ucmVzdWx0cyA+ICoge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2NvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGJveC1zaGFkb3c6IGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAycHggNXB4IC0xcHgsXFxuICAgIGhzbGEoMCwgMCUsIDAlLCAwLjgpIDBweCAxcHggM3B4IC0xcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uc2NvcmUgPiAqIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xcbiAgcGFkZGluZy1ibG9jazogMjBweDtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2NvcmUtWCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTM4LCA0NywgMC42Mik7XFxufVxcblxcbi5zY29yZS1PIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDgsIDE0MSwgMjU0LCAwLjU3KTtcXG59XFxuXFxuLnNjb3JlIGgzIHtcXG4gIGNvbG9yOiAjNDQ0MjQyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4uc2NvcmUgaDIge1xcbiAgY29sb3I6ICMzNzM2MzY7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc3BsYXNoIGg0IHtcXG4gIGNvbG9yOiBoc2woMjAyZGVnIDIwJSA1NSUpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG4gIG1hcmdpbi10b3A6IHZhcigtLWxndGgtMyk7XFxufVxcblxcbi5zcGxhc2ggYSB7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMSk7XFxuICBmb250LWZhbWlseTogJ3J1c3NvIG9uZSc7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwbGFzaCBhOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlci1sYWJlbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHRoZSBodW1hbi1ib3Qgc2xpZGVyICovXFxuLnNsaWRlci1sYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAzM3B4O1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIGhlaWdodDogNjJweDtcXG59XFxuXFxuLnNsaWRlci0xIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIHdpZHRoOiA0MDBweDsgKi9cXG59XFxuXFxuLnNsaWRlci0yIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZjZmM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG5cXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBsZWZ0OiA0cHg7XFxuICB0b3A6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubGFiZWwtaHVtYW4sXFxuLmxhYmVsLWJvdCxcXG4ubGFiZWwtWCxcXG4ubGFiZWwtTyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sYWJlbC1ib3QsXFxuLmxhYmVsLU8ge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5sYWJlbC1odW1hbiB7XFxuICBjb2xvcjogIzRiNDk0ODtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1odW1hbiB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbC1ib3Qge1xcbiAgY29sb3I6ICM0YjQ5NDg7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTUlKTtcXG59XFxuXFxuLnNwbGFzaC1vcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC03KTtcXG59XFxuXFxuLnNwbGFzaC1vcHRpb24gKyAuc3BsYXNoLW9wdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTgpO1xcbn1cXG5cXG4vKiBTbGlkZXIgMiBzdHlsZXMgICovXFxuLnNsaWRlci0yIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmE4YTJmO1xcbn1cXG5cXG4uc2xpZGVyLTIgaW5wdXQ6Y2hlY2tlZCB+IC5zbGlkZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICM2MGE1ZmE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XFxufVxcblxcbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLU8ge1xcbiAgY29sb3I6ICNmYmVkZGU7XFxufVxcblxcbi5zbGlkZXItMiBpbnB1dDpjaGVja2VkIH4gLmxhYmVsLVgge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcblxcbi5sYWJlbC1YIHtcXG4gIGNvbG9yOiAjZmJlZGRlO1xcbn1cXG5cXG4vKiBXaW4gc3RhdGUgc3R5bGVzICovXFxuXFxuLndpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjAwcHg7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyOCwgMjgsIDAuODIpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1cywgb3BhY2l0eSA1cztcXG4gIC8qIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAqL1xcblxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLyogdGhlIG5vcm1hbCBib3ggZGVsYXlzIHZpc2liaWxpdHkgdHJhbnNpdGlvbiBzbyBpdCBkb2Vzbid0IGhpZGUgdW50aWwgYWZ0ZXIgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBkb25lICovXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXIgNTAwbXM7XFxufVxcblxcbi53aW4gaDEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogUnVzc28gT25lO1xcbiAgZm9udC1zaXplOiBjbGFtcCgzLjM2cmVtLCBjYWxjKDIuMDNyZW0gKyA2LjY0dncpLCA3LjAxcmVtKTtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi53aW4gcCB7XFxuICBjb2xvcjogI2JmYzdjYTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpbiAuY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC0zKTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNXMsIG9wYWNpdHkgNXM7XFxuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uYm94LS1zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgLyogdGhlIHNob3duIGJveCBkb2VzIG5vdCBkZWxheSB2aXNpYmlsaXR5LCBzbyBpdCBzaG93cyBpbnN0YW50bHkgYW5kIHRyYW5zaXRpb25zIG9wYWNpdHkgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhcjtcXG59XFxuXFxuYSB7XFxuICBmb250LXNpemU6IHZhcigtLWxndGgtNSk7XFxufVxcblxcbi5naXRodWJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGJvdFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIocGxheWVycykge1xuICBsZXQgX2JvYXJkID0gR2FtZWJvYXJkO1xuICBsZXQgX21vdmVzQ291bnQgPSAwO1xuICBsZXQgX2lzUGxheWVyMVR1cm4gPSB0cnVlO1xuICBsZXQgX2FjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG5cbiAgY29uc3Qgb3Bwb25lbnQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocGxheWVyc1tpXS5uYW1lID09IFwiYm90XCIpe1xuICAgICAgICByZXR1cm4ge2JvdDogdHJ1ZSwgdHVybjogaX1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtib3Q6IGZhbHNlLCB0dXJuOiBudWxsfVxuICB9XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICBfYWN0aXZlUGxheWVyID1cbiAgICAgIF9hY3RpdmVQbGF5ZXIudG9rZW4gPT09IHBsYXllcnNbMF0udG9rZW4gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBfYWN0aXZlUGxheWVyO1xuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChpbmRleCkgPT4ge1xuICAgIGxldCB0b2tlbiA9IGdldEFjdGl2ZVBsYXllcigpLnRva2VuO1xuICAgIGlmICghX2JvYXJkLnBsYWNlTW92ZSh0b2tlbiwgaW5kZXgpKSByZXR1cm4gLTE7XG4gICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIHJldHVybiB7IGluZGV4LCB0b2tlbiB9O1xuICB9O1xuXG4gIGNvbnN0IGJvdFBsYXlSb3VuZCA9ICgpID0+IHtcbiAgICBsZXQgdG9rZW4gPSBnZXRBY3RpdmVQbGF5ZXIoKS50b2tlbjtcbiAgICBsZXQgaW5kZXggPSBib3RQbGF5ZXIuZ2VuZXJhdGVNb3ZlKF9ib2FyZC5nZXRCb2FyZCgpKTtcblxuICAgIGlmICghX2JvYXJkLnBsYWNlTW92ZSh0b2tlbiwgaW5kZXgpKSByZXR1cm4gLTE7XG4gICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIHJldHVybiB7IGluZGV4LCB0b2tlbiB9O1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrV2luID0gKHRva2VuKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBfYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICBsZXQgY29sU2l6ZSA9IF9ib2FyZC5nZXRDb2xzKCk7XG4gICAgbGV0IGlzV2luID0gdHJ1ZTtcblxuICAgIC8qIGNoZWNrIGlmIHRoZXJlIGlzIGhvcml6b25hdGFsIHdpbiAqL1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XG4gICAgICBpc1dpbiA9IHRydWU7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAzOyBjb2wrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93ICogY29sU2l6ZSArIGNvbF0gIT09IHRva2VuKSB7XG4gICAgICAgICAgaXNXaW4gPSBmYWxzZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIGNoZWNrIGlmIHRoZXJlIGlzIHZlcnRpY2FsIHdpbiAqL1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDM7IGNvbCsrKSB7XG4gICAgICBpc1dpbiA9IHRydWU7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAzOyByb3crKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93ICogY29sU2l6ZSArIGNvbF0gIT09IHRva2VuKSB7XG4gICAgICAgICAgaXNXaW4gPSBmYWxzZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIGNoZWNrIGlmIHRoZXJlJ3MgYSBkaWFnb25hbCB3aW4gKi9cbiAgICBpZiAoYm9hcmRbMF0gPT0gdG9rZW4gJiYgYm9hcmRbNF0gPT0gdG9rZW4gJiYgYm9hcmRbOF0gPT0gdG9rZW4pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoYm9hcmRbNl0gPT0gdG9rZW4gJiYgYm9hcmRbNF0gPT0gdG9rZW4gJiYgYm9hcmRbMl0gPT0gdG9rZW4pXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTY29yZSA9ICh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RyYXcnKSB7XG4gICAgICBwbGF5ZXJzWzBdLnRpZXMgPSBwbGF5ZXJzWzBdLndpbnMgKyAxO1xuICAgICAgcGxheWVyc1sxXS50aWVzID0gcGxheWVyc1sxXS53aW5zICsgMTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIGlmIChwbGF5ZXJzW2ldLnRva2VuID09PSB0b2tlbikgcGxheWVyc1tpXS53aW5zID0gcGxheWVyc1tpXS53aW5zICsgMTtcbiAgICB9XG4gICAgLyogUHV0dGluZyB0aGlzIGhlcmUgbWFrZXMgdGhpcyBmdW5jdGlvbiBpbnB1cmUgKi9cbiAgICBfYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcbiAgfTtcblxuICByZXR1cm4ge29wcG9uZW50LCBib3RQbGF5Um91bmQsIHBsYXlSb3VuZCwgY2hlY2tXaW4sIHVwZGF0ZVNjb3JlIH07XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbi8qIGltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyJzsgKi9cbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuL3NwbGFzaFNjcmVlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTY3JlZW4oKSB7XG4gIGxldCBfYm9hcmQgPSBHYW1lYm9hcmQ7XG4gIGxldCBfcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJyk7XG4gIGxldCBfcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0Jyk7XG4gIGxldCBfdHVyblggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLVgnKTtcbiAgbGV0IF90dXJuTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItTycpO1xuICBsZXQgX3dpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXInKTtcblxuICBsZXQgX3Njb3JlWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1YIGgyJyk7XG4gIGxldCBfc2NvcmVPID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLU8gaDInKTtcbiAgbGV0IF90aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLXRpZXMgaDInKTtcbiAgY29uc3QgcGxheWVycyA9IGdldFBsYXllcnMoKTtcbiAgbGV0IF9uYW1lWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1YICNuYW1lJyk7XG4gIGxldCBfbmFtZU8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtTyAjbmFtZScpO1xuICBfbmFtZU8uaW5uZXJIVE1MID0gYCR7cGxheWVyc1sxXS5uYW1lfWA7XG4gIF9uYW1lWC5pbm5lckhUTUwgPSBgJHtwbGF5ZXJzWzBdLm5hbWV9YDtcbiAgLyogbGV0IF9lbmRHYW1lU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbicpOyAqL1xuICBjb25zdCBfYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG4gIGNvbnN0IGVuZEdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luJyk7XG4gIFxuICBjb25zdCBoYW5kbGVQbGF5QWdhaW4gPSAoKSA9PiB7XG4gICAgZW5kR2FtZVNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdib3gtLXNob3cnKTtcbiAgICBzZXRUaW1lb3V0KHJlc3RhcnQsIDUwMCk7XG4gIH1cblxuICBlbmRHYW1lU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheUFnYWluKTtcblxuICBjb25zdCBfY2hhbmdlVHVybiA9ICh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbiA9PSAnWCcpIHtcbiAgICAgIF90dXJuTy5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgICBfdHVyblguY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdHVybk8uY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgICAgX3R1cm5YLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5kZXggPSAoYm94KSA9PiB7XG4gICAgY29uc3QgaWQgPSBib3guZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHJldHVybiBwYXJzZUludChpZCk7XG4gIH07XG5cbiAgY29uc3QgcGFpbnRNb3ZlID0gKGJveCwgdG9rZW4pID0+IHtcbiAgICBib3guaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cIiR7dG9rZW59XCI+JHt0b2tlbn08L2gyPmA7XG4gICAgX2NoYW5nZVR1cm4odG9rZW4pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgX2JvYXJkLmNsZWFyQm9hcmQoKTtcbiAgICBfY2hhbmdlVHVybignTycpO1xuICAgIC8qIGFsc28gY2hhbmdlIHR1cm5zIGluIGxvZ2ljIGxldmVsKi9cbiAgICBfYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guaW5uZXJIVE1MID0gJzxoMj48L2gyPic7XG4gICAgfSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlUGxheUFnYWluKVxuICB9O1xuXG4gIF9yZXN0YXJ0QnV0dG9uLm9uY2xpY2sgPSByZXN0YXJ0O1xuICBjb25zdCBnZXRCb3hlcyA9ICgpID0+IF9ib3hlcztcblxuICBjb25zdCBzaG93RW5kZ2FtZVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcbiAgICBlbmRHYW1lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2JveC0tc2hvdycpO1xuICAgIGlmICh3aW5uZXIgPT0gJ2RyYXcnKSB7XG4gICAgICBfd2lubmVyLmlubmVySFRNTCA9IFwiSXQncyBhIGRyYXcuXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3dpbm5lci5pbm5lckhUTUwgPSBgJiMxMjc4ODI7IFBsYXllciA8c3BhbiBpZD1cIndpbm5lclwiPiR7d2lubmVyfTwvc3Bhbj4gV29uISAmIzEyNzg4MWA7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVQbGF5QWdhaW4pO1xuICB9O1xuXG4gIGNvbnN0IHBhaW50U2NvcmUgPSAocGxheWVycykgPT4ge1xuICAgIF9zY29yZVguaW5uZXJIVE1MID0gcGxheWVyc1swXS53aW5zO1xuICAgIF9zY29yZU8uaW5uZXJIVE1MID0gcGxheWVyc1sxXS53aW5zO1xuICAgIF90aWVzLmlubmVySFRNTCA9IHBsYXllcnNbMV0udGllcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEluZGV4LFxuICAgIHJlc3RhcnQsXG4gICAgdXBkYXRlU2NvcmVzLFxuICAgIGdldEJveGVzLFxuICAgIHBhaW50TW92ZSxcbiAgICBzaG93RW5kZ2FtZVNjcmVlbixcbiAgICBwYWludFNjb3JlLFxuICB9O1xufVxuIiwiZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCByb3dzID0gMztcbiAgY29uc3QgY29sdW1ucyA9IDM7XG4gIGNvbnN0IE5VTUJFUl9PRl9TUVVBUkVTID0gcm93cyAqIGNvbHVtbnM7XG5cbiAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEFycmF5KE5VTUJFUl9PRl9TUVVBUkVTKTtcbiAgZ2FtZWJvYXJkLmZpbGwoMCk7XG5cbiAgY29uc3QgcGxhY2VNb3ZlID0gKG1vdmUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHNxdWFyZUlzVGFrZW4oaW5kZXgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdhbWVib2FyZFtpbmRleF0gPSBtb3ZlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNxdWFyZUlzVGFrZW4gPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkW2luZGV4XSA9PT0gJ1gnIHx8IGdhbWVib2FyZFtpbmRleF0gPT09ICdPJykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuICBjb25zdCBnZXRSb3dzID0gKCkgPT4gcm93cztcbiAgY29uc3QgZ2V0Q29scyA9ICgpID0+IGNvbHVtbnM7XG5cbiAgY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgICBnYW1lYm9hcmQuZmlsbCgwKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRCb2FyZCwgcGxhY2VNb3ZlLCBnZXRDb2xzLCBjbGVhckJvYXJkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCgpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgb25TdGFydEJ0bkNsaWNrLCBzdGFydCwgZ2V0UGxheWVycyB9IGZyb20gJy4vc3BsYXNoU2NyZWVuJztcblxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9nYW1lU2NyZWVuJztcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVDb250cm9sbGVyJztcblxuZnVuY3Rpb24gU2NyZWVuQ29udHJvbGxlcigpIHtcbiAgY29uc3QgZ2FtZVNjcmVlbiA9IEdhbWVTY3JlZW4oKTtcbiAgY29uc3QgZ2FtZSA9IEdhbWVDb250cm9sbGVyKGdldFBsYXllcnMoKSk7XG5cbiAgbGV0IHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbm5lcicpO1xuICBsZXQgaW5kZXg7XG4gIGxldCBtb3ZlcyA9IDA7XG4gIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5vcHBvbmVudCgpO1xuICBnYW1lU2NyZWVuLnBhaW50U2NvcmUoZ2V0UGxheWVycygpKTtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgLyogSWYgYSBib3QgaXMgcGxheWluZyBmaXJzdCwgc3RhcnQgcGxheWluZyBoZXJlICovXG4gICAgaWYgKG9wcG9uZW50LmJvdCAmJiBvcHBvbmVudC50dXJuID09IDApIHtcbiAgICAgIGNvbnN0IHsgaW5kZXgsIHRva2VuIH0gPSBnYW1lLmJvdFBsYXlSb3VuZCgpO1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpbmRleH1cIl1gKTtcbiAgICAgIC8qIGlmICh0b2tlbiA9PT0gLTEpIHJldHVybjsgKi9cbiAgICAgIGdhbWVTY3JlZW4ucGFpbnRNb3ZlKGJveCwgdG9rZW4pO1xuICAgICAgbW92ZXMrKztcbiAgICB9XG4gICAgZ2FtZVNjcmVlbi5nZXRCb3hlcygpLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmRleCA9IGdhbWVTY3JlZW4uZ2V0SW5kZXgoYm94KTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZ2FtZS5wbGF5Um91bmQoaW5kZXgpO1xuICAgICAgICBpZiAodG9rZW4gPT09IC0xKSByZXR1cm47XG5cbiAgICAgICAgZ2FtZVNjcmVlbi5wYWludE1vdmUoYm94LCB0b2tlbik7XG4gICAgICAgIG1vdmVzKys7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKHRva2VuKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChvcHBvbmVudC5ib3QpIHtcbiAgICAgICAgICBjb25zdCB7IGluZGV4LCB0b2tlbiB9ID0gZ2FtZS5ib3RQbGF5Um91bmQoKTtcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2luZGV4fVwiXWApO1xuICAgICAgICAgIGF3YWl0IHNsZWVwKDQwMCk7XG4gICAgICAgICAgLyogaWYgKHRva2VuID09PSAtMSkgcmV0dXJuOyAqL1xuICAgICAgICAgIGdhbWVTY3JlZW4ucGFpbnRNb3ZlKGJveCwgdG9rZW4pO1xuICAgICAgICAgIG1vdmVzKys7XG4gICAgICAgICAgaWYgKGlzR2FtZU92ZXIodG9rZW4pKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cblxuICBjb25zdCBpc0dhbWVPdmVyID0gKHRva2VuLCBtb3ZlKSA9PiB7XG4gICAgbGV0IF9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgaWYgKGdhbWUuY2hlY2tXaW4odG9rZW4pKSB7XG4gICAgICBnYW1lU2NyZWVuLnNob3dFbmRnYW1lU2NyZWVuKHRva2VuKTtcbiAgICAgIGdhbWUudXBkYXRlU2NvcmUodG9rZW4pO1xuICAgICAgZ2FtZVNjcmVlbi5wYWludFNjb3JlKGdldFBsYXllcnMoKSk7XG4gICAgICBtb3ZlcyA9IDA7XG4gICAgICBfaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChtb3ZlcyA9PT0gOSkge1xuICAgICAgZ2FtZVNjcmVlbi5zaG93RW5kZ2FtZVNjcmVlbignZHJhdycpO1xuICAgICAgZ2FtZS51cGRhdGVTY29yZSgnZHJhdycpO1xuICAgICAgZ2FtZVNjcmVlbi5wYWludFNjb3JlKGdldFBsYXllcnMoKSk7XG4gICAgICBtb3ZlcyA9IDA7XG4gICAgICBfaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBfaXNHYW1lT3ZlcjtcbiAgfTtcblxuICByZXR1cm4gcnVuO1xufVxuXG4vKiBjb25zdCBydW4gPSBTY3JlZW5Db250cm9sbGVyKCk7ICovXG4vKiBydW4oKTsgKi9cblxub25TdGFydEJ0bkNsaWNrKCgpID0+IHtcbiAgc3RhcnQoKTtcbiAgY29uc29sZS5sb2coZ2V0UGxheWVycygpKTtcbiAgY29uc3QgcnVuID0gU2NyZWVuQ29udHJvbGxlcigpO1xuICBydW4oKTtcbn0pO1xuIiwiY29uc3QgcGxheWVyVHlwZSA9IHtcbiAgSFVNQU46ICdodW1hbicsXG4gIEJPVDogJ2JvdCcsXG59O1xuXG5mdW5jdGlvbiBwbGF5ZXIobmFtZSwgdG9rZW4sIHR5cGUgPSBwbGF5ZXJUeXBlLkhVTUFOKSB7XG4gIGlmIChuYW1lLmxlbmd0aCA+IDcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVc2UgYSBzaG9ydCBuYW1lLCBsZXNzIHRoYW4gIDcgY2hhcmFjdGVycy4nKTtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpbnM6IDAsXG4gICAgdGllczogMCxcbiAgICB0eXBlLFxuICAgIG5hbWUsXG4gICAgdG9rZW4sXG4gIH07XG59XG5cblxuY29uc3QgYm90UGxheWVyID0ge1xuICBnZW5lcmF0ZU1vdmUoZ2FtZWJvYXJkKSB7XG4gICAgbGV0IGluZGV4O1xuICAgIGxldCB0cnlDb3VudCA9IDA7XG4gICAgZG8ge1xuICAgICAgdHJ5Q291bnQrKztcbiAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgfSB3aGlsZSAoZ2FtZWJvYXJkW2luZGV4XSAhPT0gMCB8fCB0cnlDb3VudCA+MjAwKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG59XG5cblxuZXhwb3J0IHtwbGF5ZXJUeXBlLCBwbGF5ZXIsIGJvdFBsYXllcn1cbiIsImltcG9ydCB7IHBsYXllciwgcGxheWVyVHlwZSwgYm90UGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGxhc2hTY3JlZW4oKSB7XG4gIGxldCBwbGF5ZXIxID0gbnVsbDtcbiAgbGV0IHBsYXllcjIgPSBudWxsO1xuICBsZXQgcGxheWVycyA9IFtdO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3Bwb25lbnQ6IHBsYXllclR5cGUuSFVNQU4sXG4gICAgbmFtZXM6IHsgcGxheWVyMTogJycsIHBsYXllcjI6ICcnIH0sXG4gICAgcGxheWVyMVRva2VuOiAnWCcsXG4gICAgcGxheWVyMlRva2VuOiAnTycsXG4gIH07XG5cbiAgY29uc3QgaHVtYW5Cb3RUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tYm90LXRvZ2dsZScpO1xuICBjb25zdCB4b1RvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdYLU8tdG9nZ2xlJyk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwbGFzaCBhJyk7XG4gIGNvbnN0IHBsYXllcjJJbnB1dENvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZm9ybS1jb250cm9sbGVyICsgLmZvcm0tY29udHJvbGxlcidcbiAgKTtcbiAgY29uc3QgcGxheWVyMU5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3BsYXllci0xJyk7XG4gIGNvbnN0IHBsYXllcjJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNwbGF5ZXItMicpO1xuXG4gIGh1bWFuQm90VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoaHVtYW5Cb3RUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgb3B0aW9ucy5vcHBvbmVudCA9IHBsYXllclR5cGUuQk9UO1xuICAgICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyID0gcGxheWVyVHlwZS5CT1Q7XG4gICAgICBwbGF5ZXIySW5wdXRDb250cm9sbGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMklucHV0Q29udHJvbGxlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBvcHRpb25zLm9wcG9uZW50ID0gcGxheWVyVHlwZS5IVU1BTjtcbiAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMiA9IHBsYXllclR5cGUuSFVNQU47XG4gICAgfVxuICB9KTtcblxuICB4b1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHhvVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuID0gJ08nO1xuICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4gPSAnWCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuID0gJ1gnO1xuICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4gPSAnTyc7XG4gICAgfVxuICB9KTtcblxuICBwbGF5ZXIxTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIG9wdGlvbnMubmFtZXMucGxheWVyMSA9IHRoaXMudmFsdWU7XG4gIH0pO1xuXG4gIHBsYXllcjJOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgb3B0aW9ucy5uYW1lcy5wbGF5ZXIyID0gdGhpcy52YWx1ZTtcbiAgfSk7XG5cbiAgLyogVG8tRG86IG1ha2Ugc3VyZSB0aGUgZ2FtZSBpcyBzdGFydGluZyAqL1xuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBfc3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwbGFzaCcpO1xuICAgIGNvbnN0IF9nYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgICBfc3BsYXNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBfZ2FtZS5jbGFzc0xpc3QuYWRkKCdib3gtLXNob3cnKTtcblxuIC8qIEkgZG9uJ3QgbGlrZSB0aGlzIGNvZGUsIGkgZmVlbCBsaWtlIGkgaGF2ZSByZXBlYXRlZCBteXNlbGYgICAqL1xuICAgIGlmIChvcHRpb25zLnBsYXllcjFUb2tlbiA9PSAnWCcpIHtcbiAgICAgIHBsYXllcjEgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMSxcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIxVG9rZW4sXG4gICAgICAgIHBsYXllclR5cGUuSFVNQU5cbiAgICAgICk7XG5cbiAgICAgIHBsYXllcjIgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMixcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4sXG4gICAgICAgIG9wdGlvbnMub3Bwb25lbnRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcjEgPSBwbGF5ZXIoXG4gICAgICAgIG9wdGlvbnMubmFtZXMucGxheWVyMixcbiAgICAgICAgb3B0aW9ucy5wbGF5ZXIyVG9rZW4sXG4gICAgICAgIHBsYXllclR5cGUuSFVNQU5cbiAgICAgICk7XG4gICAgICBwbGF5ZXIyID0gcGxheWVyKFxuICAgICAgICBvcHRpb25zLm5hbWVzLnBsYXllcjEsXG4gICAgICAgIG9wdGlvbnMucGxheWVyMVRva2VuLFxuICAgICAgICBvcHRpb25zLm9wcG9uZW50XG4gICAgICApO1xuICAgIH1cbiAgICBwbGF5ZXJzID0gW3BsYXllcjEsIHBsYXllcjJdO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiBwbGF5ZXJzO1xuXG4gIGNvbnN0IG9uU3RhcnRCdG5DbGljayA9IChmbikgPT4ge1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm4pO1xuICB9O1xuXG4gIHJldHVybiB7IG9uU3RhcnRCdG5DbGljaywgc3RhcnQsIGdldFBsYXllcnMgfTtcbn1cblxuY29uc3QgeyBvblN0YXJ0QnRuQ2xpY2ssIHN0YXJ0LCBnZXRQbGF5ZXJzIH0gPSBTcGxhc2hTY3JlZW4oKTtcblxuZXhwb3J0IHsgb25TdGFydEJ0bkNsaWNrLCBzdGFydCwgZ2V0UGxheWVycyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9