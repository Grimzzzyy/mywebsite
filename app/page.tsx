import { supabase } from './lib/supabase';

export const revalidate = 0; 

export default async function Home() {
  const { data: entries } = await supabase
    .from('til_entries')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="min-h-screen bg-[#F6F5F1] text-[#1C1C1C] p-8 md:p-24 font-sans selection:bg-[#D94F3D] selection:text-white">
      <div className="max-w-3xl mx-auto space-y-16">
        
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Shashank S</h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
            Documenting my explorations, AI research, and building scalable tech.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-[#EAE8E3] pb-2">Today I Learned</h2>
          
          <div className="space-y-6">
            {entries && entries.length > 0 ? (
              entries.map((entry) => (
                <div key={entry.id} className="bg-white p-6 rounded-lg shadow-sm border border-[#EAE8E3]">
                  <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
                  <p className="text-[#1C1C1C] whitespace-pre-wrap">{entry.content}</p>
                  <p className="text-xs text-[#7A7A7A] mt-4 font-mono">
                    {new Date(entry.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAE8E3]">
                <p className="text-sm text-[#7A7A7A] mb-3 font-mono">Status: Awaiting Database</p>
                <p className="text-[#1C1C1C]">
                  No posts yet. Head to the Admin panel to write your first one!
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-[#EAE8E3] pb-2">Connect</h2>
          <div className="flex flex-col space-y-3 font-mono text-sm">
            <a href="mailto:shashanksarojai@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D94F3D] transition-colors">→ Email</a>
            <a href="https://github.com/Grimzzzyy" target="_blank" rel="noopener noreferrer" className="hover:text-[#D94F3D] transition-colors">→ GitHub</a>
            <a href="https://x.com/Sha8hankk" target="_blank" rel="noopener noreferrer" className="hover:text-[#D94F3D] transition-colors">→ X / Twitter</a>
          </div>
        </section>

      </div>
    </main>
  );
}