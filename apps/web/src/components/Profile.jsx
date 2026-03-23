import React, { useState, useEffect } from 'react';
import { User, Shield, Award, Mail, MapPin, Briefcase, GraduationCap, Heart, Activity } from 'lucide-react';

export default function Profile({ user }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      {/* Header de Identidade */}
      <div className="bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 p-12 opacity-10">
          <Shield size={200} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 bg-indigo-600 rounded-[4rem] flex items-center justify-center border-8 border-white/10 shadow-2xl">
            <User size={90} className="text-white" />
          </div>
          
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none">{user.name}</h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <span className="bg-indigo-500/20 text-indigo-400 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
                {user.role}
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-emerald-500/30 flex items-center gap-2">
                <Activity size={14}/> LabSUS Founder
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Bio e Trajetória */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-8 flex items-center gap-3">
              <Briefcase size={20} className="text-indigo-600" /> Rastro Profissional
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-serif italic leading-relaxed">
              {user.bio}
            </p>
          </div>

          {/* Homenagem e Referência Técnica */}
          <div className="bg-rose-50 dark:bg-rose-900/10 p-12 rounded-[4rem] border border-rose-100 dark:border-rose-800 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-rose-600 flex items-center gap-3">
                <Heart size={20} /> Referência e Legado
              </h3>
              <div className="space-y-4">
                <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Inspirado por: Maria de Lourdes Amaral Dourado</p>
                <p className="text-xs text-rose-700 dark:text-rose-400 font-serif italic leading-relaxed">
                  Especialista em Saúde Coletiva e Vigilância Sanitária (Fiocruz/UFF). 
                  Uma vida dedicada ao rastro da gestão pública, servindo como Secretária Municipal de Saúde e 
                  Diretora de Vigilância em Saúde do Estado do Tocantins. O LexLab é a digitalização deste compromisso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats de Usuário */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-lg text-center">
            <Award className="mx-auto text-indigo-600 mb-4" size={40} />
            <p className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">124</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Minutas Analisadas</p>
          </div>
          
          <div className="bg-indigo-600 text-white p-10 rounded-[3.5rem] shadow-xl text-center">
             <GraduationCap className="mx-auto mb-4" size={40} />
             <p className="text-xl font-black uppercase tracking-tighter italic leading-tight">Epidemiologia Computacional</p>
             <p className="text-[8px] font-black opacity-60 uppercase tracking-widest mt-2 text-center">Área de Especialidade</p>
          </div>
        </div>
      </div>
    </div>
  );
}
