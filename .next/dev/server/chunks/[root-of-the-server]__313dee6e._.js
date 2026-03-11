module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/backend/modules/prompt-interpreter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpretPrompt",
    ()=>interpretPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
const SYSTEM_PROMPT = `Você é um sistema que extrai intenção de busca de carros a partir de frases em português brasileiro.

Retorne SOMENTE um JSON válido (sem markdown, sem explicação) com os seguintes campos. Preencha apenas os campos que conseguir identificar na frase:

- "model": string — nome do modelo do carro (ex: "Corolla", "Civic", "HB20")
- "brand": string — marca (ex: "Toyota", "Honda", "Hyundai")  
- "maxPrice": number — preço máximo mencionado (ex: 80000)
- "minPrice": number — preço mínimo mencionado
- "location": string — cidade ou região mencionada (ex: "São Paulo")
- "nearMe": boolean — true se o usuário mencionou "perto de mim", "próximo", "na minha região" ou similar
- "categories": string[] — tipos de carro: "sedan", "suv", "hatch", "compacto"
- "traits": string[] — características subjetivas: "confortável", "econômico", "familiar", "esportivo", "aventureiro", "barato", "premium", "tecnológico", "potente", "seguro", etc.

Regras:
- Se o usuário mencionar "até X mil" ou "até X", interprete como maxPrice (ex: "até 80 mil" = 80000, "até 100k" = 100000)
- Se o usuário mencionar um modelo sem marca, tente inferir a marca (ex: "Corolla" → brand: "Toyota")
- Mapeie sinônimos: "SUV" → categories: ["suv"], "carro grande" → traits: ["espaçoso"], "carro bom pra família" → traits: ["familiar", "espaçoso"]
- "barato", "mais barato", "bom preço" → traits: ["econômico", "acessível"]
- "elétrico" → categories ou traits conforme contexto`;
async function interpretPrompt(query) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0,
        response_format: {
            type: "json_object"
        },
        messages: [
            {
                role: "system",
                content: SYSTEM_PROMPT
            },
            {
                role: "user",
                content: query
            }
        ]
    });
    const content = response.choices[0]?.message?.content;
    if (!content) {
        return {
            rawQuery: query
        };
    }
    const parsed = JSON.parse(content);
    return {
        ...parsed,
        rawQuery: query
    };
}
}),
"[project]/src/backend/modules/embedding.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateEmbedding",
    ()=>generateEmbedding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function generateEmbedding(text) {
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text
    });
    return response.data[0].embedding;
}
}),
"[project]/src/backend/db/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://tlrxmdygbztokqveazka.supabase.co");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceKey);
}),
"[project]/src/backend/db/queries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCarsFromDB",
    ()=>getAllCarsFromDB,
    "getCarByIdFromDB",
    ()=>getCarByIdFromDB,
    "insertCar",
    ()=>insertCar,
    "matchCarsByVector",
    ()=>matchCarsByVector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/db/supabase.ts [app-route] (ecmascript)");
;
async function insertCar(car, embedding) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("cars").upsert({
        id: car.id,
        brand: car.brand,
        model: car.model,
        full_name: car.fullName,
        image: car.image,
        price: car.price,
        location: car.location,
        lat: car.lat,
        lng: car.lng,
        year: car.year,
        mileage: car.mileage,
        transmission: car.transmission,
        fuel: car.fuel,
        category: car.category,
        tags: car.tags,
        content: car.content,
        embedding
    });
    if (error) throw new Error(`Failed to insert car ${car.id}: ${error.message}`);
}
async function getAllCarsFromDB() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("cars").select("id, brand, model, full_name, image, price, location, lat, lng, year, mileage, transmission, fuel, category, tags, content").order("price", {
        ascending: true
    });
    if (error) throw new Error(`Failed to fetch cars: ${error.message}`);
    return (data ?? []).map(mapRowToEnrichedCar);
}
async function getCarByIdFromDB(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("cars").select("id, brand, model, full_name, image, price, location, lat, lng, year, mileage, transmission, fuel, category, tags, content").eq("id", id).single();
    if (error) return null;
    return mapRowToEnrichedCar(data);
}
async function matchCarsByVector(queryEmbedding, matchCount = 10) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc("match_cars", {
        query_embedding: queryEmbedding,
        match_count: matchCount
    });
    if (error) throw new Error(`Vector search failed: ${error.message}`);
    return (data ?? []).map((row)=>({
            car: mapRowToEnrichedCar(row),
            similarity: row.similarity
        }));
}
function mapRowToEnrichedCar(row) {
    return {
        id: row.id,
        brand: row.brand,
        model: row.model,
        fullName: row.full_name ?? row.fullName,
        image: row.image,
        price: row.price,
        location: row.location,
        lat: row.lat,
        lng: row.lng,
        year: row.year,
        mileage: row.mileage,
        transmission: row.transmission,
        fuel: row.fuel,
        category: row.category,
        tags: row.tags,
        content: row.content
    };
}
}),
"[project]/src/backend/modules/vector-search.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchByVector",
    ()=>searchByVector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/embedding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/db/queries.ts [app-route] (ecmascript)");
