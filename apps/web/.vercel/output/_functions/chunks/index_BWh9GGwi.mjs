import { c as createComponent } from './astro-component_659COn51.mjs';
import 'piccolore';
import { m as maybeRenderHead, l as renderComponent, r as renderTemplate } from './entrypoint_CrlI-tMu.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import { LayoutDashboard, ShieldCheck, FileCheck, Gavel, Scale, DollarSign, Map, AlertOctagon, Network, MessagesSquare, History, Printer, BarChart3, User, LogOut, Mail, Lock, ArrowRight, Plus, FileText, ChevronLeft, Minimize2, Maximize2, Save, Link, Table, Subscript, List, ListOrdered, Heading1, Heading2, Quote, Code, Bold, Italic, Underline, Strikethrough, MoreHorizontal, Sparkles, Target, Users, Zap, ArrowUpRight, ArrowDownRight, TrendingUp, ChevronDown, AlertCircle, Landmark, Shield, Activity, Briefcase, Heart, Award, GraduationCap, Share2, BrainCircuit, BookOpen, AlertTriangle, CheckCircle2, ThumbsUp, ThumbsDown, MessageCircle, Loader2, Clock, Calendar, HeartPulse, ChevronRight, Search, Globe, Send, BellRing } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

function Layout({ children, setPage, activePage, onLogout }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Console Central" },
    { id: "ccj", icon: ShieldCheck, label: "CCJ-Sim (Técnico)" },
    { id: "comissoes", icon: FileCheck, label: "Hub de Comissões" },
    { id: "congresso", icon: Gavel, label: "Plenário Virtual" },
    { id: "supremacy", icon: Scale, label: "LexSupremacy" },
    { id: "fiscal", icon: DollarSign, label: "LexBudget" },
    { id: "geo", icon: Map, label: "LexGeo (Mapas)" },
    { id: "emergency", icon: AlertOctagon, label: "LexEmergency" },
    { id: "nexus", icon: Network, label: "Nexo Semântico" },
    { id: "social", icon: MessagesSquare, label: "Social Sentiment" },
    { id: "history", icon: History, label: "Timeline Histórica" },
    { id: "press", icon: Printer, label: "LexPress (DOE)" },
    { id: "analytics", icon: BarChart3, label: "Métricas & IA" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans antialiased", children: [
    /* @__PURE__ */ jsxs(
      "aside",
      {
        onMouseEnter: () => setIsExpanded(true),
        onMouseLeave: () => setIsExpanded(false),
        className: `fixed left-0 top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center py-8 z-[100] transition-all duration-500 shadow-2xl ${isExpanded ? "w-64 px-6" : "w-20 px-2"}`,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-indigo-600 p-3 rounded-[1.25rem] shadow-2xl mb-12 cursor-pointer hover:rotate-6 hover:scale-105 transition-all duration-300 active:scale-95",
              onClick: () => setPage("dashboard"),
              children: /* @__PURE__ */ jsxs("svg", { width: "40", height: "40", viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ jsx("path", { d: "M50 25v50M25 42h50", stroke: "white", strokeWidth: "8", strokeLinecap: "round" }),
                /* @__PURE__ */ jsx("circle", { cx: "25", cy: "42", r: "7", fill: "white" }),
                /* @__PURE__ */ jsx("circle", { cx: "75", cy: "42", r: "7", fill: "white" }),
                /* @__PURE__ */ jsx("path", { d: "M25 42c0 12 10 22 25 22s25-10 25-22", stroke: "white", strokeWidth: "3", strokeDasharray: "6 6", opacity: "0.5" }),
                /* @__PURE__ */ jsx("circle", { cx: "50", cy: "68", r: "4", fill: "white", opacity: "0.8" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2 flex-1 w-full overflow-y-auto no-scrollbar pr-1", children: menuItems.map((item) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setPage(item.id),
              className: `flex items-center p-4 rounded-2xl transition-all w-full group relative ${activePage === item.id ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 font-black shadow-sm" : "text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-indigo-500"}`,
              children: [
                /* @__PURE__ */ jsx(item.icon, { size: 22, className: `min-w-[22px] ${activePage === item.id ? "scale-110" : ""}` }),
                /* @__PURE__ */ jsx("span", { className: `ml-4 text-[10px] font-black uppercase tracking-widest transition-opacity whitespace-nowrap overflow-hidden ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`, children: item.label }),
                !isExpanded && /* @__PURE__ */ jsx("div", { className: "absolute left-16 bg-slate-900 text-white text-[8px] font-black uppercase px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl border border-white/10", children: item.label })
              ]
            },
            item.id
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "w-full pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setPage("profile"), className: "flex items-center p-4 text-slate-400 hover:text-indigo-600 transition-all", children: [
              /* @__PURE__ */ jsx(User, { size: 22, className: "min-w-[22px]" }),
              /* @__PURE__ */ jsx("span", { className: `ml-4 text-[10px] font-black uppercase tracking-widest transition-opacity overflow-hidden ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`, children: "Perfil" })
            ] }),
            /* @__PURE__ */ jsxs("button", { onClick: onLogout, className: "flex items-center p-4 text-slate-300 hover:text-rose-500 transition-all cursor-pointer", children: [
              /* @__PURE__ */ jsx(LogOut, { size: 22, className: "min-w-[22px]" }),
              /* @__PURE__ */ jsx("span", { className: `ml-4 text-[10px] font-black uppercase tracking-widest transition-opacity overflow-hidden ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`, children: "Sair" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("main", { className: `flex-1 p-10 transition-all duration-500 ${isExpanded ? "ml-64" : "ml-20"}`, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children }) })
  ] });
}

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden font-sans antialiased", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-600/10 blur-[120px] rounded-full" }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-xl relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-12 rounded-[5rem] shadow-2xl space-y-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex bg-indigo-600 p-5 rounded-[2rem] shadow-lg shadow-indigo-500/20 mb-2", children: /* @__PURE__ */ jsxs("svg", { width: "48", height: "48", viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx("rect", { width: "100", height: "100", rx: "25", fill: "#4f46e5" }),
          /* @__PURE__ */ jsx("path", { d: "M50 25v50M25 42h50", stroke: "white", strokeWidth: "8", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("circle", { cx: "25", cy: "42", r: "7", fill: "white" }),
          /* @__PURE__ */ jsx("circle", { cx: "75", cy: "42", r: "7", fill: "white" }),
          /* @__PURE__ */ jsx("path", { d: "M25 42c0 12 10 22 25 22s25-10 25-22", stroke: "white", strokeWidth: "3", strokeDasharray: "6 6", opacity: "0.5" }),
          /* @__PURE__ */ jsx("circle", { cx: "50", cy: "68", r: "4", fill: "white", opacity: "0.8" })
        ] }) }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-black text-white uppercase italic tracking-tighterleading-none", children: [
          "Lex",
          /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "Lab" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]", children: "Digital Twin Legislativo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        !isLogin && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(User, { className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "NOME COMPLETO", className: "w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white text-[10px] font-black uppercase tracking-widest focus:border-indigo-500 outline-none placeholder:text-slate-600" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Mail, { className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }),
          /* @__PURE__ */ jsx("input", { type: "email", placeholder: "E-MAIL INSTITUCIONAL", className: "w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white text-[10px] font-black uppercase tracking-widest focus:border-indigo-500 outline-none placeholder:text-slate-600" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Lock, { className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }),
          /* @__PURE__ */ jsx("input", { type: "password", placeholder: "SENHA", className: "w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white text-[10px] font-black uppercase tracking-widest focus:border-indigo-500 outline-none placeholder:text-slate-600" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: onLogin, className: "w-full bg-white text-slate-950 py-6 rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white transition-all group", children: [
        isLogin ? "Acessar Gabinete" : "Criar Credencial",
        " ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-2 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsLogin(!isLogin), className: "text-[9px] font-black text-slate-500 uppercase tracking-widest hover:text-indigo-400", children: isLogin ? "Não possui acesso? Solicitar Credencial" : "Já possui conta? Fazer Login" }) })
    ] }) })
  ] });
}

