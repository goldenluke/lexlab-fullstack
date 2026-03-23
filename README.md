# 🏛️ LexLab: Digital Twin Legislativo & IA

[![Deploy with Vercel](https://vercel.com/button)](https://lexlab-fullstack.vercel.app)
[![Powered by Groq](https://img.shields.io/badge/AI-Llama%203.1-6100FF?logo=meta)](https://groq.com)
[![Framework-Astro-6-FF7E33?logo=astro](https://img.shields.io/badge/Framework-Astro%206-FF7E33?logo=astro)](https://astro.build)

> **LexLab** é um ecossistema de inteligência legislativa e simulação jurídica de alta fidelidade. Desenvolvido como um *Digital Twin* para o suporte à decisão no estado do Tocantins e integração com o projeto **LabSUS**, o sistema utiliza modelos de linguagem de grande escala (LLM) para automatizar a análise de constitucionalidade e o impacto de políticas públicas.

---

## 🎯 Visão Geral

O LexLab transcende editores de texto convencionais. Ele é um ambiente de simulação onde cada projeto de lei é tratado como um objeto de dados dinâmico, permitindo:
* **Análise Preditiva**: Avaliação de admissibilidade via CCJ-Sim.
* **Nexo Semântico**: Mapeamento de leis correlatas e antinomias.
* **Monitoramento em Tempo Real**: Alertas de crise e impacto fiscal (LexBudget).

## 🏗️ Arquitetura Técnica (Monorepo)

O projeto utiliza uma arquitetura moderna de **Gabinete Digital**, separando a lógica de processamento pesado (Realtime/API) da interface imersiva (Web).

### 🚀 Tech Stack
* **Frontend**: [Astro 6](https://astro.build) (SSR) + [React](https://reactjs.org) (Hidratação seletiva).
* **Estilização**: Tailwind CSS com rastro de design *Dark/Slate/Indigo*.
* **Motor de IA**: Llama 3.1 70B via [Groq Cloud](https://groq.com) (LPUs para latência ultra-baixa).
* **Infraestrutura**: Vercel (Edge Functions & Serverless).
* **Comunicação**: Protocolo `fetchWithAuth` centralizado em `src/lib/auth.js`.

### 📂 Estrutura de Pastas
```text
lexlab-fullstack/
├── apps/
│   ├── web/                # Interface Astro + React (O Gabinete)
│   │   ├── src/
│   │   │   ├── components/ # 13 Módulos de Simulação (CCJ, Plenário, etc.)
│   │   │   ├── pages/      # Rotas SSR e Endpoints de API (Llama)
│   │   │   └── lib/        # Rastro de Autenticação e Utils
│   └── realtime/           # Microserviço de Sockets e Autenticação
├── package.json            # Configuração de Workspace Monorepo
└── astro.config.mjs        # Configuração de Adaptador Vercel SSR
