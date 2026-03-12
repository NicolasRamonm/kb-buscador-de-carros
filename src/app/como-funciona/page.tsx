import { Card } from "@/components/ui/card";

export default function ComoFuncionaPage() {
  return (
    <div className="flex flex-col gap-6 px-[72px] pb-10 pt-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-900">
          Como funciona a busca com IA
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl">
          Vou utilizar esta página para explicar como implementei a busca com IA e as questões que tratam os diferentes tipos de perguntas que podem ser feitas, além de como o pipeline trata situações de preço ou localização distantes.
        </p>

        <p className="text-sm text-gray-600 max-w-2xl">
          (Sei que o pipeline utilizando embeddings e fazendo diferentes chamadas à OpenAI API definitivamente não é a forma mais fácil de chegar nesse resultado para uma lista com apenas 10 carros. Simplesmente usar um RAG bem mais básico com todos os dados já serviria, mas seria pior em um cenário real que precisa de escalabilidade com muitos carros e modelos.)
        </p>

        <p className="text-sm text-gray-600 max-w-2xl">
          Eu também criei um outro JSON, uma versão enriquecida, para melhorar essa inferência de intenção com IA. Ainda uso o cars.json como base de dados principal sempre que possível; é apenas na geração de embeddings que utilizo o cars-enriched.json, além de algumas informações extras nos anúncios.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="flex flex-col gap-2 rounded-2xl p-4">
          <h2 className="text-base font-semibold text-gray-900">
            1. Interpretação da sua frase (IA)
          </h2>
          <p className="text-sm text-gray-700">
            Quando alguém escreve algo como &quot;Queria comprar um BYD Dolphin
            por 80 mil em São Paulo&quot;, o sistema tenta transformar essa
            frase em uma intenção mais organizada, com campos como modelo,
            marca, orçamento e localização. Essa etapa é feita pelo módulo{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-[11px]">
              prompt-interpreter
            </code>
            , que joga isso para a OpenAI API e lá com base nos embeddings do Postgres vector no supabase entende melhor o pedido e gera um json estruturado fixo.
          </p>
        </Card>

        <Card className="flex flex-col gap-2 rounded-2xl p-4">
          <h2 className="text-base font-semibold text-gray-900">
            2. Filtro determinístico (regras fixas)
          </h2>
          <p className="text-sm text-gray-700">
            Depois disso, entra a parte determinística do fluxo. Aqui não há
            interpretação subjetiva: o sistema aplica regras objetivas sobre o
            catálogo, como marca, modelo, faixa de preço, localização e tipo de
            carro. Essa lógica vive em{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-[11px]">
              deterministic-filters
            </code>{" "}
            e existe para garantir consistência. Em outras palavras, ela impede
            que a recomendação final desconsidere critérios concretos definidos
            pelo usuário.
          </p>
        </Card>

        <Card className="flex flex-col gap-2 rounded-2xl p-4">
          <h2 className="text-base font-semibold text-gray-900">
            3. Busca semântica no estoque (IA vetorial)
          </h2>
          <p className="text-sm text-gray-700">
            Em paralelo, a frase original também passa por uma busca semântica.
            Na prática, o texto é convertido em um <em>embedding</em> e usado
            para localizar carros parecidos com a intenção da busca, mesmo
            quando o usuário não descreve tudo com precisão. Essa etapa é feita
            por{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-[11px]">
              vector-search
            </code>
            e ajuda a ampliar a capacidade de sugestão da plataforma.
          </p>
        </Card>

        <Card className="flex flex-col gap-2 rounded-2xl p-4">
          <h2 className="text-base font-semibold text-gray-900">
            4. Pontuação híbrida (IA + regras)
          </h2>
          <p className="text-sm text-gray-700">
            Os carros encontrados não são exibidos de forma aleatória. Eles
            passam por uma pontuação híbrida que combina critérios semânticos e
            critérios objetivos, como aderência ao modelo pedido, orçamento,
            distância e categoria. Cada fator recebe um peso configurado em{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-[11px]">
              scoring
            </code>
            , o que permite ordenar os resultados de maneira mais coerente.
          </p>
        </Card>

        <Card className="flex flex-col gap-2 rounded-2xl p-4">
          <h2 className="text-base font-semibold text-gray-900">
            5. Recomendações, ofertas e avisos
          </h2>
          <p className="text-sm text-gray-700">
            A partir das pontuações, o módulo{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-[11px]">
              recommendation
            </code>{" "}
            define o carro principal, organiza alternativas e ativa avisos
            contextuais quando necessário. É nessa etapa que aparecem situações
            como carro acima do orçamento, opções mais próximas da localização
            informada ou sugestões especiais para um modelo desejado.
          </p>
        </Card>

        <Card className="flex flex-col gap-2 rounded-2xl p-4">
          <h2 className="text-base font-semibold text-gray-900">
            6. Construção da resposta final
          </h2>
          <p className="text-sm text-gray-700">
            Por fim, o módulo{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-[11px]">
              response-builder
            </code>{" "}
            reúne tudo o que foi calculado e monta a resposta que a interface
            exibe: lista ordenada de carros, filtros aplicados, mensagens de
            apoio e avisos contextuais. Esse é o conteúdo que alimenta a tela
            de resultados.
          </p>
        </Card>
      </div>

      <Card className="mt-2 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <h2 className="text-sm font-semibold text-blue-900">
          Pipe determinístico x pipe inteligente
        </h2>
        <p className="mt-1 text-sm text-blue-900">
          Em termos simples, o pipe determinístico cuida do que precisa ser
          respeitado com clareza: preço, localização, marca, modelo e outras
          regras objetivas. Já o pipe inteligente entra depois para priorizar
          melhor os candidatos, com base em contexto e similaridade. Ou seja:
          a IA ajuda a ordenar e enriquecer a experiência, mas não substitui as
          regras centrais do sistema.
        </p>
      </Card>
    </div>
  );
}