function Dashboard({ projects, onOpen, onNew }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-12 animate-in fade-in duration-1000", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none", children: [
          "Console de ",
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Redação" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-2", children: "Gestão de Inteligência Legislativa" })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: onNew, className: "bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl flex items-center gap-3 active:scale-95", children: [
        /* @__PURE__ */ jsx(Plus, { size: 18 }),
        " Nova Minuta"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((p) => /* @__PURE__ */ jsxs("div", { onClick: () => onOpen(p), className: "group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3.5rem] hover:border-indigo-500 transition-all cursor-pointer hover:shadow-2xl shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-10", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl group-hover:bg-indigo-50 transition-colors", children: /* @__PURE__ */ jsx(FileText, { className: "text-slate-400 group-hover:text-indigo-600", size: 24 }) }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black text-slate-300 uppercase", children: p.date })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]", children: p.id }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-slate-800 dark:text-white uppercase leading-tight group-hover:text-indigo-600 transition-colors italic", children: p.title })
      ] })
    ] }, p.id)) })
  ] });
}

function EditorPage({ project, onBack, onSave, isFocusMode, setIsFocusMode }) {
  const [content, setContent] = useState(project?.content || "");
  const [viewMode, setViewMode] = useState("edit");
  const [showMore, setShowMore] = useState(false);
  const insertTag = (tagOpen, tagClose = "") => {
    const textarea = document.getElementById("editor-area");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selection = text.substring(start, end);
    const newText = text.substring(0, start) + tagOpen + (selection || "texto") + tagClose + text.substring(end);
    setContent(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tagOpen.length, end + tagOpen.length + (selection ? 0 : 5));
    }, 10);
  };
  const groups = {
    estilo: [
      { icon: Bold, action: () => insertTag("**", "**"), label: "Negrito" },
      { icon: Italic, action: () => insertTag("*", "*"), label: "Itálico" },
      { icon: Underline, action: () => insertTag("<u>", "</u>"), label: "Sublinhado" },
      { icon: Strikethrough, action: () => insertTag("~~", "~~"), label: "Tachado" }
    ],
    estrutura: [
      { icon: Heading1, action: () => insertTag("# "), label: "Título 1" },
      { icon: Heading2, action: () => insertTag("## "), label: "Título 2" },
      { icon: Quote, action: () => insertTag("> "), label: "Citação" },
      { icon: Code, action: () => insertTag("`", "`"), label: "Código" }
    ],
    listas: [
      { icon: List, action: () => insertTag("- "), label: "Lista" },
      { icon: ListOrdered, action: () => insertTag("1. "), label: "Lista Numérica" }
    ],
    insercao: [
      { icon: Link, action: () => insertTag("[Link](", ")"), label: "Link" },
      { icon: Table, action: () => insertTag("\n| Col1 | Col2 |\n|------|------|\n| Item | Item |\n"), label: "Tabela" },
      { icon: Subscript, action: () => insertTag("<sub>", "</sub>"), label: "Subscrito" }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: `max-w-6xl mx-auto space-y-4 animate-in fade-in duration-700 pb-20 ${isFocusMode ? "mt-4" : ""}`, children: [
    /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        !isFocusMode && /* @__PURE__ */ jsx("button", { onClick: onBack, className: "p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-slate-400", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setViewMode("edit"), className: `px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${viewMode === "edit" ? "bg-white dark:bg-slate-700 text-indigo-600 shadow-sm" : "text-slate-400"}`, children: "Escrita" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setViewMode("preview"), className: `px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${viewMode === "preview" ? "bg-white dark:bg-slate-700 text-indigo-600 shadow-sm" : "text-slate-400"}`, children: "Preview" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setIsFocusMode(!isFocusMode), className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-indigo-600 transition-all", children: isFocusMode ? /* @__PURE__ */ jsx(Minimize2, { size: 18 }) : /* @__PURE__ */ jsx(Maximize2, { size: 18 }) }),
        /* @__PURE__ */ jsxs("button", { onClick: () => onSave({ ...project, content }), className: "bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Save, { size: 14 }),
          " Salvar"
        ] })
      ] })
    ] }),
    viewMode === "edit" && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-1 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md", children: [
      Object.entries(groups).map(([name, btns], idx) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: `flex items-center gap-1 ${idx > 1 && !showMore ? "hidden md:flex" : "flex"}`, children: btns.map((btn, i) => /* @__PURE__ */ jsx("button", { onClick: btn.action, className: "p-2.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-slate-500 hover:text-indigo-600 rounded-lg transition-all", title: btn.label, children: /* @__PURE__ */ jsx(btn.icon, { size: 16 }) }, i)) }),
        idx < Object.keys(groups).length - 1 && /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-slate-100 dark:bg-slate-800 mx-1" })
      ] }, name)),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowMore(!showMore),
          className: "md:hidden p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-lg",
          children: /* @__PURE__ */ jsx(MoreHorizontal, { size: 16 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2 text-[9px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl transition-all hover:scale-105", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 12 }),
        " Sugerir Próximo Artigo"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 p-10 min-h-[650px] transition-all", children: viewMode === "edit" ? /* @__PURE__ */ jsx(
      "textarea",
      {
        id: "editor-area",
        className: "w-full min-h-[550px] bg-transparent text-lg font-serif italic leading-relaxed text-slate-700 dark:text-slate-200 focus:outline-none resize-none",
        placeholder: "O rastro da lei começa aqui...",
        value: content,
        onChange: (e) => setContent(e.target.value)
      }
    ) : /* @__PURE__ */ jsx("div", { className: "prose prose-slate dark:prose-invert max-w-none font-serif italic text-lg leading-relaxed", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: content }) }) }),
    /* @__PURE__ */ jsxs("footer", { className: "flex justify-between px-6 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Palavras: ",
          content.split(/\s+/).filter((x) => x).length
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Caracteres: ",
          content.length
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
        "Sincronizado com LabSUS"
      ] })
    ] })
  ] });
}

