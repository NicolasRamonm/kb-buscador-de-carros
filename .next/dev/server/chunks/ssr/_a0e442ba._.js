module.exports = [
"[project]/src/components/ui/chip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chip",
    ()=>Chip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function Chip({ active = false, className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors", active ? "bg-blue-600 text-white" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/chip.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
    ghost: "text-blue-600 hover:bg-blue-50",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
};
const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base"
};
function Button({ variant = "primary", size = "md", fullWidth, className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", variantStyles[variant], sizeStyles[size], fullWidth && "w-full", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/backend/data/city-state-map.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_STATES",
    ()=>AVAILABLE_STATES,
    "CITY_STATE_MAP",
    ()=>CITY_STATE_MAP
]);
const CITY_STATE_MAP = {
    "São Paulo": "SP",
    "Campinas": "SP",
    "Rio de Janeiro": "RJ",
    "Belo Horizonte": "MG",
    "Curitiba": "PR",
    "Porto Alegre": "RS"
};
const AVAILABLE_STATES = [
    "SP",
    "RJ",
    "MG",
    "PR",
    "RS"
];
}),
"[project]/src/components/blocks/HeroSearchIA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSearchIA",
    ()=>HeroSearchIA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/chip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$city$2d$state$2d$map$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/data/city-state-map.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const STATE_OPTIONS = [
    "Todos",
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$city$2d$state$2d$map$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AVAILABLE_STATES"]
];
function HeroSearchIA({ onSearch }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Todos");
    const handleSubmit = ()=>{
        const state = selectedState === "Todos" ? undefined : selectedState;
        onSearch(query || "Carro confortável para família na cidade", state);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[780px] rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-semibold text-gray-900 md:text-xl",
                            children: "Buscar com IA"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: 20,
                            className: "text-violet-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            size: 16,
                            className: "shrink-0 text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-gray-600",
                            children: "Estado de busca:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        STATE_OPTIONS.map((state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chip"], {
                                active: state === selectedState,
                                onClick: ()=>setSelectedState(state),
                                children: state
                            }, state, false, {
                                fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-gradient-to-r from-violet-600 to-blue-600 p-[2px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-[48px] items-center gap-2.5 rounded-full bg-white px-[18px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 18,
                                className: "shrink-0 text-violet-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Descreva o que você está procurando",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value),
                                onKeyDown: (e)=>e.key === "Enter" && handleSubmit(),
                                className: "flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "lg",
                        onClick: handleSubmit,
                        children: "Buscar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blocks/HeroSearchIA.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/cars.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"byd-dolphin","Name":"BYD","Model":"Dolphin","Image":"/img/byd-dolphin/1.png","Price":99990,"Location":"São Paulo"},{"id":"toyota-corolla","Name":"Toyota","Model":"Corolla","Image":"/img/toyota-corolla/1.png","Price":112000,"Location":"São Paulo"},{"id":"vw-tcross","Name":"Volkswagen","Model":"T-Cross","Image":"/img/vw-tcross/1.png","Price":118500,"Location":"Campinas"},{"id":"honda-civic","Name":"Honda","Model":"Civic","Image":"/img/honda-civic/1.png","Price":105000,"Location":"Rio de Janeiro"},{"id":"chevrolet-onix","Name":"Chevrolet","Model":"Onix","Image":"/img/chevrolet-onix/1.png","Price":85000,"Location":"Belo Horizonte"},{"id":"hyundai-hb20","Name":"Hyundai","Model":"HB20","Image":"/img/hyundai-hb20/1.png","Price":79000,"Location":"São Paulo"},{"id":"renault-kwid","Name":"Renault","Model":"Kwid","Image":"/img/renault-kwid/1.png","Price":68990,"Location":"Curitiba"},{"id":"fiat-pulse","Name":"Fiat","Model":"Pulse","Image":"/img/fiat-pulse/1.png","Price":96000,"Location":"São Paulo"},{"id":"jeep-renegade","Name":"Jeep","Model":"Renegade","Image":"/img/jeep-renegade/1.png","Price":122000,"Location":"Porto Alegre"},{"id":"peugeot-208","Name":"Peugeot","Model":"208","Image":"/img/peugeot-208/1.png","Price":87500,"Location":"São Paulo"}]);}),
"[project]/src/config/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRANDS",
    ()=>BRANDS,
    "SIMULATION_DEFAULTS",
    ()=>SIMULATION_DEFAULTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cars$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/cars.json (json)");
;
const BRANDS = [
    ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$cars$2e$json__$28$json$29$__["default"].map((c)=>c.Name))
];
const SIMULATION_DEFAULTS = {
    entryAmount: 10000,
    termMonths: 48,
    monthlyIncome: 7000,
    maxIncomePercent: 30,
    annualInterestRate: 0.12
};
}),
"[project]/src/components/blocks/BrandsRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandsRow",
    ()=>BrandsRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function BrandsRow({ selected = "Hyundai", onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold text-gray-900 text-center",
                children: "Busque por Marcas"
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/BrandsRow.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRANDS"].map((brand)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelect?.(brand),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("group flex flex-col items-center justify-center rounded-full bg-white transition-all", "h-[120px] w-[120px] border-2 border-gray-200 hover:border-blue-600 hover:shadow-md hover:scale-105"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("text-center text-xs font-bold text-gray-900 group-hover:text-blue-600"),
                            children: brand
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/BrandsRow.tsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this)
                    }, brand, false, {
                        fileName: "[project]/src/components/blocks/BrandsRow.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/BrandsRow.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blocks/BrandsRow.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
const shadowStyles = {
    sm: "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
    md: "shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    lg: "shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
};
function Card({ shadow = "sm", className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("rounded-2xl bg-white", shadowStyles[shadow], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPrice",
    ()=>formatPrice
]);
function formatPrice(value) {
    return `R$ ${value.toLocaleString("pt-BR")}`;
}
}),
"[project]/src/components/blocks/CarGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarGrid",
    ()=>CarGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function CarGrid({ cars, onSeeAll }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900",
                        children: "Carros disponíveis"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/CarGrid.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    onSeeAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSeeAll,
                        className: "text-sm font-semibold text-blue-600 hover:text-blue-700",
                        children: "Ver todos →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/CarGrid.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/CarGrid.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
                children: cars.map((car, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/detalhe?id=${index}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "overflow-hidden transition-shadow hover:shadow-md",
                            children: [
                                car.Image && car.Image !== "exemplo.png" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: car.Image,
                                    alt: `${car.Name} ${car.Model}`,
                                    className: "h-40 w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-40 w-full bg-gradient-to-br from-gray-200 to-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5 px-4 pb-3.5 pt-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[15px] font-semibold text-gray-900",
                                            children: [
                                                car.Name,
                                                " ",
                                                car.Model
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-bold text-blue-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(car.Price)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14,
                                                    className: "text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: car.Location
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/blocks/CarGrid.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blocks/CarGrid.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, `${car.Name}-${car.Model}-${index}`, false, {
                        fileName: "[project]/src/components/blocks/CarGrid.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/CarGrid.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blocks/CarGrid.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/backend/data/cars-enriched.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"byd-dolphin","brand":"BYD","model":"Dolphin","fullName":"BYD Dolphin","image":"/img/byd-dolphin/1.png","price":99990,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2024,"mileage":0,"transmission":"Automático","fuel":"Elétrico","category":"hatch","tags":["elétrico","econômico","tecnológico","sustentável","cidade","moderno","silencioso","baixa manutenção","compacto"],"content":"BYD Dolphin 2024 hatch elétrico automático. Carro 100% elétrico, ideal para quem busca economia e sustentabilidade. Zero emissões, manutenção reduzida e tecnologia de ponta. Excelente para uso urbano na cidade com autonomia suficiente para o dia a dia. Design moderno e interior espaçoso para um hatch. Disponível em São Paulo."},{"id":"toyota-corolla","brand":"Toyota","model":"Corolla","fullName":"Toyota Corolla","image":"/img/toyota-corolla/1.png","price":112000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2019,"mileage":45000,"transmission":"Automático","fuel":"Flex","category":"sedan","tags":["confortável","espaçoso","familiar","econômico","cidade","viagem","revenda alta","confiável","seguro"],"content":"Toyota Corolla 2019 sedan automático flex. Carro confortável e espaçoso, ideal para família. Excelente custo-benefício e alta revenda. Bom para uso na cidade e viagens longas. Consumo eficiente, manutenção acessível e alta confiabilidade. Um dos sedans mais vendidos e confiáveis do Brasil. Disponível em São Paulo."},{"id":"vw-tcross","brand":"Volkswagen","model":"T-Cross","fullName":"Volkswagen T-Cross","image":"/img/vw-tcross/1.png","price":118500,"location":"Campinas","lat":-22.9099,"lng":-47.0626,"year":2022,"mileage":28000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","espaçoso","familiar","aventura","cidade","alto","versátil","seguro","moderno"],"content":"Volkswagen T-Cross 2022 SUV compacto automático flex. SUV versátil ideal para famílias que buscam espaço e posição de dirigir elevada. Bom desempenho tanto na cidade quanto em estradas. Interior amplo com porta-malas generoso. Design moderno e boa lista de equipamentos de segurança. Disponível em Campinas."},{"id":"honda-civic","brand":"Honda","model":"Civic","fullName":"Honda Civic","image":"/img/honda-civic/1.png","price":105000,"location":"Rio de Janeiro","lat":-22.9068,"lng":-43.1729,"year":2020,"mileage":38000,"transmission":"Automático","fuel":"Flex","category":"sedan","tags":["esportivo","confortável","potente","tecnológico","cidade","viagem","premium","design","seguro"],"content":"Honda Civic 2020 sedan automático flex. Sedan com pegada esportiva e acabamento premium. Motor potente com excelente dirigibilidade. Ideal para quem busca conforto com desempenho acima da média. Tecnologia embarcada de ponta, interior sofisticado. Ótimo para viagens longas e uso diário na cidade. Disponível no Rio de Janeiro."},{"id":"chevrolet-onix","brand":"Chevrolet","model":"Onix","fullName":"Chevrolet Onix","image":"/img/chevrolet-onix/1.png","price":85000,"location":"Belo Horizonte","lat":-19.9167,"lng":-43.9345,"year":2021,"mileage":32000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["econômico","compacto","cidade","popular","acessível","baixo consumo","primeiro carro","prático","ágil"],"content":"Chevrolet Onix 2021 hatch compacto automático flex. O carro mais vendido do Brasil, conhecido pelo excelente custo-benefício. Consumo muito baixo de combustível, ideal para uso diário na cidade. Perfeito como primeiro carro ou para quem busca economia. Manutenção barata e ampla rede de concessionárias. Disponível em Belo Horizonte."},{"id":"hyundai-hb20","brand":"Hyundai","model":"HB20","fullName":"Hyundai HB20","image":"/img/hyundai-hb20/1.png","price":79000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2021,"mileage":35000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["econômico","compacto","cidade","acessível","design bonito","moderno","primeiro carro","jovem","prático"],"content":"Hyundai HB20 2021 hatch compacto automático flex. Compacto com design moderno e bonito, muito popular entre jovens e como primeiro carro. Excelente economia de combustível e manutenção acessível. Interior bem acabado para a categoria. Ótimo para rodar na cidade com agilidade. Disponível em São Paulo."},{"id":"renault-kwid","brand":"Renault","model":"Kwid","fullName":"Renault Kwid","image":"/img/renault-kwid/1.png","price":68990,"location":"Curitiba","lat":-25.4284,"lng":-49.2733,"year":2022,"mileage":22000,"transmission":"Manual","fuel":"Flex","category":"compacto","tags":["barato","econômico","entrada","compacto","cidade","primeiro carro","acessível","leve","simples"],"content":"Renault Kwid 2022 compacto manual flex. O carro mais acessível da lista, perfeito para quem busca o melhor preço de entrada. Muito econômico no combustível, leve e fácil de manobrar. Ideal para uso exclusivamente urbano. Visual aventureiro inspirado em SUV. Ótima opção para primeiro carro ou orçamento limitado. Disponível em Curitiba."},{"id":"fiat-pulse","brand":"Fiat","model":"Pulse","fullName":"Fiat Pulse","image":"/img/fiat-pulse/1.png","price":96000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2023,"mileage":15000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","compacto","moderno","turbo","potente","cidade","jovem","tecnológico","design"],"content":"Fiat Pulse 2023 SUV compacto automático flex turbo. SUV compacto com motor turbo que entrega potência e agilidade. Design moderno e atraente, com interior tecnológico e multimídia de última geração. Ideal para jovens que querem um SUV com pegada esportiva. Boa altura do solo e versatilidade urbana. Disponível em São Paulo."},{"id":"jeep-renegade","brand":"Jeep","model":"Renegade","fullName":"Jeep Renegade","image":"/img/jeep-renegade/1.png","price":122000,"location":"Porto Alegre","lat":-30.0346,"lng":-51.2177,"year":2021,"mileage":40000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","aventura","off-road","robusto","espaçoso","familiar","viagem","campo","seguro","alto"],"content":"Jeep Renegade 2021 SUV automático flex. SUV robusto e aventureiro, ideal para quem gosta de pegar estrada e aventura. Capacidade off-road real com boa altura do solo. Espaçoso para família e bagagens em viagens. Marca Jeep traz confiança em terrenos difíceis. Ótimo para quem mora em regiões com estradas ruins ou busca versatilidade total. Disponível em Porto Alegre."},{"id":"peugeot-208","brand":"Peugeot","model":"208","fullName":"Peugeot 208","image":"/img/peugeot-208/1.png","price":87500,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2022,"mileage":25000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["design","europeu","moderno","tecnológico","cidade","premium","compacto","estiloso","confortável"],"content":"Peugeot 208 2022 hatch automático flex. Hatch com design europeu sofisticado e interior inovador com painel digital i-Cockpit. Destaque em tecnologia e acabamento premium para a categoria. Motor eficiente e ótima dirigibilidade urbana. Ideal para quem valoriza estilo e refinamento em um carro compacto. Disponível em São Paulo."}]);}),
