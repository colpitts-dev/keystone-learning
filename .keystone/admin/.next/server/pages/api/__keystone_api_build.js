/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/__keystone_api_build";
exports.ids = ["pages/api/__keystone_api_build"];
exports.modules = {

/***/ "@keystone-6/core":
/*!***********************************!*\
  !*** external "@keystone-6/core" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-6/core");

/***/ }),

/***/ "@keystone-6/core/fields":
/*!******************************************!*\
  !*** external "@keystone-6/core/fields" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-6/core/fields");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv/config");

/***/ }),

/***/ "(api)/./pages/api/__keystone_api_build.js":
/*!*******************************************!*\
  !*** ./pages/api/__keystone_api_build.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.getConfig = ()=>__webpack_require__(/*! ../../../../keystone */ \"(api)/../../keystone.ts\");\nconst x = Math.random();\nexports[\"default\"] = function(req, res) {\n    return res.send(x.toString());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvX19rZXlzdG9uZV9hcGlfYnVpbGQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUFBLGlCQUFpQixHQUFHLElBQU1FLG1CQUFPLENBQUMscURBQXNCLENBQUMsQ0FBQztBQUMxRCxNQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0FBQ3ZCTCxrQkFBZSxHQUFHLFNBQVVPLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQUUsT0FBT0EsR0FBRyxDQUFDQyxJQUFJLENBQUNOLENBQUMsQ0FBQ08sUUFBUSxFQUFFLENBQUM7QUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL19fa2V5c3RvbmVfYXBpX2J1aWxkLmpzP2ZkNmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5nZXRDb25maWcgPSAoKSA9PiByZXF1aXJlKFwiLi4vLi4vLi4vLi4va2V5c3RvbmVcIik7XG5jb25zdCB4ID0gTWF0aC5yYW5kb20oKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gcmVzLnNlbmQoeC50b1N0cmluZygpKSB9XG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsImdldENvbmZpZyIsInJlcXVpcmUiLCJ4IiwiTWF0aCIsInJhbmRvbSIsImRlZmF1bHQiLCJyZXEiLCJyZXMiLCJzZW5kIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/__keystone_api_build.js\n");

/***/ }),