function Analytics({ projects }) {
  const stats = [
    { label: "Score Médio", value: "92.4", change: "+5.2%", up: true, icon: Target },
    { label: "Impacto Social", value: "850k", change: "+12%", up: true, icon: Users },
    { label: "Custo Médio", value: "R$ 1.2M", change: "-2.1%", up: false, icon: Zap }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none", children: [
        "Lex",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Metrics" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: "Análise Comparativa e Rastro de Performance Legislativa" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-2xl", children: /* @__PURE__ */ jsx(s.icon, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-1 text-[9px] font-black uppercase ${s.up ? "text-emerald-500" : "text-rose-500"}`, children: [
          s.up ? /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }) : /* @__PURE__ */ jsx(ArrowDownRight, { size: 14 }),
          " ",
          s.change
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1", children: s.label }),
      /* @__PURE__ */ jsx("p", { className: "text-3xl font-black italic tracking-tighter", children: s.value })
    ] }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-sm font-black uppercase tracking-widest text-indigo-400 mb-10 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(BarChart3, { size: 18 }),
          " Comparativo de Efetividade (Score)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: projects.map((p, i) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[9px] font-black uppercase tracking-widest opacity-60", children: [
            /* @__PURE__ */ jsx("span", { children: p.title }),
            /* @__PURE__ */ jsxs("span", { children: [
              p.score,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-3 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-indigo-500 rounded-full", style: { width: `${p.score}%` } }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-indigo-600 text-white p-12 rounded-[5rem] shadow-2xl flex flex-col justify-center space-y-6", children: [
        /* @__PURE__ */ jsx(TrendingUp, { size: 48, className: "opacity-50" }),
        /* @__PURE__ */ jsx("h4", { className: "text-3xl font-black uppercase italic tracking-tighter leading-none", children: "Meta-Rastro de Aprovação" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-serif italic opacity-80 leading-relaxed", children: "A média de aprovação das leis geradas no LexLab é 34% superior ao rastro analógico tradicional da ALE-TO." }),
        /* @__PURE__ */ jsx("div", { className: "pt-6 border-t border-white/10", children: /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest italic", children: "Fonte: Inteligência LabSUS 2026" }) })
      ] })
    ] })
  ] });
}

function Plenario({ project, projects, onSelect }) {
  const [mounted, setMounted] = useState(false);
  const [voting, setVoting] = useState(false);
  const [result, setResult] = useState(null);
  const [showSelector, setShowSelector] = useState(false);
  useEffect(() => {
    setMounted(true);
    setResult(null);
  }, [project]);
  const runSimulation = () => {
    if (!project) return;
    setVoting(true);
    setResult(null);
    setTimeout(() => {
      const baseScore = project.score || 70;
      const favor = Math.floor(baseScore / 100 * 24);
      const contra = Math.floor(Math.random() * (24 - favor));
      const abstencao = 24 - favor - contra;
      setResult({
        favor,
        contra,
        abstencao,
        total: 24,
        status: favor >= 13 ? "Aprovado" : "Rejeitado"
      });
      setVoting(false);
    }, 1500);
  };
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700 pb-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-100 dark:border-slate-800 pb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center md:text-left", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none", children: [
          "Plenário ",
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Virtual" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: "ALE-TO: Assembleia Legislativa do Tocantins" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setShowSelector(!showSelector),
              className: "bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 px-6 py-4 rounded-3xl flex items-center gap-4 shadow-sm hover:border-indigo-600 transition-all",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[8px] font-black uppercase text-slate-400 tracking-widest italic", children: "Minuta em Pauta" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase text-slate-900 dark:text-white tracking-tight", children: project ? project.title : "Selecionar para Votação" })
                ] }),
                /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: "text-indigo-600" })
              ]
            }
          ),
          showSelector && /* @__PURE__ */ jsx("div", { className: "absolute top-full right-0 mt-3 w-80 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-2xl z-50 overflow-hidden animate-in zoom-in-95 duration-200", children: projects?.map((p) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                onSelect(p);
                setShowSelector(false);
              },
              className: `w-full text-left px-8 py-5 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border-b border-slate-50 dark:border-slate-800 last:border-0 ${project?.id === p.id ? "bg-indigo-50/50 dark:bg-indigo-900/10" : ""}`,
              children: [
                /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black text-indigo-600 uppercase mb-1 tracking-widest", children: p.id }),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-800 dark:text-white uppercase leading-tight italic", children: p.title })
              ]
            },
            p.id
          )) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: runSimulation,
            disabled: voting || !project,
            className: "bg-slate-900 dark:bg-indigo-600 text-white px-10 py-5 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl flex items-center gap-4 disabled:opacity-30 disabled:hover:scale-100",
            children: voting ? "Contabilizando..." : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Gavel, { size: 20 }),
              " Votar"
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: !project ? /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 bg-amber-50 dark:bg-amber-900/10 border-2 border-dashed border-amber-200 dark:border-amber-800 p-20 rounded-[5rem] text-center space-y-4", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "mx-auto text-amber-500", size: 48 }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-black uppercase italic tracking-tighter text-amber-900 dark:text-amber-200", children: "Ordem do Dia Vazia" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700 dark:text-amber-400 font-serif italic max-w-md mx-auto", children: "Selecione uma minuta no menu acima para iniciar o rastro de votação no plenário da Assembleia Legislativa." })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-white dark:bg-slate-900 p-16 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-2xl min-h-[500px] flex flex-col justify-center relative overflow-hidden", children: [
        voting && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-[2px] z-10 animate-pulse" }),
        result ? /* @__PURE__ */ jsxs("div", { className: "space-y-12 animate-in zoom-in-95 duration-500", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsxs("p", { className: `text-[10px] font-black uppercase tracking-[0.4em] italic ${result.status === "Aprovado" ? "text-emerald-500" : "text-rose-500"}`, children: [
              "Rastro: ",
              result.status
            ] }),
            /* @__PURE__ */ jsxs("h3", { className: "text-9xl font-black text-slate-900 dark:text-white italic tracking-tighter leading-none", children: [
              result.favor,
              /* @__PURE__ */ jsx("span", { className: "text-slate-200 dark:text-slate-800 text-6xl", children: "/24" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex h-10 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-1.5 shadow-inner", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-emerald-500 h-full rounded-full transition-all duration-1000 shadow-lg shadow-emerald-500/20", style: { width: `${result.favor / 24 * 100}%` } }),
            /* @__PURE__ */ jsx("div", { className: "bg-rose-500 h-full rounded-full transition-all duration-1000 mx-1.5", style: { width: `${result.contra / 24 * 100}%` } }),
            /* @__PURE__ */ jsx("div", { className: "bg-slate-400 h-full rounded-full transition-all duration-1000", style: { width: `${result.abstencao / 24 * 100}%` } })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-emerald-500 italic", children: result.favor }),
              /* @__PURE__ */ jsx("p", { className: "text-[8px] font-black uppercase text-slate-400 tracking-widest", children: "A Favor" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-rose-500 italic", children: result.contra }),
              /* @__PURE__ */ jsx("p", { className: "text-[8px] font-black uppercase text-slate-400 tracking-widest", children: "Contra" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-slate-400 italic", children: result.abstencao }),
              /* @__PURE__ */ jsx("p", { className: "text-[8px] font-black uppercase text-slate-400 tracking-widest", children: "Abstenção" })
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6 opacity-20", children: [
          /* @__PURE__ */ jsx(Landmark, { size: 120, className: "mx-auto" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-black uppercase tracking-[0.5em] italic", children: [
            'Aguardando rastro de votação para "',
            project.id,
            '"'
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-indigo-600 p-12 rounded-[4rem] text-white shadow-2xl space-y-8 h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(TrendingUp, { size: 32, className: "text-indigo-300" }),
          /* @__PURE__ */ jsx("h4", { className: "text-2xl font-black uppercase italic tracking-tighter leading-tight", children: "Projeção Política" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-serif italic opacity-80 leading-relaxed", children: [
            'A minuta "',
            project.title,
            '" apresenta um rastro de forte adesão na bancada da saúde, mas enfrenta escrutínio técnico na CCJ.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[9px] font-black uppercase tracking-widest", children: "Consenso Estimado" }),
            /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 font-black italic", children: [
              project.score,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-emerald-400 transition-all duration-1000", style: { width: `${project.score}%` } }) })
        ] })
      ] }) })
    ] }) })
  ] });
}

function Profile({ user }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 p-12 opacity-10", children: /* @__PURE__ */ jsx(Shield, { size: 200 }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col md:flex-row items-center gap-12", children: [
        /* @__PURE__ */ jsx("div", { className: "w-48 h-48 bg-indigo-600 rounded-[4rem] flex items-center justify-center border-8 border-white/10 shadow-2xl", children: /* @__PURE__ */ jsx(User, { size: 90, className: "text-white" }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-6xl font-black uppercase italic tracking-tighter leading-none", children: user.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center md:justify-start pt-2", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-indigo-500/20 text-indigo-400 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-indigo-500/30", children: user.role }),
            /* @__PURE__ */ jsxs("span", { className: "bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-emerald-500/30 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Activity, { size: 14 }),
              " LabSUS Founder"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black uppercase italic tracking-tighter mb-8 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Briefcase, { size: 20, className: "text-indigo-600" }),
            " Rastro Profissional"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-500 dark:text-slate-400 font-serif italic leading-relaxed", children: user.bio })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-rose-50 dark:bg-rose-900/10 p-12 rounded-[4rem] border border-rose-100 dark:border-rose-800 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black uppercase italic tracking-tighter text-rose-600 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Heart, { size: 20 }),
            " Referência e Legado"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest", children: "Inspirado por: Maria de Lourdes Amaral Dourado" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-rose-700 dark:text-rose-400 font-serif italic leading-relaxed", children: "Especialista em Saúde Coletiva e Vigilância Sanitária (Fiocruz/UFF). Uma vida dedicada ao rastro da gestão pública, servindo como Secretária Municipal de Saúde e Diretora de Vigilância em Saúde do Estado do Tocantins. O LexLab é a digitalização deste compromisso." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-lg text-center", children: [
          /* @__PURE__ */ jsx(Award, { className: "mx-auto text-indigo-600 mb-4", size: 40 }),
          /* @__PURE__ */ jsx("p", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter", children: "124" }),
          /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Minutas Analisadas" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-600 text-white p-10 rounded-[3.5rem] shadow-xl text-center", children: [
          /* @__PURE__ */ jsx(GraduationCap, { className: "mx-auto mb-4", size: 40 }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-black uppercase tracking-tighter italic leading-tight", children: "Epidemiologia Computacional" }),
          /* @__PURE__ */ jsx("p", { className: "text-[8px] font-black opacity-60 uppercase tracking-widest mt-2 text-center", children: "Área de Especialidade" })
        ] })
      ] })
    ] })
  ] });
}

function NexusGraph({ project }) {
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const nodes = [
    { id: "minuta", label: "Minuta LX-2026", icon: BrainCircuit, color: "text-indigo-600", type: "Core" },
    { id: "sus", label: "Portarias SUS", icon: BookOpen, color: "text-emerald-500", type: "Norma Superior" },
    { id: "fiscal", label: "Teto Fiscal 2026", icon: DollarSign, color: "text-rose-500", type: "Restrição Fiscal" },
    { id: "termo", label: "Conceito: Medicamento", icon: Target, color: "text-blue-500", type: "Ontologia ANVISA" },
    { id: "meta", label: "Meta ODS 3.8", icon: Zap, color: "text-amber-500", type: "Rastro Global" }
  ];
  const connections = [
    { from: "minuta", to: "sus", label: "Conformidade", color: "border-emerald-200" },
    { from: "minuta", to: "termo", label: "Uso de Vocabulário", color: "border-blue-200" },
    { from: "minuta", to: "fiscal", label: "Impacto Estimado", color: "border-rose-200" },
    { from: "termo", to: "sus", label: "Definição Técnica", color: "border-slate-200" },
    { from: "sus", to: "meta", label: "Alinhamento", color: "border-amber-100" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic", children: [
        "Nexo ",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Semântico" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: [
        "Visualização Ontológica e Abstrata: ",
        project?.title || "Minuta Ativa"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-slate-50 dark:bg-slate-950 p-12 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-inner relative min-h-[600px] flex items-center justify-center overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ jsx(Share2, { size: 600, className: "absolute -left-40 -top-40 text-indigo-200 dark:text-indigo-900" }) }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 flex flex-wrap gap-8 justify-center items-center", children: nodes.map((node) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveNode(node),
            className: `p-6 rounded-[3rem] border-4 transition-all duration-500 text-center space-y-3 relative group ${activeNode?.id === node.id ? "bg-white dark:bg-slate-900 border-indigo-600 shadow-2xl scale-110" : "bg-white/70 dark:bg-slate-900/50 border-white dark:border-slate-800 hover:border-indigo-100"}`,
            children: [
              /* @__PURE__ */ jsx(node.icon, { size: 28, className: `${node.color} mx-auto` }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-800 dark:text-white uppercase italic tracking-tight", children: node.label }),
                /* @__PURE__ */ jsx("p", { className: "text-[8px] font-black text-slate-400 uppercase tracking-widest", children: node.type })
              ] }),
              activeNode?.id === node.id && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -right-3 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 animate-pulse" })
            ]
          },
          node.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl space-y-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-slate-400", children: "Contexto Ontológico" }),
          activeNode ? /* @__PURE__ */ jsxs("div", { className: "space-y-4 animate-in fade-in", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(activeNode.icon, { size: 20, className: activeNode.color }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-slate-900 dark:text-white uppercase italic", children: activeNode.label })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 font-serif italic leading-relaxed", children: [
              "Conexões Identificadas: ",
              connections.filter((c) => c.from === activeNode.id || c.to === activeNode.id).length
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2 pt-3", children: connections.filter((c) => c.from === activeNode.id || c.to === activeNode.id).map((c, i) => /* @__PURE__ */ jsxs("div", { className: `text-[9px] p-3 rounded-xl border border-dashed font-black uppercase tracking-widest ${c.color} text-slate-600 dark:text-slate-400 flex items-center justify-between`, children: [
              /* @__PURE__ */ jsxs("span", { children: [
                c.from === activeNode.id ? "->" : "<-",
                " ",
                c.label
              ] }),
              /* @__PURE__ */ jsx("span", { children: c.from === activeNode.id ? nodes.find((n) => n.id === c.to).label : nodes.find((n) => n.id === c.from).label })
            ] }, i)) })
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 font-serif italic text-center py-10", children: "Selecione um nó no rastro para ver o nexo semântico." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white p-10 rounded-[4rem] shadow-2xl relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -bottom-20 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl group-hover:bg-rose-600/20 transition-all duration-1000" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-rose-400", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { size: 18 }),
              /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-widest", children: "Risco de Abstração" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 font-serif italic leading-relaxed opacity-80", children: `"O rastro semântico entre a minuta e o 'medicamento' é forte, mas o nexo com o 'Teto Fiscal' indica risco orçamentário no Art. 4º."` })
          ] })
        ] })
      ] })
    ] })
  ] });
}

function LexBudget({ project }) {
  if (!project) return /* @__PURE__ */ jsx("div", { className: "p-20 text-center font-black opacity-20 text-slate-400", children: "VINCULE UMA MINUTA AO FISCAL SENTINEL" });
  return /* @__PURE__ */ jsx("div", { className: "p-10 space-y-10 animate-in fade-in", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(TrendingUp, { className: "absolute -right-10 -bottom-10 text-white/5", size: 300 }),
    /* @__PURE__ */ jsxs("p", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-2", children: [
      "Orçamento: ",
      project.id
    ] }),
    /* @__PURE__ */ jsxs("h2", { className: "text-7xl font-black italic tracking-tighter leading-none", children: [
      "R$ ",
      (project.budget || 0).toLocaleString("pt-BR")
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-3 bg-white/10 w-fit px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-400", size: 16 }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] font-black uppercase tracking-widest italic", children: "Fonte: Tesouro Estadual (TO)" })
    ] })
  ] }) });
}

function SocialSentiment({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const socialMetrics = [
    { label: "Aceitação Popular", val: 78, icon: ThumbsUp, color: "text-emerald-500" },
    { label: "Resistência Setorial", val: 22, icon: ThumbsDown, color: "text-rose-500" },
    { label: "Engajamento Digital", val: 65, icon: MessageCircle, color: "text-indigo-600" }
  ];
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic", children: [
        "Social ",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Sentiment" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: "Simulação de Repercussão e Escuta Social" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: socialMetrics.map((m, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl group hover:scale-105 transition-all", children: [
      /* @__PURE__ */ jsx(m.icon, { size: 28, className: `${m.color} mb-6` }),
      /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest", children: m.label }),
      /* @__PURE__ */ jsxs("p", { className: "text-5xl font-black text-slate-900 dark:text-white mt-2 tracking-tighter", children: [
        m.val,
        "%"
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 p-12 opacity-10", children: /* @__PURE__ */ jsx(Users, { size: 200 }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-8", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black uppercase italic tracking-tighter flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(TrendingUp, { size: 24, className: "text-indigo-400" }),
          " Mapa de Calor Setorial"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-slate-400 uppercase tracking-widest", children: "Recepção Estimada" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] font-black uppercase italic", children: [
                /* @__PURE__ */ jsx("span", { children: "Conselhos de Saúde" }),
                /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "90%" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-emerald-500 w-[90%]" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] font-black uppercase italic", children: [
                /* @__PURE__ */ jsx("span", { children: "Setor Farmacêutico" }),
                /* @__PURE__ */ jsx("span", { className: "text-rose-400", children: "45%" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-rose-500 w-[45%]" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4 text-amber-400", children: [
              /* @__PURE__ */ jsx(AlertCircle, { size: 20 }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest", children: "Insight IA" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 font-serif italic leading-relaxed", children: '"O rastro da lei sugere uma alta adesão em Tocantins, especialmente por fortalecer a Vigilância Sanitária local. Recomenda-se audiência pública com o setor produtivo para mitigar o rastro de resistência no Art. 5º."' })
          ] })
        ] })
      ] })
    ] })
  ] });
}

function LexGeo({ project }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const GEOJSON_CONFIG = { state: "TO", file: "geojs-17-mun.json" };
  useEffect(() => {
    setMounted(true);
    const script = document.createElement("script");
    script.src = "https://cdn.plot.ly/plotly-2.27.0.min.js";
    script.async = true;
    script.onload = () => loadGeoData();
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);
  const loadGeoData = async () => {
    try {
      const response = await fetch(`/geojson_uf/${GEOJSON_CONFIG.file}`);
      const geojson = await response.json();
      renderMap(geojson);
    } catch (error) {
      console.error("Erro ao carregar o rastro geográfico:", error);
    } finally {
      setLoading(false);
    }
  };
  const renderMap = (geojson) => {
    const locations = geojson.features.map((f) => f.properties.name);
    const zData = locations.map(() => Math.floor(Math.random() * 100));
    const data = [{
      type: "choropleth",
      geojson,
      locations,
      z: zData,
      featureidkey: "properties.name",
      // Ajuste para o campo de nome no seu JSON
      colorscale: [
        [0, "#f8fafc"],
        [0.5, "#6366f1"],
        [1, "#312e81"]
      ],
      marker: { line: { color: "rgba(255,255,255,0.2)", width: 0.5 } },
      showscale: false
    }];
    const layout = {
      dragmode: "pan",
      margin: { r: 0, t: 0, b: 0, l: 0 },
      geo: {
        visible: false,
        resolution: 50,
        fitbounds: "locations"
        // Auto-zoom no Tocantins
      },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)"
    };
    window.Plotly.newPlot("lexgeo-map", data, layout, {
      responsive: true,
      displayModeBar: false
    });
  };
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-1000", children: [
    /* @__PURE__ */ jsx("header", { className: "flex justify-between items-end", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter", children: [
        "Lex",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Geo" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: "Mapeamento de Impacto: Tocantins" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden min-h-[600px]", children: [
        loading && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-50 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-md flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "animate-spin text-indigo-600 mb-4", size: 40 }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest", children: "Sincronizando Malha Geográfica..." })
        ] }),
        /* @__PURE__ */ jsx("div", { id: "lexgeo-map", className: "w-full h-full" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[10px] font-black uppercase text-indigo-400 mb-4", children: "Análise LabSUS" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-serif italic opacity-70 leading-relaxed", children: "O rastro desta lei apresenta maior pressão regulatória nos municípios do eixo da BR-153." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[3rem] border border-indigo-100 dark:border-indigo-800", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "text-indigo-600 mb-2", size: 20 }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase text-indigo-900 dark:text-indigo-300", children: "Dados Validados" })
        ] })
      ] })
    ] })
  ] });
}

function Timeline({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const historicalMilestones = [
    { date: "1995-2002", title: "Ciclo de Consolidação SUS/TO", desc: "Período de estruturação das primeiras vigilâncias municipais.", icon: Landmark, color: "text-amber-500" },
    { date: "2015-05-12", title: "Lei de Transparência Sanitária", desc: "Marco anterior que rege o rastro de dados atual.", icon: FileText, color: "text-indigo-400" },
    { date: "2026-03-23", title: "Minuta LexLab (Atual)", desc: project?.title || "Redação em progresso", icon: Clock, color: "text-emerald-500", active: true }
  ];
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic", children: [
        "Legislative ",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Timeline" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: "Rastro Cronológico e Evolução Normativa" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: historicalMilestones.map((item, i) => /* @__PURE__ */ jsxs("div", { className: `flex flex-col md:flex-row items-center gap-8 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 z-10 hidden md:block" }),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: `bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl transition-all hover:border-indigo-500 group ${item.active ? "ring-2 ring-indigo-600 ring-offset-4 dark:ring-offset-slate-950" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx(item.icon, { className: item.color, size: 24 }),
            /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calendar, { size: 12 }),
              " ",
              item.date
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-tight", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 font-serif italic mt-3 leading-relaxed", children: item.desc })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-1/2" })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-600 text-white p-10 rounded-[4rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center md:text-left", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest opacity-60", children: "Próximo Rastro Estimado" }),
        /* @__PURE__ */ jsx("h4", { className: "text-2xl font-black uppercase italic tracking-tighter", children: "Protocolo no Plenário Virtual" })
      ] }),
      /* @__PURE__ */ jsx(ArrowRight, { size: 40, className: "opacity-20 hidden md:block" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { size: 20, className: "text-emerald-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] font-black uppercase tracking-[0.2em]", children: "Rastro de Continuidade Validado" })
      ] })
    ] })
  ] });
}

