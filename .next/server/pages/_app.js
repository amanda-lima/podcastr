(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 588:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__uAgJk"
};


/***/ }),

/***/ 822:
/***/ ((module) => {

// Exports
module.exports = {
	"playerContainer": "styles_playerContainer__jNKI4",
	"empty": "styles_empty__Oat2A",
	"emptyPlayer": "styles_emptyPlayer__o7Xe4",
	"progress": "styles_progress__08yEm",
	"slider": "styles_slider__AMw_Y",
	"emptySlider": "styles_emptySlider__x6i9F",
	"buttons": "styles_buttons__ih6PH",
	"playButton": "styles_playButton__ShCgu"
};


/***/ }),

/***/ 666:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "app_wrapper__JmZWQ"
};


/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "date-fns/format"
const format_namespaceObject = require("date-fns/format");
var format_default = /*#__PURE__*/__webpack_require__.n(format_namespaceObject);
;// CONCATENATED MODULE: external "date-fns/locale/pt-BR"
const pt_BR_namespaceObject = require("date-fns/locale/pt-BR");
var pt_BR_default = /*#__PURE__*/__webpack_require__.n(pt_BR_namespaceObject);
// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var styles_module = __webpack_require__(588);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx




function Header() {
    const currentDate = format_default()(new Date(), "EEEEEE, d MMMM", {
        locale: (pt_BR_default())
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (styles_module_default()).headerContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/logo.svg",
                alt: "Podcastr"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "O melhor para voc\xea ouvir, sempre."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: currentDate
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Player/styles.module.scss
var Player_styles_module = __webpack_require__(822);
var Player_styles_module_default = /*#__PURE__*/__webpack_require__.n(Player_styles_module);
;// CONCATENATED MODULE: ./src/components/Player/index.tsx


function Player() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Player_styles_module_default()).playerContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/playing.svg",
                        alt: "Tocando agora"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: "Tocando Agora"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Player_styles_module_default()).emptyPlayer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "Selecione um podcast para ouvir"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: (Player_styles_module_default()).empty,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Player_styles_module_default()).progress,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "00:00"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Player_styles_module_default()).slider,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Player_styles_module_default()).emptySlider
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "00:00"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Player_styles_module_default()).buttons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/shuffle.svg",
                                    alt: "Embaralhar"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/play-previous.svg",
                                    alt: "Tocar Anterior"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: (Player_styles_module_default()).playButton,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/play.svg",
                                    alt: "Tocar"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/play-next.svg",
                                    alt: "Tocar Pr\xf3xima"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/repeat.svg",
                                    alt: "Repetir"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/app.module.scss
var app_module = __webpack_require__(666);
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (app_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Player, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(736));
module.exports = __webpack_exports__;

})();