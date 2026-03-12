# Sumário Cargen

- [1. Documentação Técnica](#1-documentação-técnica)
  - [1.1 Cenários Identificados](#11-cenários-identificados)
  - [1.2 Fluxo Construído](#12-fluxo-construído)
  - [1.3 Estrutura de Pastas](#13-estrutura-de-pastas)
  - [1.4 Ferramentas e Stack](#14-ferramentas-e-stack)
- [2. User Experience](#2-user-experience)
- [3. Plano de Negócios](#3-plano-de-negócios)

# Acesso:

Acesse a plataforma clicando [aqui.](https://cargen.vercel.app/como-funciona)

# 1. Documentação Técnica

Toda a forma como o site funciona eu idealizei, eu montei a arquitetura, os fluxos separados de IA e a decisão de escolher essa abordagem usando embeddings e um pipe mais complexo de avaliação. 

Basicamente resumindo os pontos que me levaram a chegar nesse fluxo que acredito que ficou bem estruturado e escalável.

## 1.1 **Cenários Identificados**

Pontos que tentei atacar com a arquitetura da forma como ela está:

* Como fazer a avaliação de critérios subjetivos do prompt do usuário e devolver um resultado puxado por campos determinísticos;
* Como fazer a IA saber o que está no estoque sem simplesmente jogar o json no prompt;
* Como separar o que deve ser decidido por IA do que deve ser decidido por regras fixas do sistema;
* Como transformar a frase do usuário em um JSON estruturado, para que o backend consiga aplicar filtros sem depender de texto solto;
* Como fazer fallback inteligente, recomendando o carro mais próximo da intenção original em vez de simplesmente retornar vazio;
* Como fazer a IA conhecer semanticamente o estoque sem enviar todo o catálogo em cada prompt, usando embeddings e busca vetorial;
* Como tratar licalidade sem depender de IA, usando regras determinísticas separadas e um mapeamento simples de cidade para estado;
* Como estruturar a resposta da API para que ela sirva ao mesmo tempo para filtros do site, recomendação inteligente e pop-ups;

## 1.2 **Fluxo Construído**

<div align="center">
<sub>Fluxo em Alto Nível</sub><br>
<img src="./img/arq.png" width="100%"><br>
</div>

**Explicação:**

Quando alguém escreve algo como "Queria comprar um BYD Dolphin por 80 mil", o sistema primeiro tenta transformar essa frase em algo mais estruturado que o restante do pipeline consiga entender melhor. Em vez de trabalhar diretamente com o texto livre, a ideia é identificar dentro da frase elementos como modelo, marca, orçamento aproximado e localização.

Essa etapa é feita pelo módulo **prompt-interpreter**. Ele recebe a frase do usuário e envia esse texto para a OpenAI API, que interpreta a intenção por trás do pedido. A partir disso, o sistema gera um JSON estruturado com campos fixos que representam essa intenção de forma organizada.

Esse passo é feita porque assim, o restante do sistema não precisa ficar interpretando linguagem natural o tempo todo. Depois que a frase vira esse objeto estruturado, o backend consegue aplicar filtros, buscar carros parecidos e organizar as recomendações de forma mais previsível.

Mas essa interpretação acontece considerando o contexto do catálogo que foi previamente indexado no Supabase utilizando **embeddings armazenados no Postgres com pgvector**. Esses embeddings representam semanticamente as descrições dos carros e ajudam o sistema a entender melhor o que o usuário quis dizer, mesmo quando a frase não é muito precisa.

No final dessa etapa, o sistema já tem uma representação estruturada da intenção do usuário. A partir daí entram o pipeline determinístico, a busca vetorial e o motor de recomendação que aparecem no restante do fluxo mostrado no diagrama.

**Possíveis Críticas:** 
- A arquitetura atual com certeza não era a forma mais simples de resolver a questão da busca de intenção e indicação de veículo correto, seria muito mais fácil passar o .json (Já que ele é pequeno) + o prompt/pergunta do usuário e devolver uma resposta estruturada chamando o card do carro por algum identificador, mas acredito que isso não apresentaria uma boa escalabilidade e funcionaria apenas para esse projeto de case, por isso escolhi fazer essa arquitetura, para colocar as ferramentas que realmente fariam sentido.
- Base de dados: O cars.json ainda é a Base de dados **principal**, o enriched foi usado apenas para gerar as embeddings e para alguns pequenos detalhes na página de visualização do carro.

**Pontos Atacados**
- Prompts subjetivos não vão quebrar o sistema, algo bem subjetivo ainda terá uma resposta satisfatória por conta dos embeddings a partir do .json enriquecido.
- Escala: Não ser um simples sistema que puxa o .json e lê ele inteiro para responder algo, torna o sistema muito mais escalável.
-

## 1.3 Estrutura de Pastas

```bash
.
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  ├─ cars
│  │  │  └─ search
│  │  ├─ resultados
│  │  ├─ detalhe
│  │  ├─ simulacao
│  │  └─ como-funciona
│  ├─ components
│  │  ├─ blocks
│  │  ├─ features
│  │  └─ ui
│  ├─ backend
│  │  ├─ config
│  │  ├─ data
│  │  ├─ db
│  │  └─ modules
│  ├─ lib
│  └─ config
├─ public
│  └─ img
│     ├─ logo
│     └─ ...
├─ img
│  └─ arq.png
├─ README.md
└─ ...
```

## 1.4 Ferramentas e Stack

- **Frontend**: Next.js 15, React, TypeScript e Tailwind CSS.
- **Design / UI**: Opus 4.6 e Pencil para criação dos componentes e layout das páginas.
- **Backend**: Rotas `app/api` do Next.js, módulos próprios em `src/backend` para orquestrar fluxo de IA, filtros determinísticos, scoring e response builder.
- **Banco de Dados**: Supabase (Postgres) com extensão **pgvector** para armazenar embeddings e fazer busca vetorial.
- **Infra de IA**: OpenAI API (prompt interpreter, embeddings, recomendação híbrida).
- **Dados**: Catálogo base em `cars.json` e versão enriquecida em `cars-enriched.json` para geração de embeddings e melhoria de contexto sem inflar o prompt.

## 2. User Experience

## 3. Plano de Negócios