"[project]/src/lib/cars.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "carResponseToCar",
    ()=>carResponseToCar,
    "fetchAllCars",
    ()=>fetchAllCars,
    "fetchCarById",
    ()=>fetchCarById,
    "findCarsByQuery",
    ()=>findCarsByQuery,
    "getAllCars",
    ()=>getAllCars,
    "getCarByIndex",
    ()=>getCarByIndex,
    "getCatalogCars",
    ()=>getCatalogCars,
    "searchCarsWithAI",
    ()=>searchCarsWithAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/backend/data/cars-enriched.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cars$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/cars.json (json)");
;
;
const cars = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__["default"].map((ec)=>({
        Name: ec.brand,
        Model: ec.model,
        Image: ec.image,
        Price: ec.price,
        Location: ec.location,
        id: ec.id,
        fullName: ec.fullName,
        year: ec.year,
        mileage: ec.mileage,
        transmission: ec.transmission,
        fuel: ec.fuel,
        category: ec.category,
        tags: ec.tags,
        lat: ec.lat,
        lng: ec.lng,
        content: ec.content
    }));
function getAllCars() {
    return cars;
}
function getCatalogCars() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$cars$2e$json__$28$json$29$__["default"].map((c)=>({
            Name: c.Name,
            Model: c.Model,
            Image: c.Image,
            Price: c.Price,
            Location: c.Location,
            id: c.id
        }));
}
function getCarByIndex(index) {
    return cars[index];
}
function findCarsByQuery(query) {
    const lower = query.toLowerCase();
    return cars.filter((car)=>car.Name.toLowerCase().includes(lower) || car.Model.toLowerCase().includes(lower) || car.Location.toLowerCase().includes(lower) || car.category?.toLowerCase().includes(lower) || car.tags?.some((tag)=>tag.toLowerCase().includes(lower)) || car.content?.toLowerCase().includes(lower));
}
async function searchCarsWithAI(query, userLat, userLng, userState) {
    const res = await fetch("/api/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query,
            userLat,
            userLng,
            userState
        })
    });
    if (!res.ok) throw new Error("Search failed");
    return res.json();
}
async function fetchAllCars() {
    const res = await fetch("/api/cars");
    if (!res.ok) throw new Error("Failed to fetch cars");
    const data = await res.json();
    return data.cars;
}
async function fetchCarById(id) {
    const res = await fetch(`/api/cars/${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.car;
}
function carResponseToCar(cr) {
    return {
        Name: cr.brand,
        Model: cr.model,
        Image: cr.image,
        Price: cr.price,
        Location: cr.location,
        id: cr.id,
        fullName: cr.fullName,
        year: cr.year,
        mileage: cr.mileage,
        transmission: cr.transmission,
        fuel: cr.fuel,
        category: cr.category,
        tags: cr.tags
    };
}
}),
"[project]/src/components/features/car-search/CarSearchFeature.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarSearchFeature",
    ()=>CarSearchFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$HeroSearchIA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/HeroSearchIA.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$BrandsRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/BrandsRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$CarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/CarGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cars.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CarSearchFeature() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const cars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCatalogCars"])();
    const handleSearch = (query, userState)=>{
        const params = new URLSearchParams({
            q: query
        });
        if (userState) params.set("state", userState);
        router.push(`/resultados?${params.toString()}`);
    };
    const handleSeeAll = ()=>{
        router.push("/resultados");
    };
    const handleBrandSelect = (brand)=>{
        router.push(`/resultados?brand=${encodeURIComponent(brand)}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex items-center justify-center bg-background px-12 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$HeroSearchIA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroSearchIA"], {
                    onSearch: handleSearch
                }, void 0, false, {
                    fileName: "[project]/src/components/features/car-search/CarSearchFeature.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/car-search/CarSearchFeature.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-background px-12 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$BrandsRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandsRow"], {
                    onSelect: handleBrandSelect
                }, void 0, false, {
                    fileName: "[project]/src/components/features/car-search/CarSearchFeature.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/car-search/CarSearchFeature.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-background px-12 py-10 pb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$CarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarGrid"], {
                    cars: cars,
                    onSeeAll: handleSeeAll
                }, void 0, false, {
                    fileName: "[project]/src/components/features/car-search/CarSearchFeature.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/car-search/CarSearchFeature.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/car-search/CarSearchFeature.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_a0e442ba._.js.map