function LexSupremacy({ project }) {
  if (!project) return /* @__PURE__ */ jsx("div", { className: "p-20 text-center font-black opacity-20 text-slate-400", children: "SELECIONE UMA MINUTA PARA ANÁLISE DE KELSEN" });
  return /* @__PURE__ */ jsx("div", { className: "p-10 space-y-10 animate-in slide-in-from-bottom-4 duration-700", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-12 rounded-[5rem] shadow-2xl border border-slate-100 dark:border-slate-800", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black italic uppercase tracking-tighter mb-10", children: [
      "Lex",
      /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Supremacy" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-emerald-600", children: [
          /* @__PURE__ */ jsx(Landmark, { size: 20 }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase italic", children: "Constituição Federal" })
        ] }),
        /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-500", size: 18 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-slate-600 dark:text-slate-400", children: [
          /* @__PURE__ */ jsx(BookOpen, { size: 20 }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase italic", children: "Lei Orgânica do SUS" })
        ] }),
        /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-500", size: 18 })
      ] })
    ] })
  ] }) });
}

function CCJSim({ project }) {
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const runIAAnalysis = async () => {
    if (!project) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/llama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Analise a constitucionalidade desta minuta: "${project.title}". Conteúdo: ${project.content || "Foco em saúde pública e LabSUS"}. Verifique conflitos com a Constituição Federal e leis do Tocantins.`,
          systemPrompt: "Você é um consultor jurídico sênior da CCJ. Forneça um parecer técnico rigoroso, citando fundamentos legais e concluindo se a matéria é CONSTITUCIONAL ou INCONSTITUCIONAL. Use um tom formal e preciso."
        })
      });
      if (!response.ok) throw new Error("Falha no rastro da API");
      const data = await response.json();
      setAnalysis(data.content);
    } catch (err) {
      setError("O rastro de IA falhou. Verifique se a GROQ_API_KEY está configurada na Vercel.");
    } finally {
      setIsLoading(false);
    }
  };
  if (!project) return /* @__PURE__ */ jsx("div", { className: "p-20 text-center opacity-30 font-black uppercase tracking-[0.4em] italic", children: "Selecione uma matéria para iniciar o rastro jurídico" });
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-1000", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic", children: [
          "CCJ",
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "-Sim" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: "Simulador de Constitucionalidade via Llama 3" })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: runIAAnalysis,
          disabled: isLoading,
          className: `px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-all flex items-center gap-3 ${isLoading ? "bg-slate-200 text-slate-500" : "bg-indigo-600 text-white hover:bg-indigo-700"}`,
          children: [
            isLoading ? /* @__PURE__ */ jsx(Loader2, { className: "animate-spin", size: 16 }) : /* @__PURE__ */ jsx(Zap, { size: 16 }),
            isLoading ? "Processando Llama Local (LabSUS)..." : "Gerar Parecer Técnico"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm min-h-[500px] relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-sm font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { size: 18 }),
          " Parecer Jurídico do Relator"
        ] }),
        error && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-6 bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-widest", children: [
          /* @__PURE__ */ jsx(AlertCircle, { size: 18 }),
          " ",
          error
        ] }),
        analysis ? /* @__PURE__ */ jsx("div", { className: "prose dark:prose-invert max-w-none text-sm leading-relaxed font-serif whitespace-pre-wrap animate-in slide-in-from-bottom-4 duration-700", children: analysis }) : !isLoading && /* @__PURE__ */ jsxs("div", { className: "h-64 flex flex-col items-center justify-center text-slate-300 dark:text-slate-700 italic space-y-4", children: [
          /* @__PURE__ */ jsx(Scale, { size: 48, className: "opacity-20" }),
          /* @__PURE__ */ jsx("p", { children: "O rastro analítico aguarda o comando de execução." })
        ] }),
        isLoading && /* @__PURE__ */ jsxs("div", { className: "space-y-4 animate-pulse", children: [
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 dark:bg-slate-800 rounded w-3/4" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 dark:bg-slate-800 rounded w-full" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 dark:bg-slate-800 rounded w-5/6" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white p-8 rounded-[3.5rem] shadow-2xl relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "text-indigo-400 mb-4 group-hover:scale-110 transition-transform", size: 32 }),
          /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-2", children: "Certificação Digital" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs italic opacity-70 leading-relaxed", children: "Este parecer utiliza o rastro de jurisprudência do STF integrado via LexLab Nexus." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-[3.5rem] border border-indigo-100 dark:border-indigo-800/30", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4", children: "Probabilidade de Aprovação" }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-black italic tracking-tighter text-indigo-900 dark:text-indigo-100", children: "88%" }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-1.5 bg-slate-200 dark:bg-slate-800 mt-4 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-indigo-600 w-[88%]" }) })
        ] })
      ] })
    ] })
  ] });
}

function LexCom({ project }) {
  const [activeTab, setActiveTab] = useState("ccj");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  if (!project) return /* @__PURE__ */ jsx("div", { className: "p-20 text-center opacity-20 font-black uppercase tracking-[0.5em] italic", children: "Aguardando Distribuição de Matéria..." });
  const comissoes = {
    ccj: {
      name: "Constituição e Justiça",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      parecer: project.score > 80 ? "Pela Admissibilidade" : "Inconstitucionalidade Parcial",
      rastro: "Análise de simetria com a Constituição do Estado do Tocantins e competência legislativa municipal/estadual."
    },
    cft: {
      name: "Finanças e Tributação",
      icon: DollarSign,
      color: "text-amber-600",
      bg: "bg-amber-50",
      parecer: project.budget < 2e6 ? "Adequação Orçamentária" : "Risco de Excesso de Teto",
      rastro: `O rastro financeiro de R$ ${project.budget?.toLocaleString()} foi confrontado com a LDO 2026.`
    },
    cs: {
      name: "Saúde e Assistência",
      icon: HeartPulse,
      color: "text-rose-600",
      bg: "bg-rose-50",
      parecer: "Mérito Aprovado",
      rastro: "Rastro de impacto positivo nos indicadores de Vigilância Sanitária e fortalecimento do LabSUS."
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24", children: [
    /* @__PURE__ */ jsx("header", { className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none", children: [
        "Lex",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Com" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: [
        "Hub de Comissões Temáticas: ",
        project.id
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: Object.entries(comissoes).map(([id, com]) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab(id),
          className: `w-full p-6 rounded-[2.5rem] border transition-all flex items-center gap-4 ${activeTab === id ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-105" : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 hover:border-indigo-200"}`,
          children: [
            /* @__PURE__ */ jsx(com.icon, { size: 20, className: activeTab === id ? "text-indigo-400" : com.color }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-left leading-tight", children: com.name })
          ]
        },
        id
      )) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 bg-white dark:bg-slate-900 p-12 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: `p-4 rounded-2xl ${comissoes[activeTab].bg} ${comissoes[activeTab].color}`, children: React.createElement(comissoes[activeTab].icon, { size: 24 }) }),
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-black uppercase italic tracking-tighter", children: [
              "Parecer de ",
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "Mérito" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `px-6 py-3 rounded-full font-black text-[9px] uppercase tracking-[0.2em] border ${comissoes[activeTab].parecer.includes("Risco") ? "bg-rose-50 border-rose-100 text-rose-600" : "bg-emerald-50 border-emerald-100 text-emerald-600"}`, children: comissoes[activeTab].parecer })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-slate-50 dark:bg-slate-800/50 p-10 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-serif italic text-slate-600 dark:text-slate-300 leading-relaxed", children: [
          '"',
          comissoes[activeTab].rastro,
          '"'
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pt-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex -space-x-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxs("div", { className: "w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-black", children: [
            "D",
            i
          ] }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase text-slate-400 tracking-widest", children: "Relatoria e Membros Sorteados" }),
          /* @__PURE__ */ jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all", children: [
            "Ver Relatório Completo ",
            /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}

// Rastro de Autenticação e Comunicação LexLab


/**
 * Função fetchWithAuth: Centraliza chamadas para a API do Digital Twin
 * com suporte a tratamento de erros e contexto de autenticação.
 */
const fetchWithAuth = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...(options.headers || {}),
    },
  };

  try {
    const response = await fetch(url, mergedOptions);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Rastro de erro na fetchWithAuth:", error);
    throw error;
  }
};

function LexPress() {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchWithAuth("https://labsus-api.ngrok-free.app/api/projects/");
        setProjects(data);
      } catch (err) {
        console.error("Erro ao carregar rastro de minutas:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, []);
  const handleSelect = (id) => {
    setSelectedId(id);
    console.log("Minuta selecionada para rastro:", id);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-8 space-y-8 animate-in fade-in duration-700", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-end border-b border-slate-800 pb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-black italic uppercase tracking-tighter", children: [
          "Lex",
          /* @__PURE__ */ jsx("span", { className: "text-emerald-500", children: "Press" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.3em] opacity-50", children: "Distribuição e Clipping Legislativo" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-800 p-2 rounded-xl flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Search, { size: 14, className: "text-slate-500" }),
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "BUSCAR RASTRO...", className: "bg-transparent border-none text-[10px] font-bold focus:outline-none w-32" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4", children: "Minutas Disponíveis (LabSUS)" }),
        isLoading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-6 bg-slate-900/50 rounded-3xl animate-pulse", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "animate-spin text-emerald-500", size: 20 }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase", children: "Sincronizando Banco de Dados..." })
        ] }) : /* @__PURE__ */ jsx("div", { className: "max-h-[500px] overflow-y-auto space-y-3 pr-2 custom-scrollbar", children: projects.map((p) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleSelect(p.id),
            className: `w-full text-left p-5 rounded-[2rem] border transition-all flex items-center justify-between group ${selectedId === p.id ? "bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-600 text-slate-300"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: `p-3 rounded-2xl ${selectedId === p.id ? "bg-white/20" : "bg-slate-800"}`, children: /* @__PURE__ */ jsx(FileText, { size: 18 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xs font-black uppercase tracking-tight", children: p.title || "Sem Título" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-[9px] opacity-60 font-mono", children: [
                    "ID: ",
                    p.id.toString().slice(0, 8),
                    " | TO-2026"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(ChevronRight, { size: 16, className: `transition-transform ${selectedId === p.id ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}` })
            ]
          },
          p.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx(Globe, { className: "text-emerald-500", size: 40 }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black italic tracking-tighter uppercase", children: "Pronto para Publicação" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 leading-relaxed", children: "O rastro selecionado será processado pelo **Llama Local** para formatação oficial do Diário Oficial do Estado (DOE-TO) e indexação no LabSUS." })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            disabled: !selectedId,
            className: "w-full bg-slate-950 text-white p-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors disabled:opacity-20 disabled:cursor-not-allowed group",
            children: [
              /* @__PURE__ */ jsx(Send, { size: 16, className: "group-hover:-rotate-12 transition-transform" }),
              "Publicar no LexPress"
            ]
          }
        )
      ] })
    ] })
  ] });
}