;
;
async function searchByVector(query, matchCount = 10) {
    const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbedding"])(query);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchCarsByVector"])(embedding, matchCount);
}
}),
"[project]/src/backend/modules/deterministic-filters.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyDeterministicFilters",
    ()=>applyDeterministicFilters
]);
function applyDeterministicFilters(intent, cars) {
    const flags = {
        priceExceeded: false,
        exactModelFound: false,
        requestedModel: intent.model,
        requestedMaxPrice: intent.maxPrice
    };
    let modelMatch;
    if (intent.model) {
        const modelLower = intent.model.toLowerCase();
        modelMatch = cars.find((c)=>c.model.toLowerCase() === modelLower);
        if (!modelMatch && intent.brand) {
            const brandLower = intent.brand.toLowerCase();
            modelMatch = cars.find((c)=>c.brand.toLowerCase() === brandLower && c.model.toLowerCase() === modelLower);
        }
        if (modelMatch) {
            flags.exactModelFound = true;
            if (intent.maxPrice && modelMatch.price > intent.maxPrice) {
                flags.priceExceeded = true;
            }
        }
    }
    const exactMatches = cars.filter((car)=>{
        if (intent.model) {
            const modelLower = intent.model.toLowerCase();
            if (car.model.toLowerCase() !== modelLower) return false;
        }
        if (intent.brand) {
            const brandLower = intent.brand.toLowerCase();
            if (car.brand.toLowerCase() !== brandLower) return false;
        }
        if (intent.maxPrice && car.price > intent.maxPrice) return false;
        if (intent.minPrice && car.price < intent.minPrice) return false;
        if (intent.location) {
            const locLower = intent.location.toLowerCase();
            if (!car.location.toLowerCase().includes(locLower)) return false;
        }
        if (intent.categories && intent.categories.length > 0) {
            if (!intent.categories.includes(car.category)) return false;
        }
        return true;
    });
    const exactIds = new Set(exactMatches.map((c)=>c.id));
    const partialMatches = cars.filter((car)=>{
        if (exactIds.has(car.id)) return false;
        let matchScore = 0;
        if (intent.model && car.model.toLowerCase() === intent.model.toLowerCase()) {
            matchScore++;
        }
        if (intent.brand && car.brand.toLowerCase() === intent.brand.toLowerCase()) {
            matchScore++;
        }
        if (intent.maxPrice && car.price <= intent.maxPrice) {
            matchScore++;
        }
        if (intent.categories && intent.categories.includes(car.category)) {
            matchScore++;
        }
        if (intent.traits && intent.traits.length > 0) {
            const hasTraitMatch = intent.traits.some((t)=>car.tags.some((tag)=>tag.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(tag.toLowerCase())));
            if (hasTraitMatch) matchScore++;
        }
        return matchScore > 0;
    });
    return {
        exactMatches,
        partialMatches,
        flags
    };
}
}),
"[project]/src/backend/config/weights.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DISTANCE_THRESHOLDS",
    ()=>DISTANCE_THRESHOLDS,
    "POPUP_THRESHOLDS",
    ()=>POPUP_THRESHOLDS,
    "SCORE_WEIGHTS",
    ()=>SCORE_WEIGHTS
]);
const SCORE_WEIGHTS = {
    semantic: 0.30,
    model: 0.25,
    price: 0.20,
    distance: 0.15,
    category: 0.10
};
const DISTANCE_THRESHOLDS = {
    nearKm: 50,
    maxKm: 500
};
const POPUP_THRESHOLDS = {
    distanceWarningKm: 100,
    alternativeScoreRatio: 0.5
};
}),
"[project]/src/backend/modules/distance.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "haversineDistance",
    ()=>haversineDistance
]);
const EARTH_RADIUS_KM = 6371;
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function haversineDistance(lat1, lng1, lat2, lng2) {
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c;
}
}),
"[project]/src/backend/data/cars-enriched.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"byd-dolphin","brand":"BYD","model":"Dolphin","fullName":"BYD Dolphin","image":"exemplo.png","price":99990,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2024,"mileage":0,"transmission":"Automático","fuel":"Elétrico","category":"hatch","tags":["elétrico","econômico","tecnológico","sustentável","cidade","moderno","silencioso","baixa manutenção","compacto"],"content":"BYD Dolphin 2024 hatch elétrico automático. Carro 100% elétrico, ideal para quem busca economia e sustentabilidade. Zero emissões, manutenção reduzida e tecnologia de ponta. Excelente para uso urbano na cidade com autonomia suficiente para o dia a dia. Design moderno e interior espaçoso para um hatch. Disponível em São Paulo."},{"id":"toyota-corolla","brand":"Toyota","model":"Corolla","fullName":"Toyota Corolla","image":"exemplo.png","price":112000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2019,"mileage":45000,"transmission":"Automático","fuel":"Flex","category":"sedan","tags":["confortável","espaçoso","familiar","econômico","cidade","viagem","revenda alta","confiável","seguro"],"content":"Toyota Corolla 2019 sedan automático flex. Carro confortável e espaçoso, ideal para família. Excelente custo-benefício e alta revenda. Bom para uso na cidade e viagens longas. Consumo eficiente, manutenção acessível e alta confiabilidade. Um dos sedans mais vendidos e confiáveis do Brasil. Disponível em São Paulo."},{"id":"vw-tcross","brand":"Volkswagen","model":"T-Cross","fullName":"Volkswagen T-Cross","image":"exemplo.png","price":118500,"location":"Campinas","lat":-22.9099,"lng":-47.0626,"year":2022,"mileage":28000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","espaçoso","familiar","aventura","cidade","alto","versátil","seguro","moderno"],"content":"Volkswagen T-Cross 2022 SUV compacto automático flex. SUV versátil ideal para famílias que buscam espaço e posição de dirigir elevada. Bom desempenho tanto na cidade quanto em estradas. Interior amplo com porta-malas generoso. Design moderno e boa lista de equipamentos de segurança. Disponível em Campinas."},{"id":"honda-civic","brand":"Honda","model":"Civic","fullName":"Honda Civic","image":"exemplo.png","price":105000,"location":"Rio de Janeiro","lat":-22.9068,"lng":-43.1729,"year":2020,"mileage":38000,"transmission":"Automático","fuel":"Flex","category":"sedan","tags":["esportivo","confortável","potente","tecnológico","cidade","viagem","premium","design","seguro"],"content":"Honda Civic 2020 sedan automático flex. Sedan com pegada esportiva e acabamento premium. Motor potente com excelente dirigibilidade. Ideal para quem busca conforto com desempenho acima da média. Tecnologia embarcada de ponta, interior sofisticado. Ótimo para viagens longas e uso diário na cidade. Disponível no Rio de Janeiro."},{"id":"chevrolet-onix","brand":"Chevrolet","model":"Onix","fullName":"Chevrolet Onix","image":"exemplo.png","price":85000,"location":"Belo Horizonte","lat":-19.9167,"lng":-43.9345,"year":2021,"mileage":32000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["econômico","compacto","cidade","popular","acessível","baixo consumo","primeiro carro","prático","ágil"],"content":"Chevrolet Onix 2021 hatch compacto automático flex. O carro mais vendido do Brasil, conhecido pelo excelente custo-benefício. Consumo muito baixo de combustível, ideal para uso diário na cidade. Perfeito como primeiro carro ou para quem busca economia. Manutenção barata e ampla rede de concessionárias. Disponível em Belo Horizonte."},{"id":"hyundai-hb20","brand":"Hyundai","model":"HB20","fullName":"Hyundai HB20","image":"exemplo.png","price":79000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2021,"mileage":35000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["econômico","compacto","cidade","acessível","design bonito","moderno","primeiro carro","jovem","prático"],"content":"Hyundai HB20 2021 hatch compacto automático flex. Compacto com design moderno e bonito, muito popular entre jovens e como primeiro carro. Excelente economia de combustível e manutenção acessível. Interior bem acabado para a categoria. Ótimo para rodar na cidade com agilidade. Disponível em São Paulo."},{"id":"renault-kwid","brand":"Renault","model":"Kwid","fullName":"Renault Kwid","image":"exemplo.png","price":68990,"location":"Curitiba","lat":-25.4284,"lng":-49.2733,"year":2022,"mileage":22000,"transmission":"Manual","fuel":"Flex","category":"compacto","tags":["barato","econômico","entrada","compacto","cidade","primeiro carro","acessível","leve","simples"],"content":"Renault Kwid 2022 compacto manual flex. O carro mais acessível da lista, perfeito para quem busca o melhor preço de entrada. Muito econômico no combustível, leve e fácil de manobrar. Ideal para uso exclusivamente urbano. Visual aventureiro inspirado em SUV. Ótima opção para primeiro carro ou orçamento limitado. Disponível em Curitiba."},{"id":"fiat-pulse","brand":"Fiat","model":"Pulse","fullName":"Fiat Pulse","image":"exemplo.png","price":96000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2023,"mileage":15000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","compacto","moderno","turbo","potente","cidade","jovem","tecnológico","design"],"content":"Fiat Pulse 2023 SUV compacto automático flex turbo. SUV compacto com motor turbo que entrega potência e agilidade. Design moderno e atraente, com interior tecnológico e multimídia de última geração. Ideal para jovens que querem um SUV com pegada esportiva. Boa altura do solo e versatilidade urbana. Disponível em São Paulo."},{"id":"jeep-renegade","brand":"Jeep","model":"Renegade","fullName":"Jeep Renegade","image":"exemplo.png","price":122000,"location":"Porto Alegre","lat":-30.0346,"lng":-51.2177,"year":2021,"mileage":40000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","aventura","off-road","robusto","espaçoso","familiar","viagem","campo","seguro","alto"],"content":"Jeep Renegade 2021 SUV automático flex. SUV robusto e aventureiro, ideal para quem gosta de pegar estrada e aventura. Capacidade off-road real com boa altura do solo. Espaçoso para família e bagagens em viagens. Marca Jeep traz confiança em terrenos difíceis. Ótimo para quem mora em regiões com estradas ruins ou busca versatilidade total. Disponível em Porto Alegre."},{"id":"peugeot-208","brand":"Peugeot","model":"208","fullName":"Peugeot 208","image":"exemplo.png","price":87500,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2022,"mileage":25000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["design","europeu","moderno","tecnológico","cidade","premium","compacto","estiloso","confortável"],"content":"Peugeot 208 2022 hatch automático flex. Hatch com design europeu sofisticado e interior inovador com painel digital i-Cockpit. Destaque em tecnologia e acabamento premium para a categoria. Motor eficiente e ótima dirigibilidade urbana. Ideal para quem valoriza estilo e refinamento em um carro compacto. Disponível em São Paulo."}]);}),
"[project]/src/backend/modules/scoring.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateHybridScores",
    ()=>calculateHybridScores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/config/weights.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$distance$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/distance.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/backend/data/cars-enriched.json (json)");
