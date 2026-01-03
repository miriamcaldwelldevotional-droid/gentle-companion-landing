import React from 'react';
import { BookOpen, Heart, CloudSun, Feather, CheckCircle2, Leaf, Download, Flower } from 'lucide-react';

// --- Components ---

const Hero = () => (
  <header className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center text-center bg-gradient-to-b from-blue-50/40 via-white to-lilac-50/30 overflow-hidden">
    {/* Decorative background element: Subtle Watercolor feel */}
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none blur-3xl">
       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
       <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-lilac-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-3xl mx-auto fade-in-up">
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm ring-1 ring-lilac-100">
          <Leaf className="w-8 h-8 text-sage-500" strokeWidth={1.5} />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-800 tracking-tight leading-tight mb-6">
        A Gentle Companion for Your Walk with God
      </h1>
      <h2 className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
        A free Scripture-based guide created to support you as you continue walking with God—without pressure, guilt, or expectations.
      </h2>
      <div className="mt-10">
        <a 
          href="#download" 
          className="inline-block px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 font-medium tracking-wide text-sm md:text-base border border-sage-500"
        >
          Begin Your Journey
        </a>
      </div>
    </div>
  </header>
);

const SectionConnection = () => (
  <section className="py-20 px-6 bg-white relative overflow-hidden">
    {/* Subtle decorative flower hint in background */}
    <div className="absolute -right-20 top-20 text-lilac-50 opacity-40">
      <Flower size={400} strokeWidth={0.5} />
    </div>

    <div className="max-w-4xl mx-auto md:flex md:items-center md:gap-16">
      
      {/* Book Cover Container */}
      <div className="md:w-5/12 mb-12 md:mb-0 relative flex justify-center fade-in-up">
        {/* Updated for 3D Mockup Image */}
        <div className="relative w-full flex justify-center items-center">
          {/* Soft glow behind the book */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-sage-100/50 blur-[40px] rounded-full pointer-events-none"></div>
          
          <img 
            src="./book-cover.png" 
            alt="Walking with God, Gently - Daily Devotional for Women" 
            className="relative z-10 w-full max-w-[350px] h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      <div className="md:w-7/12 text-center md:text-left relative z-10">
        <h3 className="text-2xl font-serif text-stone-800 mb-6 italic">
          If you purchased <span className="text-sage-700 font-normal">"Walking with God, Gently"</span>, this companion was created especially for you.
        </h3>
        <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
          Faith does not grow through striving or keeping up. It grows through grace, honesty, and God’s faithful presence in everyday life.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
          This free companion guide is meant to offer quiet space for reflection—nothing to complete, nothing to prove.
        </p>
        <div className="inline-block p-4 bg-lilac-50/50 rounded-2xl border border-lilac-100 mt-2">
            <p className="text-stone-700 font-medium font-serif italic text-lg text-center md:text-left">
            "You are invited to use it in a way that serves you best."
            </p>
        </div>
      </div>
    </div>
  </section>
);

const SectionFeatures = () => {
  const features = [
    { icon: <BookOpen className="w-6 h-6" />, text: "4 weeks of carefully selected Scripture" },
    { icon: <Heart className="w-6 h-6" />, text: "Gentle reflection questions" },
    { icon: <CloudSun className="w-6 h-6" />, text: "Simple prayer prompts" },
    { icon: <Feather className="w-6 h-6" />, text: "Space to pause and reflect" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-stone-50 to-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-stone-800 mb-4">What You’ll Find Inside</h2>
        <p className="text-stone-500 mb-12 font-light text-lg max-w-2xl mx-auto">
          A Gentle Companion is a short, Scripture-based guide designed to walk alongside the book and support your ongoing journey with God.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-lilac-50 hover:border-sage-200 flex items-center gap-4 text-left transition-all hover:-translate-y-1 duration-300 group">
              <div className="p-3 bg-sage-50 text-sage-600 group-hover:bg-lilac-50 group-hover:text-lilac-600 rounded-full transition-colors">
                {item.icon}
              </div>
              <span className="text-stone-700 font-medium group-hover:text-stone-900">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sage-50/30 to-lilac-50/30 p-8 rounded-2xl border border-white shadow-sm">
          <p className="text-xl font-serif text-stone-700 italic">
            "A calm, unhurried approach to faith."
          </p>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto my-4 opacity-60"></div>
          <p className="text-stone-600">
            This is not a program or a challenge. <br/>
            It is simply a place to return to God’s Word with openness and peace.
          </p>
        </div>
      </div>
    </section>
  );
};

const SectionReassurance = () => (
  <section className="py-20 px-6 bg-white relative">
     <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lilac-50 via-white to-transparent"></div>
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <div className="mb-8 flex justify-center">
        <Feather className="w-10 h-10 text-lilac-300 opacity-60" strokeWidth={1} />
      </div>
      
      <h2 className="text-3xl font-serif text-stone-800 mb-8">Grace allows for flexibility</h2>
      
      <div className="space-y-4 text-stone-700 text-lg font-light mb-10">
        <p>There is no required pace.</p>
        <p>There is no order you must follow.</p>
        <p>There is nothing you need to “keep up with.”</p>
      </div>

      <div className="bg-white/60 backdrop-blur-sm border border-stone-100 p-8 rounded-2xl shadow-sm max-w-xl mx-auto">
        <p className="font-serif text-xl text-stone-800 mb-6">You are free to:</p>
        <ul className="space-y-3 text-left inline-block">
          <li className="flex items-center gap-3 text-stone-600">
            <CheckCircle2 className="w-5 h-5 text-sage-500 flex-shrink-0" />
            <span>Use one week at a time</span>
          </li>
          <li className="flex items-center gap-3 text-stone-600">
            <CheckCircle2 className="w-5 h-5 text-sage-500 flex-shrink-0" />
            <span>Revisit a section when you need it</span>
          </li>
          <li className="flex items-center gap-3 text-stone-600">
            <CheckCircle2 className="w-5 h-5 text-sage-500 flex-shrink-0" />
            <span>Set this aside and return later</span>
          </li>
        </ul>
      </div>
      
      <p className="mt-10 text-stone-500 italic">Faith grows differently in every season.</p>
    </div>
  </section>
);

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6 bg-stone-50">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50 text-center relative overflow-hidden border border-stone-100">
        {/* Decorative circle */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-lilac-50 rounded-full z-0 mix-blend-multiply"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sage-50 rounded-full z-0 mix-blend-multiply"></div>

        <div className="relative z-10">
          <div className="inline-block p-3 bg-sage-50 rounded-full mb-6 ring-1 ring-sage-100">
            <Download className="w-6 h-6 text-sage-700" />
          </div>
          <h2 className="text-3xl font-serif text-stone-800 mb-4">Receive Your Free Companion Guide</h2>
          <p className="text-stone-600 mb-8 font-light">
            This resource is offered as a gift—no pressure, no obligations.<br />
            Simply click the button below to download your copy directly.
          </p>

          <a 
            href="#" // <--- INSERISCI QUI IL LINK DEL TUO PDF
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-sage-600 hover:bg-sage-700 text-white rounded-xl transition-all duration-300 font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 tracking-wide"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF Guide</span>
          </a>
          
          <p className="text-xs text-stone-400 mt-4">
            No email required. We respect your peace and privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-white text-center border-t border-stone-100">
    <div className="max-w-xl mx-auto px-6">
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-serif text-stone-700 mb-2">
          God is not rushing you.
        </h3>
        <p className="text-stone-500 italic font-light">
          He is walking with you—patiently and faithfully.
        </p>
      </div>
      <div className="w-8 h-8 mx-auto text-sage-300 mb-8 opacity-60">
        <Leaf strokeWidth={1.5} />
      </div>
      <p className="text-xs text-stone-400">
        &copy; {new Date().getFullYear()} A Gentle Companion. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-lilac-200 selection:text-lilac-900">
      <Hero />
      <SectionConnection />
      <SectionFeatures />
      <SectionReassurance />
      <DownloadSection />
      <Footer />
    </div>
  );
}