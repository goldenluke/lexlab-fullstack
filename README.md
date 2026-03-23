# 🏛️ LexLab: Digital Twin Legislativo & Ecossistema de IA (V6.0)

[![Deploy with Vercel](https://vercel.com/button)](https://lexlab-fullstack.vercel.app)
[![AI-Llama-3.1-6100FF](https://img.shields.io/badge/AI-Llama%203.1_70B-6100FF?logo=meta)](https://groq.com)
[![Framework-Astro-6-FF7E33](https://img.shields.io/badge/Framework-Astro%206.0-FF7E33?logo=astro)](https://astro.build)
[![Status-Experimental-emerald](https://img.shields.io/badge/Status-Experimental_LabSUS-emerald)](https://github.com/goldenluke)

O **LexLab** é uma plataforma de **Epidemiologia Legislativa** e simulação jurídica de alta fidelidade. Projetado como um *Gabinete Digital Twin*, ele espelha a complexidade do processo legislativo do Estado do Tocantins, integrando dados de saúde pública do **LabSUS** com motores de inferência de linguagem natural.

---

## 🏗️ Arquitetura de Missão Crítica

O sistema opera em um modelo de **SSR (Server-Side Rendering)** híbrido, onde o rastro de dados sensíveis é processado no servidor para garantir a segurança das chaves de IA.

### 🧩 Stack de Engenharia
* **Core**: Astro 6.0 (Agregador de ilhas de interatividade).
* **UI Engine**: React 18 com Tailind CSS (Design System "Slate-Indigo").
* **Inference**: Llama 3.1 70B (Via Groq LPU) para análise de antinomias em < 500ms.
* **Middleware**: Custom `fetchWithAuth` para rastro de sessão e integridade.
* **Deploy**: Vercel Edge Network com suporte a funções Serverless.

---

## 🛠️ Enumeração de Implementações & Lógica de Negócio

### 1. ⚖️ CCJ-Sim (Simulador de Constitucionalidade)
* **Lógica**: Recebe a minuta (`project.content`) e executa um *Chain-of-Thought* via Llama 3.1. A IA assume a persona de um Relator da CCJ, confrontando o texto com a Constituição Federal e a Lei Orgânica do Tocantins.
* **Diferencial**: Gera um rastro de "Admissibilidade" com score de 0 a 100 baseado em precedentes do STF.

### 2. 🔗 Nexo Semântico (Graph Modeling)
* **Lógica**: Utiliza o componente `NexusGraph.jsx` para mapear conexões entre diferentes projetos. Ele identifica se uma nova lei de saúde no Tocantins conflita com normas federais pré-existentes.
* **Visualização**: Grafo de nós e arestas representando a teia normativa.

### 3. 🚨 LexEmergency (Gabinete de Crise)
* **Lógica**: Módulo de resposta rápida. Integra alertas do LabSUS (ex: surtos epidemiológicos) com a criação automática de Decretos de Emergência.
* **Funcionalidade**: Botões de pânico para mobilização de recursos orçamentários instantâneos.

### 4. 💰 LexBudget (Sentinela Fiscal)
* **Lógica**: Analisa o impacto financeiro de cada vírgula da lei. Utiliza cálculos de dotação orçamentária para prever se a proposta é financeiramente sustentável a longo prazo.
* **Componente**: `FiscalSentinel.jsx`.

### 5. 🗳️ Plenário Virtual & PartySimulation
* **Lógica**: Simula o comportamento das bancadas. Atribui "personalidades" políticas aos deputados virtuais que votam e comentam a matéria baseados em suas ideologias (Conservador, Progressista, Municipalista).
* **Rastro**: Gera um histórico de votação simulada para prever a aprovação real.

### 6. 🗺️ LexGeo (Inteligência Territorial)
* **Lógica**: Mapeia o impacto geográfico da legislação. Se uma lei altera o saneamento em Palmas ou Araguaína, o LexGeo projeta o rastro visual no mapa do estado.
* **Tecnologia**: Mapas vetoriais integrados ao Dashboard.

### 7. 📑 Editor de Minutas com LegalLinter
* **Lógica**: Editor de texto *rich-text* com correção ortográfica e jurídica em tempo real. O `LegalLinter` destaca termos ambíguos que poderiam gerar brechas legais (vices de linguagem).

### 8. 📊 Analytics & Social Sentiment
* **Lógica**: Monitora o rastro da opinião pública nas redes sociais sobre o tema da lei. Utiliza análise de sentimento para prever a recepção popular da norma.

### 9. 🕰️ Timeline Histórica & Versioning
* **Lógica**: Sistema de "Git para Leis". Cada alteração cria um *commit* no rastro histórico, permitindo o *rollback* de artigos e a comparação de *diffs* entre versões.

---

## 🔐 Segurança & Autenticação (Rastro de Integridade)

O acesso ao Gabinete é protegido por uma camada de abstração em `src/lib/auth.js`:
* **Sessão**: Persistência via `localStorage` com validação de token simulada para o ambiente de Twin.
* **Comunicação**: O método `fetchWithAuth` intercepta todas as requisições para injetar o contexto do consultor logado, prevenindo vazamento de dados de minutas sigilosas.

---

## 🚀 Guia de Deploy (Vercel)

### Configuração de Root
O projeto é um Monorepo. Na Vercel, o **Root Directory** deve ser configurado como `apps/web`.

### Variáveis de Ambiente
```env
GROQ_API_KEY=gsk_...
PUBLIC_GROQ_MODEL=llama-3.1-70b-versatile
