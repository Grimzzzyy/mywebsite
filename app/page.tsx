export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F5F1] text-[#1C1C1C] p-8 md:p-24 font-sans selection:bg-[#D94F3D] selection:text-white">
      <div className="max-w-3xl mx-auto space-y-16">
        
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Digital Workspace</h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
            Documenting my explorations in Neuro AI, machine learning architectures, and building scalable tech.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-[#EAE8E3] pb-2">Today I Learned</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAE8E3]">
            <p className="text-sm text-[#7A7A7A] mb-3 font-mono">Status: Awaiting Database</p>
            <p className="text-[#1C1C1C]">
              This space will automatically populate with your daily entries once we connect the admin dashboard.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-[#EAE8E3] pb-2">Connect</h2>
          <div className="flex flex-col space-y-3 font-mono text-sm">
            <a href="#" className="hover:text-[#D94F3D] transition-colors">→ Email</a>
            <a href="#" className="hover:text-[#D94F3D] transition-colors">→ GitHub</a>
            <a href="#" className="hover:text-[#D94F3D] transition-colors">→ X / Twitter</a>
          </div>
        </section>

      </div>
    </main>
  );
}