"use client";

import { CheckCircle, HeartPulse, Dumbbell, Apple, ChevronRight, ShieldCheck, PlayCircle } from 'lucide-react';

export default function NatflixPresell() {
  
  const irParaOferta = () => {
    // O teu link de afiliado Hotmart
    const linkAfiliado = "https://go.hotmart.com/C91429088J";
    window.open(linkAfiliado, "_blank");
  };

  return (
    <main className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      
      {/* Alerta de Escassez no Topo */}
      <div className="bg-rose-600 text-white text-center py-2.5 text-xs md:text-sm font-bold tracking-widest uppercase animate-pulse">
        Atenção: Oferta especial liberada! Junta-te a mais de 90 mil alunas hoje.
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-full mb-8 shadow-sm">
          <HeartPulse size={14} fill="currentColor" /> Plataforma Feminina #1
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter leading-[1.1] mb-6 uppercase">
          A Transformação do Teu Corpo <br className="hidden md:block" /> 
          <span className="text-rose-600 italic">Começa Aqui.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Muito mais do que apenas treinos. A **Natflix Fitness** é a tua parceira completa com treinos para casa ou ginásio, nutrição e acompanhamento focado 100% no corpo da mulher.
        </p>
        
        <div className="flex flex-col items-center gap-5">
          <button 
            onClick={irParaOferta}
            className="group bg-rose-600 hover:bg-rose-700 text-white text-xl md:text-2xl font-black uppercase italic tracking-widest px-10 py-6 rounded-[32px] shadow-[0_15px_40px_rgba(225,29,72,0.4)] transform hover:-translate-y-1 transition-all flex items-center gap-3"
          >
            QUERO COMEÇAR AGORA <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2 text-sm text-neutral-500 font-bold mt-2">
             <ShieldCheck size={18} className="text-green-600" />
             <span>Acesso Imediato e Seguro via Hotmart</span>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-white py-24 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Tudo o que precisas num só lugar</h2>
            <div className="w-20 h-1.5 bg-rose-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-neutral-50 rounded-[40px] border border-neutral-100 hover:border-rose-200 transition-all hover:shadow-2xl hover:bg-white group">
              <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Dumbbell className="text-rose-600" size={32} />
              </div>
              <h3 className="font-black uppercase text-xl mb-4">Treinos Adaptáveis</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                Do iniciante ao avançado. Escolhe entre treinos desenhados para o ginásio ou rotinas curtas e intensas para fazeres no conforto da tua casa.
              </p>
            </div>

            <div className="p-10 bg-neutral-50 rounded-[40px] border border-neutral-100 hover:border-rose-200 transition-all hover:shadow-2xl hover:bg-white group">
              <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Apple className="text-rose-600" size={32} />
              </div>
              <h3 className="font-black uppercase text-xl mb-4">Nutrição e Planos</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                Vídeos semanais com nutricionistas e planos alimentares divididos por objetivo (emagrecimento ou ganho de massa) e calorias.
              </p>
            </div>

            <div className="p-10 bg-neutral-50 rounded-[40px] border border-neutral-100 hover:border-rose-200 transition-all hover:shadow-2xl hover:bg-white group">
              <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <PlayCircle className="text-rose-600" size={32} />
              </div>
              <h3 className="font-black uppercase text-xl mb-4">Modalidades Extra</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                Muito além da musculação: desfruta de aulas de Pilates, Spinning, Yoga, alongamentos e até acompanhamento com psicóloga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Checkmarks */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-12 tracking-tighter">
            Junta-te a +90.000 mulheres reais!
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-12 text-left mb-16">
            <ul className="space-y-4 font-medium text-neutral-300">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-rose-500" size={24} /> Fichas de treino editáveis
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-rose-500" size={24} /> Agendas de treino semanais
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-rose-500" size={24} /> Suporte humano (nada de robôs)
              </li>
            </ul>
          </div>

          <button 
            onClick={irParaOferta}
            className="w-full md:w-auto bg-white text-neutral-900 text-lg font-black uppercase tracking-widest px-12 py-5 rounded-full hover:bg-rose-600 hover:text-white transition-all shadow-xl"
          >
            VER OS PLANOS DISPONÍVEIS
          </button>
        </div>
      </section>

      {/* Rodapé e Avisos Legais (Blindagem Google/TikTok Ads) */}
      <footer className="bg-neutral-950 py-16 text-center px-6">
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-8 text-white/40 text-[11px] font-medium leading-relaxed uppercase tracking-widest">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
          <p className="max-w-2xl mx-auto mb-4">
            &copy; 2026 Natflix Fitness - Todos os direitos reservados.
          </p>
          <p className="max-w-3xl mx-auto opacity-50 lowercase">
            Este site não faz parte do site do Google, TikTok ou Facebook Inc. Além disso, este site não é endossado pelo Google, TikTok ou Facebook de nenhuma maneira. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </main>
  );
}