;
;
;
const carsIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__["default"];
function getOriginalIndex(carId) {
    return carsIndex.findIndex((c)=>c.id === carId);
}
function toCarResponse(car) {
    return {
        id: car.id,
        index: getOriginalIndex(car.id),
        brand: car.brand,
        model: car.model,
        fullName: car.fullName,
        image: car.image,
        price: car.price,
        location: car.location,
        year: car.year,
        mileage: car.mileage,
        transmission: car.transmission,
        fuel: car.fuel,
        category: car.category,
        tags: car.tags
    };
}
function calcModelScore(car, intent) {
    if (!intent.model) return 0;
    if (car.model.toLowerCase() === intent.model.toLowerCase()) return 1.0;
    if (intent.brand && car.brand.toLowerCase() === intent.brand.toLowerCase()) return 0.5;
    return 0;
}
function calcPriceScore(car, intent) {
    if (!intent.maxPrice) return 1.0;
    if (car.price <= intent.maxPrice) return 1.0;
    const overshoot = (car.price - intent.maxPrice) / intent.maxPrice;
    return Math.max(0, 1 - overshoot);
}
function calcDistanceScore(car, userLat, userLng, nearMe) {
    if (!nearMe || userLat == null || userLng == null) return 1.0;
    const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$distance$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["haversineDistance"])(userLat, userLng, car.lat, car.lng);
    if (dist <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DISTANCE_THRESHOLDS"].nearKm) return 1.0;
    if (dist >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DISTANCE_THRESHOLDS"].maxKm) return 0;
    return Math.max(0, 1 - (dist - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DISTANCE_THRESHOLDS"].nearKm) / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DISTANCE_THRESHOLDS"].maxKm - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DISTANCE_THRESHOLDS"].nearKm));
}
function calcCategoryScore(car, intent) {
    let score = 0;
    if (intent.categories && intent.categories.length > 0) {
        if (intent.categories.includes(car.category)) score = 1.0;
    }
    if (score < 1.0 && intent.traits && intent.traits.length > 0) {
        const matchCount = intent.traits.filter((t)=>car.tags.some((tag)=>tag.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(tag.toLowerCase()))).length;
        const traitScore = matchCount / intent.traits.length;
        score = Math.max(score, Math.min(1.0, traitScore));
    }
    if (!intent.categories?.length && !intent.traits?.length) return 0;
    return score;
}
function calculateHybridScores(vectorResults, intent, userLat, userLng) {
    const scored = vectorResults.map((vr)=>{
        const semanticScore = vr.similarity;
        const modelScore = calcModelScore(vr.car, intent);
        const priceScore = calcPriceScore(vr.car, intent);
        const distanceScore = calcDistanceScore(vr.car, userLat, userLng, intent.nearMe);
        const categoryScore = calcCategoryScore(vr.car, intent);
        const breakdown = {
            semantic: semanticScore,
            model: modelScore,
            price: priceScore,
            distance: distanceScore,
            category: categoryScore
        };
        const finalScore = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCORE_WEIGHTS"].semantic * semanticScore + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCORE_WEIGHTS"].model * modelScore + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCORE_WEIGHTS"].price * priceScore + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCORE_WEIGHTS"].distance * distanceScore + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCORE_WEIGHTS"].category * categoryScore;
        return {
            car: toCarResponse(vr.car),
            score: finalScore,
            breakdown
        };
    });
    scored.sort((a, b)=>b.score - a.score);
    return scored;
}
}),
"[project]/src/backend/modules/recommendation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildRecommendation",
    ()=>buildRecommendation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/config/weights.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$distance$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/distance.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/backend/data/cars-enriched.json (json)");
