/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/accordeon.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordeon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function accordeon() {
  var accordions = document.querySelectorAll(".accordion-block"),
      accordionHeading = document.querySelectorAll(".accordion-heading");

  var hideContent = function hideContent(a) {
    for (var i = a; i < accordions.length; i++) {
      accordions[i].classList.remove("show");
      accordions[i].classList.add("hide");
    }
  };

  hideContent(0);

  var showContent = function showContent(b) {
    if (accordions[b].classList.contains("hide")) {
      accordions[b].classList.remove("hide");
      accordions[b].classList.add("show");
    }
  };

  var _loop = function _loop(i) {
    accordionHeading[i].addEventListener("click", function () {
      hideContent(0);
      showContent(i);
    });
  };

  for (var i = 0; i < accordionHeading.length; i++) {
    _loop(i);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (accordeon);

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  var size = document.getElementById("size"),
      material = document.getElementById("material"),
      options = document.getElementById("options"),
      promocode = document.querySelector("#promo"),
      totalPrice = document.getElementById("total-price"),
      sizeSum = 0,
      materialSum = 0,
      optionSum = 0,
      promo,
      total = 0;
  totalPrice.innerHTML = 0;
  size.addEventListener("change", function () {
    sizeSum = +this.options[this.selectedIndex].value;
    total = (sizeSum + materialSum + optionSum) * 10;
    promo = "";

    if (promocode.value == "IWANTPOPART") {
      promo = promocode.value;
    }

    if (sizeSum > 0 && materialSum > 0) {
      if (promo == "IWANTPOPART") {
        totalPrice.innerHTML = total - total * 0.3;
      } else {
        totalPrice.innerHTML = total;
      }
    } else {
      totalPrice.innerHTML = 0;
    }
  });
  material.addEventListener("change", function () {
    materialSum = +this.options[this.selectedIndex].value;
    total = (sizeSum + materialSum + optionSum) * 10;
    promo = "";

    if (promocode.value == "IWANTPOPART") {
      promo = promocode.value;
    }

    if (sizeSum > 0 && materialSum > 0) {
      if (promo == "IWANTPOPART") {
        totalPrice.innerHTML = total - total * 0.3;
        console.log(promo);
        console.log("pr3");
      } else {
        totalPrice.innerHTML = total;
      }
    } else {
      totalPrice.innerHTML = 0;
    }
  });
  options.addEventListener("change", function () {
    optionSum = +this.options[this.selectedIndex].value;
    total = (sizeSum + materialSum + optionSum) * 10;
    promo = "";

    if (promocode.value == "IWANTPOPART") {
      promo = promocode.value;
    }

    if (sizeSum > 0 && materialSum > 0) {
      if (promo == "IWANTPOPART") {
        totalPrice.innerHTML = total - total * 0.3;
      } else {
        totalPrice.innerHTML = total;
      }
    } else {
      totalPrice.innerHTML = 0;
    }
  });
  document.body.addEventListener("change", function (e) {
    var target = e.target;
    var promo = "";

    if (target == promocode) {
      if (promocode.value == "IWANTPOPART") {
        promo = promocode.value;
      }

      if (sizeSum > 0 && materialSum > 0) {
        if (promo == "IWANTPOPART") {
          totalPrice.innerHTML = total - total * 0.3;
        } else {
          totalPrice.innerHTML = total;
        }
      } else {
        totalPrice.innerHTML = 0;
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function filter() {
  var portfolioMenu = document.querySelector(".portfolio-menu"),
      allActive = document.querySelector("#all"),
      lovers = document.querySelector("#lovers"),
      chef = document.querySelector("#chef"),
      girl = document.querySelector("#girl"),
      guy = document.querySelector("#guy"),
      grandmother = document.querySelector("#grandmother"),
      granddad = document.querySelector("#granddad"),
      portfoliono = document.querySelector(".portfolio-no"),
      tabs = document.getElementsByClassName("tabs"),
      allPicture = document.getElementsByClassName("all");

  var hidePicture = function hidePicture() {
    for (var i = 0; i < allPicture.length; i++) {
      allPicture[i].classList.remove("show");
      allPicture[i].classList.add("hide");
    }
  };

  var hideTabs = function hideTabs() {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.remove("active")) {
        tabs[i].classList.add("active");
      }
    }
  };

  portfolioMenu.addEventListener("click", function (e) {
    var target = e.target;

    if (target == lovers) {
      hidePicture();
      hideTabs();
      lovers.classList.toggle("active");

      for (var i = 0; i < allPicture.length; i++) {
        if (allPicture[i].classList.contains("lovers")) {
          allPicture[i].classList.remove("hide");
          allPicture[i].classList.add("show");
        }
      }
    }

    if (target == chef) {
      hidePicture();
      hideTabs();
      chef.classList.toggle("active");

      for (var _i = 0; _i < allPicture.length; _i++) {
        if (allPicture[_i].classList.contains("chef")) {
          allPicture[_i].classList.remove("hide");

          allPicture[_i].classList.add("show");
        }
      }
    }

    if (target == girl) {
      hidePicture();
      hideTabs();
      girl.classList.toggle("active");

      for (var _i2 = 0; _i2 < allPicture.length; _i2++) {
        if (allPicture[_i2].classList.contains("girl")) {
          allPicture[_i2].classList.remove("hide");

          allPicture[_i2].classList.add("show");
        }
      }
    }

    if (target == guy) {
      hidePicture();
      hideTabs();
      guy.classList.toggle("active");

      for (var _i3 = 0; _i3 < allPicture.length; _i3++) {
        if (allPicture[_i3].classList.contains("guy")) {
          allPicture[_i3].classList.remove("hide");

          allPicture[_i3].classList.add("show");
        }
      }
    }

    if (target == grandmother) {
      hideTabs();
      hidePicture();
      grandmother.classList.toggle("active");
      portfoliono.style.display = "block";
    }

    if (target == granddad) {
      hideTabs();
      hidePicture();
      granddad.classList.toggle("active");
      portfoliono.style.display = "block";
    }

    if (target == allActive) {
      hideTabs();
      allActive.classList.toggle("active");

      for (var _i4 = 0; _i4 < allPicture.length; _i4++) {
        if (allPicture[_i4].classList.contains("hide")) {
          allPicture[_i4].classList.remove("hide");

          allPicture[_i4].classList.add("show");
        }
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function form() {
  var message = {
    loading: "Идет отправка...",
    success: "Отправлено!",
    failure: "Ошибка!",
    onlyNumber: "Некорректный ввод телефона!"
  };
  var formSendToDesigner = document.querySelector("#popup-design-form"),
      formGetConsultation = document.querySelector("#popup-consultation-form"),
      formMainConsultation = document.querySelector("#main-consultation-form"),
      inputs = document.getElementsByTagName("input"),
      inputPhone = document.getElementById("phone-num"),
      inputConsPhone = document.getElementById("cons-phone-num"),
      inputMainPhone = document.getElementById("main-phone-num"),
      statusMessage = document.createElement("div");
  document.body.addEventListener('change', function (e) {
    var target = e.target;

    if (target == inputPhone || target == inputConsPhone || target == inputMainPhone) {
      validPhone();

      function validPhone() {
        var re = /^\d[\d\(\)\ -]{4,15}\d$/,
            valid = re.test(target.value);

        if (valid == false) {
          statusMessage.innerHTML = message.onlyNumber;
          target.value = "";
        }

        return message.onlyNumber;
      }
    }
  });

  function sendForm(elem) {
    elem.addEventListener("submit", function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      var request = new XMLHttpRequest(),
          formData = new FormData(elem);
      request.open("POST", "server.php");
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      };

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
    });
  }

  sendForm(formSendToDesigner);
  sendForm(formGetConsultation);
  sendForm(formMainConsultation);
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modal() {
  //1. modal popup-consultation
  var btnFlipFlap = document.getElementById("flip-flap"),
      btnBagFrames = document.getElementById("baguette-frames"),
      btnPortret = document.getElementById("portret"),
      closeConsl = document.getElementById("close-popup-consultation"),
      modalPopupConsl = document.querySelector(".popup-consultation"),
      bindModalPopupConsl = function bindModalPopupConsl(modalStatus) {
    modalPopupConsl.style.display = modalStatus;
  };

  document.body.addEventListener("click", function (e) {
    var target = e.target;
    target == btnFlipFlap || target == btnBagFrames || target == btnPortret ? bindModalPopupConsl("block") : "";
    target == closeConsl ? bindModalPopupConsl("none") : "";
  }); //2. modal popup design  

  var btnsOrder = document.querySelectorAll(".button-make-order"),
      closePopupDesign = document.getElementById("close-popup-design"),
      modalPopupDesign = document.querySelector(".popup-design"),
      bindModalPopupDesign = function bindModalPopupDesign(modalStatus) {
    modalPopupDesign.style.display = modalStatus;
  };

  document.body.addEventListener("click", function (e) {
    var target = e.target;

    if (target && target.classList.contains("button-make-order")) {
      for (var i = 0; i < btnsOrder.length; i++) {
        target == btnsOrder[i] ? bindModalPopupDesign("block") : "";
      }
    }

    target == closePopupDesign ? bindModalPopupDesign("none") : "";
  }); //3. modal gift

  var btnGift = document.querySelector(".fixed-gift"),
      closePopupGift = document.getElementById("close-popup-gift"),
      modalPopupGift = document.querySelector(".popup-gift"),
      bindModalPopupGift = function bindModalPopupGift(modalStatus) {
    modalPopupGift.style.display = modalStatus;
  };

  document.body.addEventListener("click", function (e) {
    var target = e.target;
    target == btnGift ? bindModalPopupGift("block") : "";
    target == closePopupGift ? bindModalPopupGift("none") : "";
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
  var slides = document.querySelectorAll(".feedback-slider-item"),
      prev = document.querySelector(".main-prev-btn"),
      next = document.querySelector(".main-next-btn"),
      slideIndex = -1,
      timerId;

  function showSlides(n) {
    clearTimeout(timerId);
    slideIndex += n + slides.length;
    slideIndex %= slides.length;
    slides.forEach(function (item, i) {
      return item.style.display = slideIndex == i ? "block" : "none";
    });
    timerId = window.setTimeout(showSlides, 2000, n);
  }

  showSlides(1);
  next.addEventListener("click", function () {
    showSlides(1);
  });
  prev.addEventListener("click", function () {
    showSlides(-1);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_calc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");
/* harmony import */ var _parts_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js");
/* harmony import */ var _parts_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");
/* harmony import */ var _parts_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js");
/* harmony import */ var _parts_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/filter.js */ "./src/js/parts/filter.js");
/* harmony import */ var _parts_accordeon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/accordeon.js */ "./src/js/parts/accordeon.js");






window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  Object(_parts_calc_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_parts_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_modal_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_slider_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_parts_filter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_parts_accordeon_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map