/***/ "(api)/../../keystone.ts":
/*!*************************!*\
  !*** ../../keystone.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-6/core */ \"@keystone-6/core\");\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-6/core/fields */ \"@keystone-6/core/fields\");\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst databaseURL = process.env.DATABASE_URL || \"postgres://localhost:5432/keystone-learning_dev\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_1__.config)({\n    db: {\n        provider: \"postgresql\",\n        url: databaseURL,\n        onConnect: async (context)=>{\n            console.log(\"\\uD83D\\uDCBE Connected to database\");\n        },\n        // Optional advanced configuration\n        enableLogging: true,\n        useMigrations: true,\n        idField: {\n            kind: \"uuid\"\n        }\n    },\n    lists: {\n        Person: (0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_1__.list)({\n            fields: {\n                name: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_2__.text)({\n                    validation: {\n                        isRequired: true\n                    }\n                }),\n                email: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_2__.text)({\n                    validation: {\n                        isRequired: true\n                    },\n                    isIndexed: \"unique\"\n                })\n            }\n        })\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vLi4va2V5c3RvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQjtBQUN5QjtBQUNEO0FBRTlDLE1BQU1HLFdBQVcsR0FDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksSUFBSSxpREFBaUQ7QUFFL0UsaUVBQWVOLHdEQUFNLENBQUM7SUFDcEJPLEVBQUUsRUFBRTtRQUNGQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsR0FBRyxFQUFFTixXQUFXO1FBQ2hCTyxTQUFTLEVBQUUsT0FBT0MsT0FBTyxHQUFLO1lBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBeUIsQ0FBQztRQUN4QyxDQUFDO1FBQ0Qsa0NBQWtDO1FBQ2xDQyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsYUFBYSxFQUFFLElBQUk7UUFDbkJDLE9BQU8sRUFBRTtZQUFFQyxJQUFJLEVBQUUsTUFBTTtTQUFFO0tBRTFCO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxNQUFNLEVBQUVsQixzREFBSSxDQUFDO1lBQ1htQixNQUFNLEVBQUU7Z0JBQ05DLElBQUksRUFBRW5CLDZEQUFJLENBQUM7b0JBQUVvQixVQUFVLEVBQUU7d0JBQUVDLFVBQVUsRUFBRSxJQUFJO3FCQUFFO2lCQUFFLENBQUM7Z0JBQ2hEQyxLQUFLLEVBQUV0Qiw2REFBSSxDQUFDO29CQUFFb0IsVUFBVSxFQUFFO3dCQUFFQyxVQUFVLEVBQUUsSUFBSTtxQkFBRTtvQkFBRUUsU0FBUyxFQUFFLFFBQVE7aUJBQUUsQ0FBQzthQUN2RTtTQUNGLENBQUM7S0FDSDtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4va2V5c3RvbmUudHM/ZDRkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgeyBjb25maWcsIGxpc3QgfSBmcm9tICdAa2V5c3RvbmUtNi9jb3JlJ1xuaW1wb3J0IHsgdGV4dCB9IGZyb20gJ0BrZXlzdG9uZS02L2NvcmUvZmllbGRzJ1xuXG5jb25zdCBkYXRhYmFzZVVSTCA9XG4gIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fCAncG9zdGdyZXM6Ly9sb2NhbGhvc3Q6NTQzMi9rZXlzdG9uZS1sZWFybmluZ19kZXYnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyh7XG4gIGRiOiB7XG4gICAgcHJvdmlkZXI6ICdwb3N0Z3Jlc3FsJyxcbiAgICB1cmw6IGRhdGFiYXNlVVJMLFxuICAgIG9uQ29ubmVjdDogYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5K+IENvbm5lY3RlZCB0byBkYXRhYmFzZScpXG4gICAgfSxcbiAgICAvLyBPcHRpb25hbCBhZHZhbmNlZCBjb25maWd1cmF0aW9uXG4gICAgZW5hYmxlTG9nZ2luZzogdHJ1ZSxcbiAgICB1c2VNaWdyYXRpb25zOiB0cnVlLFxuICAgIGlkRmllbGQ6IHsga2luZDogJ3V1aWQnIH0sXG4gICAgLy9zaGFkb3dEYXRhYmFzZVVybDogJ3Bvc3RncmVzOi8vZGJ1c2VyOmRicGFzc0Bsb2NhbGhvc3Q6NTQzMi9zaGFkb3dkYicsXG4gIH0sXG4gIGxpc3RzOiB7XG4gICAgUGVyc29uOiBsaXN0KHtcbiAgICAgIGZpZWxkczoge1xuICAgICAgICBuYW1lOiB0ZXh0KHsgdmFsaWRhdGlvbjogeyBpc1JlcXVpcmVkOiB0cnVlIH0gfSksXG4gICAgICAgIGVtYWlsOiB0ZXh0KHsgdmFsaWRhdGlvbjogeyBpc1JlcXVpcmVkOiB0cnVlIH0sIGlzSW5kZXhlZDogJ3VuaXF1ZScgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJjb25maWciLCJsaXN0IiwidGV4dCIsImRhdGFiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsImRiIiwicHJvdmlkZXIiLCJ1cmwiLCJvbkNvbm5lY3QiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImVuYWJsZUxvZ2dpbmciLCJ1c2VNaWdyYXRpb25zIiwiaWRGaWVsZCIsImtpbmQiLCJsaXN0cyIsIlBlcnNvbiIsImZpZWxkcyIsIm5hbWUiLCJ2YWxpZGF0aW9uIiwiaXNSZXF1aXJlZCIsImVtYWlsIiwiaXNJbmRleGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/../../keystone.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/__keystone_api_build.js"));
module.exports = __webpack_exports__;

})();