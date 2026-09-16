export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-6xl mx-auto">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#d9cfbc]">
        <span className="font-mono-custom text-sm font-bold tracking-widest uppercase">Shashank S<span className="text-[#c0392b]">_</span></span>
        <div className="flex gap-8 font-mono-custom text-xs uppercase tracking-widest text-[#7a6a58]">
          <a href="#til" className="hover:text-[#1a1410] transition-colors">TIL</a>
          <a href="#connect" className="hover:text-[#1a1410] transition-colors">Connect</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="w-full pt-20 pb-16">
        <p className="font-mono-custom text-xs tracking-[0.2em] uppercase text-[#c0392b] mb-6">// AI · Neuroscience · Machine Learning · Builder</p>
        <h1 className="font-mono-custom text-5xl md:text-7xl font-bold text-[#1a1410] mb-2">Shashank S<span className="text-[#c0392b] animate-pulse">_</span></h1>
        <p className="font-serif-custom text-xl md:text-3xl italic font-light text-[#3d342a] mb-10 max-w-2xl">
          Exploring the intersection of artificial and biological intelligence, and building scalable tech.
        </p>
      </div>

      {/* TIL SECTION (Future Notion Feed) */}
      <section id="til" className="w-full border-t border-[#d9cfbc] pt-16">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="font-mono-custom text-[0.65rem] tracking-[0.2em] uppercase text-[#c0392b]">§ 01</span>
          <h2 className="font-mono-custom text-2xl font-bold text-[#1a1410]">Digital Workspace</h2>
          <div className="flex-1 h-px bg-[#d9cfbc]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-white border border-[#d9cfbc] p-7 hover:-translate-y-1 transition-transform cursor-pointer relative group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#c0392b] group-hover:h-full transition-all duration-300"></div>
              <div className="font-mono-custom text-[0.65rem] text-[#7a6a58] mb-3">Status: Awaiting Notion CMS</div>
              <h3 className="font-serif-custom text-xl font-bold text-[#1a1410] mb-2">Your Notion entries will appear here.</h3>
              <p className="text-sm text-[#7a6a58]">Once we connect the API, any rich text, images, or code blocks you drop into Notion will instantly render on this card.</p>
           </div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section id="connect" className="w-full border-t border-[#d9cfbc] pt-16 mt-20">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="font-mono-custom text-[0.65rem] tracking-[0.2em] uppercase text-[#c0392b]">§ 02</span>
          <h2 className="font-mono-custom text-2xl font-bold text-[#1a1410]">Connect</h2>
          <div className="flex-1 h-px bg-[#d9cfbc]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d9cfbc] border border-[#d9cfbc]">
          <a href="mailto:shashanksarojai@gmail.com" target="_blank" className="bg-[#faf7f2] p-8 hover:bg-[#ede6d6] transition-colors flex flex-col gap-3">
            <span className="font-mono-custom text-[0.7rem] tracking-widest uppercase text-[#1a1410]">Email</span>
            <span className="font-serif-custom text-sm text-[#7a6a58]">shashanksarojai@gmail.com</span>
          </a>
          <a href="https://github.com/Grimzzzyy" target="_blank" className="bg-[#faf7f2] p-8 hover:bg-[#ede6d6] transition-colors flex flex-col gap-3">
            <span className="font-mono-custom text-[0.7rem] tracking-widest uppercase text-[#1a1410]">GitHub</span>
            <span className="font-serif-custom text-sm text-[#7a6a58]">@Grimzzzyy</span>
          </a>
          <a href="https://x.com/Sha8hankk" target="_blank" className="bg-[#faf7f2] p-8 hover:bg-[#ede6d6] transition-colors flex flex-col gap-3">
            <span className="font-mono-custom text-[0.7rem] tracking-widest uppercase text-[#1a1410]">X / Twitter</span>
            <span className="font-serif-custom text-sm text-[#7a6a58]">@Sha8hankk</span>
          </a>
        </div>
      </section>

    </main>
  );
}