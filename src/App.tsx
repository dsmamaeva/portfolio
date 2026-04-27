/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import { 
  Mail, Phone, Instagram, Send, ExternalLink, ArrowRight, Sparkles, ChevronDown, X, 
  Headphones, Map as MapIcon, Layout, Grid, Video, Film, Activity, Zap, Camera, 
  LineChart, BarChart, Newspaper, Paperclip 
} from "lucide-react";
import Markdown from "react-markdown";
import { experienceData } from "./data/experience";
import { articlesData } from "./data/articles";
// @ts-ignore
import skyBg from "./assets/images/sky_background_hero_1777273319964.png";

const Section = ({ id, title, number, children, className = "", variant = "light" }: { id: string, title: string, number: string, children: React.ReactNode, className?: string, variant?: "light" | "dark" | "pink" | "blue" | "light-blue" }) => {
  const bgStyles = {
    light: "bg-white/40 backdrop-blur-md text-brand-grey",
    dark: "bg-brand-blue/90 text-white backdrop-blur-lg",
    pink: "bg-brand-pink/50 text-brand-charcoal backdrop-blur-md",
    blue: "bg-brand-blue/40 text-brand-charcoal backdrop-blur-md",
    "light-blue": "bg-brand-light-blue/60 text-brand-grey backdrop-blur-md"
  };

  const titleStyles = {
    light: "text-brand-blue",
    dark: "text-white",
    pink: "text-brand-vibrant-pink",
    blue: "text-brand-blue",
    "light-blue": "text-brand-blue"
  };

  const accentStyles = {
    light: "text-brand-vibrant-pink/80",
    dark: "text-brand-pink",
    pink: "text-white",
    blue: "text-brand-vibrant-pink/80",
    "light-blue": "text-brand-vibrant-pink/80"
  };

  return (
    <section id={id} className={`py-40 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden ${bgStyles[variant]} ${className}`}>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`font-sans font-black text-xs uppercase tracking-[0.8em] mb-8 block opacity-40 ${titleStyles[variant]}`}>
              STAGE {number}
            </span>
            <h2 className={`font-sans font-black text-7xl md:text-[10rem] leading-[0.75] uppercase tracking-tighter mb-6 ${titleStyles[variant]}`}>
              {title.split(' ')[0]} <br />
              <span className={`serif-italic ${accentStyles[variant]}`}>
                {title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
          </motion.div>
          <div className="hidden lg:block">
            <motion.div 
              className={`w-40 h-40 rounded-full border-4 border-dashed flex items-center justify-center p-6 ${variant === 'dark' ? 'border-white/20 text-white/20' : 'border-brand-pink/30 text-brand-pink/40'}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={60} />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Dynamic Decorations */}
      <div className={`absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-20 ${variant === 'dark' ? 'bg-brand-pink' : 'bg-brand-blue'}`} />
      <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[120px] opacity-20 ${variant === 'dark' ? 'bg-brand-blue' : 'bg-brand-pink'}`} />
    </section>
  );
};

