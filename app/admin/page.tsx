'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Publishing...');
    
    const { error } = await supabase
      .from('til_entries')
      .insert([{ title, content }]);

    if (error) {
      setStatus('ERROR DETAILS: ' + error.message);
    } else {
      setStatus('Post Published Successfully! 🎉');
      setTitle('');
      setContent('');
    }
  }

  return (
    <main className="min-h-screen bg-[#F6F5F1] text-[#1C1C1C] p-8 md:p-24 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Admin Control Room</h1>
          <p className="text-[#4A4A4A] mt-2">Publish your latest explorations, AI research, and general thoughts here.</p>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAE8E3]">
          <h2 className="text-xl font-semibold mb-4 border-b border-[#EAE8E3] pb-2">New "Today I Learned" Entry</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#4A4A4A]">Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-[#EAE8E3] rounded-md p-2 bg-[#F6F5F1] focus:outline-none focus:ring-2 focus:ring-[#D94F3D]"
                placeholder="What did you learn today?"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-[#4A4A4A]">Content</label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-[#EAE8E3] rounded-md p-2 h-40 bg-[#F6F5F1] focus:outline-none focus:ring-2 focus:ring-[#D94F3D]"
                placeholder="Break down the concept, architecture, or any cool idea..."
                required
              />
            </div>

            <button 
              type="submit" 
              className="bg-[#1C1C1C] text-white px-6 py-2 rounded-md hover:bg-[#4A4A4A] transition-colors font-medium"
            >
              Publish Post
            </button>
            
            {status && (
              <div className="mt-4 p-3 bg-[#F6F5F1] border border-[#EAE8E3] rounded-md">
                <p className="text-sm font-mono font-bold text-[#D94F3D]">{status}</p>
              </div>
            )}
          </form>
        </div>

      </div>
    </main>
  );
}