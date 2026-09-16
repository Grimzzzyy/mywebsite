'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AdminDashboard() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // CHANGE YOUR PASSWORD HERE:
    if (password === 'secret123') {
      setIsUnlocked(true);
    } else {
      alert('Access Denied: Incorrect Password');
      setPassword('');
    }
  }

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

  // --- THE LOCK SCREEN ---
  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-[#F6F5F1] flex items-center justify-center p-8 font-sans">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-sm border border-[#EAE8E3] space-y-4 w-full max-w-sm">
          <h1 className="text-2xl font-bold tracking-tight text-center">Admin Access</h1>
          <p className="text-sm text-[#4A4A4A] text-center mb-4">Enter passcode to unlock the control room.</p>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#EAE8E3] rounded-md p-2 bg-[#F6F5F1] focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]"
            placeholder="Password..."
            required
          />
          <button type="submit" className="w-full bg-[#1C1C1C] text-white py-2 rounded-md hover:bg-[#4A4A4A] transition-colors font-medium">
            Unlock
          </button>
        </form>
      </main>
    );
  }

  // --- THE CONTROL ROOM (Only shows if unlocked) ---
  return (
    <main className="min-h-screen bg-[#F6F5F1] text-[#1C1C1C] p-8 md:p-24 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Admin Control Room</h1>
          <p className="text-[#4A4A4A] mt-2">Publish your latest explorations, tech architectures, and general thoughts here.</p>
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