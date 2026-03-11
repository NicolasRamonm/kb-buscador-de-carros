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
"[project]/src/backend/data/cars-enriched.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"byd-dolphin","brand":"BYD","model":"Dolphin","fullName":"BYD Dolphin","image":"exemplo.png","price":99990,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2024,"mileage":0,"transmission":"Automático","fuel":"Elétrico","category":"hatch","tags":["elétrico","econômico","tecnológico","sustentável","cidade","moderno","silencioso","baixa manutenção","compacto"],"content":"BYD Dolphin 2024 hatch elétrico automático. Carro 100% elétrico, ideal para quem busca economia e sustentabilidade. Zero emissões, manutenção reduzida e tecnologia de ponta. Excelente para uso urbano na cidade com autonomia suficiente para o dia a dia. Design moderno e interior espaçoso para um hatch. Disponível em São Paulo."},{"id":"toyota-corolla","brand":"Toyota","model":"Corolla","fullName":"Toyota Corolla","image":"exemplo.png","price":112000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2019,"mileage":45000,"transmission":"Automático","fuel":"Flex","category":"sedan","tags":["confortável","espaçoso","familiar","econômico","cidade","viagem","revenda alta","confiável","seguro"],"content":"Toyota Corolla 2019 sedan automático flex. Carro confortável e espaçoso, ideal para família. Excelente custo-benefício e alta revenda. Bom para uso na cidade e viagens longas. Consumo eficiente, manutenção acessível e alta confiabilidade. Um dos sedans mais vendidos e confiáveis do Brasil. Disponível em São Paulo."},{"id":"vw-tcross","brand":"Volkswagen","model":"T-Cross","fullName":"Volkswagen T-Cross","image":"exemplo.png","price":118500,"location":"Campinas","lat":-22.9099,"lng":-47.0626,"year":2022,"mileage":28000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","espaçoso","familiar","aventura","cidade","alto","versátil","seguro","moderno"],"content":"Volkswagen T-Cross 2022 SUV compacto automático flex. SUV versátil ideal para famílias que buscam espaço e posição de dirigir elevada. Bom desempenho tanto na cidade quanto em estradas. Interior amplo com porta-malas generoso. Design moderno e boa lista de equipamentos de segurança. Disponível em Campinas."},{"id":"honda-civic","brand":"Honda","model":"Civic","fullName":"Honda Civic","image":"exemplo.png","price":105000,"location":"Rio de Janeiro","lat":-22.9068,"lng":-43.1729,"year":2020,"mileage":38000,"transmission":"Automático","fuel":"Flex","category":"sedan","tags":["esportivo","confortável","potente","tecnológico","cidade","viagem","premium","design","seguro"],"content":"Honda Civic 2020 sedan automático flex. Sedan com pegada esportiva e acabamento premium. Motor potente com excelente dirigibilidade. Ideal para quem busca conforto com desempenho acima da média. Tecnologia embarcada de ponta, interior sofisticado. Ótimo para viagens longas e uso diário na cidade. Disponível no Rio de Janeiro."},{"id":"chevrolet-onix","brand":"Chevrolet","model":"Onix","fullName":"Chevrolet Onix","image":"exemplo.png","price":85000,"location":"Belo Horizonte","lat":-19.9167,"lng":-43.9345,"year":2021,"mileage":32000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["econômico","compacto","cidade","popular","acessível","baixo consumo","primeiro carro","prático","ágil"],"content":"Chevrolet Onix 2021 hatch compacto automático flex. O carro mais vendido do Brasil, conhecido pelo excelente custo-benefício. Consumo muito baixo de combustível, ideal para uso diário na cidade. Perfeito como primeiro carro ou para quem busca economia. Manutenção barata e ampla rede de concessionárias. Disponível em Belo Horizonte."},{"id":"hyundai-hb20","brand":"Hyundai","model":"HB20","fullName":"Hyundai HB20","image":"exemplo.png","price":79000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2021,"mileage":35000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["econômico","compacto","cidade","acessível","design bonito","moderno","primeiro carro","jovem","prático"],"content":"Hyundai HB20 2021 hatch compacto automático flex. Compacto com design moderno e bonito, muito popular entre jovens e como primeiro carro. Excelente economia de combustível e manutenção acessível. Interior bem acabado para a categoria. Ótimo para rodar na cidade com agilidade. Disponível em São Paulo."},{"id":"renault-kwid","brand":"Renault","model":"Kwid","fullName":"Renault Kwid","image":"exemplo.png","price":68990,"location":"Curitiba","lat":-25.4284,"lng":-49.2733,"year":2022,"mileage":22000,"transmission":"Manual","fuel":"Flex","category":"compacto","tags":["barato","econômico","entrada","compacto","cidade","primeiro carro","acessível","leve","simples"],"content":"Renault Kwid 2022 compacto manual flex. O carro mais acessível da lista, perfeito para quem busca o melhor preço de entrada. Muito econômico no combustível, leve e fácil de manobrar. Ideal para uso exclusivamente urbano. Visual aventureiro inspirado em SUV. Ótima opção para primeiro carro ou orçamento limitado. Disponível em Curitiba."},{"id":"fiat-pulse","brand":"Fiat","model":"Pulse","fullName":"Fiat Pulse","image":"exemplo.png","price":96000,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2023,"mileage":15000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","compacto","moderno","turbo","potente","cidade","jovem","tecnológico","design"],"content":"Fiat Pulse 2023 SUV compacto automático flex turbo. SUV compacto com motor turbo que entrega potência e agilidade. Design moderno e atraente, com interior tecnológico e multimídia de última geração. Ideal para jovens que querem um SUV com pegada esportiva. Boa altura do solo e versatilidade urbana. Disponível em São Paulo."},{"id":"jeep-renegade","brand":"Jeep","model":"Renegade","fullName":"Jeep Renegade","image":"exemplo.png","price":122000,"location":"Porto Alegre","lat":-30.0346,"lng":-51.2177,"year":2021,"mileage":40000,"transmission":"Automático","fuel":"Flex","category":"suv","tags":["SUV","aventura","off-road","robusto","espaçoso","familiar","viagem","campo","seguro","alto"],"content":"Jeep Renegade 2021 SUV automático flex. SUV robusto e aventureiro, ideal para quem gosta de pegar estrada e aventura. Capacidade off-road real com boa altura do solo. Espaçoso para família e bagagens em viagens. Marca Jeep traz confiança em terrenos difíceis. Ótimo para quem mora em regiões com estradas ruins ou busca versatilidade total. Disponível em Porto Alegre."},{"id":"peugeot-208","brand":"Peugeot","model":"208","fullName":"Peugeot 208","image":"exemplo.png","price":87500,"location":"São Paulo","lat":-23.5505,"lng":-46.6333,"year":2022,"mileage":25000,"transmission":"Automático","fuel":"Flex","category":"hatch","tags":["design","europeu","moderno","tecnológico","cidade","premium","compacto","estiloso","confortável"],"content":"Peugeot 208 2022 hatch automático flex. Hatch com design europeu sofisticado e interior inovador com painel digital i-Cockpit. Destaque em tecnologia e acabamento premium para a categoria. Motor eficiente e ótima dirigibilidade urbana. Ideal para quem valoriza estilo e refinamento em um carro compacto. Disponível em São Paulo."}]);}),
"[project]/src/app/api/seed/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/modules/embedding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/db/queries.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/backend/data/cars-enriched.json (json)");
;
;
;
;
async function POST(request) {
    const secret = request.headers.get("x-seed-secret");
    if (secret !== process.env.SEED_SECRET) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    const cars = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$data$2f$cars$2d$enriched$2e$json__$28$json$29$__["default"];
    let indexed = 0;
    for (const car of cars){
        const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$modules$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbedding"])(car.content);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$db$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertCar"])(car, embedding);
        indexed++;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        indexed
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cfa223d3._.js.map