import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
// @ts-ignore
import skyBg from "../assets/images/sky_background_hero_1777273319964.png";

export default function Hero() {
  const navItems = [
    { id: "01", name: "Обо мне & Путь", href: "#about", color: "bg-brand-pink", textColor: "text-brand-grey" },
    { id: "02", name: "Кейсы", href: "#portfolio", color: "bg-brand-blue", textColor: "text-white" },
  ];

  return (
    <section 
      className="min-h-screen p-6 md:p-12 flex flex-col items-center justify-center bg-brand-light-blue relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${skyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Soft Overlays for Depth */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
      
      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-24 right-[15%] text-white/40 pointer-events-none"
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={120} />
      </motion.div>

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 z-10 pt-20">
        
        {/* Profile Visual - Soft Cloud Integration */}
        <div className="lg:col-span-5 relative flex items-center justify-center order-2 lg:order-1 mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Ethereal Glow */}
            <div className="absolute inset-0 bg-brand-pink/30 blur-[80px] rounded-full scale-125" />
            
            <div className="relative z-10">
              <div className="aspect-[4/5] w-[280px] md:w-[400px] lg:w-[450px] relative">
                {/* Image with Soft Masking */}
                <div 
                  className="w-full h-full rounded-[4rem] overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                  }}
                >
                  <img 
                    src="/assets/hero_main.png" 
                    alt="Daria Mamaeva" 
                    className="w-full h-full object-cover transition-transform duration-3000 hover:scale-105 contrast-[0.95]"
                  />
                </div>
                
                {/* Floating Labels - Softened */}
                <div className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-xl px-6 py-2 rounded-full border border-white/40 shadow-sm">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">Strategy & PR</p>
                </div>
              </div>
            </div>

            {/* Sticker Style Element - Softened */}
            <motion.div 
              className="absolute bottom-12 -left-12 bg-white text-brand-blue px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.5em] shadow-xl border border-brand-blue/10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
               DARIA M.
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-6 mb-8">
                <span className="h-[1px] w-12 bg-brand-blue/40 rounded-full" />
                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-blue/60">
                  PR STRATEGIST • CREATIVE DIRECTOR
                </p>
              </div>

              <h1 className="hero-title text-brand-charcoal tracking-[-0.08em]">
                <span className="block mb-2 text-brand-blue/80 drop-shadow-sm">Дарья</span>
                <div className="flex items-baseline flex-wrap gap-x-4 gap-y-2">
                  <span className="relative">
                    Мамаева
                    <span className="absolute -bottom-2 left-0 w-full h-4 bg-brand-pink/20 -z-10 rounded-full blur-[2px]" />
                  </span>
                </div>
              </h1>
            </div>

            <p className="text-2xl md:text-4xl font-black text-brand-charcoal/80 leading-[1.1] max-w-2xl font-display uppercase tracking-[-0.04em]">
              Я знаю, как <span className="text-brand-vibrant-pink/80 italic">упаковать</span> ваш бизнес, кратно <span className="serif-italic text-brand-blue/80">увеличить охваты</span> и сэкономить до 60% бюджета на виральном контенте.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-pink text-white px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 shadow-[0_15px_30px_-10px_rgba(255,196,225,0.6)] hover:bg-brand-vibrant-pink transition-all"
              >
                <span>Кейсы</span>
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-light-blue text-brand-blue px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 shadow-[0_15px_30px_-10px_rgba(145,176,212,0.3)] border border-brand-blue/20"
              >
                <span>Обо мне</span>
                <Sparkles size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee - Softened for the new aesthetic */}
      <div className="absolute bottom-0 left-0 w-full bg-white/40 backdrop-blur-md text-brand-blue/30 py-6 border-t border-white/50">
        <motion.div 
          className="flex gap-20 font-black text-[10px] uppercase tracking-[1em]"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {Array(10).fill("STRATEGY • CREATIVITY • REPUTATION • GROWTH • VISIBILITY • ").map((s, i) => (
            <span key={i} className={i % 2 === 0 ? "text-brand-pink/60" : ""}>{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