;
;
;
const allCars = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__["default"];
function buildRecommendation(scoredCars, intent, filterResult, userLat, userLng) {
    if (scoredCars.length === 0) {
        return {
            recommended: null,
            alternatives: [],
            popups: {
                priceExceeded: false,
                distanceWarning: false,
                noResults: true
            }
        };
    }
    const recommended = scoredCars[0];
    const alternatives = scoredCars.slice(1, 5);
    const popups = buildPopupFlags(recommended, alternatives, intent, filterResult, userLat, userLng);
    return {
        recommended,
        alternatives,
        popups
    };
}
function buildPopupFlags(recommended, alternatives, intent, filterResult, userLat, userLng) {
    const popups = {
        priceExceeded: false,
        distanceWarning: false,
        noResults: false
    };
    if (filterResult.flags.priceExceeded && intent.maxPrice) {
        const modelCar = findEnrichedCar(intent.model);
        if (modelCar) {
            popups.priceExceeded = true;
            popups.priceExceededData = {
                requestedMax: intent.maxPrice,
                actualPrice: modelCar.price,
                carName: modelCar.fullName
            };
        }
    }
    if (intent.nearMe && userLat != null && userLng != null) {
        const recCar = findEnrichedCar(recommended.car.model);
        if (recCar) {
            const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$distance$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["haversineDistance"])(userLat, userLng, recCar.lat, recCar.lng);
            if (dist > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$config$2f$weights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["POPUP_THRESHOLDS"].distanceWarningKm) {
                const closerAlt = alternatives.find((alt)=>{
                    const altCar = findEnrichedCar(alt.car.model);
                    if (!altCar) return false;
                    const altDist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$distance$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["haversineDistance"])(userLat, userLng, altCar.lat, altCar.lng);
                    return altDist < dist;
                });
                popups.distanceWarning = true;
                popups.distanceWarningData = {
                    carName: recCar.fullName,
                    distanceKm: Math.round(dist),
                    closerAlternative: closerAlt?.car.fullName
                };
            }
        }
    }
    return popups;
}
function findEnrichedCar(modelName) {
    if (!modelName) return undefined;
    return allCars.find((c)=>c.model.toLowerCase() === modelName.toLowerCase());
}
}),
"[project]/src/backend/modules/response-builder.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSearchResponse",
    ()=>buildSearchResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function buildSearchResponse(recommendation, allScoredCars, intent) {
    const explanation = recommendation.recommended ? await generateExplanation(recommendation, intent) : "Não encontrei carros que correspondam exatamente à sua busca.";
    const alternativeReasons = await generateAlternativeReasons(recommendation.alternatives, intent);
    return {
        recommendation: recommendation.recommended ? {
            car: recommendation.recommended.car,
            score: recommendation.recommended.score,
            explanation
        } : null,
        alternatives: recommendation.alternatives.map((alt, i)=>({
                car: alt.car,
                score: alt.score,
                reason: alternativeReasons[i] || "Boa alternativa com base na sua busca."
            })),
        cars: allScoredCars.map((sc)=>sc.car),
        popups: recommendation.popups,
        aiSummary: explanation,
        appliedFilters: {
            priceRange: intent.maxPrice ? [
                intent.minPrice ?? 0,
                intent.maxPrice
            ] : undefined,
            categories: intent.categories,
            location: intent.location,
            brand: intent.brand,
            model: intent.model
        },
        meta: {
            totalResults: allScoredCars.length,
            queryInterpreted: intent
        }
    };
}
async function generateExplanation(rec, intent) {
    const recommended = rec.recommended;
    const altList = rec.alternatives.slice(0, 3).map((a)=>`${a.car.fullName} (R$ ${a.car.price.toLocaleString("pt-BR")})`).join(", ");
    const priceNote = rec.popups.priceExceeded ? `O usuário queria gastar no máximo R$ ${intent.maxPrice?.toLocaleString("pt-BR")}, mas o carro recomendado custa R$ ${recommended.car.price.toLocaleString("pt-BR")}.` : "";
    const distanceNote = rec.popups.distanceWarning ? `O carro recomendado está a ${rec.popups.distanceWarningData?.distanceKm}km do usuário.` : "";
    const prompt = `Gere uma explicação curta (2-3 frases) em português brasileiro sobre por que este carro foi recomendado.

Carro recomendado: ${recommended.car.fullName} - R$ ${recommended.car.price.toLocaleString("pt-BR")} - ${recommended.car.location}
Busca do usuário: "${intent.rawQuery}"
${priceNote}
${distanceNote}
Alternativas: ${altList || "nenhuma"}

Seja direto, útil e amigável. Se o preço excede o orçamento, mencione isso e sugira alternativas. Não use markdown.`;
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 200,
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });
    return response.choices[0]?.message?.content?.trim() ?? "Recomendação baseada na sua busca.";
}
async function generateAlternativeReasons(alternatives, intent) {
    if (alternatives.length === 0) return [];
    const altDescriptions = alternatives.map((a, i)=>`${i + 1}. ${a.car.fullName} - R$ ${a.car.price.toLocaleString("pt-BR")} - ${a.car.location} - ${a.car.category}`).join("\n");
    const prompt = `Para cada carro alternativo abaixo, gere UMA frase curta em português explicando por que é uma boa alternativa para a busca "${intent.rawQuery}".

${altDescriptions}

Retorne apenas as frases, uma por linha, na mesma ordem. Sem numeração, sem markdown.`;
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 300,
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });
    const content = response.choices[0]?.message?.content?.trim() ?? "";
    const lines = content.split("\n").map((l)=>l.trim()).filter(Boolean);
    return alternatives.map((_, i)=>lines[i] || "Boa alternativa com base na sua busca.");
}
}),
"[project]/src/app/api/search/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$prompt$2d$interpreter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/prompt-interpreter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$vector$2d$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/vector-search.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$deterministic$2d$filters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/deterministic-filters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$scoring$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/scoring.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$recommendation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/recommendation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$response$2d$builder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/response-builder.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { query, userLat, userLng } = body;
        if (!query || typeof query !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Query is required"
            }, {
                status: 400
            });
        }
        const [intent, vectorResults] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$prompt$2d$interpreter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interpretPrompt"])(query),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$vector$2d$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchByVector"])(query, 10)
        ]);
        const allEnrichedCars = vectorResults.map((vr)=>vr.car);
        const filterResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$deterministic$2d$filters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyDeterministicFilters"])(intent, allEnrichedCars);
        const scoredCars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$scoring$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateHybridScores"])(vectorResults, intent, userLat, userLng);
        const recommendation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$recommendation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildRecommendation"])(scoredCars, intent, filterResult, userLat, userLng);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$response$2d$builder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSearchResponse"])(recommendation, scoredCars, intent);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response);
    } catch (error) {
        console.error("Search error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__313dee6e._.js.map