const ProjectTwoDetails = () => {
  const [activeTab, setActiveTab] = useState('b2b-site');

  const tabs = [
    { id: 'b2b-site', label: 'B2B Сайт & AI' },
    { id: 'tg-strategy', label: 'Telegram Meet Market' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'b2b-site':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex gap-2">
                   <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">AI-Driven Development</span>
                </div>
                <h4 className="text-6xl font-black text-brand-grey tracking-tight italic max-w-5xl">Разработка сайта на базе искусственного интеллекта для промышленного сектора (B2B)</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Задача</span>
                      <p className="text-sm text-brand-grey/80 leading-relaxed font-bold">Разработка лендинга для привлечения крупных заказчиков в сжатые сроки (2 недели).</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Решение</span>
                      <p className="text-sm text-brand-grey/80 leading-relaxed italic mb-3">Смена классического цикла разработки на AI-стек (Gemini, Perplexity Pro, CodiaAI):</p>
                      <div className="space-y-2">
                         {[
                           "01 Анализ текущего брендбука и конкурентный анализ",
                           "02 Создание прототипа будущего сайта в Figma",
                           "03 Генерация кода и визуала под управленческим контролем",
                           "04 Выгрузка и внесение правок в код на GitHub Pages"
                         ].map((step, i) => (
                           <div key={i} className="flex gap-2 items-start">
                             <span className="text-[10px] font-black text-brand-pink mt-0.5">{step.slice(0, 2)}</span>
                             <span className="text-xs text-brand-grey/70 font-medium leading-tight">{step.slice(3)}</span>
                           </div>
                         ))}
                      </div>
                    </div>
                    <div className="p-6 bg-brand-pink/5 rounded-[2rem] border-l-4 border-brand-pink/30 relative overflow-hidden group/role transition-all hover:shadow-lg hover:shadow-brand-pink/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink/60 block mb-1">Моя Роль</span>
                      <p className="text-sm text-brand-grey font-bold">Архитектор процессов / разработчик</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 justify-center">
                    <div className="p-10 rounded-[3rem] bg-brand-charcoal text-center text-white shadow-2xl">
                       <div className="text-7xl font-black text-brand-pink mb-2">↘ 60%</div>
                       <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Эффект</div>
                       <p className="text-[10px] mt-4 opacity-50 font-medium italic">Сокращение производственного цикла при сохранении качества</p>
                    </div>
                    <a href="https://dsmamaeva.github.io/lvt_test/index.html" target="_blank" rel="noreferrer" className="mx-auto inline-flex items-center gap-2 px-8 py-3 bg-brand-pink text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-vibrant-pink transition-colors w-max">
                      Смотреть Live Demo <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm transition-all hover:shadow-md relative group">
                 <img 
                   src="assets/lvt1.png" 
                   alt="Брендбук" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 left-4 px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                   Брендбук
                 </div>
              </div>
              <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm transition-all hover:shadow-md relative group">
                 <img 
                   src="assets/lvt2.png" 
                   alt="Предварительный проект в Figma" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 left-4 px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                   Предварительный проект в Figma
                 </div>
              </div>
            </div>
          </div>
        );
      case 'tg-strategy':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex gap-2">
                   <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">Visual Identity</span>
                </div>
                <h4 className="text-6xl font-black text-brand-grey tracking-tight italic max-w-5xl">Визуальная стратегия для Telegram Meet Market</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Задача</span>
                      <p className="text-sm text-brand-grey/80 leading-relaxed font-bold">Создание единой визуальной системы, транслирующей экспертность и статус.</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Результат</span>
                      <p className="text-sm text-brand-grey/80 leading-relaxed italic">Разработка гайдлайнов и архитектуры контента, выдержанного в едином стиле. Внедрение техник вовлекающего дизайна для повышения кликабельности (CTR) постов.</p>
                    </div>
                    <div className="p-6 bg-brand-pink/5 rounded-[2rem] border-l-4 border-brand-pink/30 relative overflow-hidden group/role transition-all hover:shadow-lg hover:shadow-brand-pink/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink/60 block mb-1">Моя Роль</span>
                      <p className="text-sm text-brand-grey font-bold">Арт-менеджер: от концепции эстетики до создания готовых паков для постинга.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 justify-center lg:pt-4">
                    <div className="p-10 rounded-[3rem] bg-brand-charcoal text-center text-white shadow-xl shadow-brand-charcoal/20">
                       <div className="text-7xl font-black mb-2 text-brand-pink">+40%</div>
                       <div className="text-xs uppercase font-black tracking-widest opacity-90">ER (Engagement Rate)</div>
                       <div className="mt-4 text-xs font-medium border-t border-white/20 pt-4 opacity-70 italic">Рост вовлеченности за счет чистоты композиции и четких акцентов</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
              {Array.from({ length: 15 }).map((_, idx) => (
                <div key={idx} className="aspect-[1024/1280] bg-white border border-brand-charcoal/10 rounded-[1rem] overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 relative group">
                   <img 
                     src={`/assets/m${idx + 1}.JPG`} 
                     alt={`Template ${idx + 1}`} 
                     className="w-full h-full object-cover"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-brand-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                     <span className="text-[8px] font-black uppercase tracking-widest text-white drop-shadow-md">
                       Layout Variant {idx + 1}
                     </span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 mt-12 animate-in fade-in duration-700">
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-brand-charcoal text-white shadow-lg' : 'bg-transparent text-brand-charcoal/40 hover:text-brand-charcoal border border-brand-charcoal/10'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
};

const ProjectThreeDetails = () => {
  const [activeTab, setActiveTab] = useState('tetto-feb14');

  const tabs = [
    { id: 'tetto-feb14', label: '14 февраля в Tétto' },
    { id: 'simple-wine', label: 'Simple Wine' },
    { id: 'rbc-kazan', label: 'РБК в Казани' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'tetto-feb14':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex gap-2">
                  <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">Event Marketing</span>
                </div>
                <h4 className="text-6xl font-black text-brand-charcoal tracking-tight italic max-w-4xl">Коммуникационная кампания и Event-механика «14 февраля в Tétto»</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Проблема</span>
                        <p className="text-sm text-brand-charcoal/80 leading-relaxed font-medium">Высокая загрузка в праздничные дни обычно носит разовый характер и не гарантирует возвращаемость. Задача стояла в том, чтобы превратить транзакционный визит (ужин) в глубокий эмоциональный опыт.</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Решение</span>
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-1.5 shrink-0" />
                            <p className="text-sm text-brand-charcoal/80 leading-relaxed italic"><strong className="font-black not-italic uppercase text-[10px] tracking-widest text-brand-pink block mb-1">Концепция «Место, где рождаются истории любви»</strong> Смена фокуса с «продажи столов» на создание иммерсивной среды.</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-1.5 shrink-0" />
                            <p className="text-sm text-brand-charcoal/80 leading-relaxed italic"><strong className="font-black not-italic uppercase text-[10px] tracking-widest text-brand-pink block mb-1">Игровая механика</strong> Интеграция парной активности (написание истории любви), увеличивающая время контакта с брендом.</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-1.5 shrink-0" />
                            <p className="text-sm text-brand-charcoal/80 leading-relaxed italic"><strong className="font-black not-italic uppercase text-[10px] tracking-widest text-brand-pink block mb-1">PR & SMM</strong> Привлечение 6 партнеров, работа с блогерами и Reels с охватом 133К+.</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Результат</span>
                        <p className="text-sm text-brand-charcoal/80 leading-relaxed font-bold italic">Рекордная выручка за 3 года. 40+ органических отметок гостей. Нулевой рекламный бюджет.</p>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-brand-pink/5 rounded-[2rem] border-l-4 border-brand-pink/30 relative overflow-hidden group/role transition-all hover:shadow-lg hover:shadow-brand-pink/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink/60 block mb-1">Моя Роль</span>
                      <p className="text-sm text-brand-charcoal font-bold">Идеологическая проработка события. Участие в дистрибуции контента.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 justify-center lg:pt-4">
                    <div className="p-10 rounded-[3rem] bg-brand-charcoal text-center text-white shadow-2xl relative overflow-hidden">
                       <div className="text-7xl font-black text-brand-pink mb-2">100%</div>
                       <div className="text-xs uppercase font-black tracking-widest opacity-80">Sold Out</div>
                       <p className="text-[10px] mt-4 opacity-50 font-medium italic">всех столов в праздничный вечер</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual Placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm transition-all hover:shadow-md relative group">
                 <img 
                   src="assets/t1.jpeg" 
                   alt="Event Photo 01" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 left-4 px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                   Event Visual 01
                 </div>
              </div>
              <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm transition-all hover:shadow-md relative group">
                 <img 
                   src="assets/t2.jpeg" 
                   alt="Event Photo 02" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 left-4 px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                   Event Visual 02
                 </div>
              </div>
            </div>
          </div>
        );
      case 'simple-wine':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-8">
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-wider rounded-full">PR & Experience Design</span>
              </div>
              <h4 className="text-6xl font-black text-brand-charcoal tracking-tight italic max-w-4xl">Летние винные сезоны Simple Wine</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Проблема & Запорос</span>
                    <p className="text-sm text-brand-charcoal/80 leading-relaxed font-medium">Укрепление имиджа в премиум-сегменте. Необходимость эффективного охвата целевой, платежеспособной аудитории через закрытые оффлайн-события в Москве и Петербурге без прямых маркетинговых вложений.</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Действие & Решение</span>
                    <p className="text-sm text-brand-charcoal/80 leading-relaxed italic">Спроектировала опыт мероприятия. Формирование пула лидеров мнений, управление репутацией в реальном времени, координация экспертов и масштабная PR-поддержка.</p>
                  </div>
                </div>
                <div className="p-6 bg-brand-blue/5 rounded-[2rem] border-l-4 border-brand-blue/30 relative overflow-hidden group/role transition-all hover:shadow-lg hover:shadow-brand-blue/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue block mb-1">Моя Роль</span>
                  <p className="text-sm text-brand-charcoal font-bold">Бренд-стратег и организатор: координация цикла от идеи до PR-сопровождения, работа со СМИ и ЛОМами.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm transition-all hover:shadow-md relative group">
                   <img 
                     src={`/assets/s${num}.png`} 
                     alt={`Simple Wine Event ${num}`} 
                     className="w-full h-full object-cover"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-4 left-4 px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                     Event Moment 0{num}
                   </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'rbc-kazan':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-8">
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-wider rounded-full">Business Event</span>
              </div>
              <h4 className="text-6xl font-black text-brand-charcoal tracking-tight italic max-w-5xl">Бизнес-день РБК в Казани</h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Задача</span>
                      <p className="text-sm text-brand-charcoal/80 leading-relaxed font-bold italic">Создание коммуникационной площадки для диалога бизнеса и власти.</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-2">Действия & Ответственность</span>
                      <div className="space-y-3">
                        {[
                          "Координирование проекта «Бизнес-день в Казани 2026»: привлечение пула технологических и бизнес-партнеров.",
                          "Исследование экосистемы РБК для модели регионального развития и создания медиапродуктов.",
                          "Подготовка экспертных материалов, рерайт сложных новостных сводок и мониторинг инфополя.",
                          "Продвижение экспертности спикеров холдинга и работа с имиджем бренда в региональной деловой среде.",
                          "Формирование B2B-партнерств и вовлечения локального бизнеса в экосистему РБК.",
                          "Анализ инвестиционной привлекательности регионов и взаимодействие с девелоперами.",
                          "Генерация экспертной фактуры для публикаций, работа с блогами компаний на платформе РБК.",
                          "Конкурентный анализ и разработка дорожных карт (roadmaps) для стейкхолдеров."
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-start group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0 transition-transform group-hover/item:scale-125" />
                            <p className="text-xs text-brand-charcoal/70 leading-relaxed font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Ключевые результаты</span>
                      <p className="text-sm text-brand-charcoal/80 leading-relaxed font-bold italic">70 000+ просмотров. База из 100+ региональных компаний. Roadmap масштабирования проекта.</p>
                    </div>
                  </div>
                  <div className="p-6 bg-brand-blue/5 rounded-[2rem] border-l-4 border-brand-blue/30 relative overflow-hidden group/role transition-all hover:shadow-lg hover:shadow-brand-blue/5">
                    <p className="text-sm text-brand-charcoal font-bold">Роль: Менеджер проектов</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 justify-center lg:pt-4">
                  <div className="p-10 rounded-[3rem] bg-brand-charcoal text-center text-white shadow-2xl relative overflow-hidden">
                     <div className="text-7xl font-black text-brand-blue mb-2">70K+</div>
                     <div className="text-xs uppercase font-black tracking-widest opacity-80">Unique Views</div>
                     <p className="text-[10px] mt-4 opacity-50 font-medium italic">KPI по дистрибуции выполнен на 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 mt-12 animate-in fade-in duration-700">
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-brand-charcoal text-white shadow-lg' : 'bg-transparent text-brand-charcoal/40 hover:text-brand-charcoal border border-brand-charcoal/10'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
};



const ProjectFourDetails = () => {
  const [activeTab, setActiveTab] = useState(articlesData[0]?.id || '');

  return (
    <div className="space-y-12 mt-12 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <div className="flex gap-2">
          <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-wider rounded-full">PR & Media</span>
        </div>
        <h4 className="text-4xl font-black text-brand-charcoal tracking-tight italic">Работа со смыслами: от аналитики до PR-колонок</h4>
        <div className="space-y-4">
          <p className="text-sm text-brand-charcoal/80 leading-relaxed font-normal">
            Сколько себя помню, всегда любила читать и писать. В 17 лет последнее решила сделать делом жизни и поступила учиться на журналиста. За те шесть лет, что минули с даты описываемых событий, сотрудничала с крупными игроками медиа-рынка: РБК, Комсомольская Правда, Известия, Авторадио; вела колонки для НИУ ВШЭ и ИТМО; создавала имиджевые тексты для петербургских ресторанов Chelentano, Tetto, Balcon, Infuse, Текстура; работала с первыми лицами компаний и лидерами мнений.
          </p>
          <p className="text-sm text-brand-charcoal/80 leading-relaxed italic font-medium">
            Как писал Бродский: «Биография писателя — в покрое его языка». Благодаря моему обширному опыту в работе с текстами, у меня всегда найдется меткое живое слово под самый изощренный запрос и для решения любой задачи.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {articlesData.map(art => (
          <button
            key={art.id}
            onClick={() => setActiveTab(art.id)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === art.id ? 'bg-brand-blue text-white shadow-lg' : 'bg-transparent text-brand-charcoal/40 hover:text-brand-charcoal border border-brand-charcoal/10'}`}
          >
            {art.type} - {art.source}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {articlesData.map(art => activeTab === art.id && (
          <div key={art.id} className="animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Layout Wrapper for Classic Style Articles */}
            {['rbc', 'perfume', 'itmo', 'report', 'hse', 'b2b'].includes(art.id) ? (
              <div className="relative">
                {/* Unified Vertical Bar */}
                <div className="absolute -left-8 top-0 bottom-0 w-1 bg-brand-blue/30 hidden lg:block" />
                
                <div className="space-y-12">
                  {/* Header Section */}
                  <div>
                    <div className="flex items-center gap-8 mb-8">
                      <span className="px-6 py-2 bg-brand-charcoal text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full shadow-2xl">
                        {art.category || art.type}
                      </span>
                      <div className="h-[2px] flex-1 bg-brand-charcoal/10" />
                      <span className="text-[11px] font-black text-brand-charcoal/40 uppercase tracking-[0.4em]">
                        {art.source}
                      </span>
                    </div>
                    
                    {art.excerpt && !['rbc', 'itmo', 'perfume', 'report', 'hse'].includes(art.id) && (
                      <p className="text-2xl font-serif italic text-brand-charcoal border-l-4 border-brand-blue pl-6 mb-8">
                        {art.excerpt}
                      </p>
                    )}

                    {art.role && (
                      <div className="p-6 bg-[#DBEEFE] rounded-[2rem] border-l-4 border-brand-blue/30 relative overflow-hidden group/role transition-all hover:shadow-lg hover:shadow-brand-blue/5">
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue/60 block mb-1">Роль</span>
                          <p className="text-sm text-brand-charcoal font-bold">{art.role}</p>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="text-brand-charcoal">
                    {art.content}
                  </div>
                </div>
              </div>
            ) : (
              /* Default/Custom Layout for other articles */
              <div className="space-y-12">
                <div className="mb-12">
                  <div className="flex items-center gap-8 mb-8">
                    <span className="px-6 py-2 bg-brand-charcoal text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full shadow-2xl">
                      {art.category || art.type}
                    </span>
                    <div className="h-[2px] flex-1 bg-brand-charcoal/10" />
                    <span className="text-[11px] font-black text-brand-charcoal/40 uppercase tracking-[0.4em]">
                      {art.source}
                    </span>
                  </div>
                  
                  {art.excerpt && !['rbc', 'itmo', 'perfume', 'report', 'hse'].includes(art.id) && (
                    <p className="text-2xl font-serif italic text-brand-charcoal border-l-4 border-brand-blue pl-6 mb-8">
                      {art.excerpt}
                    </p>
                  )}

                  {art.role && (
                    <div className="p-6 bg-[#DBEEFE] rounded-[2rem] border-l-4 border-brand-blue/30 relative overflow-hidden group/role transition-all hover:shadow-lg hover:shadow-brand-blue/5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue/60 block mb-1">Роль</span>
                        <p className="text-sm text-brand-charcoal font-bold">{art.role}</p>
                    </div>
                  )}
                </div>

                <div className="text-brand-charcoal">
                  {art.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedProject && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [expandedProject]);

const ProjectOneDetails = () => {
  const [activeTab, setActiveTab] = useState('horeca-smm');

  const tabs = [
    { id: 'horeca-smm', label: 'HoReCa SMM' },
    { id: 'kp-digital', label: 'КП Digital' },
    { id: 'tiktok-meet', label: 'TikTok Meet Market' }
  ];

  const renderContent = () => {
    switch (activeTab) {
        case 'horeca-smm':
        return (
          <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-top-4 duration-500 pb-12">
            {/* HoReCa Case */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex gap-2">
                  <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">SMM & Lifestyle</span>
                </div>
                <h4 className="text-4xl font-black text-brand-grey tracking-tight italic">Кейс 01. BALCON (Лаунж-бар & ресторан): Перезагрузка через ситуативный сторителлинг</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Проблема</span>
                      <p className="text-sm text-brand-grey/80 leading-relaxed font-bold">Стандартный «фуд-порн» и обзоры интерьера перестали генерировать охваты и не формировали эмоциональную привязанность к бренду. Аудитория пресытилась «идеальной картинкой».</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Решение & Креативная стратегия</span>
                      <ul className="space-y-4">
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Внедрение персонажных архетипов:</strong> Создание дуэта «Зинка и Людка» – ироничных, живых героинь, транслирующих ценности отдыха «без фильтров». Это позволило очеловечить бренд и выделиться на фоне выхолощенных аккаунтов конкурентов.</li>
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Тональность (ToV) «на грани»:</strong> Сознательный уход в провокативный, но интеллигентный юмор. Использование триггеров узнаваемости (архетипы «соседок», понятный жизненный контекст), что спровоцировало мощный виральный эффект.</li>
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Интеграция продукта:</strong> Продукт (напитки, кухня, терраса) вплетался в сюжет не как объект продажи, а как естественная декорация к жизни героев, что повысило нативность рекламы.</li>
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Спецпроекты:</strong> Для Reels к Дню рождения лаунжа была выбрана стилистика «оперативной съемки/репортажа», что создало интригу и выделило инфоповод из общего праздничного шума.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-8 rounded-[3rem] bg-brand-charcoal text-white shadow-xl relative overflow-hidden h-full flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-4 text-[10px] uppercase font-black tracking-widest opacity-30">Results</div>
                    <div className="space-y-8 w-full">
                      <div className="text-center">
                         <div className="text-5xl font-black mb-1 text-brand-pink">180 000</div>
                         <div className="text-[10px] uppercase font-black tracking-widest opacity-80 decoration-brand-pink decoration-2 underline-offset-4 underline">Виральный охват первого Reels</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center border-r border-white/10">
                           <div className="text-3xl font-black mb-1">10 000+</div>
                           <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Лайков</div>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl font-black mb-1">146K+</div>
                           <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Чистый охват</div>
                        </div>
                      </div>
                      <p className="text-[10px] italic opacity-60 font-medium text-center border-t border-white/10 pt-6">
                        Последовательный сторителлинг сформировал ядро лояльной аудитории.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  {[
                    "https://rutube.ru/play/embed/8c3706b1b4658e3d7b669a888207e218/?p=4QZRZ-Rt453CSrtVreeDCg",
                    "https://rutube.ru/play/embed/61133584af3b62c31cbb01c4344e4049/?p=YnumSPD7xcpdj7pHmxGGHQ",
                    "https://rutube.ru/play/embed/851ca24b500298f2140165d75e4dba43/?p=Cy1L8hpEw2hgHCMTmReLQw"
                  ].map((src, idx) => (
                    <div key={idx} className="aspect-[9/16] bg-brand-charcoal/5 rounded-[2.5rem] overflow-hidden border-2 border-brand-charcoal/5 shadow-inner group transition-all hover:border-brand-pink/20 hover:shadow-xl">
                      <iframe 
                        src={src}
                        frameBorder="0" 
                        allow="clipboard-write; autoplay" 
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Case 02: Textura */}
              <div className="pt-16 border-t border-brand-charcoal/10 space-y-12">
                <div className="space-y-6">
                  <div className="flex gap-2">
                    <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">SMM & Brand Strategy</span>
                  </div>
                  <h4 className="text-4xl font-black text-brand-grey tracking-tight italic">Кейс 02 «Текстура» (Гастропекарня): Масштабирование локального бренда через психологические триггеры</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Концепция</span>
                        <p className="text-sm text-brand-grey/80 leading-relaxed font-bold">Переход от демонстрации продукта к трансляции стиля жизни и общих ценностей. В основу легли «теплые», живые истории с ноткой юмора, которые превращают пекарню из точки продаж в «третье место» – пространство, где гостя понимают без слов.</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Реализованные механики</span>
                        <ul className="space-y-4">
                          <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Работа с поведенческими паттернами:</strong> Использование жизненного юмора для снижения барьера входа для новых гостей и укрепления чувства сопричастности у постоянных.</li>
                          <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Storytelling как инструмент R&D (Product Development).</strong> В качестве примера взяла видео-интервью с бариста о создании авторского «Татарского чая». Через личную историю о детстве и семейных традициях мы не просто презентовали напиток, а создали вокруг него эмоциональный капитал и продали не чай с молоком, а "вкус детства" и "заботу", что идеально вписалось в архетип бренда – Хранитель</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-brand-charcoal/5 rounded-[2rem] border-l-4 border-brand-charcoal/20">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-1">Моя роль</span>
                        <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                          Адаптация глобальных визуальных трендов (мемы, интервью) под локальный культурный код пекарни. Проектирование сценариев, вызывающих желание поделиться.
                        </p>
                      </div>
                    </div>

                    <div className="p-8 rounded-[3rem] bg-brand-pink text-white shadow-xl relative overflow-hidden h-full flex flex-col items-center justify-center">
                      <div className="absolute top-4 right-4 text-[10px] uppercase font-black tracking-widest opacity-30">Results</div>
                      <div className="space-y-8 w-full text-center">
                        <div>
                           <div className="text-5xl font-black mb-1">839 000+</div>
                           <div className="text-[10px] uppercase font-black tracking-widest opacity-80 decoration-white decoration-2 underline-offset-4 underline">Виральный охват первого рилс</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center border-r border-white/10">
                             <div className="text-3xl font-black mb-1">25 000+</div>
                             <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Лайков</div>
                          </div>
                          <div className="text-center">
                             <div className="text-3xl font-black mb-1">478K</div>
                             <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Охват флагмана</div>
                          </div>
                        </div>
                        <p className="text-[10px] italic opacity-80 font-medium border-t border-white/10 pt-6">
                          Вместо случайных «залетов» была внедрена контентная воронка, основанная на миксе юмора и искренности. Это позволило систематизировать производство виральных Reels, что снизило стоимость привлечения лояльного подписчика.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  {[
                    "https://rutube.ru/play/embed/8469d01ca1992ba30fe1c90ed4cf8755/?p=eigfTz9CHy1SJQfiUIRtSA",
                    "https://rutube.ru/play/embed/1ccc8b4494e8bff5937155f6f03a8f4d/?p=13HPejcEIfdyRKw29TGX5g",
                    "https://rutube.ru/play/embed/6f81d6d2ebf6d7b909d40b1a55b30082/?p=Uja6dnLORLhLqaoQYqSx8w"
                  ].map((src, idx) => (
                    <div key={idx} className="aspect-[9/16] bg-brand-charcoal/5 rounded-[2.5rem] overflow-hidden border-2 border-brand-charcoal/5 shadow-inner group transition-all hover:border-brand-pink/20 hover:shadow-xl">
                      <iframe 
                        src={src}
                        frameBorder="0" 
                        allow="clipboard-write; autoplay" 
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'kp-digital':
        return (
          <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-top-4 duration-500 pb-12">
            {/* KP Case */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex gap-2">
                  <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-wider rounded-full">Digital Editorial</span>
                </div>
                <h4 className="text-4xl font-black text-brand-grey tracking-tight italic">Кейс 03. Ревитализация цифрового присутствия «Комсомольской правды»</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Проблема</span>
                      <p className="text-sm text-brand-grey/80 leading-relaxed font-bold">Запрос на новые форматы взаимодействия с аудиторией, увеличение органических охватов в Telegram-канале, увеличение числа подписчиков. </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Решение</span>
                      <ul className="space-y-4">
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Новый рубрикатор:</strong> Упор на интерактив и визуально привлекательный контент, меняющий восприятие консервативного бренда.</li>
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Ставка на контент:</strong> Его хочется переслать (как в личные сообщения, так и в другие каналы).</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-brand-blue/5 rounded-[2rem] border-l-4 border-brand-blue/30">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue/60 block mb-1">Моя Роль</span>
                      <p className="text-sm text-brand-grey font-bold">Digital-редактор / Стратег: проектирование контентной сетки и дистрибуция.</p>
                    </div>
                  </div>

                  <div className="p-8 rounded-[3rem] bg-brand-charcoal text-white shadow-xl relative overflow-hidden h-full flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-4 text-[10px] uppercase font-black tracking-widest opacity-30">Results</div>
                    <div className="space-y-8 w-full text-center">
                      <div className="flex flex-col items-center">
                         <div className="flex items-baseline gap-2">
                           <div className="text-3xl font-black text-white/40">7 138</div>
                           <ArrowRight size={16} className="text-brand-blue" />
                           <div className="text-5xl font-black text-brand-blue">9 394</div>
                         </div>
                         <div className="text-[10px] uppercase font-black tracking-widest opacity-80 mt-2">Целевых подписчиков</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center border-r border-white/10">
                           <div className="text-3xl font-black mb-1">70K+</div>
                           <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Уникальный охват</div>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl font-black mb-1">Federal</div>
                           <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Уровень спикеров</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                   <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm">
                      <img 
                        src='/assets/kp1.png' 
                        alt="Статистика ДО" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                   <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm">
                      <img 
                        src='/assets/kp2.png' 
                        alt="Статистика ПОСЛЕ" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'tiktok-meet':
        return (
          <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-top-4 duration-500 pb-12">
            {/* TikTok Case */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex gap-2">
                  <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">Viral Content Strategy</span>
                </div>
                <h4 className="text-4xl font-black text-brand-grey tracking-tight italic">Кейс 04. Кратное масштабирование бренда Meet Market в TikTok с нуля</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Проблема</span>
                      <p className="text-sm text-brand-grey/80 leading-relaxed font-bold">Стагнация аккаунта (14 подписчиков), отсутствие системы производства и дистрибуции. Контент не попадал в рекомендации из-за отсутствия четкого позиционирования и понимания триггеров платформы.</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Управленческое решение</span>
                      <ul className="space-y-4">
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Отказ от хаотичного постинга:</strong> В пользу гибридной модели “Польза + Юмор”. Использование ситуативного маркетинга.</li>
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">Внедрение аналитического цикла:</strong> Построение конвейера «Гипотеза → Быстрый продакшен → Анализ удержания → Масштабирование». Тестирование на первых 200–500 просмотрах.</li>
                        <li className="text-sm text-brand-grey/80 leading-relaxed italic"><strong className="font-bold">CTA-оптимизация:</strong> Добавление четких Call-to-Action (CTA) внутри роликов, что превратило случайных зрителей в активное комьюнити.</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-brand-pink/5 rounded-[2rem] border-l-4 border-brand-pink/30">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink/60 block mb-2">Моя Роль</span>
                      <ul className="space-y-2">
                        <li className="text-sm text-brand-grey font-bold">Разработка и внедрение SMM-стратегии с нуля.</li>
                        <li className="text-sm text-brand-grey font-bold">Управление циклом производства (сценарии, режиссура, аналитика, участие в съемках).</li>
                        <li className="text-sm text-brand-grey font-bold">Мониторинг трендов и их адаптация под бизнес-задачи.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-8 rounded-[3rem] bg-brand-charcoal text-white shadow-xl relative overflow-hidden h-full flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-4 text-[10px] uppercase font-black tracking-widest opacity-30">Results</div>
                    <div className="space-y-8 w-full text-center">
                      <div className="flex flex-col items-center">
                         <div className="text-5xl font-black text-brand-pink">x60</div>
                         <div className="text-[10px] uppercase font-black tracking-widest opacity-80 mt-2">Рост базы подписчиков</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center border-r border-white/10">
                           <div className="text-3xl font-black mb-1">1.7M+</div>
                           <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Орг. просмотры</div>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl font-black mb-1">45K</div>
                           <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Лайков</div>
                        </div>
                      </div>
                      <p className="text-[10px] opacity-60 font-medium italic border-t border-white/10 pt-4">
                        Каждый 10-й зритель делился контентом (4 500 репостов).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                   <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm">
                      <img 
                        src="assets/meet01.jpg" 
                        alt="Статистика DO" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                   <div className="aspect-video bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm">
                      <img 
                        src="assets/meet02.jpg" 
                        alt="Статистика POSLE" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                </div>

                {/* Video Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  {[
                    "https://rutube.ru/play/embed/2b35176ea7c4e19dfc3e3fb6aa104818/",
                    "https://rutube.ru/play/embed/48522d68e2c30097b6546d5b3ac02ca6/",
                    "https://rutube.ru/play/embed/50c4c229ed35b48d113f843d0deeba86/"
                  ].map((src, idx) => (
                    <div key={idx} className="aspect-[9/16] bg-brand-charcoal/5 rounded-[2.5rem] overflow-hidden border-2 border-brand-charcoal/5 shadow-inner group transition-all hover:border-brand-pink/20 hover:shadow-xl">
                      <iframe 
                        src={src}
                        frameBorder="0" 
                        allow="clipboard-write; autoplay" 
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Additional Stats Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  {[
                    "assets/стат1.png",
                    "assets/стат2.png",
                    "assets/стат3.png"
                  ].map((src, idx) => (
                    <div key={idx} className="aspect-[9/16] bg-white rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-sm transition-all hover:shadow-md">
                      <img 
                        src={src} 
                        alt={`Статистика ${idx + 1}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-brand-charcoal/5 rounded-[3rem]">
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 block mb-4">Бизнес-эффект</span>
                   <p className="text-sm text-brand-grey/80 leading-relaxed font-medium">Создан масштабируемый канал трафика с предсказуемым результатом. Стоимость охвата (CPV) снижена до нуля. Сформирован «цифровой актив» бренда, работающий на узнаваемость 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 mt-12 animate-in fade-in duration-700">
                <div className="flex flex-wrap justify-center gap-2">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-brand-charcoal text-white shadow-lg' : 'bg-transparent text-brand-charcoal/40 hover:text-brand-charcoal border border-brand-charcoal/10'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
      {renderContent()}
    </div>
  );
};

  const projects = [
    { 
      id: "01", 
      title: "Развитие медиа и охваты", 
      desc: "Масштабирование проектов и дистрибуция", 
      color: "bg-brand-blue/5", 
      textColor: "text-brand-blue",
      details: <ProjectOneDetails />
    },
    { 
      id: "02", 
      title: "Креативный продакшен & AI", 
      desc: "UI/UX, b2b-сайты и нейросети в производстве", 
      color: "bg-brand-blue/5", 
      textColor: "text-brand-blue",
      details: <ProjectTwoDetails />
    },
    { 
      id: "03", 
      title: "Архитектура событий", 
      desc: "Проектирование опыта и смыслов мероприятий", 
      color: "bg-brand-blue/5", 
      textColor: "text-brand-blue",
      details: <ProjectThreeDetails />
    },
    { 
      id: "04", 
      title: "Стратегические коммуникации", 
      desc: "Работа со словом: колонки, PR и гострайтинг", 
      color: "bg-brand-blue/5", 
      textColor: "text-brand-blue",
      details: <ProjectFourDetails />
    }
  ];

  return (
    <main className="bg-brand-light-blue/20 selection:bg-brand-blue/30 selection:text-brand-charcoal overflow-x-hidden min-h-screen relative">
      {/* Global Sky Background Overlay for the whole page */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{ 
          backgroundImage: `url(${skyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Floating Navbar inspired by reference */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/50 px-8 py-3 rounded-full shadow-[0_8px_32px_0_rgba(145,176,212,0.1)] flex justify-between items-center group">
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue/80">DARIA M.</span>
            <div className="hidden md:flex gap-6 uppercase text-[9px] font-bold tracking-[0.2em] text-brand-charcoal/40">
              <a href="#about" className="hover:text-brand-blue transition-colors">Обо мне</a>
              <a href="#portfolio" className="hover:text-brand-blue transition-colors">Кейсы</a>
              <a href="#contacts" className="hover:text-brand-blue transition-colors">Контакты</a>
            </div>
          </div>
          <a href="https://t.me/d_s_m" target="_blank" className="bg-brand-pink/80 hover:bg-brand-vibrant-pink text-white px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all shadow-sm">
            Связаться
          </a>
        </div>
      </nav>

      <Hero />

      {/* 01. Offer & Background */}
      <Section id="about" title="Обо мне" number="01" variant="light-blue">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Offer Context */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-grey/40 mb-6">Main Message</h3>
              <div className="text-2xl md:text-3xl text-brand-grey leading-tight font-black space-y-6">
                <p>
                  Я знаю, как упаковать ваш бизнес, <span className="text-brand-vibrant-pink italic">кратно увеличить охваты</span> и сэкономить до <span className="text-brand-vibrant-pink italic">60%</span> бюджета на виральном контенте.
                </p>
                <p className="text-xl md:text-2xl text-brand-grey/60 font-medium">Вот доказательства.</p>
              </div>
            </div>
            
            {/* Why me Block */}
         <div className="pt-10 border-t border-brand-charcoal/10">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-charcoal/30 mb-8">Почему я</h4>
            <ul className="text-lg text-brand-grey/80 leading-relaxed font-medium space-y-4">
               <li className="flex items-start gap-4">
                 <ArrowRight size={18} className="text-brand-vibrant-pink mt-1 shrink-0" />
                 <span><strong>Экспертиза:</strong> 4+ лет в медиапроизводстве и стратегических коммуникациях (РБК, Simple Wine, КП).</span>
               </li>
               <li className="flex items-start gap-4">
                 <ArrowRight size={18} className="text-brand-vibrant-pink mt-1 shrink-0" />
                 <span><strong>Образование:</strong> Магистр ВШЭ («Медиапроизводство и медиааналитика») — научный подход к управлению вниманием.</span>
               </li>
               <li className="flex items-start gap-4">
                 <ArrowRight size={18} className="text-brand-vibrant-pink mt-1 shrink-0" />
                 <span><strong>Опыт работы</strong> с крупными брендами: РБК, Simple Wine, Челентано и др.</span>
               </li>
               <li className="flex items-start gap-4">
                 <ArrowRight size={18} className="text-brand-vibrant-pink mt-1 shrink-0" />
                 <span><strong>AI-Native:</strong> Внедряю AI-стек в продакшен-цикл.</span>
               </li>
               <li className="flex items-start gap-4">
                 <ArrowRight size={18} className="text-brand-vibrant-pink mt-1 shrink-0" />
                 <span><strong>Фокус:</strong> Создание контентных экосистем, которые конвертируют смыслы в бизнес-показатели (охваты, лояльность, выручка).</span>
               </li>
            </ul>
         </div>

            {/* Detailed Skills & Ecosystem */}
            <div className="space-y-10">
               <div className="bg-white/40 p-10 rounded-[3.5rem] border border-white/60 space-y-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-8 text-brand-charcoal/5 -rotate-12 translate-x-4 -translate-y-4">
                     <Sparkles size={120} />
                  </div>
               <h3 className="font-sans font-black text-3xl uppercase tracking-tighter flex items-center gap-4 text-brand-charcoal relative z-10">
                 Скиллы <ArrowRight size={24} className="text-brand-vibrant-pink" />
               </h3>
               
               <div className="space-y-8 relative z-10">
                 {[
                   { label: "Креативный PR & Сторителлинг", val: "98%", color: "bg-brand-vibrant-pink" },
                   { label: "Работа со СМИ & Тексты", val: "95%", color: "bg-brand-blue" },
                   { label: "SMM & New Media", val: "90%", color: "bg-brand-charcoal" },
                   { label: "AI tools & Аналитика", val: "85%", color: "bg-brand-vibrant-pink" },
                   { label: "Event-маркетинг", val: "88%", color: "bg-brand-blue" },
                   { label: "Управление репутацией", val: "82%", color: "bg-brand-charcoal" }
                 ].map((s) => (
                   <div key={s.label}>
                     <div className="flex justify-between mb-3 text-[11px] font-black uppercase tracking-[0.3em] text-brand-grey/50">
                       <span>{s.label}</span>
                       <span className="text-brand-grey">{s.val}</span>
                     </div>
                     <div className="h-3 w-full bg-brand-charcoal/5 rounded-full overflow-hidden p-0.5 border border-brand-charcoal/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: s.val }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className={`h-full ${s.color} rounded-full shadow-sm`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-brand-charcoal/10 relative z-10 text-brand-grey/20">
                    <p className="text-[10px] font-bold uppercase tracking-widest leading-loose">
                      * Уровень «Продвинутый» подтвержден 4-летним опытом и академической базой.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-grey/40 mb-6 flex items-center gap-4">
                    Экосистема навыков <div className="h-[1px] flex-1 bg-gray-100" />
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Кризисный PR", "SMM", "Личный бренд", "Event-стратегии",
                      "Написание текстов", "Работа со СМИ", "Журналистика", 
                      "Редакторская деятельность", "Мониторинг СМИ", "Нейронные сети",
                      "Media Relations", "HR-брендинг", "Управление репутацией"
                    ].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest bg-brand-blue/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Life Outside Work */}
            <details className="group glass-card !bg-brand-beige/20 p-8 rounded-3xl border-none cursor-pointer overflow-hidden transition-all duration-500 open:pb-10">
              <summary className="flex items-center justify-between list-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center group-open:rotate-45 transition-transform shadow-lg shadow-brand-blue/20">
                    <Sparkles size={18} />
                  </div>
                  <span className="font-sans font-black uppercase tracking-tighter text-xl">За пределами офиса</span>
                </div>
                <div className="text-brand-blue font-black text-2xl group-open:hidden">+</div>
                <div className="text-brand-blue font-black text-2xl hidden group-open:block">−</div>
              </summary>
              <div className="mt-8 space-y-8">
                <p className="text-xs font-black uppercase tracking-widest text-brand-blue/60 border-b border-brand-blue/10 pb-4">Чтобы разгрузить голову от рабочих задач, в свободное время я...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-brand-charcoal leading-relaxed font-light">
                      <div className="space-y-6">
                        <ul className="space-y-6">
                          <li className="group/hobby">
                            <strong className="text-brand-blue uppercase text-[10px] font-black tracking-widest block mb-2 opacity-60 group-hover/hobby:opacity-100 transition-opacity">Шитье</strong> 
                            Чуть больше года назад у меня появилась швейная машинка. Постепенно она обросла десятками метров ткани, катушек с нитками, фурнитурой. Часть вещей, которые я ношу — построены и отшиты мною вручную!
                          </li>
                          <li className="group/hobby">
                            <strong className="text-brand-blue uppercase text-[10px] font-black tracking-widest block mb-2 opacity-60 group-hover/hobby:opacity-100 transition-opacity">Растения</strong> 
                            Развожу комнатные растения. Очень люблю тропические экземпляры. На сегодняшний день у меня — 15 кашпо.
                          </li>
                          <li className="group/hobby">
                            <strong className="text-brand-blue uppercase text-[10px] font-black tracking-widest block mb-2 opacity-60 group-hover/hobby:opacity-100 transition-opacity">Спорт</strong> 
                            Уже пять лет в моей жизни присутствует регулярный спорт. В основном это — силовые тренировки. Недавно добавила к физической нагрузке бассейн.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <ul className="space-y-6">
                          <li className="group/hobby">
                            <strong className="text-brand-blue uppercase text-[10px] font-black tracking-widest block mb-2 opacity-60 group-hover/hobby:opacity-100 transition-opacity">Чтение</strong> 
                            Всю жизнь любила книги. Быть может, поэтому меня и потянуло в гуманитарную стезю (я убеждена, что, на самом деле, у меня — технический склад ума). Сейчас перечитываю «Белую гвардию». Из лирики люблю Рождественского, Асадова, Ахматову, Гиппиус. Знаю ~ 200 стихотворений наизусть!
                          </li>
                          <li className="group/hobby">
                            <strong className="text-brand-blue uppercase text-[10px] font-black tracking-widest block mb-2 opacity-60 group-hover/hobby:opacity-100 transition-opacity">Вязание</strong> 
                            И спицами, и крючком. Из последних работ — шарф-капюшон на спицах и игрушечный гусь в винтажном стиле крючком.
                          </li>
                          <li className="group/hobby">
                            <strong className="text-brand-blue uppercase text-[10px] font-black tracking-widest block mb-2 opacity-60 group-hover/hobby:opacity-100 transition-opacity">Кулинария</strong> 
                            Люблю работать с выпечкой!
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
                
            {/* Compact Contacts Block */}
            <div id="contacts" className="pt-12 border-t border-gray-100 flex flex-col gap-8 scroll-mt-32">
              {[
                { label: "EMAIL", val: "ds_mamaeva@mail.ru", icon: Mail, color: "text-brand-blue" },
                { label: "TELEGRAM", val: "@d_s_m", icon: Send, color: "text-brand-blue" },
                { label: "PHONE", val: "8 911 244 10 34", icon: Phone, color: "text-brand-blue" }
              ].map(link => (
                <a key={link.label} href={link.label === "EMAIL" ? `mailto:${link.val}` : "#"} className="flex items-center gap-6 group">
                  <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center ${link.color} group-hover:bg-brand-charcoal group-hover:text-white transition-all shadow-sm`}>
                    <link.icon size={24} />
                  </div>
                  <div className="border-b border-brand-charcoal/5 pb-2 flex-1">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block">{link.label}</span>
                    <span className="text-xl font-bold text-brand-charcoal hover:text-brand-blue transition-colors tracking-tight">
                      {link.val}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            </div>
          </div>

          {/* Right Column: Professional Path */}
          <div className="lg:col-span-7">
            <div className="space-y-12">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-brand-charcoal/10">
                Карьерный <br /> <span className="text-brand-charcoal">Трек</span>
              </h3>
              
              <div className="space-y-2 mt-8">
                {experienceData.map((job, index) => {
                  const usePink = index % 2 !== 0; 
                  const tabBg = usePink ? 'bg-brand-pink' : 'bg-brand-blue';
                  const tabText = 'text-white';
                  const bodyBg = usePink ? 'bg-brand-offwhite' : 'bg-white';
                  
                  return (
                    <motion.div 
                      key={job.id} 
                      className="group relative pt-10"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Folder Tab */}
                      <div 
                        className={`absolute top-0 left-4 h-12 px-10 flex items-center rounded-t-[2rem] ${tabBg} ${tabText} font-black text-[10px] uppercase tracking-[0.2em] z-10 shadow-sm`}
                        style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}
                      >
                        {job.role}
                      </div>

                      {/* Folder Body */}
                      <details className={`group/folder relative z-0 ${bodyBg} p-10 rounded-b-[3rem] rounded-tr-[3rem] rounded-tl-[0.5rem] border-2 border-brand-charcoal/10 cursor-pointer shadow-2xl transition-all duration-500 open:pb-16 ${usePink ? 'group-hover:border-brand-pink' : 'group-hover:border-brand-blue'}`}>
                        <summary className="list-none flex justify-between items-center">
                          <div className="space-y-2">
                            <h4 className="text-3xl font-black uppercase tracking-tighter text-brand-charcoal leading-tight">{job.company}</h4>
                            <div className="flex items-center gap-4">
                              <span className={`text-[11px] font-black ${usePink ? 'text-brand-vibrant-pink' : 'text-brand-blue'} uppercase tracking-[0.4em]`}>{job.period}</span>
                              <div className="h-[2px] w-12 bg-brand-charcoal/10" />
                              <span className="text-[11px] font-bold text-brand-charcoal/30 uppercase tracking-[0.4em]">{job.id.toString().padStart(2, '0')} STAGE</span>
                            </div>
                          </div>
                          <div className={`w-14 h-14 rounded-full border-2 border-brand-charcoal/5 flex items-center justify-center ${usePink ? 'text-brand-pink' : 'text-brand-blue'} group-open/folder:rotate-180 transition-all duration-500 shadow-sm group-hover:bg-brand-charcoal group-hover:text-white group-hover:border-brand-charcoal`}>
                            <ChevronDown size={28} />
                          </div>
                        </summary>

                        <div className="mt-12 space-y-12">
                          {/* Tasks */}
                          <div className="space-y-8">
                            <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-charcoal flex items-center gap-4">
                              ОСНОВНЫЕ ЗАДАЧИ <div className="h-[1px] flex-1 bg-brand-charcoal/10" />
                            </h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                              {job.tasks.map((task, idx) => (
                                <li key={idx} className="text-sm text-brand-charcoal/80 leading-relaxed font-medium relative pl-8 flex items-start group/task">
                                  <span className={`absolute left-0 top-1.5 w-3 h-3 ${usePink ? 'bg-brand-pink' : 'bg-brand-blue'} rounded-full grow-0 shrink-0 group-hover/task:scale-125 transition-transform`} />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Results */}
                          {job.results && job.results.length > 0 && (
                            <div className="space-y-8">
                              <h5 className="text-[11px] font-black uppercase tracking-[0.4em] ${usePink ? 'text-brand-vibrant-pink' : 'text-brand-blue'} flex items-center gap-4">
                                ДОСТИГНУТЫЕ РЕЗУЛЬТАТЫ <div className="h-[1px] flex-1 ${usePink ? 'bg-brand-pink/20' : 'bg-brand-blue/20'}" />
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {job.results.map((res, idx) => (
                                  <div key={idx} className={`p-8 rounded-[2.5rem] ${usePink ? 'bg-brand-pink/5 border-brand-pink/10' : 'bg-brand-blue/5 border-brand-blue/10'} border-2 relative overflow-hidden group/res`}>
                                    <div className="absolute -top-4 -right-4 ${usePink ? 'text-brand-pink/10' : 'text-brand-blue/10'} rotate-12 group-hover/res:scale-110 transition-transform">
                                      <Sparkles size={60} />
                                    </div>
                                    <span className={`block ${usePink ? 'text-brand-pink' : 'text-brand-blue'} font-black text-xs mb-3 uppercase tracking-[0.2em]`}>{res.label}</span>
                                    <p className="text-xs text-brand-charcoal/70 leading-relaxed font-serif italic">{res.text}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Ecosystem / Tags */}
                          {job.tags && (
                            <div className="pt-4 border-t border-gray-50 flex flex-wrap gap-2">
                              {job.tags.map(tag => (
                                <span key={tag} className={`px-3 py-1.5 ${usePink ? 'bg-brand-pink/5 text-brand-pink border-brand-pink/10' : 'bg-brand-blue/5 text-brand-blue border-brand-blue/10'} text-[8px] font-black uppercase tracking-widest rounded-lg border`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </details>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-10 rounded-[3rem] bg-brand-blue/5 border border-brand-blue/10 flex items-start gap-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 text-brand-blue/10 group-hover:scale-110 transition-transform">
                    <Sparkles size={100} />
                 </div>
                 <div className="relative z-10 space-y-2">
                    <p className="text-sm font-black text-brand-blue uppercase tracking-[0.2em] leading-tight mb-2">Общий стаж в медиа: 4 года, 10 месяцев</p>
                    <p className="text-xs text-brand-grey/50 leading-relaxed italic max-w-sm">
                      От региональных СМИ до федеральных повесток и маркетинговых агентств. Умею быстро адаптироваться под любой масштаб задач.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 02. Portfolio */}
      <Section id="portfolio" title="Мои Кейсы" number="02" variant="dark">
        <div className="flex flex-col gap-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                layoutId={`project-${project.id}`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                whileHover={{ y: -10 }}
                className={`group relative p-12 rounded-[4rem] flex flex-col justify-between cursor-pointer border-2 transition-all duration-500 min-h-[400px] overflow-hidden ${expandedProject === project.id ? 'border-brand-vibrant-pink bg-white/90 ring-4 ring-brand-vibrant-pink/10 shadow-2xl backdrop-blur-md' : 'border-white/20 bg-white/10 hover:bg-brand-pink/10 hover:border-brand-vibrant-pink/30 shadow-xl'}`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-6xl font-black opacity-20 ${expandedProject === project.id ? 'text-brand-vibrant-pink' : 'text-white'}`}>{project.id}</span>
                  <div className={`w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white ${expandedProject === project.id ? 'bg-brand-vibrant-pink text-white rotate-90' : 'group-hover:bg-brand-vibrant-pink group-hover:text-white'} transition-all duration-500`}>
                    <ArrowRight size={24} />
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className={`text-4xl font-black uppercase tracking-tighter leading-[0.8] ${expandedProject === project.id ? 'text-brand-vibrant-pink' : 'text-white'} group-hover:text-brand-vibrant-pink transition-colors`}>{project.title}</h3>
                  <p className={`text-sm leading-relaxed font-light italic max-w-sm ${expandedProject === project.id ? 'text-brand-charcoal' : 'text-white/60'}`}>{project.desc}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-20 transition-all scale-150 rotate-12">
                  <Sparkles size={200} />
                </div>
              </motion.div>
            ))}
          </div>

          <div ref={detailsRef} className="scroll-mt-40">
            <AnimatePresence mode="wait">
              {expandedProject && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                <div className="glass-card !bg-white p-12 lg:p-24 rounded-[5rem] border-none shadow-[20px_20px_0px_0px_rgba(145,176,212,0.3)] relative text-brand-charcoal overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 text-brand-blue/10 -rotate-12">
                    <Sparkles size={200} />
                  </div>
                  <button 
                    onClick={() => setExpandedProject(null)}
                    className="absolute top-12 right-12 text-[11px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 hover:text-brand-blue transition-colors flex items-center gap-3 z-20"
                  >
                    CLOSE PROJECT <X size={20} />
                  </button>
                  {projects.find(p => p.id === expandedProject)?.details || (
                     <div className="py-20 text-center">
                        <p className="text-brand-grey/30 font-black uppercase tracking-widest text-xs">Информация в процессе наполнения...</p>
                     </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
      </Section>

      <footer className="py-32 px-6 bg-white/40 backdrop-blur-md text-brand-blue flex flex-col items-center border-t border-brand-blue/10">
        <div className="w-full max-w-6xl h-[1px] bg-brand-blue/10 mb-12" />
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl items-center gap-8 text-[11px] font-black uppercase tracking-[0.6em] text-brand-blue/40">
           <p>&copy; 2026 DARIA MAMAEVA</p>
           <p className="text-brand-vibrant-pink/60">CREATOR • JESTER • STRATEGIST</p>
           <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-brand-blue transition-colors">SCROLL TOP ↑</button>
        </div>
      </footer>
    </main>
  );
}