function LexEmergency({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const protocols = [
    { title: "Decreto de Calamidade Pública", status: "Pronto para Assinatura", risk: "Crítico" },
    { title: "Dispensa de Licitação Sanitária", status: "Validado (Art. 24, IV)", risk: "Alto" },
    { title: "Requisição Administrativa de Bens", status: "Em Análise Jurídica", risk: "Médio" }
  ];
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: "p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700 pb-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-end border-b-4 border-rose-600 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-rose-600 animate-pulse", children: [
          /* @__PURE__ */ jsx(AlertOctagon, { size: 32 }),
          /* @__PURE__ */ jsxs("h2", { className: "text-5xl font-black uppercase italic tracking-tighter leading-none", children: [
            "Lex",
            /* @__PURE__ */ jsx("span", { className: "text-slate-900 dark:text-white", children: "Emergency" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]", children: "Gabinete de Crise e Resposta Legislativa Rápida" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-rose-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-rose-500/30", children: "Nível de Alerta: Laranja" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(Activity, { className: "absolute -right-10 -top-10 text-rose-600/20", size: 300 }),
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Zap, { className: "text-amber-400" }),
            " Rastro de Ação Imediata"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-serif italic opacity-80 leading-relaxed max-w-xl", children: [
            '"Baseado nos dados do LabSUS, o rastro epidemiológico sugere a ativação do Art. 14 da minuta ',
            project?.id || "Padrão",
            ' para garantir o fluxo de insumos em Palmas e Araguaína."'
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: protocols.map((p, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 flex flex-col justify-between group hover:border-rose-500 transition-all", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase text-rose-500 tracking-widest mb-2", children: p.risk }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold uppercase italic leading-tight mb-4", children: p.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-[8px] font-black uppercase text-slate-400", children: [
            /* @__PURE__ */ jsx("span", { children: p.status }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "group-hover:translate-x-2 transition-transform" })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 dark:bg-amber-900/10 p-10 rounded-[4rem] border border-amber-200 dark:border-amber-800/30 space-y-6", children: [
        /* @__PURE__ */ jsx(BellRing, { className: "text-amber-600", size: 40 }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-black uppercase italic tracking-tighter leading-tight text-amber-900 dark:text-amber-200", children: "Painel de Monitoramento" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-rose-600 w-[85%]" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase text-slate-500 tracking-widest", children: "Capacidade do Sistema (LabSUS)" })
        ] })
      ] })
    ] })
  ] });
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [activeProject, setActiveProject] = useState(null);
  const [projects, setProjects] = useState([
    { id: "LX-2026-001", title: "Reforma Tributária - Simpler", status: "Ativo", score: 85, budget: 45e5, theme: "Tributário", content: "Art 1º..." },
    { id: "LX-2026-002", title: "Código de Vigilância Sanitária", status: "Revisão", score: 92, budget: 12e5, theme: "Saúde Pública", content: "Art 1º..." },
    { id: "LX-2026-003", title: "Lei de Incentivo ao LabSUS", status: "Concluído", score: 98, budget: 85e4, theme: "Tecnologia", content: "Art 1º..." }
  ]);
  useEffect(() => {
    if (!isAuthenticated) {
      document.title = "LexLab | Gabinete Digital";
      return;
    }
    const pageTitles = {
      dashboard: "Console Central",
      editor: activeProject ? `Editando: ${activeProject.id}` : "Nova Minuta",
      ccj: "CCJ-Sim | Análise Técnica",
      comissoes: "Hub de Comissões",
      congresso: "Plenário Virtual",
      supremacy: "LexSupremacy | Kelsen",
      fiscal: "LexBudget | Sentinela Fiscal",
      geo: "LexGeo | Mapas Legislativos",
      emergency: "🚨 GABINETE DE CRISE",
      nexus: "Nexo Semântico",
      social: "Social Sentiment",
      history: "Timeline Histórica",
      press: "LexPress | Diário Oficial",
      analytics: "Métricas & IA",
      profile: "Perfil do Consultor"
    };
    const currentTitle = pageTitles[page] || "Digital Twin";
    document.title = `LexLab | ${currentTitle}`;
  }, [page, activeProject, isAuthenticated]);
  useEffect(() => {
    const auth = localStorage.getItem("lexlab_auth") === "true";
    setIsAuthenticated(auth);
    setIsLoaded(true);
  }, []);
  const handleLogin = () => {
    localStorage.setItem("lexlab_auth", "true");
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("lexlab_auth");
    setIsAuthenticated(false);
    setPage("dashboard");
  };
  if (!isLoaded) return /* @__PURE__ */ jsx("div", { className: "h-screen bg-slate-950 flex items-center justify-center text-indigo-500 font-black animate-pulse uppercase tracking-widest", children: "Sincronizando LexLab..." });
  if (!isAuthenticated) return /* @__PURE__ */ jsx(Auth, { onLogin: handleLogin });
  return /* @__PURE__ */ jsxs(Layout, { setPage, activePage: page, onLogout: handleLogout, children: [
    page === "dashboard" && /* @__PURE__ */ jsx(Dashboard, { projects, onOpen: (p) => {
      setActiveProject(p);
      setPage("editor");
    }, onNew: () => {
      setActiveProject(null);
      setPage("editor");
    } }),
    page === "editor" && /* @__PURE__ */ jsx(EditorPage, { project: activeProject, onBack: () => setPage("dashboard") }),
    page === "ccj" && /* @__PURE__ */ jsx(CCJSim, { project: activeProject }),
    page === "comissoes" && /* @__PURE__ */ jsx(LexCom, { project: activeProject }),
    page === "congresso" && /* @__PURE__ */ jsx(Plenario, { project: activeProject, projects, onSelect: setActiveProject }),
    page === "supremacy" && /* @__PURE__ */ jsx(LexSupremacy, { project: activeProject }),
    page === "fiscal" && /* @__PURE__ */ jsx(LexBudget, { project: activeProject }),
    page === "geo" && /* @__PURE__ */ jsx(LexGeo, { project: activeProject }),
    page === "emergency" && /* @__PURE__ */ jsx(LexEmergency, { project: activeProject }),
    page === "nexus" && /* @__PURE__ */ jsx(NexusGraph, { project: activeProject }),
    page === "social" && /* @__PURE__ */ jsx(SocialSentiment, { project: activeProject }),
    page === "history" && /* @__PURE__ */ jsx(Timeline, { project: activeProject }),
    page === "press" && /* @__PURE__ */ jsx(LexPress, { project: activeProject }),
    page === "analytics" && /* @__PURE__ */ jsx(Analytics, { projects }),
    page === "profile" && /* @__PURE__ */ jsx(Profile, { user: { name: "Lucas Dourado", role: "Chief Strategist", bio: "Pesquisador LabSUS." } })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html class="bg-gray-100 text-gray-800"> ${maybeRenderHead()}<body> ${renderComponent($$result, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ld/lexlab/apps/web/src/components/App.jsx", "client:component-export": "default" })} </body></html>`;
}, "/home/ld/lexlab/apps/web/src/pages/index.astro", void 0);

const $$file = "/home/ld/lexlab/apps/web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
