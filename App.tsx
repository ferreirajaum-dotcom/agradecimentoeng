import React from 'react';
import { Background } from './components/Background';
import { GlitchText } from './components/GlitchText';
import { HolographicCard } from './components/HolographicCard';
import { motion } from 'framer-motion';
import { 
  Check, 
  Mountain, 
  Mail, 
} from 'lucide-react';

const AUTHOR = {
  name: "Robert Oliveira",
  role: "Engenheiro de Sistemas | Autor",
  image: "https://i.postimg.cc/prMvshLr/robert-oliveira-k-GY7ACl-U.png",
};

export default function App() {
  return (
    <main className="min-h-screen text-brand-muted selection:bg-brand-gold selection:text-brand-dark font-sans overflow-x-hidden bg-brand-dark flex flex-col">
      <Background />

      {/* Navigation - Minimalist */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 glass-panel border-b border-white/5"
      >
        <div className="w-full max-w-6xl mx-auto flex justify-center md:justify-between items-center">
          <div className="flex items-center gap-3 text-brand-gold font-display font-bold text-base md:text-lg tracking-[0.2em] cursor-pointer opacity-90">
            <Mountain className="w-5 h-5" />
            <span>ENGENHARIA DO DESTINO</span>
          </div>
          {/* Status Indicator hidden on small screens */}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-brand-gold/60 border border-brand-gold/20 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
            STATUS: CONFIRMADO
          </div>
        </div>
      </motion.nav>

      <div className="flex-grow flex flex-col items-center justify-center pt-28 pb-20 px-4 md:px-6 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 bottom-0 left-[calc(50%-42rem)] w-px bg-white/5 z-0 hidden 2xl:block"></div>
        <div className="absolute top-0 bottom-0 right-[calc(50%-42rem)] w-px bg-white/5 z-0 hidden 2xl:block"></div>

        <div className="w-full max-w-3xl mx-auto space-y-12 z-10 relative">
          
          {/* Header Section */}
          <div className="text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-brand-gold/20 bg-brand-gold/5 text-brand-gold font-mono text-[10px] md:text-xs tracking-[0.3em] backdrop-blur-md uppercase mb-2"
            >
              <Check className="w-3 h-3" />
              SOLICITAÇÃO RECEBIDA
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-brand-text leading-[0.95]">
                <GlitchText text="OBRIGADO" /> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-gold via-[#E5C575] to-[#8A6A2E]">
                  POR SEGUIR
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-brand-muted font-light max-w-xl mx-auto leading-relaxed"
            >
              Seu interesse foi registrado no sistema. <br className="hidden md:block"/>
              Você deu um passo importante para a construção do seu futuro.
            </motion.p>
          </div>

          {/* Email Confirmation Card */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
          >
             <HolographicCard className="p-8 md:p-12 !bg-brand-card/40 border-brand-gold/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-40 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50" />
                
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10">
                  <div className="w-20 h-20 rounded-full bg-brand-dark border border-brand-gold/20 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(212,169,78,0.1)]">
                    <Mail className="w-8 h-8 text-brand-gold animate-pulse" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-display font-bold text-brand-text">Verifique seu E-mail</h3>
                    <p className="text-brand-muted font-light leading-relaxed">
                      Enviamos uma mensagem de confirmação para sua caixa de entrada. <br className="hidden md:block" />
                      Fique atento aos próximos comunicados da <span className="text-brand-gold/80">Engenharia do Destino</span> para atualizações sobre o manual.
                    </p>
                  </div>
                </div>
             </HolographicCard>
          </motion.div>

          {/* Enhanced Author Quote Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12 text-center border-t border-white/5 mt-16"
          >
             <div className="flex flex-col items-center gap-8">
                {/* Author Image with improved presentation */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-xl group-hover:bg-brand-gold/30 transition-all duration-700 opacity-60"></div>
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-b from-brand-gold to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-brand-card relative z-10">
                            <img 
                                src={AUTHOR.image} 
                                alt={AUTHOR.name} 
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4 max-w-2xl mx-auto px-4">
                   <p className="text-xl md:text-2xl font-serif italic text-brand-muted/80 leading-relaxed">
                      "Não é sobre a velocidade com que você sobe a montanha, mas sobre a clareza de saber por que está subindo."
                   </p>
                   <div className="flex flex-col items-center gap-1">
                      <span className="text-brand-gold font-display font-bold tracking-wide uppercase text-sm">{AUTHOR.name}</span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted/40">{AUTHOR.role}</span>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>

      <footer className="py-8 text-center bg-black/50 backdrop-blur-md">
        <p className="text-[10px] font-mono text-brand-muted/30 tracking-[0.3em] uppercase">
           ENG_DESTINO // 2026
        </p>
      </footer>
    </main>
  );
}
