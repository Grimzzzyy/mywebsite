import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ophybufcjrrlhchqzcwv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waHlidWZjanJybGhjaHF6Y3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NjM1NzcsImV4cCI6MjEwNTAzOTU3N30.2AyrzPyk2m5KExgVce-h3MrFXCnqw8iNHfqcUCk-7hs'

export const supabase = createClient(supabaseUrl, supabaseKey)