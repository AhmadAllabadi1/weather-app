/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const submitFormBtn = document.getElementById(\"submitFormBtn\");\nconst form = document.getElementById('countryForm');\nconst countryInput = document.getElementById('countryInput');\nconst dataContainer = document.getElementById('dataContainer');\nconst temperatureDisplay = document.querySelector(\".temperature\")\nconst countryDisplay = document.querySelector(\".country\");\nconst conditionDisplay = document.querySelector(\".conditions\")\nconst conditionIconDisplay = document.querySelector(\".conditionIcon\");\nconst preciptationDisplay  = document.getElementById(\"preciptation\");\nconst humidityDisplay = document.getElementById(\"humidity\");\nconst windDisplay = document.getElementById(\"wind\");\nconst pressureDisplay = document.getElementById(\"pressure\");\n\nfunction getData(location) {\n    fetch(`https://api.weatherapi.com/v1/current.json?key=fb0cfa046b114f48923141009231707&q=${location}`)\n    .then((resp)=> resp.json())\n    .then(editDOM)\n}\n\nfunction editDOM(data) {\n    countryDisplay.innerHTML = `${data.location.country}, <br>  ${data.location.name}`;\n    temperatureDisplay.innerHTML = `${data.current.temp_c}&deg;C`;\n    conditionDisplay.innerHTML = `${data.current.condition.text}`;\n    conditionIconDisplay.innerHTML = `<img src=\"${data.current.condition.icon}\" class=\"iconImg\">`\n    humidityDisplay.innerHTML = `${data.current.humidity} %`;\n    windDisplay.innerHTML = `${data.current.gust_kph} KPH`;\n    preciptationDisplay.innerHTML=`${data.current.precip_mm} mm`;\n    pressureDisplay.innerHTML  =`${data.current.pressure_mb} mb`;\n}\n\ngetData('Doha');\n\nsubmitFormBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    const country = countryInput.value;\n    getData(country)\n})\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;